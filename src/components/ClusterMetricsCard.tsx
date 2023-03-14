type NodeContentProps = {
  nodeId: string
  ipAddress: string
  state: string
}

type ClusterMetricsCardProps = {
  clusterName: string
  nodesContent: NodeContentProps[]
}

const nodeStates = {
  READY: 'READY',
}

export function ClusterMetricsCard({
  clusterName,
  nodesContent,
}: ClusterMetricsCardProps) {
  return (
    <div className="rounded-lg bg-[#E0E0E4] shadow dark:bg-[#D2D2D6]">
      <div className="flex flex-col p-6">
        <div className="flex">
          <div className="inline-block w-full">
            <h3 className="text-2xl font-display dark:text-black text-black leading-[1.2rem] mb-[5px]">
              Cluster Metrics
            </h3>
            <span className="font-label font-medium uppercase text-xs tracking-tight text-black/50">
              {clusterName} / {nodesContent.length}
            </span>
          </div>
          <div>
            <svg
              width="14"
              height="14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="2.667" cy="2.667" r="2.667" fill="#000" />
              <circle cx="11.334" cy="2.667" r="2.667" fill="#000" />
              <circle cx="11.334" cy="11.334" r="2.667" fill="#000" />
            </svg>
          </div>
        </div>
      </div>
      <div className="overflow-x-auto max-h-[500px]">
        <table className="mb-6 w-full table-auto text-left border-0">
          <thead className="border-b border-black/30 sticky top-0 z-10 border-separate bg-[#E0E0E4] shadow dark:bg-[#D2D2D6]">
            <tr>
              <th className="headerRow">Node ID</th>
              <th className="headerRow">IP Address</th>
              <th></th>
            </tr>
          </thead>
          <tbody className="overflow-y-auto">
            {nodesContent.map((content) => (
              <tr key={content.ipAddress} className="tableRow">
                <td className="dataRow">{content.nodeId}</td>
                <td className="dataRow">{content.ipAddress}</td>
                <td className="pb-2">
                  {content.state.toUpperCase() === nodeStates.READY ? (
                    <span className="label badgeReady">{content.state}</span>
                  ) : (
                    <span className="label">{content.state}</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
