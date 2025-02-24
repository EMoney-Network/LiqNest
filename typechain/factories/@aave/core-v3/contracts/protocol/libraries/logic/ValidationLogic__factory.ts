/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../../../../common";
import type {
  ValidationLogic,
  ValidationLogicInterface,
} from "../../../../../../../@aave/core-v3/contracts/protocol/libraries/logic/ValidationLogic";

const _abi = [
  {
    inputs: [],
    name: "HEALTH_FACTOR_LIQUIDATION_THRESHOLD",
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
    name: "ISOLATED_COLLATERAL_SUPPLIER_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "MINIMUM_HEALTH_FACTOR_LIQUIDATION_THRESHOLD",
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
    name: "REBALANCE_UP_LIQUIDITY_RATE_THRESHOLD",
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
];

const _bytecode =
  "0x60e8610039600b82828239805160001a60731461002c57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe730000000000000000000000000000000000000000301460806040526004361060515760003560e01c80632b0139fa146056578063561cbec914608e578063abfcc86a14609c578063c3525c281460a4575b600080fd5b607c7fd1d2cf869016112a9af1107bcf43c3759daf22cf734aad47d0c9c726e33bc78281565b60405190815260200160405180910390f35b607c670d2f13f7789f000081565b607c61232881565b607c670de0b6b3a76400008156fea2646970667358221220e6391f912050f208ceeae04fb48b3c9dd068f08f05cf989c4a28fcee757eed2864736f6c634300080a0033";

type ValidationLogicConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ValidationLogicConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ValidationLogic__factory extends ContractFactory {
  constructor(...args: ValidationLogicConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ValidationLogic> {
    return super.deploy(overrides || {}) as Promise<ValidationLogic>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): ValidationLogic {
    return super.attach(address) as ValidationLogic;
  }
  override connect(signer: Signer): ValidationLogic__factory {
    return super.connect(signer) as ValidationLogic__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ValidationLogicInterface {
    return new utils.Interface(_abi) as ValidationLogicInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ValidationLogic {
    return new Contract(address, _abi, signerOrProvider) as ValidationLogic;
  }
}
