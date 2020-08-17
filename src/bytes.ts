import * as BN from 'bn.js'
const isHexPrefixed = require('is-hex-prefixed')
const stripHexPrefix = require('strip-hex-prefix')
import { assertIsBuffer } from './helpers'

/**
 * Converts a `String` into a `Uint8Array`.
 * @param str `String` object to convert
 */
export const hexToUnit8Array = function(str: string) {
  return new Uint8Array(Buffer.from(str, 'hex'))
}

/**
 * Returns a buffer filled with 0s.
 * @param bytes the number of bytes the buffer should be
 */
export const zeros = function(bytes: number): Buffer {
  return Buffer.allocUnsafe(bytes).fill(0)
}

/**
 * Left Pads a `Buffer` with leading zeros till it has `length` bytes.
 * Or it truncates the beginning if it exceeds.
 * @param msg the value to pad (Buffer)
 * @param length the number of bytes the output should be
 * @return (Buffer)
 */
export const setLengthLeft = function(msg: Buffer, length: number) {
  assertIsBuffer(msg)
  return setLength(msg, length, false)
}

/**
 * Right Pads a `Buffer` with trailing zeros till it has `length` bytes.
 * it truncates the end if it exceeds.
 * @param msg the value to pad (Buffer)
 * @param length the number of bytes the output should be
 * @return (Buffer)
 */
export const setLengthRight = function(msg: Buffer, length: number) {
  assertIsBuffer(msg)
  return setLength(msg, length, true)
}

/**
 * Pads a `Buffer` with zeros till it has `length` bytes.
 * Truncates the beginning or end of input if its length exceeds `length`.
 * @param msg the value to pad (Buffer)
 * @param length the number of bytes the output should be
 * @param right whether to start padding form the left or right
 * @return (Buffer)
 */
const setLength = function(msg: Buffer, length: number, right: boolean) {
  const buf = zeros(length)
  if (right) {
    if (msg.length < length) {
      msg.copy(buf)
      return buf
    }
    return msg.slice(0, length)
  } else {
    if (msg.length < length) {
      msg.copy(buf, length - msg.length)
      return buf
    }
    return msg.slice(-length)
  }
}

/**
 * Attempts to turn a value into a `Buffer`. As input it supports `Buffer`, `String`, `Number`, null/undefined, `BN` and other objects with a `toArray()` method.
 * @param v the value
 */
export const toBuffer = function(v: any): Buffer {
  if (!Buffer.isBuffer(v)) {
    if (Array.isArray(v) || v instanceof Uint8Array) {
      v = Buffer.from(v as Uint8Array)
    } else if (typeof v === 'string') {
      if (isHexPrefixed(v)) {
        v = Buffer.from(padToEven(stripHexPrefix(v)), 'hex')
      } else {
        v = Buffer.from(v)
      }
    } else if (typeof v === 'number') {
      v = intToBuffer(v)
    } else if (v === null || v === undefined) {
      v = Buffer.allocUnsafe(0)
    } else if (BN.isBN(v)) {
      v = v.toArrayLike(Buffer)
    } else if (v.toArray) {
      // converts a BN to a Buffer
      v = Buffer.from(v.toArray())
    } else {
      throw new Error('invalid type')
    }
  }
  return v
}

/**
 * Converts an `Number` to a `Buffer`
 * @param {Number} i
 * @return {Buffer}
 */
function intToBuffer(i: Number) {
  const hex = intToHex(i)
  return new Buffer(padToEven(hex.slice(2)), 'hex')
}

/**
 * Converts a `Number` into a hex `String`
 * @param {Number} i
 * @return {String}
 */
function intToHex(i: Number) {
  const hex = i.toString(16)

  return `0x${hex}`
}

/*
 * Pads a `String` to have an even length
 * @param {String} value
 * @return {String} output
 */
function padToEven(value: string) {
  let a = value

  if (typeof a !== 'string') {
    throw new Error(
      `while padding to even, value must be string, is currently ${typeof a}, while padToEven.`,
    )
  }

  if (a.length % 2) {
    a = `0${a}`
  }

  return a
}
