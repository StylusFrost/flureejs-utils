import * as assert from 'assert'
import { AuthID } from '../src'

describe('AuthID', () => {
  it('should instantiate from public key', () => {
    const pubKey = Buffer.from(
      '3a443d8381a6798a70c6ff9304bdc8cb0163c23211d11628fae52ef9e0dca11a001cf066d56a8156fc201cd5df8a36ef694eecd258903fca7086c1fae7441e1d',
      'hex',
    )
    const str = 'Tf3pTk9ECfWsXybjsdqjbYKYYpj9Vq3DTWs'
    const authID = AuthID.fromPublicKey(pubKey)
    assert.equal(authID.toString(), str)
  })

  it('should fail to instantiate from invalid public key', () => {
    const pubKey = Buffer.from(
      '3a443d8381a6798a70c6ff9304bdc8cb0163c23211d11628fae52ef9e0dca11a001cf066d56a8156fc201cd5df8a36ef694eecd258903fca7086c1fae744',
      'hex',
    )
    assert.throws(() => AuthID.fromPublicKey(pubKey))
  })

  it('should instantiate from private key', () => {
    // prettier-ignore
    const privateKey = Buffer.from([234, 84, 189, 197, 45, 22, 63, 136, 201, 58, 176, 97, 87, 130, 207, 113, 138, 46, 251, 158, 81, 167, 152, 154, 171, 27, 8, 6, 126, 156, 28, 95])
    const str = 'Tf3pTk9ECfWsXybjsdqjbYKYYpj9Vq3DTWs'
    const addr = AuthID.fromPrivateKey(privateKey)
    assert.equal(addr.toString(), str)
  })
})
