<template>
  <div class="create-dao">
    <dao-nav></dao-nav>

    <div class="create-box">
      <div class="title">
        CREATE DAO
      </div>
      <div class="stage-list">
        <div class="list-item">
          <div class="stage-header">
            <div class="index">
              1
            </div>
            <div class="stage-title">
              Init Dao
            </div>
          </div>
          <div class="stage-content" v-show="stage==0">
            <div class="stage-panel">
              <div class="item">
                <div class="name">
                  DAO Category
                </div>
                <div class="input">
                  {{category}}
                </div>
              </div>
              <div class="btn-box">
                <div class="sub-btn" @click="initDao">
                  Init
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="list-item">
          <div class="stage-header">
            <div class="index">
              2
            </div>
            <div class="stage-title">
              Basic Settings
            </div>
          </div>
          <div class="stage-content" v-show="stage==1">
            <div class="stage-panel">
              <div class="item">
                <div class="name">
                  DAO Name
                </div>
                <div class="input">
                  <input type="text" v-model="daoInfo.name" placeholder="Enter">
                </div>
              </div>
              <!--              <div class="item">-->
              <!--                <div class="name">-->
              <!--                  DAO Symbol-->
              <!--                </div>-->
              <!--                <div class="input">-->
              <!--                  <input type="text" v-model="daoInfo.symbol" placeholder="Enter">-->
              <!--                </div>-->
              <!--              </div>-->
              <div class="item">
                <div class="name">
                  DAO Logo
                </div>
                <div class="input">
                  <input type="text" v-model="daoInfo.logo" placeholder="Enter">
                </div>
              </div>
              <div class="item">
                <div class="name">
                  DAO Introduction
                </div>
                <div class="input">
                  <input type="text" v-model="daoInfo.desc" placeholder="Enter">
                </div>
              </div>
              <div class="btn-box">
                <div class="sub-btn" @click="next">
                  Next
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="list-item">
          <div class="stage-header">
            <div class="index">
              3
            </div>
            <div class="stage-title">
              Token Settings
            </div>
          </div>
          <div class="stage-content animate__animated  animate__fadeIn" v-show="stage==2">
            <div class="stage-panel">

              <div class="item">
                <div class="name">
                  Token Name
                </div>
                <div class="input">
                  <input type="text" v-model="tokenInfo.name" placeholder="Enter">
                </div>
              </div>
              <div class="item">
                <div class="name">
                  Token Symbol
                </div>
                <div class="input">
                  <input type="text" v-model="tokenInfo.symbol" placeholder="Enter">
                </div>
              </div>
              <!--              <div class="item">-->
              <!--                <div class="name">-->
              <!--                  Token Contract Address-->
              <!--                </div>-->
              <!--                <div class="input">-->
              <!--                  <input type="text" v-model="tokenInfo.address" placeholder="Enter">-->
              <!--                </div>-->
              <!--              </div>-->
              <div class="item">
                <div class="name">
                  Token Decimals
                </div>
                <div class="input">
                  <input type="number" v-model="tokenInfo.decimals" placeholder="Enter">
                </div>
              </div>
              <div class="item">
                <div class="name">
                  Token Total Supply
                </div>
                <div class="input">
                  <input type="number" v-model="tokenInfo.totalSupply" placeholder="Enter">
                </div>
              </div>
              <!--              <div class="item">-->
              <!--                <div class="name">-->
              <!--                  Support-->
              <!--                </div>-->
              <!--                <div class="input">-->
              <!--                  <input type="text" v-model="tokenInfo.support" placeholder="Enter">-->
              <!--                </div>-->
              <!--              </div>-->
              <!--              <div class="item">-->
              <!--                <div class="name">-->
              <!--                  Token Manager-->
              <!--                </div>-->
              <!--                <div class="input">-->
              <!--                  <input type="text" v-model="tokenInfo.namager" placeholder="Enter">-->
              <!--                </div>-->
              <!--              </div>-->
              <div class="btn-box">
                <div class="back-btn" @click="stage>0?stage-=1:''">
                  back
                </div>
                <div class="sub-btn" @click="initBase()">
                  Init Dao Info
                </div>
              </div>
            </div>
          </div>
        </div>
        <!--        <div class="list-item" >-->
        <!--          <div class="stage-header">-->
        <!--            <div class="index">-->
        <!--              3-->
        <!--            </div>-->
        <!--            <div class="stage-title">-->
        <!--              Threshold to join DAO-->
        <!--            </div>-->
        <!--          </div>-->
        <!--          <div class="stage-content  animate__animated  animate__fadeIn" v-show="stage==2">-->
        <!--            <div class="stage-panel">-->
        <!--              <p>-->
        <!--                Your Safe will have one or more owners. We have prefilled the first owner with your connected wallet-->
        <!--                details, but you are free to change this to a different owner.-->
        <!--              </p>-->
        <!--              <p>-->
        <!--                Add additional owners (e.g. wallets of-->
        <!--                your teammates) and specify how many of them have to confirm a transaction before it gets executed. In-->
        <!--                general, the more confirmations required, the more secure your Safe is.Learn about which Safe setup to-->
        <!--                use. The new Safe will ONLY be available on-->
        <!--              </p>-->
        <!--              <div class="dao-member">-->
        <!--                <div class="member-header">-->
        <!--                  <div class="name">-->
        <!--                    Owner Name-->
        <!--                  </div>-->
        <!--                  <div class="address">-->
        <!--                    Owner Address-->
        <!--                  </div>-->
        <!--                </div>-->
        <!--                <div class="member-content">-->

        <!--                  <div class="item">-->
        <!--                    <div class="add-btn" @click="memberLength++">-->
        <!--                      ADD MORE-->
        <!--                    </div>-->
        <!--                  </div>-->
        <!--                </div>-->
        <!--              </div>-->
        <!--              <div class="btn-box">-->
        <!--                <div class="back-btn" @click="stage>0?stage-=1:''">-->
        <!--                  back-->
        <!--                </div>-->
        <!--                <div class="sub-btn" @click="next(2)">-->
        <!--                  Continue-->
        <!--                </div>-->
        <!--              </div>-->
        <!--            </div>-->
        <!--          </div>-->
        <!--        </div>-->
        <div class="list-item ">
          <div class="stage-header">
            <div class="index">
              4
            </div>
            <div class="stage-title">
              Termination and liquidation of DAO
            </div>
          </div>
          <div class="stage-content  animate__animated  animate__fadeIn" v-show="stage==3">
            <div class="stage-panel">
              <p>
                You're about to create a new DAO on and will have to confirm a transaction with your currently
                connected wallet. The creation will cost approximately ＜ 0.1 Eth.
              </p>
              <div class="btn-box">
                <div class="back-btn" @click="stage>0?stage-=1:''">
                  back
                </div>
                <div class="sub-btn" @click="createDao">
                  Create
                </div>
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
  name: "createDao",
  data() {
    return {
      daoAddress:"",
      count: 1,
      stage: 0,
      memberLength: 1,
      daoInfo: {
        name: '', logo: '', desc: ''
      },
      category:'',
      tokenInfo: {
        name: "",
        symbol: "",
        decimals: 0,
        totalSupply: 0,
      }
    }
  },
  created() {
      if(this.$route.params.category){
        this.category = this.$route.params.category
      }else{
        this.category = "mother"
      }
  },
  computed: {
    ...mapGetters([
      'isConnected',
      'account'
    ]),
  },
  beforeDestroy() {
    this.$eventBus.$on('message', null)
  },
  methods: {
    initBase(){
      this.daoInfo.owner = this.account
      this.tokenInfo.owner = this.account
      let params = {
        base:this.daoInfo,
        erc20: this.tokenInfo
      }
      let _this = this
      this.$store.dispatch("daoManage/initByParams", {address:this.daoAddress,params}).then(()=>{
        this.$eventBus.$on('message', (message) => {
          if(message.type == "success"&& message.message=="Init DAO Info Success"){
            console.log(message)
            if(_this.stage<3){
              _this.stage=3
            }
            _this.$eventBus.$on('message',null)
          }
        })
      })
    },
    getDaoByIndex(index){
      this.$store.dispatch("daoFactory/getDaoByIndex",index).then(res=>{
        console.log(res.daoManagerAddr)
        this.daoAddress = res.daoManagerAddr
      })
    },
    getDaosByOwner(){
      this.$store.dispatch("daoFactory/getDaosByOwner").then(res=>{
        this.daoIndexList = res
        this.getDaoByIndex(res[res.length-1])
        if(this.stage<1){
          this.stage= 1
        }
      })
    },
    initDao(){
      let _this = this
      this.$store.dispatch("daoFactory/initDaoByTemplate",{category:this.category}).then(()=>{
        this.$eventBus.$on('message', (message) => {
          if(message.type == "success"&& message.message=="Init DAO Success"){
            _this.getDaosByOwner()
            _this.$eventBus.$on('message',null)
          }
        })
      })
    },
    next(index) {
      switch (index) {
        case 1:
          break
        case 2:
          break
      }
      this.stage += 1
    },
    createDao() {
    }
  }
}
</script>

<style lang="scss" scoped>

.create-dao {
  background: #ffffff;
  box-shadow: 0px 6px 20px 0px rgba(0, 0, 0, 0.05);

  .create-box {
    background: url("../../static/imgs/bg.png");
    background-size: 100% 100%;
    position: relative;
    margin: -100px auto 0;
    border-radius: 30px;
    z-index: 1;
    background: #ffffff;
    padding: 30px 60px;
    width: 1000px;
    min-height: 500px;

    .title {
      width: 291px;
      height: 30px;
      font-size: 30px;
      font-weight: bold;
      text-align: center;
      color: #333333;
      line-height: 45px;
    }

    .stage-list {
      .list-item {
        &:last-child {
          .stage-content::after {
            visibility: hidden;
          }
        }

        .stage-header {
          display: flex;
          align-items: center;
          padding: 20px 0;

          .index {
            width: 30px;
            height: 30px;
            background: #ff1f84;
            border-radius: 50%;
            color: #fff;
            line-height: 30px;
            text-align: center;
            font-size: 20px;
          }

          .stage-title {
            margin-left: 20px;
            height: 19px;
            font-size: 16px;
            font-family: Roboto, Roboto-Bold;
            font-weight: 700;
            text-align: left;
            color: #333333;
            line-height: 19px;
          }
        }

        .stage-content {
          position: relative;
          padding: 20px 60px;

          &:nth-child(1) {
            text-align: center;
          }

          &::after {
            content: '';
            position: absolute;
            left: 16px;
            top: -10px;
            height: 100%;
            width: 1px;
            background: #FF1F84;
          }

          .stage-panel {
            padding: 20px;
            background: #fff;
            border-radius: 5px;
            box-shadow: 2px 2px 10px #eee;

            p {
              padding: 10px 0;
            }

            .name {
              font-weight: bold;
              line-height: 32px;
            }

            .input-title {
              height: 16px;
              font-size: 14px;
              font-family: Roboto, Roboto-Medium;
              font-weight: 500;
              text-align: justify;
              color: #999999;
              line-height: 16px;
            }

            input {
              width: 480px;
              height: 38px;
              background: #ffffff;
              border: 1px solid #eaeaea;
              border-radius: 10px;
              padding: 0 20px;
            }

            .btn-box {
              display: flex;
              align-items: center;

              .back-btn {
                margin-right: 30px;
                cursor: pointer;
                width: 160px;
                height: 40px;
                text-align: center;
                line-height: 40px;
                color: #FF1F84;
                background: #f0f0f0;
                border-radius: 10px;
              }

              .sub-btn {
                margin: 20px 0;
                width: 160px;
                height: 40px;
                background: linear-gradient(90deg, #12c2e9 0%, #c471ed 64%, #f64f59 100%);
                border: 1px solid #eaeaea;
                border-radius: 10px;
                line-height: 40px;
                color: #fff;
                text-align: center;
                cursor: pointer;
              }
            }

            .dao-member {
              .member-header {
                font-weight: bold;
              }

              .static-item {
                display: flex;
                justify-content: space-between;

                svg {

                }
              }

              .member-header, .member-content .item {
                padding: 10px 0;
                display: flex;

                .name {
                  width: 150px;
                }

                .address {
                  width: 600px;
                  margin-left: 8px;
                }
              }

              .member-content {
                input {
                  width: 100%;
                }

                .add-btn {
                  cursor: pointer;
                  text-align: center;
                  line-height: 38px;
                  width: 150px;
                  height: 38px;
                  background: #f0f0f0;
                  border-radius: 10px;
                }
              }
            }

          }
        }
      }
    }
  }

}
</style>
