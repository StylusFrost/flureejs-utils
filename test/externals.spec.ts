import * as assert from 'assert'

import * as BN_export from 'bn.js'

import * as src from '../src'

describe('External BN export', () => {
  it('should export `BN`', () => {
    assert.equal(src.BN, BN_export)
  })

  it('should use a BN function correctly', () => {
    const a = new src.BN('dead', 16)
    const b = new src.BN('101010', 2)
    const result = a.add(b)
    assert.equal(result.toString(10), 57047)
  })

  it('should throw on exceptions', () => {
    // should not allow 0 input
    assert.throws(() => {
      new src.BN(1).egcd(new src.BN('0'))
    }, /^Error: Assertion failed$/)
  })

  // should not accept an unsafe integer
  const num = Math.pow(2, 53)
  assert.throws(() => {
    return new src.BN(num, 10)
  }, /^Error: Assertion failed$/)

  // should throw error with num eq 0x4000000
  assert.throws(function() {
    new src.BN(0).iaddn(0x4000000)
  }, /^Error: Assertion failed$/)
})
