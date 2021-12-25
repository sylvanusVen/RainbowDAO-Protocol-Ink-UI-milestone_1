<template>
  <div class="Hackathon">

    <div class="title">
      RainbowDAO
    </div>

    <div class="sub-title">
      Test version
    </div>
    <div class="list">
      <div @click="$router.push({name:'mintToken'})" class="item" >
        <div class="icon">
          <img src="../assets/imgs/hack_icon2.png" alt="">
        </div>
        <div class="name">
          Token Mint
        </div>
      </div>
      <div  @click="$router.push({name:'multiSignPanel'})" class="item" target="_blank">
        <div class="icon">
          <img src="../assets/imgs/hack_icon3.png" alt="">
        </div>
        <div class="name">
          MultiSign Wallet
        </div>
      </div>
      <div @click="$router.push({name:'management'})" class="item" >
        <div class="icon">
          <img src="../assets/imgs/hack_icon4.png" alt="">
        </div>
        <div class="name">
          Protocol Management
        </div>
      </div>
      <div class="item" >
        <div class="icon">
          <img src="../assets/imgs/hack_icon1.png" alt="">
        </div>
        <div class="name">
          DAO Factory
        </div>
      </div>
    </div>
    <div class="footer">
      <div class="link">
        <a href="https://t.me/RainbowDAO" target="_blank">
          <img class="link-img" src="../assets/imgs/telegram.png" alt="">
        </a>
        <a href="https://twitter.com/RainbowcityDAO" target="_blank">
          <img class="link-img" src="../assets/imgs/twitter.png" alt="">
        </a>
        <a href="https://medium.com/rainbowcity" target="_blank">
          <img class="link-img" src="../assets/imgs/medium.png" alt="">
        </a>
        <a href="https://discord.gg/vbnvFEeYRr" target="_blank">
          <img class="link-img" src="../assets/imgs/Discord.png" alt="">
        </a>
        <a href="https://github.com/RainbowDAO" target="_blank">
          <img class="link-img" src="../assets/imgs/github.png" alt="">
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Hackathon"
}
</script>

<style lang="scss" scoped>
.Hackathon {
  width: 100vw;
  min-height: 600px;
  min-width: 1100px;
  height: 100vh;
  background: url("../static/imgs/hk_bg.png");
  background-size: 100% 100%;

  .logo-box {
    cursor: pointer;
    padding: 20px;
    text-align: center;

    img {
      width: 210px;
    }
  }

  .title {
    text-align: center;
    font-size: 90px;
    font-weight: bold;
    color: #ffffff;
    line-height: 150px;
  }

  .sub-title {
    font-size: 36px;
    font-weight: bold;
    text-align: center;
    color: #ff1d84;
    line-height: 60px;
  }

  .list {
    display: flex;
    flex-wrap: wrap;
    width: 1000px;
    margin: 20px auto;
    justify-content: space-between;

    .item {
      margin-top: 20px;
      width: 460px;
      padding: 20px;
      height: 150px;
      background: rgba(255, 255, 255, 0.20);
      border: 1px solid;
      border-image: linear-gradient(90deg, #12c2e9, #c471ed 55%, #f64f59) 1 1;
      display: flex;
      align-items: center;
      cursor: pointer;

      &:hover {
        box-shadow: 0px 0px 20px 3px rgba(218, 0, 127, 0.70);

        .name {
          color: #FF1D84;
        }
      }

      .icon {
        img {
          width: 60px;
          height: 60px;
        }
      }

      .name {
        margin-left: 10px;
        font-size: 28px;
        font-weight: 400;
        text-align: left;
        color: #ffffff;
        line-height: 36px;
      }
    }
  }

  .footer {
    text-align: center;

    .link {
      margin-top: 40px;

      .link-img {
        width: 24px;
        margin-right: 10px;
      }
    }
  }
}
</style>
