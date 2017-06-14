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
})
