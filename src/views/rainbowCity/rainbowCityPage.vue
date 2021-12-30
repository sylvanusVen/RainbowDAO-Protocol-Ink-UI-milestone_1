<template>
  <div class="rainbow-city" @mousemove="titleOnMove">

    <div class="z-box">
      <div class="rainbow-city-bg">
        <div class="city-mask"/>

        <div class="z-box">

          <div class="header-title-box">
            <div class="header-title">
              <div class="img-box">
                <div class="css-fizzy">
                  <div class="text-effect">
                    <div class="title-item">DAO</div>
                    <span>+</span>
                    <div class="title-item">DeFi</div>
                    <span>+</span>
                    <div class="title-item">NFT</div>
                    <span>+</span>
                    <div class="title-item">CC</div>
                  </div>
                </div>
              </div>
              <div class="tip">
                <img class="tip-img" src="../../assets/imgs/dao_control_value.png" alt="">
              </div>
              <div class="tip2">
                BIT CIVILIZATION
              </div>
            </div>
          </div>

          <div class="rainbow-protocol">
            <div class="protocol-title-box">
              <div class="protocol-title part-title-l animate__animated">
                RAINBOW CITY <br> TECHNOLOGY ARCHITECTURE IDEA
              </div>
            </div>

            <img class="protocol-line" src="../../assets/imgs/home_line.png" alt="">
            <div style="position: relative;z-index:2">
              <div class="protocol-top">
                <div class="lightning-network">
                  Lightning Network
                </div>
                <div class="otherY">
                  Other
                </div>
              </div>
              <div class="protocol-left">
                <div class="l2">
                  L2
                </div>
                <div class="sidechains">
                  Sidechains
                </div>
                <div class="zk-rollup">
                  ZK Rollup
                </div>
                <div class="validium">
                  Validium
                </div>
                <div class="optimistic">
                  Optimistic
                </div>
                <div class="other">
                  Other
                </div>

                <div class="matic">
                  <img src="../../assets/imgs/matic-icon.png" alt="">
                  <span> Matic</span>
                </div>
                <div class="binance">
                  <img src="../../assets/imgs/binance-icon.png" alt="">
                  <span>BSC</span>
                </div>
                <div class="other2">
                  Others
                </div>
              </div>
              <div class="protocol-center">
                <div class="protocol-icon">
                  <img src="../../assets/imgs/rainbow_protocol.png" alt="">
                </div>
                <div class="btc-icon">
                  <img src="../../assets/imgs/btc_icon.png" alt="">
                </div>
                <div class="dot-icon">
                  <img src="../../assets/imgs/Dot_coin.png" alt="">
                </div>
                <div class="eth-icon">
                  <img src="../../assets/imgs/eth_home.png" alt="">
                </div>
                <div class="rainbow-icon">
                  <img src="../../assets/imgs/R_home.png" alt="">
                </div>
                <div class="bridge1">
                  Rainbow Bridge
                </div>
                <div class="bridge2">
                  Rainbow Bridge
                </div>
                <div class="bridge3">
                  Rainbow Bridge
                </div>
                <div class="bridge4">
                  Rainbow Bridge
                </div>
              </div>
              <div class="protocol-right">
                <div class="kusama">
                  Kusama
                  <div class="rainbowdao-line">
                    <img src="../../assets/imgs/rainbowdao_line.png" alt="">
                  </div>
                  <div class="rainbowdao">
                    Rainbow <br> DAO <br> Parachain
                  </div>
                </div>
                <div class="parachain">
                  Parachain
                </div>
                <div class="parachain2">
                  Rainbow <br> DAO <br> Parachain
                </div>
                <div class="parachain3">
                  Parachain
                </div>
                <div class="otherCircle">
                  Other
                </div>
              </div>
              <div class="protocol-bottom">
                <div class="token-economy">
                  Token Economy
                </div>
                <div class="community-governance">
                  Community Governance
                </div>
                <div class="tip">
                  Rainbow chain will be build based on substrate
                </div>
              </div>
              <div class="bottom">
                Interconnection among all chains to bulid Bit Civilization
              </div>
            </div>
          </div>
          <div class="part2">
            <div class="part-title-l animate__animated"
                 :class="{'animate__fadeIn': part2ToTop - 100< scrollNumber && scrollNumber< part2ToTop + clintHeight + 100}">
              RAINBOW CITY <br> A SUPER ECONOMY FOR HUMAN CIVILIZATION
            </div>
            <div class="part2-content ">
              <p>
                On the basis of blockchain technology, Rainbow City will truly treat Satoshi’s Bitcoin tenet as the
                kernel
                to
                make the idea of decentralization come true, render Bitcoin the anchor in value estimation, and finally
                let
                Bitcoin rise to be the infrastructure of the advanced human civilization in the practice of Token
                Economy
                and
                Community Management
              </p>
              <p>
                We strive to build a trillion-dollar economy by developing the Rainbow City ecosystem in the next ten
                years.
              </p>
              <p>
                Rainbow City belongs to DAO category, a virtual city-state of human civilization built based on
                blockchain,
                a
                country of liberty where we can truly Satoshi Nakamoto's thought and the spirit of Bitcoin into reality.
              </p>
              <p>
                Numerous super applications exist in Internet circle, such as facebook、twitter、google、amazon, affecting
                the
                ideology of society and people’s way of living. Yet most of them are centralized.
              </p>
              <p>
                Rainbow City believes human
                beings will certainly embrace an unprecedented super business pattern, which works in the form of
                decentralized
                protocol, future in the virtue of blockchain. Every valuable blockchain protocol and its participants
                will
                work
                together, jointly making up this super business pattern, this super economy, meeting the majority of the
                needs
                in human economic activities of everyday life.
              </p>
              <p>
                Combined with a series of meticulous design of tokens and
                diversified sorts of mining, Rainbow City will render Rainbow DAO as its kernel to unify scattered
                economic
                behaviors of diverse usage and put them in one economy. Centering on Bitcoin, productivity and living
                all
                over
                the globe are expected to circulate within the same economic system to truly build an infrastructure for
                human
                civilization of digital world.
              </p>
            </div>
          </div>
          <div class="part3">
            <div class="part-title-l"
                 :class="{'animate__animated animate__fadeIn': part3ToTop -100< scrollNumber && scrollNumber< part3ToTop + clintHeight +100}">
              CORE VALUES OF RAINBOW CITY
            </div>
            <div class="city-content">
              <img class="city-img" src="../../assets/imgs/citys.png"/>
              <div class="city-item">
                <div class="city-item-title">
                  <img class="city-item-icon" src="../../assets/imgs/place.png" alt="">
                  <span>ORIENTATION</span>
                </div>
                <div class="city-item-content">
                  A digital city-state based on Token Economy and Community Management
                </div>
              </div>
              <div class="city-item right">
                <div class="city-item-title">
                  <span>MISSION</span>
                  <img class="city-item-icon" src="../../assets/imgs/mission.png" alt="">
                </div>
                <div class="city-item-content">
                  Awaken and strengthen human awareness to digital Bit Civilization
                </div>
              </div>
              <div class="city-item">
                <div class="city-item-title">
                  <img class="city-item-icon" src="../../assets/imgs/vision.png" alt="">
                  <span>PROSPECT</span>
                </div>
                <div class="city-item-content">
                  Render Bitcoin the infrastructure of digital bit civilization
                </div>
              </div>

              <div class="city-item right">
                <div class="city-item-title">
                  <span>VALUES</span>
                  <img class="city-item-icon" src="../../assets/imgs/values.png" alt="">
                </div>
                <div class="city-item-content">
                  Transparency & Justice & Co-creation & Co-management & Co-ownership
                </div>
              </div>
            </div>
          </div>
          <div class="part4">
            <div class="part-title-l"
                 :class="{'animate__animated animate__fadeIn': part4ToTop - 100< scrollNumber && scrollNumber< part4ToTop + clintHeight +100}">
              SEVEN ECOSYSTEMS OF RAINBOW CITY
            </div>
            <div class="city-content">
              <img class="city-img" src="../../assets/imgs/earth.png"/>
              <div class="city-item">
                <div class="line-box">
                </div>
                <div class="city-item-title">
                  1 RAINBOW DEFI
                </div>
                <div class="city-item-content">
                  Decentralized financial field, including but not limited to decentralized exchanges, decentralized
                  stablecoins platforms, decentralized lending platforms, coins functioning as the anchor of Bitcoin,
                  decentralized insurances and aggregators, to set a cross-chain DeFi system around the globe.
                </div>
              </div>
              <div class="city-item right">
                <div class="line-box">
                </div>
                <div class="city-item-title">
                  5 RAINBOW INDUSTRY
                </div>
                <div class="city-item-content">
                  To actually link material world and digital world together. At the beginning, investment will be put
                  in
                  Bitcoin mine field, to build its center of hashrate. For some qualified districts, power plants of
                  varied
                  types using green energies will be built for Bitcoin mining. Moreover, diverse industrial entities
                  will
                  get
                  investment as well, such as global real estate, international tourism, international trade and
                  international
                  retail. In addition, large areas of land and inland in suitable places will be bought to establish
                  physical
                  Rainbow City, the shrine of blockchain fans.
                </div>
              </div>
              <div class="city-item">
                <div class="line-box">
                </div>
                <div class="line-box">
                </div>
                <div style="margin-top: -40px;">
                  <div class="city-item-title">
                    2 RAINBOW INVESTMENT
                  </div>
                  <div class="city-item-content">
                    To invest in promising blockchain projects and get corresponding token in return for an ecology of
                    wider
                    range and Rainbow City of human beings.
                  </div>
                </div>
                <div style="margin-top: 60px">
                  <div class="city-item-title">
                    3 RAINBOW CULTURE
                  </div>
                  <div class="city-item-content">
                    Including cultural industries such as art, philosophy, science, religion, academy sports and so on,
                    to
                    inspire blockchain participators all over the globe, construct superstructure of Bit civilization
                    and
                    render
                    Bitcoin infrastructure of human civilization.
                  </div>
                </div>
              </div>

              <div class="city-item right" style="margin-top: 50px!important;">
                <div class="line-box">
                </div>
                <div class="city-item-title">
                  6 RAINBOW EDUCATION
                </div>
                <div class="city-item-content">
                  With “Rainbow College” as the representative, we will set up seven Rainbow colleges covering different
                  areas
                  for the education of blockchain in the world. The focus is on the construction of blockchain physical
                  colleges and training institutions of blockchain for the comprehensive improvement in the
                  understanding
                  and
                  cognition over blockchain of the globe but not just technologically.
                </div>
              </div>

              <div class="city-item" style="margin-top: 30px">
                <div class="line-box">
                </div>
                <div class="city-item-title">
                  4 RAINBOW NETWORK
                </div>
                <div class="city-item-content">
                  Containing Rainbow island, a content oriented social platform, Rainbow e-commerce, the e-commerce
                  platform
                  and Rainbow game, online game platform. Mixed with blockchain and its token incentives, we’ll create
                  an
                  Internet platform and an open date platform worldwide.
                </div>

              </div>
              <div class="city-item right">
                <div class="line-box">
                </div>
                <div class="city-item-title">
                  7 RAINBOW R & D
                </div>
                <div class="city-item-content">
                  To found cutting-edge R&D lab of blockchain and top research institution and academic institution
                  around
                  the
                  globe. Besides, to cooperate with other institutions of higher learning and set up joint R&D lab for
                  the
                  study of the technology of blockchain, particularly for the public chain, bridge for chain crossing of
                  Rainbow City and cryptography to lead the trend.
                </div>
              </div>
            </div>
          </div>
          <div class="part5">
            <div class="part-title-l animate__animated"
                 :class="{' animate__fadeIn': part5ToTop - 100< scrollNumber && scrollNumber< part5ToTop + clintHeight +100}">
              FOUR CHARACTERISTICS OF RAINBOW CITY
            </div>
            <div class="part5-content">
              <div class="part5-content-item">
                <div class="title">
                  GLOBALIZATION
                </div>
                <div class="content">
                  Rainbow Ecosystem establishes a global business system under the guidance of the token economy.
                  Rainbow
                  City
                  allows users in 18 regions of the world to participate in the construction of Rainbow City around the
                  global
                  city node. Rainbow City will build an international operation and technical team to achieve
                  multi-national,
                  multi-language, and multi-cultural development.
                </div>
              </div>
              <div class="part5-content-item">
                <div class="title">
                  INTEGRATION
                </div>
                <div class="content">
                  Rainbow City returns the dividends of ecosystem to community members through the integration of token
                  economy and community governance. Through a complex economic model, Rainbow City balances the
                  interests of
                  short-term investors, project believers and project management teams to achieve community integration.
                </div>
              </div>
              <div class="part5-content-item">
                <div class="title">
                  TOKENIZATION
                </div>
                <div class="content">
                  Rainbow City implements token economy and community governance through a complex token system. Rainbow
                  City
                  has designed 15 types of tokens, each of which has its own unique community application scenarios and
                  value.
                  On the basis of playing their own roles, these tokens can also cooperate with other tokens to realize
                  decentralized community governance.
                </div>
              </div>
              <div class="part5-content-item">
                <div class="title">
                  COMMUNALIZATION
                </div>
                <div class="content">
                  Rainbow City conducts community governance through the "one body and two wings" model. One body refers
                  to
                  Rainbow central cabinet as a whole; two wings, two major components, that is, Rainbow founding and
                  management team and community team. In the future, Rainbow City will be fully governed by the
                  community.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="five-right">
        <div class="part-title"
             :class="{'animate__animated animate__flipInX': fiveRightToTop - 100< scrollNumber && scrollNumber< fiveRightToTop + clintHeight +100}">
          FIVE RIGHTS OF RAINBOW CITY
        </div>
        <div class="five-right-list">
          <div class="line1">
            <div class="list-item">
              <img class="right-icon" src="../../assets/imgs/right1.png" alt="">
              <div class="right-name">
                INCOME DISTRIBUTION
              </div>
            </div>
            <div class="list-item">
              <img class="right-icon" src="../../assets/imgs/right2.png" alt="">
              <div class="right-name">
                COMMUNITY GOVERNANCE
              </div>
            </div>
            <div class="list-item">
              <img class="right-icon" src="../../assets/imgs/right3.png" alt="">
              <div class="right-name">
                COMMUNITY SUFFRAGE
              </div>
            </div>
          </div>
          <div class="line2">
            <div class="list-item">
              <img class="right-icon" src="../../assets/imgs/right4.png" alt="">
              <div class="right-name">
                COMMUNITY SUPERVISION
              </div>
            </div>
            <div class="list-item">
              <img class="right-icon" src="../../assets/imgs/right5.png" alt="">
              <div class="right-name">
                PRIORITY INVESTMENT
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="part6">
        <div class="part-title-l"
             :class="{'animate__animated animate__fadeIn': part6ToTop - 100< scrollNumber && scrollNumber< part6ToTop + clintHeight + 100}">
          RBT COMMUNITY INCENTIVE MECHANISM
        </div>
        <div class="part6-list">
          <div class="part6-list-item">
            <div class="icon-box">
              <img class="icon" src="../../assets/imgs/POW.png" alt="">
            </div>
            <div class="name">POW</div>
            <div class="info">
              Allocate incentives according to the workload of the community.
            </div>
          </div>
          <div class="part6-list-item">
            <div class="icon-box">
              <img class="icon" src="../../assets/imgs/POS.png" alt="">
            </div>
            <div class="name">POS</div>
            <div class="info">
              Allocate incentives based on the number of tokens held.
            </div>
          </div>
          <div class="part6-list-item">
            <div class="icon-box">
              <img class="icon" src="../../assets/imgs/DPOS.png" alt="">
            </div>
            <div class="name">DPOS</div>
            <div class="info">
              Allocate incentives based on the weight of voting tokens held.
            </div>
          </div>
        </div>
      </div>
      <div class="part7">
        <div class="part7-content">
          <img class="quoteUp" src="../../assets/imgs/quoteup.png" alt="">
          <div class="whoWeAre" :class="{'animate__animated animate__fadeInUp': part7ToTop - 100< scrollNumber}">
            <p>We are Bitcoin believers</p>
            <p> We are the practitioners of Satoshi Nakamoto Thought </p>
            <p>and Satoshi Nakamoto Consensus</p>
            <p class="Satoshi">Satoshi Nakamoto</p>
            <p> is the creator of Bitcoin and pioneer of Bit civilization </p>
            <p> We salute him! </p>
          </div>
          <img class="quoteDown" src="../../assets/imgs/quotedown.png" alt="">
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import pageFooter from "@/components/pageFooter";
import $ from "jquery";

export default {
  name: "rainbowCityPage",
  components: {pageFooter},
  data() {
    return {
      scrollNumber: 0, //com scroll Number
      snowHeight: 0,
      isShowSnow: false, //Snow background isShow
      clintHeight: 0,//clientHeight
      footerToTop: 0,//footer to top distance
      part2ToTop: 0,//part2 to top distance
      part3ToTop: 0,
      part4ToTop: 0,
      part5ToTop: 0,
      fiveRightToTop: 0,
      part6ToTop: 0,
      part7ToTop: 0,
    }
  },
  methods: {
    getElementToPageTop(el) {
      if (el.parentElement) {
        return this.getElementToPageTop(el.parentElement) + el.offsetTop
      }
      return el.offsetTop
    },
    scrollTo(numebr) {
      window.scrollTo({
        //滚动到元素位置
        top: numebr,
        behavior: "smooth" // 平滑滚动
      })
    },
    openSeedSub() {
      let path = this.$router.resolve({path: '/seedSub', query: {}})
      window.open(path.href, '_bank')
    },
    openDiagram() {
      let path = this.$router.resolve({path: '/diagram', query: {}})
      window.open(path.href, '_bank')
    },
    handleScroll() {
      this.scrollNumber = document.documentElement.scrollTop
    },
    titleOnMove(e) {
      if (this.time && Date.now() - this.time < 60) return
      this.time = Date.now()
      this.tempTlip = true
      let x = e.clientX, y = e.clientY
      let width = $(window).width(), height = $(window).height()

      let transValue = (x - width / 2) / 20;
      $(".header-title-box").css("transform", `translate3d(${transValue / 3}px,0,0)`);
      $(".city-mask").css("transform", `translate3d(${transValue / 2}px,0,0)`);
      $(".rainbow-city-bg").css("background-position", `${transValue / 3 - 80}px 0`);
    }
  },
  mounted() {
    this.scrollNumber = document.documentElement.scrollTop
    window.addEventListener('scroll', this.handleScroll)
    this.clintHeight = document.body.clientHeight;
    this.footerToTop = document.getElementsByClassName("footer-box")[0].offsetTop - document.body.clientHeight;
    this.part2ToTop = document.getElementsByClassName("part2")[0].offsetTop - document.body.clientHeight;
    this.part3ToTop = document.getElementsByClassName("part3")[0].offsetTop - document.body.clientHeight;
    this.part4ToTop = document.getElementsByClassName("part4")[0].offsetTop - document.body.clientHeight;
    this.part5ToTop = document.getElementsByClassName("part5")[0].offsetTop - document.body.clientHeight;
    this.fiveRightToTop = document.getElementsByClassName("five-right")[0].offsetTop - document.body.clientHeight;
    this.part6ToTop = document.getElementsByClassName("part6")[0].offsetTop - document.body.clientHeight;
    this.part7ToTop = document.getElementsByClassName("part7")[0].offsetTop - document.body.clientHeight;
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll)
  },
}
</script>

<style lang="scss" scoped>

@keyframes scrollInTop {
  0% {
    top: -100%;
  }
  100% {
    top: 0;
  }
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  60% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@keyframes fadeIn1 {
  0% {
    opacity: 0;
  }
  40% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@keyframes fadeIn2 {
  0% {
    opacity: 0;
  }
  30% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@keyframes fadeIn3 {
  0% {
    opacity: 0;
  }
  40% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@keyframes fadeIn4 {
  0% {
    opacity: 0;
  }
  20% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@keyframes flash {
  0% {
    -webkit-filter: hue-rotate(0deg); /* Chrome, Safari, Opera */
    filter: hue-rotate(0deg);
  }
  25% {
    filter: hue-rotate(90deg) drop-shadow(0px 0px 18px #fce500);
  }
  50% {
    -webkit-filter: hue-rotate(90deg); /* Chrome, Safari, Opera */
    filter: hue-rotate(90deg) drop-shadow(0px 0px 18px #ff0000);
  }
  75% {
    filter: hue-rotate(90deg) drop-shadow(0px 0px 18px #0fff00);
  }
  100% {
    -webkit-filter: hue-rotate(0deg); /* Chrome, Safari, Opera */
    filter: hue-rotate(0deg);
  }
}

@keyframes rotateCircle {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}

@keyframes flotage {
  0% {
    transform: translate(0, 0);
  }
  50% {
    transform: translate(2px, 18px);
  }
  100% {
    transform: translate(0px, 0px);
  }
}

@keyframes twinklePurple {
  0% {
    box-shadow: 0 0 0px #e6f3ed;
  }
  50% {
    box-shadow: 0 0 50px rgba(141, 42, 216, 0.7);
  }
  100% {
    box-shadow: 0 0 0px #e6f3ed;
  }
}

@keyframes twinkleBlue {
  0% {
    box-shadow: 0 0 0px #e6f3ed;
  }
  50% {
    box-shadow: 0 0 50px rgba(148, 242, 245, 0.7);
  }
  100% {
    box-shadow: 0 0 0px #e6f3ed;
  }
}

@keyframes twinkleYellow {
  0% {
    box-shadow: 0 0 0px #e6f3ed;
  }
  50% {
    box-shadow: 0 0 50px rgba(255, 224, 166, 0.7);
  }
  100% {
    box-shadow: 0 0 0px #e6f3ed;
  }
}

@keyframes twinkleOrigen {
  0% {
    box-shadow: 0 0 0px #e6f3ed;
  }
  50% {
    box-shadow: 0 0 50px rgba(255, 183, 183, 0.7);
  }
  100% {
    box-shadow: 0 0 0px #e6f3ed;
  }
}


// button hover style
.prism {
  --intensity: 1;
  --scaleFactor: 1.01;
  --blur: 5;
  --redTop: 0;
  --redLeft: 0;
  --greenTop: 0;
  --greenLeft: 0;
  --blueTop: 0;
  --blueLeft: 0;
  position: relative;
  top: 0;
  color: var(--fg);
  background: var(--bg);
  border: 2px solid #333;
  transition: border-color 0.2s linear, top 0.1s ease;

  & > .red, & > .green, & > .blue {
    position: absolute;
    width: calc(var(--scaleFactor) * 100%);
    height: calc(var(--scaleFactor) * 100%);
    z-index: -1;
    border-radius: inherit;
    filter: blur(calc(var(--blur) * 1px));
    mix-blend-mode: screen;
    opacity: var(--intensity);
  }

  & > .red {
    top: calc(var(--redTop) * 1px);
    left: calc(var(--redLeft) * 1px);
    background: rgb(255, 0, 0);
  }

  & > .green {
    top: calc(var(--greenTop) * 1px);
    left: calc(var(--greenLeft) * 1px);
    background: rgb(0, 255, 0);
  }

  & > .blue {
    top: calc(var(--blueTop) * 1px);
    left: calc(var(--blueLeft) * 1px);
    background: rgb(0, 0, 255);
  }

  &:focus {
    outline: none;
    border-color: #fff;
  }

  &:active {
    top: -4px;
  }
}


.rainbow-city {

  width: 100%;
  height: auto;
  color: white;
  .rainbow-city-bg {
    background: url("../../static/imgs/rainbowcity_bg.png") -80px 0;
    transition: 1.5s;
    transition-timing-function: ease-out;
    background-size: 110% 100%;
  }

  .page-footer .page-footer-part1 {
    left: 0 !important;
  }

  .city-mask {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0px;
    animation: scrollInTop 3s linear;
    left: 0;
    z-index: 0;
    background: url("../../static/imgs/city_mask.png");
  }

  .header-title-box {
    padding-top: 80px;
    height: 460px;
    transition: 2s;
    transition-timing-function: ease-out;

    .header-title {
      text-align: center;
      padding: 60px 0;

      .img-box {
        margin: 0 auto;
        height: 140px;
        transition: 1s;
        transition-timing-function: ease-out;

        .title-img {
          width: 100%;
        }


        .css-fizzy {
          font-size: 90px;
          font-weight: bold;
          text-align: center;
          color: #fff;

          .text-effect {
            display: flex;
            justify-content: center;
            position: relative;
            filter: contrast(100%) brightness(190%);
            animation: flash 6s infinite linear;
            animation-delay: 3s !important;

            .title-item {
              padding: 0 20px;
            }

            span {
              animation: fadeIn 2s linear;
            }

            .title-item:nth-child(1) {
              animation: fadeIn1 2s linear;
            }

            .title-item:nth-child(3) {
              animation: fadeIn2 2s linear;
            }

            .title-item:nth-child(5) {
              animation: fadeIn3 2s linear;
            }

            .title-item:nth-child(7) {
              animation: fadeIn4 2s linear;
            }
          }
        }

      }

      .tip {
        width: 800px;
        margin: 0 auto;
        height: 90px;
        animation: fadeIn 2s linear;

        .tip-img {
          width: 100%;
        }
      }

      .tip2 {
        animation: fadeIn 2s linear;
        width: 800px;
        height: 70px;
        margin: 20px auto;
        font-size: 50px;
        word-spacing: 10px;
        letter-spacing: 20px;
        text-shadow: 0 0 16px #fff;

        .tip-img {
          width: 100%;
        }
      }

      .intro {
        margin-top: 30px;
        font-size: 16px;

        font-weight: 400;
        text-align: center;
        color: #ffffff;
        line-height: 30px;
      }
    }

  }

  .buttons {
    display: flex;
    padding: 70px 0 120px;
    justify-content: center;
    text-align: center;
    font-weight: bold;
    animation: fadeIn 2s linear;

    .white-paper-box {
      cursor: pointer;
      width: 176px;
      height: 50px;
      border-radius: 26px;
      background-image: linear-gradient(90deg, #12c2e9, #c471ed 55%, #f64f59);
      padding: 1px;

      .white-paper {
        border-radius: 26px;
        width: 100%;
        height: 100%;
        background: #0b2031;
        line-height: 46px;

        a {
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-image: linear-gradient(90deg, #12c2e9, #c471ed 55%, #f64f59);
        }
      }
    }

    .seed-round {
      width: 180px;
      height: 50px;
      line-height: 50px;
      text-align: center;
      background: linear-gradient(90deg, #12c2e9 0%, #c471ed 64%, #f64f59 100%);
      border-radius: 25px;
      box-shadow: 0px 15px 20px 0px rgba(195, 105, 190, 0.30);
      margin-left: 20px;

      cursor: pointer;
    }
  }

  .rainbow-protocol {
    height: 900px;
    width: 1200px;
    margin: 440px auto 0;
    position: relative;
    line-height: 40px;

    .protocol-title-box {
      margin-top: -240px !important;
      position: absolute !important;
      width: 100%;
      display: flex;
      justify-content: center;

      .protocol-title {
        margin-top: 20px !important;
      }
    }

    .binance, .matic, .other2 {
      animation: twinkleBlue 7s infinite linear, flotage 6s infinite linear !important;
      animation-delay: 5s !important;

    }

    .bottom {
      position: absolute;
      width: 800px;
      top: 760px;
      left: calc(50% - 400px);
      height: 33px;
      font-size: 26px;

      font-weight: 400;
      text-align: center;
      color: #ffffff;
      line-height: 34px;
    }

    .protocol-line {
      position: absolute;
      left: 248px;
      top: 48px;
      z-index: 0;
    }

    .protocol-top {
      position: absolute;
      left: calc(50% - 290px);
      top: 9px;
      display: flex;
      justify-content: space-between;
      color: #ffe0a6;
      text-align: center;
      width: 580px;

      .lightning-network, .otherY {

        width: 260px;
        height: 40px;
        background: linear-gradient(180deg, rgba(255, 198, 91, 0.00), rgba(255, 198, 91, 0.20));
        border-radius: 21px;
        font-size: 20px;
        animation: twinkleYellow 10s infinite linear;
        animation-delay: 5s !important;
      }
    }

    .protocol-left {
      position: absolute;
      top: 60px;
      left: 0;
      height: 500px;
      text-align: center;
      color: #94F2F5;

      .l2, .sidechains {
        position: absolute;
        background: linear-gradient(180deg, rgba(148, 242, 245, 0.00), rgba(148, 242, 245, 0.20) 76%);
        border-radius: 50%;
        font-size: 24px;
        animation: twinkleBlue 10s infinite linear;
        animation-delay: 5s !important;
      }

      .l2 {
        line-height: 90px;
        width: 90px;
        height: 90px;
        left: 169px;
        top: 70px;
      }

      .sidechains {
        background: linear-gradient(180deg, rgba(148, 242, 245, 0.20), rgba(148, 242, 245, 0.00) 76%);
        line-height: 130px;
        width: 130px;
        height: 130px;
        left: 180px;
        top: 410px;
      }

      .other, .validium, .optimistic, .zk-rollup, .other2 {
        line-height: 36px;
        position: absolute;
        padding: 0 30px;
        background: linear-gradient(180deg, rgba(148, 242, 245, 0.00), rgba(148, 242, 245, 0.20) 76%);
        border-radius: 21px;
        font-size: 16px;
        animation: twinkleBlue 10s infinite linear, flotage 6s infinite linear;
        animation-delay: 5s !important;
      }

      .binance, .matic {
        position: absolute;
        padding: 10px;
        background: linear-gradient(180deg, rgba(148, 242, 245, 0.00), rgba(148, 242, 245, 0.20) 76%);
        border-radius: 21px;
        line-height: 22px;
        font-size: 16px;
        width: 80px;
        height: 90px;

        span {
          display: block;
          margin-top: -12px;
        }
      }

      .binance {
        top: 500px;
        left: 0px;


        img {
          width: 60px;
        }
      }

      .matic {

        left: 60px;
        top: 360px;

        img {
          width: 60px;
        }
      }

      .other2 {
        top: 550px;
        left: 240px;
      }

      .other {
        left: 280px;
        top: 90px;
      }

      .validium {
        left: 0;
        top: 60px;
      }

      .optimistic {
        left: 40px;
        top: 170px;
      }

      .zk-rollup {
        width: 140px;
        left: 160px;
        top: 0;
      }


    }

    .protocol-center {
      position: absolute;
      top: 100px;
      left: 310px;
      width: 600px;
      height: 600px;
      transform-origin: center;
      text-align: center;
      color: #94F2F5;

      .protocol-icon {
        position: absolute;
        left: 154px;
        top: 110px;
        width: 298px;
        height: 298px;
        img{
          width: 100%;
        }
      }

      .btc-icon, .dot-icon, .eth-icon, .rainbow-icon {
        position: absolute;
        width: 120px;
        height: 120px;
        border-radius: 50%;

        img {
          margin-top: 10px;
          width: 80%;
        }
      }

      .btc-icon {
        top: -1px;
        left: 232px;
        animation: twinkleYellow 7s infinite linear, rotateCircle 20s infinite linear;
        background: linear-gradient(180deg, rgba(255, 198, 91, 0.30), rgba(255, 198, 91, 0.00));
        animation-delay: 5s !important;
      }

      .eth-icon {
        top: 202px;
        left: 34px;
        animation: twinkleBlue 11s infinite linear, rotateCircle 20s infinite linear;
        animation-delay: 5s !important;
        background: linear-gradient(90deg, rgba(148, 242, 245, 0.30), rgba(148, 242, 245, 0.00) 76%);

        img {
          margin-top: 10px;
          width: 70%;
        }
      }

      .rainbow-icon {
        top: 390px;
        left: 230px;
        animation: twinklePurple 12s infinite linear, rotateCircle 20s infinite linear;
        animation-delay: 5s !important;
        background: linear-gradient(180deg, rgba(255, 255, 255, 0.00), rgba(219, 31, 126, 0.40));
      }

      .dot-icon {
        top: 202px;
        animation: twinkleOrigen 13s infinite linear, rotateCircle 20s infinite linear;
        left: 432px;
        animation-delay: 5s !important;
        background: linear-gradient(-90deg, rgba(219, 31, 126, 0.40), rgba(255, 255, 255, 0.00) 76%);
      }

      .bridge1, .bridge2, .bridge3, .bridge4 {
        width: 80px;
        font-size: 14px;
        position: absolute;
        color: #B3D7FF;
        line-height: 18px;
      }

      .bridge1 {
        top: 210px;
        left: 160px;
      }

      .bridge2 {
        top: 150px;
        left: 300px;
      }

      .bridge3 {
        top: 270px;
        left: 350px;
      }

      .bridge4 {
        top: 330px;
        left: 210px;
      }
    }

    .protocol-right {
      position: absolute;
      top: 100px;
      left: 860px;
      text-align: center;
      color: #FFB7B7;

      .kusama, .parachain, .parachain2, .parachain3, .otherCircle {
        position: absolute;
        width: 122px;
        height: 122px;
        font-size: 20px;
        line-height: 120px;
        background: linear-gradient(180deg, rgba(255, 255, 255, 0.00), rgba(219, 31, 126, 0.30) 76%);
        border-radius: 50%;
        animation: twinkleOrigen 7s infinite linear;
        animation-delay: 5s !important;
      }

      .kusama {
        top: -18px;
        left: 60px;
        .rainbowdao-line{
          width: 60px;
          position: absolute;
          left: 100px;
          top: -50px;
          img{
            width: 100%;
          }
        }
        .rainbowdao{
          position: absolute;
          left: 162px;
          top: -54px;
          width: 100px;
          line-height: 24px;
          height: 100px;
          font-size: 16px;
          display: flex;
          justify-content: center;
          align-items: center;
          background: linear-gradient(180deg, rgba(255, 255, 255, 0.00), rgba(219, 31, 126, 0.30) 76%);
          border-radius: 50%;
          animation: twinkleOrigen 7s infinite linear;
          animation-delay: 5s !important;
        }
      }

      .parachain {
        top: 80px;
        left: 172px;
      }

      .parachain2 {
        top: 230px;
        line-height: 24px;
        display: flex;
        justify-content: center;
        align-items: center;
        left: 140px;
      }

      .parachain3 {
        top: 380px;
        left: 62px;
      }

      .otherCircle {
        width: 100px;
        height: 100px;
        line-height: 100px;
        top: 456px;
        left: 210px;
      }
    }

    .protocol-bottom {
      position: absolute;
      top: 665px;
      left: 0px;
      text-align: center;
      color: #ffa1ea;

      .token-economy, .community-governance {
        position: absolute;
        height: 40px;
        background: linear-gradient(180deg, rgba(255, 198, 91, 0.00), rgba(255, 198, 91, 0.20));
        border-radius: 21px;
        font-size: 20px;
        animation: twinklePurple 7s infinite linear;
        animation-delay: 5s !important;
      }

      .token-economy {
        width: 260px;
        left: 320px;
      }

      .community-governance {
        width: 260px;
        left: 620px;
      }

      .tip {
        width: 400px;
        position: absolute;
        left: 616px;
        top: -57px;
      }
    }
  }


  .part2 {
    padding-bottom: 30px;

    .part2-content {
      width: 1100px;
      margin: 0 auto;
      padding: 20px 0 40px;
      line-height: 36px;
      font-size: 16px;

      p {
        margin-top: 30px;
      }
    }
  }

  .part3 {
    .city-content {
      width: 1000px;
      margin: 70px auto;
      position: relative;
      height: 500px;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;

      .city-img {
        width: 400px;
        position: absolute;
        left: calc(50% - 200px);
        top: calc(25% - 50px);
        animation: flotage 8s infinite linear;
      }

      .city-item {

        margin-top: 30px;

        &.right {
          .city-item-title {
            display: flex;

            width: 100%;
            justify-content: flex-end;
          }
        }

        .city-item-title {
          font-weight: bold;
          width: 188px;
          height: 32px;
          font-size: 26px;
          text-align: left;
          color: #db1f7e;
          line-height: 32px;
          display: flex;

          .city-item-icon {
            width: 30px;
          }

          span {
            padding: 0 10px;
          }
        }

        .city-item-content {
          margin-top: 20px;
          width: 370px;
          height: 50px;
          font-size: 18px;

          text-align: justify;
          color: #ffffff;
          line-height: 26px;
        }
      }
    }
  }

  .part4 {
    .city-content {
      width: 1000px;
      margin: 60px auto 0;
      position: relative;
      padding-bottom: 20px;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;

      .city-img {
        width: 200px;
        position: absolute;
        left: calc(50% - 100px);
        top: calc(50% - 100px);
        animation: flotage 8s infinite linear;
      }

      .city-item {
        margin-bottom: 30px;
        width: 360px;
        position: relative;

        &.right {
          margin-top: 20px;

          .city-item-title {
            text-align: left !important;
          }
        }

        .line-box {
          position: absolute;
        }

        &:nth-child(2) {
          .line-box {
            width: 270px;
            height: 200px;
            right: -110px;
            top: 40px;
            border-right: 1px solid rgba(255, 255, 255, 0.30);
            border-top: 1px solid rgba(255, 255, 255, 0.30);
          }
        }

        &:nth-child(3) {
          margin: 0;

          .line-box {
            width: 330px;
            height: 200px;
            left: -110px;
            top: 40px;
            border-left: 1px solid rgba(255, 255, 255, 0.30);
            border-top: 1px solid rgba(255, 255, 255, 0.30);
          }
        }

        &:nth-child(4) {
          .line-box:nth-child(1) {
            width: 320px;
            height: 40px;
            right: -70px;
            top: 0px;
            border-right: 1px solid rgba(255, 255, 255, 0.30);
            border-top: 1px solid rgba(255, 255, 255, 0.30);
          }

          .line-box:nth-child(2) {
            width: 240px;
            height: 0px;
            right: -30px;
            top: 160px;
            border-top: 1px solid rgba(255, 255, 255, 0.30);
          }
        }

        &:nth-child(5) {
          margin: 0;

          .line-box {
            width: 260px;
            height: 0px;
            left: -20px;
            top: 40px;
            border-top: 1px solid rgba(255, 255, 255, 0.30);
          }
        }

        &:nth-child(6) {
          margin: 0;

          .line-box {
            width: 330px;
            height: 120px;
            right: -110px;
            top: -80px;
            border-right: 1px solid rgba(255, 255, 255, 0.30);
            border-bottom: 1px solid rgba(255, 255, 255, 0.30);
          }
        }

        &:nth-child(7) {
          margin: 0;

          .line-box {
            width: 280px;
            height: 90px;
            left: -110px;
            top: -50px;
            border-left: 1px solid rgba(255, 255, 255, 0.30);
            border-bottom: 1px solid rgba(255, 255, 255, 0.30);
          }
        }

        .city-item-title {
          height: 50px;
          width: 100%;
          padding-bottom: 20px;
          font-size: 20px;
          font-weight: bold;
          text-align: right;
          color: #db1f7e;
          line-height: 32px;

          .city-item-icon {
            width: 30px;
            margin: 0 10px;
          }

        }

        .city-item-content {
          font-size: 12px;
          text-align: justify;
          line-height: 24px;
        }
      }

    }
  }

  .part5 {
    padding: 100px 0 90px;
    overflow: hidden;
    height: 1000px;
    position: relative;
    background-size: 100% 100%;

    .part5-content {
      width: 1000px;
      margin: 60px auto 0;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;

      .part5-content-item {
        width: 50%;

        &:nth-child(-n+2) {
          border-bottom: 1px solid #333;
        }

        &:nth-child(2n) {
          padding-left: 70px;
          border-left: 1px solid #333;
        }

        .title {
          margin-top: 24px;
          font-size: 24px;
          text-align: left;
          color: #db1f7e;
          font-weight: bold;
          line-height: 32px;
        }

        .content {
          width: 420px;
          margin: 24px 0;
          font-size: 14px;
          font-weight: 400;
          text-align: justify;
          color: #ffffff;
          line-height: 26px;
        }
      }
    }
  }

  .five-right {
    width: 100%;
    height: 800px;
    background: url("../../static/imgs/fiveRight_bg.png");
    background-size: cover;
    overflow: hidden;

    .five-right-title {
      width: 486px;
      height: 33px;
      font-size: 30px;
      margin: 0px auto;
      padding: 60px 0 90px;

      font-weight: 400;
      text-align: justify;
      color: #333333;
      line-height: 34px;
    }

    .five-right-list {
      margin-top: 60px;

      .line1, .line2 {
        margin: 20px auto;
        justify-content: space-between;
        display: flex;
      }

      .line1 {
        width: 1000px;
      }

      .line2 {
        width: 620px;
        margin-top: -70px;
      }

      .list-item {
        width: 200px;
        height: 260px;
        text-align: center;
        padding-top: 30px;
        transform: scale(0.8);
        background: linear-gradient(180deg, rgba(255, 255, 255, 0.00), rgba(255, 255, 255, 0.50));
        border-radius: 50px;


        &:hover {
          transform: scale(1);
        }

        .right-icon {
          width: 120px;
          height: 127px;
        }

        .right-name {
          font-size: 20px;

          font-weight: bold;
          text-align: center;
          color: #000000;
          line-height: 30px;
        }
      }
    }
  }

  .part6 {
    height: 520px;
    overflow: hidden;
    background-image: url("../../static/imgs/rainbowcity_part6bg.png");
    background-size: 100% 100%;

    .part-title-l {
      margin-top: 40px !important;
    }

    .part6-list {
      width: 1000px;
      margin: 100px auto;
      display: flex;
      justify-content: space-between;

      .part6-list-item {
        width: 320px;
        text-align: center;

        &:hover .icon-box {
          box-shadow: 0px 0px 5px 0px #db1f7e, 0px 0px 15px 0px #db1f7e inset;
        }

        .icon-box {
          width: 60px;
          height: 60px;
          margin: 0 auto;
          background: rgba(219, 31, 126, 0.15);
          border: 2px solid #db1f7e;
          border-radius: 20px;


          .icon {
            margin-top: 10px;
            width: 30px;
          }
        }

        .name {
          height: 32px;
          font-size: 40px;
          font-weight: 600;
          color: #db1f7e;
          margin-top: 30px;
          line-height: 32px;
          text-shadow: 0px 0px 10px #db1f7e;
        }

        .info {

          width: 280px;
          height: 60px;
          font-size: 18px;
          margin: 30px auto 0;

          font-weight: 400;
          text-align: center;
          color: #ffffff;
          line-height: 30px;
        }
      }
    }
  }

  .part7 {
    width: 100%;
    background-color: floralwhite;
    background-image: url("../../static/imgs/ball_bg.png");
    background-size: cover;
    padding: 40px 0;
    height: 420px;

    .part7-content {
      width: 1000px;
      margin: 0 auto;
      position: relative;

      .quoteUp, .quoteDown {
        width: 80px;
        height: 80px;
        position: absolute;
      }

      .whoWeAre {
        color: black;
        width: 720px;

        text-align: center;
        font-size: 28px;
        line-height: 46px;
        margin: 0 auto;

        p {
          font-weight: bold;
        }
      }

      .Satoshi {
        font-size: 30px;
        color: #DB1F7E;
      }

      .quoteUp {
        left: 0;
        top: 0;
      }

      .quoteDown {
        bottom: 0;
        right: 0;
      }
    }

  }
}
</style>
