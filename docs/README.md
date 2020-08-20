# flureejs-utils

## Index

### Classes

- [AuthID](classes/authid.md)

### Interfaces

- [ECDSASignature](interfaces/ecdsasignature.md)

### Variables

- [publicToAuthID](#publictoauthid)

### Functions

- [assertIsArray](#assertisarray)
- [assertIsBuffer](#assertisbuffer)
- [assertIsHexString](#assertishexstring)
- [assertIsString](#assertisstring)
- [baToJSON](#batojson)
- [bufferToHex](#buffertohex)
- [bufferToInt](#buffertoint)
- [defineProperties](#defineproperties)
- [ecrecover](#ecrecover)
- [ecsign](#ecsign)
- [hexToUnit8Array](#hextounit8array)
- [importPublic](#importpublic)
- [isValidAuthID](#isvalidauthid)
- [isValidPrivate](#isvalidprivate)
- [isValidPublic](#isvalidpublic)
- [isValidSignature](#isvalidsignature)
- [keccak](#keccak)
- [keccak256](#keccak256)
- [keccakFromArray](#keccakfromarray)
- [keccakFromHexString](#keccakfromhexstring)
- [keccakFromString](#keccakfromstring)
- [privateToAuthID](#privatetoauthid)
- [privateToPublic](#privatetopublic)
- [pubToAuthID](#pubtoauthid)
- [ripemd160](#ripemd160)
- [ripemd160FromArray](#ripemd160fromarray)
- [ripemd160FromString](#ripemd160fromstring)
- [setLengthLeft](#setlengthleft)
- [setLengthRight](#setlengthright)
- [sha256](#sha256)
- [sha256FromArray](#sha256fromarray)
- [sha256FromString](#sha256fromstring)
- [toBuffer](#tobuffer)
- [unpadBuffer](#unpadbuffer)
- [zeros](#zeros)

---

## Variables

<a id="publictoauthid"></a>

### `<Const>` publicToAuthID

**● publicToAuthID**: _[pubToAuthID]()_ = pubToAuthID

_Defined in [account.ts:71](https://github.com/StylusFrost/flureejs-utils/blob/396a3a3/src/account.ts#L71)_

---

## Functions

<a id="assertisarray"></a>

### `<Const>` assertIsArray

▸ **assertIsArray**(input: _`number`[]_): `void`

_Defined in [helpers.ts:29](https://github.com/StylusFrost/flureejs-utils/blob/396a3a3/src/helpers.ts#L29)_

**Parameters:**

| Name  | Type       | Description    |
| ----- | ---------- | -------------- |
| input | `number`[] | value to check |

**Returns:** `void`

---

<a id="assertisbuffer"></a>

### `<Const>` assertIsBuffer

▸ **assertIsBuffer**(input: _`Buffer`_): `void`

_Defined in [helpers.ts:18](https://github.com/StylusFrost/flureejs-utils/blob/396a3a3/src/helpers.ts#L18)_

**Parameters:**

| Name  | Type     | Description    |
| ----- | -------- | -------------- |
| input | `Buffer` | value to check |

**Returns:** `void`

---

<a id="assertishexstring"></a>

### `<Const>` assertIsHexString

▸ **assertIsHexString**(input: _`string`_): `void`

_Defined in [helpers.ts:7](https://github.com/StylusFrost/flureejs-utils/blob/396a3a3/src/helpers.ts#L7)_

**Parameters:**

| Name  | Type     | Description                   |
| ----- | -------- | ----------------------------- |
| input | `string` | string to check hex prefix of |

**Returns:** `void`

---

<a id="assertisstring"></a>

### `<Const>` assertIsString

▸ **assertIsString**(input: _`string`_): `void`

_Defined in [helpers.ts:40](https://github.com/StylusFrost/flureejs-utils/blob/396a3a3/src/helpers.ts#L40)_

**Parameters:**

| Name  | Type     | Description    |
| ----- | -------- | -------------- |
| input | `string` | value to check |

**Returns:** `void`

---

<a id="batojson"></a>

### `<Const>` baToJSON

▸ **baToJSON**(ba: _`any`_): `any`

_Defined in [bytes.ts:157](https://github.com/StylusFrost/flureejs-utils/blob/396a3a3/src/bytes.ts#L157)_

**Parameters:**

| Name | Type  | Description     |
| ---- | ----- | --------------- |
| ba   | `any` | (Buffer\|Array) |

**Returns:** `any`
(Array\|String\|null)

---

<a id="buffertohex"></a>

### `<Const>` bufferToHex

▸ **bufferToHex**(buf: _`Buffer`_): `string`

_Defined in [bytes.ts:105](https://github.com/StylusFrost/flureejs-utils/blob/396a3a3/src/bytes.ts#L105)_

**Parameters:**

| Name | Type     | Description                  |
| ---- | -------- | ---------------------------- |
| buf  | `Buffer` | \`Buffer\` object to convert |

**Returns:** `string`

---

<a id="buffertoint"></a>

### `<Const>` bufferToInt

▸ **bufferToInt**(buf: _`Buffer`_): `number`

_Defined in [bytes.ts:198](https://github.com/StylusFrost/flureejs-utils/blob/396a3a3/src/bytes.ts#L198)_

**Parameters:**

| Name | Type     | Description                  |
| ---- | -------- | ---------------------------- |
| buf  | `Buffer` | \`Buffer\` object to convert |

**Returns:** `number`

---

<a id="defineproperties"></a>

### `<Const>` defineProperties

▸ **defineProperties**(self: _`any`_, fields: _`any`_, data: _`any`_): `void`

_Defined in [object.ts:16](https://github.com/StylusFrost/flureejs-utils/blob/396a3a3/src/object.ts#L16)_

**Parameters:**

| Name            | Type  | Description                                                                                                                                                                                                          |
| --------------- | ----- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| self            | `any` | the \`Object\` to define properties on                                                                                                                                                                               |
| fields          | `any` | an array fields to define. Fields can contain:_ \`name\` - the name of the properties_ \`length\` - the number of bytes the field can have* \`allowLess\` - if the field can be less than the length* \`allowEmpty\` |
| `Optional` data | `any` | data to be validated against the definitions                                                                                                                                                                         |

**Returns:** `void`

---

<a id="ecrecover"></a>

### `<Const>` ecrecover

▸ **ecrecover**(msg: _`Buffer`_, v: _`number`_, r: _`Buffer`_, s: _`Buffer`_): `Buffer`

_Defined in [signature.ts:32](https://github.com/StylusFrost/flureejs-utils/blob/396a3a3/src/signature.ts#L32)_

**Parameters:**

| Name | Type     |
| ---- | -------- |
| msg  | `Buffer` |
| v    | `number` |
| r    | `Buffer` |
| s    | `Buffer` |

**Returns:** `Buffer`
Recovered public key

---

<a id="ecsign"></a>

### `<Const>` ecsign

▸ **ecsign**(msg: _`Buffer`_, privateKey: _`Buffer`_): [ECDSASignature](interfaces/ecdsasignature.md)

_Defined in [signature.ts:17](https://github.com/StylusFrost/flureejs-utils/blob/396a3a3/src/signature.ts#L17)_

**Parameters:**

| Name       | Type     |
| ---------- | -------- |
| msg        | `Buffer` |
| privateKey | `Buffer` |

**Returns:** [ECDSASignature](interfaces/ecdsasignature.md)

---

<a id="hextounit8array"></a>

### `<Const>` hexToUnit8Array

▸ **hexToUnit8Array**(str: _`string`_): `Uint8Array`

_Defined in [bytes.ts:10](https://github.com/StylusFrost/flureejs-utils/blob/396a3a3/src/bytes.ts#L10)_

**Parameters:**

| Name | Type     | Description                  |
| ---- | -------- | ---------------------------- |
| str  | `string` | \`String\` object to convert |

**Returns:** `Uint8Array`

---

<a id="importpublic"></a>

### `<Const>` importPublic

▸ **importPublic**(publicKey: _`Buffer`_): `Buffer`

_Defined in [account.ts:42](https://github.com/StylusFrost/flureejs-utils/blob/396a3a3/src/account.ts#L42)_

**Parameters:**

| Name      | Type     |
| --------- | -------- |
| publicKey | `Buffer` |

**Returns:** `Buffer`

---

<a id="isvalidauthid"></a>

### `<Const>` isValidAuthID

▸ **isValidAuthID**(authID: _`Buffer`_): `boolean`

_Defined in [account.ts:94](https://github.com/StylusFrost/flureejs-utils/blob/396a3a3/src/account.ts#L94)_

**Parameters:**

| Name   | Type     |
| ------ | -------- |
| authID | `Buffer` |

**Returns:** `boolean`

---

<a id="isvalidprivate"></a>

### `<Const>` isValidPrivate

▸ **isValidPrivate**(privateKey: _`Buffer`_): `boolean`

_Defined in [account.ts:16](https://github.com/StylusFrost/flureejs-utils/blob/396a3a3/src/account.ts#L16)_

**Parameters:**

| Name       | Type     |
| ---------- | -------- |
| privateKey | `Buffer` |

**Returns:** `boolean`

---

<a id="isvalidpublic"></a>

### `<Const>` isValidPublic

▸ **isValidPublic**(publicKey: _`Buffer`_, sanitize?: _`boolean`_): `boolean`

_Defined in [account.ts:25](https://github.com/StylusFrost/flureejs-utils/blob/396a3a3/src/account.ts#L25)_

**Parameters:**

| Name                     | Type      | Default value | Description                                                       |
| ------------------------ | --------- | ------------- | ----------------------------------------------------------------- |
| publicKey                | `Buffer`  | -             | The two points of an uncompressed key, unless sanitize is enabled |
| `Default value` sanitize | `boolean` | false         | Accept public keys in other formats                               |

**Returns:** `boolean`

---

<a id="isvalidsignature"></a>

### `<Const>` isValidSignature

▸ **isValidSignature**(v: _`number`_, r: _`Buffer`_, s: _`Buffer`_): `boolean`

_Defined in [signature.ts:57](https://github.com/StylusFrost/flureejs-utils/blob/396a3a3/src/signature.ts#L57)_

**Parameters:**

| Name | Type     |
| ---- | -------- |
| v    | `number` |
| r    | `Buffer` |
| s    | `Buffer` |

**Returns:** `boolean`

---

<a id="keccak"></a>

### `<Const>` keccak

▸ **keccak**(a: _`Buffer`_, bits?: _`number`_): `Buffer`

_Defined in [hash.ts:11](https://github.com/StylusFrost/flureejs-utils/blob/396a3a3/src/hash.ts#L11)_

**Parameters:**

| Name                 | Type     | Default value | Description                     |
| -------------------- | -------- | ------------- | ------------------------------- |
| a                    | `Buffer` | -             | The input data (Buffer)         |
| `Default value` bits | `number` | 256           | (number = 256) The Keccak width |

**Returns:** `Buffer`

---

<a id="keccak256"></a>

### `<Const>` keccak256

▸ **keccak256**(a: _`Buffer`_): `Buffer`

_Defined in [hash.ts:27](https://github.com/StylusFrost/flureejs-utils/blob/396a3a3/src/hash.ts#L27)_

**Parameters:**

| Name | Type     | Description             |
| ---- | -------- | ----------------------- |
| a    | `Buffer` | The input data (Buffer) |

**Returns:** `Buffer`

---

<a id="keccakfromarray"></a>

### `<Const>` keccakFromArray

▸ **keccakFromArray**(a: _`number`[]_, bits?: _`number`_): `Buffer`

_Defined in [hash.ts:57](https://github.com/StylusFrost/flureejs-utils/blob/396a3a3/src/hash.ts#L57)_

**Parameters:**

| Name                 | Type       | Default value | Description                     |
| -------------------- | ---------- | ------------- | ------------------------------- |
| a                    | `number`[] | -             | The input data (number\[\])     |
| `Default value` bits | `number`   | 256           | (number = 256) The Keccak width |

**Returns:** `Buffer`

---

<a id="keccakfromhexstring"></a>

### `<Const>` keccakFromHexString

▸ **keccakFromHexString**(a: _`string`_, bits?: _`number`_): `Buffer`

_Defined in [hash.ts:47](https://github.com/StylusFrost/flureejs-utils/blob/396a3a3/src/hash.ts#L47)_

**Parameters:**

| Name                 | Type     | Default value | Description                     |
| -------------------- | -------- | ------------- | ------------------------------- |
| a                    | `string` | -             | The input data (String)         |
| `Default value` bits | `number` | 256           | (number = 256) The Keccak width |

**Returns:** `Buffer`

---

<a id="keccakfromstring"></a>

### `<Const>` keccakFromString

▸ **keccakFromString**(a: _`string`_, bits?: _`number`_): `Buffer`

_Defined in [hash.ts:36](https://github.com/StylusFrost/flureejs-utils/blob/396a3a3/src/hash.ts#L36)_

**Parameters:**

| Name                 | Type     | Default value | Description                     |
| -------------------- | -------- | ------------- | ------------------------------- |
| a                    | `string` | -             | The input data (String)         |
| `Default value` bits | `number` | 256           | (number = 256) The Keccak width |

**Returns:** `Buffer`

---

<a id="privatetoauthid"></a>

### `<Const>` privateToAuthID

▸ **privateToAuthID**(privateKey: _`Buffer`_): `Buffer`

_Defined in [account.ts:87](https://github.com/StylusFrost/flureejs-utils/blob/396a3a3/src/account.ts#L87)_

**Parameters:**

| Name       | Type     | Description                         |
| ---------- | -------- | ----------------------------------- |
| privateKey | `Buffer` | A private key must be 256 bits wide |

**Returns:** `Buffer`

---

<a id="privatetopublic"></a>

### `<Const>` privateToPublic

▸ **privateToPublic**(privateKey: _`Buffer`_): `Buffer`

_Defined in [account.ts:77](https://github.com/StylusFrost/flureejs-utils/blob/396a3a3/src/account.ts#L77)_

**Parameters:**

| Name       | Type     | Description                         |
| ---------- | -------- | ----------------------------------- |
| privateKey | `Buffer` | A private key must be 256 bits wide |

**Returns:** `Buffer`

---

<a id="pubtoauthid"></a>

### `<Const>` pubToAuthID

▸ **pubToAuthID**(pubKey: _`Buffer`_, sanitize?: _`boolean`_): `Buffer`

_Defined in [account.ts:56](https://github.com/StylusFrost/flureejs-utils/blob/396a3a3/src/account.ts#L56)_

**Parameters:**

| Name                     | Type      | Default value | Description                                                       |
| ------------------------ | --------- | ------------- | ----------------------------------------------------------------- |
| pubKey                   | `Buffer`  | -             | The two points of an uncompressed key, unless sanitize is enabled |
| `Default value` sanitize | `boolean` | false         | Accept public keys in other formats                               |

**Returns:** `Buffer`

---

<a id="ripemd160"></a>

### `<Const>` ripemd160

▸ **ripemd160**(a: _`Buffer`_, padded: _`boolean`_): `Buffer`

_Defined in [hash.ts:104](https://github.com/StylusFrost/flureejs-utils/blob/396a3a3/src/hash.ts#L104)_

**Parameters:**

| Name   | Type      | Description                                    |
| ------ | --------- | ---------------------------------------------- |
| a      | `Buffer`  | The input data (Buffer)                        |
| padded | `boolean` | Whether it should be padded to 256 bits or not |

**Returns:** `Buffer`

---

<a id="ripemd160fromarray"></a>

### `<Const>` ripemd160FromArray

▸ **ripemd160FromArray**(a: _`number`[]_, padded: _`boolean`_): `Buffer`

_Defined in [hash.ts:124](https://github.com/StylusFrost/flureejs-utils/blob/396a3a3/src/hash.ts#L124)_

**Parameters:**

| Name   | Type       | Description                                    |
| ------ | ---------- | ---------------------------------------------- |
| a      | `number`[] | The input data (number\[\])                    |
| padded | `boolean`  | Whether it should be padded to 256 bits or not |

**Returns:** `Buffer`

---

<a id="ripemd160fromstring"></a>

### `<Const>` ripemd160FromString

▸ **ripemd160FromString**(a: _`string`_, padded: _`boolean`_): `Buffer`

_Defined in [hash.ts:114](https://github.com/StylusFrost/flureejs-utils/blob/396a3a3/src/hash.ts#L114)_

**Parameters:**

| Name   | Type      | Description                                    |
| ------ | --------- | ---------------------------------------------- |
| a      | `string`  | The input data (String)                        |
| padded | `boolean` | Whether it should be padded to 256 bits or not |

**Returns:** `Buffer`

---

<a id="setlengthleft"></a>

### `<Const>` setLengthLeft

▸ **setLengthLeft**(msg: _`Buffer`_, length: _`number`_): `Buffer`

_Defined in [bytes.ts:29](https://github.com/StylusFrost/flureejs-utils/blob/396a3a3/src/bytes.ts#L29)_

**Parameters:**

| Name   | Type     | Description                              |
| ------ | -------- | ---------------------------------------- |
| msg    | `Buffer` | the value to pad (Buffer)                |
| length | `number` | the number of bytes the output should be |

**Returns:** `Buffer`
(Buffer)

---

<a id="setlengthright"></a>

### `<Const>` setLengthRight

▸ **setLengthRight**(msg: _`Buffer`_, length: _`number`_): `Buffer`

_Defined in [bytes.ts:41](https://github.com/StylusFrost/flureejs-utils/blob/396a3a3/src/bytes.ts#L41)_

**Parameters:**

| Name   | Type     | Description                              |
| ------ | -------- | ---------------------------------------- |
| msg    | `Buffer` | the value to pad (Buffer)                |
| length | `number` | the number of bytes the output should be |

**Returns:** `Buffer`
(Buffer)

---

<a id="sha256"></a>

### `<Const>` sha256

▸ **sha256**(a: _`Buffer`_): `Buffer`

_Defined in [hash.ts:66](https://github.com/StylusFrost/flureejs-utils/blob/396a3a3/src/hash.ts#L66)_

**Parameters:**

| Name | Type     | Description             |
| ---- | -------- | ----------------------- |
| a    | `Buffer` | The input data (Buffer) |

**Returns:** `Buffer`

---

<a id="sha256fromarray"></a>

### `<Const>` sha256FromArray

▸ **sha256FromArray**(a: _`number`[]_): `Buffer`

_Defined in [hash.ts:84](https://github.com/StylusFrost/flureejs-utils/blob/396a3a3/src/hash.ts#L84)_

**Parameters:**

| Name | Type       | Description                 |
| ---- | ---------- | --------------------------- |
| a    | `number`[] | The input data (number\[\]) |

**Returns:** `Buffer`

---

<a id="sha256fromstring"></a>

### `<Const>` sha256FromString

▸ **sha256FromString**(a: _`string`_): `Buffer`

_Defined in [hash.ts:75](https://github.com/StylusFrost/flureejs-utils/blob/396a3a3/src/hash.ts#L75)_

**Parameters:**

| Name | Type     | Description             |
| ---- | -------- | ----------------------- |
| a    | `string` | The input data (string) |

**Returns:** `Buffer`

---

<a id="tobuffer"></a>

### `<Const>` toBuffer

▸ **toBuffer**(v: _`any`_): `Buffer`

_Defined in [bytes.ts:75](https://github.com/StylusFrost/flureejs-utils/blob/396a3a3/src/bytes.ts#L75)_

**Parameters:**

| Name | Type  | Description |
| ---- | ----- | ----------- |
| v    | `any` | the value   |

**Returns:** `Buffer`

---

<a id="unpadbuffer"></a>

### `<Const>` unpadBuffer

▸ **unpadBuffer**(a: _`Buffer`_): `Buffer`

_Defined in [bytes.ts:174](https://github.com/StylusFrost/flureejs-utils/blob/396a3a3/src/bytes.ts#L174)_

**Parameters:**

| Name | Type     | Description |
| ---- | -------- | ----------- |
| a    | `Buffer` | (Buffer)    |

**Returns:** `Buffer`
(Buffer)

---

<a id="zeros"></a>

### `<Const>` zeros

▸ **zeros**(bytes: _`number`_): `Buffer`

_Defined in [bytes.ts:18](https://github.com/StylusFrost/flureejs-utils/blob/396a3a3/src/bytes.ts#L18)_

**Parameters:**

| Name  | Type     | Description                              |
| ----- | -------- | ---------------------------------------- |
| bytes | `number` | the number of bytes the buffer should be |

**Returns:** `Buffer`

---
