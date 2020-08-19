import * as assert from 'assert'
import { AuthID } from '../src'

describe('AuthID', () => {
  it('should instantiate from public key', () => {
    const pubKey = Buffer.from(
      '991719b37817f6108fc8b0e824d3a9daa3d39bc97ecfd4f8bc7ef3b71d4c6391b6b27153667e924fceaf9993f5ed9779e794c2826d06e52771c63138287bb542',
      'hex',
    )
    const str = 'TfGvAdKH2nRdV4zP4yBz4kJ2R9WzYHDe2EV'
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
