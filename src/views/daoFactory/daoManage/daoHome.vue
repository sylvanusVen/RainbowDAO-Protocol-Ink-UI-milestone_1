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

}

</style>
