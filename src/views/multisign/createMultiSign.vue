<template>
  <div class="create-multisign">
    <multi-sign-nav></multi-sign-nav>
    <div class="create-box">
      <div class="title">
        Create new Safe
      </div>
      <div class="stage-list">
        <div class="list-item">
          <div class="stage-header">
            <div class="index">
              1
            </div>
            <div class="stage-title">
              Connect wallet & select network
            </div>
          </div>
          <div class="stage-content" v-show="stage==0">
            <div class="stage-panel">
              <p>
                Select network on which to create your Safe. You are currently connected to
              </p>
              <div class="btn-box">
                <div class="sub-btn" @click="stage+=1">
                  Continue
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
              Min Count
            </div>
          </div>
          <div class="stage-content animate__animated  animate__fadeIn" v-show="stage==1">
            <div class="stage-panel">
              <p>
                You are about to create a new Gnosis Safe wallet with one or more owners. First, let's give <br/>
                your new wallet a name. This name is only stored locally and will never be shared with <br/>Gnosis or
                any third
                parties. The new Safe will ONLY be available on
              </p>
              <div class="input-title">
                Min Count
              </div>
              <input type="text" v-model="count" placeholder="Enter">
              <div class="btn-box">
                <div class="back-btn" @click="stage>0?stage-=1:''">
                  back
                </div>
                <div class="sub-btn" @click="stage+=1">
                  Continue
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="list-item" >
          <div class="stage-header">
            <div class="index">
              3
            </div>
            <div class="stage-title">
              Owners and Confirmations
            </div>
          </div>
          <div class="stage-content  animate__animated  animate__fadeIn" v-show="stage==2">
            <div class="stage-panel">
              <p>
                Your Safe will have one or more owners. We have prefilled the first owner with your connected wallet
                details, but you are free to change this to a different owner.
              </p>
              <p>
                Add additional owners (e.g. wallets of
                your teammates) and specify how many of them have to confirm a transaction before it gets executed. In
                general, the more confirmations required, the more secure your Safe is.Learn about which Safe setup to
                use. The new Safe will ONLY be available on
              </p>
              <div class="multisign-member">
                <div class="member-header">
                  <div class="name">
                    Owner Name
                  </div>
                  <div class="address">
                    Owner Address
                  </div>
                </div>
                <div class="member-content">
                  <div class="item" v-for="index in memberLength" :key="index">
                    <div class="name">
                      <input type="text" v-model="memberNameArr[index]" placeholder="My Wallet">
                    </div>
                    <div class="address">
                      <input type="text" v-model="memberAddressArr[index-1]" placeholder="address">
                    </div>
                  </div>
                  <div class="item">
                    <div class="add-btn" @click="memberLength++">
                      ADD MORE
                    </div>
                  </div>
                </div>
              </div>
              <div class="btn-box">
                <div class="back-btn" @click="stage>0?stage-=1:''">
                  back
                </div>
                <div class="sub-btn" @click="next(2)">
                  Continue
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="list-item ">
          <div class="stage-header">
            <div class="index">
              4
            </div>
            <div class="stage-title">
              Review
            </div>
          </div>
          <div class="stage-content  animate__animated  animate__fadeIn" v-show="stage==3">
            <div class="stage-panel">
              <p>
                <strong>
                  {{ memberAddressArr.length }} Safe owners
                </strong>
              </p>
              <div class="multisign-member">
                <div class="static-item" v-if="item" v-for="item in memberAddressArr" :key="item">
                  <div class="address">
                    {{ item }}
                  </div>
                  <svg t="1639709928046" class="icon" viewBox="0 0 1024 1024" version="1.1"
                       xmlns="http://www.w3.org/2000/svg" p-id="2013" width="32" height="32">
                    <path
                        d="M377 432h349a8 8 0 0 1 8 8v48a8 8 0 0 1-8 8H377a8 8 0 0 1-8-8v-48a8 8 0 0 1 8-8z m0 160h258a8 8 0 0 1 8 8v48a8 8 0 0 1-8 8H377a8 8 0 0 1-8-8v-48a8 8 0 0 1 8-8z m-65-280v576h480V312H312z m-40-72h560c17.673 0 32 14.327 32 32v656c0 17.673-14.327 32-32 32H272c-17.673 0-32-14.327-32-32V272c0-17.673 14.327-32 32-32z m-88-56v664a8 8 0 0 1-8 8h-56a8 8 0 0 1-8-8V144c0-17.673 14.327-32 32-32h632a8 8 0 0 1 8 8v56a8 8 0 0 1-8 8H184z"
                        p-id="2014" fill="#FF1F84"></path>
                  </svg>
                </div>
              </div>
              <p>
                You're about to create a new Safe on and will have to confirm a transaction with your currently
                connected wallet. The creation will cost approximately < 0.1 Dot. The exact amount will be
                determined by your wallet.
              </p>
              <div class="btn-box">
                <div class="back-btn" @click="stage>0?stage-=1:''">
                  back
                </div>
                <div class="sub-btn" @click="createMul">
                  Create
                </div>
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
  name: "createMultiSign",
  data() {
    return {
      count:1,
      stage: 0,
      memberLength: 1,
      memberAddressArr: [],
      memberNameArr: []
    }
  },
  created() {
    this.$eventBus.$on('message', (message) => {
      if(message.message == "newMultisig success"){
        this.$router.push({name:'myMultiSign'})
      }
    })
  },
  methods: {
    next(index){
      switch (index){
        case 1:

        case 2:
          if(this.memberAddressArr.length<1){
            this.$eventBus.$emit('message', {
              type:"error",
              message:"please input member"
            })
            return
          }
      }
      this.stage+=1
    },
    createMul() {
      this.$store.dispatch("multisignFactory/newMultiSign",{
        owners: this.memberAddressArr,
        min_sign_count:this.count,

      })
      // this.$router.push({
      //   name:"multiSignPanel"
      // })
    }
  }
}
</script>

<style lang="scss" scoped>
.create-multisign {
  .create-box {
    width: 800px;
    margin: 30px auto;
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
            box-shadow: 5px 5px #eee;

            p {
              padding: 10px 0;
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

            .multisign-member {
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
