const { dag4 } = require('@stardust-collective/dag4')
const { DagAccount } = require('@stardust-collective/dag4-wallet')
const fs = require('fs')

const logMessage = (message) => {
  const formattedMessage = {
    message,
  }
  console.log(formattedMessage)
}

const singleTransaction = async (account, transactionInfo) => {
  const { destination, amount, fee } = JSON.parse(transactionInfo)
  try {
    logMessage(
      `Transaction from: ${account.address} to ${destination} - single`,
    )

    const signedTransaction = await account.generateSignedTransaction(
      destination,
      amount,
      fee,
    )

    const transaction = await dag4.network.postTransaction(signedTransaction)

    logMessage(
      `Transaction from: ${
        account.address
      } to ${transactionInfo} sent - single. Generated transaction response body: ${JSON.stringify(
        signedTransaction,
      )}. Post hash: ${transaction}`,
    )

    return transaction
  } catch (e) {
    throw Error(`Error when sending single transaction: ${e}`)
  }
}

const batchTransaction = async (account, transactionsInfo) => {
  try {
    const txnsData = []
    for (const transaction of transactionsInfo) {
      const txnBody = {
        address: transaction.destination,
        amount: transaction.amount,
        fee: transaction.fee,
      }

      logMessage(
        `Transaction from: ${account.address} to ${transaction.destination}} - batch.`,
      )

      txnsData.push(txnBody)
    }

    const generatedTransactions = await account.generateBatchTransactions(
      txnsData,
    )
    const hashes = await account.sendBatchTransactions(generatedTransactions)

    logMessage(
      `Transaction from: ${
        account.address
      } sent - batch. Generated transaction response body: ${JSON.stringify(
        generatedTransactions,
      )}. Post hashes: ${hashes}`,
    )

    return hashes
  } catch (e) {
    throw Error(`Error when sending batch transaction: ${e}`)
  }
}

const handleSingleTransaction = async (seedWords, transaction) => {
  try {
    const account = new DagAccount()
    await account.loginSeedPhrase(seedWords)

    account.connect({
      networkVersion: '2.0',
      l0Url: 'http://localhost:9100',
      l1Url: 'http://localhost:9200',
    })

    try {
      await singleTransaction(account, transaction)
    } catch (error) {
      const errorMessage = `Error when sending transactions between wallets, message: ${error}`
      logMessage(errorMessage)
    }
  } catch (error) {
    logMessage(`Error when loging in: ${error}`)
  }
}

const handleBatchTransactions = async (seedWords, transactions) => {
  try {
    const account = new DagAccount()
    await account.loginSeedPhrase(seedWords)

    account.connect({
      networkVersion: '2.0',
      l0Url: 'http://localhost:9100',
      l1Url: 'http://localhost:9200',
    })

    try {
      await batchTransaction(account, transactions)
    } catch (error) {
      const errorMessage = `Error when sending transactions between wallets, message: ${error}`
      logMessage(errorMessage)
    }
  } catch (error) {
    logMessage(`Error when loging in: ${error}`)
  }
}

const sendTransactions = async () => {
  const args = process.argv

  const sendBulkTransactions = args.some((arg) => arg === 'bulk')

  const seedWords = args.find((arg) => arg.includes('--seed='))
  const transaction = args.find((arg) => arg.includes('--transaction='))
  const config = args.find((arg) => arg.includes('--config='))

  if (sendBulkTransactions && !config) {
    logMessage(
      '--config parameter (transactions file path) must be provided for bulk transactions execution',
    )
    return
  }

  if (!sendBulkTransactions && (!seedWords || !transaction)) {
    logMessage(
      '--seed and --transaction are required parameters for single transaction execution',
    )
    return
  }

  if (seedWords && transaction) {
    const seedWordsParsed = seedWords.replace('--seed=', '')
    const transactionParsed = transaction.replace('--transaction=', '')

    await handleSingleTransaction(seedWordsParsed, transactionParsed)
    return
  }

  if (config) {
    const configPath = config.replace('--config=', '')

    try {
      const data = fs.readFileSync(configPath, 'utf8')
      const configParsed = JSON.parse(data)
      handleBatchTransactions(configParsed.seed, configParsed.transactions)
      return
    } catch (e) {
      logMessage(`Error when reading file: ${e}`)
    }
  }
}

sendTransactions()
