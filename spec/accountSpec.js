var Account = require('../lib/account')

beforeEach(function(){
  account = new Account
})

describe('balance', function(){
  it('is initiated with a balance of zero', function(){
    expect(account.balance).toEqual(0)
  })

  it('transaction history is an emmpty object', function(){
    expect(account.transactionHistory).toEqual({})
  })

  it('can deposit money into an account', function(){
    account.deposit(200)
    expect(account.balance).toEqual(200)
  })

  it('date returns current date', function(){
    expect(account.date()).toEqual('2017-6-14')
  })

  it('can withdraw money from account', function(){
    account.withdraw(500)
    expect(account.balance).toEqual(-500)
  })

  it('transaction history keys are date objects with arrays', function(){
    account.deposit(1000)
    account.withdraw(500)
    expect(account.transactionHistory['2017-6-14'][0].type).toEqual('debit')
    expect(account.transactionHistory['2017-6-14'][1].type).toEqual('credit')
  })
})
