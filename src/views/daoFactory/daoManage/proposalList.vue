<template>
  <div class="proposal-list-box">
    <div class="proposal-nav">
      <div class="nav-item" @click="chooseNav(item);activeIndex= item.name" :class="{'active':activeIndex == item.name}"
           v-for="(item, index) in navList" :key="index">
        {{ item.name }}
      </div>
      <div class="intiate">
        <div class="rainbow-btn" @click="intiate()">
          INITIATE
        </div>
      </div>
    </div>
    <div class="proposal-list">
      <div class="list-item"
           v-show="item.state==activeIndex || activeIndex=='ALL'"
           @click="$router.push({name:'daoProposalDetail',params:{item:item,address:address,vault:vault,coinAddress:coinAddress}})"
           v-for="(item, index) in proposalList" :key="index">
        <div class="index">
          {{ index + 1 }}
        </div>
        <div class="name-box">
          <div class="header-icon">
            <img src="../../../assets/imgs/header-icon.png" alt="">
          </div>
          <div class="name">
            {{ item.title }}
          </div>
        </div>
        <div class="item-content">
          <div class="content">
            <div class="item">
              <div class="name">endBlock</div>
              <div class="value">
                {{ item.endBlock }} (blocks)
              </div>
            </div>
            <div class="item">
              <div class="name">description</div>
              <div class="value">
                {{ item.desc }}
              </div>
            </div>

            <div class="item">
              <div class="name">publicityDelay</div>
              <div class="value">
                {{ item.publicityDelay }} (blocks)
              </div>
            </div>
          </div>
          <div class="floor">
            <div class="stage">
              {{ item.state }}
            </div>
            <div class="date">
              block:{{ parseInt(item.endBlock.replace(',','')) - parseInt(item.publicityDelay.replace(',','') )}}~{{ item.endBlock.replace(',','') }}
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="nodata" v-show="!proposalList || proposalList.length==0">
      No Data
    </div>
  </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "proposalList",
  props: ["proposalList", "vault", "coinAddress"],
  data() {
    return {
      activeIndex: "ALL",
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
          name: "Queued"
        }
      ]
    }
  },
  computed: {
    ...mapGetters(['account', 'isConnected'])
  },
  created() {
    console.log(this.proposalList)
  },
  methods: {
    intiate(){
      this.$router.push({name:'createDaoProposal'})
    },
    chooseNav() {

    },

  }
}
</script>

<style lang="scss" scoped>
.proposal-list-box {
  .proposal-nav {
    display: flex;
    margin: 20px 20px;
    position: relative;
    .nav-item {
      padding: 10px 20px;
      color: #333333;
      font-weight: bold;
      cursor: pointer;
      user-select: none;
      &.active {
        border: 1px solid #f96aaf;
        color: #DB1F7E;
      }
    }
    .intiate{
      right: 20px;
      position: absolute;
      .rainbow-btn{
        width: 100px;
        height: 36px;
        line-height: 36px;
        margin: 0;
      }
    }
  }

  .proposal-list {
    padding: 20px;

    .list-item {
      display: flex;
      padding: 20px;
      align-items: center;
      cursor: pointer;
      margin-top: 30px;
      border: 1px solid #eaeaea;

      .name-box {
        display: flex;
        align-items: center;
        padding: 0 20px;

        .name {
          min-width: 100px;
          font-weight: bold;
          font-size: 18px;
          color: #6919BB;
        }
      }

      .item-content {
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        .content {
          .item {
            min-width: 300px;
            display: flex;
            justify-content: space-between;
            align-items: center;

            .name {
              line-height: 30px;
              min-width: 100px;
              font-weight: bold;
            }

            .value {
              max-width: 700px;
              overflow: hidden;
              color: #333;
            }
          }
        }

        .floor {
          display: flex;
          align-items: center;
          color: rgba(255, 174, 37, 0.80);
          justify-content: space-between;
          .stage {
            width: 120px;
            height: 24px;
            text-align: center;
            font-weight: bold;
            line-height: 24px;
            background: rgba(255, 174, 37, 0.20);
            border: 1px solid rgba(255, 174, 37, 0.50);
            border-radius: 5px;
          }
        }
      }
    }
  }
}
</style>
