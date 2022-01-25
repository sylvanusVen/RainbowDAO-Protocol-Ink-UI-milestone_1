<template>
<div class="dao-home">
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
  <div class="nodata" v-show="daoList.length==0">
    No Data
  </div>
</div>
</template>

<script>
export default {
  name: "daoHome",
  props:["daoList"],
  methods:{
    chooseDao(item){
      this.$emit("chooseDao",item)
    }
  }
}
</script>

<style lang="scss" scoped>
.dao-home{
  padding: 30px;
  .dao-list{
    display: flex;
    flex-wrap: wrap;
    .item{
      margin: 20px ;
      display: flex;
      width: 252px;
      height: 80px;
      background: #f5f5f5;
      border-radius: 10px;
      padding: 10px;
      align-items: center;
      cursor: pointer;
      .dao-info{
        padding-left: 10px;
        .name{
          word-break: break-all;
          font-weight: bold;
        }
        .address{
          word-break: break-all;

        }
        .members{
          color: #666;
        }
      }
      .logo{
        width: 50px;
        height: 50px;
        img{
          width: 100%;
        }
      }
    }
  }
}

</style>
