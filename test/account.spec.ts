import assert from 'assert'
import BN from 'bn.js'
import {
  isValidPrivate,
  isValidPublic,
  importPublic,
  publicToAuthID,
  privateToPublic,
  privateToAuthID,
  isValidAuthID,
} from '../src'

describe('isValidPrivate', function() {
  const SECP256K1_N = new BN('fffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141', 16)
  it('should fail on short input', function() {
    const tmp = '0011223344'
    assert.throws(function() {
      isValidPrivate(Buffer.from(tmp, 'hex'))
    })
  })
  it('should fail on too big input', function() {
    const tmp =
      '3a443d8381a6798a70c6ff9304bdc8cb0163c23211d11628fae52ef9e0dca11a001cf066d56a8156fc201cd5df8a36ef694eecd258903fca7086c1fae7441e1d'
    assert.throws(function() {
      isValidPrivate(Buffer.from(tmp, 'hex'))
    })
  })
  it('should fail on wrong input type', function() {
    assert.throws(function() {
      isValidPrivate((<unknown>'WRONG_INPUT_TYPE') as Buffer)
    })
  })
  it('should fail on invalid curve (zero)', function() {
    const tmp = '0000000000000000000000000000000000000000000000000000000000000000'
    assert.equal(isValidPrivate(Buffer.from(tmp, 'hex')), false)
  })
  it('should fail on invalid curve (== N)', function() {
    const tmp = SECP256K1_N.toString(16)
    assert.equal(isValidPrivate(Buffer.from(tmp, 'hex')), false)
  })
  it('should fail on invalid curve (>= N)', function() {
    const tmp = SECP256K1_N.addn(1).toString(16)
    assert.equal(isValidPrivate(Buffer.from(tmp, 'hex')), false)
  })
  it('should work otherwise (< N)', function() {
    const tmp = SECP256K1_N.subn(1).toString(16)
    assert.equal(isValidPrivate(Buffer.from(tmp, 'hex')), true)
  })
})

describe('isValidPublic', function() {
  it('should fail on too short input', function() {
    const pubKey = Buffer.from(
      '3a443d8381a6798a70c6ff9304bdc8cb0163c23211d11628fae52ef9e0dca11a001cf066d56a8156fc201cd5df8a36ef694eecd258903fca7086c1fae744',
      'hex',
    )
    assert.equal(isValidPublic(pubKey), false)
  })
  it('should fail on too big input', function() {
    const pubKey = Buffer.from(
      '3a443d8381a6798a70c6ff9304bdc8cb0163c23211d11628fae52ef9e0dca11a001cf066d56a8156fc201cd5df8a36ef694eecd258903fca7086c1fae7441e1d00',
      'hex',
    )
    assert.equal(isValidPublic(pubKey), false)
  })
  it('should fail on SEC1 key', function() {
    const pubKey = Buffer.from(
      '043a443d8381a6798a70c6ff9304bdc8cb0163c23211d11628fae52ef9e0dca11a001cf066d56a8156fc201cd5df8a36ef694eecd258903fca7086c1fae7441e1d',
      'hex',
    )
    assert.equal(isValidPublic(pubKey), false)
  })
  it("shouldn't fail on SEC1 key with sanitize enabled", function() {
    const pubKey = Buffer.from(
      '043a443d8381a6798a70c6ff9304bdc8cb0163c23211d11628fae52ef9e0dca11a001cf066d56a8156fc201cd5df8a36ef694eecd258903fca7086c1fae7441e1d',
      'hex',
    )
    assert.equal(isValidPublic(pubKey, true), true)
  })
  it('should fail with an invalid SEC1 public key', function() {
    const pubKey = Buffer.from(
      '023a443d8381a6798a70c6ff9304bdc8cb0163c23211d11628fae52ef9e0dca11a001cf066d56a8156fc201cd5df8a36ef694eecd258903fca7086c1fae7441e1d',
      'hex',
    )
    assert.equal(isValidPublic(pubKey, true), false)
  })
  it('should work with compressed keys with sanitize enabled', function() {
    const pubKey = Buffer.from(
      '033a443d8381a6798a70c6ff9304bdc8cb0163c23211d11628fae52ef9e0dca11a',
      'hex',
    )
    assert.equal(isValidPublic(pubKey, true), true)
  })
  it('should work with sanitize enabled', function() {
    const pubKey = Buffer.from(
      '043a443d8381a6798a70c6ff9304bdc8cb0163c23211d11628fae52ef9e0dca11a001cf066d56a8156fc201cd5df8a36ef694eecd258903fca7086c1fae7441e1d',
      'hex',
    )
    assert.equal(isValidPublic(pubKey, true), true)
  })
  it('should work otherwise', function() {
    const pubKey = Buffer.from(
      '3a443d8381a6798a70c6ff9304bdc8cb0163c23211d11628fae52ef9e0dca11a001cf066d56a8156fc201cd5df8a36ef694eecd258903fca7086c1fae7441e1d',
      'hex',
    )
    assert.equal(isValidPublic(pubKey), true)
  })
  it('should throw if input is not Buffer', function() {
    const pubKey =
      '3a443d8381a6798a70c6ff9304bdc8cb0163c23211d11628fae52ef9e0dca11a001cf066d56a8156fc201cd5df8a36ef694eecd258903fca7086c1fae7441e1d'
    try {
      isValidPublic((<unknown>pubKey) as Buffer)
    } catch (err) {
      assert(err.message.includes('This method only supports Buffer'))
    }
  })
})

describe('importPublic', function() {
  const pubKey =
    '3a443d8381a6798a70c6ff9304bdc8cb0163c23211d11628fae52ef9e0dca11a001cf066d56a8156fc201cd5df8a36ef694eecd258903fca7086c1fae7441e1d'
  it('should work with public key', function() {
    const tmp =
      '3a443d8381a6798a70c6ff9304bdc8cb0163c23211d11628fae52ef9e0dca11a001cf066d56a8156fc201cd5df8a36ef694eecd258903fca7086c1fae7441e1d'
    assert.equal(importPublic(Buffer.from(tmp, 'hex')).toString('hex'), pubKey)
  })
  it('should work with uncompressed SEC1 keys', function() {
    const tmp =
      '043a443d8381a6798a70c6ff9304bdc8cb0163c23211d11628fae52ef9e0dca11a001cf066d56a8156fc201cd5df8a36ef694eecd258903fca7086c1fae7441e1d'
    assert.equal(importPublic(Buffer.from(tmp, 'hex')).toString('hex'), pubKey)
  })
  it('should work with compressed SEC1 keys', function() {
    const tmp = '033a443d8381a6798a70c6ff9304bdc8cb0163c23211d11628fae52ef9e0dca11a'
    assert.equal(importPublic(Buffer.from(tmp, 'hex')).toString('hex'), pubKey)
  })
  it('should throw if input is not Buffer', function() {
    assert.throws(function() {
      importPublic((<unknown>pubKey) as Buffer)
    })
  })
})
describe('publicToAuthID', function() {
  it('should produce an authID given a public key', function() {
    const pubKey = Buffer.from(
      '8a271161197e408c9b64a684fcbd6c2b05c08dfcb2a8d3ef444671a128511b6379eba36c622cab9254f5221874a6d8629c83dc4f4720d31e763ab8e109dcbe2b',
      'hex',
    )
    const authID = 'Tf8ovHdgnDZXrMzqELpa1xs1cfdhJie3Pwa'
    const r = publicToAuthID(pubKey)
    assert.equal(r.toString('hex'), Buffer.from(authID).toString('hex'))
  })
  it('should produce an authID given a SEC1 public key', function() {
    const pubKey = Buffer.from(
      '048a271161197e408c9b64a684fcbd6c2b05c08dfcb2a8d3ef444671a128511b6379eba36c622cab9254f5221874a6d8629c83dc4f4720d31e763ab8e109dcbe2b',
      'hex',
    )
    const authID = 'Tf8ovHdgnDZXrMzqELpa1xs1cfdhJie3Pwa'
    const r = publicToAuthID(pubKey, true)
    assert.equal(r.toString('hex'), Buffer.from(authID).toString('hex'))
  })
  it("shouldn't produce an authID given an invalid SEC1 public key", function() {
    const pubKey = Buffer.from(
      '023a443d8381a6798a70c6ff9304bdc8cb0163c23211d11628fae52ef9e0dca11a001cf066d56a8156fc201cd5df8a36ef694eecd258903fca7086c1fae7441e1d',
      'hex',
    )
    assert.throws(function() {
      publicToAuthID(pubKey, true)
    })
  })
  it("shouldn't produce an authID given an invalid public key", function() {
    const pubKey = Buffer.from(
      '3a443d8381a6798a70c6ff9304bdc8cb0163c23211d11628fae52ef9e0dca11a001cf066d56a8156fc201cd5df8a36ef694eecd258903fca7086c1fae744',
      'hex',
    )
    assert.throws(function() {
      publicToAuthID(pubKey)
    })
  })
  it('should throw if input is not a buffer', function() {
    const pubKey: any =
      '0x3a443d8381a6798a70c6ff9304bdc8cb0163c23211d11628fae52ef9e0dca11a001cf066d56a8156fc201cd5df8a36ef694eecd258903fca7086c1fae7441e1d'
    assert.throws(function() {
      publicToAuthID(pubKey)
    })
  })
})

describe('privateToPublic', function() {
  it('should produce a public key given a private key', function() {
    const pubKey =
      '3a443d8381a6798a70c6ff9304bdc8cb0163c23211d11628fae52ef9e0dca11a001cf066d56a8156fc201cd5df8a36ef694eecd258903fca7086c1fae7441e1d'
    const privateKey = Buffer.from([
      234,
      84,
      189,
      197,
      45,
      22,
      63,
      136,
      201,
      58,
      176,
      97,
      87,
      130,
      207,
      113,
      138,
      46,
      251,
      158,
      81,
      167,
      152,
      154,
      171,
      27,
      8,
      6,
      126,
      156,
      28,
      95,
    ])
    const r: any = privateToPublic(privateKey).toString('hex')
    assert.equal(r.toString('hex'), pubKey)
  })
  it("shouldn't produce a public key given an invalid private key", function() {
    const privateKey1 = Buffer.from([
      234,
      84,
      189,
      197,
      45,
      22,
      63,
      136,
      201,
      58,
      176,
      97,
      87,
      130,
      207,
      113,
      138,
      46,
      251,
      158,
      81,
      167,
      152,
      154,
      171,
      27,
      8,
      6,
      126,
      156,
      28,
      95,
      42,
    ])
    const privateKey2 = Buffer.from([
      234,
      84,
      189,
      197,
      45,
      22,
      63,
      136,
      201,
      58,
      176,
      97,
      87,
      130,
      207,
      113,
      138,
      46,
      251,
      158,
      81,
      167,
      152,
      154,
      171,
      27,
      8,
      6,
      126,
      156,
      28,
    ])
    assert.throws(function() {
      privateToPublic(privateKey1)
    })
    assert.throws(function() {
      privateToPublic(privateKey2)
    })
  })

  it('should throw if private key is not Buffer', function() {
    const privateKey = '0xea54bdc52d163f88c93ab0615782cf718a2efb9e51a7989aab1b08067e9c1c5f'
    try {
      privateToPublic((<unknown>privateKey) as Buffer)
    } catch (err) {
      assert(err.message.includes('This method only supports Buffer'))
      assert(err.message.includes(privateKey))
    }
  })
})

describe('privateToAuthID', function() {
  it('should produce an authID given a private key', function() {
    const authID = 'TfGvAdKH2nRdV4zP4yBz4kJ2R9WzYHDe2EV'
    // Our private key
    const privateKey = Buffer.from(
      '6a5f415f49986006815ae7887016275aac8ffb239f9a2fa7172300578582b6c2',
      'hex',
    )
    const r: any = privateToAuthID(privateKey).toString('hex')
    assert.equal(r.toString('hex'), Buffer.from(authID).toString('hex'))
  })
})
describe('.isValidAuthID()', function() {
  it('should return true', function() {
    assert.equal(isValidAuthID(Buffer.from('Texkmv6QtyCSgSLwb1TCjwwyeFzxrWkrvpi')), true)
    assert.equal(isValidAuthID(Buffer.from('TfGtWFR262hoct1mC5ZEkTXQmANHnJupKWw')), true)
  })
  it('should return false', function() {
    assert.equal(isValidAuthID(Buffer.from('TfGtWFR262hoct1mC5ZEkTXQmANHnJup')), false)
    assert.equal(isValidAuthID(Buffer.from('TfGtWFR262hoct1mC5ZEkTXQmANHnJupKWwwwww')), false)
  })
  it('should return false', function() {
    assert.equal(isValidAuthID(Buffer.from('TIxkmv6QtyCSgSLwb1TCjwwyeFzxrWkrvpi')), false)
    assert.equal(isValidAuthID(Buffer.from('TOxkmv6QtyCSgSLwb1TCjwwyeFzxrWkrvpi')), false)
  })
})
