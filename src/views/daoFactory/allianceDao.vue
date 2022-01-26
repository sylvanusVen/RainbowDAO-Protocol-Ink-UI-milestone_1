<template>
<div class="alliance-dao">
  <dao-nav></dao-nav>
  <div class="alliance-dao-box">
    <alliance-header-info  :curAlliance="curAlliance"></alliance-header-info>
    <div class="alliance-dao-content">
      <div class="dao-list">
        <div class="item" @click="chooseDao(item)" v-for="(item,index) in daoList" :key="index">
          <div class="logo">
            <img :src="item.logo" alt="">
          </div>
          <div class="dao-info">
            <div class="name">
              {{item.name}}
            </div>
            <div class="address">
              {{item.daoManagerAddr}}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <dao-footer></dao-footer>
</div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "allianceDao",
  data(){
    return{
      curAlliance:{},
      daoList:[]
    }
  },
  computed: {
    ...mapGetters([
      'isConnected',
      'account'
    ]),
  },
  methods: {
    chooseDao(){

    }
  }
}
</script>

<style lang="scss" scoped>
.alliance-dao{
  .alliance-dao-box{
    min-height: calc(100vh - 500px);

    width: 100%;
    position: relative;
    margin-top: -100px;
    z-index: 1;
    .alliance-dao-content{
      position: relative;
      z-index: 1;
      border-radius: 20px;
      width: 1200px;
      background: #fff;
      margin: 10px auto;
      padding-bottom: 50px;
      .nav-item{
        padding: 20px 50px;
      }
    }
  }
}
</style>
