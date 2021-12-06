<template>
  <div class="income">
    <rainbow-nav-new></rainbow-nav-new>
    <div class="rainbow-panel">
      <div class="title">
        Revenue management
      </div>
      <div class="income-content">
        <div class="in-title">
          income type
        </div>
        <div class="income-list">
          <div class="item">
            <div class="left">
              <div class="item-title">
                Agreement usage fee
              </div>
              <div class="balance">
                $ 10.00
              </div>
            </div>
            <div class="right">
              <div class="icon-box">
                <img class="icon" src="../../assets/imgs/part7_list_1.png" alt="">
              </div>
            </div>
          </div>
          <div class="item">
            <div class="left">
              <div class="item-title">
                Treasury usage fee
              </div>
              <div class="balance">
                $ 10.00
              </div>
            </div>
          </div>
          <div class="item">
            <div class="left">
              <div class="item-title">
                DAO usage fee
              </div>
              <div class="balance">
                $ 10.00
              </div>
            </div>
          </div>
          <div class="item">
            <div class="left">
              <div class="item-title">
                DAO management fee
              </div>
              <div class="balance">
                $ 10.00
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <pageFooter></pageFooter>
  </div>
</template>

<script>
export default {
  name: "incomeManage"
}
</script>

<style lang="scss" scoped>
.income {
  .income-content {
    .income-list {
      margin: 30px 0;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      .item {
        width: 46%;
        margin-top: 20px;
        border-radius: 20px;
        background: #fbfcfe;
        padding: 20px;
        border: 1px solid #eaeaea;
        display: flex;
        justify-content: space-between;
        .left{
          .item-title{
            color: #999999;
            line-height: 20px;
          }
          .balance{
            font-size: 30px;
            font-weight: bold;
            text-align: left;
            color: #db1f7e;
            line-height: 45px;
          }
        }
        .right{
          display: flex;
          height: 100%;
          align-items: center;
          .icon-box {
            width: 30px;
            height: 30px;
            cursor: pointer;
            .icon {
              width: 100%;
              height: 100%;
            }
          }
        }
      }
    }
  }
}
</style>
