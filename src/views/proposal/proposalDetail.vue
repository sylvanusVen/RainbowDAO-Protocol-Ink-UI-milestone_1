<template>
  <div class="proposalDetail">
    <rainbow-nav-new/>
    <div class="detail-content">
      <div class="rainbow-panel part1">
        <div class="left">
          <div class="content">
            {{ proposal.title }}
          </div>
          <div class="status-box">
            <div class="status">
              {{ proposal.state }}
            </div>
            <div class="date">
              active block:{{ proposal.startBlock }} ~{{ proposal.endBlock}}
            </div>
          </div>
        </div>
        <div class="right">
          <div class="title">
            My votes
          </div>
          <div class="number">
            {{ myVotes }}
          </div>
          <div class="btn-box">
            <div class="support" @click="delegate">
              delegate
            </div>
            <div class="support" @click="castVote(true)">
              Support
            </div>
            <div class="Refuse" @click="castVote(false)">
              Refuse
            </div>
          </div>
        </div>
      </div>
      <div class="part2">
        <div class="rainbow-panel left-part">
          <div class="left">
            <div class="title-box">
              <div class="title">
                Support
              </div>
              <div class="address">
                {{ proposal.supportArr.length }} Address
              </div>
            </div>
            <div class="vote-number">
              <div class="number">
                {{proposal.forVotes}}
              </div>
              <div class="number-line">
                <div class="active-number">

                </div>
              </div>
            </div>
            <div class="members">
              <div class="member-item" v-for="(item,index) in proposal.supportArr" :key="index">
                <div class="icon">
                  <img src="" alt="">
                </div>
                <div class="name">
                  {{ item.address }}
                </div>
                <div class="number">
                  {{ item.votes }}
                </div>
              </div>

            </div>
            <div class="more-btn" @click="isShowMembers=true">
              MORE
            </div>
          </div>
          <div class="right">
            <div class="title-box">
              <div class="title">
                Refuse
              </div>
              <div class="address">
                {{ proposal.refuseArr.length }} Address
              </div>
            </div>
            <div class="vote-number">
              <div class="number">
                {{ proposal.againstVotes }}
              </div>
              <div class="number-line">
                <div class="active-number">

                </div>
              </div>
            </div>
            <div class="members">
              <div class="member-item" v-for="(item,index) in proposal.refuseArr" :key="index">
                <div class="icon">
                  <img src="" alt="">
                </div>
                <div class="name">
                  {{ item.address }}
                </div>
                <div class="number">
                  {{ item.votes }}
                </div>
              </div>

            </div>
            <div class="more-btn" @click="isShowMembers=true">
              MORE
            </div>
          </div>
        </div>
        <div class="rainbow-panel right-part">
          <div class="title">
            Timeline
          </div>
          <div class="step-box">
            <div class="step">
              <div class="icon" :class="{'active':statusIndex > 0}">
                <img src="../../assets/imgs/right_icon.png" alt="">
              </div>
              <div class="name">
                Establish
              </div>
              <div class="date">
               {{ proposal.startBlock}} block
              </div>
            </div>
            <div class="step" >
              <div class="icon"  :class="{'active':statusIndex > 1}">
                <img src="../../assets/imgs/right_icon.png" alt="">
              </div>
              <div class="name">
                Voting period
              </div>
              <div class="date">
                {{proposal.endBlock }}block
              </div>
            </div>
            <div class="step" >
              <div class="icon"  :class="{'active':statusIndex > 2}">
                <img src="../../assets/imgs/right_icon.png" alt="">
              </div>
              <div class="name">
                Publicity period
              </div>
              <div class="date">

              </div>
            </div>
            <div class="step" >
              <div class="icon" :class="{'active':statusIndex > 3}">
                <img src="../../assets/imgs/right_icon.png" alt="">
              </div>
              <div class="name">
                Publicity period
              </div>
              <div class="date">

              </div>
            </div>
            <div class="step" >
              <div class="icon"  :class="{'active':statusIndex > 4}">
                <img src="../../assets/imgs/right_icon.png" alt="">
              </div>
              <div class="name">
                Finished
              </div>
              <div class="date">

              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="rainbow-panel part3">
        <div class="title">
          Details
        </div>
        <div class="part3-content">
          {{proposal.desc}}
        </div>
      </div>
    </div>
    <page-footer/>
    <div class="rainbow-dialog-box"  v-show="isShowMembers">
      <div class="mask" @click="isShowMembers=false">
      </div>
      <div class="rainbow-dialog" @click.stop>
        <div class="title-box">
          <div class="title">
            All Members
          </div>
          <div class="address">
            {{ proposal.forVotes }}
          </div>
        </div>
        <div class="vote-number">
          <div class="number">
            {{ proposal.forVotes }}
          </div>
          <div class="number-line">
            <div class="active-number">

            </div>
          </div>
        </div>
        <div class="members">
          <div class="member-item" v-for="(item,index) in proposal.receiptsArr" :key="index">
            <div class="icon">
              <img src="" alt="">
            </div>
            <div class="name">
              {{ item.address }}
            </div>
            <div class="number">
              {{ item.votes }}
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "proposalDetail",
  data(){
    return{
      proposal:{},
      isShowMembers:false,
      statusIndex:0,
      myVotes:0,
      blockNumber:0
    }
  },
  computed: {
    ...mapGetters(['account', 'isConnected'])
  },
  watch:{
    isConnected(){
      this.getData()
    },
  },
  mounted() {
    console.log(this.$route.params)
    this.proposal = this.$route.params
    this.proposal.forVotes = (this.proposal.forVotes.replace(/,/g,''))/10**18
    this.proposal.againstVotes = (this.proposal.againstVotes.replace(/,/g,''))/10**18
    this.proposal.receiptsArr = []
    this.proposal.supportArr = []
    this.proposal.refuseArr = []
    if(this.proposal.receipts){
      for(let key in this.proposal.receipts){
        console.log(key)
        this.proposal.receipts[key].votes = (this.proposal.receipts[key].votes.replace(/,/g,''))/10**18
        this.proposal.receiptsArr.push({
          address: key,
          ...this.proposal.receipts[key],
        })
        if(this.proposal.receipts[key].support){
          this.proposal.supportArr.push({
            address: key,
            ...this.proposal.receipts[key],
          })
        }else{
          this.proposal.refuseArr.push({
            address: key,
            ...this.proposal.receipts[key],
          })
        }
      }
      console.log( this.proposal.receiptsArr)
    }
    switch (this.proposal.state){
      case "Active": this.statusIndex = 1
    }
    this.getData()
    this.$eventBus.$on('message', (message) => {
      this.getData()
    })
  },
  beforeDestroy() {
    this.$eventBus.$on('message', () => {
    })
  },
  methods:{
    delegate(){
      this.$store.dispatch("erc20/delegate", this.account).then(res=>{
        console.log(res)
      })
    },
    getData(){
      this.$store.dispatch("erc20/getPriorVotes",this.proposal.startBlock).then(res=>{
      })
      this.$store.dispatch("erc20/getCurrentVotes", this.account).then(res=>{
        res = res.replace(/,/g,'')
        this.myVotes = res / 10**18
      })
    },
    castVote(support){
      this.$store.dispatch("proposal/castVote", {
        proposal_id:this.proposal.proposalId,
        support
      }).then(res=>{
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.proposalDetail {
  .rainbow-dialog{
    .title-box {
      display: flex;
      justify-content: space-between;

      .title {
        font-size: 16px;
        font-weight: bold;
        text-align: left;
        color: #333333;
        line-height: 18px;
      }

      .address {
        font-size: 12px;
        font-weight: 600;
        color: #999999;
      }
    }

    .vote-number {
      .number {
        font-size: 20px;
        font-weight: 400;
        text-align: left;
        color: #5edba6;
        line-height: 30px;
      }

      .number-line {
        width: 340px;
        height: 5px;
        background: #eaeaea;
        border-radius: 2px;

        .active-number {
          width: 320px;
          height: 5px;
          background: #5edba6;
          border-radius: 2px;
        }
      }
    }


  }
  .members {
    .member-item {
      display: flex;
      align-items: center;
      padding: 6px 20px 16px 0;
      position: relative;
      margin-top: 10px;
      .icon {
        width: 30px;
        height: 30px;
        border-radius: 50%;
        overflow: hidden;

        img {
          border-radius: 50%;
          width: 100%;
          height: 100%;

        }
      }

      .name {
        margin-left: 10px;
        font-size: 14px;
        font-weight: 600;
        color: #6919bb;
        width: 200px;
        overflow: hidden;
        line-height: 20px;
      }

      .number {
        position: absolute;
        right: 10px;
        font-weight: bold;
        color: #6919bb;
        line-height: 18px;
        width: 80px;
        overflow: hidden;
      }
    }
  }
  .detail-content {
    .part1 {
      display: flex;

      .left, .right {
        width: 50%;
      }

      .left {
        .content {
          font-size: 16px;
          font-weight: bold;
          text-align: left;
          color: #333333;
          line-height: 26px;
        }

        .status-box {
          display: flex;
          margin-top: 30px;

          .status {
            padding: 2px 10px;
            height: 26px;
            line-height: 24px;
            background: rgba(255, 174, 37, 0.20);
            border: 1px solid rgba(255, 174, 37, 0.50);
            border-radius: 5px;
            color: #ffae25;
          }

          .date {
            padding: 4px 10px;
            height: 17px;
            font-size: 12px;
            font-weight: 600;
            text-align: left;
            color: #ffae25;
            line-height: 17px;
          }
        }
      }

      .right {
        .title {
          font-size: 16px;
          font-weight: bold;
          text-align: left;
          color: #333333;
        }

        .number {
          font-size: 24px;
          font-weight: bold;
          text-align: left;
          color: #db1f7e;
          line-height: 36px;
        }

        .btn-box {
          display: flex;
          margin-top: 10px;

          .support, .Refuse {
            cursor: pointer;
            width: 80px;
            height: 30px;
            border-radius: 10px;
            color: #fff;
            text-align: center;
            line-height: 30px;

          }

          .support {
            background: #5edba6;
            margin-left: 10px;
            box-shadow: 0px 3px 5px 0px rgba(99, 226, 172, 0.50);
          }

          .Refuse {
            margin-left: 10px;
            background: linear-gradient(90deg, #ff6a6a, #ff1a1a 100%);
            box-shadow: 0px 3px 5px 0px rgba(254, 151, 134, 0.50);
          }
        }
      }
    }

    .part2 {
      display: flex;
      width: 1140px;
      margin: 16px auto;
      justify-content: space-between;

      .rainbow-panel.left-part {
        width: 800px;
      }

      .rainbow-panel.right-part {
        width: 300px;

        .title {
          font-size: 16px;
          font-weight: 600;
          text-align: left;
          color: #333333;
          line-height: 20px;
        }

        .step-box {
          .step {
            padding-left: 30px;
            position: relative;

            .icon {
              position: absolute;
              left: 0px;
              width: 20px;
              height: 20px;
              border-radius: 50%;
              background: #eee;

              &.active{
                background: #5EDBA6;
              }
              img {
                margin: 10%;
                width: 80%;
                height: 80%;
              }
            }

            .name {
              font-weight: bold;
              color: #333;
              font-size: 16px;
            }

            .date {
              height: 40px;
              line-height: 40px;
              color: #999999;
              font-size: 14px;
            }
          }
        }
      }

      .left-part {
        display: flex;

        .left, .right {
          width: 50%;
          padding-right: 20px;

          .title-box {
            display: flex;
            justify-content: space-between;

            .title {
              font-size: 16px;
              font-weight: bold;
              text-align: left;
              color: #333333;
              line-height: 18px;
            }

            .address {
              font-size: 12px;
              font-weight: 600;
              color: #999999;
            }
          }

          .vote-number {
            .number {
              font-size: 20px;
              font-weight: 400;
              text-align: left;
              color: #5edba6;
              line-height: 30px;
            }

            .number-line {
              width: 340px;
              height: 5px;
              background: #eaeaea;
              border-radius: 2px;

              .active-number {
                width: 320px;
                height: 5px;
                background: #5edba6;
                border-radius: 2px;
              }
            }
          }


          .more-btn{
            margin-top: 20px;
            margin-left: calc(50% - 40px);
            color: #999999;
            line-height: 30px;
            text-align: center;
            cursor: pointer;
            width: 80px;
            height: 30px;
            background: #f0f0f0;
            border-radius: 10px;
          }
        }

        .right {
          .vote-number {
            .active-number {
              background: linear-gradient(90deg, #ff6a6a, #ff1a1a 100%) !important;
            }
          }
        }
      }
    }
    .part3{

      .title{

      }
      .part3-content{
        margin-top: 20px;
        line-height: 20px;
        width: 100%;
        word-break: break-word;
        color: #333333;
      }
    }
  }
}
</style>
