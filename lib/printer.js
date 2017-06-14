class Printer{
  constructor(){
    this.message = 'date || credit || debit || balance \n'
  }

  print(transaction){
    for(var i = 0; i < transaction['2017-6-14'].length; i++){
      if(transaction['2017-6-14'][i].type == 'credit'){
        this.message+= `2017-6-14 || ${transaction['2017-6-14'][i].transactionAmount} || || ${transaction['2017-6-14'][i].currentBalance} \n`
      } else {
        this.message+= `2017-6-14 || || ${transaction['2017-6-14'][i].transactionAmount} || ${transaction['2017-6-14'][i].currentBalance} \n`
      }
    }
    return this.message
  }
}

module.exports = Printer
