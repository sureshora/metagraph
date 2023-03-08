import { WalletBalance } from '@/components/WalletBalance'
import { Cluster } from '@/components/Cluster'
import { Snapshot } from '@/components/Snapshot'
import { TotalSupply } from '@/components/TotalSupply'

export const metadata = {
  title: 'Dashboard',
  description: 'Main Dashboard',
}

export default async function Home() {
  if (
    !process.env.L1_CURRENCY_URL ||
    !process.env.L0_CURRENCY_URL ||
    !process.env.L0_GLOBAL_URL
  ) {
    return (
      <h1 className="text-3xl font-bold underline">
        You should provide the: L0_CURRENCY_URL, L1_CURRENCY_URL, and
        L0_GLOBAL_URL as env variables
      </h1>
    )
  }

  return (
    <div className="rounded flex-col bg-background-white justify-center content-center w-7/12 min-h-screen">
      {/* @ts-expect-error Async Server Component */}
      <Cluster apiUrl={process.env.L0_GLOBAL_URL} clusterName="L0 Global" />

      {/* @ts-expect-error Async Server Component */}
      <Cluster apiUrl={process.env.L0_CURRENCY_URL} clusterName="L0 Currency" />

      {/* @ts-expect-error Async Server Component */}
      <Cluster apiUrl={process.env.L1_CURRENCY_URL} clusterName="L1 Currency" />

      {/* @ts-expect-error Async Server Component */}
      <Snapshot
        apiUrl={process.env.L0_GLOBAL_URL}
        clusterName="L0 Global"
        isGlobalSnapshot
      />

      {/* @ts-expect-error Async Server Component */}
      <Snapshot
        apiUrl={process.env.L0_CURRENCY_URL}
        clusterName="L0 Currency"
      />

      {/* @ts-expect-error Async Server Component */}
      <TotalSupply />

      {/* @ts-expect-error Async Server Component */}
      <WalletBalance
        apiUrl={process.env.L0_GLOBAL_URL}
        clusterName="L0 Global"
        isGlobalSnapshot
      />

      {/* @ts-expect-error Async Server Component */}
      <WalletBalance
        apiUrl={process.env.L0_CURRENCY_URL}
        clusterName="L0 Currency"
      />
    </div>
  )
}
