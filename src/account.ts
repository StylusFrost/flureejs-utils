import * as assert from 'assert'
import { assertIsBuffer } from './helpers'
import { hexToUnit8Array } from './bytes'
import { sha256, ripemd160 } from './hash'

const bs58check = require('bs58check')
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

  // hash sha2-256
  const hashSHA = sha256(pubKey)

  // hash ripemd160
  const hashRIPE = ripemd160(hashSHA, false)

  const pubPrefixed = '0f' + '02' + hashRIPE.toString('hex')

  const account_id = bs58check.encode(hexToUnit8Array(pubPrefixed))
  return Buffer.from(account_id)
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
  return publicToAuthID(privateToPublic(privateKey))
}

/**
 * Checks if the AuthID is a valid.
 */
export const isValidAuthID = function(authID: string): boolean {
  return /^T[123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]{34}$/.test(authID)
}
