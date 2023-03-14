'use client'

import { SnapshotInfo } from '@/types'
import { useEffect, useState } from 'react'

type SnapshotsProps = {
  clusterName: string
  apiUrl: string
  isGlobalSnapshot?: boolean
}

export function Snapshots({
  clusterName,
  apiUrl,
  isGlobalSnapshot,
}: SnapshotsProps) {
  const [snapshots, setSnaphots] = useState([] as SnapshotInfo[])
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedSnapshots = localStorage.getItem(clusterName)
      if (storedSnapshots && storedSnapshots !== '{}') {
        const storedSnapshotsParsed: SnapshotInfo[] =
          JSON.parse(storedSnapshots)
        setSnaphots(storedSnapshotsParsed)
      }
    }
  }, [])

  const textColor = isGlobalSnapshot ? 'text-white' : 'text-black'
  return (
    <div
      className={`rounded-lg ${
        isGlobalSnapshot
          ? 'bg-[#4D515A] dark:bg-[#40454E] text-white'
          : 'bg-[#B9DD6D] text-black'
      }`}
    >
      <div className="flex flex-col p-6">
        <div className="flex">
          <div className="inline-block w-full">
            <h3
              className={`text-2xl font-display ${textColor} leading-[1.2rem] mb-[5px]`}
            >
              Snapshots
            </h3>
            <span
              className={`font-label font-medium uppercase text-xs tracking-tight ${textColor}/50`}
            >
              {clusterName}
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
          <thead
            className={`border-b border-black/30 sticky top-0 z-10 border-separate shadow ${
              isGlobalSnapshot
                ? 'bg-[#4D515A] dark:bg-[#40454E] text-white'
                : 'bg-[#B9DD6D]'
            }`}
          >
            <tr>
              <th className={`headerRow ${textColor}/50`}>Ordinal</th>
              <th className={`headerRow ${textColor}/50`}>Snapshot Hash</th>
              <th className={`headerRow ${textColor}/50 text-right`}>JSON</th>
            </tr>
          </thead>
          <tbody>
            {snapshots.map((snapshot) => (
              <tr key={snapshot.value.ordinal} className="tableRow">
                <td className={`dataRow ${textColor} font-light`}>
                  <span className="bg-darken px-[10px] py-[5px] rounded-[100px]">
                    {snapshot.value.ordinal}
                  </span>
                </td>
                <td className={`dataRow ${textColor} font-light`}>
                  {snapshot.value.lastSnapshotHash.replace(
                    /(.{20}).*?(.{20})$/,
                    '$1•••$2',
                  )}
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
                        className={
                          isGlobalSnapshot ? 'fill-white/70' : 'fill-black/70'
                        }
                      />
                    </svg>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
