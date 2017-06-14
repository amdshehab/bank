var Printer = require('../lib/printer')

beforeEach(function(){
  printer = new Printer
})

const transactionHistory = { '2017-6-14':
   [ { type: 'credit', transactionAmount: 1000, currentBalance: 1000 },
     { type: 'debit', transactionAmount: 500, currentBalance: 500 } ] }

const multipleDateHistory = {
  '2017-6-14':
     [ { type: 'credit', transactionAmount: 1000, currentBalance: 1000 },
       { type: 'debit', transactionAmount: 500, currentBalance: 500 } ],
  '2017-6-13':
  [ { type: 'debit', transactionAmount: 650, currentBalance: 700 } ]
}

describe('printer', function(){
  it('printer has a stanard message', function(){
    expect(printer.message).toEqual('date || credit || debit || balance \n')
  })
  it('prints a statment for a specific date', function(){
    expect(printer.print(transactionHistory)).toEqual(
      'date || credit || debit || balance \n2017-6-14 || 1000 || || 1000 \n2017-6-14 || || 500 || 500 \n'
    )
  })
  it('prints a statment for multiple dates', function(){
    expect(printer.print(multipleDateHistory)).toEqual(
      'date || credit || debit || balance \n2017-6-14 || 1000 || || 1000 \n2017-6-14 || || 500 || 500 \n2017-6-13 || || 650 || 700 \n'
    )
  })
})
