import { ClusterMetrics } from '@/components/ClusterMetrics'
import { LatestSnapshot } from '@/components/LatestSnapshot'
import { Snapshots } from '@/components/Snapshots'
import { TotalSupply } from '@/components/TotalSupply'
import { WalletBalance } from '@/components/WalletBalance'

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
    <div className="w-full bg-background-light dark:bg-background-dark">
      <section className="grid grid-cols-1 gap-5 xl:grid-cols-3 xl:grid-gap-1">
        {/* @ts-expect-error Async Server Component */}
        <ClusterMetrics
          apiUrl={process.env.L0_GLOBAL_URL}
          clusterName="L0 Global"
        />
        {/* @ts-expect-error Async Server Component */}
        <ClusterMetrics
          apiUrl={process.env.L0_CURRENCY_URL}
          clusterName="L0 Currency"
        />
        {/* @ts-expect-error Async Server Component */}
        <ClusterMetrics
          apiUrl={process.env.L1_CURRENCY_URL}
          clusterName="L1 Currency"
        />
      </section>

      <section className="grid grid-cols-1 gap-5 mt-4 xl:grid-cols-4 xl:grid-gap-1 sm:grid-cols-2">
        <LatestSnapshot
          apiUrl={process.env.L0_GLOBAL_URL}
          clusterName="L0 Global"
          isGlobalSnapshot
        />
        {/* @ts-expect-error Async Server Component */}
        <TotalSupply
          apiUrl={process.env.L0_GLOBAL_URL}
          clusterName="L0 Global"
          isGlobalSnapshot
        />

        <LatestSnapshot
          apiUrl={process.env.L0_CURRENCY_URL}
          clusterName="L0 Currency"
        />

        {/* @ts-expect-error Async Server Component */}
        <TotalSupply
          apiUrl={process.env.L0_CURRENCY_URL}
          clusterName="L0 Currency"
        />
      </section>

      <section className="grid grid-cols-1 gap-5 mt-4 xl:grid-cols-2 xl:grid-gap-1">
        <Snapshots clusterName="L0 Global" isGlobalSnapshot />

        <Snapshots clusterName="L0 Currency" />
      </section>

      <section className="grid grid-cols-1 gap-5 mt-4 xl:grid-cols-2 xl:grid-gap-1 mb-[50px]">
        <WalletBalance
          apiUrl={process.env.L0_GLOBAL_URL}
          clusterName="L0 Global"
          isGlobalSnapshot
        />

        <WalletBalance
          apiUrl={process.env.L0_CURRENCY_URL}
          clusterName="L0 Currency"
        />
      </section>
    </div>
  )
}
