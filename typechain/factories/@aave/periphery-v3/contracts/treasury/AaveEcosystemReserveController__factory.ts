/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../../common";
import type {
  AaveEcosystemReserveController,
  AaveEcosystemReserveControllerInterface,
} from "../../../../../@aave/periphery-v3/contracts/treasury/AaveEcosystemReserveController";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "aaveGovShortTimelock",
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
    inputs: [
      {
        internalType: "address",
        name: "collector",
        type: "address",
      },
      {
        internalType: "contract IERC20",
        name: "token",
        type: "address",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "collector",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "streamId",
        type: "uint256",
      },
    ],
    name: "cancelStream",
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
        name: "collector",
        type: "address",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "deposit",
        type: "uint256",
      },
      {
        internalType: "contract IERC20",
        name: "tokenAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "startTime",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "stopTime",
        type: "uint256",
      },
    ],
    name: "createStream",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
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
        name: "collector",
        type: "address",
      },
      {
        internalType: "contract IERC20",
        name: "token",
        type: "address",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
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
  {
    inputs: [
      {
        internalType: "address",
        name: "collector",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "streamId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "funds",
        type: "uint256",
      },
    ],
    name: "withdrawFromStream",
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
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50604051610d11380380610d1183398101604081905261002f9161017a565b600080546001600160a01b03191633908117825560405190918291600080516020610cf1833981519152908290a3506100678161006d565b506101aa565b6000546001600160a01b031633146100cc5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064015b60405180910390fd5b6001600160a01b0381166101315760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b60648201526084016100c3565b600080546040516001600160a01b0380851693921691600080516020610cf183398151915291a3600080546001600160a01b0319166001600160a01b0392909216919091179055565b60006020828403121561018c57600080fd5b81516001600160a01b03811681146101a357600080fd5b9392505050565b610b38806101b96000396000f3fe608060405234801561001057600080fd5b50600436106100885760003560e01c80638da5cb5b1161005b5780638da5cb5b146100e5578063f18d03cc1461010d578063f2fde38b14610120578063fd59e1341461013357600080fd5b80632f436bfa1461008d57806359eba454146100b5578063715018a6146100ca5780637dc14a8e146100d2575b600080fd5b6100a061009b366004610993565b610154565b60405190151581526020015b60405180910390f35b6100c86100c33660046109c8565b61027b565b005b6100c8610393565b6100a06100e0366004610a19565b610483565b60005460405173ffffffffffffffffffffffffffffffffffffffff90911681526020016100ac565b6100c861011b3660046109c8565b61059d565b6100c861012e366004610a45565b610681565b610146610141366004610a62565b610832565b6040519081526020016100ac565b6000805473ffffffffffffffffffffffffffffffffffffffff1633146101db576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064015b60405180910390fd5b6040517f7a9b2c6c000000000000000000000000000000000000000000000000000000008152600481018490526024810183905273ffffffffffffffffffffffffffffffffffffffff851690637a9b2c6c906044016020604051808303816000875af115801561024f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102739190610ac7565b949350505050565b60005473ffffffffffffffffffffffffffffffffffffffff1633146102fc576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016101d2565b6040517fe1f21c6700000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff848116600483015283811660248301526044820183905285169063e1f21c67906064015b600060405180830381600087803b15801561037557600080fd5b505af1158015610389573d6000803e3d6000fd5b5050505050505050565b60005473ffffffffffffffffffffffffffffffffffffffff163314610414576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016101d2565b6000805460405173ffffffffffffffffffffffffffffffffffffffff909116907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908390a3600080547fffffffffffffffffffffffff0000000000000000000000000000000000000000169055565b6000805473ffffffffffffffffffffffffffffffffffffffff163314610505576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016101d2565b6040517f6db9241b0000000000000000000000000000000000000000000000000000000081526004810183905273ffffffffffffffffffffffffffffffffffffffff841690636db9241b906024016020604051808303816000875af1158015610572573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105969190610ac7565b9392505050565b60005473ffffffffffffffffffffffffffffffffffffffff16331461061e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016101d2565b6040517fbeabacc800000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff848116600483015283811660248301526044820183905285169063beabacc89060640161035b565b60005473ffffffffffffffffffffffffffffffffffffffff163314610702576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016101d2565b73ffffffffffffffffffffffffffffffffffffffff81166107a5576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201527f646472657373000000000000000000000000000000000000000000000000000060648201526084016101d2565b6000805460405173ffffffffffffffffffffffffffffffffffffffff808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a3600080547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff92909216919091179055565b6000805473ffffffffffffffffffffffffffffffffffffffff1633146108b4576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016101d2565b6040517fcc1b4bf600000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8781166004830152602482018790528581166044830152606482018590526084820184905288169063cc1b4bf69060a4016020604051808303816000875af115801561093f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109639190610ae9565b979650505050505050565b73ffffffffffffffffffffffffffffffffffffffff8116811461099057600080fd5b50565b6000806000606084860312156109a857600080fd5b83356109b38161096e565b95602085013595506040909401359392505050565b600080600080608085870312156109de57600080fd5b84356109e98161096e565b935060208501356109f98161096e565b92506040850135610a098161096e565b9396929550929360600135925050565b60008060408385031215610a2c57600080fd5b8235610a378161096e565b946020939093013593505050565b600060208284031215610a5757600080fd5b81356105968161096e565b60008060008060008060c08789031215610a7b57600080fd5b8635610a868161096e565b95506020870135610a968161096e565b9450604087013593506060870135610aad8161096e565b9598949750929560808101359460a0909101359350915050565b600060208284031215610ad957600080fd5b8151801515811461059657600080fd5b600060208284031215610afb57600080fd5b505191905056fea26469706673582212206af6dda09f7e6417703a87e7c8c4b22128dd9d9c7d7a2419a0486c74aa94f2f764736f6c634300080a00338be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0";

type AaveEcosystemReserveControllerConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: AaveEcosystemReserveControllerConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class AaveEcosystemReserveController__factory extends ContractFactory {
  constructor(...args: AaveEcosystemReserveControllerConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    aaveGovShortTimelock: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<AaveEcosystemReserveController> {
    return super.deploy(
      aaveGovShortTimelock,
      overrides || {}
    ) as Promise<AaveEcosystemReserveController>;
  }
  override getDeployTransaction(
    aaveGovShortTimelock: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(aaveGovShortTimelock, overrides || {});
  }
  override attach(address: string): AaveEcosystemReserveController {
    return super.attach(address) as AaveEcosystemReserveController;
  }
  override connect(signer: Signer): AaveEcosystemReserveController__factory {
    return super.connect(signer) as AaveEcosystemReserveController__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): AaveEcosystemReserveControllerInterface {
    return new utils.Interface(_abi) as AaveEcosystemReserveControllerInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): AaveEcosystemReserveController {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as AaveEcosystemReserveController;
  }
}
