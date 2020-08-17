import * as assert from 'assert'
import * as BN from 'bn.js'
import { zeros, setLengthLeft, setLengthRight, toBuffer, bufferToHex } from '../src'

describe('zeros function', function() {
  it('should produce lots of 0s', function() {
    const z60 = zeros(30)
    const zs60 = '000000000000000000000000000000000000000000000000000000000000'
    assert.equal(z60.toString('hex'), zs60)
  })
})

describe('setLengthLeft', function() {
  it('should left pad a Buffer', function() {
    const buf = Buffer.from([9, 9])
    const padded = setLengthLeft(buf, 3)
    assert.equal(padded.toString('hex'), '000909')
  })
  it('should left truncate a Buffer', function() {
    const buf = Buffer.from([9, 0, 9])
    const padded = setLengthLeft(buf, 2)
    assert.equal(padded.toString('hex'), '0009')
  })
  it('should throw if input is not a Buffer', function() {
    assert.throws(function() {
      setLengthLeft((<unknown>[9, 9]) as Buffer, 3)
    })
  })
})

describe('setLengthRight', function() {
  it('should right pad a Buffer', function() {
    const buf = Buffer.from([9, 9])
    const padded = setLengthRight(buf, 3)
    assert.equal(padded.toString('hex'), '090900')
  })
  it('should right truncate a Buffer', function() {
    const buf = Buffer.from([9, 0, 9])
    const padded = setLengthRight(buf, 2)
    assert.equal(padded.toString('hex'), '0900')
  })
  it('should throw if input is not a Buffer', function() {
    assert.throws(function() {
      setLengthRight((<unknown>[9, 9]) as Buffer, 3)
    })
  })
})

describe('bufferToHex', function() {
  it('should convert a buffer to hex', function() {
    const buf = Buffer.from('5b9ac8', 'hex')
    const hex = bufferToHex(buf)
    assert.equal(hex, '0x5b9ac8')
  })
  it('empty buffer', function() {
    const buf = Buffer.alloc(0)
    const hex = bufferToHex(buf)
    assert.strictEqual(hex, '0x')
  })
})

describe('toBuffer', function() {
  it('should work', function() {
    // Buffer
    assert.deepEqual(toBuffer(Buffer.allocUnsafe(0)), Buffer.allocUnsafe(0))
    // Array
    assert.deepEqual(toBuffer([]), Buffer.allocUnsafe(0))
    // String
    assert.deepEqual(toBuffer('0x11'), Buffer.from([17]))
    assert.deepEqual(toBuffer('0x1234').toString('hex'), '1234')
    assert.deepEqual(toBuffer('0x'), Buffer.from([]))
    // Number
    assert.deepEqual(toBuffer(1), Buffer.from([1]))
    // null
    assert.deepEqual(toBuffer(null), Buffer.allocUnsafe(0))
    // undefined
    assert.deepEqual(toBuffer(undefined), Buffer.allocUnsafe(0))
    // 'toBN'
    assert.deepEqual(toBuffer(new BN(1)), Buffer.from([1]))
    // 'toArray'
    assert.deepEqual(
      toBuffer({
        toArray: function() {
          return [1]
        },
      }),
      Buffer.from([1]),
    )
  })
  it('should fail', function() {
    assert.throws(function() {
      toBuffer({ test: 1 })
    })
  })
})
