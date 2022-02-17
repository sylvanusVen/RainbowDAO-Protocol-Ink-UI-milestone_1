<template>
<div class="nearHackathon">
  <header>
    <div class="header-box">
      <img class="logo" src="../assets/nearImgs/logo.png" alt="">
      <div class="icon-box">
        <a class="icon" href="https://t.me/RainbowDAO" target="_blank">
          <img src="../assets/nearImgs/telegram@2x.png" alt="">
        </a>
        <a class="icon" href="https://twitter.com/RainbowcityDAO" target="_blank">
          <img src="../assets/nearImgs/twitter@2x.png" alt="">
        </a>
        <a class="icon" href="https://medium.com/rainbowcity" target="_blank">
          <img src="../assets/nearImgs/medium@2x.png" alt="">
        </a>
        <a class="icon" href="https://discord.gg/vbnvFEeYRr" target="_blank">
          <img src="../assets/nearImgs/Discord@2x.png" alt="">
        </a>
        <a class="icon" href="https://github.com/RainbowDAO" target="_blank">
          <img src="../assets/nearImgs/github@2x.png" alt="">
        </a>
      </div>
    </div>
  </header>
  <div class="content">
    <div class="title-box">
      <img src="../assets/nearImgs/title_icon.png" alt="">
    </div>
    <div class="link-list">
      <a href="">
        <img src="../assets/nearImgs/1@2x.png" alt="">
        <span class="title">
                1 - Rainbow DAO Factory
            </span>
      </a>
      <a href="">
        <img src="../assets/nearImgs/2@2x.png" alt="">
        <span class="title">
             2 - DAO NFT Bank System
            </span>
      </a>
      <a href="">
        <img src="../assets/nearImgs/3@2x.png" alt="">
        <span class="title">
           3 - DAO Multi-Signature Committee
            </span>
      </a>
      <a href="">
        <img src="../assets/nearImgs/4@2x.png" alt="">
        <span class="title">
 4 - DAO Multi-Signature Wallet System
            </span>
      </a>
      <a href="">
        <img src="../assets/nearImgs/5@2x.png" alt="">
        <span class="title">
             5 - DAO ERC20 Factory System
            </span>
      </a>
      <a href="">
        <img src="../assets/nearImgs/6@2x.png" alt="">
        <span class="title">
           6 - DAO Locked Vault System
            </span>
      </a>
      <a href="">
        <img src="../assets/nearImgs/7@2x.png" alt="">
        <span class="title">
             7 - DAO Fixed Exchange System
            </span>
      </a>
      <a href="">
        <img src="../assets/nearImgs/8@2x.png" alt="">
        <span class="title">
            8 - DAO Airdrop System
            </span>
      </a>
      <a href="">
        <img src="../assets/nearImgs/9@2x.png" alt="">
        <span class="title">
           9 - DAO Exchange Pool System
            </span>
      </a>
      <a href="">
        <img src="../assets/nearImgs/10@2x.png" alt="">
        <span class="title">
          10 - Bit Civilization
            </span>
      </a>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: "nearHackathon"
}
</script>

<style scoped>

.nearHackathon {
  background: url("../assets/nearImgs/bg.png") no-repeat;
  background-size: 100% 100%;

}

.nearHackathon::-webkit-scrollbar-thumb {
  border-radius: 10px;
  box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
  background: #535353;
}

.nearHackathon::-webkit-scrollbar {
  width: 6px;
  height: 1px;
}

.nearHackathon::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  background: #ededed;
}

header {
  width: 100%;
  height: 60px;
}

.content {
  width: 1200px;
  margin: 0 auto;
}

.link-list {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

}

.link-list a {
  width: 220px;
  height: 190px;
  background: rgba(20, 20, 35, 0.80);
  border: 1px solid;
  border-radius: 5px;
  box-shadow: 0px 0px 20px 0px rgba(219, 31, 126, 0.50);
  margin-top: 20px;
  padding: 20px 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.link-list a:hover {
  border-image: linear-gradient(90deg, #12c2e9, #c471ed 55%, #f64f59) 1 1;
}

.link-list a img {
  width: 80px;
  height: 80px;
}

.link-list a .title {
  text-align: center;
  color: #ffffff;
  line-height: 30px;
  margin-top: 10px;
}

.header-box {
  width: 1200px;
  height: 60px;
  margin: 0 auto;
  align-items: center;
  display: flex;
  justify-content: space-between;
}

.icon-box {
  display: flex;
  width: 300px;
  justify-content: space-between;

}

.icon-box a img {
  width: 30px;
  height: 30px;
}

.content {
  padding-bottom: 160px;
}

.content .title-box {
  display: flex;
  justify-content: center;
  padding: 30px 0;
}

.content .title-box img {
  width: 700px;
  height: 160px;
}

.logo {
  width: 185px;
  height: 26px;
}
</style>
