function getContractByName(name, web3) {
    const contract = require("./" + name + ".json")
    const chainId =  1234
    return new web3.eth.Contract(contract.abi, contract.networks[chainId].address, {});
}


export default {
    getContractByName,
};
