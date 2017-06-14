var Transaction = require('../lib/transaction')

beforeEach(function(){
  transaction = new Transaction('credit', 500, 2500)
})

describe('transaction', function(){
  it('has a type, transaction amount and current balance', function(){
    expect(transaction.type).toEqual('credit')
    expect(transaction.transactionAmount).toEqual(500)
    expect(transaction.currentBalance).toEqual(2500)
  })
})
