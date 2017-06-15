class Printer{

  constructor(){
    this.message = 'date || credit || debit || balance \n'
    this.statment = ''
  }

  print(transaction){
    this.statment = this.message
    for(var key in transaction){
      for(var i = 0; i < transaction[key].length; i++){
        this.printStyle(key, transaction, i)
      }
    }
  return this.statment
  }

  printStyle(key, transaction, i){
    if(transaction[key][i].type == 'credit'){
      this.statment+= `${key} || ${transaction[key][i].transactionAmount} || || ${transaction[key][i].currentBalance} \n`
    } else {
      this.statment+= `${key} || || ${transaction[key][i].transactionAmount} || ${transaction[key][i].currentBalance} \n`
    }
  }

  consoleLogger(transaction){
    console.log(this.print(transaction))
  }
}


module.exports = Printer
