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
