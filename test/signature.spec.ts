import * as assert from 'assert'
import * as BN from 'bn.js'
import { ecsign, ecrecover, isValidSignature } from '../src'

import { privateToPublic } from '../src'

const msg = Buffer.from('HI HOLA')
const ecprivkey = Buffer.from(
  '3c9229289a6125f7fdf1885a77bb12c37a8d3b4962d936f7e3084dece32a3ca1',
  'hex',
)

describe('ecsign', function() {
  it('should produce a signature', function() {
    const sig = ecsign(msg, ecprivkey)
    assert.deepEqual(
      sig.r,
      Buffer.from('cbd32e463567fefc2f120425b0224d9d263008911653f50e83953f47cfbef3bc', 'hex'),
    )
    assert.deepEqual(
      sig.s,
      Buffer.from('b760e1f85ae52aa1678b2a2b5a58c438e83c058abe24c0951d323809809811df', 'hex'),
    )
    assert.equal(sig.v, 27)
  })
})
describe('ecrecover', function() {
  it('should recover a public key', function() {
    const r = Buffer.from('cbd32e463567fefc2f120425b0224d9d263008911653f50e83953f47cfbef3bc', 'hex')
    const s = Buffer.from('b760e1f85ae52aa1678b2a2b5a58c438e83c058abe24c0951d323809809811df', 'hex')
    const v = 27
    const pubkey = ecrecover(msg, v, r, s)
    assert.deepEqual(pubkey, privateToPublic(ecprivkey))
  })

  it('should fail on an invalid signature (v = 21)', function() {
    const r = Buffer.from('cbd32e463567fefc2f120425b0224d9d263008911653f50e83953f47cfbef3bc', 'hex')
    const s = Buffer.from('b760e1f85ae52aa1678b2a2b5a58c438e83c058abe24c0951d323809809811df', 'hex')
    assert.throws(function() {
      ecrecover(msg, 21, r, s)
    })
  })
  it('should fail on an invalid signature (v = 29)', function() {
    const r = Buffer.from('cbd32e463567fefc2f120425b0224d9d263008911653f50e83953f47cfbef3bc', 'hex')
    const s = Buffer.from('b760e1f85ae52aa1678b2a2b5a58c438e83c058abe24c0951d323809809811df', 'hex')
    assert.throws(function() {
      ecrecover(msg, 29, r, s)
    })
  })
})

describe('isValidSignature', function() {
  it('should fail on an invalid signature (shorter r))', function() {
    const r = Buffer.from('99e71a99cb2270b8cac5254f9e99b6210c6c10224a1579cf389ef88b20a1ab', 'hex')
    const s = Buffer.from('129ff05af364204442bdb53ab6f18a99ab48acc9326fa689f228040429e3ca66', 'hex')
    assert.equal(isValidSignature(27, r, s), false)
  })
  it('should fail on an invalid signature (shorter s))', function() {
    const r = Buffer.from('99e71a99cb2270b8cac5254f9e99b6210c6c10224a1579cf389ef88b20a1abe9', 'hex')
    const s = Buffer.from('129ff05af364204442bdb53ab6f18a99ab48acc9326fa689f228040429e3ca', 'hex')
    assert.equal(isValidSignature(27, r, s), false)
  })
  it('should fail on an invalid signature (v = 21)', function() {
    const r = Buffer.from('99e71a99cb2270b8cac5254f9e99b6210c6c10224a1579cf389ef88b20a1abe9', 'hex')
    const s = Buffer.from('129ff05af364204442bdb53ab6f18a99ab48acc9326fa689f228040429e3ca66', 'hex')
    assert.equal(isValidSignature(21, r, s), false)
  })
  it('should fail on an invalid signature (v = 29)', function() {
    const r = Buffer.from('99e71a99cb2270b8cac5254f9e99b6210c6c10224a1579cf389ef88b20a1abe9', 'hex')
    const s = Buffer.from('129ff05af364204442bdb53ab6f18a99ab48acc9326fa689f228040429e3ca66', 'hex')
    assert.equal(isValidSignature(29, r, s), false)
  })
  it('should fail when s > secp256k1_N', function() {
    const SECP256K1_N = new BN(
      'fffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141',
      16,
    )

    const r = Buffer.from('99e71a99cb2270b8cac5254f9e99b6210c6c10224a1579cf389ef88b20a1abe9', 'hex')
    const s = Buffer.from(SECP256K1_N.add(new BN('1', 16)).toString(16), 'hex')

    const v = 27
    assert.equal(isValidSignature(v, r, s), false)
  })
  it('should work otherwise', function() {
    const r = Buffer.from('99e71a99cb2270b8cac5254f9e99b6210c6c10224a1579cf389ef88b20a1abe9', 'hex')
    const s = Buffer.from('129ff05af364204442bdb53ab6f18a99ab48acc9326fa689f228040429e3ca66', 'hex')
    const v = 27
    assert.equal(isValidSignature(v, r, s), true)
  })
})
