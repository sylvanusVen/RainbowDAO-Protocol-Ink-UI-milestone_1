<template>
  <div class="nultisignpanel-box">
    <multi-sign-nav></multi-sign-nav>
    <div class="multiSignPanel">
      <div class="nav-panel">
        <div class="title">
          multiSign Info
        </div>
        <div class="address">
          {{ mulAddress }}
          <div  class="create-multiSign" @click="$router.push({name:'createMultiSign'})">
            Create
          </div>
          <div  class="create-multiSign" @click="$router.push({name:'myMultiSign'})">
            My MultiSign
          </div>
        </div>
        <div class="nav-list">
          <div class="item" :class="{'active':index==0}" @click="index=0">
            <div class="icon">
              <svg t="1639721351848" class="icon" viewBox="0 0 1024 1024" version="1.1"
                   xmlns="http://www.w3.org/2000/svg" p-id="2685" width="32" height="32">
                <path
                    d="M917.6 585s-54.9 53.6-60.5 59.1c-5.7 5.5-24.5 4.8-24.5 4.8s-50-5.5-57.3-12.4c-7.2-7-12.1-57.8-12.1-57.8s-1.4-14.2 5.8-21.2c7.2-6.9 60.7-58.9 60.7-58.9s6.9-7.5-3.1-7.5c-32.2-0.1-97.4 0.6-129 31.3l-6.5 6.3c-37.3 36.5-39.6 91.4-9.6 130.7l-185 162.4c-14.7 14.3-34 53.2 0 86.3 34 33.1 74 14.3 88.7 0 0 0 121-128.6 131.3-139.8 10.4-11.2 4.9-23.1 4.9-23.1s-21.3-28.9-32.8-46.1c-6.2-9.5-3.2-10.7 5.6-5.1 24.5 15.2 53 32.6 57.9 34.9l0.3-0.3c40.4 29.5 96.8 27.3 134.4-9.2l6.5-6.3c30.7-29.7 31.6-92.7 31.7-124.3 0.2-10.3-7.4-3.8-7.4-3.8zM545.8 889.6c-17.1 0-31.1-13.5-31.1-30.2s13.9-30.2 31.1-30.2c17.1 0 31.1 13.5 31.1 30.2s-13.9 30.2-31.1 30.2zM444.4 553.8c52.4 0 101.9-5.2 146.4-14.2 28.3-75.6 102.7-129.8 190.1-129.8 3.1 0 6.2 0.3 9.3 0.5 0.2-2.1 0.7-4.2 0.7-6.3V289.4c0 82.7-155.1 149.8-346.5 149.8s-346.5-67-346.5-149.8V404c0.1 82.7 155.2 149.8 346.5 149.8z m0-155.7c191.4 0 346.5-67 346.5-149.8 0-82.8-155.1-149.8-346.5-149.8s-346.5 67-346.5 149.8c0.1 82.8 155.2 149.8 346.5 149.8z m0 311.3c19.3 0 38-0.8 56.3-2.1l78.8-76.5c0.2-0.2 0.4-0.4 0.6-0.5-1-8-1.5-15.9-1.5-23.9 0-7.9 0.7-15.7 1.6-23.4-41.7 7.7-87.6 12-135.7 12C253 595 97.9 527.9 97.9 445.2v114.6c0.1 82.5 155.2 149.6 346.5 149.6zM98 600.7v114.5c0 78.8 140.5 143.2 318.9 149.2-4.4-37.5 2.3-77.9 21.8-96.9l17.8-17.3c-4.1 0.1-8 0.3-12.1 0.3-191.3 0-346.4-67-346.4-149.8z m0 0"
                    p-id="2686" fill="#FF1F84"></path>
              </svg>
            </div>
            <div class="name">
              ASSETS
            </div>
          </div>
          <div class="item" :class="{'active':index==1}" @click="index=1">
            <div class="icon">
              <svg t="1639033950888" class="icon" viewBox="0 0 1024 1024" version="1.1"
                   xmlns="http://www.w3.org/2000/svg"
                   p-id="2308" width="64" height="64">
                <path
                    d="M0 0h1024v1024H0V0z m438.857143 292.571429v146.285714h438.857143V292.571429H438.857143zM146.285714 585.142857v146.285714h438.857143V585.142857H146.285714z m292.571429-438.857143L146.285714 438.857143h292.571429V146.285714z m146.285714 731.428572l292.571429-292.571429H585.142857v292.571429z"
                    fill="#FF1F84" p-id="2309"></path>
              </svg>
            </div>
            <div class="name">
              TRANSACTIONS
            </div>
          </div>
          <div class="item" :class="{'active':index==2}" @click="index=2">
            <div class="icon">
              <svg t="1639721265256" class="icon" viewBox="0 0 1024 1024" version="1.1"
                   xmlns="http://www.w3.org/2000/svg" p-id="2261" width="48" height="48">
                <path
                    d="M137.3 273.8h63.8c31.9 0 47.8 15.9 47.8 47.8s-15.9 47.8-47.8 47.8h-63.8c-31.9 0-47.8-15.9-47.8-47.8 0-31.8 15.9-47.8 47.8-47.8z m0 191.4h63.8c31.9 0 47.8 15.9 47.8 47.8s-15.9 47.8-47.8 47.8h-63.8c-31.9 0-47.8-15.9-47.8-47.8s15.9-47.8 47.8-47.8z m0 191.3h63.8c31.9 0 47.8 15.9 47.8 47.8s-15.9 47.8-47.8 47.8h-63.8c-31.9 0-47.8-15.9-47.8-47.8s15.9-47.8 47.8-47.8z m0 0"
                    p-id="2262" fill="#FF1F84"></path>
                <path
                    d="M870.7 98.5H233c-35.2 0-63.8 28.6-63.8 63.8v701.5c0 35.2 28.6 63.8 63.8 63.8h637.7c35.2 0 63.8-28.6 63.8-63.8V162.2c0-35.2-28.6-63.7-63.8-63.7zM652.5 615H546.4v65.6c0 13.8-11.7 25-26.1 25-14.4 0-26.1-11.2-26.1-25V615H387.5c-14.4 0-26.2-11.2-26.2-25s11.7-25 26.1-25h106.7v-31.7H387.5c-14.4 0-26.2-11.2-26.2-25s11.7-25 26.1-25h72.2l-73.9-125.5c-0.2-0.4-0.5-0.8-0.7-1.2-6.3-11.9-1.7-26.7 10.2-32.9 12.4-6.9 28.1-2.9 35.7 9.1l89 150.5h4.4l89-150.5c7.6-12 23.2-16 35.7-9.1 0.4 0.2 0.8 0.4 1.2 0.7 11.6 6.9 15.3 21.9 8.4 33.5l-73.9 125.5h67.7c14.4 0 26.2 11.2 26.2 25s-11.7 25-26.1 25h-106v31.7h106.1c14.4 0 26.2 11.2 26.2 25-0.2 13.7-11.9 24.9-26.3 24.9z m218.2 216.9c0 17.6-14.3 31.9-31.9 31.9h-31.9V162.2h31.9c17.6 0 31.9 14.3 31.9 31.9v637.8z m0 0"
                    p-id="2263" fill="#FF1F84"></path>
              </svg>
            </div>
            <div class="name">
              ADDRESS BOOK
            </div>
          </div>
          <div class="item" :class="{'active':index==3}" @click="index=3">
            <div class="icon">
              <svg t="1639034008297" class="icon" viewBox="0 0 1024 1024" version="1.1"
                   xmlns="http://www.w3.org/2000/svg"
                   p-id="3219" width="64" height="64">
                <path
                    d="M1008.352978 414.758078l-99.257796-25.726392c-7.615524-24.702456-17.406912-48.572964-29.310168-71.163552l51.900756-88.250484c4.7997-8.127492 3.455784-18.430848-3.135804-25.086432l-109.177176-109.241172c-6.71958-6.655584-17.022936-7.935504-25.150428-3.1998l-88.31448 51.900756c-22.526592-11.83926-46.333104-21.630648-71.099556-29.310168L609.209924 15.423036C606.842072 6.335604 598.586588 0 589.179176 0L434.756828 0C425.413412 0 417.157928 6.335604 414.790076 15.423036L388.999688 114.744828C364.297231 122.424348 340.554715 132.215737 318.092119 144.118993L229.777639 92.090244C221.586151 87.35454 211.218799 88.570464 204.691207 95.290044L95.386038 204.531217C88.730454 211.186801 87.386538 221.554153 92.250234 229.553653l51.964752 88.378476C132.311731 340.394725 122.584338 364.201237 114.840822 388.903694L15.51903 414.694082C6.367602 416.997938 0.031998 425.253422 0.031998 434.660834l0 154.422349c0 9.407412 6.335604 17.662896 15.487032 19.966752l99.257796 25.726392c7.67952 24.830448 17.534904 48.63696 29.310168 71.03556l-52.028748 88.31448c-4.735704 8.127492-3.455784 18.430848 3.1998 25.086432l109.177176 109.241172c6.71958 6.655584 17.022936 7.935504 25.150428 3.135804l88.31448-51.964752c22.526592 11.83926 46.333104 21.75864 71.03556 29.310168l25.662396 99.321792c2.495844 9.215424 10.751328 15.615024 20.15874 15.615024l154.422349 0c9.407412 0 17.5989-6.335604 19.966752-15.487032l25.790388-99.321792c24.766452-7.67952 48.572964-17.470908 71.099556-29.310168l88.186488 51.964752c8.191488 4.671708 18.430848 3.455784 25.086432-3.1998l109.241172-109.11318c6.71958-6.655584 7.9995-16.95894 3.1998-25.086432l-51.964752-88.31448c11.967252-22.526592 21.75864-46.333104 29.374164-71.03556l99.257796-25.726392C1017.632398 606.746078 1023.968002 598.490594 1023.968002 589.083182L1023.968002 434.660834C1023.84001 425.381414 1017.504406 417.061934 1008.352978 414.758078L1008.352978 414.758078 1008.352978 414.758078 1008.352978 414.758078zM512 738.513843c-124.984188 0-226.545841-101.625648-226.545841-226.545841S387.079808 285.358165 512 285.358165c124.920192 0 226.481845 101.625648 226.481845 226.545841S636.856196 738.513843 512 738.513843L512 738.513843 512 738.513843z"
                    p-id="3220" fill="#FF1F84"></path>
              </svg>
            </div>
            <div class="name">
              SETTINGS
            </div>
          </div>
        </div>
      </div>
      <div class="content">
        <assets v-show="index==0"  @sendTo="sendTo" :assetsArr="assetsArr"></assets>
        <div class="transition" v-show="index==1">
          <div class="title">
            TRANSACTIONS
          </div>
          <div class="nav-list">

            <div class="item" :class="{'active':transitionIndex==0}" @click="transitionIndex=0">
              Transition List
            </div>
            <div class="item" :class="{'active':transitionIndex==1}" @click="transitionIndex=1">
              Create
            </div>
          </div>
          <div class="transition-panel">
            <div class="transition" v-show="transitionIndex==0">
              <div class="transition-list">
                <div class="no-data" v-show="transitionList.length==0">
                  <img src="../../assets/imgs/no-data.png" alt="">
                </div>
                <div class="item" v-for="(item, index) in transitionList" :key="index">
                  <div class="status">
                    id:{{ item.id }}
                  </div>
                  <div class="amount">
                    Amount:{{ item.amount }}
                  </div>
                  <div class="number">
                    has Sign Number:{{ item.signatureCount }}
                  </div>
                  <div class="token">
                    to:{{ item.to }}
                  </div>

                  <div class="status-btn">
                    <button @click="signTransaction(item.id)">
                      {{ !item.status ? 'Sign' : 'Is Signed' }}
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div class="create" v-show="transitionIndex==1">
              <div class="input-box">
                balance:{{balance}}
              </div>
              <div class="input-box">
                <div class="name">
                  TO
                </div>
                <input type="text" v-model="form.to">
              </div>
              <div class="input-box">
                <div class="name">
                  AMOUNT
                </div>
                <input type="number" v-model="form.amount">
              </div>
              <button class="transitionCreate-btn" @click="creatTransaction">
                Create
              </button>
            </div>
          </div>
        </div>
        <div class="address-book" v-show="index==2">
          <div class="title">
            ADDRESS BOOK
          </div>
          <div class="manage-list">
            <div class="item" v-for="(item, index) in manageList" :key="index">
              <div class="address">
                {{item}}
              </div>
              <img class="icon" src="../../assets/imgs/copy.png" alt="" @click="copy(item)">
<!--              <div class="btn" @click="removeManage(item)">-->
<!--                Remove-->
<!--              </div>-->
              <div class="btn" @click="sendTo(item)">
                Send
              </div>
            </div>
          </div>
        </div>
        <div class="settings" v-show="index==3">
          <div class="title">
            SETTINGS
          </div>
          <div class="nav-list">
            <div class="item" :class="{'active':settingIndex==0}" @click="settingIndex=0">
              changeManage
            </div>
<!--            <div class="item" :class="{'active':settingIndex==1}" @click="settingIndex=1">-->
<!--              changeSignature-->
<!--            </div>-->
          </div>
          <div class="setting-panel">
            <div class="changeManage" v-show="settingIndex==0">
              <div class="input-box">
                <div class="name">
                  ADDRESS
                </div>
                <input type="text" v-model="form2.account">
              </div>

              <button class="transitionCreate-btn" @click="addManage">
                addManage
              </button>

            </div>
            <div class="changeSignature" v-show="settingIndex==1">
              <div class="input-box">
                <div class="name">
                  NUMBER
                </div>
                <input type="text" v-model="mulNumber">
              </div>
              <button class="transitionCreate-btn" @click="changeSignature">
                Change
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <page-footer></page-footer>
  </div>
</template>

<script>
import assets from "./panels/assets";
import {mapGetters} from "vuex";

export default {
  name: "multiSignPanel",
  components: {assets},
  data() {
    return {
      isLoading: false,
      index:0,
      balance:0,
      settingIndex:0,
      mulAddress: "",
      form: {},
      form2: {},
      mulNumber: 0,
      manageList:[],
      assetsArr:[],
      transitionList: [],
      transitionIndex: 0,
      kindMap: {
        4: "addLiquidity", 3: "manage", 2: "signature", 1: "transaction"
      }
    }
  },
  computed: {
    ...mapGetters(['account', 'isConnected'])
  },
  watch: {
    isConnected() {
      this.getData()
    }
  },
  created() {
    // if(!this.$route.params.address){
    //   this.$router.push({name:"mymultiSign"})
    // }

    if(this.$route.params.address){
      this.mulAddress = this.$route.params.address
    }

    this.getData()
    this.$eventBus.$on('message', () => {
      this.getData()
    })
  },
  methods: {
    copy(){

    },
    getData() {
      if(this.isConnected){
        this.$store.dispatch("app/getBalance",this.mulAddress).then(res => {
          console.log(res)
          if(res&&res.length>0){
            this.balance = res
          }
        })
        this.$store.dispatch("multiSign/getManageList",this.mulAddress).then(res => {
          console.log(res)
          if(res&&res.length>0){
            this.manageList = res
            this.assetsArr = res
          }
        })
        this.$store.dispatch("multiSign/getSignList",this.mulAddress).then(res => {
          console.log(res)
          if(res&&res.length>0){
            this.transitionList = res
          }
        })
      }

    },
    changeManage(){},
    managers() {
    },
    signTransaction(id) {
      this.$store.dispatch("multiSign/signTransaction", {
        transactionId: id,
        address:this.mulAddress
      }).then(() => {
        this.$eventBus.$emit('message', {
          message: "signTransaction success",
          type: "success"
        })
        this.getData()
      }).catch(err => {
        this.$eventBus.$emit('message', {
          message: "signTransaction error",
          type: "error"
        })
      })
    },
    creatTransaction() {
      this.$store.dispatch("multiSign/creatTransfer", {
        address:this.mulAddress,
        to: this.form.to,
        amount: this.form.amount*10**12
      }).then(() => {
        this.$eventBus.$emit('message', {
          message: "creatTransaction success",
          type: "success"
        })
        this.getData()
      }).catch(err => {
        alert(err)
      })
    },
    addManage() {
      this.$store.dispatch("multiSign/addManage", {
        addr: this.form2.account,
        address:this.mulAddress
      }).then(() => {
        this.$eventBus.$emit('message', {
          message: "addManage success",
          type: "success"
        })
      }).catch(err => {
        alert(err)
      })
    },
    sendTo(item){
      this.index=1
      this.transitionIndex=1
      this.form.to=item
    },
    removeManage(addr) {
      this.$store.dispatch("multiSign/removeManage", {
        addr: addr,
        address:this.mulAddress
      }).then(() => {
      }).catch(err => {
        alert(err)
      })
    },
    changeSignature() {

      this.$store.dispatch("multiSign/changeSignature", {
        address: this.mulAddress,
        num: this.mulNumber
      }).then(() => {
        alert("changeSignature success")
      }).catch(err => {
        alert(err)

      })
    }
  }
}
</script>

<style lang="scss" scoped>
.multiSignPanel {
  display: flex;
  height: 100vh;
  overflow: auto;

  .setting-dialog {
    position: fixed;
    top: calc(20% + 100px);
    left: calc(50% - 200px);
    background: white;
    border-radius: 10px;
    width: 400px;

    .setting-header {
      color: white;
      padding: 0 30px;
      font-size: 20px;
      line-height: 60px;
      width: 100%;
      height: 60px;
      opacity: 1;
      background: linear-gradient(90deg, #12c2e9 0%, #c471ed 64%, #f64f59 100%);
      border-radius: 10px 10px 0px 0px;
      display: flex;
      justify-content: space-between;

      .close {
        cursor: pointer;
        font-size: 40px;
      }
    }

    .setting-content {
      color: #333333;
      padding: 30px;

      .setting-title {
        font-size: 16px;
        font-weight: 700;
        text-align: left;

      }

      .slippage {
        .floor1 {
          line-height: 39px;
        }

        .floor2 {
          display: flex;

          .rate-item {
            cursor: pointer;
            margin-left: 10px;
            width: 80px;
            height: 40px;
            line-height: 40px;
            text-align: center;
            background: #f8f8f8;
            border: 1px solid rgba(115, 109, 255, 0.20);
            border-radius: 10px;

            &.active {
              border: 2px solid rgba(115, 109, 255, 1);
              background: #fff;
              font-weight: bold;
            }
          }

          .rate-item:last-child {
            width: 100px;
            padding: 0 2px 2px 2px;
          }

          .customize-input {
            width: calc(100% - 4px);
            height: calc(100% - 4px);
            margin-top: -2px;
            border: none;
            background: #f8f8f8;

            &:focus-visible {
              border: none;
              outline: none;
            }
          }
        }
      }
    }
  }

  .nav-panel {
    height: 100vh;
    width: 260px;
    background: url("../../static/imgs/nav_bg.png") no-repeat;
    overflow: hidden;
    background-size: 100% 100%;
    .create-multiSign{
      width: 120px;
      color: #fff;
      line-height: 30px;
      cursor: pointer;
      text-align: center;
      height: 30px;
      background: linear-gradient(90deg,#12c2e9 0%, #c471ed 64%, #f64f59 100%);
      border: 1px solid #eaeaea;
      border-radius: 10px;
    }
    .title {
      padding: 20px 30px 0;
      color: #2c32e2;
      font-size: 26px;
      font-weight: bold;
    }

    .address {
      padding: 30px;
      width: 260px;
      word-break: break-all;
      color: #7073C8;
      font-weight: bold;
    }

    .nav-list {
      padding: 20px 30px;
      border-top: 1px solid rgba(253, 109, 174, 0.6);

      .item {
        cursor: pointer;
        padding: 16px 0;
        font-size: 16px;
        color: #FF1F84;
        display: flex;
        align-items: center;

        .icon {
          font-size: 16px;
          width: 22px;
          height: 22px;
          opacity: 0.7;
        }

        .name {
          margin-left: 10px;
          opacity: 0.7;
        }

        &.active {
          font-weight: bold;

          .icon {
            opacity: 1;
          }

          .name {
            opacity: 1;
          }
        }
      }
    }
  }

  .content {
    padding: 20px 100px;

    .title {
      font-size: 16px;
      font-weight: 700;
      text-align: left;
      color: #ff1f84;
    }

    .nav-list {
      display: flex;
      margin: 10px 0;
      width: 1000px;
      border-bottom: 1px solid rgba(253, 109, 174, 0.6);

      .item {
        cursor: pointer;
        padding: 0 16px;
        line-height: 50px;
        font-size: 14px;
        font-weight: bold;
        margin-left: 10px;
        border-bottom: 1px solid #eee;
        color: #FF1F84;
        opacity: 0.7;

        &.active {
          opacity: 1;
          border-bottom: 2px solid #FF1F84;
        }
      }
    }

    .transition {

      .transition-panel {
        width: 1000px;
        margin-top: 30px;
        padding: 30px 20px;
        background: #fff;
        border-radius: 30px;
        .status-btn{
          button{
            background: linear-gradient(90deg,#12c2e9 0%, #c471ed 64%, #f64f59 100%);
            height: 38px;
            border: 1px solid #ffffff;
            width: 90px;
            cursor: pointer;
            color: #fff;
            line-height: 38px;
            text-align: center;
            border-radius: 31px;
          }
        }
        .transition-list {
          .no-data {
            width: 100%;
            display: flex;
            justify-content: center;
            font-size: 30px;
            color: #999;
          }

          .item {
            margin: 10px 0;
            padding: 0 10px;
            display: flex;
            align-items: center;
            justify-content: space-between;

            .status {
              font-weight: bold;
              font-size: 16px;
              text-transform: uppercase;
            }

            .amount {
              color: #8f92fc;
              font-size: 16px;
              font-weight: bold;
            }
          }
        }

        .input-box {
          display: flex;
          padding: 10px 0;
          align-items: center;

          .name {
            width: 100px;
            color: #999999;
            font-weight: bold;
          }

          input {
            width: 480px;
            height: 40px;
            background: #fafafa;
            border: 1px solid #eaeaea;
            padding: 0 30px;
            font-size: 18px;
            color: #999;
            border-radius: 10px;
          }
        }

        .transitionCreate-btn {
          cursor: pointer;
          margin-top: 20px;
          margin-left: 260px;
          color: #fff;
          margin-top: 20px;
          margin-left: 260px;
          width: 160px;
          height: 40px;
          background: linear-gradient(90deg, #12c2e9 0%, #c471ed 64%, #f64f59 100%);
          border: 1px solid #eaeaea;
          border-radius: 10px;
        }
      }
    }
    .address-book{
      .manage-list{
        width: 900px;
        margin-top: 30px;
        border-radius: 10px;
        padding: 30px;
        background: #fff;
        .item{
          margin-top: 20px;
          display: flex;
          width: 600px;
          justify-content: space-between;
          .address{

          }
          .icon{
            cursor: pointer;
            width: 20px;
            height: 20px;
          }
          .btn{
            color: #fff;
            cursor: pointer;
            text-align: center;
            line-height: 30px;
            padding: 0 10px;
            height: 30px;
            background: linear-gradient(90deg,#12c2e9 0%, #c471ed 64%, #f64f59 100%);
            border-radius: 5px;
            box-shadow: 0px 3px 6px 0px rgba(162,104,209,0.50);
          }
        }
      }
    }
    .settings {
      .setting-panel {
        width: 1000px;
        margin-top: 30px;
        padding: 30px 20px;
        background: #fff;
        border-radius: 30px;

        .input-box {
          display: flex;
          padding: 10px 0;
          align-items: center;

          .name {
            width: 100px;
            color: #999999;
            font-weight: bold;
          }

          input {
            width: 480px;
            height: 40px;
            background: #fafafa;
            border: 1px solid #eaeaea;
            padding: 0 30px;
            font-size: 18px;
            color: #999;
            border-radius: 10px;
          }
        }

        .transitionCreate-btn {
          cursor: pointer;
          margin-top: 20px;
          margin-left: 260px;
          color: #fff;
          width: 160px;
          height: 40px;
          background: linear-gradient(90deg, #12c2e9 0%, #c471ed 64%, #f64f59 100%);
          border: 1px solid #eaeaea;
          border-radius: 10px;
        }
      }
    }
  }
}
</style>
