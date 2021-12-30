<template>
  <div class="token-mint">
    <multi-sign-nav></multi-sign-nav>
    <div class="token-mint-panel">
      <div class="title">
        Token Mint
      </div>
      <div class="tip">
        Choose your Tokens settings below.
      </div>
      <div class="form">
        <div class="input-box">
          <div class="name">
            TOKEN NAME
          </div>
          <input type="text" v-model="tokenForm.name" placeholder="MY TOKEN">
        </div>
        <div class="input-box">
          <div class="name">
            TOKEN SYMBOL
          </div>
          <input type="text" v-model="tokenForm.symbol" placeholder="MOT">
        </div>
        <div class="input-box">
          <div class="name">
            TOKEN HOLDERS
          </div>
          <input type="text" v-model="tokenForm.address" placeholder="Account address">
        </div>
        <div class="input-box">
          <div class="name">
            DECIMALS
          </div>
          <input type="text" v-model="tokenForm.decimals" placeholder="decimals">
        </div>
        <div class="input-box">
          <div class="name">
            BALANCES
          </div>
          <input type="text" v-model="tokenForm.initial_supply" placeholder="initial_supply">
        </div>
        <div class="input-box">

        </div>
        <div style="width: 100%">
          <div class="next-btn" @click="newErc20">
            NEXT
          </div>
        </div>
      </div>
    </div>
    <page-footer></page-footer>

  </div>
</template>

<script>


import {mapGetters} from "vuex";

export default {
  name: "tokenMint",
  data() {
    return {
      tokenForm: {}
    }
  },
  computed: {
    ...mapGetters(['account', 'isConnected'])
  },
  mounted() {
    this.getData()
  },
  watch:{
    isConnected(){
    }
  },
  methods: {
    getData(){
      if(this.isConnected){

      }

    },
    newErc20() {
      if (!this.tokenForm.name) {
        this.$eventBus.$emit('message', {
          type: "error",
          message: 'input tokenForm info please'
        })
        return
      }
      this.$store.dispatch("tokenFactory/newErc20", this.tokenForm).then((res)=>{
        this.$eventBus.$emit('message', {
          type:"success",
          message:"newToken success"
        })
        console.log(res)
        setTimeout(()=>{
          this.$router.push({name:"mintSuccess"})
        },2000)
      })
    },

  }
}
</script>

<style lang="scss" scoped>
.token-mint {
  min-height: 100vh;

  .token-mint-panel {
    width: 1000px;
    padding: 60px 100px;
    background: #fff;
    border-radius: 30px;

    margin: 20px auto 60px;
    position: relative;
    z-index: 1;

    .title {
      font-size: 30px;
      line-height: 60px;
      font-weight: bold;
      text-align: center;
      color: #333333;
    }

    .tip {
      padding: 10px 0 30px;
      font-size: 20px;
      font-weight: 500;
      text-align: center;
      color: #666666;
    }

    .form {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;

      .input-box {
        &:nth-child(2n) {
          input {
            width: 180px;
          }
        }

        .name {
          line-height: 50px;
          font-weight: bold;
          font-size: 16px;
        }

        input {
          width: 480px;
          height: 50px;
          padding: 0 20px;
          background: #ffffff;
          border: 1px solid #eaeaea;
          border-radius: 10px;
        }

      }

      .next-btn {
        margin: 20px auto;
        width: 180px;
        font-size: 18px;
        cursor: pointer;
        color: #fff;
        line-height: 50px;
        text-align: center;
        height: 50px;
        background: linear-gradient(90deg, #12c2e9 0%, #c471ed 64%, #f64f59 100%);
        border: 1px solid #eaeaea;
        border-radius: 10px;
      }
    }
  }
}
</style>
