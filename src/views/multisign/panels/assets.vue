<template>
  <div class="assets-page">
    <div class="title">
      ASSETS
    </div>
    <div class="content-box">
      <div class="header">
        <div class="asset">
          ASSET
        </div>
        <div class="balance">
          BALANCE
        </div>
        <div class="address">
          ADDRESS
        </div>
        <div class="btns"></div>
      </div>
      <div class="content">
        <div class="item" v-for="item in balanceArr">
          <div class="asset">
            DOT
          </div>
          <div class="balance">
            {{item.balance}}
          </div>
          <div class="address">
            {{item.address.substr(0,8) + '...' + item.address.substr((item.address.length-8),item.address.length)}}
          </div>
          <div class="btns">
            <div class="send" @click="emitSend(item.address)">
              SEND
            </div>
            <div class="receive">
              Receive
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "assets",
  props:["assetsArr","sendTo"],
  data(){
    return{
      assetsArr:[],
      balanceArr:[]
    }
  },
  methods:{
    emitSend(add){
      this.$emit("sendTo", add)
    }
  },
  watch:{
    assetsArr(){
      console.log(this.assetsArr)
      let arr = []
      this.assetsArr.forEach((address,index)=>{
        this.$store.dispatch("app/getBalance",address).then(balance=>{
          arr.push({
            address:address,
            balance:balance
          })
          if(index==this.assetsArr.length-1){
            this.balanceArr = arr
          }
        })
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.assets-page {

  .title {
    font-size: 20px;
    font-weight: 700;
    text-align: left;
    color: #333;
    padding: 10px 0 30px;
  }
  .content-box{
    background: #fff;
    border-radius: 4px;
    padding: 20px;
    border-radius: 4px;
    .header{
      font-weight: bold;
      font-size: 16px;
      color: #999;
    }

    .header,.content .item{
      border-bottom: 1px solid #eee;
      padding: 10px 0;
      display: flex;
      .asset{
        width: 200px;
      }
      .balance{
        width: 200px;
      }
      .address{
        width: 220px;
        overflow: hidden;
      }
      .btns{
        display: flex;
        width: 300px;
        justify-content: space-around;
        div{
          color: white;
          cursor: pointer;
          width: 90px;
          height: 30px;
          text-align: center;
          line-height: 30px;
          background: linear-gradient(90deg,#12c2e9 0%, #c471ed 64%, #f64f59 100%);
          border-radius: 5px;
          box-shadow: 0px 3px 6px 0px rgba(162,104,209,0.50);
        }
      }
    }
  }
}
</style>
