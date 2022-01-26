<template>
  <div class="daoManage">
    <dao-nav></dao-nav>

    <div class="dao-manage-content">
      <daoHeaderInfo @joinDao="joinDao" :daoInfo="curDao"></daoHeaderInfo>

      <div class="dao-manage-content-box">

        <div class="box-nav">
          <div class="item" :class="{'active':activeNavIndex==0}" @click="activeNavIndex=0">
            HOME
          </div>
          <div class="item" :class="{'active':activeNavIndex==1}" @click="activeNavIndex=1">
            PROPOSAL
          </div>
          <div class="item" :class="{'active':activeNavIndex==2}" @click="activeNavIndex=2">
            FINANCIAL
          </div>
          <div class="item" :class="{'active':activeNavIndex==3}" @click="activeNavIndex=3">
            MEMBER
          </div>
          <div class="item" :class="{'active':activeNavIndex==4}" @click="activeNavIndex=4">
            APPLY LIST
          </div>
        </div>
        <daoHome @chooseDao="chooseDao" :dao-list="daoList" v-show="activeNavIndex==0"></daoHome>
        <proposalList :address="curDao.manage" :vault="curDao.vault" :proposal-list="proposalArr" v-show="activeNavIndex==1"></proposalList>
        <daoFinance :token-list="tokenList" v-show="activeNavIndex==2"></daoFinance>
        <daoMember :members-list="membersList" v-show="activeNavIndex==3"></daoMember>
        <applyList @getData="getApplyList" :cur-dao="curDao" :list="applyArr" v-show="activeNavIndex==4"></applyList>
      </div>
    </div>
    <dao-footer></dao-footer>
  </div>
</template>

<script>
import daoMember from "./daoManage/daoMember";
import proposalList from "./daoManage/proposalList";
import daoHome from "./daoManage/daoHome";
import applyList from "./daoManage/applyList";
import {mapGetters} from "vuex";
import daoFinance from "./daoManage/daoFinance"

export default {
  name: "daoManage",
  components: {
    daoMember,
    daoHome,
    applyList,
    proposalList,
    daoFinance
  },
  data() {
    return {
      curDao: {},
      membersLength: 0,
      activeNavIndex: 0,
      daoList: [],
      tokenList: [],
      applyArr: [],
      membersList: [],
      proposalArr: [],
      daoIndexList:[]
    }
  },

  computed: {
    ...mapGetters([
      'isConnected',
      'account'
    ]),
  },
  watch: {
    membersLength() {
    },
    isConnected() {
      this.getData()
    }
  },
  created() {
    if (this.$route.params) {
      this.curDao = this.$route.params
    }
    this.getData()
  },
  methods: {
    getApplyList() {

    },
    joinDao() {

    },
    chooseDao(item) {
      this.curDao = item
      this.getMembers()
      this.getVaultData()
      this.getApplyList()
      this.getProposalList()
    },
    getMembers() {
      this.membersList = []

    },
    getVaultData() {

    },
    getProposalList(){

    },
    getDaoByIndex(index){
      this.$store.dispatch("daoFactory/getDaoByIndex",index).then(res=>{
        console.log(res)
        this.daoList.push(res)
        this.$store.dispatch("daoManage/baseAddr", res.daoManagerAddr).then(res=>{
          console.log(res)
        })
      })
    },
    getDaosByOwner(){
      this.$store.dispatch("daoFactory/getDaosByOwner").then(res=>{
        this.daoIndexList = res
        res.forEach(item=>{
          console.log(item)
           this.getDaoByIndex(item)
        })
      })
    },
    getData() {
      if(!this.isConnected){
        return
      }
      this.getDaosByOwner()

      if (this.curDao.manage) {
        this.getApplyList()
        this.getMembers()
        this.getVaultData()
        this.getProposalList()
      }

    }
  }
}
</script>

<style lang="scss" scoped>
.daoManage {

  .dao-manage-content {
    position: relative;
    margin-top: -100px;
    z-index: 1;
    background-size: 100% 100%;
    .dao-manage-content-box {
      box-shadow: 0px 6px 20px 0px rgba(0, 0, 0, 0.05);

      border-radius: 20px;
      width: 1200px;
      margin: 10px auto;
      background: #fff;
      padding-bottom: 20px;

      .box-nav {
        display: flex;
        padding: 0 20px;
        border-bottom: 1px solid #eee;

        .item {
          user-select: none;
          width: 150px;
          height: 60px;
          line-height: 60px;
          text-align: center;
          cursor: pointer;

          &.active {
            color: #F96AAF;
            border-bottom: 1px solid #F96AAF;
          }
        }
      }
    }
  }

}
</style>
