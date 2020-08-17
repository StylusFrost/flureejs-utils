const { ecdsaSign, ecdsaRecover, publicKeyConvert } = require('secp256k1')
import * as BN from 'bn.js'
import { setLengthLeft } from './bytes'

export interface ECDSASignature {
  v: number
  r: Buffer
  s: Buffer
}

/**
 * Returns the ECDSA signature of a message hash.
 */
export const ecsign = function(msgHash: Buffer, privateKey: Buffer): ECDSASignature {
  const sig = ecdsaSign(msgHash, privateKey)
  const recovery: number = sig.recid

  const ret = {
    r: Buffer.from(sig.signature.slice(0, 32)),
    s: Buffer.from(sig.signature.slice(32, 64)),
    v: recovery + 27,
  }

  return ret
}

/**
 * ECDSA public key recovery from signature.
 * @returns Recovered public key
 */
export const ecrecover = function(msgHash: Buffer, v: number, r: Buffer, s: Buffer): Buffer {
  const signature = Buffer.concat([setLengthLeft(r, 32), setLengthLeft(s, 32)], 64)
  const recovery = calculateSigRecovery(v)
  if (!isValidSigRecovery(recovery)) {
    throw new Error('Invalid signature v value')
  }
  const senderPubKey = ecdsaRecover(signature, recovery, msgHash)
  return Buffer.from(publicKeyConvert(senderPubKey, false).slice(1))
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

function isValidSigRecovery(recovery: number): boolean {
  return recovery === 0 || recovery === 1
}

function calculateSigRecovery(v: number): number {
  return v - 27
}
