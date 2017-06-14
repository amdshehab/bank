class Printer{
  constructor(){
    this.message = 'date || credit || debit || balance \n'
  }

  print(transaction){
    for(var key in transaction){
      for(var i = 0; i < transaction[key].length; i++){
        this.printStyle(key, transaction, i)
      }
    }
  return this.message
  }

  printStyle(key, transaction, i){
    if(transaction[key][i].type == 'credit'){
      this.message+= `${key} || ${transaction[key][i].transactionAmount} || || ${transaction[key][i].currentBalance} \n`
    } else {
      this.message+= `${key} || || ${transaction[key][i].transactionAmount} || ${transaction[key][i].currentBalance} \n`
    }
  }


}


module.exports = Printer
