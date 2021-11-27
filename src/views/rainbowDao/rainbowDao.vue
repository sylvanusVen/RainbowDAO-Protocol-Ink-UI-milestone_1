<template>
  <div class="rainbowDao" @mousemove="titleOnMove">

    <div class="z-box">
      <div class="rainbowDao-bg">
        <div class="city-mask"/>

        <div class="z-box">
          <rainbow-nav></rainbow-nav>
          <div class="header-title-box">
            <div class="header-title">
              <div class="img-box">
                <div class="css-fizzy">
                  <div class="text-effect">
                    RainbowDAO
                  </div>
                </div>
              </div>
              <div class="tip">
                Multi-chain DAO Infrastructure Service Protocol
              </div>
              <div class="tip2">
                RainbowDAO Protocol is developed under the authorization of the Rainbowcity Foundation, focusing on the
                creation of web3 basic component. Anyone can create and manage their own DAO organization through it,
                including independent DAO,alliance DAO, parent DAO and child DAO, and any DAO can also create a
                management department within it.
              </div>
            </div>
            <div class="link-list ">
              <div class="icon-box">
                <span></span>
                <a class="icon" href="https://t.me/rainbowcity_en" target="_blank">
                  <svg t="1630481964879" class="icon" viewBox="0 0 1223 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
                       p-id="3604" width="48" height="48">
                    <path
                        d="M1034.968573 961.622321l184.573078-868.139143c7.509214-36.721196 3.128839-63.060335-13.226458-78.90364-16.298409-15.871749-37.830512-18.773036-64.653198-8.76075L57.035613 422.978405c-24.262727 9.215854-40.674912 19.626356-49.549438 31.345282-8.76075 11.718926-9.870066 22.726751-3.128839 33.194141 6.655895 10.46739 20.053016 18.573928 40.162919 24.461835l277.414274 86.38441 643.972026-404.64426c17.635276-11.718926 31.003954-14.136665 40.16292-7.509215 5.887907 4.238155 4.238155 10.46739-5.006143 18.773036L480.140025 674.793085l-20.138348 285.5777c19.256584 0 38.114952-9.102078 56.518216-27.56223l135.59252-130.273493 281.168881 206.759393c53.616929 29.97997 87.52217 14.136665 101.772611-47.672134h-0.085332z"
                        p-id="3605" fill="#1296db"></path>
                  </svg>
                </a>
              </div>
              <div class="icon-box">
                <span></span>
                <a class="icon" href="https://twitter.com/RainbowCityio" target="_blank">
                  <svg t="1630482035608" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
                       p-id="4479" width="48" height="48">
                    <path
                        d="M923.2 289.6c0 354.4-232.8 609.6-575.2 620.8-144.8 11.2-244-32.8-332.8-99.2 99.2 11.2 232.8-21.6 298.4-88.8-99.2 0-155.2-56-188-132h88.8C125.6 556.8 58.4 490.4 58.4 380c21.6 11.2 44 21.6 88.8 21.6-77.6-44-121.6-188-66.4-276.8 99.2 110.4 220.8 210.4 421.6 220.8-56-220.8 232.8-332.8 354.4-188 56-11.2 88.8-32.8 132-56-11.2 56-44 88.8-88.8 110.4 44 0 77.6-11.2 110.4-32.8-10.4 44-54.4 88.8-87.2 110.4z"
                        fill="#1296db" p-id="4480"></path>
                  </svg>
                </a>
              </div>
              <div class="icon-box">
                <span></span>
                <a class="icon" href="https://medium.com/rainbowcity" target="_blank">
                  <svg t="1630482306509" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="13894" width="48" height="48"><path d="M121.429333 271.36a39.594667 39.594667 0 0 0-12.928-33.450667l-95.573333-115.2v-17.194666H309.76l229.461333 503.253333 201.728-503.253333H1024v17.194666l-81.792 78.378667a23.936 23.936 0 0 0-9.088 22.954667v576a23.936 23.936 0 0 0 9.088 22.912l79.786667 78.378666v17.194667h-401.493334v-17.194667l82.645334-80.298666c8.106667-8.106667 8.106667-10.496 8.106666-22.954667V332.544l-229.973333 584.021333h-31.018667L182.528 332.544v391.424c-2.218667 16.469333 3.242667 33.024 14.805333 44.928l107.52 130.56v17.152H0v-17.194667l107.52-130.56c11.52-11.861333 16.64-28.586667 13.909333-44.885333V271.36z" fill="#1296db" p-id="13895"></path></svg>
                </a>
              </div>
              <div class="icon-box">
                <span></span>
                <a class="icon" href="https://discord.gg/VvdrBzF9sN" target="_blank">
                  <svg t="1630482260015" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="12198" width="48" height="48"><path d="M512.028 171.577a721.806 721.806 0 0 0-346.851 87.467c78.336-69.974 215.267-110.28 215.267-110.28l-12.942-12.942c-128.54 2.276-244.906 91.278-244.906 91.278A1199.73 1199.73 0 0 0 0.142 735.8a331.89 331.89 0 0 0 264.704 127.773l54.045-68.465a289.252 289.252 0 0 1-155.165-104.96 671.915 671.915 0 0 0 696.718 0 289.252 289.252 0 0 1-155.164 104.96l54.044 68.465a331.89 331.89 0 0 0 264.704-127.772 1199.73 1199.73 0 0 0-122.453-508.843S785.21 137.956 656.668 135.68l-12.942 12.942s136.903 40.306 215.24 110.28a721.806 721.806 0 0 0-346.852-87.467M354.588 459.89a92.416 92.416 0 0 1 89.003 96.71 88.946 88.946 0 1 1-177.209 0 92.302 92.302 0 0 1 88.178-96.71m317.184 0a96.996 96.996 0 1 1-88.178 96.71 92.9 92.9 0 0 1 88.206-96.71z" p-id="12199" fill="#1296db"></path></svg>
                </a>
              </div>
              <div class="icon-box">
                <span></span>
                <a class="icon" href="" target="_blank">
                  <svg t="1630482394010" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="16649" width="48" height="48"><path d="M905.55 174.86q26.29-60.57 12.01-115.43Q903.27 4.57 898.69 0q-80 4.57-129.14 34.86-49.14 30.28-50.28 34.85-37.72-16-102.86-20t-72-4q-6.86 0-72 4t-102.86 20q-1.14-4.57-50.29-34.85Q270.12 4.57 190.12 0q-4.57 4.57-18.86 59.43-14.28 54.86 13.15 115.43-6.86 0-42.29 66.85t-16 206.28q29.72 129.14 117.14 176.57 87.43 47.43 167.43 44-2.28 1.14-19.43 25.14-17.14 24-16 68.58-1.15 2.28-36 14.28t-79.43-2.86q-43.43-20.57-65.71-49.71-22.28-29.14-22.28-31.43-1.15-5.71-36-34.28-34.86-28.58-79.43-12.58-3.43 0-1.14 12.58 2.28 12.57 46.86 34.28l26.29 40q22.86 36.57 38.28 69.71 15.43 33.14 73.14 50.86 57.72 17.72 129.72 1.72v133.71q1.14 1.14-2.29 6.85-3.43 5.72-20.57 10.86t-18.86 10.86q-1.72 5.72 7.43 6.86h418.28q9.14-1.14 7.43-6.86-1.71-5.72-18.86-10.86-17.14-5.14-20.58-10.86-3.43-5.71-2.28-6.85V762.28q-3.43-44.58-21.14-68.58-17.72-24-20-25.14 80 3.43 167.43-44t117.14-176.57q19.43-139.43-15.43-206.28t-41.72-66.85z" p-id="16650" fill="#1296db"></path></svg>
                </a>
              </div>

            </div>
            <div class="building-btn">
              BUILDING
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
                  <img src="../../assets/imgs/B_home.png" alt="">
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
      <div class="footer-box">
        <pageFooter v-show="scrollNumber>footerToTop"></pageFooter>
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
      $(".rainbowDao-bg").css("background-position", `${transValue / 3 - 80}px 0`);
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


.rainbowDao {

  width: 100%;
  height: auto;

  .rainbowDao-bg {
    //background: url("../../static/imgs/rainbowdao_bg1.png") -80px 0;
    //transition: 1.5s;
    //transition-timing-function: ease-out;
    //background-size: 110% 100%;
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
    height: 680px;
    transform: scaleX(1.3);
    transition: 2s;
    transition-timing-function: ease-out;
    background: url("../../static/imgs/rainbowdao_bg1.png") -80px 0;
    transition: 1.5s;
    transition-timing-function: ease-out;
    background-size: 106% 100%;

    .header-title {
      text-align: center;
      padding: 20px 0 0;

      .img-box {
        animation: fadeIn 1s linear;
        margin: 0 auto;
        height: 120px;
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
        animation: fadeIn 1s linear;
        height: 40px;
        font-size: 40px;
        font-family: HiraKakuStdN, HiraKakuStdN-Regular;
        font-weight: 400;
        text-align: center;
        color: #ffffff;
        line-height: 60px;
      }

      .tip2 {
        margin:  50px auto;
        width: 1200px;
        height: 100px;
        animation: fadeIn 2s linear;
        font-size: 20px;
        font-family: Roboto, Roboto-Medium;
        font-weight: 500;
        text-align: center;
        color: #ffffff;
        line-height: 30px;
      }


    }
    .link-list {
      width: 200px;
      margin: 0px auto 0;
      display: flex;
      justify-content: space-between;

      .icon-box {
        cursor: pointer;
        width: 30px;
        height: 30px;
        background: rgba(255,255,255,0.12);
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        padding: 10px;

        .icon path{
          fill: white!important;
        }
        &:hover .icon path{
          fill: #10101B!important;
        }
        span {
          width: 0%;
          transition: 0.3s;
          height: 0%;
          border-radius: 50%;
          position: absolute;
          margin: 3px;
          background: white;
        }

        &:hover span {
          width: 100%;
          height: 100%;
          margin: 0px;
        }
        .icon {
          -webkit-transition: all 0.3s;
          -moz-transition: all 0.3s;
          -o-transition: all 0.3s;
          transition: all 0.3s;
          width: 18px;
          height: 18px;
          position: relative;
        }

      }
    }
    .building-btn{
      font-size: 16px;
      font-family: HiraKakuStdN, HiraKakuStdN-Regular;
      font-weight: 400;
      text-align: center;
      color: #ffffff;
      line-height: 50px;
      width: 180px;
      margin: 50px auto 0;
      height: 50px;
      cursor: pointer;
      border: 1px solid #ffffff;
      border-radius: 31px;
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

        img {
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

        .rainbowdao-line {
          width: 60px;
          position: absolute;
          left: 100px;
          top: -50px;

          img {
            width: 100%;
          }
        }

        .rainbowdao {
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
