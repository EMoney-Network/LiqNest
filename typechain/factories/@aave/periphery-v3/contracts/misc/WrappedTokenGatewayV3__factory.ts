/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../../common";
import type {
  WrappedTokenGatewayV3,
  WrappedTokenGatewayV3Interface,
} from "../../../../../@aave/periphery-v3/contracts/misc/WrappedTokenGatewayV3";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "weth",
        type: "address",
      },
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "contract IPool",
        name: "pool",
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
    stateMutability: "payable",
    type: "fallback",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "interestRateMode",
        type: "uint256",
      },
      {
        internalType: "uint16",
        name: "referralCode",
        type: "uint16",
      },
    ],
    name: "borrowETH",
    outputs: [],
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
      {
        internalType: "address",
        name: "onBehalfOf",
        type: "address",
      },
      {
        internalType: "uint16",
        name: "referralCode",
        type: "uint16",
      },
    ],
    name: "depositETH",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "emergencyEtherTransfer",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "emergencyTokenTransfer",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getWETHAddress",
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
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "rateMode",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "onBehalfOf",
        type: "address",
      },
    ],
    name: "repayETH",
    outputs: [],
    stateMutability: "payable",
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
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
    ],
    name: "withdrawETH",
    outputs: [],
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
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "deadline",
        type: "uint256",
      },
      {
        internalType: "uint8",
        name: "permitV",
        type: "uint8",
      },
      {
        internalType: "bytes32",
        name: "permitR",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "permitS",
        type: "bytes32",
      },
    ],
    name: "withdrawETHWithPermit",
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
  "0x60c06040523480156200001157600080fd5b50604051620022673803806200226783398101604081905262000034916200022d565b600080546001600160a01b0319163390811782556040519091829160008051602062002247833981519152908290a3506001600160a01b03808416608052811660a052620000828262000103565b60405163095ea7b360e01b81526001600160a01b038281166004830152600019602483015284169063095ea7b3906044016020604051808303816000875af1158015620000d3573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620000f9919062000281565b50505050620002ac565b6000546001600160a01b03163314620001635760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064015b60405180910390fd5b6001600160a01b038116620001ca5760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b60648201526084016200015a565b600080546040516001600160a01b03808516939216916000805160206200224783398151915291a3600080546001600160a01b0319166001600160a01b0392909216919091179055565b6001600160a01b03811681146200022a57600080fd5b50565b6000806000606084860312156200024357600080fd5b8351620002508162000214565b6020850151909350620002638162000214565b6040850151909250620002768162000214565b809150509250925092565b6000602082840312156200029457600080fd5b81518015158114620002a557600080fd5b9392505050565b60805160a051611ee362000364600039600081816103bb015281816105fa0152818161078b0152818161086a01528181610ace01528181610d1301528181610f42015261123101526000818160dd015281816102c70152818161038801528181610504015281816105bd015281816106920152818161074b01528181610824015281816108f301528181610aa301528181610cde01528181610db001528181610f17015281816111fc01526112ce0152611ee36000f3fe6080604052600436106100c05760003560e01c80638da5cb5b11610074578063d4c40b6c1161004e578063d4c40b6c146102eb578063eed88b8d1461030b578063f2fde38b1461032b5761016b565b80638da5cb5b14610248578063a3d5b25514610298578063affa8817146102b85761016b565b806366514c97116100a557806366514c97146101f3578063715018a61461021357806380500d20146102285761016b565b806302c5fcf8146101cd578063474cf53d146101e05761016b565b3661016b573373ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001614610169576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601360248201527f52656365697665206e6f7420616c6c6f7765640000000000000000000000000060448201526064015b60405180910390fd5b005b6040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601460248201527f46616c6c6261636b206e6f7420616c6c6f7765640000000000000000000000006044820152606401610160565b6101696101db36600461197a565b61034b565b6101696101ee3660046119d4565b610690565b3480156101ff57600080fd5b5061016961020e366004611a1f565b6107e7565b34801561021f57600080fd5b50610169610976565b34801561023457600080fd5b50610169610243366004611a5e565b610a66565b34801561025457600080fd5b5060005473ffffffffffffffffffffffffffffffffffffffff165b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200160405180910390f35b3480156102a457600080fd5b506101696102b3366004611a95565b610e33565b3480156102c457600080fd5b507f000000000000000000000000000000000000000000000000000000000000000061026f565b3480156102f757600080fd5b50610169610306366004611ad6565b610eda565b34801561031757600080fd5b50610169610326366004611b4d565b611355565b34801561033757600080fd5b50610169610346366004611b79565b6113e4565b6040517f35ea6a7500000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000081166004830152600091829161042c9185917f000000000000000000000000000000000000000000000000000000000000000016906335ea6a75906024016101e060405180830381865afa158015610403573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104279190611ca7565b611595565b90925090506000600185600281111561044757610447611dca565b600281111561045857610458611dca565b146104635781610465565b825b9050808610156104725750845b80341015610502576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602760248201527f6d73672e76616c7565206973206c657373207468616e2072657061796d656e7460448201527f20616d6f756e74000000000000000000000000000000000000000000000000006064820152608401610160565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663d0e30db0826040518263ffffffff1660e01b81526004016000604051808303818588803b15801561056a57600080fd5b505af115801561057e573d6000803e3d6000fd5b50506040517f573ade8100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000081166004830152346024830152604482018a905288811660648301527f000000000000000000000000000000000000000000000000000000000000000016935063573ade81925060840190506020604051808303816000875af1158015610647573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061066b9190611df9565b508034111561068757610687336106828334611e12565b6116d2565b50505050505050565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663d0e30db0346040518263ffffffff1660e01b81526004016000604051808303818588803b1580156106f857600080fd5b505af115801561070c573d6000803e3d6000fd5b50506040517fe8eda9df00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000081166004830152346024830152868116604483015261ffff861660648301527f000000000000000000000000000000000000000000000000000000000000000016935063e8eda9df92506084019050600060405180830381600087803b1580156107d357600080fd5b505af1158015610687573d6000803e3d6000fd5b6040517fa415bcad00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000081166004830152602482018590526044820184905261ffff831660648301523360848301527f0000000000000000000000000000000000000000000000000000000000000000169063a415bcad9060a401600060405180830381600087803b1580156108ae57600080fd5b505af11580156108c2573d6000803e3d6000fd5b50506040517f2e1a7d4d000000000000000000000000000000000000000000000000000000008152600481018690527f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff169250632e1a7d4d9150602401600060405180830381600087803b15801561094e57600080fd5b505af1158015610962573d6000803e3d6000fd5b5050505061097033846116d2565b50505050565b60005473ffffffffffffffffffffffffffffffffffffffff1633146109f7576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610160565b6000805460405173ffffffffffffffffffffffffffffffffffffffff909116907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908390a3600080547fffffffffffffffffffffffff0000000000000000000000000000000000000000169055565b6040517f35ea6a7500000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000811660048301526000917f0000000000000000000000000000000000000000000000000000000000000000909116906335ea6a75906024016101e060405180830381865afa158015610b18573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b3c9190611ca7565b61010001516040517f70a0823100000000000000000000000000000000000000000000000000000000815233600482015290915060009073ffffffffffffffffffffffffffffffffffffffff8316906370a0823190602401602060405180830381865afa158015610bb1573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610bd59190611df9565b9050837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff811415610c035750805b6040517f23b872dd0000000000000000000000000000000000000000000000000000000081523360048201523060248201526044810182905273ffffffffffffffffffffffffffffffffffffffff8416906323b872dd906064016020604051808303816000875af1158015610c7c573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ca09190611e50565b506040517f69328dec00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000081166004830152602482018390523060448301527f000000000000000000000000000000000000000000000000000000000000000016906369328dec906064016020604051808303816000875af1158015610d5c573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d809190611df9565b506040517f2e1a7d4d000000000000000000000000000000000000000000000000000000008152600481018290527f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1690632e1a7d4d90602401600060405180830381600087803b158015610e0957600080fd5b505af1158015610e1d573d6000803e3d6000fd5b50505050610e2b84826116d2565b505050505050565b60005473ffffffffffffffffffffffffffffffffffffffff163314610eb4576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610160565b610ed573ffffffffffffffffffffffffffffffffffffffff841683836117b6565b505050565b6040517f35ea6a7500000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000811660048301526000917f0000000000000000000000000000000000000000000000000000000000000000909116906335ea6a75906024016101e060405180830381865afa158015610f8c573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610fb09190611ca7565b61010001516040517f70a0823100000000000000000000000000000000000000000000000000000000815233600482015290915060009073ffffffffffffffffffffffffffffffffffffffff8316906370a0823190602401602060405180830381865afa158015611025573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906110499190611df9565b9050877fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8114156110775750805b6040517fd505accf000000000000000000000000000000000000000000000000000000008152336004820152306024820152604481018a90526064810188905260ff8716608482015260a4810186905260c4810185905273ffffffffffffffffffffffffffffffffffffffff84169063d505accf9060e401600060405180830381600087803b15801561110957600080fd5b505af115801561111d573d6000803e3d6000fd5b50506040517f23b872dd0000000000000000000000000000000000000000000000000000000081523360048201523060248201526044810184905273ffffffffffffffffffffffffffffffffffffffff861692506323b872dd91506064016020604051808303816000875af115801561119a573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906111be9190611e50565b506040517f69328dec00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000081166004830152602482018390523060448301527f000000000000000000000000000000000000000000000000000000000000000016906369328dec906064016020604051808303816000875af115801561127a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061129e9190611df9565b506040517f2e1a7d4d000000000000000000000000000000000000000000000000000000008152600481018290527f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1690632e1a7d4d90602401600060405180830381600087803b15801561132757600080fd5b505af115801561133b573d6000803e3d6000fd5b5050505061134988826116d2565b50505050505050505050565b60005473ffffffffffffffffffffffffffffffffffffffff1633146113d6576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610160565b6113e082826116d2565b5050565b60005473ffffffffffffffffffffffffffffffffffffffff163314611465576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610160565b73ffffffffffffffffffffffffffffffffffffffff8116611508576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201527f64647265737300000000000000000000000000000000000000000000000000006064820152608401610160565b6000805460405173ffffffffffffffffffffffffffffffffffffffff808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a3600080547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff92909216919091179055565b6101208101516040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff848116600483015260009283929116906370a0823190602401602060405180830381865afa15801561160c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906116309190611df9565b6101408401516040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8781166004830152909116906370a0823190602401602060405180830381865afa1580156116a3573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906116c79190611df9565b915091509250929050565b6040805160008082526020820190925273ffffffffffffffffffffffffffffffffffffffff84169083906040516117099190611e72565b60006040518083038185875af1925050503d8060008114611746576040519150601f19603f3d011682016040523d82523d6000602084013e61174b565b606091505b5050905080610ed5576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601360248201527f4554485f5452414e534645525f4641494c4544000000000000000000000000006044820152606401610160565b6040517fa9059cbb0000000000000000000000000000000000000000000000000000000080825273ffffffffffffffffffffffffffffffffffffffff84166004830152602482018390529060008060448382895af1611819573d6000803e3d6000fd5b5061182384611889565b610970576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601560248201527f475076323a206661696c6564207472616e7366657200000000000000000000006044820152606401610160565b60006118c9565b7f08c379a00000000000000000000000000000000000000000000000000000000060005260206004528060245250806044525060646000fd5b3d80156119085760208114611942576119037f475076323a206d616c666f726d6564207472616e7366657220726573756c7400601f611890565b61194f565b823b611939576119397f475076323a206e6f74206120636f6e74726163740000000000000000000000006014611890565b6001915061194f565b3d6000803e600051151591505b50919050565b73ffffffffffffffffffffffffffffffffffffffff8116811461197757600080fd5b50565b6000806000806080858703121561199057600080fd5b843561199b81611955565b9350602085013592506040850135915060608501356119b981611955565b939692955090935050565b61ffff8116811461197757600080fd5b6000806000606084860312156119e957600080fd5b83356119f481611955565b92506020840135611a0481611955565b91506040840135611a14816119c4565b809150509250925092565b60008060008060808587031215611a3557600080fd5b8435611a4081611955565b9350602085013592506040850135915060608501356119b9816119c4565b600080600060608486031215611a7357600080fd5b8335611a7e81611955565b9250602084013591506040840135611a1481611955565b600080600060608486031215611aaa57600080fd5b8335611ab581611955565b92506020840135611ac581611955565b929592945050506040919091013590565b600080600080600080600060e0888a031215611af157600080fd5b8735611afc81611955565b9650602088013595506040880135611b1381611955565b945060608801359350608088013560ff81168114611b3057600080fd5b9699959850939692959460a0840135945060c09093013592915050565b60008060408385031215611b6057600080fd5b8235611b6b81611955565b946020939093013593505050565b600060208284031215611b8b57600080fd5b8135611b9681611955565b9392505050565b6040516101e0810167ffffffffffffffff81118282101715611be8577f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b60405290565b600060208284031215611c0057600080fd5b6040516020810181811067ffffffffffffffff82111715611c4a577f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6040529151825250919050565b80516fffffffffffffffffffffffffffffffff81168114611c7757600080fd5b919050565b805164ffffffffff81168114611c7757600080fd5b8051611c77816119c4565b8051611c7781611955565b60006101e08284031215611cba57600080fd5b611cc2611b9d565b611ccc8484611bee565b8152611cda60208401611c57565b6020820152611ceb60408401611c57565b6040820152611cfc60608401611c57565b6060820152611d0d60808401611c57565b6080820152611d1e60a08401611c57565b60a0820152611d2f60c08401611c7c565b60c0820152611d4060e08401611c91565b60e0820152610100611d53818501611c9c565b90820152610120611d65848201611c9c565b90820152610140611d77848201611c9c565b90820152610160611d89848201611c9c565b90820152610180611d9b848201611c57565b908201526101a0611dad848201611c57565b908201526101c0611dbf848201611c57565b908201529392505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b600060208284031215611e0b57600080fd5b5051919050565b600082821015611e4b577f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b500390565b600060208284031215611e6257600080fd5b81518015158114611b9657600080fd5b6000825160005b81811015611e935760208186018101518583015201611e79565b81811115611ea2576000828501525b50919091019291505056fea264697066735822122013074a00e87f137a3e13bd3d8e2999e38e342b503591129464d57b8314d0450c64736f6c634300080a00338be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0";

type WrappedTokenGatewayV3ConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: WrappedTokenGatewayV3ConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class WrappedTokenGatewayV3__factory extends ContractFactory {
  constructor(...args: WrappedTokenGatewayV3ConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    weth: PromiseOrValue<string>,
    owner: PromiseOrValue<string>,
    pool: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<WrappedTokenGatewayV3> {
    return super.deploy(
      weth,
      owner,
      pool,
      overrides || {}
    ) as Promise<WrappedTokenGatewayV3>;
  }
  override getDeployTransaction(
    weth: PromiseOrValue<string>,
    owner: PromiseOrValue<string>,
    pool: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(weth, owner, pool, overrides || {});
  }
  override attach(address: string): WrappedTokenGatewayV3 {
    return super.attach(address) as WrappedTokenGatewayV3;
  }
  override connect(signer: Signer): WrappedTokenGatewayV3__factory {
    return super.connect(signer) as WrappedTokenGatewayV3__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): WrappedTokenGatewayV3Interface {
    return new utils.Interface(_abi) as WrappedTokenGatewayV3Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): WrappedTokenGatewayV3 {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as WrappedTokenGatewayV3;
  }
}
