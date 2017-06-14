class Transaction{
  constructor(type, transactionAmount, currentBalance){
    this.type = type
    this.transactionAmount = transactionAmount
    this.currentBalance = currentBalance
  }
}

module.exports = Transaction
