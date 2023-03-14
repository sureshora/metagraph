'use client'
import { useCallback, useEffect, useState } from 'react'
import { SnapshotInfo } from '@/types'

type LatestSnapshotProps = {
  clusterName: string
  apiUrl: string
  isGlobalSnapshot?: boolean
}

// We should fetch each 5 seconds for new snapshots
const REFRESH_TIME = 5

export function LatestSnapshot({
  clusterName,
  apiUrl,
  isGlobalSnapshot,
}: LatestSnapshotProps) {
  const [seconds, setSeconds] = useState(0)
  const [snapshotInfo, setSnapshotInfo] = useState({
    value: {},
  } as SnapshotInfo)

  const storeSnapshot = (response: SnapshotInfo) => {
    const storedHashes = localStorage.getItem(clusterName)
    if (!storedHashes || Object.keys(JSON.parse(storedHashes)).length === 0) {
      localStorage.setItem(`${clusterName}`, JSON.stringify([response]))
    } else {
      const storedHashesParsed: SnapshotInfo[] = JSON.parse(storedHashes)

      if (storedHashesParsed.length >= 20) {
        storedHashesParsed.shift()
      }

      const ordinalAlreadyFilled = storedHashesParsed.some(
        (storedSnapshot) =>
          storedSnapshot.value.ordinal === response.value.ordinal,
      )
      if (ordinalAlreadyFilled) {
        return
      }

      storedHashesParsed.push(response)
      localStorage.setItem(`${clusterName}`, JSON.stringify(storedHashesParsed))
    }
  }

  const fetchData = useCallback(async () => {
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
    const response: SnapshotInfo = await snapshotsResponse.json()
    setSnapshotInfo(response)
    if (typeof window !== 'undefined') {
      storeSnapshot(response)
    }
    setSeconds(0)
  }, [])

  useEffect(() => {
    fetchData()
  }, [])

  useEffect(() => {
    setTimeout(() => {
      if (seconds < REFRESH_TIME) {
        setSeconds(seconds + 1)
      } else {
        fetchData()
      }
    }, 1000)
  }, [seconds])

  const textColor = isGlobalSnapshot ? 'text-white' : 'text-black'
  return (
    <div
      className={`rounded-lg p-6 h-full ${
        isGlobalSnapshot
          ? 'bg-[#4D515A] dark:bg-[#40454E] text-white'
          : 'bg-[#B9DD6D] text-black'
      }`}
    >
      <div className="flex flex-col">
        <div className="flex">
          <div className="inline-block w-full">
            <h3
              className={`text-lg font-display ${textColor} leading-[1.2rem] mb-[5px]`}
            >
              {clusterName}
            </h3>
          </div>
          <div className="flex">
            <svg
              width="14"
              height="14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7 1.313a5.687 5.687 0 1 0 0 11.374A5.687 5.687 0 0 0 7 1.313Zm3.063 6.125H7A.437.437 0 0 1 6.562 7V3.937a.438.438 0 0 1 .875 0v2.626h2.625a.438.438 0 0 1 0 .875Z"
                fill="#fff"
                className={isGlobalSnapshot ? 'fill-white' : 'fill-black'}
              />
            </svg>
            <span className="ml-1 leading-[.9rem] text-[12px] font-label font-light">
              {seconds}s
            </span>
          </div>
        </div>
      </div>
      <div className="grid w-full grid-cols-1 text-center py-4 pb-8">
        <div className="font-display text-[54px] leading-none tracking-wide pt-1">
          {snapshotInfo.value.ordinal}
        </div>
        <div className={`font-label text-xs ${textColor}/60 pt-2`}>
          Latest Snapshot
        </div>
      </div>
    </div>
  )
}
