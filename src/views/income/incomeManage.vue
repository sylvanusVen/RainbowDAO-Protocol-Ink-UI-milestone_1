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
          <div class="item" v-for="item in listCategory">
            <div class="left">
              <div class="item-title">
                {{ item.token }}

              </div>
              <div class="balance">
                <div class="fee">
                  fee:{{ item.fee }}
                </div>
                <div class="isUsed">
                  isUsed:{{item.isUsed }}
                </div>
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
              <input type="text" v-model="revenue" placeholder="addRevenue">
            </div>
            <div class="right">
              <div class="add-btn"  @click="addRevenue">
                Add Revenue
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
import {mapGetters} from "vuex";

export default {
  name: "incomeManage",
  data(){
    return{
      revenue:"",
      listCategory:[],
      incomeInfo:{
        isUsed:true,
        fee:0,
        account:this.account
      }
    }
  },
  watch: {
    isConnected() {
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
  computed: {
    ...mapGetters(['account', 'isConnected'])
  },
  methods:{
    addRevenue(){
      this.$store.dispatch("incomeManage/saveCategory",{
        name:this.revenue,
        incomeInfo:this.incomeInfo
      }).then(res=>{
        console.log(res)
        this.getData()
      })
    },
    getData() {
      if (this.isConnected) {
        this.$store.dispatch("incomeManage/listCategory").then(res=>{
          console.log(res)
          this.listCategory = res
        })
      }
    }
  }
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
        input {
          width: 280px;
          height: 38px;
          margin-right: 20px;
          padding: 0 20px;
          background: #fbfcfe;
          border: 1px solid #eaeaea;
          border-radius: 10px;
        }
        .add-btn{
          padding: 0 10px;
          height: 32px;
          background: linear-gradient(90deg, #12c2e9 0%, #c471ed 64%, #f64f59 100%);
          border-radius: 10px;
          box-shadow: 0px 3px 6px 0px rgba(128, 4, 149, 0.30);
          color: #fff;
          text-align: center;
          line-height: 32px;
          cursor: pointer;
        }
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
            display: flex;
            justify-content: space-between;
            align-items: center;
            .isUsed{
              font-size: 16px;
            }
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
