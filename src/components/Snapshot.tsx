type SnapshotProps = {
  clusterName: string
  apiUrl: string
  isGlobalSnapshot: boolean
}

type SnapshotValue = {
  ordinal: number
  lastSnapshotHash: string
}

type SnapshotInfo = {
  value: SnapshotValue
}

export async function Snapshot({
  clusterName,
  apiUrl,
  isGlobalSnapshot,
}: SnapshotProps) {
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
    <section className="mt-5 flex flex-col items-start px-6 justify-center">
      <h2 className="mt-5 mb-5 text-2xl font-bold">
        Snapshot Infos: {clusterName}
      </h2>
      <table className="w-full text-sm text-left">
        <thead className="text-xs uppercase">
          <tr>
            <th scope="col" className="py-3">
              Ordinal
            </th>
            <th scope="col" className="py-3">
              Last snapshot hash
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b">
            <td scope="row" className="py-4 font-medium whitespace-nowrap">
              {snapshotInfo.value.ordinal}
            </td>
            <td scope="row">{snapshotInfo.value.lastSnapshotHash}</td>
          </tr>
        </tbody>
      </table>
    </section>
  )
}
