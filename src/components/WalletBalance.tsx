type WalletBalanceInfo = {
  [address: string]: number
}

type SnapshotInfo = {
  value: {
    info: {
      balances: WalletBalanceInfo
    }
  }
}
type WalletBalanceProps = {
  clusterName: string
  apiUrl: string
  isGlobalSnapshot: boolean
}

export async function WalletBalance({
  clusterName,
  apiUrl,
  isGlobalSnapshot,
}: WalletBalanceProps) {
  const url = isGlobalSnapshot
    ? `${apiUrl}/global-snapshots/latest`
    : `${apiUrl}/snapshots/latest`

  const snapshotsResponse = await fetch(url, {
    headers: {
      Accept: 'application/json',
    },
    cache: 'no-store',
    next: {
      revalidate: 5,
    },
  })

  const snapshotInfo: SnapshotInfo = await snapshotsResponse.json()

  return (
    <section className="flex flex-col content-center justify-center">
      <h2 className="px-6 mt-10 mb-5 text-2xl font-bold">
        Balances {clusterName}
      </h2>
      <table className="w-full text-sm text-left">
        <thead className="text-xs uppercase">
          <tr>
            <th scope="col" className="px-6 py-3">
              Address
            </th>
            <th scope="col" className="px-6 py-3">
              Balance
            </th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(snapshotInfo.value.info.balances).map((key) => (
            <tr key={key} className="border-b">
              <td
                scope="row"
                className="px-6 py-4 font-medium whitespace-nowrap"
              >
                {key}
              </td>
              <td scope="row">{snapshotInfo.value.info.balances[key]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  )
}
