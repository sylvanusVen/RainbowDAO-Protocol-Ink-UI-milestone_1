<template>
  <div class="department-home">
    <div class="balance">
      <div class="sub-title">
        <img src="@/assets/daoImgs/title_icon1.png" alt="">
        BALANCE
      </div>
      <div class="number">
        <strong>5,000,000.00</strong>
        RBD
      </div>
    </div>


  </div>
</template>

<script>
export default {
  name: "departmentHome",
  data(){
    return{

    }
  },
  methods:{

  }
}
</script>

<style lang="scss" scoped>
.department-home {
  padding: 30px 50px;
  .sub-title{
    font-size: 16px;
    font-weight: bold;
    text-align: left;
    color: #333333;
    line-height: 50px;
    display: flex;
    align-items: center;
    img{
      width: 20px;
      height: 20px;
      margin-right: 10px;
    }
  }
  .balance{

    .number{
      height: 35px;
      font-size: 26px;
      font-weight: 700;
      text-align: left;
      color: #ec1676;
      line-height: 35px;
      strong{
        font-size: 32px;
      }
    }
  }
  .child-dao{

  }
  .contract-list{

  }
}
</style>
