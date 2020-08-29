import * as assert from 'assert'
import { zeros, defineProperties } from '../src'
const Buffer = require('buffer').Buffer
describe('define', function() {
  const fields = [
    {
      name: 'aword',
      alias: 'blah',
      word: true,
      default: Buffer.allocUnsafe(0),
    },
    {
      name: 'empty',
      allowZero: true,
      length: 20,
      default: Buffer.allocUnsafe(0),
    },
    {
      name: 'cannotBeZero',
      allowZero: false,
      default: Buffer.from([0]),
    },
    {
      name: 'value',
      default: Buffer.allocUnsafe(0),
    },
    {
      name: 'r',
      length: 32,
      allowLess: true,
      default: zeros(32),
    },
  ]

  it('should trim zeros', function() {
    const someOb: any = {}
    defineProperties(someOb, fields)
    // Define Properties
    someOb.r = '0x00004'
    assert.equal(someOb.r.toString('hex'), '04')

    someOb.r = Buffer.from([0, 0, 0, 0, 4])
    assert.equal(someOb.r.toString('hex'), '04')
  })

  it("shouldn't allow wrong size for exact size requirements", function() {
    const someOb = {}
    defineProperties(someOb, fields)

    assert.throws(function() {
      const tmp = [
        {
          name: 'mustBeExactSize',
          allowZero: false,
          length: 20,
          default: Buffer.from([1, 2, 3, 4]),
        },
      ]
      defineProperties(someOb, tmp)
    })
  })

  it('it should not accept invalid values in the constuctor', function() {
    const someOb = {}
    assert.throws(function() {
      defineProperties(someOb, fields, 5)
    }, 'should throw on nonsensical data')

    assert.throws(function() {
      defineProperties(someOb, fields, Array(6))
    }, 'should throw on invalid arrays')
  })

  it('alias should work ', function() {
    const someOb: any = {}
    const data = {
      aword: '0x01',
      cannotBeZero: '0x02',
      value: '0x03',
      r: '0x04',
    }

    defineProperties(someOb, fields, data)
    assert.equal(someOb.blah.toString('hex'), '01')
    someOb.blah = '0x09'
    assert.equal(someOb.blah.toString('hex'), '09')
    assert.equal(someOb.aword.toString('hex'), '09')
  })

  it('alias should work #2', function() {
    const someOb: any = {}
    const data = { blah: '0x1' }

    defineProperties(someOb, fields, data)
    assert.equal(someOb.blah.toString('hex'), '01')
    assert.equal(someOb.aword.toString('hex'), '01')
  })
})
