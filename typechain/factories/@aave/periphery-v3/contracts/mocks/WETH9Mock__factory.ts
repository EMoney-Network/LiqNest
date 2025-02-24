/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../../common";
import type {
  WETH9Mock,
  WETH9MockInterface,
} from "../../../../../@aave/periphery-v3/contracts/mocks/WETH9Mock";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "mockName",
        type: "string",
      },
      {
        internalType: "string",
        name: "mockSymbol",
        type: "string",
      },
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "src",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "guy",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "wad",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "dst",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "wad",
        type: "uint256",
      },
    ],
    name: "Deposit",
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
        name: "src",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "dst",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "wad",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "src",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "wad",
        type: "uint256",
      },
    ],
    name: "Withdrawal",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "allowance",
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
        internalType: "address",
        name: "guy",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "wad",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "balanceOf",
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
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "deposit",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "isProtected",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "mint",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
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
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bool",
        name: "state",
        type: "bool",
      },
    ],
    name: "setProtected",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
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
        internalType: "address",
        name: "dst",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "wad",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "src",
        type: "address",
      },
      {
        internalType: "address",
        name: "dst",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "wad",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
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
  {
    inputs: [
      {
        internalType: "uint256",
        name: "wad",
        type: "uint256",
      },
    ],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
];

const _bytecode =
  "0x60c0604052600d60808190526c2bb930b83832b21022ba3432b960991b60a090815262000030916000919062000233565b50604080518082019091526004808252630ae8aa8960e31b60209092019182526200005e9160019162000233565b506002805460ff191660121790553480156200007957600080fd5b506040516200137c3803806200137c8339810160408190526200009c91620003a6565b600580546001600160a01b0319163390811790915560405181906000906000805160206200135c833981519152908290a3508251620000e390600090602086019062000233565b508151620000f990600190602085019062000233565b50620001058162000121565b50506005805460ff60a01b1916600160a01b1790555062000470565b6005546001600160a01b03163314620001815760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064015b60405180910390fd5b6001600160a01b038116620001e85760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b606482015260840162000178565b6005546040516001600160a01b038084169216906000805160206200135c83398151915290600090a3600580546001600160a01b0319166001600160a01b0392909216919091179055565b828054620002419062000433565b90600052602060002090601f016020900481019282620002655760008555620002b0565b82601f106200028057805160ff1916838001178555620002b0565b82800160010185558215620002b0579182015b82811115620002b057825182559160200191906001019062000293565b50620002be929150620002c2565b5090565b5b80821115620002be5760008155600101620002c3565b634e487b7160e01b600052604160045260246000fd5b600082601f8301126200030157600080fd5b81516001600160401b03808211156200031e576200031e620002d9565b604051601f8301601f19908116603f01168101908282118183101715620003495762000349620002d9565b816040528381526020925086838588010111156200036657600080fd5b600091505b838210156200038a57858201830151818301840152908201906200036b565b838211156200039c5760008385830101525b9695505050505050565b600080600060608486031215620003bc57600080fd5b83516001600160401b0380821115620003d457600080fd5b620003e287838801620002ef565b94506020860151915080821115620003f957600080fd5b506200040886828701620002ef565b604086015190935090506001600160a01b03811681146200042857600080fd5b809150509250925092565b600181811c908216806200044857607f821691505b602082108114156200046a57634e487b7160e01b600052602260045260246000fd5b50919050565b610edc80620004806000396000f3fe6080604052600436106101125760003560e01c80635300f82b116100a557806395d89b4111610074578063d0e30db011610059578063d0e30db014610326578063dd62ed3e1461032e578063f2fde38b1461036657600080fd5b806395d89b41146102f1578063a9059cbb1461030657600080fd5b80635300f82b1461024a57806370a082311461027a578063715018a6146102a75780638da5cb5b146102bc57600080fd5b806323b872dd116100e157806323b872dd146101be5780632e1a7d4d146101de578063313ce567146101fe57806340c10f191461022a57600080fd5b806306fdde0314610126578063095ea7b31461015157806318160ddd146101815780631c02bc311461019e57600080fd5b366101215761011f610386565b005b600080fd5b34801561013257600080fd5b5061013b6103e1565b6040516101489190610c69565b60405180910390f35b34801561015d57600080fd5b5061017161016c366004610d05565b61046f565b6040519015158152602001610148565b34801561018d57600080fd5b50475b604051908152602001610148565b3480156101aa57600080fd5b5061011f6101b9366004610d2f565b6104e8565b3480156101ca57600080fd5b506101716101d9366004610d51565b6105b8565b3480156101ea57600080fd5b5061011f6101f9366004610d8d565b6107cf565b34801561020a57600080fd5b506002546102189060ff1681565b60405160ff9091168152602001610148565b34801561023657600080fd5b50610171610245366004610d05565b610875565b34801561025657600080fd5b5060055474010000000000000000000000000000000000000000900460ff16610171565b34801561028657600080fd5b50610190610295366004610da6565b60036020526000908152604090205481565b3480156102b357600080fd5b5061011f6109a6565b3480156102c857600080fd5b5060055460405173ffffffffffffffffffffffffffffffffffffffff9091168152602001610148565b3480156102fd57600080fd5b5061013b610a96565b34801561031257600080fd5b50610171610321366004610d05565b610aa3565b61011f610386565b34801561033a57600080fd5b50610190610349366004610dc1565b600460209081526000928352604080842090915290825290205481565b34801561037257600080fd5b5061011f610381366004610da6565b610ab7565b33600090815260036020526040812080543492906103a5908490610e23565b909155505060405134815233907fe1fffcc4923d04b559f4d29a8bfc6cda04eb5b0d3c460751c2402c5c5cc9109c9060200160405180910390a2565b600080546103ee90610e3b565b80601f016020809104026020016040519081016040528092919081815260200182805461041a90610e3b565b80156104675780601f1061043c57610100808354040283529160200191610467565b820191906000526020600020905b81548152906001019060200180831161044a57829003601f168201915b505050505081565b33600081815260046020908152604080832073ffffffffffffffffffffffffffffffffffffffff8716808552925280832085905551919290917f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925906104d79086815260200190565b60405180910390a350600192915050565b60055473ffffffffffffffffffffffffffffffffffffffff16331461056e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064015b60405180910390fd5b6005805491151574010000000000000000000000000000000000000000027fffffffffffffffffffffff00ffffffffffffffffffffffffffffffffffffffff909216919091179055565b73ffffffffffffffffffffffffffffffffffffffff83166000908152600360205260408120548211156105ea57600080fd5b73ffffffffffffffffffffffffffffffffffffffff84163314801590610660575073ffffffffffffffffffffffffffffffffffffffff841660009081526004602090815260408083203384529091529020547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff14155b156106e85773ffffffffffffffffffffffffffffffffffffffff841660009081526004602090815260408083203384529091529020548211156106a257600080fd5b73ffffffffffffffffffffffffffffffffffffffff84166000908152600460209081526040808320338452909152812080548492906106e2908490610e8f565b90915550505b73ffffffffffffffffffffffffffffffffffffffff84166000908152600360205260408120805484929061071d908490610e8f565b909155505073ffffffffffffffffffffffffffffffffffffffff831660009081526003602052604081208054849290610757908490610e23565b925050819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040516107bd91815260200190565b60405180910390a35060019392505050565b336000908152600360205260409020548111156107eb57600080fd5b336000908152600360205260408120805483929061080a908490610e8f565b9091555050604051339082156108fc029083906000818181858888f1935050505015801561083c573d6000803e3d6000fd5b5060405181815233907f7fcf532c15f0a6db0bd6d0e038bea71d30d808c7d98cb3bf7268a95bf5081b659060200160405180910390a250565b60055460009074010000000000000000000000000000000000000000900460ff161515600114156109215760055473ffffffffffffffffffffffffffffffffffffffff163314610921576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610565565b73ffffffffffffffffffffffffffffffffffffffff831660009081526003602052604081208054849290610956908490610e23565b909155505060405182815273ffffffffffffffffffffffffffffffffffffffff8416906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef906020016104d7565b60055473ffffffffffffffffffffffffffffffffffffffff163314610a27576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610565565b60055460405160009173ffffffffffffffffffffffffffffffffffffffff16907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908390a3600580547fffffffffffffffffffffffff0000000000000000000000000000000000000000169055565b600180546103ee90610e3b565b6000610ab03384846105b8565b9392505050565b60055473ffffffffffffffffffffffffffffffffffffffff163314610b38576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610565565b73ffffffffffffffffffffffffffffffffffffffff8116610bdb576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201527f64647265737300000000000000000000000000000000000000000000000000006064820152608401610565565b60055460405173ffffffffffffffffffffffffffffffffffffffff8084169216907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a3600580547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff92909216919091179055565b600060208083528351808285015260005b81811015610c9657858101830151858201604001528201610c7a565b81811115610ca8576000604083870101525b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016929092016040019392505050565b803573ffffffffffffffffffffffffffffffffffffffff81168114610d0057600080fd5b919050565b60008060408385031215610d1857600080fd5b610d2183610cdc565b946020939093013593505050565b600060208284031215610d4157600080fd5b81358015158114610ab057600080fd5b600080600060608486031215610d6657600080fd5b610d6f84610cdc565b9250610d7d60208501610cdc565b9150604084013590509250925092565b600060208284031215610d9f57600080fd5b5035919050565b600060208284031215610db857600080fd5b610ab082610cdc565b60008060408385031215610dd457600080fd5b610ddd83610cdc565b9150610deb60208401610cdc565b90509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60008219821115610e3657610e36610df4565b500190565b600181811c90821680610e4f57607f821691505b60208210811415610e89577f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b50919050565b600082821015610ea157610ea1610df4565b50039056fea26469706673582212205bccfdd10a73cdeb843b0a32b7dc77d0b4c4539b4833c817cc2f0870427cbb0c64736f6c634300080a00338be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0";

type WETH9MockConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: WETH9MockConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class WETH9Mock__factory extends ContractFactory {
  constructor(...args: WETH9MockConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    mockName: PromiseOrValue<string>,
    mockSymbol: PromiseOrValue<string>,
    owner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<WETH9Mock> {
    return super.deploy(
      mockName,
      mockSymbol,
      owner,
      overrides || {}
    ) as Promise<WETH9Mock>;
  }
  override getDeployTransaction(
    mockName: PromiseOrValue<string>,
    mockSymbol: PromiseOrValue<string>,
    owner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      mockName,
      mockSymbol,
      owner,
      overrides || {}
    );
  }
  override attach(address: string): WETH9Mock {
    return super.attach(address) as WETH9Mock;
  }
  override connect(signer: Signer): WETH9Mock__factory {
    return super.connect(signer) as WETH9Mock__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): WETH9MockInterface {
    return new utils.Interface(_abi) as WETH9MockInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): WETH9Mock {
    return new Contract(address, _abi, signerOrProvider) as WETH9Mock;
  }
}
