'use client'

import { useEffect, useState } from 'react'

type TotalSupplyInfo = {
  total: number
  ordinal: number
}

type TotalSupplyProps = {
  clusterName: string
  apiUrl: string
  isGlobalSnapshot?: boolean
}

// We should fetch each 5 seconds for new snapshots
const REFRESH_TIME = 5

export function TotalSupply({
  clusterName,
  apiUrl,
  isGlobalSnapshot,
}: TotalSupplyProps) {
  const [totalSupplyInfo, setTotalSupplyInfo] = useState({} as TotalSupplyInfo)
  const [seconds, setSeconds] = useState(0)

  const fetchTotalSupply = async () => {
    const url = isGlobalSnapshot
      ? `${apiUrl}/dag/total-supply`
      : `${apiUrl}/currency/total-supply`

    const totalSupplyInfoResponse = await fetch(url, {
      headers: {
        Accept: 'application/json',
      },
      cache: 'no-store',
      next: {
        revalidate: 5,
      },
    })

    setTotalSupplyInfo(await totalSupplyInfoResponse.json())
    setSeconds(seconds > 10 ? 0 : seconds + 1)
  }

  useEffect(() => {
    fetchTotalSupply()
  }, [])

  useEffect(() => {
    setTimeout(() => {
      if (seconds === 0 || seconds % REFRESH_TIME !== 0) {
        setSeconds(seconds + 1)
      } else {
        fetchTotalSupply()
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
      }}`}
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
        </div>
      </div>
      <div className="grid w-full grid-cols-1 text-center py-7 pb-8">
        <div className={`font-display text-[30px] leading-none ${textColor}`}>
          {new Intl.NumberFormat('en-US', {
            maximumSignificantDigits: 21,
          }).format(totalSupplyInfo.total / 1e8)}
        </div>
        <div className={`font-label text-xs ${textColor}/60 pt-3`}>
          {isGlobalSnapshot ? 'Total DAG Supply' : 'Total L0 Token Supply'}
        </div>
      </div>
    </div>
  )
}
