
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
        erc20:{abi:erc20Abi, address:"5DAZWSoB352Q6dXChhWfijQmBsb4rZmoxh1ZED41XctrFrNe"},
        factory:{ address :"5GHhDtpb36ikhpedynbBXK59nVo2BfkevtDz3sSHzeKAVe6K" , abi:factory},
        routerMap:{ address :"5E4NaYuHUQRAvoT9dxXKYgB3ABHiuP5VMwFxTfkCg4xdyzNL" , abi:routerMap},
        core:{ address : "5FbUtTVK1CofRbSz4Wg2Emw1piGvq4wi8NGVP7oo2fit7Tpb", abi : core},
        roleManage:{ address :"5DuSiRJ7MT1uSeQF3YWhqtN5it5VpFmuPWxvsqTWaYRkKcjU" , abi:roleManage},
        authManage:{address:"5CtaZNZRtc1UEjkUVaMVe5FBPya2tqkSjurY1RQW5mNL9vG4", abi:authManage},
        routerManage:{address:"5E4NaYuHUQRAvoT9dxXKYgB3ABHiuP5VMwFxTfkCg4xdyzNL", abi:routerManage},
        userManage:{address:"5FNUAGKgfStPByYDXT8Y9YQXsAUSjKBhbUTgDnmDYcHJjQbi", abi:userManage},
        proposal:{address:"5ErHrzoP45FQ8ydpemeRTkcA3n43PSSFPW7yXP2TS7kAGxXm", abi:proposal},
        incomeManage:{address:"5GXauXmWbQbASctstTzj4rC5iKcYk8qgAhwkTWjmA6U6gKHx", abi:incomeManage},
        tokenFactory:{address:"5GC54ofYt2ZCxtmnvCQS9PPW8cFDnC31h2MUbsE8WKG7V1sZ", abi:tokenFactory},
        multisignFactory:{address:"5GL9B9Jz8nb4JD6DTA1wzcF8X7orCAVaxgUes3TV87osBTNB", abi:multisignFactory},
        multisign:{address:"5Cwyf39wNiXam3u8YqBDbT21DeXrDihCGCC1ji2nXSLPLveQ", abi: multisign}
    }
    console.log(api, abiMap[type].abi, address)

    if(abiMap[type].address){
        address = abiMap[type].address
    }
    const mainContract = new ContractPromise(api, abiMap[type].abi, address);
    return mainContract;
  }

export default ConnectContract
