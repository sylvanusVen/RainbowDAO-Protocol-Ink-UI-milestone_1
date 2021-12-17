<template>
  <div class="rainbow-nav" @click="isShowMore=false">
    <!-- navbar-nav -->
    <div class="nav-box">
      <img class="logo" src="../assets/imgs/RainbowDAOLogo.png" @click="$router.push('/')"/>
      <ul class="navbar-nav">
        <li>
          Connect Wallet
        </li>
      </ul><!-- /.navbar-nav -->
    </div>
  </div>
</template>

<script>
import ConnectWallet from "./ConnectWallet";
export default {
  name: "rainbowNav",
  props: ['isShowMore'],
  components:{
    ConnectWallet
  },
  data() {
    return {

    }
  },
  created(){
  },
  methods: {
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
