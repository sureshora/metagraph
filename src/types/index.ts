type WalletBalanceInfo = {
  [address: string]: number
}

export type SnapshotInfo = {
  value: {
    ordinal: number
    total: number
    lastSnapshotHash: string
    info: {
      balances: WalletBalanceInfo
    }
  }
}

export type SnapshotInfoWithRawJSON = {
  rawJSON: any
  value: {
    ordinal: number
    total: number
    lastSnapshotHash: string
    info: {
      balances: WalletBalanceInfo
    }
  }
}
