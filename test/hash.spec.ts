import * as assert from 'assert'
import {
  keccak,
  keccak256,
  keccakFromString,
  keccakFromHexString,
  keccakFromArray,
  sha256,
  sha256FromString,
  sha256FromArray,
  ripemd160,
  ripemd160FromString,
  ripemd160FromArray,
  toBuffer,
} from '../src'

describe('keccak', function() {
  it('should produce a keccak256 hash', function() {
    const msg = '0x3c9229289a6125f7fdf1885a77bb12c37a8d3b4962d936f7e3084dece32a3ca1'
    const r = '82ff40c0a986c6a5cfad4ddf4c3aa6996f1a7837f9c398e17e5de5cbd5a12b28'
    const hash = keccak(toBuffer(msg))
    assert.equal(hash.toString('hex'), r)
  })
  it('should error if provided incorrect bits', function() {
    const msg = '0x3c9229289a6125f7fdf1885a77bb12c37a8d3b4962d936f7e3084dece32a3ca1'
    assert.throws(function() {
      keccak(toBuffer(msg), 1024)
    })
  })
})

describe('keccak256', function() {
  it('should produce a hash (keccak(a, 256) alias)', function() {
    const msg = '0x3c9229289a6125f7fdf1885a77bb12c37a8d3b4962d936f7e3084dece32a3ca1'
    const r = '82ff40c0a986c6a5cfad4ddf4c3aa6996f1a7837f9c398e17e5de5cbd5a12b28'
    const hash = keccak256(toBuffer(msg))
    assert.equal(hash.toString('hex'), r)
  })
})

describe('keccakFromString', function() {
  it('should produce a hash', function() {
    const msg = '3c9229289a6125f7fdf1885a77bb12c37a8d3b4962d936f7e3084dece32a3ca1'
    const r = '22ae1937ff93ec72c4d46ff3e854661e3363440acd6f6e4adf8f1a8978382251'
    const hash = keccakFromString(msg)
    assert.equal(hash.toString('hex'), r)
  })
  it('should throw if input is not a string', function() {
    const buf = toBuffer('0x3c9229289a6125f7fdf1885a77bb12c37a8d3b4962d936f7e3084dece32a3ca1')
    assert.throws(function() {
      keccakFromString((<unknown>buf) as string)
    })
  })
})

describe('keccakFromHexString', function() {
  it('should produce a hash', function() {
    const msg = '0x3c9229289a6125f7fdf1885a77bb12c37a8d3b4962d936f7e3084dece32a3ca1'
    const r = '82ff40c0a986c6a5cfad4ddf4c3aa6996f1a7837f9c398e17e5de5cbd5a12b28'
    const hash = keccakFromHexString(msg)
    assert.equal(hash.toString('hex'), r)
  })
  it('should throw if input is not hex-prefixed', function() {
    const msg = '3c9229289a6125f7fdf1885a77bb12c37a8d3b4962d936f7e3084dece32a3ca1'
    assert.throws(function() {
      keccakFromHexString(msg)
    })
  })
  it('should throw if input is not a string', function() {
    const buf = toBuffer('0x3c9229289a6125f7fdf1885a77bb12c37a8d3b4962d936f7e3084dece32a3ca1')
    assert.throws(function() {
      keccakFromHexString((<unknown>buf) as string)
    })
  })
})

describe('keccakFromArray', function() {
  it('should produce a hash', function() {
    const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 0]
    const r = 'fba8669bd39e3257e64752758f3a0d3218865a15757c6b0bc48b8ef95bc8bfd5'
    const hash = keccakFromArray(arr)
    assert.equal(hash.toString('hex'), r)
  })
  it('should throw if input is not an array', function() {
    const buf = toBuffer([0, 1, 2, 3, 4, 5, 6, 7, 8, 0])
    assert.throws(function() {
      keccakFromArray((<unknown>buf) as number[])
    })
  })
})

describe('sha256', function() {
  it('should produce a sha256', function() {
    const msg = '0x3c9229289a6125f7fdf1885a77bb12c37a8d3b4962d936f7e3084dece32a3ca1'
    const r = '58bbda5e10bc11a32d808e40f9da2161a64f00b5557762a161626afe19137445'
    const hash = sha256(toBuffer(msg))
    assert.equal(hash.toString('hex'), r)
  })
  it('should error if input is not Buffer', function() {
    const msg = '0x3c9229289a6125f7fdf1885a77bb12c37a8d3b4962d936f7e3084dece32a3ca1'
    assert.throws(function() {
      sha256((<unknown>msg) as Buffer)
    })
  })
})

describe('sha256FromString', function() {
  it('should produce a sha256', function() {
    const msg = '0x3c9229289a6125f7fdf1885a77bb12c37a8d3b4962d936f7e3084dece32a3ca1'
    const r = '58bbda5e10bc11a32d808e40f9da2161a64f00b5557762a161626afe19137445'
    const hash = sha256FromString(msg)
    assert.equal(hash.toString('hex'), r)
  })
  it('should error if input is not Buffer', function() {
    const msg = '0x3c9229289a6125f7fdf1885a77bb12c37a8d3b4962d936f7e3084dece32a3ca1'
    assert.throws(function() {
      sha256FromString((<unknown>toBuffer(msg)) as string)
    })
  })
})

describe('sha256FromArray', function() {
  it('should produce a sha256', function() {
    const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 0]
    const r = '5443c487d45d01c56150d91e7a071c69a97939b1c57874b73989a9ff7875e86b'
    const hash = sha256FromArray(arr)
    assert.equal(hash.toString('hex'), r)
  })
  it('should error if input is not Buffer', function() {
    const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 0]
    assert.throws(function() {
      sha256FromArray((<unknown>toBuffer(arr)) as number[])
    })
  })
})

describe('ripemd160', function() {
  it('should produce a ripemd160', function() {
    const msg = '0x3c9229289a6125f7fdf1885a77bb12c37a8d3b4962d936f7e3084dece32a3ca1'
    const r = '4bb0246cbfdfddbe605a374f1187204c896fabfd'
    const hash = ripemd160(toBuffer(msg), false)
    assert.equal(hash.toString('hex'), r)
  })

  it('should produce a padded ripemd160', function() {
    const msg = '0x3c9229289a6125f7fdf1885a77bb12c37a8d3b4962d936f7e3084dece32a3ca1'
    const r = '0000000000000000000000004bb0246cbfdfddbe605a374f1187204c896fabfd'
    const hash = ripemd160(toBuffer(msg), true)
    assert.equal(hash.toString('hex'), r)
  })

  it('should error if input is not Buffer', function() {
    const msg = '0x3c9229289a6125f7fdf1885a77bb12c37a8d3b4962d936f7e3084dece32a3ca1'
    assert.throws(function() {
      ripemd160((<unknown>msg) as Buffer, false)
    })
  })
})

describe('ripemd160FromString', function() {
  it('should produce a ripemd160', function() {
    const msg = '0x3c9229289a6125f7fdf1885a77bb12c37a8d3b4962d936f7e3084dece32a3ca1'
    const r = '4bb0246cbfdfddbe605a374f1187204c896fabfd'
    const hash = ripemd160FromString(msg, false)
    assert.equal(hash.toString('hex'), r)
  })

  it('should produce a padded ripemd160', function() {
    const msg = '0x3c9229289a6125f7fdf1885a77bb12c37a8d3b4962d936f7e3084dece32a3ca1'
    const r = '0000000000000000000000004bb0246cbfdfddbe605a374f1187204c896fabfd'
    const hash = ripemd160FromString(msg, true)
    assert.equal(hash.toString('hex'), r)
  })

  it('should error if input is not a string', function() {
    const msg = '0x3c9229289a6125f7fdf1885a77bb12c37a8d3b4962d936f7e3084dece32a3ca1'
    assert.throws(function() {
      ripemd160FromString((<unknown>toBuffer(msg)) as string, false)
    })
  })
})

describe('ripemd160FromArray', function() {
  it('should produce a ripemd160', function() {
    const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 0]
    const r = 'ddbb5062318b209e3dbfc389fe61840363050071'
    const hash = ripemd160FromArray(arr, false)
    assert.equal(hash.toString('hex'), r)
  })

  it('should produce a padded ripemd160', function() {
    const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 0]
    const r = '000000000000000000000000ddbb5062318b209e3dbfc389fe61840363050071'
    const hash = ripemd160FromArray(arr, true)
    assert.equal(hash.toString('hex'), r)
  })

  it('should error if input is not an array', function() {
    const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 0]
    assert.throws(function() {
      ripemd160FromArray((<unknown>toBuffer(arr)) as number[], false)
    })
  })
})
