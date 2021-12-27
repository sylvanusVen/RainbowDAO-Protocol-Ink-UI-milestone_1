<template>
  <div class="token-panel">
    <multi-sign-nav></multi-sign-nav>
    <div class="token-panel-content">
      <div class="title">
        Token Panel
      </div>
      <div class="search-box">
        <div class="sub-title">
          router check
        </div>
        <div class="input-box">
          <input type="text" v-model="routerName">
          <div class="result">
            result: {{result}}
          </div>
        </div>
        <div class="search-btn" @click="searchRouter">
          Search
        </div>
      </div>
    </div>
    <page-footer></page-footer>
  </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "tokenPanel",
  data(){
    return{
      routerName: undefined,
      result:""
    }
  },
  computed: {
    ...mapGetters(['account', 'isConnected'])
  },

  watch:{
    isConnected(){
      this.getData()
    }
  },
  methods:{
    searchRouter(){
      if(this.isConnected){
        this.$store.dispatch("tokenFactory/getContractAddr",this.routerName).then(res=>{
          console.log(res)
          if(res){
            this.result = res
          }else{
            this.result= "no search"
          }
        })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.token-panel-content {
  min-height: calc(100vh - 400px);
  width: 1100px;
  margin: 20px auto;
  background: #fff;
  padding: 20px;
  border-radius: 20px;
  .title{
    font-size: 28px;
    font-weight: bold;
    line-height: 50px;
  }
  .search-box{
    .sub-title{
      font-size: 18px;
      color: #999;
      margin: 20px 0 6px;
    }
    .input-box{
      input{
        padding: 0 10px;
        width: 400px;
        height: 36px;
        background: #ffffff;
        border: 1px solid #eaeaea;
        border-radius: 10px;
      }
      .result{
        padding: 10px 0;
      }
    }
    .search-btn{
      width: 180px;
      color: #fff;
      line-height: 36px;
      height: 36px;
      font-size: 18px;
      cursor: pointer;
      margin-top: 20px;
      text-align: center;
      background: linear-gradient(90deg,#12c2e9 0%, #c471ed 64%, #f64f59 100%);
      border: 1px solid #eaeaea;
      border-radius: 10px;
    }

  }
}
</style>
