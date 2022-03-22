<template>
  <div class="daoManage">
    <dao-nav/>

    <div class="dao-manage-content">
      <daoHeaderInfo @joinDao="joinDao"></daoHeaderInfo>

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
          <!--          <div class="item" :class="{'active':activeNavIndex==4}" @click="activeNavIndex=4">-->
          <!--            APPLY LIST-->
          <!--          </div>-->
        </div>
        <daoHome :curDaoControlAddress="curDaoControlAddress" @chooseDao="chooseDao" :dao-address="curDaoAddress"
                 :balance="balance" :dao-list="daoList" v-show="activeNavIndex==0"></daoHome>
        <proposalList :coinAddress="curDaoControlAddress.erc20Addr" :vault="curDaoControlAddress.vaultAddr"
                      :proposal-list="proposalArr"
                      v-show="activeNavIndex==1"></proposalList>
        <daoFinance
                    v-show="activeNavIndex==2"></daoFinance>
        <daoMember :members-list="membersList" v-show="activeNavIndex==3"></daoMember>
        <!--        <applyList @getData="getApplyList" :cur-dao="curDao" :list="applyArr" v-show="activeNavIndex==4"></applyList>-->
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
      balance: 0,
      curDao: {},
      membersLength: 0,
      activeNavIndex: 0,
      daoList: [],
      applyArr: [],
      membersList: [],
      proposalArr: [],
      daoIndexList: [],
    }
  },

  computed: {
    ...mapGetters([
      'isConnected',
      'account'
    ]),
    curDaoAddress(){
      return this.$store.state.daoManage.curDaoAddress
    },
    curDaoControlAddress(){
      if(this.$store.state.daoManage.curDaoControlAddress){
        return this.$store.state.daoManage.curDaoControlAddress
      }else{
        return {}
      }
    },
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
      if (this.$route.params.activeNavIndex) {
        this.activeNavIndex = this.$route.params.activeNavIndex
      }
    }
    if(this.$store.state.daoManage.curDaoControlAddress){
      this.getComponentAddrs()
    }
    this.getData()
    this.$eventBus.$on('message', (message) => {
      if (message.type == 'success') {
        if (message.message == "Join DAO Success") {
          this.listUser()
        }
      }
      this.listUser()
    })
  },
  methods: {
    getDaoCategory(addr){
      return this.$store.dispatch("daoManage/getDaoCategory",addr)
    },
    getVaultBalance(){
      this.$store.dispatch("erc20/getBalanceOf",{
        toAddr:this.curDaoControlAddress.vaultAddr,
        address: this.curDaoControlAddress.vaultAddr
      }).then(balance=>{
        this.$store.commit("daoVault/SET_VAULTBALANCE",balance)
      })
    },
    getTransferHistory() {
      this.$store.dispatch("daoVault/getTransferHistory", this.curDaoControlAddress.vaultAddr).then(res => {
        this.$store.commit("daoVault/SET_TRANSFERLIST",res)
      })
    },
    joinDao() {
      this.$store.dispatch("daoUser/join", this.curDaoControlAddress.daoUsersAddr)
    },
    listUser() {
      this.$store.dispatch("daoUser/listUser", this.curDaoControlAddress.daoUsersAddr).then(res => {
        this.membersList = res
        this.$store.commit("daoManage/SET_CURDAOMEMBERS", res.length)
      })
    },
    getDaoBaseInfo(addr){
      return this.$store.dispatch("daoBase/getBaseInfo",addr)
    },
    getBaseInfo() {
      this.$store.dispatch("daoBase/getBaseInfo",this.curDaoControlAddress.baseAddr).then(res => {
        this.curDao = res
        this.$store.commit("daoManage/SET_CURDAO", res)
      })
    },
    getComponentAddrs() {
      this.$store.dispatch("daoManage/getComponentAddress", this.curDaoAddress).then(res => {
        this.$store.commit("daoManage/SET_curDaoControlAddress", res)
        if(res){
          this.listUser()
          this.getBaseInfo()
          this.getTransferHistory()
          this.getVaultBalance()
          this.getProposalList()
          this.getCoinInfo()
          this.getChildsDaos()
        }

      })
    },
    chooseDao(item) {
      this.curDao = item
      this.$store.commit("daoManage/SET_CURDAOADDR",item.daoManagerAddr)
      this.getComponentAddrs()
      this.$store.dispatch("app/getBalance", this.curDaoAddress).then(balance => {
        this.balance = balance
      })
    },
    getCoinInfo() {
      if(this.curDaoControlAddress.erc20Addr){
        this.$store.dispatch("erc20/queryInfo", this.curDaoControlAddress.erc20Addr).then(res => {
          this.$store.commit("erc20/SET_COIN",res)
        })
      }
    },
    getDaoControlAddr(address){
      return this.$store.dispatch("daoManage/getComponentAddress", address)
    },
    getProposalList() {
      if (this.isConnected && this.curDaoControlAddress) {
        this.$store.dispatch("daoProposal/listProposals", this.curDaoControlAddress.proposalAddr).then(async res => {
          for (let i = 0; i < res.length; i++) {
            await this.$store.dispatch("daoProposal/state", {
              proposalId: res[i].proposalId,
              address: this.curDaoControlAddress.proposalAddr
            }).then(state => {
              res[i].state = state
            })
          }
          this.proposalArr = JSON.parse(JSON.stringify(res))
        })
      }
    },

    listDao() {
      this.$store.dispatch("daoFactory/listDao").then(res => {
        res.forEach(async item=>{
          let addrObj = await this.getDaoControlAddr(item.daoManagerAddr)
          let category = await this.getDaoCategory(item.daoManagerAddr)
          if(addrObj.baseAddr){
            let daoInfo = await this.getDaoBaseInfo(addrObj.baseAddr)
            item.logo = daoInfo.logo
            item.name=daoInfo.name
            item.desc = daoInfo.desc
            item.owner =daoInfo.owner
            item.category = category
          }
        })

        this.daoList = res

      })
    },
    joinedDao() {
      // this.$store.dispatch("daoFactory/joinedDao").then(res => {
      //   this.daoIndexList = res
      //   console.log(res)
      //
      // })
    },
    getChildsDaos(){
      this.$store.dispatch("daoManage/getChildsDaos",this.curDaoAddress).then(res=>{
        this.$store.commit("daoManage/SET_CHILDDAOLIST",res)
      })
    },
    getData() {
      if (!this.isConnected) {
        return
      }
      this.listDao()
      this.joinedDao()
      if (this.curDao.manage) {
        this.getProposalList()
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.daoManage {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  .dao-manage-content {
    flex: 1;
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
