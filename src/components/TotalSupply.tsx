type TotalSupplyInfo = {
  total: number
  ordinal: number
}

type TotalSupplyProps = {
  clusterName: string
  apiUrl: string
  isGlobalSnapshot?: boolean
}

export async function TotalSupply({
  clusterName,
  apiUrl,
  isGlobalSnapshot,
}: TotalSupplyProps) {
  const url = isGlobalSnapshot
    ? `${apiUrl}/dag/total-supply`
    : `${apiUrl}/currency/total-supply`

  const totalSupplyInfoResponse = await fetch(url, {
    headers: {
      Accept: 'application/json',
    },
    cache: 'no-store',
    next: {
      revalidate: 5,
    },
  })

  const totalSupplyInfo: TotalSupplyInfo = await totalSupplyInfoResponse.json()

  return (
    <div
      className={`rounded-lg ${
        isGlobalSnapshot
          ? 'bg-[#4D515A] dark:bg-[#40454E] text-white'
          : 'bg-[#B9DD6D] text-black'
      }`}
    >
      <div className="flex flex-col p-6">
        <div className="overflow-x-auto">
          <div className="inline-block min-w-full align-middle">
            <div className="overflow-hidden">
              <div className="grid w-full grid-cols-2">
                <div>
                  <h3 className="text-lg font-semibold">{clusterName}</h3>
                </div>
                <div className="text-end flex justify-end align-center">
                  {totalSupplyInfo.ordinal}
                </div>
              </div>
              <div className="grid w-full grid-cols-1 text-center mt-[31px]">
                <div className="text-[24px]">
                  {new Intl.NumberFormat('en-US').format(
                    totalSupplyInfo.total / 1e8,
                  )}
                </div>
                <div className="text-[11px]">
                  {isGlobalSnapshot
                    ? 'Total DAG Supply'
                    : 'Total L0 Token Supply'}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
