<template>
  <div class="management">
    <rainbow-nav-new></rainbow-nav-new>
    <div class="rainbow-panel">
      <div class="rainbow-nav-box">
        <div class="nav-item " :class="{'active': 0 == activeIndex}" @click="activeIndex=0">
          Role management
        </div>
        <div class="nav-item" :class="{'active': 1 == activeIndex}" @click="activeIndex=1">
          Authority management
        </div>
        <div class="nav-item" :class="{'active': 2 == activeIndex}" @click="activeIndex=2">
          Route management
        </div>
      </div>
      <div class="content">
        <div class="role" v-show="activeIndex==0">
          <div class="title">
            Role management
          </div>
          <div class="role-list">
            <div class="sub-title">
              All Roles:
            </div>
            <div class="role-item" v-for="role in listRoles">
<!--              <div class="icon">-->
<!--                <img src="" alt="">-->
<!--              </div>-->
              <div class="name">
                {{ role }}
              </div>
              <!--              <div class="detail">-->
              <!--                This is the token originator-->
              <!--              </div>-->
            </div>
            <div class="role-item">
              <div class="name">
                Add
              </div>
              <input class="add-input" type="text" v-model="roleInfo" placeholder="Add role name">
            </div>
          </div>
          <div class="confirm-btn rainbow-btn" @click="addRole">
            confirm
          </div>
        </div>
        <div class="authority" v-show="activeIndex==1">
          <div class="title">
            Authority management
          </div>
          <div class="manager-list">
            <div class="manager-item" v-for="(item, index) in authList" :key="index">
              <div class="icon">
                <img src="" alt="">
              </div>
              <div class="name">
                {{item.name}}
              </div>:
              <div class="privileges">
                <div class="item" v-for="(p,index) in item.privileges" :key="index">
                  {{p}}
                </div>
              </div>
              <input type="text" placeholder="new privilege" v-model="item.newprivilege">

              <div class="confirm-btn "  @click="roleInsertPrivilege(item)">
                Add
              </div>
            </div>

          </div>

        </div>
        <div class="route" v-show="activeIndex==2">
          <div class="title">
            Route management
          </div>
          <div class="route-list">
            <div class="route-item" v-for="role in manageList">
              <div class="icon">
                <img src="" alt="">
              </div>
              <div class="name">
                {{ role }}
              </div>
            </div>

          </div>
          <div class="add-item">
            <input class="add-input" type="text" v-model="routerName" placeholder="Add route name">
            <input class="add-input" type="text" v-model="routerValue" placeholder="Add route value">
          </div>
          <div class="confirm-btn rainbow-btn" @click="addRoute">
            confirm
          </div>
        </div>
      </div>
    </div>
    <pageFooter></pageFooter>
  </div>
</template>

<script>
import {mapGetters} from "vuex"

export default {
  name: "management",
  data() {
    return {
      activeIndex: 0,
      roleInfo: undefined,
      listRoles: [],
      authList:[],
      routerName: undefined,
      routerValue: undefined,
      privilege:undefined,
      manageList:[],
    }
  },
  mounted() {
    this.getData()
  },
  computed: {
    ...mapGetters(['account', 'isConnected'])
  },
  watch: {
    isConnected() {
      this.getData()
    }
  },
  methods: {
    getData() {
      if (this.isConnected) {
        this.$store.dispatch("roleManage/listRoles").then(res => {
          console.log(res, "list")
          res.forEach(item=>{
            let pArr = []
            this.$store.dispatch("roleManage/listRolePrivileges", item).then(privileges=>{
              if(privileges){
                pArr.push(...privileges)
              }
            })
            this.authList.push({
             privileges:pArr,
              name:item
            })
          })
          this.listRoles = res

        })
        this.$store.dispatch("roleManage/getUserPrivilege").then(res => {
          console.log(res, "list")
          this.manageList = res
        })
      }
    },
    roleInsertPrivilege(item){
      this.$store.dispatch("core/roleInsertPrivilege", {
        name: item.name,
        privilege: item.newprivilege
      })
    },
    addRoute() {
      this.$store.dispatch("core/addRoute", {
        name: this.routerName,
        routeValue: this.routerValue
      }).then(res=>{
        console.log(res)
        this.getData()
      })
    },
    addRole() {
      this.$store.dispatch("core/addRole", this.roleInfo).then(res=>{
        console.log(res)
        this.getData()
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.management {
  .content {
    .title {
      padding: 20px 0;
      font-size: 26px;
      font-weight: 900;
      text-align: left;
      color: #333333;
    }

    .role-list {
      display: flex;
      margin-top: 20px;

      .role-item {
        margin-top: 20px;
        display: flex;
        align-items: center;
        .name{
          border: 1px solid #eee;
          padding: 6px 20px;
          border-radius: 10px;
        }
        .add-input {
          width: 280px;
          height: 38px;
          background: #fbfcfe;
          padding: 0 10px;
          border: 1px solid #eaeaea;
          border-radius: 10px;
        }

        .icon {
          width: 30px;
          height: 30px;
          border-radius: 50%;

          img {
            width: 100%;
            height: 100%;
            border-radius: 50%;
          }
        }

        .name {
          width: 80px;
          margin: 0 10px;
          color: #333333;
          line-height: 20px;
        }

        .detail {
          padding: 10px;
          background: #fbfcfe;
          border: 1px solid #eaeaea;
          border-radius: 10px;
        }
      }
    }

    .route-list {
      display: flex;
      .route-item {
        margin: 10px;
        border-radius: 10px;
        border: 1px solid #eee;
        padding: 6px 20px;
      }

    }
    .add-item{
      padding-top: 30px;
      input {
        width: 280px;
        height: 38px;
        margin-right: 20px;
        padding: 0 20px;
        background: #fbfcfe;
        border: 1px solid #eaeaea;
        border-radius: 10px;
      }
    }
    .manager-list {
      .manager-item {
        display: flex;
        align-items: center;
        input {
          width: 280px;
          height: 38px;
          margin-left: 20px;
          padding: 0 20px;
          background: #fbfcfe;
          border: 1px solid #eaeaea;
          border-radius: 10px;
        }
        .name{
          margin: 10px 10px;
          width: 100px;
          border: 1px solid #eee;
          text-align: center;
          padding: 10px;
          border-radius: 10px;
        }
        .icon {
          width: 30px;
          height: 30px;
        }
        .confirm-btn{
          margin: 0 20px;
        }
        .privileges{
          display: flex;
          align-items: center;
          .item{
            border: 1px solid #eee;
            padding: 6px 20px;
            border-radius: 10px;
            margin: 10px;
          }
        }
      }
    }

    .confirm-btn {
      margin-top: 30px;
      width: 80px;
      height: 32px;
      background: linear-gradient(90deg, #12c2e9 0%, #c471ed 64%, #f64f59 100%);
      border-radius: 10px;
      box-shadow: 0px 3px 6px 0px rgba(128, 4, 149, 0.30);
      color: #fff;
      text-align: center;
      line-height: 32px;
      cursor: pointer;
    }
  }
}
</style>
