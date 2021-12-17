<template>
  <div class="proposal">
    <rainbow-nav-new></rainbow-nav-new>
    <div class="rainbow-panel">
      <div class="title">
        PROPOSAL
      </div>
      <div class="nav-list">
        <div class="nav-item" @click="chooseNav(item);activeIndex=index" :class="{'active':activeIndex == index}"
             v-for="(item, index) in navList" :key="index">
          {{ item.name }}({{ item.number }})
        </div>
      </div>
      <div class="rainbow-list">
        <div class="list-item" @click="$router.push({name:'ProposalDetail'})">
          <div class="index">
            01
          </div>
          <div class="name-box">
            <div class="header-icon">
              <img src="../../assets/imgs/header-icon.png" alt="">
            </div>
            <div class="name">
              Bruce Banner
            </div>
          </div>
          <div class="item-content">
            <div class="content">
              Risk Parameter Updates for DAI, BAT, ZRX, and ETH
            </div>
            <div class="floor">
              <div class="stage">
                Voting period
              </div>
              <div class="date">
                071 • 1 day, 20 hrs left
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <pageFooter>

    </pageFooter>
  </div>
</template>

<script>
export default {
  name: "proposal",
  data() {
    return {
      activeIndex: 0,
      navList: [
        {
          name: "ALL",
          number: 80
        },
        {
          name: "In execution",
          number: 2
        },
        {
          name: "Voting period",
          number: 0
        },
        {
          name: "Arbitration period",
          number: 0
        },
        {
          name: "Executed",
          number: 68
        },
        {
          name: "Rejected",
          number: 10
        }
      ]
    }
  },
  methods: {
    chooseNav() {

    }
  },
  mounted() {
   this.$store.dispatch("app/getWeb3").then(()=>{
     this.$store.dispatch("erc20/getBalance","5FPkpUMmsLubNDJBDeVMnFP6B9UnibjeLoGastnH1da9gKqD").then(res=>{
       console.log(res)
     })
     // this.$store.dispatch("factory/newErc20").then(res=>{
     //   console.log(res)
     // })
     this.$store.dispatch("routerMap/addRoute").then(res=>{
       console.log(res)
     })
   })
  }
}
</script>

<style lang="scss" scoped>
.proposal {
  .nav-list {
    display: flex;
    border-bottom: 1px solid #eaeaea;
    .nav-item {
      padding: 10px 20px;
      color: #333333;
      font-weight: bold;
      cursor: pointer;
      &.active {
        border-bottom: 1px solid #DB1F7E;
        color: #DB1F7E;
      }
    }
  }
  .rainbow-list{
    .list-item {
      display: flex;
      padding: 20px;
      align-items: center;
      cursor: pointer;
      margin-top: 30px;
      border: 1px solid #eaeaea;
      .name-box{
        display: flex;

        align-items: center;
        padding: 0 20px;
        .name{
          font-weight: bold;
          color: #6919BB;
        }
      }
      .item-content{
        height: 60px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        .floor{
          display: flex;
          align-items: center;
          color: rgba(255,174,37,0.80);
          .stage{
            margin-right: 30px;
            width: 120px;
            height: 24px;
            text-align: center;
            line-height: 24px;
            background: rgba(255,174,37,0.20);
            border: 1px solid rgba(255,174,37,0.50);
            border-radius: 5px;
          }
        }
      }
    }
  }
}
</style>
