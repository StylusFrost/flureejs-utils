
#  flureejs-utils

## Index

### Classes

* [AuthID](classes/authid.md)

### Interfaces

* [ECDSASignature](interfaces/ecdsasignature.md)

### Variables

* [publicToAuthID](#publictoauthid)

### Functions

* [assertIsArray](#assertisarray)
* [assertIsBuffer](#assertisbuffer)
* [assertIsHexString](#assertishexstring)
* [assertIsString](#assertisstring)
* [ecrecover](#ecrecover)
* [ecsign](#ecsign)
* [hexToUnit8Array](#hextounit8array)
* [importPublic](#importpublic)
* [isValidAuthID](#isvalidauthid)
* [isValidPrivate](#isvalidprivate)
* [isValidPublic](#isvalidpublic)
* [isValidSignature](#isvalidsignature)
* [keccak](#keccak)
* [keccak256](#keccak256)
* [keccakFromArray](#keccakfromarray)
* [keccakFromHexString](#keccakfromhexstring)
* [keccakFromString](#keccakfromstring)
* [privateToAuthID](#privatetoauthid)
* [privateToPublic](#privatetopublic)
* [pubToAuthID](#pubtoauthid)
* [ripemd160](#ripemd160)
* [ripemd160FromArray](#ripemd160fromarray)
* [ripemd160FromString](#ripemd160fromstring)
* [setLengthLeft](#setlengthleft)
* [setLengthRight](#setlengthright)
* [sha256](#sha256)
* [sha256FromArray](#sha256fromarray)
* [sha256FromString](#sha256fromstring)
* [toBuffer](#tobuffer)
* [zeros](#zeros)

---

## Variables

<a id="publictoauthid"></a>

### `<Const>` publicToAuthID

**● publicToAuthID**: *[pubToAuthID]()* =  pubToAuthID

*Defined in [account.ts:76](https://github.com/StylusFrost/flureejs-utils/blob/843f69d/src/account.ts#L76)*

___

## Functions

<a id="assertisarray"></a>

### `<Const>` assertIsArray

▸ **assertIsArray**(input: *`number`[]*): `void`

*Defined in [helpers.ts:29](https://github.com/StylusFrost/flureejs-utils/blob/843f69d/src/helpers.ts#L29)*

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| input | `number`[] |  value to check |

**Returns:** `void`

___
<a id="assertisbuffer"></a>

### `<Const>` assertIsBuffer

▸ **assertIsBuffer**(input: *`Buffer`*): `void`

*Defined in [helpers.ts:18](https://github.com/StylusFrost/flureejs-utils/blob/843f69d/src/helpers.ts#L18)*

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| input | `Buffer` |  value to check |

**Returns:** `void`

___
<a id="assertishexstring"></a>

### `<Const>` assertIsHexString

▸ **assertIsHexString**(input: *`string`*): `void`

*Defined in [helpers.ts:7](https://github.com/StylusFrost/flureejs-utils/blob/843f69d/src/helpers.ts#L7)*

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| input | `string` |  string to check hex prefix of |

**Returns:** `void`

___
<a id="assertisstring"></a>

### `<Const>` assertIsString

▸ **assertIsString**(input: *`string`*): `void`

*Defined in [helpers.ts:40](https://github.com/StylusFrost/flureejs-utils/blob/843f69d/src/helpers.ts#L40)*

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| input | `string` |  value to check |

**Returns:** `void`

___
<a id="ecrecover"></a>

### `<Const>` ecrecover

▸ **ecrecover**(msgHash: *`Buffer`*, v: *`number`*, r: *`Buffer`*, s: *`Buffer`*): `Buffer`

*Defined in [signature.ts:31](https://github.com/StylusFrost/flureejs-utils/blob/843f69d/src/signature.ts#L31)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| msgHash | `Buffer` |
| v | `number` |
| r | `Buffer` |
| s | `Buffer` |

**Returns:** `Buffer`
Recovered public key

___
<a id="ecsign"></a>

### `<Const>` ecsign

▸ **ecsign**(msgHash: *`Buffer`*, privateKey: *`Buffer`*): [ECDSASignature](interfaces/ecdsasignature.md)

*Defined in [signature.ts:14](https://github.com/StylusFrost/flureejs-utils/blob/843f69d/src/signature.ts#L14)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| msgHash | `Buffer` |
| privateKey | `Buffer` |

**Returns:** [ECDSASignature](interfaces/ecdsasignature.md)

___
<a id="hextounit8array"></a>

### `<Const>` hexToUnit8Array

▸ **hexToUnit8Array**(str: *`string`*): `Uint8Array`

*Defined in [bytes.ts:10](https://github.com/StylusFrost/flureejs-utils/blob/843f69d/src/bytes.ts#L10)*

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| str | `string` |  \`String\` object to convert |

**Returns:** `Uint8Array`

___
<a id="importpublic"></a>

### `<Const>` importPublic

▸ **importPublic**(publicKey: *`Buffer`*): `Buffer`

*Defined in [account.ts:43](https://github.com/StylusFrost/flureejs-utils/blob/843f69d/src/account.ts#L43)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| publicKey | `Buffer` |

**Returns:** `Buffer`

___
<a id="isvalidauthid"></a>

### `<Const>` isValidAuthID

▸ **isValidAuthID**(authID: *`string`*): `boolean`

*Defined in [account.ts:99](https://github.com/StylusFrost/flureejs-utils/blob/843f69d/src/account.ts#L99)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| authID | `string` |

**Returns:** `boolean`

___
<a id="isvalidprivate"></a>

### `<Const>` isValidPrivate

▸ **isValidPrivate**(privateKey: *`Buffer`*): `boolean`

*Defined in [account.ts:17](https://github.com/StylusFrost/flureejs-utils/blob/843f69d/src/account.ts#L17)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| privateKey | `Buffer` |

**Returns:** `boolean`

___
<a id="isvalidpublic"></a>

### `<Const>` isValidPublic

▸ **isValidPublic**(publicKey: *`Buffer`*, sanitize?: *`boolean`*): `boolean`

*Defined in [account.ts:26](https://github.com/StylusFrost/flureejs-utils/blob/843f69d/src/account.ts#L26)*

**Parameters:**

| Name | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| publicKey | `Buffer` | - |  The two points of an uncompressed key, unless sanitize is enabled |
| `Default value` sanitize | `boolean` | false |  Accept public keys in other formats |

**Returns:** `boolean`

___
<a id="isvalidsignature"></a>

### `<Const>` isValidSignature

▸ **isValidSignature**(v: *`number`*, r: *`Buffer`*, s: *`Buffer`*): `boolean`

*Defined in [signature.ts:44](https://github.com/StylusFrost/flureejs-utils/blob/843f69d/src/signature.ts#L44)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| v | `number` |
| r | `Buffer` |
| s | `Buffer` |

**Returns:** `boolean`

___
<a id="keccak"></a>

### `<Const>` keccak

▸ **keccak**(a: *`Buffer`*, bits?: *`number`*): `Buffer`

*Defined in [hash.ts:11](https://github.com/StylusFrost/flureejs-utils/blob/843f69d/src/hash.ts#L11)*

**Parameters:**

| Name | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| a | `Buffer` | - |  The input data (Buffer) |
| `Default value` bits | `number` | 256 |  (number = 256) The Keccak width |

**Returns:** `Buffer`

___
<a id="keccak256"></a>

### `<Const>` keccak256

▸ **keccak256**(a: *`Buffer`*): `Buffer`

*Defined in [hash.ts:27](https://github.com/StylusFrost/flureejs-utils/blob/843f69d/src/hash.ts#L27)*

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| a | `Buffer` |  The input data (Buffer) |

**Returns:** `Buffer`

___
<a id="keccakfromarray"></a>

### `<Const>` keccakFromArray

▸ **keccakFromArray**(a: *`number`[]*, bits?: *`number`*): `Buffer`

*Defined in [hash.ts:57](https://github.com/StylusFrost/flureejs-utils/blob/843f69d/src/hash.ts#L57)*

**Parameters:**

| Name | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| a | `number`[] | - |  The input data (number\[\]) |
| `Default value` bits | `number` | 256 |  (number = 256) The Keccak width |

**Returns:** `Buffer`

___
<a id="keccakfromhexstring"></a>

### `<Const>` keccakFromHexString

▸ **keccakFromHexString**(a: *`string`*, bits?: *`number`*): `Buffer`

*Defined in [hash.ts:47](https://github.com/StylusFrost/flureejs-utils/blob/843f69d/src/hash.ts#L47)*

**Parameters:**

| Name | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| a | `string` | - |  The input data (String) |
| `Default value` bits | `number` | 256 |  (number = 256) The Keccak width |

**Returns:** `Buffer`

___
<a id="keccakfromstring"></a>

### `<Const>` keccakFromString

▸ **keccakFromString**(a: *`string`*, bits?: *`number`*): `Buffer`

*Defined in [hash.ts:36](https://github.com/StylusFrost/flureejs-utils/blob/843f69d/src/hash.ts#L36)*

**Parameters:**

| Name | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| a | `string` | - |  The input data (String) |
| `Default value` bits | `number` | 256 |  (number = 256) The Keccak width |

**Returns:** `Buffer`

___
<a id="privatetoauthid"></a>

### `<Const>` privateToAuthID

▸ **privateToAuthID**(privateKey: *`Buffer`*): `Buffer`

*Defined in [account.ts:92](https://github.com/StylusFrost/flureejs-utils/blob/843f69d/src/account.ts#L92)*

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| privateKey | `Buffer` |  A private key must be 256 bits wide |

**Returns:** `Buffer`

___
<a id="privatetopublic"></a>

### `<Const>` privateToPublic

▸ **privateToPublic**(privateKey: *`Buffer`*): `Buffer`

*Defined in [account.ts:82](https://github.com/StylusFrost/flureejs-utils/blob/843f69d/src/account.ts#L82)*

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| privateKey | `Buffer` |  A private key must be 256 bits wide |

**Returns:** `Buffer`

___
<a id="pubtoauthid"></a>

### `<Const>` pubToAuthID

▸ **pubToAuthID**(pubKey: *`Buffer`*, sanitize?: *`boolean`*): `Buffer`

*Defined in [account.ts:57](https://github.com/StylusFrost/flureejs-utils/blob/843f69d/src/account.ts#L57)*

**Parameters:**

| Name | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| pubKey | `Buffer` | - |  The two points of an uncompressed key, unless sanitize is enabled |
| `Default value` sanitize | `boolean` | false |  Accept public keys in other formats |

**Returns:** `Buffer`

___
<a id="ripemd160"></a>

### `<Const>` ripemd160

▸ **ripemd160**(a: *`Buffer`*, padded: *`boolean`*): `Buffer`

*Defined in [hash.ts:104](https://github.com/StylusFrost/flureejs-utils/blob/843f69d/src/hash.ts#L104)*

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| a | `Buffer` |  The input data (Buffer) |
| padded | `boolean` |  Whether it should be padded to 256 bits or not |

**Returns:** `Buffer`

___
<a id="ripemd160fromarray"></a>

### `<Const>` ripemd160FromArray

▸ **ripemd160FromArray**(a: *`number`[]*, padded: *`boolean`*): `Buffer`

*Defined in [hash.ts:124](https://github.com/StylusFrost/flureejs-utils/blob/843f69d/src/hash.ts#L124)*

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| a | `number`[] |  The input data (number\[\]) |
| padded | `boolean` |  Whether it should be padded to 256 bits or not |

**Returns:** `Buffer`

___
<a id="ripemd160fromstring"></a>

### `<Const>` ripemd160FromString

▸ **ripemd160FromString**(a: *`string`*, padded: *`boolean`*): `Buffer`

*Defined in [hash.ts:114](https://github.com/StylusFrost/flureejs-utils/blob/843f69d/src/hash.ts#L114)*

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| a | `string` |  The input data (String) |
| padded | `boolean` |  Whether it should be padded to 256 bits or not |

**Returns:** `Buffer`

___
<a id="setlengthleft"></a>

### `<Const>` setLengthLeft

▸ **setLengthLeft**(msg: *`Buffer`*, length: *`number`*): `Buffer`

*Defined in [bytes.ts:29](https://github.com/StylusFrost/flureejs-utils/blob/843f69d/src/bytes.ts#L29)*

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| msg | `Buffer` |  the value to pad (Buffer) |
| length | `number` |  the number of bytes the output should be |

**Returns:** `Buffer`
(Buffer)

___
<a id="setlengthright"></a>

### `<Const>` setLengthRight

▸ **setLengthRight**(msg: *`Buffer`*, length: *`number`*): `Buffer`

*Defined in [bytes.ts:41](https://github.com/StylusFrost/flureejs-utils/blob/843f69d/src/bytes.ts#L41)*

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| msg | `Buffer` |  the value to pad (Buffer) |
| length | `number` |  the number of bytes the output should be |

**Returns:** `Buffer`
(Buffer)

___
<a id="sha256"></a>

### `<Const>` sha256

▸ **sha256**(a: *`Buffer`*): `Buffer`

*Defined in [hash.ts:66](https://github.com/StylusFrost/flureejs-utils/blob/843f69d/src/hash.ts#L66)*

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| a | `Buffer` |  The input data (Buffer) |

**Returns:** `Buffer`

___
<a id="sha256fromarray"></a>

### `<Const>` sha256FromArray

▸ **sha256FromArray**(a: *`number`[]*): `Buffer`

*Defined in [hash.ts:84](https://github.com/StylusFrost/flureejs-utils/blob/843f69d/src/hash.ts#L84)*

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| a | `number`[] |  The input data (number\[\]) |

**Returns:** `Buffer`

___
<a id="sha256fromstring"></a>

### `<Const>` sha256FromString

▸ **sha256FromString**(a: *`string`*): `Buffer`

*Defined in [hash.ts:75](https://github.com/StylusFrost/flureejs-utils/blob/843f69d/src/hash.ts#L75)*

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| a | `string` |  The input data (string) |

**Returns:** `Buffer`

___
<a id="tobuffer"></a>

### `<Const>` toBuffer

▸ **toBuffer**(v: *`any`*): `Buffer`

*Defined in [bytes.ts:75](https://github.com/StylusFrost/flureejs-utils/blob/843f69d/src/bytes.ts#L75)*

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| v | `any` |  the value |

**Returns:** `Buffer`

___
<a id="zeros"></a>

### `<Const>` zeros

▸ **zeros**(bytes: *`number`*): `Buffer`

*Defined in [bytes.ts:18](https://github.com/StylusFrost/flureejs-utils/blob/843f69d/src/bytes.ts#L18)*

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| bytes | `number` |  the number of bytes the buffer should be |

**Returns:** `Buffer`

___

