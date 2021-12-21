<template>
  <div class="proposal">
    <rainbow-nav-new></rainbow-nav-new>
    <div class="rainbow-panel">
      <div class="title">
        PROPOSAL
        <div class="create-btn" @click="$router.push({name:'createProposal'})">
          new proposal
        </div>
      </div>
      <div class="nav-list">
        <div class="nav-item" @click="chooseNav(item);activeIndex=index" :class="{'active':activeIndex == index}"
             v-for="(item, index) in navList" :key="index">
          {{ item.name }}({{ item.number }})
        </div>
      </div>
      <div class="rainbow-list">
        <div class="list-item" @click="$router.push({name:'ProposalDetail'})" v-for="(item, index) in proposalList" :key="index">
          <div class="index">
            {{ index }}
          </div>
          <div class="name-box">
            <div class="header-icon">
              <img src="../../assets/imgs/header-icon.png" alt="">
            </div>
            <div class="name">
              {{item.name}}
            </div>
          </div>
          <div class="item-content">
            <div class="content">
              {{ item.desc }}
            </div>
            <div class="floor">
              <div class="stage">
                {{ item.status }}
              </div>
              <div class="date">
                {{ item.update_time }}
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
import {mapGetters} from "vuex"
export default {
  name: "proposal",
  data() {
    return {
      activeIndex: 0,
      proposalList:[],
      navList: [
        {
          name: "ALL",
          number: 0
        },
        {
          name: "Active",
          number: 0
        },
        {
          name: "Pending",
          number: 0
        },
        {
          name: "Succeeded",
          number: 0
        },
        {
          name: "Executed",
          number: 0
        },
        {
          name: "Canceled",
          number: 0
        },
        {
          name: "Defeated",
          number: 0
        },
        {
          name: "Expired",
          number: 0
        },
        {
          name: "Queued",
          number: 0
        }
      ]
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
  methods: {
    getData(){
      if(!this.isConnected){
        return
      }
      this.$store.dispatch("proposal/listProposals").then(res=>{
        console.log(res)
        this.proposalList = res
      })

    },
    chooseNav() {

    }
  },
  mounted() {
    this.getData()
  }
}
</script>

<style lang="scss" scoped>
.proposal {
  .create-btn{
    float: right;
    font-size: 14px;
    font-weight: normal;
    color: #ffffff;
    padding: 0 10px;
    user-select: none;
    cursor: pointer;
    text-align: center;
    line-height: 30px;
    height: 30px;
    background: linear-gradient(90deg,#12c2e9, #c471ed 53%, #f64f59);
    border-radius: 10px;
  }
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
