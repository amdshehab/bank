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
  }

  withdraw(amount){
    this.balance-=amount
  }
}

module.exports = Account
