<template>
  <div class="myMultiSign">
    <multi-sign-nav></multi-sign-nav>
    <div class="page-title">
      MY MULTISIGN
    </div>
    <div class="list">
      <div class="item"  v-for="(item,index) in list" :key="index" @click="$router.push({name:'multiSignPanel',params:{address:item}})">
        <div class="title">
          MultiSign  {{index+1}}
        </div>
        <div class="address">
          {{item}}
        </div>
      </div>
      <div class="item add" @click="$router.push({name:'createMultiSign'})">
        ＋
      </div>
    </div>
    <page-footer></page-footer>
  </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "myMultiSign",
  data() {
    return {
      list: []
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
  mounted() {
      this.getData()
    this.$eventBus.$on('message', () => {
      this.getData()
    })
  },
  beforeDestroy() {
    this.$eventBus.$on('message', () => {
    })
  },
  methods: {
    getData(){
      if(this.isConnected) {
        this.list = []
        this.$store.dispatch("multisignFactory/userMultisig").then(res => {
           this.list = res
        })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.myMultiSign{
  background: #fff;
  text-align: center;
  .page-title{
    font-size: 36px;
    font-weight: bold;
    margin: 50px 0 10px;
  }
  .list{
    width: 1100px;
    margin: 60px auto;
    display: flex;
    flex-wrap: wrap;
    .item{
      cursor: pointer;
      text-align: left;
      margin: 30px;
      padding: 10px 20px 30px 20px;
      border-radius: 10px;
      background: #fcf9f9;
      border: 1px solid #eee;
      &.add{
        width: 120px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 50px;
        color: #999;
        height: 120px;
      }
      .title{
        font-weight: bold;
        font-size: 18px;
        line-height: 50px;
      }
      .address{
        width: 240px;
        word-break: break-all;
      }
    }
  }
}
</style>
