import * as assert from 'assert'
import { AuthID } from '../src'

describe('AuthID', () => {
  it('should instantiate from public key', () => {
    const pubKey = Buffer.from(
      '3a443d8381a6798a70c6ff9304bdc8cb0163c23211d11628fae52ef9e0dca11a001cf066d56a8156fc201cd5df8a36ef694eecd258903fca7086c1fae7441e1d',
      'hex',
    )
    const str = 'Tezqxp8Cuyx8aPzwZhj7rs5EjqKYYowxRss'
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
    const privateKey = Buffer.from('fe0af041abb1c734f8ab18d5c35385ef1f1c54a7d91fd2a5f9fdd03fcf077600','hex')
    const str = 'Tf8ovHdgnDZXrMzqELpa1xs1cfdhJie3Pwa'
    const addr = AuthID.fromPrivateKey(privateKey)
    assert.equal(addr.toString(), str)
  })
})
