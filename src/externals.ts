/**
 * Re-exports commonly used modules:
 * * Exports [`BN`](https://github.com/indutny/bn.js), Exports [`BN`](https://github.com/bitcoinjs/bs58check) .
 * @packageDocumentation
 */

// TODO: This can be replaced with a normal ESM import once
// the new major version of the typescript config package
// is released and adopted here.
import BN = require('bn.js')
//const BS58check = require('bs58check')

/**
 * [`BN`](https://github.com/indutny/bn.js)
 */
export { BN }

//export { BS58check }
