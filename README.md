# Setup RainbowDao Protocol Front-end

## Install `Polkadot JS Extension`

Please install `Polkadot JS Extension` before you start. You can get it from here https://polkadot.js.org/extension/

### Get source code

Please get the code from `https://github.com/RainbowcityFoundation/RainbowDAO-Protocol-Ink-UI-milestone_1.git`

```
git clone https://github.com/RainbowcityFoundation/RainbowDAO-Protocol-Ink-UI-milestone_1.git
```

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### docker

```
npm run docker:build
```



## Way 2:  Local Node Test 

### Config front-end

Please find the correct address for `` src/api/connectContract.js ``, and update the correct address in   ``` src/api/connectContract.js ```. And replace `src/api/httpConfig.js connectPath` to your connect path.

it should be `ws://127.0.0.1:9900` by default.

Please find the correct contractHash for `` src/utils/contractHash.json ``, and update the correct address in   `src/utils/contractHash.json`.

### gas

1. Open https://polkadot.js.org/apps/?rpc=ws%3A%2F%2F192.168.101.28%3A9900#/accounts
2. Add  localhost path(like ws://192.168.101.28:9900  )  to local node 
3. Use an account(like Alice) to wire money into a  `Polkadot JS Extension` wallet

## Way 2: Use the online version front-end test  deployed contract

### entrance:

`https://www.rainbowdao.io/polkadot`

### gas

1. Open https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fpot.rainbow.kim#/accounts
2. Add  [wss://pot.rainbow.kim](wss://pot.rainbow.kim)  to local node
3. Use an account(like Alice) to wire money into a `Polkadot JS Extension` wallet

##### Then

You can use `https://www.rainbowdao.io/polkadot` to create token/multisign wallet.  Test  Protocol Management.


