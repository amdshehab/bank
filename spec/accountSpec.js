var Account = require('../lib/account')


describe('balance', function(){
  it('is initiated with a balance of zero', function(){
    var account = new Account
    expect(account.balance).toEqual(0)
  })
})
