<template>
  <div class="daoFinance">
    <div class="finance-box">
      <div class="left">
        <div class="coin-list">
          <div class="item">
            <img src="../../../assets/daoImgs/title_icon1.png" alt="">
            <div class="coin-data">
              <div class="name">
                Total income
              </div>
              <div class="number">
                120,000,000 RBD
              </div>
            </div>
          </div>
          <div class="item">
            <img src="../../../assets/daoImgs/title_icon2.png" alt="">
            <div class="coin-data">
              <div class="name">
                Used
              </div>
              <div class="number">
                120,000,000 RBD
              </div>
            </div>
          </div>
          <div class="item">
            <img src="../../../assets/daoImgs/title_icon3.png" alt="">
            <div class="coin-data">
              <div class="name">
                Remaining
              </div>
              <div class="number">
                120,000,000 RBD
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="right">
        <line-chart :chart-data="datacollection" :options="datacollection" id="myChart" class="chart"></line-chart>
      </div>
    </div>
    <div class="finance-detail">
      <div class="title">
        Financial details
      </div>
      <div class="financial-detail-list">
        <div class="item" v-for="(item,index) in transactionList">
          <div class="index">
            {{index+1}}
          </div>
          <div class="name">
            {{item.address}}
          </div>
          <div class="line"></div>
          <div class="value">
            {{item.value}}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LineChart from "../../../components/LineChart";

export default {
  name: "daoFinance",
  components: {
    LineChart
  },
  props: ["tokenList","curDaoControlAddress"],
  data () {
    return {
      transactionList:[{
        address:"asdas",
        value:10
      }],
      myStyles:{
        height:320,
      },
      datacollection: null
    }
  },
  mounted () {
    this.fillData()

  },
  methods: {
    fillData () {
      this.datacollection = {
        labels: [1,2],
        datasets: [
          {
            label: 'Data One',
            backgroundColor: '#fff',
            data: [1,2]
          }, {
            label: 'Data One',
            backgroundColor: '#fff',
            data: []
          }
        ]
      }
    },

  }

}
</script>

<style lang="scss" scoped>
.daoFinance {

  .finance-box {
    justify-content: space-between;
    display: flex;
    .left{
      .coin-list {
        .item {
          display: flex;
          padding: 30px 20px;
          align-items: center;

          img {
            width: 30px;
            height: 30px;
          }

          .coin-data {
            margin-left: 10px;

            .name {
              color: #a98ebd;
              font-size: 14px;
            }

            .number {
              font-weight: bold;
              text-align: left;
              color: #333333;
              font-size: 16px;
              line-height: 16px;
              padding: 6px 0 0;
            }
          }
        }
      }
    }
    .right{
      flex: 1;
      ::v-deep canvas{
        height: 400px!important;
      }

    }
  }
  .finance-detail{
    padding: 30px;
    .title{
      width: 192px;
      font-size: 26px;
      font-weight: 700;
      text-align: left;
      color: #333333;
      line-height: 60px;
    }
    .financial-detail-list{
      .item{
        display: flex;
        align-items: center;
        height: 90px;
        padding: 0 20px;
        background: #fbfcfe;
        border: 1px solid #f0f0f0;
        margin-top: 20px;
        border-radius: 10px;
        &:active{
          border: 1px solid;
          border-image: linear-gradient(90deg, #12c2e9, #c471ed 55%, #f64f59) 1 1;
          box-shadow: 0px 0px 15px 3px rgba(218,0,127,0.25);
        }
        .index{
          width: 20px;
          height: 20px;
          border-radius: 3px;
          text-align: center;
          color: #6919bb;
          line-height: 20px;
          font-weight: bold;
          background: #f0effe;
        }
        .name{
          padding: 0 30px;
          font-weight: bold;
          color: #6919bb;
          font-size: 18px;
        }
        .line{
          width: 1px;
          height: 40px;
          background: #eaeaea;
          margin: 0 10px;
        }
      }
    }
  }

}
</style>
