/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../../common";
import type {
  CollectorController,
  CollectorControllerInterface,
} from "../../../../../@aave/periphery-v3/contracts/treasury/CollectorController";

const _abi = [
  {
    inputs: [
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
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5060405161082638038061082683398101604081905261002f9161017a565b600080546001600160a01b03191633908117825560405190918291600080516020610806833981519152908290a3506100678161006d565b506101aa565b6000546001600160a01b031633146100cc5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064015b60405180910390fd5b6001600160a01b0381166101315760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b60648201526084016100c3565b600080546040516001600160a01b038085169392169160008051602061080683398151915291a3600080546001600160a01b0319166001600160a01b0392909216919091179055565b60006020828403121561018c57600080fd5b81516001600160a01b03811681146101a357600080fd5b9392505050565b61064d806101b96000396000f3fe608060405234801561001057600080fd5b50600436106100675760003560e01c80638da5cb5b116100505780638da5cb5b14610089578063f18d03cc146100b5578063f2fde38b146100c857600080fd5b806359eba4541461006c578063715018a614610081575b600080fd5b61007f61007a3660046105a2565b6100db565b005b61007f6101f8565b6000546040805173ffffffffffffffffffffffffffffffffffffffff9092168252519081900360200190f35b61007f6100c33660046105a2565b6102e8565b61007f6100d63660046105f3565b6103cc565b60005473ffffffffffffffffffffffffffffffffffffffff163314610161576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064015b60405180910390fd5b6040517fe1f21c6700000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff848116600483015283811660248301526044820183905285169063e1f21c67906064015b600060405180830381600087803b1580156101da57600080fd5b505af11580156101ee573d6000803e3d6000fd5b5050505050505050565b60005473ffffffffffffffffffffffffffffffffffffffff163314610279576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610158565b6000805460405173ffffffffffffffffffffffffffffffffffffffff909116907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908390a3600080547fffffffffffffffffffffffff0000000000000000000000000000000000000000169055565b60005473ffffffffffffffffffffffffffffffffffffffff163314610369576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610158565b6040517fbeabacc800000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff848116600483015283811660248301526044820183905285169063beabacc8906064016101c0565b60005473ffffffffffffffffffffffffffffffffffffffff16331461044d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610158565b73ffffffffffffffffffffffffffffffffffffffff81166104f0576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201527f64647265737300000000000000000000000000000000000000000000000000006064820152608401610158565b6000805460405173ffffffffffffffffffffffffffffffffffffffff808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a3600080547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff92909216919091179055565b73ffffffffffffffffffffffffffffffffffffffff8116811461059f57600080fd5b50565b600080600080608085870312156105b857600080fd5b84356105c38161057d565b935060208501356105d38161057d565b925060408501356105e38161057d565b9396929550929360600135925050565b60006020828403121561060557600080fd5b81356106108161057d565b939250505056fea26469706673582212204baf0961b5c4fa4f42d44be3bea0750877460d215f2a569770c09c392523c2eb64736f6c634300080a00338be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0";

type CollectorControllerConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: CollectorControllerConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class CollectorController__factory extends ContractFactory {
  constructor(...args: CollectorControllerConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    owner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<CollectorController> {
    return super.deploy(owner, overrides || {}) as Promise<CollectorController>;
  }
  override getDeployTransaction(
    owner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(owner, overrides || {});
  }
  override attach(address: string): CollectorController {
    return super.attach(address) as CollectorController;
  }
  override connect(signer: Signer): CollectorController__factory {
    return super.connect(signer) as CollectorController__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): CollectorControllerInterface {
    return new utils.Interface(_abi) as CollectorControllerInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): CollectorController {
    return new Contract(address, _abi, signerOrProvider) as CollectorController;
  }
}
