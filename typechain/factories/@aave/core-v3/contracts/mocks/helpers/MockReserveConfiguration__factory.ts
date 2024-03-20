/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../../../common";
import type {
  MockReserveConfiguration,
  MockReserveConfigurationInterface,
} from "../../../../../../@aave/core-v3/contracts/mocks/helpers/MockReserveConfiguration";

const _abi = [
  {
    inputs: [],
    name: "configuration",
    outputs: [
      {
        internalType: "uint256",
        name: "data",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getBorrowCap",
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
    name: "getBorrowingEnabled",
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
    inputs: [],
    name: "getCaps",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
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
    name: "getDecimals",
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
    name: "getEModeCategory",
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
    name: "getFlags",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
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
    inputs: [],
    name: "getFlashLoanEnabled",
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
    inputs: [],
    name: "getFrozen",
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
    inputs: [],
    name: "getLiquidationBonus",
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
    name: "getLiquidationProtocolFee",
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
    name: "getLiquidationThreshold",
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
    name: "getLtv",
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
    name: "getParams",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
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
    name: "getReserveFactor",
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
    name: "getStableRateBorrowingEnabled",
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
    inputs: [],
    name: "getSupplyCap",
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
    name: "getUnbackedMintCap",
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
        internalType: "uint256",
        name: "borrowCap",
        type: "uint256",
      },
    ],
    name: "setBorrowCap",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bool",
        name: "enabled",
        type: "bool",
      },
    ],
    name: "setBorrowingEnabled",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "decimals",
        type: "uint256",
      },
    ],
    name: "setDecimals",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "categoryId",
        type: "uint256",
      },
    ],
    name: "setEModeCategory",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bool",
        name: "enabled",
        type: "bool",
      },
    ],
    name: "setFlashLoanEnabled",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bool",
        name: "frozen",
        type: "bool",
      },
    ],
    name: "setFrozen",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "bonus",
        type: "uint256",
      },
    ],
    name: "setLiquidationBonus",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "liquidationProtocolFee",
        type: "uint256",
      },
    ],
    name: "setLiquidationProtocolFee",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "threshold",
        type: "uint256",
      },
    ],
    name: "setLiquidationThreshold",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "ltv",
        type: "uint256",
      },
    ],
    name: "setLtv",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "reserveFactor",
        type: "uint256",
      },
    ],
    name: "setReserveFactor",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bool",
        name: "enabled",
        type: "bool",
      },
    ],
    name: "setStableRateBorrowingEnabled",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "supplyCap",
        type: "uint256",
      },
    ],
    name: "setSupplyCap",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "unbackedMintCap",
        type: "uint256",
      },
    ],
    name: "setUnbackedMintCap",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50611032806100206000396000f3fe608060405234801561001057600080fd5b50600436106101f05760003560e01c80638c8885c81161010f578063c37bdcec116100a2578063ead8aa0211610071578063ead8aa0214610524578063f0141d8414610545578063f1514a1a14610562578063fa573d071461057557600080fd5b8063c37bdcec146104ad578063d0b0c816146104cb578063d1c11f18146104de578063e08a28a31461050157600080fd5b8063a55102f7116100de578063a55102f714610453578063a620063514610466578063aede7b7614610479578063b6a3f59a1461049a57600080fd5b80638c8885c8146103e157806392dfb2fb146103f45780639d706d3114610407578063a37e52e31461044057600080fd5b80636c70bee9116101875780637495b353116101565780637495b3531461036157806379750bc4146103905780637e932d32146103b35780638145bd2e146103c657600080fd5b80636c70bee9146102f75780636cc7149d14610301578063717186d11461033b57806371cb13321461034e57600080fd5b80634ae9b8bc116101c35780634ae9b8bc1461026a57806359aa9e72146102885780635e615a6b146102a65780635f558e53146102db57600080fd5b80631c446983146101f5578063203618141461020a57806328842d4f1461023a578063356f235c1461024d575b600080fd5b610208610203366004610f47565b610588565b005b60408051602081019091526000549081905260741c640fffffffff165b6040519081526020015b60405180910390f35b610208610248366004610f47565b6105a9565b60408051602081019091526000549081905260a81c60ff16610227565b60408051602081019091526000549081905260101c61ffff16610227565b60408051602080820190925260005490819052901c61ffff16610227565b6102ae6105c3565b604080519687526020870195909552938501929092526060840152608083015260a082015260c001610231565b6040805160208101825260005490819052901c61ffff16610227565b6000546102279081565b61030961062c565b60408051951515865293151560208601529115159284019290925290151560608301521515608082015260a001610231565b610208610349366004610f47565b6106a7565b61020861035c366004610f60565b6106c1565b6040805160208101909152600054908190526702000000000000001615155b6040519015158152602001610231565b604080516020810190915260005490819052670400000000000000161515610380565b6102086103c1366004610f60565b6106db565b60408051602081019091526000549081905261ffff16610227565b6102086103ef366004610f47565b6106f5565b610208610402366004610f47565b61070f565b604080516020810190915260005490819052640fffffffff605082901c81169160741c1660408051928352602083019190915201610231565b61020861044e366004610f47565b610729565b610208610461366004610f60565b610743565b610208610474366004610f47565b61075d565b60408051602081019091526000549081905260501c640fffffffff16610227565b6102086104a8366004610f47565b610777565b60408051602081019091526000549081905260981c61ffff16610227565b6102086104d9366004610f47565b610791565b604080516020810190915260005490819052678000000000000000161515610380565b604080516020810190915260005490819052670800000000000000161515610380565b60408051602081019091526000549081905260b01c640fffffffff16610227565b60408051602081019091526000549081905260301c60ff16610227565b610208610570366004610f60565b6107ab565b610208610583366004610f47565b6107c5565b604080516020810190915260005481526105a281836107df565b5160005550565b604080516020810190915260005481526105a28183610889565b60008060008060008061061960006040518060200160405290816000820154815250505161ffff80821692601083901c821692602081901c831692603082901c60ff90811693604084901c9092169260a81c1690565b949b939a50919850965094509092509050565b6000806000806000610696600060405180602001604052908160008201548152505051670100000000000000811615159167020000000000000082161515916704000000000000008116151591670800000000000000821615159167100000000000000016151590565b945094509450945094509091929394565b604080516020810190915260005481526105a2818361092a565b604080516020810190915260005481526105a281836109ce565b604080516020810190915260005481526105a28183610a13565b604080516020810190915260005481526105a28183610a58565b604080516020810190915260005481526105a28183610af8565b604080516020810190915260005481526105a28183610b9c565b604080516020810190915260005481526105a28183610c37565b604080516020810190915260005481526105a28183610c7c565b604080516020810190915260005481526105a28183610d1d565b604080516020810190915260005481526105a28183610dc1565b604080516020810190915260005481526105a28183610e62565b604080516020810190915260005481526105a28183610ea7565b60408051808201909152600281527f3637000000000000000000000000000000000000000000000000000000000000602082015261ffff821115610859576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108509190610f89565b60405180910390fd5b5081517fffffffffffffffffffffffffffffffffffffffffffff0000ffffffffffffffff1660409190911b179052565b60408051808201909152600281527f3635000000000000000000000000000000000000000000000000000000000000602082015261ffff8211156108fa576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108509190610f89565b5081517fffffffffffffffffffffffffffffffffffffffffffffffffffff0000ffffffff1660209190911b179052565b60408051808201909152600281527f36380000000000000000000000000000000000000000000000000000000000006020820152640fffffffff82111561099e576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108509190610f89565b5081517ffffffffffffffffffffffffffffffffffff000000000ffffffffffffffffffff1660509190911b179052565b603b816109dc5760006109df565b60015b83517ffffffffffffffffffffffffffffffffffffffffffffffffff7ffffffffffffff1660ff9190911690911b1790915250565b603981610a21576000610a24565b60015b83517ffffffffffffffffffffffffffffffffffffffffffffffffffdffffffffffffff1660ff9190911690911b1790915250565b60408051808201909152600281527f3636000000000000000000000000000000000000000000000000000000000000602082015260ff821115610ac8576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108509190610f89565b5081517fffffffffffffffffffffffffffffffffffffffffffffffffff00ffffffffffff1660309190911b179052565b60408051808201909152600281527f37320000000000000000000000000000000000000000000000000000000000006020820152640fffffffff821115610b6c576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108509190610f89565b5081517ffffffffffff000000000ffffffffffffffffffffffffffffffffffffffffffff1660b09190911b179052565b60408051808201909152600281527f3633000000000000000000000000000000000000000000000000000000000000602082015261ffff821115610c0d576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108509190610f89565b5081517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff000016179052565b603f81610c45576000610c48565b60015b83517fffffffffffffffffffffffffffffffffffffffffffffffff7fffffffffffffff1660ff9190911690911b1790915250565b60408051808201909152600281527f3730000000000000000000000000000000000000000000000000000000000000602082015261ffff821115610ced576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108509190610f89565b5081517fffffffffffffffffffffff0000ffffffffffffffffffffffffffffffffffffff1660989190911b179052565b60408051808201909152600281527f36390000000000000000000000000000000000000000000000000000000000006020820152640fffffffff821115610d91576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108509190610f89565b5081517fffffffffffffffffffffffffff000000000fffffffffffffffffffffffffffff1660749190911b179052565b60408051808201909152600281527f3634000000000000000000000000000000000000000000000000000000000000602082015261ffff821115610e32576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108509190610f89565b5081517fffffffffffffffffffffffffffffffffffffffffffffffffffffffff0000ffff1660109190911b179052565b603a81610e70576000610e73565b60015b83517ffffffffffffffffffffffffffffffffffffffffffffffffffbffffffffffffff1660ff9190911690911b1790915250565b60408051808201909152600281527f3731000000000000000000000000000000000000000000000000000000000000602082015260ff821115610f17576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108509190610f89565b5081517fffffffffffffffffffff00ffffffffffffffffffffffffffffffffffffffffff1660a89190911b179052565b600060208284031215610f5957600080fd5b5035919050565b600060208284031215610f7257600080fd5b81358015158114610f8257600080fd5b9392505050565b600060208083528351808285015260005b81811015610fb657858101830151858201604001528201610f9a565b81811115610fc8576000604083870101525b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01692909201604001939250505056fea2646970667358221220a79a5c52d65d3e99bb856ffd0d690bad4bdc61ead3eac83a93bc5831f59f700464736f6c634300080a0033";

type MockReserveConfigurationConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MockReserveConfigurationConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MockReserveConfiguration__factory extends ContractFactory {
  constructor(...args: MockReserveConfigurationConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<MockReserveConfiguration> {
    return super.deploy(overrides || {}) as Promise<MockReserveConfiguration>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): MockReserveConfiguration {
    return super.attach(address) as MockReserveConfiguration;
  }
  override connect(signer: Signer): MockReserveConfiguration__factory {
    return super.connect(signer) as MockReserveConfiguration__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MockReserveConfigurationInterface {
    return new utils.Interface(_abi) as MockReserveConfigurationInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MockReserveConfiguration {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as MockReserveConfiguration;
  }
}
