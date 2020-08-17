[flureejs-utils](../README.md) > [AuthID](../classes/authid.md)

# Class: AuthID

## Hierarchy

**AuthID**

## Index

### Constructors

* [constructor](authid.md#constructor)

### Properties

* [buf](authid.md#buf)

### Methods

* [toString](authid.md#tostring)
* [fromPrivateKey](authid.md#fromprivatekey)
* [fromPublicKey](authid.md#frompublickey)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new AuthID**(buf: *`Buffer`*): [AuthID](authid.md)

*Defined in authid.ts:6*

**Parameters:**

| Name | Type |
| ------ | ------ |
| buf | `Buffer` |

**Returns:** [AuthID](authid.md)

___

## Properties

<a id="buf"></a>

###  buf

**● buf**: *`Buffer`*

*Defined in authid.ts:6*

___

## Methods

<a id="tostring"></a>

###  toString

▸ **toString**(): `string`

*Defined in authid.ts:35*

**Returns:** `string`

___
<a id="fromprivatekey"></a>

### `<Static>` fromPrivateKey

▸ **fromPrivateKey**(privateKey: *`Buffer`*): [AuthID](authid.md)

*Defined in authid.ts:26*

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| privateKey | `Buffer` |  A private key must be 256 bits wide |

**Returns:** [AuthID](authid.md)

___
<a id="frompublickey"></a>

### `<Static>` fromPublicKey

▸ **fromPublicKey**(pubKey: *`Buffer`*): [AuthID](authid.md)

*Defined in authid.ts:16*

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| pubKey | `Buffer` |  The two points of an uncompressed key |

**Returns:** [AuthID](authid.md)

___

