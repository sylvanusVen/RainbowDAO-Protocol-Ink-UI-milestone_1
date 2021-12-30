<template>
  <div class="referral">
    <rainbow-nav-new>
    </rainbow-nav-new>
    <div class="refer-content">
      <div class="rainbow-panel">
        <div class="rainbow-nav-box">
          <div class="nav-item " :class="{'active': 0 == activeIndex}" @click="activeIndex=0">
            Referral relationship
          </div>
          <div class="nav-item" :class="{'active': 1 == activeIndex}" @click="activeIndex=1">
            Member information
          </div>
          <div class="nav-item" :class="{'active': 2 == activeIndex}" @click="activeIndex=2">
            Join Rainbow Protocol
          </div>
        </div>
        <div class="join-panel"  v-show="activeIndex==2">
          <div class="title">
            Refer Code
          </div>
          <div class="input-box">
            <input type="text" class="refer-code" v-model="joinForm.name" placeholder="your name">
          </div>
          <div class="input-box">
            <input type="text" class="refer-code" v-model="joinForm.url" placeholder="your header path/url">
          </div>
          <div class="input-box">
            <input type="text" class="refer-code"  v-model="joinForm.code" placeholder="refer code">
          </div>
          <div class="sub-btn" @click="join">
            JOIN
          </div>
        </div>
        <div class="referral-relationship" v-show="activeIndex==0">
          <div class="title">
            Referral relationship
          </div>
          <div class="my-id">
            <span>Invitation code</span>
            <div class="data">
              {{ myInfo.id }}
            </div>
          </div>
          <div class="my-name">
            <span>My Name</span>
            <div class="data">
              {{myInfo.nickname}}
            </div>
          </div>
          <div class="my-code">
            <span>Invitation code</span>
            <div class="data">
              {{ myRefer }}
            </div>
          </div>
          <div class="my-inviter">
            <div class="in-title">
              My inviter
            </div>

          </div>
          <div class="inviters">
            <div class="level">
              <div class="people-info-box">
                <div class="people-info" v-for="(item,index) in myInfo.childs" :key="index">
                  <div class="title-box">
                    <div class="icon">
                      <img :src="myInfo.profile" alt="">
                    </div>
                    <div class="name">
                      {{ item.nickname }}
                    </div>
                  </div>
                  <div class="address">
                    {{ item.address }}
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
        <div class="member-info" v-show="activeIndex==1">
          <div class="title">
            Member information
          </div>
          <div class="people-info-box">
            <div class="people-info" v-for="(item, index) in memberList" :key="index">
              <div class="title-box">
                <div class="icon">
                  <img :src="item.profile" alt="">
                </div>
                <div class="name">
                  {{ item.nickname }}
                </div>
              </div>
              <div class="address">
                {{ item.address }}
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
    <page-footer></page-footer>
  </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "referral",
  data() {
    return {
      myInfo:{},
      myRefer:"",
      activeIndex: 0,
      memberList:[],
      joinForm:{}
    }
  },
  computed: {
    ...mapGetters(['account', 'isConnected'])
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
  watch:{
    isConnected(){
      this.getData()
    },
  },
  methods:{
    join(){
      this.$store.dispatch("userManage/join",{
        invitation_code:this.joinForm.code,
        user_profile:this.joinForm.url,
        name:this.joinForm.name
      }).then(res=>{
        console.log(res)
        this.$store.dispatch("userManage/listUser",this.AccountId).then(res=>{
          console.log(res)
        })
      })
    },
    getData(){
      if(!this.isConnected){
        return
      }
      this.$store.dispatch("userManage/getUserReferer").then(res=>{
        this.myRefer = res
      })
      this.$store.dispatch("userManage/existsUser",this.AccountId).then(res=>{
        console.log(res)
      })
      this.$store.dispatch("userManage/listUser").then(res=>{
        this.memberList = res
        console.log(res)
        if(this.memberList.length>0){
          this.memberList.forEach(user=>{
            console.log(user.address, this.account)
            if(user.address == this.account){
              this.myInfo = user
            }
          })
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.referral {
  .title {
    padding: 20px 0;
  }

  .people-info-box {
    display: flex;
    flex-wrap: wrap;
  }

  .people-info {
    width: 200px;
    padding: 10px;
    border: 1px solid #eee;
    margin: 10px 20px 10px 0px;
    border-radius: 5px;
    .address {
      color: #999;
      word-wrap : break-word ;
    }
    .title-box {
      display: flex;
      padding: 10px 0;
      align-items: center;

      .icon {
        width: 26px;
        height: 26px;
        border-radius: 50%;

        img {
          width: 100%;
          height: 100%;
        }
      }

      .name {
        font-weight: 600;
        text-align: left;
        color: #6919bb;
        line-height: 20px;
        margin-left: 10px;
      }
    }
  }
  .join-panel{
    text-align: center;
    .refer-code{
      margin-top: 20px;
      font-size: 20px;
      padding: 6px 10px;
      border: 1px solid #eee;
    }
    .sub-btn{
      width: 100px;
      margin: 20px auto;
      cursor: pointer;
      padding: 10px 20px;
      color: #fff;
      background: linear-gradient(90deg,#12c2e9 0%, #c471ed 64%, #f64f59 100%);
      border-radius: 10px;
      box-shadow: 0px 3px 6px 0px rgba(128,4,149,0.30);
    }
  }
  .referral-relationship {
    .my-code,.my-name,.my-id {
      display: flex;
      padding: 10px 0;
      align-items: center;

      span {
        font-size: 16px;
      }

      .data {
        border: 1px solid #eaeaea;
        border-radius: 10px;
        padding: 6px 12px;
        margin-left: 20px;
      }

    }

    .my-inviter {
      .in-title {
        font-weight: bold;
        text-align: left;
        color: #333333;
        font-size: 18px;
        line-height: 20px;
      }
    }

    .inviters {
      .level-title {
        color: #666;
      }


    }
  }
}
</style>
