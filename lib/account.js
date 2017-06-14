var Transaction = require('../lib/transaction')
class Account {
  constructor(){
    this.balance = 0
    this.transactionHistory = {}
    this.date = () => {
      let today = new Date()
      var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
      return date
    }
  }

  deposit(amount){
    this.balance+=amount
    this.transactionManager('debit', amount)
  }

  withdraw(amount){
    this.balance-=amount
    this.transactionManager('credit', amount)
  }

  transactionCreator(transaction){
    if(this.transactionHistory[this.date()] == null){
      this.transactionHistory[this.date()] = [transaction]
    } else {
      this.transactionHistory[this.date()].push(transaction)
    }
  }

  transactionManager(type, amount){
    var transaction = new Transaction(type, amount, this.balance)
    this.transactionCreator(transaction)
  }
}

module.exports = Account
