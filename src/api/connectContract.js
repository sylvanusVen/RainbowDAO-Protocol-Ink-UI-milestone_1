
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
        erc20:{abi:erc20Abi, address:"5DXmyXjzhHiDENqPPMt6JDt6e2PrLmpDkcAWvi9PApcUGDbs"},
        factory:{ address :"5G2sy7RCQxPxchVHsPo7YLWopxvbaM2LDscN7JHRyHBFFBGc" , abi:factory},
        routerMap:{ address :"5E4NaYuHUQRAvoT9dxXKYgB3ABHiuP5VMwFxTfkCg4xdyzNL" , abi:routerMap},
        core:{ address : "5GFQgzctcPbxF8gJrdLj24CyAupHYfD1KmLxoPgkpwoFWqRn", abi : core},
        roleManage:{  abi:roleManage},
        authManage:{ abi:authManage},
        routerManage:{ abi:routerManage},
        userManage:{address:"5HRYTE5Cvam2rjtXekkNs3b8mNtkU7dsMN6Ypeef8EUyoUjU", abi:userManage},
        proposal:{address:"5Dfr7FCmaqMfL2QspVtwRmHTzeSsRxBhCJ7bGx8dzVzWpTMw", abi:proposal},
        incomeManage:{address:"5GQQjLrUK6e7xTvVsCFxahTcQUSayrJqPAu7G6yMGTbp5CZ1", abi:incomeManage},
        tokenFactory:{address:"5CeZCYRvMnC4HN5XRdzNe1XtCxoYen73HLY5wTdrauwTk4bk", abi:tokenFactory},
        multisignFactory:{address:"5Cc7sNX3AdB6gY5d2wnTPXnkZeKv2sovfSLv9583QzH7C8Cq", abi:multisignFactory},
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
