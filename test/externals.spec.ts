import * as assert from 'assert'

import * as BN_export from 'bn.js'

const BS58check_export = require('bs58check')

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

describe('External BS58check export', () => {
  it('should export `BS58check`', () => {
    assert.equal(src.BS58check, BS58check_export)
  })

  it('should use a BS58check decode function correctly', () => {
    const actual = src.BS58check.decode('1AGNa15ZQXAZUgFiqJ2i7Z2DPU2J6hW62i').toString('hex')
    assert.equal(actual, '0065a16059864a2fdbc7c99a4723a8395bc6f188eb')
  })

  it('should use a BS58check encode function correctly', () => {
    const actual = src.BS58check.encode(
      Buffer.from('0065a16059864a2fdbc7c99a4723a8395bc6f188eb', 'hex'),
    )
    assert.equal(actual, '1AGNa15ZQXAZUgFiqJ2i7Z2DPU2J6hW62i')
  })

  it('should throw on exceptions', () => {
    assert.throws(() => {
      src.BS58check.decode('1AGNa15ZQXAIUgFiqJ2i7Z2DPU2J6hW62i').toString('hex')
    }, /^Error: Non-base58 character$/)
  })
  it('should throw on exceptions ', () => {
    assert.throws(() => {
      src.BS58check.decode('Z9inZq4e2HGQRZQezDjFMmqgUE8NwMRok').toString('hex')
    }, /^Error: Invalid checksum$/)
  })
})
