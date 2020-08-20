import * as assert from 'assert'
import { assertIsBuffer } from './helpers'
import * as BN from 'bn.js'

const crypto = require('@fluree/crypto-base')
const {
  privateKeyVerify,
  publicKeyVerify,
  publicKeyConvert,
  publicKeyCreate,
} = require('secp256k1')

/**
 * Checks if the private key satisfies the rules of the curve secp256k1.
 */
export const isValidPrivate = function(privateKey: Buffer): boolean {
  return privateKeyVerify(privateKey)
}

/**
 * Checks if the public key satisfies the rules of the curve secp256k1
 * @param publicKey The two points of an uncompressed key, unless sanitize is enabled
 * @param sanitize Accept public keys in other formats
 */
export const isValidPublic = function(publicKey: Buffer, sanitize: boolean = false): boolean {
  assertIsBuffer(publicKey)
  if (publicKey.length === 64) {
    // Convert to SEC1 for secp256k1
    return publicKeyVerify(Buffer.concat([Buffer.from([4]), publicKey]))
  }

  if (!sanitize) {
    return false
  }

  return publicKeyVerify(publicKey)
}

/**
 * Reserialize public key to another format
 */
export const importPublic = function(publicKey: Buffer): Buffer {
  assertIsBuffer(publicKey)
  if (publicKey.length !== 64) {
    publicKey = Buffer.from(publicKeyConvert(publicKey, false).slice(1))
  }
  return publicKey
}

/**
 * Returns the fluree authID  of a given public key.
 * Accepts "public keys" and SEC1 encoded keys.
 * @param pubKey The two points of an uncompressed key, unless sanitize is enabled
 * @param sanitize Accept public keys in other formats
 */
export const pubToAuthID = function(pubKey: Buffer, sanitize: boolean = false): Buffer {
  assertIsBuffer(pubKey)
  if (sanitize && pubKey.length !== 64) {
    pubKey = Buffer.from(publicKeyConvert(pubKey, false).slice(1))
  }
  assert(pubKey.length === 64)

  // Ussing compress pubkey value
  const compress = new BN(pubKey, 'hex').isEven()
    ? '02' + pubKey.slice(0, 32).toString('hex')
    : '03' + pubKey.slice(0, 32).toString('hex')

  return Buffer.from(crypto.account_id_from_public(compress))
}

export const publicToAuthID = pubToAuthID

/**
 * Returns the public key of a given private key.
 * @param privateKey A private key must be 256 bits wide
 */
export const privateToPublic = function(privateKey: Buffer): Buffer {
  assertIsBuffer(privateKey)
  // skip the type flag and use the X, Y points
  return Buffer.from(publicKeyCreate(privateKey, false)).slice(1)
}

/**
 * Returns the fluree authid  of a given private key.
 * @param privateKey A private key must be 256 bits wide
 */
export const privateToAuthID = function(privateKey: Buffer): Buffer {
  return Buffer.from(crypto.account_id_from_private(privateKey.toString('hex')))
}

/**
 * Checks if the AuthID is a valid.
 */
export const isValidAuthID = function(authID: Buffer): boolean {
  return /^T[123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]{34}$/.test(
    authID.toString(),
  )
}
