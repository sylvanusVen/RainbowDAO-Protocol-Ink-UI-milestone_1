<template>
  <div class="proposal">
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
        <div class="list-item">
          <div class="index">
            01
          </div>
          <div class="name-box">
            <div class="header-icon">
              <img src="../assets/imgs/header-icon.png" alt="">
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
  }
}
</script>

<style lang="scss" scoped>
.proposal {
  .rainbow-panel {
    .nav-list {
      display: flex;
      margin-left: -10px;
      padding: 10px 0;

      .nav-item {
        padding: 6px 10px;
        font-size: 12px;
        font-family: Arial, Arial-Black;
        font-weight: 900;
        text-align: left;
        color: #333333;
        line-height: 17px;

        &.active {
          border-bottom: 2px solid #db1f7e;
          color: #DB1F7E;
        }
      }
    }

    .rainbow-list {
      .list-item {
        width: 1060px;
        padding: 12px;
        background: #fbfcfe;
        border: 1px solid #eaeaea;
        border-radius: 10px;
        display: flex;
        align-items: center;

        .index {
          width: 30px;
          height: 30px;
          background: #f0effe;
          border-radius: 5px;
          font-size: 14px;
          text-align: center;
          line-height: 30px;
          font-family: PingFangSC, PingFangSC-Semibold;
          font-weight: 600;
          color: #6919bb;
        }

        .name-box {
          margin-left: 10px;
          padding-right: 10px;
          border-right: 1px solid #eaeaea;
          display: flex;
          align-items: center;

          .header-icon {
            width: 30px;
            height: 30px;

            img {
              width: 100%;
              height: 100%;
            }
          }

          .name {
            color: #6919bb;
            font-size: 14px;
            font-weight: bold;
            line-height: 20px;
          }
        }

        .item-content {
          margin-left: 10px;
          .content{
            font-size: 16px;
            font-family: PingFangSC, PingFangSC-Semibold;
            font-weight: 600;
            text-align: left;
            color: #333333;
            line-height: 22px;
          }
          .floor {
            display: flex;
            align-items: center;
            color: #ffae25;
            font-size: 12px;
            margin-top: 10px;
            .stage {
              width: 120px;
              height: 24px;
              background: rgba(255, 174, 37, 0.20);
              border: 1px solid rgba(255, 174, 37, 0.50);
              border-radius: 5px;
              text-align: center;
              line-height: 24px;
            }
            .date {
              margin-left: 10px;
            }
          }
        }
      }
    }
  }
}
</style>
