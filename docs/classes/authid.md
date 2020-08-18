[flureejs-utils](../README.md) > [AuthID](../classes/authid.md)

# Class: AuthID

## Hierarchy

**AuthID**

## Index

### Constructors

- [constructor](authid.md#constructor)

### Properties

- [buf](authid.md#buf)

### Methods

- [toString](authid.md#tostring)
- [fromPrivateKey](authid.md#fromprivatekey)
- [fromPublicKey](authid.md#frompublickey)

---

## Constructors

<a id="constructor"></a>

### constructor

⊕ **new AuthID**(buf: _`Buffer`_): [AuthID](authid.md)

_Defined in [authid.ts:6](https://github.com/StylusFrost/flureejs-utils/blob/921ca9d/src/authid.ts#L6)_

**Parameters:**

| Name | Type     |
| ---- | -------- |
| buf  | `Buffer` |

**Returns:** [AuthID](authid.md)

---

## Properties

<a id="buf"></a>

### buf

**● buf**: _`Buffer`_

_Defined in [authid.ts:6](https://github.com/StylusFrost/flureejs-utils/blob/921ca9d/src/authid.ts#L6)_

---

## Methods

<a id="tostring"></a>

### toString

▸ **toString**(): `string`

_Defined in [authid.ts:35](https://github.com/StylusFrost/flureejs-utils/blob/921ca9d/src/authid.ts#L35)_

**Returns:** `string`

---

<a id="fromprivatekey"></a>

### `<Static>` fromPrivateKey

▸ **fromPrivateKey**(privateKey: _`Buffer`_): [AuthID](authid.md)

_Defined in [authid.ts:26](https://github.com/StylusFrost/flureejs-utils/blob/921ca9d/src/authid.ts#L26)_

**Parameters:**

| Name       | Type     | Description                         |
| ---------- | -------- | ----------------------------------- |
| privateKey | `Buffer` | A private key must be 256 bits wide |

**Returns:** [AuthID](authid.md)

---

<a id="frompublickey"></a>

### `<Static>` fromPublicKey

▸ **fromPublicKey**(pubKey: _`Buffer`_): [AuthID](authid.md)

_Defined in [authid.ts:16](https://github.com/StylusFrost/flureejs-utils/blob/921ca9d/src/authid.ts#L16)_

**Parameters:**

| Name   | Type     | Description                           |
| ------ | -------- | ------------------------------------- |
| pubKey | `Buffer` | The two points of an uncompressed key |

**Returns:** [AuthID](authid.md)

---
