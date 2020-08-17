const assert = require('assert')

import { privateToAuthID, pubToAuthID } from './account'

export class AuthID {
  public readonly buf: Buffer
  constructor(buf: Buffer) {
    assert(buf.length === 35, 'Invalid authID length')
    this.buf = buf
  }

  /**
   * Returns an authID for a given public key.
   * @param pubKey The two points of an uncompressed key
   */
  static fromPublicKey(pubKey: Buffer): AuthID {
    assert(Buffer.isBuffer(pubKey), 'Public key should be Buffer')
    const buf = pubToAuthID(pubKey)
    return new AuthID(buf)
  }

  /**
   * Returns an authID for a given private key.
   * @param privateKey A private key must be 256 bits wide
   */
  static fromPrivateKey(privateKey: Buffer): AuthID {
    assert(Buffer.isBuffer(privateKey), 'Private key should be Buffer')
    const buf = privateToAuthID(privateKey)
    return new AuthID(buf)
  }

  /**
   * Returns base58 authID.
   */
  toString(): string {
    return this.buf.toString()
  }
}
