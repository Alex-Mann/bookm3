/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Bookm3, Bookm3Interface } from "../Bookm3";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "payee",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "endtime",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "weiAmount",
        type: "uint256",
      },
    ],
    name: "Booked",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "payee",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "weiAmount",
        type: "uint256",
      },
    ],
    name: "Refunded",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "payee",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "endtime",
        type: "uint256",
      },
    ],
    name: "book",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "payee",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "endtime",
        type: "uint256",
      },
    ],
    name: "bookingsOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address payable",
        name: "payee",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "endtime",
        type: "uint256",
      },
    ],
    name: "refund",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "payee",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "endtime",
        type: "uint256",
      },
    ],
    name: "release",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5061001a3361001f565b61006f565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6107738061007e6000396000f3fe6080604052600436106100705760003560e01c8063493f31b51161004e578063493f31b5146100ca578063715018a6146100fd5780638da5cb5b14610112578063f2fde38b1461013a57600080fd5b80630357371d1461007557806303efb5c414610097578063410085df146100aa575b600080fd5b34801561008157600080fd5b506100956100903660046106e1565b61015a565b005b6100956100a53660046106e1565b6101c2565b3480156100b657600080fd5b506100956100c53660046106b6565b610296565b3480156100d657600080fd5b506100ea6100e53660046106e1565b6103e5565b6040519081526020015b60405180910390f35b34801561010957600080fd5b5061009561040d565b34801561011e57600080fd5b506000546040516001600160a01b0390911681526020016100f4565b34801561014657600080fd5b50610095610155366004610693565b610443565b6000546001600160a01b0316331461018d5760405162461bcd60e51b8152600401610184906106f3565b60405180910390fd5b600180600061019c85856104de565b81526020810191909152604001600020600201805460ff19169115159190911790555050565b6000546001600160a01b031633146101ec5760405162461bcd60e51b8152600401610184906106f3565b60408051606081018252348082526020820184905260009282018390529160019061021786866104de565b8152602080820192909252604090810160002083518155838301516001820155928101516002909301805460ff19169315159390931790925581518481529081018390526001600160a01b038516917f7725e7ff10d8b23269611d069644a270d1ac0182073732e9d53b78d35170b97f910160405180910390a2505050565b60006102a283836104de565b60008181526001602081815260409283902083516060810185528154815292810154918301919091526002015460ff161515918101829052919250806102e757508242115b61033f5760405162461bcd60e51b815260206004820152602360248201527f446f6573206e6f74206d65657420636f6e646974696f6e7320666f72207265666044820152621d5b9960ea1b6064820152608401610184565b6040805160608101825260008082526020808301828152838501838152878452600192839052949092209251835590519082015590516002909101805460ff1916911515919091179055805161039f906001600160a01b03861690610525565b80516040519081526001600160a01b038516907fd7dee2702d63ad89917b6a4da9981c90c4d24f8c2bdfd64c604ecae57d8d06519060200160405180910390a250505050565b6000600160006103f585856104de565b81526020810191909152604001600020549392505050565b6000546001600160a01b031633146104375760405162461bcd60e51b8152600401610184906106f3565b6104416000610643565b565b6000546001600160a01b0316331461046d5760405162461bcd60e51b8152600401610184906106f3565b6001600160a01b0381166104d25760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b6064820152608401610184565b6104db81610643565b50565b6040516bffffffffffffffffffffffff19606084901b1660208201526034810182905260009060540160405160208183030381529060405280519060200120905092915050565b804710156105755760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a20696e73756666696369656e742062616c616e63650000006044820152606401610184565b6000826001600160a01b03168260405160006040518083038185875af1925050503d80600081146105c2576040519150601f19603f3d011682016040523d82523d6000602084013e6105c7565b606091505b505090508061063e5760405162461bcd60e51b815260206004820152603a60248201527f416464726573733a20756e61626c6520746f2073656e642076616c75652c207260448201527f6563697069656e74206d617920686176652072657665727465640000000000006064820152608401610184565b505050565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6000602082840312156106a4578081fd5b81356106af81610728565b9392505050565b600080604083850312156106c8578081fd5b82356106d381610728565b946020939093013593505050565b600080604083850312156106c8578182fd5b6020808252818101527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604082015260600190565b6001600160a01b03811681146104db57600080fdfea2646970667358221220e83ba9268b6ace56b5800f03df9f463180a2f430f55786ca286ffeaf431e5ec764736f6c63430008040033";

export class Bookm3__factory extends ContractFactory {
  constructor(
    ...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>
  ) {
    if (args.length === 1) {
      super(_abi, _bytecode, args[0]);
    } else {
      super(...args);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Bookm3> {
    return super.deploy(overrides || {}) as Promise<Bookm3>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): Bookm3 {
    return super.attach(address) as Bookm3;
  }
  connect(signer: Signer): Bookm3__factory {
    return super.connect(signer) as Bookm3__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): Bookm3Interface {
    return new utils.Interface(_abi) as Bookm3Interface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): Bookm3 {
    return new Contract(address, _abi, signerOrProvider) as Bookm3;
  }
}
