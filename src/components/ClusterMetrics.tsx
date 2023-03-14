import { ClusterMetricsCard } from './ClusterMetricsCard'

type ClusterInfo = {
  id: string
  ip: string
  publicPort: number
  p2pPort: number
  session: string
  state: string
}
type ClusterInfoProps = {
  clusterName: string
  apiUrl: string
}

export async function ClusterMetrics({
  clusterName,
  apiUrl,
}: ClusterInfoProps) {
  const clusterInfoResponse = await fetch(`${apiUrl}/cluster/info`, {
    headers: {
      Accept: 'application/json',
    },
    cache: 'no-store',
    next: {
      revalidate: 5,
    },
  })

  const clusterInfo: ClusterInfo[] = await clusterInfoResponse.json()
  const clusterInfoCard = clusterInfo.map((info) => {
    return {
      nodeId: info.id.replace(/(.{5}).*?(.{5})$/, '$1•••$2'),
      ipAddress: info.ip,
      state: info.state,
    }
  })

  return (
    <ClusterMetricsCard
      clusterName={clusterName}
      nodesContent={clusterInfoCard}
    />
  )
}
