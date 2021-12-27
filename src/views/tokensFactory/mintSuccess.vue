<template>
<div class="mint-success">
  <multi-sign-nav></multi-sign-nav>
  <div class="mint-content">
    <img class="success-icon" src="../../assets/imgs/mint_success.png" alt="">
    <strong>Token Created Successfully</strong>
    <div class="next-btn" @click="$router.push({name:'tokenPanel'})">
      Check
    </div>
  </div>
  <page-footer></page-footer>
</div>
</template>

<script>
export default {
  name: "mintSuccess"
}
</script>

<style lang="scss" scoped>
.mint-success{
  width: 100%;
  min-height: calc(100vh - 400px);

  .mint-content{
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .success-icon{

    width: 200px;
    margin: 100px auto 20px;
  }
  strong{
    font-size: 30px;
  }
  .next-btn{
    margin: 60px 0;
    width: 180px;
    color: #fff;
    line-height: 50px;
    cursor: pointer;
    text-align: center;
    height: 50px;
    background: linear-gradient(90deg,#12c2e9 0%, #c471ed 64%, #f64f59 100%);
    border: 1px solid #eaeaea;
    border-radius: 10px;
  }
}

</style>
