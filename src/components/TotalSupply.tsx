type TotalSupplyInfo = {
  total: number
  ordinal: number
}
export async function TotalSupply() {
  const totalSupplyInfoResponse = await fetch(
    `${process.env.L0_CURRENCY_URL}/currency/total-supply`,
    {
      headers: {
        Accept: 'application/json',
      },
      cache: 'no-store',
      next: {
        revalidate: 5,
      },
    },
  )

  const totalSupplyInfo: TotalSupplyInfo = await totalSupplyInfoResponse.json()

  return (
    <section className="mt-10 flex flex-col items-start px-6 justify-center">
      <h2 className="text-2xl font-bold">Total Supply Info</h2>
      <table className="w-full text-sm text-left">
        <thead className="text-xs uppercase py-4">
          <tr>
            <th scope="col" className="py-3 w-64">
              Total
            </th>
            <th scope="col">Ordinal</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b">
            <td scope="row ">{totalSupplyInfo.total}</td>
            <td scope="row">{totalSupplyInfo.ordinal}</td>
          </tr>
        </tbody>
      </table>
    </section>
  )
}
