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
          {{ item.name }}
        </div>
      </div>
      <div v-show="activeIndex==0" class="rainbow-list">
        <div class="list-item" @click="$router.push({name:'ProposalDetail',params:item})" v-for="(item, index) in proposalList" :key="index">
          <div class="index">
            {{ index +1}}
          </div>
          <div class="name-box">
            <div class="header-icon">
              <img src="../../assets/imgs/header-icon.png" alt="">
            </div>
            <div class="name">
              {{item.title}}
            </div>
          </div>
          <div class="item-content">
            <div class="content">
              <div class="item">
                <div class="name">desc</div>
                <div class="value">
                  {{ item.desc }}
                </div>
              </div>
              <div class="item">
                <div class="name">owner</div>
                <div class="value">
                  {{ item.owner }}
                </div>
              </div>
            </div>

            <div class="floor">
              <div class="stage">
                {{ item.state }}
              </div>
              <div class="date">
                block:{{ item.startBlock  }}~{{ item.endBlock}}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-show="activeIndex==1" class="rainbow-list">
        <div class="list-item" v-show="item.state=='Active'" @click="$router.push({name:'ProposalDetail',params:item})" v-for="(item, index) in proposalList" :key="index">
          <div class="index">
            {{ index +1}}
          </div>
          <div class="name-box">
            <div class="header-icon">
              <img src="../../assets/imgs/header-icon.png" alt="">
            </div>
            <div class="name">
              {{item.title}}
            </div>
          </div>
          <div class="item-content">
            <div class="content">
              <div class="item">
                <div class="name">desc</div>
                <div class="value">
                  {{ item.desc }}
                </div>
              </div>
              <div class="item">
                <div class="name">owner</div>
                <div class="value">
                  {{ item.owner }}
                </div>
              </div>
            </div>

            <div class="floor">
              <div class="stage">
                {{ item.state }}
              </div>
              <div class="date">
                {{ item.endBlock }}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-show="activeIndex==2" class="rainbow-list">
        <div class="list-item" v-show="item.state=='Pending'"@click="$router.push({name:'ProposalDetail',params:item})" v-for="(item, index) in proposalList" :key="index">
          <div class="index">
            {{ index + 1}}
          </div>
          <div class="name-box">
            <div class="header-icon">
              <img src="../../assets/imgs/header-icon.png" alt="">
            </div>
            <div class="name">
              {{item.title}}
            </div>
          </div>
          <div class="item-content">
            <div class="content">
              <div class="item">
                <div class="name">desc</div>
                <div class="value">
                  {{ item.desc }}
                </div>
              </div>
              <div class="item">
                <div class="name">owner</div>
                <div class="value">
                  {{ item.owner }}
                </div>
              </div>
            </div>

            <div class="floor">
              <div class="stage">
                {{ item.state }}
              </div>
              <div class="date">
                {{ item.endBlock }}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-show="activeIndex==3" class="rainbow-list">
        <div class="list-item" v-show="item.state=='Succeeded'" @click="$router.push({name:'ProposalDetail',params:item})" v-for="(item, index) in proposalList" :key="index">
          <div class="index">
            {{ index +1}}
          </div>
          <div class="name-box">
            <div class="header-icon">
              <img src="../../assets/imgs/header-icon.png" alt="">
            </div>
            <div class="name">
              {{item.title}}
            </div>
          </div>
          <div class="item-content">
            <div class="content">
              <div class="item">
                <div class="name">desc</div>
                <div class="value">
                  {{ item.desc }}
                </div>
              </div>
              <div class="item">
                <div class="name">owner</div>
                <div class="value">
                  {{ item.owner }}
                </div>
              </div>
            </div>

            <div class="floor">
              <div class="stage">
                {{ item.state }}
              </div>
              <div class="date">
                {{ item.endBlock }}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-show="activeIndex==4" class="rainbow-list">
        <div class="list-item" v-show="item.state=='Executed'" @click="$router.push({name:'ProposalDetail',params:item})" v-for="(item, index) in proposalList" :key="index">
          <div class="index">
            {{ index + 1}}
          </div>
          <div class="name-box">
            <div class="header-icon">
              <img src="../../assets/imgs/header-icon.png" alt="">
            </div>
            <div class="name">
              {{item.title}}
            </div>
          </div>
          <div class="item-content">
            <div class="content">
              <div class="item">
                <div class="name">desc</div>
                <div class="value">
                  {{ item.desc }}
                </div>
              </div>
              <div class="item">
                <div class="name">owner</div>
                <div class="value">
                  {{ item.owner }}
                </div>
              </div>
            </div>

            <div class="floor">
              <div class="stage">
                {{ item.state }}
              </div>
              <div class="date">
                {{ item.endBlock }}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-show="activeIndex==5" class="rainbow-list">
        <div class="list-item" v-show="item.state=='Canceled'" @click="$router.push({name:'ProposalDetail',params:item})" v-for="(item, index) in proposalList" :key="index">
          <div class="index">
            {{ index +1}}
          </div>
          <div class="name-box">
            <div class="header-icon">
              <img src="../../assets/imgs/header-icon.png" alt="">
            </div>
            <div class="name">
              {{item.title}}
            </div>
          </div>
          <div class="item-content">
            <div class="content">
              <div class="item">
                <div class="name">desc</div>
                <div class="value">
                  {{ item.desc }}
                </div>
              </div>
              <div class="item">
                <div class="name">owner</div>
                <div class="value">
                  {{ item.owner }}
                </div>
              </div>
            </div>

            <div class="floor">
              <div class="stage">
                {{ item.state }}
              </div>
              <div class="date">
                {{ item.endBlock }}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-show="activeIndex==6" class="rainbow-list">
        <div class="list-item" v-show="item.state=='Defeated'" @click="$router.push({name:'ProposalDetail',params:item})" v-for="(item, index) in proposalList" :key="index">
          <div class="index">
            {{ index + 1}}
          </div>
          <div class="name-box">
            <div class="header-icon">
              <img src="../../assets/imgs/header-icon.png" alt="">
            </div>
            <div class="name">
              {{item.title}}
            </div>
          </div>
          <div class="item-content">
            <div class="content">
              <div class="item">
                <div class="name">desc</div>
                <div class="value">
                  {{ item.desc }}
                </div>
              </div>
              <div class="item">
                <div class="name">owner</div>
                <div class="value">
                  {{ item.owner }}
                </div>
              </div>
            </div>

            <div class="floor">
              <div class="stage">
                {{ item.state }}
              </div>
              <div class="date">
                {{ item.endBlock }}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-show="activeIndex==7" class="rainbow-list">
        <div class="list-item" v-show="item.state=='Expired'" @click="$router.push({name:'ProposalDetail',params:item})" v-for="(item, index) in proposalList" :key="index">
          <div class="index">
            {{ index +1}}
          </div>
          <div class="name-box">
            <div class="header-icon">
              <img src="../../assets/imgs/header-icon.png" alt="">
            </div>
            <div class="name">
              {{item.title}}
            </div>
          </div>
          <div class="item-content">
            <div class="content">
              <div class="item">
                <div class="name">desc</div>
                <div class="value">
                  {{ item.desc }}
                </div>
              </div>
              <div class="item">
                <div class="name">owner</div>
                <div class="value">
                  {{ item.owner }}
                </div>
              </div>
            </div>

            <div class="floor">
              <div class="stage">
                {{ item.state }}
              </div>
              <div class="date">
                {{ item.endBlock }}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-show="activeIndex==8" class="rainbow-list">
        <div class="list-item" v-show="item.state=='Queued'" @click="$router.push({name:'ProposalDetail',params:item})" v-for="(item, index) in proposalList" :key="index">
          <div class="index">
            {{ index + 1}}
          </div>
          <div class="name-box">
            <div class="header-icon">
              <img src="../../assets/imgs/header-icon.png" alt="">
            </div>
            <div class="name">
              {{item.title}}
            </div>
          </div>
          <div class="item-content">
            <div class="content">
              <div class="item">
                <div class="name">desc</div>
                <div class="value">
                  {{ item.desc }}
                </div>
              </div>
              <div class="item">
                <div class="name">owner</div>
                <div class="value">
                  {{ item.owner }}
                </div>
              </div>
            </div>

            <div class="floor">
              <div class="stage">
                {{ item.state }}
              </div>
              <div class="date">
                {{ item.endBlock }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <pageFooter/>

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
        },
        {
          name: "Active",
        },
        {
          name: "Pending",
        },
        {
          name: "Succeeded",
        },
        {
          name: "Executed",
        },
        {
          name: "Canceled",
        },
        {
          name: "Defeated",
        },
        {
          name: "Expired",
        },
        {
          name: "Queued",
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
      this.$store.dispatch("proposal/listProposals").then((res)=>{
        res.forEach(async (item,index)=>{
          await this.$store.dispatch("proposal/state",item.proposalId).then(state=>{
            item.state= state
          })
          if(index==res.length-1){
            this.proposalList = res
          }
       })
      })

    },
    chooseNav() {

    }
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
          min-width: 100px;
          font-weight: bold;
          font-size: 18px;
          color: #6919BB;
        }
      }
      .item-content{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        .content{
          .item{
            display: flex;
            justify-content: space-between;
            align-items: center;
            .name{
              line-height: 30px;
              min-width:100px;
              font-weight: bold;
            }
            .value{
              max-width: 700px;
              overflow: hidden;
              color: #333;
            }
          }
        }
        .floor{
          display: flex;
          align-items: center;
          color: rgba(255,174,37,0.80);
          .stage{
            margin-right: 30px;
            width: 120px;
            height: 24px;
            text-align: center;
            color: #333;
            font-weight: bold;
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
