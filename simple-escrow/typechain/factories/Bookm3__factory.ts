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
        name: "notBribe",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "weiAmount",
        type: "uint256",
      },
    ],
    name: "Burned",
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
    inputs: [
      {
        internalType: "address payable",
        name: "notBribe",
        type: "address",
      },
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
    name: "burn",
    outputs: [],
    stateMutability: "nonpayable",
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
    name: "returnFunds",
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
  "0x608060405234801561001057600080fd5b5061001a3361001f565b61006f565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6109db8061007e6000396000f3fe6080604052600436106100865760003560e01c8063715018a611610059578063715018a6146101135780638da5cb5b1461012857806390d9b80414610150578063f2fde38b14610170578063f6b911bc1461019057600080fd5b80630357371d1461008b57806303efb5c4146100ad578063410085df146100c0578063493f31b5146100e0575b600080fd5b34801561009757600080fd5b506100ab6100a6366004610930565b6101b0565b005b6100ab6100bb366004610930565b610218565b3480156100cc57600080fd5b506100ab6100db366004610930565b6102c2565b3480156100ec57600080fd5b506101006100fb366004610930565b610411565b6040519081526020015b60405180910390f35b34801561011f57600080fd5b506100ab610439565b34801561013457600080fd5b506000546040516001600160a01b03909116815260200161010a565b34801561015c57600080fd5b506100ab61016b366004610930565b61046f565b34801561017c57600080fd5b506100ab61018b3660046108cd565b61052d565b34801561019c57600080fd5b506100ab6101ab3660046108f0565b6105c8565b6000546001600160a01b031633146101e35760405162461bcd60e51b81526004016101da9061095b565b60405180910390fd5b60018060006101f28585610718565b81526020810191909152604001600020600201805460ff19169115159190911790555050565b6040805160608101825234808252602082018490526000928201839052916001906102438686610718565b8152602080820192909252604090810160002083518155838301516001820155928101516002909301805460ff19169315159390931790925581518481529081018390526001600160a01b038516917f7725e7ff10d8b23269611d069644a270d1ac0182073732e9d53b78d35170b97f910160405180910390a2505050565b60006102ce8383610718565b60008181526001602081815260409283902083516060810185528154815292810154918301919091526002015460ff1615159181018290529192508061031357508242115b61036b5760405162461bcd60e51b815260206004820152602360248201527f446f6573206e6f74206d65657420636f6e646974696f6e7320666f72207265666044820152621d5b9960ea1b60648201526084016101da565b6040805160608101825260008082526020808301828152838501838152878452600192839052949092209251835590519082015590516002909101805460ff191691151591909117905580516103cb906001600160a01b0386169061075f565b80516040519081526001600160a01b038516907fd7dee2702d63ad89917b6a4da9981c90c4d24f8c2bdfd64c604ecae57d8d06519060200160405180910390a250505050565b6000600160006104218585610718565b81526020810191909152604001600020549392505050565b6000546001600160a01b031633146104635760405162461bcd60e51b81526004016101da9061095b565b61046d600061087d565b565b6000546001600160a01b031633146104995760405162461bcd60e51b81526004016101da9061095b565b60006104a58383610718565b60008181526001602081815260408084208151606080820184528254825282860180548387015260028401805460ff8116151585880152865193840187528984528388018a81529684018a8152998b9052979096529051909255915190559251151560ff199092169190911790558051919250906103cb906001600160a01b0386169061075f565b6000546001600160a01b031633146105575760405162461bcd60e51b81526004016101da9061095b565b6001600160a01b0381166105bc5760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b60648201526084016101da565b6105c58161087d565b50565b60006105d48383610718565b60008181526001602081815260409283902083516060810185528154815292810154918301919091526002015460ff16158015928201929092529192508061061b57508242105b6106715760405162461bcd60e51b815260206004820152602160248201527f446f6573206e6f74206d65657420636f6e646974696f6e7320666f72206275726044820152603760f91b60648201526084016101da565b6040805160608101825260008082526020808301828152838501838152878452600192839052949092209251835590519082015590516002909101805460ff191691151591909117905580516106d1906001600160a01b0387169061075f565b80516040519081526001600160a01b038616907f696de425f79f4a40bc6d2122ca50507f0efbeabbff86a84871b7196ab8ea8df79060200160405180910390a25050505050565b6040516bffffffffffffffffffffffff19606084901b1660208201526034810182905260009060540160405160208183030381529060405280519060200120905092915050565b804710156107af5760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a20696e73756666696369656e742062616c616e636500000060448201526064016101da565b6000826001600160a01b03168260405160006040518083038185875af1925050503d80600081146107fc576040519150601f19603f3d011682016040523d82523d6000602084013e610801565b606091505b50509050806108785760405162461bcd60e51b815260206004820152603a60248201527f416464726573733a20756e61626c6520746f2073656e642076616c75652c207260448201527f6563697069656e74206d6179206861766520726576657274656400000000000060648201526084016101da565b505050565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6000602082840312156108de578081fd5b81356108e981610990565b9392505050565b600080600060608486031215610904578182fd5b833561090f81610990565b9250602084013561091f81610990565b929592945050506040919091013590565b60008060408385031215610942578182fd5b823561094d81610990565b946020939093013593505050565b6020808252818101527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604082015260600190565b6001600160a01b03811681146105c557600080fdfea2646970667358221220432b6ee67fe4486705289f1cfb6bb7323561a31726b30f54d077202e9b89e1ab64736f6c63430008040033";

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
