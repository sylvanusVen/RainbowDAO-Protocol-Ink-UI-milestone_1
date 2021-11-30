<template>
  <div id="home">
    <div id="resize-box">
      <div class="earth"/>

      <div class="ships">
        <div class="airship1">
          <img class="airship-img" src="./static/imgs/airship1.png" alt="">
          <img class="airship-img active" src="./static/imgs/airship1Active.png" alt="">
          <img class="airship-name" src="./assets/imgs/rainbow_college.png" alt="">
        </div>
        <div class="airship2">
          <img class="airship-img" src="./static/imgs/airship2.png" alt="">
          <img class="airship-img active" src="./static/imgs/airship2Active.png" alt="">
          <img class="airship-name" src="./assets/imgs/rainbow_island.png" alt="">
        </div>
        <div class="airship3">
          <img class="airship-img" src="./static/imgs/airship3.png" alt="">
          <img class="airship-img active" src="./static/imgs/airship3Active.png" alt="">
          <img class="airship-name" src="./assets/imgs/r&d_center.png" alt="">
        </div>
        <div class="airshipMain">
          <img class="airshipMain-img" src="./static/imgs/airshipMain.png" alt="">
          <div class="city-box">
            <div class="city1">
              <img class="city-img" src="./assets/imgs/city1.png" alt="">
              <img class="city-name" src="./assets/imgs/treasury.png" alt="">
              <img class="city-line" src="./assets/imgs/treeasury_line.png" alt="">
            </div>
            <img src="" alt="">
            <div class="city2">
              <img class="city-img" src="./assets/imgs/city2.png" alt="">
              <img class="city-name" src="./assets/imgs/bourse.png" alt="">
              <img class="city-line" src="./assets/imgs/bourse_line.png" alt="">
            </div>
            <div class="city3">
              <img class="city-img" src="./assets/imgs/city3.png" alt="">
              <img class="city-name" src="./assets/imgs/central_bank.png" alt="">
              <img class="city-line" src="./assets/imgs/cabinet_line.png" alt="">
            </div>
            <div class="city4">
              <img class="city-img" src="./assets/imgs/city4.png" alt="">
              <img class="city-name" src="./assets/imgs/cabinet.png" alt="">
              <img class="city-line" src="./assets/imgs/cabinet_line.png" alt="">
            </div>
            <div class="city5">
              <img class="city-img" src="./assets/imgs/city5.png" alt="">
              <img class="city-name" src="./assets/imgs/centralCourt.png" alt="">
              <img class="city-line" src="./assets/imgs/foundation_line.png" alt="">
            </div>
            <div class="city6">
              <img class="city-img" src="./assets/imgs/city6.png" alt="">
              <img class="city-name" src="./assets/imgs/foundation.png" alt="">
              <img class="city-line" src="./assets/imgs/foundation_line.png" alt="">
            </div>
            <div class="city7">
              <img class="city-img" src="./assets/imgs/city7.png" alt="">
              <img class="city-name" src="./assets/imgs/rainbow_insurance.png" alt="">
              <img class="city-line" src="./assets/imgs/rainbow_bank_line.png" alt="">
            </div>
            <div class="city8">
              <img class="city-img" src="./assets/imgs/city8.png" alt="">
              <img class="city-name" src="./assets/imgs/cultural_center.png" alt="">
              <img class="city-line" src="./assets/imgs/cultural_center_line.png" alt="">
            </div>
            <div class="city9">
              <img class="city-img" src="./assets/imgs/city9.png" alt="">
              <img class="city-name" src="./assets/imgs/VIPCenter.png" alt="">
            </div>
            <div class="city10">
              <img class="city-img" src="./assets/imgs/city10.png" alt="">
              <img class="city-name" src="./assets/imgs/tarmac.png" alt="">
              <img class="city-line" src="./assets/imgs/tarmac_line.png" alt="">
            </div>
            <div class="city11">
              <img class="city-img" src="./assets/imgs/city11.png" alt="">
              <img class="city-name" src="./assets/imgs/btc_square.png" alt="">
            </div>
            <div class="city12">
              <img class="city-img" src="./assets/imgs/city12.png" alt="">
              <img class="city-name" src="./assets/imgs/town_hall.png" alt="">
              <img class="city-line" src="./assets/imgs/town_hall_line.png" alt="">
            </div>
            <div class="city13">
              <img class="city-img" src="./assets/imgs/city13.png" alt="">
              <img class="city-name" src="./assets/imgs/rainbow_bank.png" alt="">
              <img class="city-line" src="./assets/imgs/rainbow_bank_line.png" alt="">
            </div>
            <div class="city14">
              <img class="city-img" src="./assets/imgs/city14.png" alt="">
              <img class="city-name" src="./assets/imgs/industrial_center.png" alt="">
              <img class="city-line" src="./assets/imgs/cabinet_line.png" alt="">
            </div>
            <div class="rainbow">
              <img class="city-img" src="./assets/imgs/rainbow.png" alt="">
            </div>
          </div>
        </div>
      </div>

      <stars/>
      <div class="bg-active">

      </div>
      <div class="masking"></div>
      <div class="content-box">
        <img :src="logoImg" alt="logo" class="logo">
        <div class="content">
          <div v-if="!isShow" class="wait-box">
            <div class="name">
              {{ name }}
            </div>
            IS DEVELOPING<br>
            COMING SOON!
          </div>
          <div class="title" v-if="isShow">
            <img class="title-img" src="./assets/imgs/ddnc.png" alt="">
          </div>
          <div class="intro" v-if="isShow">
            <img class="intro-title-img" src="./assets/imgs/DAOCONTROLVALUE.png" alt="">
            <div class="intro-content">
              RainbowDAO Protocol is developed under the authorization of the Rainbowcity Foundation, focusing on the creation of web3 basic component. Anyone can create and manage their own DAO organization through RainbowDAO Protocol, including independent DAO,alliance DAO, parent DAO and child DAO.Any DAO can also create a management department within the DAO to achieve multi-level management of the organization.
            </div>
          </div>
          <div class="link">
            <a href="https://t.me/RainbowDAO" target="_blank">
              <img class="link-img" src="./assets/imgs/telegram.png" alt="">
            </a>
            <a href="https://twitter.com/RainbowcityDAO" target="_blank">
              <img class="link-img" src="./assets/imgs/twitter.png" alt="">
            </a>
            <a href="https://medium.com/rainbowcity" target="_blank">
              <img class="link-img" src="./assets/imgs/medium.png" alt="">
            </a>
            <a href="https://discord.gg/vbnvFEeYRr" target="_blank">
              <img class="link-img" src="./assets/imgs/Discord.png" alt="">
            </a>
            <a href="https://github.com/RainbowDAO" target="_blank">
              <img class="link-img" src="./assets/imgs/github.png" alt="">
            </a>
          </div>
          <div class="building" v-if="isShow" @click="$router.push('/index')">
            ENTER
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import stars from "@/components/stars";
import rainbowcity from "@/assets/imgs/RainbowCityLogo.png"
import rainbowswap from "@/assets/imgs/RainbowSwapLogo.png"
import rainbowdao from "@/assets/imgs/RainbowDAOLogo.png"
import rainbowbank from "@/assets/imgs/RainbowBankLogo.png"
import rainbowmint from "@/assets/imgs/RainbowMintLogo.png"
import rainbowbridge from "@/assets/imgs/RainbowBridgeLogo.png"
import rainbowisland from "@/assets/imgs/RainbowIslandLogo.png"
import rainbowchain from "@/assets/imgs/RainbowChainLogo.png"

let imgList = {
  "rainbowcity": rainbowcity,
  "rainbowchain": rainbowchain,
  "rainbowdao": rainbowdao,
  "rainbowbank": rainbowbank,
  "rainbowmint": rainbowmint,
  "rainbowbridge": rainbowbridge,
  "rainbowisland": rainbowisland,
  "rainbowswap": rainbowswap,
}

export default {
  name: 'home',
  components: {
    stars
  },
  data() {
    return {
      screenWidth: document.documentElement.clientWidth,
      isShow: true,
      name: "",
      logoImg: "",
    }
  },
  watch: {
    'screenWidth': function (val) {
      let oIframe = document.getElementById("resize-box");
      oIframe.style.zoom = `${val / 1620}`;
    },

  },
  created() {
    this.name = "rainbowdao"
    this.logoImg = imgList[this.name]
  },
  mounted() {
    let _this = this;
    let screenWidth = document.documentElement.clientWidth;
    let oIframe = document.getElementById("resize-box");
    oIframe.style.zoom = `${screenWidth / 1620}`;

    window.onresize = function () {
      _this.screenWidth = document.documentElement.clientWidth;
    };

  }
}
</script>

<style lang="scss">
/* 动画 */
@keyframes fadeInOut {
  0% {
    opacity: 0;
  }
  70% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}

@keyframes moveShip {
  0% {
    transform: translate3d(0, 0, 0);
  }

  50% {
    transform: translate3d(1px, 10px, 0);
  }

  100% {
    transform: translate3d(0, 0, 0);
  }
}

@keyframes move {
  0% {
    transform: translate3d(0, 0, 0);
  }

  50% {
    transform: translate3d(-6px, -30px, 0);
  }

  100% {
    transform: translate3d(0, 0, 0);
  }
}

@keyframes planetRotate {
  0% {
    background-position: 0% center;
  }
  100% {
    background-position: -200% center;
  }
}

#home {
  background: url("static/imgs/bg.jpg");
  background-size: cover;
  height: 100%;
  width: 100%;
  user-select: none;
  position: relative;
  overflow: hidden;

  .earth {
    position: fixed;
    height: 320px;
    width: 320px;
    top: -40px;
    left: -70px;
    border-radius: 50%;
    animation: planetRotate 40s linear infinite;
    transform: rotate(37.3deg);
    background: url("static/imgs/earth.jpg");
    background-size: 200% 100%;
    box-shadow: inset 6px 0px 12px -2px rgba(255, 255, 255, 0.2), inset -30px 0px 50px 0px black, -5px 0px 10px -4px #b3caff;
  }

  .ships {
    position: fixed;
    z-index: 10;
    width: 100%;
    height: 100%;

    .airship1, .airship2, .airship3 {
      z-index: 100;
      animation: moveShip 10s infinite;

      .airship-name {
        transform: scale(0.8);
        transition: opacity 0.2s;
        opacity: 0;
        position: absolute;
        margin-top: -30px;
        margin-left: -70px;
      }

      .active {
        opacity: 0;
      }

      .airship-img.active:hover {
        opacity: 1;
      }

      &:hover .airship-name {
        opacity: 1;
      }
    }

    .airship1, .airship2, .airship3, .airshipMain {
      position: absolute;

      .airship-img {
        position: absolute;
        width: 100%;
      }
    }

    .airship1 {
      width: 100px;
      top: 160px;
      left: 680px;

      .airship-name {
        margin-left: -50px !important;
      }

      .airship1-img {
        width: 100%;
      }
    }

    .airship2 {
      width: 130px;
      top: 530px;
      left: 600px;

      .airship-name {
        margin-left: -40px !important;
      }
    }

    .airship3 {
      width: 70px;
      top: 60px;
      left: 1460px;

      .airship-img {
        width: 100%;
      }
    }

    .airshipMain {
      width: 900px;
      top: 150px;
      left: 690px;
      animation: move 10s infinite;

      .airshipMain-img {
        width: 100%;
        height: 100%;
      }

      .city-box {
        position: relative;
        top: -690px;

        .city1, .city2, .city3, .city4, .city5, .city6, .city7, .city8, .city9, .city10, .city11, .city12, .city13, .city14, .rainbow {
          position: absolute;
          z-index: 100;

          .city-img {
            position: relative;
            opacity: 0;
            width: 100%;
          }

          .city-name {
            transform: scale(0.8);
            opacity: 0;
            position: absolute;
            margin-top: -65px;
            margin-left: -120px;
            transition: opacity 1s;
          }

          .city-line {
            opacity: 0;
            position: absolute;
            margin-top: -36px;
            margin-left: -44px;
            transition: opacity 0.5s;
          }

          //.city-img:hover + .city-name + .city-line, .city-img:hover + .city-name, .city-img:hover {
          //  opacity: 1 !important;
          //}

          &:not(.city9):hover .city-line, &:not(.city9):hover .city-name, &:not(.city9):hover .city-img {
            opacity: 1 !important;
          }
        }

        .city1 {
          width: 67px;
          top: 68px;
          left: 311px;

          .city-name {
            margin-top: -51px;
            margin-left: -240px;
          }

          .city-line {
            margin-top: -22px;
            margin-left: -134px;
          }
        }

        .city2 {
          width: 49px;
          top: 119px;
          left: 276px;

          .city-name {
            margin-top: -51px;
            margin-left: -230px;
          }

          .city-line {
            margin-top: -22px;
            margin-left: -114px;
          }
        }

        .city3 {
          width: 55px;
          top: 87px;
          left: 375px;

          .city-name {
            margin-top: -72px;
            margin-left: -150px;
          }

          .city-line {
            margin-top: -42px;
            margin-left: -64px;
          }
        }

        .city4 {
          width: 53px;
          top: 140px;
          left: 430px;

          .city-name {
            margin-top: -66px;
            margin-left: -150px;
          }

          .city-line {
            margin-top: -38px;
            margin-left: -62px;
          }
        }

        .city5 {
          width: 66px;
          top: 106px;
          left: 466px;

          .city-name {

            margin-left: -100px;
          }

          .city-line {
            margin-top: -36px;
            margin-left: -22px;
          }
        }

        .city6 {
          width: 78px;
          top: 47px;
          left: 536px;
        }

        .city7 {
          width: 54px;
          top: 105px;
          left: 592px;

          .city-name {
            margin-top: -44px;
            margin-left: -60px;
          }

          .city-line {
            margin-top: -16px;
            margin-left: -20px;
          }
        }

        .city8 {
          width: 68px;
          top: 234px;
          left: 446px;

          .city-img:hover + .city-name + .city-line, .city-img:hover + .city-name, .city-img:hover {
            opacity: 1 !important;
          }

          .city-name {
            margin-top: -20px;
            margin-left: -80px;
          }

          .city-line {
            margin-top: 10px;
          }
        }

        .city9 {
          position: absolute;
          width: 98px;
          top: 235px;
          left: 326px;

          .city-img:hover + .city-name + .city-line, .city-img:hover + .city-name, .city-img:hover {
            opacity: 1 !important;
          }

          .city-name {
            margin-top: -20px;
            margin-left: -156px;
          }

        }

        .city10 {
          width: 147px;
          top: 243px;
          left: 193px;

          .city-name {
            margin-top: 10px;
            margin-left: -280px;
          }

          .city-line {
            margin-top: 40px;
            margin-left: -170px;
          }
        }

        .city11 {
          width: 112px;
          top: 277px;
          left: 356px;

          .city-name {
            margin-top: 80px;
            margin-left: -160px;
          }
        }

        .city12 {
          width: 178px;
          top: 281px;
          left: 553px;

          .city-name {
            margin-top: -19px;
            margin-left: -80px;
          }

          .city-line {
            margin-top: 10px;
          }
        }

        .city13 {
          width: 60px;
          top: 174px;
          left: 622px;

          .city-name {
            margin-top: -20px;
            margin-left: -60px;
          }

          .city-line {
            margin-top: 10px;
            margin-left: -16px;
          }
        }

        .city14 {
          width: 60px;
          top: 227px;
          left: 233px;

          .city-name {
            margin-top: -82px;
            margin-left: -160px;
          }

          .city-line {
            margin-top: -50px;
            margin-left: -66px;
          }
        }

        .rainbow {
          width: 204px;
          top: 320px;
          left: 478px;
        }
      }
    }
  }

  .bg-active {
    width: 100%;
    height: 100%;
    position: fixed;
    z-index: 0;
    background-image: url("static/imgs/bg-active.png");
    background-size: cover;
    animation: fadeInOut 6s ease-in-out infinite;
  }

  .masking {
    width: 100%;
    height: 100%;
    position: fixed;
    z-index: 0;
    background-image: url("static/imgs/masking.png");
    background-size: cover;
  }

  .content-box {
    width: 660px;
    position: relative;
    z-index: 11;

    .wait-box {
      font-size: 46px;
      padding: 30px 0;
      text-transform: uppercase;
      line-height: 70px;
      font-family: Arial Black, Arial Black-Regular, serif;
      letter-spacing: 6px;
      font-weight: bold;
      text-shadow: 6px 0px 10px rgba(255, 255, 255, 0.3);
      background: linear-gradient(270deg, #45bcff 1%, #2ff1d2 100%);
      -webkit-background-clip: text;
      color: transparent;

      .name {
        font-size: 54px;
        background: linear-gradient(-30deg, #fd095a 0%, #fe9b86 99%);
        -webkit-background-clip: text;
        text-shadow: 6px 0px 10px rgba(255, 255, 255, 0.3);
        color: transparent;
      }
    }

    .logo {
      width: 120px;
      margin: 20px 0 0 60px;
    }

    .content {

      margin: 200px 0 0 60px;

      .title {
        margin-left: -10px;
        font-size: 30px;
        display: flex;
        align-items: center;
        font-weight: bold;
        width: 500px;
        justify-content: space-between;
        color: white;

        .title-img {
          margin-left: 12px;
          width: 750px;
        }
      }

      .intro {
        margin: 30px 0 0 4px;

        .intro-title-img {
          width: 660px;
        }

        .intro-content {
          width: 700px;
          font-size: 14px;
          font-weight: bold;
          line-height: 22px;
          margin-top: 40px;
          color: white;

          p {
            margin-top: 4px;
            font-size: 12px;
          }
        }
      }

      .link {
        margin-top: 40px;

        .link-img {
          width: 20px;
          margin-right: 10px;
        }
      }

      .building {
        margin-top: 30px;
        color: white;
        border-radius: 20px;
        cursor: pointer;
        padding: 10px 22px;
        width: 130px;
        text-align: center;
        font-size: 16px;
        background: linear-gradient(90deg, #12c2e9 0%, #c471ed 50%, #f64f59 100%);
      }
    }
  }
}
</style>
