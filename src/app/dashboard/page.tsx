import { FC } from 'react'

const Dashboard: FC = function () {
  return (
    <div className="w-full h-screen px-6 bg-light dark:bg-dark">
      <div className="mt-6 grid w-full grid-cols-1 gap-2 md:grid-cols-2 xl:grid-cols-3">
        <ClusterL0GlobalWidget />
        <ClusterL0CurrencyWidget />
        <ClusterL1CurrencyWidget />
      </div>
      <div className="mt-2 grid w-full grid-cols-1 gap-2 md:grid-cols-2 xl:grid-cols-4">
        <div>
          <CardL0GlobalLatest />
        </div>
        <div>
          <CardL0GlobalCurrent />
        </div>
        <div>
          <CardL0CurrencyFinalized />
        </div>
        <div>
          <CardL0CurrencyCurrent />
        </div>
      </div>
      <div className="my-2 grid w-full grid-cols-1 gap-2 md:grid-cols-2 xl:grid-cols-2">
        <L0GlobalSnapshots />
        <L0GlobalSnapshots />
      </div>
    </div>
  )
}

const ClusterL0GlobalWidget: FC = function () {
  return (
    <div className="rounded-lg bg-white shadow dark:bg-[#D2D2D6]">
      <div className="flex flex-col p-6">
        <div className="flex">
          <div className="inline-block w-full">
            <h3 className="text-2xl font-display dark:text-black text-black leading-[1.2rem] mb-[5px]">
              Cluster Metrics
            </h3>
            <span className="font-label font-medium uppercase text-xs tracking-tight text-black/50">
              L0 Global / 2 Nodes
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
      <div className="overflow-x-auto">
        <table className="mb-6 w-full table-auto text-left border-0">
          <thead className="border-b border-black/30">
            <tr>
              <th className="headerRow">Node ID</th>
              <th className="headerRow">IP Address</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr className="tableRow">
              <td className="dataRow">f3264•••cbf11</td>
              <td className="dataRow">172.8.0.2</td>
              <td className="pb-2">
                <span className="label badgeReady">Ready</span>
              </td>
            </tr>
            <tr className="tableRow">
              <td className="dataRow">f3264•••cbf11</td>
              <td className="dataRow">172.8.0.2</td>
              <td className="pb-2">
                <span className="label badgeReady">Ready</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

const ClusterL0CurrencyWidget: FC = function () {
  return (
    <div className="rounded-lg bg-white shadow dark:bg-[#D2D2D6]">
      <div className="flex flex-col p-6">
        <div className="flex">
          <div className="inline-block w-full">
            <h3 className="text-2xl font-display dark:text-black text-black leading-[1.2rem] mb-[5px]">
              Cluster Metrics
            </h3>
            <span className="font-label font-medium uppercase text-xs tracking-tight text-black/50">
              L0 Currency / 2 Nodes
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
      <div className="overflow-x-auto">
        <table className="mb-6 w-full table-auto text-left border-0">
          <thead className="border-b border-black/30">
            <tr>
              <th className="headerRow">Node ID</th>
              <th className="headerRow">IP Address</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr className="tableRow">
              <td className="dataRow">f3264•••cbf11</td>
              <td className="dataRow">172.8.0.2</td>
              <td className="pb-2">
                <span className="label badgeReady">Ready</span>
              </td>
            </tr>
            <tr className="tableRow">
              <td className="dataRow">f3264•••cbf11</td>
              <td className="dataRow">172.8.0.2</td>
              <td className="pb-2">
                <span className="label badgeReady">Ready</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

const ClusterL1CurrencyWidget: FC = function () {
  return (
    <div className="rounded-lg bg-white shadow dark:bg-[#D2D2D6]">
      <div className="flex flex-col p-6">
        <div className="flex">
          <div className="inline-block w-full">
            <h3 className="text-2xl font-display dark:text-black text-black leading-[1.2rem] mb-[5px]">
              Cluster Metrics
            </h3>
            <span className="font-label font-medium uppercase text-xs tracking-tight text-black/50">
              L1 Currency / 3 Nodes
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
      <div className="overflow-x-auto">
        <table className="mb-6 w-full table-auto text-left border-0">
          <thead className="border-b border-black/30">
            <tr>
              <th className="headerRow">Node ID</th>
              <th className="headerRow">IP Address</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr className="tableRow">
              <td className="dataRow">f3264•••cbf11</td>
              <td className="dataRow">172.8.0.2</td>
              <td className="pb-2">
                <span className="label badgeReady">Ready</span>
              </td>
            </tr>
            <tr className="tableRow">
              <td className="dataRow">f3264•••cbf11</td>
              <td className="dataRow">172.8.0.2</td>
              <td className="pb-2">
                <span className="label badgeReady">Ready</span>
              </td>
            </tr>
            <tr className="tableRow">
              <td className="dataRow">f3264•••cbf11</td>
              <td className="dataRow">172.8.0.2</td>
              <td className="pb-2">
                <span className="label badgeReady">Ready</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

const CardL0GlobalLatest: FC = function () {
  return (
    <div className="rounded-lg bg-white text-gray-900 shadow dark:bg-[#40454E] dark:text-white">
      <div className="flex flex-col sm:p-4 xl:p-6">
        <div className="overflow-x-auto">
          <div className="inline-block min-w-full align-middle">
            <div className="overflow-hidden">
              <div className="grid w-full grid-cols-1 gap-6 xl:grid-cols-2">
                <div>
                  <h3 className="text-lg font-semibold">L0 Global</h3>
                </div>
                <div className="text-end">1s</div>
              </div>
              <div className="grid w-full grid-cols-1 text-center">
                <div className="text-[54px]">32</div>
                <div>Latest Snapshot</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const CardL0GlobalCurrent: FC = function () {
  return (
    <div className="rounded-lg bg-white text-gray-900 shadow dark:bg-[#40454E] dark:text-white">
      <div className="flex flex-col sm:p-4 xl:p-6">
        <div className="overflow-x-auto">
          <div className="inline-block min-w-full align-middle">
            <div className="overflow-hidden">
              <h3 className="text-lg font-semibold">L0 Global</h3>
              <div className="grid w-full grid-cols-1 text-center">
                <div className="text-[54px]">33</div>
                <div>Current Snapshot</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="grid w-full grid-cols-1 gap-6 border-t border-black/30 px-6 py-3 xl:grid-cols-2">
        <div className="text-sm">.</div>
        <div className="text-end">.</div>
      </div>
    </div>
  )
}

const CardL0CurrencyFinalized: FC = function () {
  return (
    <div className="rounded-lg bg-white text-gray-900 shadow dark:bg-[#B9DD6D] dark:text-black">
      <div className="flex flex-col sm:p-4 xl:p-6">
        <div className="overflow-x-auto">
          <div className="inline-block min-w-full align-middle">
            <div className="overflow-hidden">
              <h3 className="text-lg font-semibold">L0 Currency</h3>
              <div className="grid w-full grid-cols-1 text-center">
                <div className="text-[54px]">14</div>
                <div>Finalized Snapshot</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="grid w-full grid-cols-1 gap-6 border-t border-black/20 px-6 py-3 xl:grid-cols-2">
        <div className="text-sm">Total Supply</div>
        <div className="text-end">6,000,000,000</div>
      </div>
    </div>
  )
}

const CardL0CurrencyCurrent: FC = function () {
  return (
    <div className="rounded-lg bg-white shadow dark:bg-gray-800 sm:p-4 xl:p-6">
      <div className="flex flex-col">
        <div className="overflow-x-auto">
          <div className="inline-block min-w-full align-middle">
            <div className="overflow-hidden">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                L0 Currency
              </h3>
              <div className="my-6 grid w-full grid-cols-1 gap-6 xl:grid-cols-2">
                <div className="text-sm"></div>
                <div className="text-end"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const L0GlobalSnapshots: FC = function () {
  return (
    <div className="rounded-lg bg-white shadow dark:bg-gray-800">
      <div className="flex items-center justify-between">
        <div className="p-6">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
            Snapshots
          </h3>
          <span>L0 Global</span>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="overflow-x-auto">
          <div className="inline-block min-w-full align-middle">
            <div className="overflow-hidden">Table goes here</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
