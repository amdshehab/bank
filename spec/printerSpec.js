var Printer = require('../lib/printer')

beforeEach(function(){
  printer = new Printer
})

describe('printer', function(){
  it('printer has a stanard message', function(){
    expect(printer.message).toEqual('date || credit || debit || balance')
  })
})
