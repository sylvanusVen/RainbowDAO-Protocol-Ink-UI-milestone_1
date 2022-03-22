<template>
  <div class="dao-home">
    <div class="balance" v-show="balance">
      <div class="sub-title">
        <img src="@/assets/daoImgs/title_icon1.png" alt="">
        BALANCE
      </div>
      <div class="number">
        <strong>{{ balance }}</strong>
        {{ coinInfo.name }}
      </div>
      <div class="address">
        {{ daoAddress }}
      </div>
    </div>
    <div class="part-title-box">
      <div class="left">
        <img src="../../../assets/daoImgs/title_icon1.png" alt="">
        <div class="part-title-name">
          ALL DAO
        </div>
        <div class="part-title-tip">

        </div>
      </div>
      <div class="right">
        <div class="rainbow-btn" @click="createDao(0)">
          CREATE
        </div>
      </div>
    </div>
    <div class="dao-list">
      <div class="item" v-if="item.name" @click="chooseDao(item)" v-for="(item,index) in daoList" :key="index">
        <div class="logo">
          <img :src="item.logo" alt="">
        </div>
        <div class="dao-info">
          <div class="name">
            {{ item.name }}
          </div>
          <div class="address">
            {{ item.daoManagerAddr }}
          </div>
        </div>
      </div>
    </div>
    <div class="part-title-box">
      <div class="left">
        <img src="../../../assets/daoImgs/title_icon1.png" alt="">
        <div class="part-title-name">
          ALLIANCE
        </div>
        <div class="part-title-tip">

        </div>
      </div>
      <div class="right">
        <div class="rainbow-btn" @click="createDao(1)">
          CREATE
        </div>
      </div>
    </div>
    <div class="dao-list">
      <div class="item" v-if="item.category=='union' && item.name"  @click="chooseDepartment(item,index)" v-for="(item,index) in daoList" :key="index">
        <div class="logo">
          <img :src="item.logo" alt="">
        </div>
        <div class="dao-info">
          <div class="name">
            {{ item.name }}
          </div>
          <div class="address">
            {{ item.daoManagerAddr }}
          </div>
        </div>
      </div>
    </div>
    <div class="part-title-box">
      <div class="left">
        <img src="../../../assets/daoImgs/title_icon1.png" alt="">
        <div class="part-title-name">
          CHILD DAO
        </div>
        <div class="part-title-tip">

        </div>
      </div>
      <div class="right" v-show="curDaoAddress">
        <div class="rainbow-btn" @click="createDao(2)">
          CREATE
        </div>
      </div>
    </div>
    <div class="dao-list">
      <div class="item" @click="chooseDepartment(item,index)" v-for="(item,index) in childDaoList" :key="index">
        <div class="logo">
          <img :src="item.logo" alt="">
        </div>
        <div class="dao-info">
          <!--          <div class="name">-->
          <!--            {{ item }}-->
          <!--          </div>-->
          <div class="address">
            {{ item }}
          </div>
        </div>
      </div>
    </div>
    <div class="part-title-box">
      <div class="left">
        <img src="../../../assets/daoImgs/title_icon1.png" alt="">
        <div class="part-title-name">
          DEPARTMENT
        </div>
        <div class="part-title-tip">

        </div>
      </div>
      <div class="right">
        <div class="rainbow-btn" @click="isShowAddDepartment=true">
          CREATE
        </div>
      </div>
    </div>
    <div class="dao-list">
      <div class="item" @click="chooseDepartment(item,index)" v-for="(item,index) in departmentList" :key="index">
        <div class="logo">
          <img :src="item.logo" alt="">
        </div>
        <div class="dao-info">
          <div class="name">
            {{ item.name }}
          </div>
          <div class="address">
            {{ item.departmentList }}
          </div>
        </div>
      </div>
    </div>
    <div class="part-title-box">
      <div class="left">
        <img src="../../../assets/daoImgs/title_icon1.png" alt="">
        <div class="part-title-name">
          CONTRACTS
        </div>
        <div class="part-title-tip">

        </div>
      </div>
      <div class="right">

      </div>
    </div>
    <div class="dao-address">
      <div class="dao-address-item">
        <div class="dao-address-name">
          BASE:
        </div>
        <div class="dao-address-value">
          {{ curDaoControlAddress.baseAddr }}
        </div>
      </div>
      <div class="dao-address-item">
        <div class="dao-address-name">
          ERC20:
        </div>
        <div class="dao-address-value">
          {{ curDaoControlAddress.erc20Addr }}
        </div>
      </div>
      <div class="dao-address-item">
        <div class="dao-address-name">
          VAULT:
        </div>
        <div class="dao-address-value">
          {{ curDaoControlAddress.vaultAddr }}
        </div>
      </div>
      <div class="dao-address-item">
        <div class="dao-address-name">
          PROPOSAL:
        </div>
        <div class="dao-address-value">
          {{ curDaoControlAddress.proposalAddr }}
        </div>
      </div>
      <div class="dao-address-item">
        <div class="dao-address-name">
          SETTING:
        </div>
        <div class="dao-address-value">
          {{ curDaoControlAddress.daoSettingAddr }}
        </div>
      </div>
      <div class="dao-address-item">
        <div class="dao-address-name">
          USER:
        </div>
        <div class="dao-address-value">
          {{ curDaoControlAddress.daoUsersAddr }}
        </div>
      </div>
    </div>

    <div class="rainbow-dialog-box" v-show="isShowAddDepartment">
      <div class="mask" @click="isShowAddDepartment=false"></div>
      <div class="rainbow-dialog">
        <div class="dialog-title">
          ADD DEPARTMENT
        </div>
        <div class="dialog-content">
          <div class="department-form">
            <div class="input-box">
              <div class="input-box-title">
                DEPARTMENT Name
              </div>
              <input type="text" v-model="department.name" placeholder="Name">
            </div>
            <div class="input-box">
              <div class="input-box-title">
                DEPARTMENT Join Directly
              </div>
              <input type="text" v-model="department.joinDirectly" placeholder="join_directly">
            </div>
            <div class="input-box">
              <div class="input-box-title">
                DEPARTMENT Is Open
              </div>
              <input type="text" v-model="department.isOpen" placeholder="is_open">
            </div>
            <div class="input-box">
              <div class="input-box-title">
                DEPARTMENT Manager
              </div>
              <input type="text" v-model="department.manager" placeholder="manager">
            </div>
          </div>
          <div class="rainbow-btn" @click="addGroup">
            Submit
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters} from "_vuex@3.6.2@vuex";

export default {
  name: "daoHome",
  props: ["daoList", "balance", "daoAddress", "curDaoControlAddress"],
  data() {
    return {
      balance: 0,
      departmentList: [],
      department: {},
      isShowAddDepartment: false
    }
  },

  computed: {
    ...mapGetters([
      'isConnected',
      'account'
    ]),
    coinInfo() {
      if (this.$store.state.erc20.coinInfo) {
        return this.$store.state.erc20.coinInfo
      } else {
        return {}
      }
    },
    curDaoAddress() {
      return this.$store.state.daoManage.curDaoAddress
    },
    childDaoList() {
      return this.$store.state.daoManage.childDaoList
    }
  },
  watch: {

    isConnected() {
      this.getData()
    },
    curDaoControlAddress() {
      this.getData()
    },

  },
  created() {
    if (this.$route.params) {
      this.curDao = this.$route.params
    }
    this.getData()
    this.$eventBus.$on('message', (message) => {
      if (message.type == 'success') {
        if (message.message == "Create Department Success") {
          this.listGroup()
        }
      }
    })

  },
  methods: {
    createDao(index) {
      this.$router.push({name: "createDao", params: {index}})
    },
    getData() {
      if (this.curDaoControlAddress.daoUsersAddr) {
        this.listGroup()
      }
    },
    chooseDao(item) {
      this.$emit("chooseDao", item)
    },
    listGroup() {
      this.$store.dispatch("daoUser/listGroup", this.curDaoControlAddress.daoUsersAddr).then(res => {
        console.log(res)
        this.departmentList = res
      })
    },
    chooseDepartment(item, index) {
      this.$router.push({
        name: "department", params: {
          departmentInfo: item,
          departmentAddr: index
        }
      })
    },
    addGroup() {
      this.$store.dispatch("daoUser/addGroup", {
        daoUserAddress: this.curDaoControlAddress.daoUsersAddr,
        department: this.department
      }).then(() => {
        this.isShowAddDepartment = false

      })
    }
  }
}
</script>

<style lang="scss" scoped>
.dao-home {
  padding: 30px;

  .rainbow-dialog {
    .dialog-title {
      font-weight: bold;
      line-height: 50px;
      font-size: 22px;
    }

    .dialog-content {
      min-width: 500px;

      .department-form {
        .input-box {
          margin-top: 20px;

          .input-box-title {
            font-size: 16px;
            font-weight: bold;
            line-height: 30px;
          }

        }
      }

      input {
        width: 360px;
        padding: 0 10px;
        height: 46px;
        background: #f5f5f5;
        border: 1px solid #eaeaea;
        border-radius: 10px;
      }
    }
  }

  .part-title-box {
    display: flex;
    justify-content: space-between;

    .left {
      display: flex;
      align-items: center;
      padding: 30px 0;

      .part-title-name {
        margin: 0 10px;
        font-size: 16px;
        font-weight: bold;
        color: #333333;
      }
    }

    .right {
      .rainbow-btn {
        width: 120px;
        height: 36px;
        line-height: 36px;
      }
    }
  }

  .balance {
    padding: 0px 20px 20px 0;

    .sub-title {
      display: flex;
      align-items: center;
      font-size: 20px;
      font-weight: bold;
      line-height: 60px;

      img {
        margin-right: 6px;
      }
    }

    .number {
      height: 35px;
      font-size: 26px;
      font-weight: 700;
      text-align: left;
      color: #ec1676;
      line-height: 35px;

      strong {
        font-size: 32px;
      }
    }

    .address {
      width: 460px;
      margin-top: 20px;
      padding: 10px;
      color: #F96AAF;
      background: #f5f5f5;
      border: 1px solid rgba(255, 31, 132, 0.15);
      border-radius: 5px;
    }
  }

  .dao-address {
    .dao-address-item {
      margin: 10px 0;
      display: flex;
      align-items: center;

      .dao-address-name {
        font-weight: bold;
        width: 66px;
      }

      .dao-address-value {
        min-width: 460px;
        height: 34px;
        background: #f5f5f5;
        border-radius: 10px;
        line-height: 34px;
        margin-left: 20px;
        padding: 0 10px;
        color: #F96AAF;
      }
    }
  }
}

</style>
