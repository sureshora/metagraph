import { FC } from 'react'

const Dashboard: FC = function () {
  return (
    <div className="w-full h-full px-6 pb-4 bg-light dark:bg-dark">
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
      </div>
      <div className="my-2 grid w-full grid-cols-1 gap-2 md:grid-cols-2 xl:grid-cols-2">
        <L0GlobalSnapshots />
        <L0CurrencySnapshots />
      </div>
      <div className="my-2 grid w-full grid-cols-1 gap-2 md:grid-cols-2 xl:grid-cols-2">
        <L0GlobalBalances />
        <L0CurrencyBalances />
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

const L0GlobalSnapshots: FC = function () {
  return (
    <div className="rounded-lg bg-white shadow text-white dark:bg-[#40454E]">
      <div className="flex flex-col p-6">
        <div className="flex">
          <div className="inline-block w-full">
            <h3 className="text-2xl font-display dark:text-white text-white leading-[1.2rem] mb-[5px]">
              Snapshots
            </h3>
            <span className="font-label font-medium uppercase text-xs tracking-tight text-white/50">
              L0 Global
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
              <th className="headerRow text-white/50">Ordinal</th>
              <th className="headerRow text-white/50">Snapshot Hash</th>
              <th className="headerRow text-white/50 text-right">JSON</th>
            </tr>
          </thead>
          <tbody>
            <tr className="tableRow">
              <td className="dataRow text-white font-light">32</td>
              <td className="dataRow text-white font-light">
                f3264324c8f8dccbf119cb79a8b6172c84c781d9c9a07c90d1a4e441761a3eef
              </td>
              <td className="pr-6">
                <div>
                  <svg
                    width="24"
                    height="24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="float-right"
                  >
                    <rect
                      width="24"
                      height="24"
                      rx="12"
                      fill="currentColor"
                      className="fill-black/10"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M9.397 8.654a.525.525 0 0 1 0 .743L6.793 12l2.604 2.603a.525.525 0 0 1-.743.743L5.68 12.372a.525.525 0 0 1 0-.743l2.975-2.975a.525.525 0 0 1 .743 0Zm5.207 0a.525.525 0 0 1 .743 0l2.975 2.975a.525.525 0 0 1 0 .743l-2.975 2.975a.525.525 0 1 1-.743-.743l2.604-2.603-2.604-2.604a.525.525 0 0 1 0-.743ZM12.965 6.408c.285.05.477.32.428.607l-1.75 10.15a.525.525 0 0 1-1.035-.179l1.75-10.15a.525.525 0 0 1 .607-.428Z"
                      fill="currentColor"
                      className="fill-white/70"
                    />
                  </svg>
                </div>
              </td>
            </tr>
            <tr className="tableRow">
              <td className="dataRow text-white font-light">31</td>
              <td className="dataRow text-white font-light">
                f3264324c8f8dccbf119cb79a8b6172c84c781d9c9a07c90d1a4e441761a3eef
              </td>
              <td className="pr-6">
                <div>
                  <svg
                    width="24"
                    height="24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="float-right"
                  >
                    <rect
                      width="24"
                      height="24"
                      rx="12"
                      fill="currentColor"
                      className="fill-black/10"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M9.397 8.654a.525.525 0 0 1 0 .743L6.793 12l2.604 2.603a.525.525 0 0 1-.743.743L5.68 12.372a.525.525 0 0 1 0-.743l2.975-2.975a.525.525 0 0 1 .743 0Zm5.207 0a.525.525 0 0 1 .743 0l2.975 2.975a.525.525 0 0 1 0 .743l-2.975 2.975a.525.525 0 1 1-.743-.743l2.604-2.603-2.604-2.604a.525.525 0 0 1 0-.743ZM12.965 6.408c.285.05.477.32.428.607l-1.75 10.15a.525.525 0 0 1-1.035-.179l1.75-10.15a.525.525 0 0 1 .607-.428Z"
                      fill="currentColor"
                      className="fill-white/70"
                    />
                  </svg>
                </div>
              </td>
            </tr>
            <tr className="tableRow">
              <td className="dataRow text-white font-light">30</td>
              <td className="dataRow text-white font-light">
                f3264324c8f8dccbf119cb79a8b6172c84c781d9c9a07c90d1a4e441761a3eef
              </td>
              <td className="pr-6">
                <div>
                  <svg
                    width="24"
                    height="24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="float-right"
                  >
                    <rect
                      width="24"
                      height="24"
                      rx="12"
                      fill="currentColor"
                      className="fill-black/10"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M9.397 8.654a.525.525 0 0 1 0 .743L6.793 12l2.604 2.603a.525.525 0 0 1-.743.743L5.68 12.372a.525.525 0 0 1 0-.743l2.975-2.975a.525.525 0 0 1 .743 0Zm5.207 0a.525.525 0 0 1 .743 0l2.975 2.975a.525.525 0 0 1 0 .743l-2.975 2.975a.525.525 0 1 1-.743-.743l2.604-2.603-2.604-2.604a.525.525 0 0 1 0-.743ZM12.965 6.408c.285.05.477.32.428.607l-1.75 10.15a.525.525 0 0 1-1.035-.179l1.75-10.15a.525.525 0 0 1 .607-.428Z"
                      fill="currentColor"
                      className="fill-white/70"
                    />
                  </svg>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

const L0CurrencySnapshots: FC = function () {
  return (
    <div className="rounded-lg bg-[#B9DD6D] shadow text-black">
      <div className="flex flex-col p-6">
        <div className="flex">
          <div className="inline-block w-full">
            <h3 className="text-2xl font-display text-black leading-[1.2rem] mb-[5px]">
              Snapshots
            </h3>
            <span className="font-label font-medium uppercase text-xs tracking-tight text-black/50">
              L0 Currency
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
              <th className="headerRow text-black/50">Ordinal</th>
              <th className="headerRow text-black/50">Snapshot Hash</th>
              <th className="headerRow text-black/50 text-right">JSON</th>
            </tr>
          </thead>
          <tbody>
            <tr className="tableRow">
              <td className="dataRow">32</td>
              <td className="dataRow">
                f3264324c8f8dccbf119cb79a8b6172c84c781d9c9a07c90d1a4e441761a3eef
              </td>
              <td className="pr-6">
                <div>
                  <svg
                    width="24"
                    height="24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="float-right"
                  >
                    <rect
                      width="24"
                      height="24"
                      rx="12"
                      fill="currentColor"
                      className="fill-black/10"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M9.397 8.654a.525.525 0 0 1 0 .743L6.793 12l2.604 2.603a.525.525 0 0 1-.743.743L5.68 12.372a.525.525 0 0 1 0-.743l2.975-2.975a.525.525 0 0 1 .743 0Zm5.207 0a.525.525 0 0 1 .743 0l2.975 2.975a.525.525 0 0 1 0 .743l-2.975 2.975a.525.525 0 1 1-.743-.743l2.604-2.603-2.604-2.604a.525.525 0 0 1 0-.743ZM12.965 6.408c.285.05.477.32.428.607l-1.75 10.15a.525.525 0 0 1-1.035-.179l1.75-10.15a.525.525 0 0 1 .607-.428Z"
                      fill="currentColor"
                      className="fill-black/70"
                    />
                  </svg>
                </div>
              </td>
            </tr>
            <tr className="tableRow">
              <td className="dataRow">31</td>
              <td className="dataRow">
                f3264324c8f8dccbf119cb79a8b6172c84c781d9c9a07c90d1a4e441761a3eef
              </td>
              <td className="pr-6">
                <div>
                  <svg
                    width="24"
                    height="24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="float-right"
                  >
                    <rect
                      width="24"
                      height="24"
                      rx="12"
                      fill="currentColor"
                      className="fill-black/10"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M9.397 8.654a.525.525 0 0 1 0 .743L6.793 12l2.604 2.603a.525.525 0 0 1-.743.743L5.68 12.372a.525.525 0 0 1 0-.743l2.975-2.975a.525.525 0 0 1 .743 0Zm5.207 0a.525.525 0 0 1 .743 0l2.975 2.975a.525.525 0 0 1 0 .743l-2.975 2.975a.525.525 0 1 1-.743-.743l2.604-2.603-2.604-2.604a.525.525 0 0 1 0-.743ZM12.965 6.408c.285.05.477.32.428.607l-1.75 10.15a.525.525 0 0 1-1.035-.179l1.75-10.15a.525.525 0 0 1 .607-.428Z"
                      fill="currentColor"
                      className="fill-black/70"
                    />
                  </svg>
                </div>
              </td>
            </tr>
            <tr className="tableRow">
              <td className="dataRow">30</td>
              <td className="dataRow">
                f3264324c8f8dccbf119cb79a8b6172c84c781d9c9a07c90d1a4e441761a3eef
              </td>
              <td className="pr-6">
                <div>
                  <svg
                    width="24"
                    height="24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="float-right"
                  >
                    <rect
                      width="24"
                      height="24"
                      rx="12"
                      fill="currentColor"
                      className="fill-black/10"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M9.397 8.654a.525.525 0 0 1 0 .743L6.793 12l2.604 2.603a.525.525 0 0 1-.743.743L5.68 12.372a.525.525 0 0 1 0-.743l2.975-2.975a.525.525 0 0 1 .743 0Zm5.207 0a.525.525 0 0 1 .743 0l2.975 2.975a.525.525 0 0 1 0 .743l-2.975 2.975a.525.525 0 1 1-.743-.743l2.604-2.603-2.604-2.604a.525.525 0 0 1 0-.743ZM12.965 6.408c.285.05.477.32.428.607l-1.75 10.15a.525.525 0 0 1-1.035-.179l1.75-10.15a.525.525 0 0 1 .607-.428Z"
                      fill="currentColor"
                      className="fill-black/70"
                    />
                  </svg>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

const L0GlobalBalances: FC = function () {
  return (
    <div className="rounded-lg bg-white shadow text-white dark:bg-[#40454E]">
      <div className="flex flex-col p-6">
        <div className="flex">
          <div className="inline-block w-full">
            <h3 className="text-2xl font-display dark:text-white text-white leading-[1.2rem] mb-[5px]">
              Balances
            </h3>
            <span className="font-label font-medium uppercase text-xs tracking-tight text-white/50">
              L0 Global
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
              <th className="headerRow text-white/50">Address</th>
              <th className="headerRow text-white/50 text-right">Balance</th>
            </tr>
          </thead>
          <tbody>
            <tr className="tableRow">
              <td className="dataRow text-white font-light">
                DAG7QrKeoHbYezJ6YHUCt7PJDixWgxM4vfKz8qVT
              </td>
              <td className="dataRow text-white font-light text-right">
                1,000,000,000
              </td>
            </tr>
            <tr className="tableRow">
              <td className="dataRow text-white font-light">
                DAG7QrKeoHbYezJ6YHUCt7PJDixWgxM4vfKz8qVT
              </td>
              <td className="dataRow text-white font-light text-right">
                1,000,000,000
              </td>
            </tr>
            <tr className="tableRow">
              <td className="dataRow text-white font-light">
                DAG7QrKeoHbYezJ6YHUCt7PJDixWgxM4vfKz8qVT
              </td>
              <td className="dataRow text-white font-light text-right">
                1,000,000,000
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

const L0CurrencyBalances: FC = function () {
  return (
    <div className="rounded-lg text-black bg-[#B9DD6D]">
      <div className="flex flex-col p-6">
        <div className="flex">
          <div className="inline-block w-full">
            <h3 className="text-2xl font-display text-black leading-[1.2rem] mb-[5px]">
              Balances
            </h3>
            <span className="font-label font-medium uppercase text-xs tracking-tight text-black/50">
              L0 Currency
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
              <th className="headerRow text-black/50">Address</th>
              <th className="headerRow text-black/50 text-right">Balance</th>
            </tr>
          </thead>
          <tbody>
            <tr className="tableRow">
              <td className="dataRow">
                DAG7QrKeoHbYezJ6YHUCt7PJDixWgxM4vfKz8qVT
              </td>
              <td className="dataRow text-right">1,000,000,000</td>
            </tr>
            <tr className="tableRow">
              <td className="dataRow">
                DAG7QrKeoHbYezJ6YHUCt7PJDixWgxM4vfKz8qVT
              </td>
              <td className="dataRow text-right">1,000,000,000</td>
            </tr>
            <tr className="tableRow">
              <td className="dataRow">
                DAG7QrKeoHbYezJ6YHUCt7PJDixWgxM4vfKz8qVT
              </td>
              <td className="dataRow text-right">1,000,000,000</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Dashboard
