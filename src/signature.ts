const { signatureImport } = require('secp256k1')
import * as BN from 'bn.js'
import { hexToUnit8Array } from './bytes'
import { importPublic } from './account'

const crypto = require('@fluree/crypto-base')

export interface ECDSASignature {
  v: number
  r: Buffer
  s: Buffer
}

/**
 * Returns the ECDSA signature of a message hash.
 */
export const ecsign = function(msg: Buffer, privateKey: Buffer): ECDSASignature {
  const sigDER = crypto.sign_message(msg.toString(), privateKey.toString('hex'))
  const sig = signatureImport(Buffer.from(sigDER.slice(2), 'hex'))
  const ret = {
    r: Buffer.from(sig.slice(0, 32)),
    s: Buffer.from(sig.slice(32, 64)),
    v: 27,
  }
  return ret
}

/**
 * ECDSA public key recovery from signature.
 * @returns Recovered public key
 */
export const ecrecover = function(msg: Buffer, v: number, r: Buffer, s: Buffer): Buffer {
  if (!isValidSigRecovery(v)) {
    throw new Error('Invalid signature v value')
  }
  const newR = r[0] & 0x80 ? Buffer.concat([hexToUnit8Array('00'), r]) : r
  const newS = s[0] & 0x80 ? Buffer.concat([hexToUnit8Array('00'), s]) : s
  const result =
    '02' +
    newR.length.toString(16) +
    newR.toString('hex') +
    '02' +
    newS.length.toString(16) +
    newS.toString('hex')
  const sigDER =
    calculateSigRecovery(v).toString(16) +
    '30' +
    Buffer.from(result, 'hex').length.toString(16) +
    result
  const senderPubKey = crypto.pub_key_from_message(msg.toString(), sigDER)
  return importPublic(Buffer.from(senderPubKey, 'hex'))
}

/**
 * Validate a ECDSA signature.
 */
export const isValidSignature = function(v: number, r: Buffer, s: Buffer): boolean {
  const SECP256K1_N = new BN('fffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141', 16)

  if (r.length !== 32 || s.length !== 32) {
    return false
  }

  if (!isValidSigRecovery(calculateSigRecovery(v))) {
    return false
  }

  const rBN: BN = new BN(r)
  const sBN: BN = new BN(s)

  if (rBN.isZero() || rBN.gt(SECP256K1_N) || sBN.isZero() || sBN.gt(SECP256K1_N)) {
    return false
  }

  return true
}

function calculateSigRecovery(v: number): number {
  return v
}

function isValidSigRecovery(recovery: number): boolean {
  return recovery === 27
}
