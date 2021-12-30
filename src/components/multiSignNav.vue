<template>
  <div class="rainbow-nav" @click="isShowMore=false">
    <!-- navbar-nav -->
    <div class="nav-box">
      <img class="logo" src="../assets/imgs/RainbowDAOLogo.png" @click="$router.push('/')"/>
      <div class="tip" style="color: #fa4949">
        Test version
      </div>
      <ul class="navbar-nav">
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
      </ul><!-- /.navbar-nav -->
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
import ConnectWallet from "./ConnectWallet";
import Accounts from "../api/Account";
export default {
  name: "rainbowNav",
  props: ['isShowMore'],
  components:{
    ConnectWallet
  },
  data() {
    return {
      isShowConnect:false,
      account:""
    }
  },
  async created(){
    let accountList = await Accounts.accountList();
    this.accountList = accountList.allAccounts
    let account = sessionStorage.getItem('currentAccount')
    if(account){
      this.account = account
    }
    console.log(this.accountList)
    sessionStorage.setItem('account', JSON.stringify(this.accountList));
  },
  methods: {
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
    async polkaConnect(address) {
      if(address){
        this.account = address
        sessionStorage.setItem('currentAccount', address);
        this.isShowConnect = false
      }
    },
    openNew(pathStr) {
      let path = this.$router.resolve({path: pathStr, query: {}})
      window.open(path.href)
    }
  }
}
</script>

<style lang="scss" scoped>

.rainbow-nav {
  background: url("../static/imgs/header_bg.png");
  background-size: 100% 100%;
  box-sizing: content-box;
  color: white;
  position: relative;

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
          color: #333;
          font-size: 18px;
          font-weight: bold;
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

  .nav-box {
    display: flex;
    margin: 0 auto;
    width: 100%;
    min-width: 1180px;

    height: 60px;
    align-items: center;
    justify-content: space-around;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);

    .logo {
      cursor: pointer;
      width: 120px;
      height: 16px;
    }


  }

  .navbar-nav {

  }
}
</style>
