/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  IReserveInterestRateStrategy,
  IReserveInterestRateStrategyInterface,
} from "../../../../../@aave/core-v3/contracts/interfaces/IReserveInterestRateStrategy";

const _abi = [
  {
    inputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "unbacked",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "liquidityAdded",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "liquidityTaken",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "totalStableDebt",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "totalVariableDebt",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "averageStableBorrowRate",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "reserveFactor",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "reserve",
            type: "address",
          },
          {
            internalType: "address",
            name: "aToken",
            type: "address",
          },
        ],
        internalType: "struct DataTypes.CalculateInterestRatesParams",
        name: "params",
        type: "tuple",
      },
    ],
    name: "calculateInterestRates",
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
    ],
    stateMutability: "view",
    type: "function",
  },
];

export class IReserveInterestRateStrategy__factory {
  static readonly abi = _abi;
  static createInterface(): IReserveInterestRateStrategyInterface {
    return new utils.Interface(_abi) as IReserveInterestRateStrategyInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IReserveInterestRateStrategy {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as IReserveInterestRateStrategy;
  }
}
