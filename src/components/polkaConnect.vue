<template>
  <div class="polkaConnect">
    <button @click="showWallet" v-show="account.length>1" class="rainbow-btn button-connect">
      {{ account.substr(0, 6) + '...' + account.substr(39, 3) }}
    </button>

    <button size="mini" @click="showWallet" v-show="account.length<1" class="rainbow-btn button-connect">
      connect
    </button>
    <div v-show="isShowConnectStatus" class="connect-panel " @click="isShowConnectStatus=false;$emit('changeState')">
      <div class="mask"></div>
      <div class="connect-status-box animate__animated  animate__backInDown" @click.stop>
        Connected
      </div>
    </div>

    <div class="connect-panel" v-show="isShowConnect" @click="isShowConnect=false;$emit('changeState')">
      <div class="mask"></div>
      <div class="content  animate__animated  animate__backInDown" @click.stop>
        <div class="title">
          Choose Wallet
        </div>
        <div class="item" :class="{'active': item.address==account}" @click="polkaConnect(item.address)" v-for="item in accountList" :key="item">
          <div class="name">{{item.meta.name}}</div>
          <div class="address">{{item.address}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Accounts from "../api/Account";
export default {
  name: "polkaConnect",
  props:['changeState','getWeb3'],
  data() {
    return {
      account:"",
      chooseIndex:0,
      isShowConnectStatus: false,
      isLoading: false,
      isShowConnect: false,
      accountList:[],

    }
  },
  computed: {

  },
  async created() {
    let accountList = await Accounts.accountList();
    this.accountList = accountList.allAccounts
    console.log(accountList)
    this.$store.commit("app/SET_ACCOUNT", accountList.allAccounts[0].address)

  },
  methods: {
    loginOut() {
      this.$store.dispatch('app/loginOutWeb3')
    },
    async polkaConnect(address) {

      let account = sessionStorage.getItem('currentAccount')
      if(account){
        this.account = account
      }
      sessionStorage.setItem('account', JSON.stringify(this.accountList));
      if(address){
        this.account = address
        sessionStorage.setItem('currentAccount', address);
        this.$store.commit("app/SET_ACCOUNT", address)
         this.$store.dispatch("app/getBalance", address).then(res=>{
           console.log(res)
         })
        this.isShowConnect = false
      }
    },
    async showWallet() {
      let accountList = await Accounts.accountList();
      this.accountList = accountList.allAccounts
      this.$emit('changeState',true)
      if (this.isConnected) {
        this.isShowConnectStatus = true
      } else {
        this.isShowConnect = true
      }
    },
    disConnect() {
      if (this.connectIdx != 1) {
        if (this.provider) this.provider.disconnect()
        this.isShowConnectStatus = false
        this.connectIdx = 0
      }
    }
  },
}
</script>

<style lang="scss" scoped>
.polkaConnect {
  color: #2c3e50;
  display: flex;

  .button-connect {
    padding: 0 10px;
    width: 130px;
    cursor: pointer;
    line-height: 0;
    height: 30px;
    background: linear-gradient(90deg,#12c2e9, #c471ed 53%, #f64f59);
    border-radius: 10px;
    color: white;
    border: none;
    box-shadow: 0px 3px 6px 0px rgba(128, 4, 149, 0.30);
  }
  .button-connect:active{
    border: none;
  }
  .connect {
    height: 200px;
    margin-top: 25%;
  }

  .connect-panel {
    z-index: 1000;
    text-align: center;
    position: fixed;
    width: 100vw;
    height: 100vh;
    margin-left: -50vw;
    top: 0px;
    left: 50%;
    will-change: opacity;

    opacity: 1;
    visibility: visible;
    pointer-events: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: opacity 0.1s ease-in-out 0s;
    .title{
      font-size: 22px;
    }
    .mask {
      width: 100%;
      height: 100%;
      position: fixed;
      z-index: 1000;
      background-color: rgba(0, 0, 0, 0.4);
    }

    .content {
      z-index: 2000;
      position: relative;
      background-color: rgb(255, 255, 255);
      width: 520px;
      max-height: 600px;
      border-radius: 12px;
      margin: 10px;
      overflow: auto;

      .item {
        width: 400px;
        cursor: pointer;
        border: 1px solid #eee;
        margin: 10px auto;
        &.active{
          border: 1px solid;
          border-image: linear-gradient(90deg, #12c2e9, #c471ed 55%, #f64f59) 1 1;
          border-radius: 0px;
          box-shadow: 0px 0px 15px 3px rgba(218,0,127,0.25);
        }
        .name{
          font-size: 16px;
          line-height: 30px;
        }
        .address{
          font-size: 12px;
          color: #999;
        }
      }
    }

    .connect-status-box {
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      z-index: 2000;
      width: 460px;
      border-radius: 10px;
      min-height: 200px;
      background: white;
    }
  }

  .myButton {
    box-shadow: 0px 1px 0px 0px #f0f7fa;
    background: linear-gradient(to bottom, #33bdef 5%, #019ad2 100%);
    background-color: #33bdef;
    border-radius: 6px;
    border: 1px solid #057fd0;
    display: inline-block;
    cursor: pointer;
    color: #ffffff;
    font-family: Arial;
    font-size: 15px;
    font-weight: bold;
    padding: 6px 24px;
    text-decoration: none;
    text-shadow: 0px -1px 0px #5b6178;
  }

  .myButton:hover {
    background: linear-gradient(to bottom, #019ad2 5%, #33bdef 100%);
    background-color: #019ad2;
  }

  .myButton:active {
    position: relative;
    top: 1px;
  }

  .connect-status {
    box-shadow: inset 0px 1px 0px 0px #ffffff;
    background: linear-gradient(to bottom, #ffffff 5%, #f6f6f6 100%);
    background-color: #ffffff;
    border-radius: 6px;
    border: 1px solid #dcdcdc;
    display: inline-block;
    cursor: pointer;
    color: #666666;
    font-family: Arial;
    font-size: 15px;
    font-weight: bold;
    padding: 6px 24px;
    text-decoration: none;
    text-shadow: 0px 1px 0px #ffffff;

    &:hover {
      background: linear-gradient(to bottom, #f6f6f6 5%, #ffffff 100%);
      background-color: #f6f6f6;
    }

    &:active {
      position: relative;
      top: 1px;
    }

  }
}
</style>
