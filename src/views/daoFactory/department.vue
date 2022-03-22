<template>
  <div class="department">
    <dao-nav></dao-nav>
      <div class="department-box">
        <daoHeaderInfo @joinDao="joinDao"></daoHeaderInfo>
        <div class="department-content">
          <div class="rainbow-nav-box">
            <div class="nav-item"  :class="{'active': 0 == activeNavIndex}" @click="activeNavIndex=0">
              HOME
            </div>
<!--            <div class="nav-item"  :class="{'active': 1 == activeNavIndex}" @click="activeNavIndex=1">-->
<!--              PROPOSAL-->
<!--            </div>-->
<!--            <div class="nav-item"  :class="{'active': 2 == activeNavIndex}" @click="activeNavIndex=2">-->
<!--              FINANCIAL-->
<!--            </div>-->
            <div class="nav-item"  :class="{'active': 3 == activeNavIndex}" @click="activeNavIndex=3">
              MEMBER
            </div>
          </div>
          <departmentHome @chooseDao="chooseDao" :dao-list="daoList" v-show="activeNavIndex==0"></departmentHome>
          <proposalList :address="curDao.manage" :vault="curDao.vault" :proposal-list="proposalArr" v-show="activeNavIndex==1"></proposalList>
          <departmentFinance :token-list="tokenList" v-show="activeNavIndex==2"></departmentFinance>
          <departmentMember :members-list="membersList" v-show="activeNavIndex==3"></departmentMember>
<!--          <applyList @getData="getApplyList" :cur-dao="curDao" :list="applyArr" v-show="activeNavIndex==4"></applyList>-->
        </div>
      </div>
    <dao-footer></dao-footer>
  </div>
</template>

<script>
import departmentMember from "./department/departmentMember";
import proposalList from "./department/proposalList";
import departmentHome from "./department/departmentHome";
// import applyList from "./department/applyList";
import {mapGetters} from "vuex";
import departmentFinance from "./department/departmentFinance"

export default {
  name: "department",
  components: {
    departmentMember,
    departmentHome,
    proposalList,
    departmentFinance
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
  created() {
    console.log( this.$route.params)
    this.membersList = this.$route.params.departmentInfo.users
  },
  computed: {
    ...mapGetters([
      'isConnected',
      'account'
    ]),
  },
  methods: {
    getBalance(){
      this.$store.dispatch("app/getBalance", this.curDaoAddress).then(balance => {
        console.log(balance)
        this.balance = balance
      })
    },
    joinDao() {

    },
  }
}
</script>

<style lang="scss" scoped>
.department {
  .department-box{
    width: 100%;
    position: relative;
    margin-top: -100px;
    z-index: 1;
  }
  .department-content {
    position: relative;
    z-index: 1;
    border-radius: 20px;
    width: 1200px;
    background: #fff;
    margin: 10px auto;
    padding-bottom: 50px;
    .nav-item{
      padding: 20px 50px;
    }
  }
}
</style>
