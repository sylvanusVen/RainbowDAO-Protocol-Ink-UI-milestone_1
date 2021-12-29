
const { ContractPromise } = require('@polkadot/api-contract');
import erc20Abi from '../abi/erc20.json';
import factory from '../abi/factory.json';
import routerMap from '../abi/routerMap.json';
import core from '../abi/core.json'
import roleManage from '../abi/roleManage.json'
import authManage from '../abi/authManage.json'
import routerManage from '../abi/routerManage.json'
import userManage from '../abi/userManage.json'
import proposal from '../abi/proposal.json'
import incomeManage from '../abi/incomeManage.json'
import tokenFactory from '../abi/tokenFactory.json'
import multisignFactory from '../abi/multisignFactory.json'
import multisign from '../abi/multisign.json'
const ConnectContract = async (api,type,address) =>{
    if(!api){
      return
    }
    const abiMap ={
        erc20:{abi:erc20Abi, address:"5GD59LAWJ1ywWwcdtGaoaaa19PZ5G2jD6YnGfq2ovPRgjgrt"},
        factory:{ address :"5GHhDtpb36ikhpedynbBXK59nVo2BfkevtDz3sSHzeKAVe6K" , abi:factory},
        routerMap:{ address :"5E4NaYuHUQRAvoT9dxXKYgB3ABHiuP5VMwFxTfkCg4xdyzNL" , abi:routerMap},
        core:{ address : "5FbUtTVK1CofRbSz4Wg2Emw1piGvq4wi8NGVP7oo2fit7Tpb", abi : core},
        roleManage:{ address :"5DuSiRJ7MT1uSeQF3YWhqtN5it5VpFmuPWxvsqTWaYRkKcjU" , abi:roleManage},
        authManage:{address:"5CtaZNZRtc1UEjkUVaMVe5FBPya2tqkSjurY1RQW5mNL9vG4", abi:authManage},
        routerManage:{address:"5E4NaYuHUQRAvoT9dxXKYgB3ABHiuP5VMwFxTfkCg4xdyzNL", abi:routerManage},
        userManage:{address:"5FNUAGKgfStPByYDXT8Y9YQXsAUSjKBhbUTgDnmDYcHJjQbi", abi:userManage},
        proposal:{address:"5GZexqezgJ1uaVHMYxiG3hZ52xvHBYJXJnVNRdiAb8vTjfpm", abi:proposal},
        incomeManage:{address:"5GXauXmWbQbASctstTzj4rC5iKcYk8qgAhwkTWjmA6U6gKHx", abi:incomeManage},
        tokenFactory:{address:"5CeZCYRvMnC4HN5XRdzNe1XtCxoYen73HLY5wTdrauwTk4bk", abi:tokenFactory},
        multisignFactory:{address:"5Gi3uhjy4aDiHJ4ui9srz8GtELmCD2XZxxkEbvx2FNxRc6CE", abi:multisignFactory},
        multisign:{ abi: multisign}
    }
    console.log(api, abiMap[type].abi, address)

    if(abiMap[type].address){
        address = abiMap[type].address
    }
    const mainContract = new ContractPromise(api, abiMap[type].abi, address);
    return mainContract;
  }

export default ConnectContract
