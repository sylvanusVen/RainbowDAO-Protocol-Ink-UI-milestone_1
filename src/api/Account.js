import {
    web3Accounts,
    web3Enable,
    web3FromAddress
} from '@polkadot/extension-dapp';

const accountlist = async () => {
    const allInjected = await web3Enable('RainbowDao');
    console.log("accountlist++++++++++++++++++++++++++++++++++++++++++++++",allInjected)

    if (allInjected.length === 0) {
        console.error("!!!!! No wallet extention detected!!");
        return {
            status:false,
            type:"wallet",
            msg:"No wallet extention detected!"
        } ;
    }
    const allAccounts = await web3Accounts();
    console.log("ALLACCOUNTS++++++++++++++++++++++++++++++++++++++++++++++",allAccounts)
    if (!allAccounts) {
        console.error("no valid accounts available!");
        return{
            status:false,
            type:"account",
            msg:"Sorry, there is no account！"
        }  ;
    }
    return{
        status:true,
        allAccounts
    };
}
const accountAddress = async () =>{
    let accountAddress;
    const allInjected = await web3Enable('RainbowDao');
    if (allInjected.length === 0) {
        console.error("!!!!! No wallet extention detected!!");
        // return;
    }
    const Accounts = JSON.parse(sessionStorage.getItem('account'));
    console.log("Accounts+++++++++++++++++++++++++++++++++++++++++++" + Accounts)

    if (Accounts && Accounts.length > 0) {
        accountAddress = Accounts[0].address;
    } else {
        let accounts = await accountlist
        accountAddress = accounts.allAccounts[0].address;

    }
    return accountAddress;

}
const accountName = async () =>{
    let accountName;
    const allInjected = await web3Enable('RainbowDao');
    if (allInjected.length === 0) {
        console.error("!!!!! No wallet extention detected!!");
        return;
    }
    const Accounts = JSON.parse(sessionStorage.getItem('account'));
    if (Accounts && Accounts.length > 0) {
        accountName = Accounts[0].meta.name;
    } else {
        accountName = '';

    }
    return accountName;

}
const accountInjector = async () => {
    let injector;
    const Accounts = JSON.parse(sessionStorage.getItem('account'));
    console.log(Accounts,Accounts.length)

    if (Accounts && Accounts.length > 0) {
        const AccountId = Accounts[0].address;
        console.log(AccountId)
        injector = await web3FromAddress(AccountId);
    }
    return injector;

}
export default {
    accountlist,
    accountAddress,
    accountName,
    accountInjector,
}
