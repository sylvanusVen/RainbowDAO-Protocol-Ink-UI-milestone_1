<template>
  <div class="daoManage">
    <dao-nav></dao-nav>
    <div class="dao-manage-content">
      <div class="dao-finance-header">
        <div class="dao-logo">
          <img src="" alt="logo">
        </div>
        <div class="dao-info">
          <div class="dao-name">
            RainbowDao
          </div>
          <div class="dao-info-detail">
            <div class="dao-link">
              https://Rainbowdao.io/
            </div>
            <div class="dao-member">
              1,000 Members
            </div>
          </div>
          <div class="dao-intro">
            <span>Introduction:</span>
            This is a DAO
          </div>
        </div>
        <div class="rainbow-button">
          JOIN
        </div>
      </div>
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
        </div>
      </div>
    </div>
    <dao-footer></dao-footer>
  </div>
</template>

<script>
export default {
  name: "daoManage",
  data(){
    return{
      activeNavIndex:0
    }
  }
}
</script>

<style lang="scss" scoped>
.daoManage {
  .dao-manage-content{
    margin-top: -90px;
    .dao-finance-header {
      position: relative;
      display: flex;
      align-items: center;
      z-index: 1;
      width: 1420px;
      height: 180px;
      background: #ffffff;
      border-radius: 20px;
      padding: 40px;
      margin: 0px auto 20px;
      box-shadow: 0px 6px 20px 0px rgba(0,0,0,0.05);
      .dao-logo{
        width: 60px;
        height: 60px;
        img{
          width: 100%;
        }
      }
      .dao-info{
        .dao-name{
          font-size: 24px;
          font-weight: 700;
          color: #333333;
          line-height: 28px;
        }
        .dao-info-detail{
          display: flex;
          margin: 10px 0;
          div{
            height: 30px;
            background: #f4dcf2;
            border: 1px solid rgba(255,31,132,0.30);
            border-radius: 5px;
            padding: 0 20px;
            line-height: 30px;
            color: #f96aaf;
          }
          .dao-member{
            margin-left: 10px;
          }
        }
        .dao-intro{
          span{
            color: #999;
          }
        }
      }
      .rainbow-button{
        position: absolute;
        right: 40px;
        width: 120px;
        height: 50px;

      }
    }
    .dao-manage-content-box{
      width: 1420px;
      margin: 10px auto;
      background: #fff;
      border-radius: 20px;
      padding-bottom: 20px;
      .box-nav{
        display: flex;
        padding: 0 20px;
        border-bottom: 1px solid #eee;
        .item{
          user-select: none;
          width: 150px;
          height: 60px;
          line-height: 60px;
          text-align: center;
          cursor: pointer;
          &.active{
            color: #F96AAF;
            border-bottom: 1px solid #F96AAF;
          }
        }
      }
    }
  }

}
</style>
