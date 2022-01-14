
const { ContractPromise } = require('@polkadot/api-contract');
import erc20Abi from '../abi/erc20.json';
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
        erc20:{abi:erc20Abi, address:"5GbZ9XwFEBRakwbUt6dA6Lrr2biczzt36hvxYeffAREN2Y3v"},
        core:{ address : "5GrKFtghHdHvA8W16LY5AA47JQd6HGCTuQHgu1yBvJ7FnioC", abi : core},
        roleManage:{  abi:roleManage},
        authManage:{ abi:authManage},
        routerManage:{ abi:routerManage},
        userManage:{address:"5DGiBXLt4EK1Ek3bggrzUufzVmVYdgMWkqU1iTNbnSJJkE1J", abi:userManage},
        proposal:{address:"5HTefcUaYiAW3hGvjmEXXLmRqJNUXroGdDxWNGhFFi1VQtkj", abi:proposal},
        incomeManage:{address:"5EGSkkJHe6nb99NVCuK4YUVY5gJkeeXVkVmuZedsNw9QFzHn", abi:incomeManage},
        tokenFactory:{address:"5G2sy7RCQxPxchVHsPo7YLWopxvbaM2LDscN7JHRyHBFFBGc", abi:tokenFactory},
        multisignFactory:{address:"5EkN9m2Ds29hzEJMSZLgkidtXAtE4sRyZJ8ZAqG4x1Vb56jx", abi:multisignFactory},
        multisign:{ abi: multisign}
    }

    if(abiMap[type].address){
        address = abiMap[type].address
    }
    const mainContract = new ContractPromise(api, abiMap[type].abi, address);
    return mainContract;
  }

export default ConnectContract
