const { ContractPromise } = require('@polkadot/api-contract');
import erc20Abi from '../abi/erc20_v0.1.json';
import factory from '../abi/factory.json';
import routerMap from '../abi/routerMap.json';
import multisign from '../abi/multisign.json'
import core from '../abi/core.json'
import roleManage from '../abi/roleManage.json'
import authManage from '../abi/authManage.json'
import routerManage from '../abi/routerManage.json'
const ConnectContract = async (api,type,address) =>{
    if(!api){
      return
    }
    const abiMap ={
        erc20:{abi:erc20Abi},
        factory:{ address :"5GHhDtpb36ikhpedynbBXK59nVo2BfkevtDz3sSHzeKAVe6K" , abi:factory},
        routerMap:{ address :"5GHhDtpb36ikhpedynbBXK59nVo2BfkevtDz3sSHzeKAVe6K" , abi:routerMap},
        multisign:{ address : "", abi : multisign},
        core:{ address : "", abi : core},
        roleManage:{ address :"5DuSiRJ7MT1uSeQF3YWhqtN5it5VpFmuPWxvsqTWaYRkKcjU" , abi:routerMap},
        authManage:{address:"5CtaZNZRtc1UEjkUVaMVe5FBPya2tqkSjurY1RQW5mNL9vG4 ", abi:authManage},
        routerManage:{address:"5E4NaYuHUQRAvoT9dxXKYgB3ABHiuP5VMwFxTfkCg4xdyzNL ", abi:routerManage},
    }
    console.log(api, abiMap[type].abi, address)

    if(abiMap[type].address){
        address = abiMap[type].address
    }
    const mainContract = new ContractPromise(api, abiMap[type].abi, address);
    return mainContract;
  }

export default ConnectContract
