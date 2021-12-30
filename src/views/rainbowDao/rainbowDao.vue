<template>
  <div class="rainbowDao" @mousemove="titleOnMove">
    <!--    <div class="city-mask"/>-->

    <div class="z-box">
      <div class="rainbowDao-bg">

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
                <a class="icon" href="https://t.me/RainbowDAO" target="_blank">
                  <svg t="1630481964879" class="icon" viewBox="0 0 1223 1024" version="1.1"
                       xmlns="http://www.w3.org/2000/svg"
                       p-id="3604" width="48" height="48">
                    <path
                        d="M1034.968573 961.622321l184.573078-868.139143c7.509214-36.721196 3.128839-63.060335-13.226458-78.90364-16.298409-15.871749-37.830512-18.773036-64.653198-8.76075L57.035613 422.978405c-24.262727 9.215854-40.674912 19.626356-49.549438 31.345282-8.76075 11.718926-9.870066 22.726751-3.128839 33.194141 6.655895 10.46739 20.053016 18.573928 40.162919 24.461835l277.414274 86.38441 643.972026-404.64426c17.635276-11.718926 31.003954-14.136665 40.16292-7.509215 5.887907 4.238155 4.238155 10.46739-5.006143 18.773036L480.140025 674.793085l-20.138348 285.5777c19.256584 0 38.114952-9.102078 56.518216-27.56223l135.59252-130.273493 281.168881 206.759393c53.616929 29.97997 87.52217 14.136665 101.772611-47.672134h-0.085332z"
                        p-id="3605" fill="#1296db"></path>
                  </svg>
                </a>
              </div>
              <div class="icon-box">
                <span></span>
                <a class="icon" href="https://twitter.com/RainbowcityDAO" target="_blank">
                  <svg t="1630482035608" class="icon" viewBox="0 0 1024 1024" version="1.1"
                       xmlns="http://www.w3.org/2000/svg"
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
                  <svg t="1630482306509" class="icon" viewBox="0 0 1024 1024" version="1.1"
                       xmlns="http://www.w3.org/2000/svg" p-id="13894" width="48" height="48">
                    <path
                        d="M121.429333 271.36a39.594667 39.594667 0 0 0-12.928-33.450667l-95.573333-115.2v-17.194666H309.76l229.461333 503.253333 201.728-503.253333H1024v17.194666l-81.792 78.378667a23.936 23.936 0 0 0-9.088 22.954667v576a23.936 23.936 0 0 0 9.088 22.912l79.786667 78.378666v17.194667h-401.493334v-17.194667l82.645334-80.298666c8.106667-8.106667 8.106667-10.496 8.106666-22.954667V332.544l-229.973333 584.021333h-31.018667L182.528 332.544v391.424c-2.218667 16.469333 3.242667 33.024 14.805333 44.928l107.52 130.56v17.152H0v-17.194667l107.52-130.56c11.52-11.861333 16.64-28.586667 13.909333-44.885333V271.36z"
                        fill="#1296db" p-id="13895"></path>
                  </svg>
                </a>
              </div>
              <div class="icon-box">
                <span></span>
                <a class="icon" href="https://discord.gg/vbnvFEeYRr" target="_blank">
                  <svg t="1630482260015" class="icon" viewBox="0 0 1024 1024" version="1.1"
                       xmlns="http://www.w3.org/2000/svg" p-id="12198" width="48" height="48">
                    <path
                        d="M512.028 171.577a721.806 721.806 0 0 0-346.851 87.467c78.336-69.974 215.267-110.28 215.267-110.28l-12.942-12.942c-128.54 2.276-244.906 91.278-244.906 91.278A1199.73 1199.73 0 0 0 0.142 735.8a331.89 331.89 0 0 0 264.704 127.773l54.045-68.465a289.252 289.252 0 0 1-155.165-104.96 671.915 671.915 0 0 0 696.718 0 289.252 289.252 0 0 1-155.164 104.96l54.044 68.465a331.89 331.89 0 0 0 264.704-127.772 1199.73 1199.73 0 0 0-122.453-508.843S785.21 137.956 656.668 135.68l-12.942 12.942s136.903 40.306 215.24 110.28a721.806 721.806 0 0 0-346.852-87.467M354.588 459.89a92.416 92.416 0 0 1 89.003 96.71 88.946 88.946 0 1 1-177.209 0 92.302 92.302 0 0 1 88.178-96.71m317.184 0a96.996 96.996 0 1 1-88.178 96.71 92.9 92.9 0 0 1 88.206-96.71z"
                        p-id="12199" fill="#1296db"></path>
                  </svg>
                </a>
              </div>
              <div class="icon-box">
                <span></span>
                <a class="icon" href="https://github.com/RainbowDAO" target="_blank">
                  <svg t="1630482394010" class="icon" viewBox="0 0 1024 1024" version="1.1"
                       xmlns="http://www.w3.org/2000/svg" p-id="16649" width="48" height="48">
                    <path
                        d="M905.55 174.86q26.29-60.57 12.01-115.43Q903.27 4.57 898.69 0q-80 4.57-129.14 34.86-49.14 30.28-50.28 34.85-37.72-16-102.86-20t-72-4q-6.86 0-72 4t-102.86 20q-1.14-4.57-50.29-34.85Q270.12 4.57 190.12 0q-4.57 4.57-18.86 59.43-14.28 54.86 13.15 115.43-6.86 0-42.29 66.85t-16 206.28q29.72 129.14 117.14 176.57 87.43 47.43 167.43 44-2.28 1.14-19.43 25.14-17.14 24-16 68.58-1.15 2.28-36 14.28t-79.43-2.86q-43.43-20.57-65.71-49.71-22.28-29.14-22.28-31.43-1.15-5.71-36-34.28-34.86-28.58-79.43-12.58-3.43 0-1.14 12.58 2.28 12.57 46.86 34.28l26.29 40q22.86 36.57 38.28 69.71 15.43 33.14 73.14 50.86 57.72 17.72 129.72 1.72v133.71q1.14 1.14-2.29 6.85-3.43 5.72-20.57 10.86t-18.86 10.86q-1.72 5.72 7.43 6.86h418.28q9.14-1.14 7.43-6.86-1.71-5.72-18.86-10.86-17.14-5.14-20.58-10.86-3.43-5.71-2.28-6.85V762.28q-3.43-44.58-21.14-68.58-17.72-24-20-25.14 80 3.43 167.43-44t117.14-176.57q19.43-139.43-15.43-206.28t-41.72-66.85z"
                        p-id="16650" fill="#1296db"></path>
                  </svg>
                </a>
              </div>

            </div>
            <div class="building-btn">
              BUILDING
            </div>
          </div>
          <div class="rainbow-protocol-box">
            <div class="rainbow-protocol">
              <div class="protocol-title-box">
                <div class="protocol-title part-title-l animate__animated">
                  Technical Architecture Diagram
                </div>
                <div class="detail">
                  There are two versions of RainbowDAO Protocol, Solidity version on EVM and Ink! version on WASM.The
                  Solidity version is mainly deployed on Ethereum, BSC, Polygon, Avalanche, Fantom, and various L2
                  networks; the Ink! version is mainly deployed on the parallel chains on the Polkadot and Kusama relay
                  chains, as well as other blockchains developed with the substrate framework.
                </div>
              </div>

              <img class="protocol-line" src="../../assets/imgs/protocol_line.png" alt="">
              <div style="position: relative;z-index:2">
                <div class="protocol-top">
                  <div class="lightning-network">
                    <div class="title-inner">
                      Lightning Network
                    </div>
                  </div>
                  <div class="otherY">
                    <div class="title-inner">
                      Other
                    </div>
                  </div>
                </div>
                <div class="protocol-left">
                  <div class="title1">
                    <div class="title-inner">
                      Solidity version on EVM

                    </div>
                  </div>
                  <div class="info1">
                    <div class="item">
                      Arbitrum
                    </div>
                    <div class="item">
                      Optimistic
                    </div>
                    <div class="item">
                      zkSync
                    </div>
                    <div class="item">
                      Other
                    </div>
                  </div>

                  <div class="title2">
                    <div class="title-inner">
                      L2
                    </div>
                  </div>

                  <div class="title3">
                    <div class="title-inner">
                      Innovation Chain
                    </div>
                  </div>

                  <div class="info2">
                    <div class="item">
                      BSC
                    </div>
                    <div class="item">
                      Polygon
                    </div>
                    <div class="item">
                      Avalanche
                    </div>
                    <div class="item">
                      Fantom
                    </div>
                    <div class="other">
                      Other
                    </div>
                  </div>

                </div>
                <div class="protocol-center">
                  <div class="protocol-icon">
                    <img src="../../assets/imgs/rainbow_dao_protocol.png" alt="">
                  </div>
                  <div class="btc-icon">
                    <img src="../../assets/imgs/btc_icon.png" alt="">
                  </div>
                  <div class="dot-icon">
                    <img src="../../assets/imgs/dot_icon.png" alt="">
                  </div>
                  <div class="eth-icon">
                    <img src="../../assets/imgs/eth_icon.png" alt="">
                  </div>
                  <div class="rainbow-icon">
                    <img src="../../assets/imgs/R_icon.png" alt="">
                  </div>

                </div>
                <div class="protocol-right">
                  <div class="title1">
                    <div class="title-inner">
                      Ink! version on WASM
                    </div>
                  </div>
                  <div class="info1">
                    <div class="item">
                      RainbowDAO
                    </div>
                    <div class="item">
                      Parachain
                    </div>
                    <div class="item">
                      Parachain
                    </div>
                    <div class="item">
                      Other
                    </div>
                  </div>

                  <div class="title2">
                    <div class="title-inner">
                      Polkadot
                    </div>
                  </div>

                  <div class="title3">
                    <div class="title-inner">
                      Kusama
                    </div>
                  </div>

                  <div class="info2">
                    <div class="item">
                      RainbowDAO
                    </div>
                    <div class="item">
                      Parachain
                    </div>
                    <div class="item">
                      Parachain
                    </div>
                    <div class="item">
                      Other
                    </div>
                  </div>
                </div>
                <div class="protocol-bottom">
                  <div class="token-economy">
                    <div class="title-inner">
                      Token Economy
                    </div>
                  </div>
                  <div class="community-governance">
                    <div class="title-inner">
                      Community Governance
                    </div>
                  </div>
                  <div class="tip-box">
                    <div class="tip-content">
                      Rainbow chain will be build based on substrate
                    </div>
                  </div>
                </div>
                <div class="bottom">
                  Interconnection among all chains to bulid Bit Civilization
                </div>
              </div>
            </div>
          </div>
          <div class="part2">
            <div class="part-title animate__animated"
                 :class="{'animate__fadeIn': part2ToTop - 100< scrollNumber && scrollNumber< part2ToTop + clintHeight + 100}">
              Eight Types of DAO
            </div>
            <div class="part2-content ">
              <div class="intro">
                DAO is more than a set of smart contracts. In essence, it is a social organization, a social network
                composed of individuals with a common purpose. The code of the same smart contract, used by different
                groups, may cause huge differences.We did some research and initially divide DAO into eight major types:
              </div>
              <div class="list-box">
                <div class="list-item">
                  <div class="icon">
                    <img src="../../assets/imgs/part2_1.png" alt="">
                  </div>
                  <div class="title">
                    1. Protocol DAO
                  </div>
                  <div class="detail">
                    DAO created by various DeFi protocols, the holders of governance tokens make decisions through
                    voting.
                  </div>
                </div>
                <div class="list-item">
                  <div class="icon">
                    <img src="../../assets/imgs/part2_2.png" alt="">
                  </div>
                  <div class="title">
                    2. Investment DAO
                  </div>
                  <div class="detail">
                    DAO created by various crypto investors,maks investment behaviors more transparent, fair and equal.
                  </div>
                </div>
                <div class="list-item">
                  <div class="icon">
                    <img src="../../assets/imgs/part2_3.png" alt="">
                  </div>
                  <div class="title">
                    3. Media DAO
                  </div>
                  <div class="detail">
                    DAO created by various media practitioners, allows information creators and consumers to share the
                    value created by media.
                  </div>
                </div>
                <div class="list-item">
                  <div class="icon">
                    <img src="../../assets/imgs/part2_4.png" alt="">
                  </div>
                  <div class="title">
                    4. Develop DAO
                  </div>
                  <div class="detail">
                    DAO created by blockchain developers, is committed to the development of various open source
                    protocols.
                  </div>
                </div>
                <div class="list-item">
                  <div class="icon">
                    <img src="../../assets/imgs/part2_5.png" alt="">
                  </div>
                  <div class="title">
                    5. NFT DAO
                  </div>
                  <div class="detail">
                    DAO created by NFT holders. Linking artists,NFT platforms and NFT consumers, etc., to create
                    longer-term value for NFT works.
                  </div>
                </div>
                <div class="list-item">
                  <div class="icon">
                    <img src="../../assets/imgs/part2_6.png" alt="">
                  </div>
                  <div class="title">
                    6. Company DAO
                  </div>
                  <div class="detail">
                    DAO created by various companies, through the DAO to improve the transparency of corporate
                    governance.
                  </div>
                </div>
                <div class="list-item">
                  <div class="icon">
                    <img src="../../assets/imgs/part2_7.png" alt="">
                  </div>
                  <div class="title">
                    7. Government DAO
                  </div>
                  <div class="detail">
                    DAO created by various government organizations, makes governance more transparent, clean, and
                    accept citizen supervision.
                  </div>
                </div>
                <div class="list-item">
                  <div class="icon">
                    <img src="../../assets/imgs/part2_8.png" alt="">
                  </div>
                  <div class="title">
                    8. Tool DAO
                  </div>
                  <div class="detail">
                    DAO, which provides infrastructure services for various DAO organizations, provides DAO operating
                    system and various web3 tool plug-ins.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="part3">
            <div class="part-title-l"
                 :class="{'animate__animated animate__fadeIn': part3ToTop -100< scrollNumber && scrollNumber< part3ToTop + clintHeight +100}">
              Current Problems of DAO Tool Products
            </div>
            <div class="city-content">
              <div class="intro">
                With the vigorous development of various DAOs, the demand for DAO tools has also grown rapidly. However,
                we found that various DAO tools still have some problems, which cannot meet the needs of various DAOs.
                The following are some of the problems that we have summarized in current DAO tool products.
              </div>
              <div class="list-box">
                <div class="list-item">
                  <div class="icon">
                    <img src="../../assets/imgs/part3_1.png" alt="">
                  </div>
                  <div class="title">
                    1. Single Function
                  </div>
                  <div class="detail">
                    The characteristics of single function and cannot carry out complex collaborative work.
                  </div>
                </div>
                <div class="list-item">
                  <div class="icon">
                    <img src="../../assets/imgs/part3_2.png" alt="">
                  </div>
                  <div class="title">
                    2. Low Expansibility
                  </div>
                  <div class="detail">
                    The characteristics of low expansibility, and cannot achieve function iteration and upgrade.
                  </div>
                </div>
                <div class="list-item">
                  <div class="icon">
                    <img src="../../assets/imgs/part3_3.png" alt="">
                  </div>
                  <div class="title">
                    3. Low Compatibility
                  </div>
                  <div class="detail">
                    The characteristics of low compatibility. There is no unified api interface or unified development
                    document between each other.
                  </div>
                </div>
                <div class="list-item">
                  <div class="icon">
                    <img src="../../assets/imgs/part3_4.png" alt="">
                  </div>
                  <div class="title">
                    4. Low Diversity
                  </div>
                  <div class="detail">
                    The characteristics of low diversity, and cannot meet the diversified and differentiated needs of
                    the DAO organization.
                  </div>
                </div>
                <div class="list-item">
                  <div class="icon">
                    <img src="../../assets/imgs/part3_5.png" alt="">
                  </div>
                  <div class="title">
                    5. Low Operability
                  </div>
                  <div class="detail">
                    The characteristics of low operability ,and it is even more difficult to use these DAO tools for
                    some novice users.
                  </div>
                </div>
                <div class="list-item">
                  <div class="icon">
                    <img src="../../assets/imgs/part3_6.png" alt="">
                  </div>
                  <div class="title">
                    6. Poor Innovation
                  </div>
                  <div class="detail">
                    The characteristics of poor innovation, and they have not essentially solved some of the pain points
                    that are common in the DAO industry.
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
        <div class="part4">
          <div class="part-title"
               :class="{'animate__animated animate__fadeIn': part4ToTop - 50< scrollNumber && scrollNumber< part4ToTop + clintHeight + 100}">
            Difficulties In Current DAO Industry
          </div>
          <div class="intro">
            We found that although DAO represents the future and will develop into the basic organizational unit of
            human civilization , the entire DAO industry is still in the initial stage of development. We have now
            summarized some of the common difficulties in the DAO industry, mainly as follows:
          </div>
          <div class="part4-list">
            <div class="part4-list-item">
              <div class="index-box">
                <div class="index">
                  1
                </div>
              </div>
              <div class="part4-list-item-content">
                How to establish a reasonable organizational structure while insisting on decentralization
              </div>
            </div>
            <div class="part4-list-item">
              <div class="index-box">
                <div class="index">
                  2
                </div>
              </div>
              <div class="part4-list-item-content">
                How to improve efficiency and strengthen power of execution while insisting on decentralization
              </div>
            </div>
            <div class="part4-list-item">
              <div class="index-box">
                <div class="index">
                  3
                </div>
              </div>
              <div class="part4-list-item-content">
                How to guarantee a fair voting
              </div>
            </div>
            <div class="part4-list-item">
              <div class="index-box">
                <div class="index">
                  4
                </div>
              </div>
              <div class="part4-list-item-content">
                How to quantify the contribution of community members
              </div>
            </div>
            <div class="part4-list-item">
              <div class="index-box">
                <div class="index">
                  5
                </div>
              </div>
              <div class="part4-list-item-content">
                How to encourage participation of community members
              </div>
            </div>
            <div class="part4-list-item">
              <div class="index-box">
                <div class="index">
                  6
                </div>
              </div>
              <div class="part4-list-item-content">
                How to successively conduct collective decision-making
              </div>
            </div>
            <div class="part4-list-item">
              <div class="index-box">
                <div class="index">
                  7
                </div>
              </div>
              <div class="part4-list-item-content">
                How to establish a reasonable financial system
              </div>
            </div>
            <div class="part4-list-item">
              <div class="index-box">
                <div class="index">
                  8
                </div>
              </div>
              <div class="part4-list-item-content">
                How to generate income for DAO and get income for its members
              </div>
            </div>
          </div>
        </div>
        <div class="part5">
          <div class="part-title-l"
               :class="{'animate__animated animate__flipInX': part5ToTop - 100< scrollNumber && scrollNumber< part5ToTop + clintHeight + 100}">
            Solution of RainbowDAO Protocol
          </div>
          <div class="part5-content">
            <p>
              Our Rainbowcity Foundation team has been conducting in-depth research on the DAO field. We hope to
              innovate
              on the basis of existing products in the industry and develop DAO tool products that truly meet the needs
              of
              the DAO market. After exploration and research, we decided to launch the RainbowDAO Protocol, and really
              set
              out to solve the pain points in the DAO industry.
            </p>
            <p>
              In the RainbowDAO Protocol, we innovatively put forward
              the concept of DCV. The development of all DAO tools revolves around DCV. DCV, namely DAO Controlled
              Value.
            </p>
            <p>
              That is, the value is not controlled by a single individual or centralized entity, but by DAOs at
              different
              levels. Through the DAO governance contract, the DAO can control each core parameter and decision switch
              in
              the protocol, and ultimately the holder of the governance token will decide the development direction of
              the
              entire DAO through voting.
            </p>
            <p>
              All DAO rules are open and transparent, and all decisions are open to the
              community. Fully transparent DAO governance is the most fundamental guarantee for increasing community
              consensus. Only when everything is transparent and open will it be fairer, better to gain the trust of the
              community, and to gather consensus among more communities.
            </p>
          </div>
          <img class="part5-dao-img" src="../../assets/imgs/part5_daoctrolledvalue.png" alt="">
        </div>
        <div class="part6">
          <div class="part-title"
               :class="{'animate__animated animate__fadeIn': part6ToTop - 50< scrollNumber }">
            Innovations of RainbowDAO Protocol
          </div>
          <div class="intro">
            In order to better meet the needs of the DAO industry, through the RainbowDAO Protocol, we have achieved
            three major innovations, which enable the DAO infrastructure to be upgraded and expanded infinitely, and
            truly meet the diversified needs of the DAO organization.
          </div>
          <div class="list-box">
            <div class="list-item">
              <div class="icon">
                <img src="../../assets/imgs/part6_list_1.png" alt="">
              </div>
              <div class="title">
                1. Governance Dao Function
              </div>
              <div class="detail">
                Governance DAO is mainly reflected in two levels. First, the entire RainbowDAO Protocol is controlled by
                RBD governance DAO. The second point is that each independent DAO created through the protocol will
                generate a new governance DAO.
              </div>
            </div>
            <div class="list-item">
              <div class="icon">
                <img src="../../assets/imgs/part6_list_2.png" alt="">
              </div>
              <div class="title">
                2. RainbowCore Function
              </div>
              <div class="detail">
                The Rainbowcore module is divided into four parts, RoleManage, AuthorityManage, RouteManage and
                CoreManage. The combination of these four functions makes the protocol a whole that can be flexibly
                matched with different roles and different permissions.
              </div>
            </div>
            <div class="list-item">
              <div class="icon">
                <img src="../../assets/imgs/part6_list_3.png" alt="">
              </div>
              <div class="title">
                3. DCV Controller Function
              </div>
              <div class="detail">
                With DCV as the core, we have innovatively developed the DCV controller function. Each controller is
                composed of a series of smart contracts. Through the DCV controller function, each DAO can flexibly
                control the assets in the DCV.
              </div>
            </div>
          </div>
        </div>
        <div class="part7">
          <div class="part-title-l"
               :class="{'animate__animated animate__fadeIn': part7ToTop - 100< scrollNumber }">
            Eight Features of RainbowDAO Protocol
          </div>
          <div class="intro">
            The three innovative functions can be used independently or combined together. This makes the protocol
            unlimited scalability and upgradeability. It is with these three innovations that our RainbowDAO Protocol
            has the following eight features:
          </div>
          <div class="list-box">
            <div class="list-item">
              <div class="icon">
                <img src="../../assets/imgs/part7_list_1.png" alt="">
              </div>
              <div class="title">
                1. Modularity
              </div>
              <div class="detail">
                Each function can exist as an independent module, which can easily trigger upgrading and evolution of
                the protocol.
              </div>
            </div>
            <div class="list-item">
              <div class="icon">
                <img src="../../assets/imgs/part7_list_2.png" alt="">
              </div>
              <div class="title">
                2. Plug-in
              </div>
              <div class="detail">
                Each module of the RainbowDAO Protocol is very flexible like a plug-in.
              </div>
            </div>
            <div class="list-item">
              <div class="icon">
                <img src="../../assets/imgs/part7_list_3.png" alt="">
              </div>
              <div class="title">
                3. Composability
              </div>
              <div class="detail">
                Each module can be combined with each other. Some simple modules can work together to form a powerful
                module..
              </div>
            </div>
            <div class="list-item">
              <div class="icon">
                <img src="../../assets/imgs/part7_list_4.png" alt="">
              </div>
              <div class="title">
                4. Scalability
              </div>
              <div class="detail">
                Based on the modular combination, the protocol has very strong scalability and new functions can be
                added through the addition of modules.
              </div>
            </div>
            <div class="list-item">
              <div class="icon">
                <img src="../../assets/imgs/part7_list_5.png" alt="">
              </div>
              <div class="title">
                5. Detachability
              </div>
              <div class="detail">
                The modules can be disassembled to achieve the simplification of DAO functional modules and adapt to
                actual needs.
              </div>
            </div>
            <div class="list-item">
              <div class="icon">
                <img src="../../assets/imgs/part7_list_6.png" alt="">
              </div>
              <div class="title">
                6. Interoperability
              </div>
              <div class="detail">
                Each module of the Rainbow DAO protocol is can interact with each other.
              </div>
            </div>
            <div class="list-item">
              <div class="icon">
                <img src="../../assets/imgs/part7_list_7.png" alt="">
              </div>
              <div class="title">
                7. Flexibility
              </div>
              <div class="detail">
                The RainbowDAO Protocol can be combined, extended, and disassembled. This gives the protocol strong
                flexibility.
              </div>
            </div>
            <div class="list-item">
              <div class="icon">
                <img src="../../assets/imgs/part7_list_8.png" alt="">
              </div>
              <div class="title">
                8. Growth
              </div>
              <div class="detail">
                Based on the first 7 features, the protocol will evolve into a living system that can upgrade infinitely
                with a decentralized idea.
              </div>
            </div>
          </div>
        </div>
        <div class="part8">
          <div class="part-title"
               :class="{'animate__animated animate__flipInX': part8ToTop - 50< scrollNumber && scrollNumber< part8ToTop + clintHeight +100}">
            Eight Concepts of RainbowDAO Protocol
          </div>
          <div class="intro">
            With the idea of decentralization as the core, the RainbowDAO Protocol has always adhered to eight concepts
            to guide us in the exploration and implementation of the DAO field:
          </div>
          <div class="list-box">
            <div class="list-item">
              <div class="icon">
                <img src="../../assets/imgs/part8_list_1.png" alt="">
              </div>
              <div class="title">
                1. Decentralization
              </div>
              <div class="detail">
                It is the soul of the RainbowDAO Protocol. The protocol itself and DAOs of all levels are decentralized.
              </div>
            </div>
            <div class="list-item">
              <div class="icon">
                <img src="../../assets/imgs/part8_list_2.png" alt="">
              </div>
              <div class="title">
                2. Trust-free
              </div>
              <div class="detail">
                RainbowDAO Protocol adheres to the idea of "code is law". All rules are constructed by code with no need
                for intermediary.
              </div>
            </div>
            <div class="list-item">
              <div class="icon">
                <img src="../../assets/imgs/part8_list_3.png" alt="">
              </div>
              <div class="title">
                3. Censorship-Resistant
              </div>
              <div class="detail">
                All rules of the RainbowDAO Protocol are set by code to achieve complete on-chain governance, and the
                value of all assets is controlled by the chain.
              </div>
            </div>
            <div class="list-item">
              <div class="icon">
                <img src="../../assets/imgs/part8_list_4.png" alt="">
              </div>
              <div class="title">
                4. Transparency
              </div>
              <div class="detail">
                The RainbowDAO Protocol realizes complete on-chain governance. All data is clearly displayed on the
                chain.All data is transparent.
              </div>
            </div>
            <div class="list-item">
              <div class="icon">
                <img src="../../assets/imgs/part8_list_5.png" alt="">
              </div>
              <div class="title">
                5. No Need For Permission
              </div>
              <div class="detail">
                The RainbowDAO Protocol is constructed by smart contracts on the chain. Anyone can use the protocol to
                build a DAO without permission.
              </div>
            </div>
            <div class="list-item">
              <div class="icon">
                <img src="../../assets/imgs/part8_list_6.png" alt="">
              </div>
              <div class="title">
                6. Openness
              </div>
              <div class="detail">
                RainbowDAO Protocol is a set of open protocols and these protocols can interact with internal modules
                and external protocols.
              </div>
            </div>
            <div class="list-item">
              <div class="icon">
                <img src="../../assets/imgs/part8_list_7.png" alt="">
              </div>
              <div class="title">
                7. Popularity
              </div>
              <div class="detail">
                RainbowDAO Protocol can be applied to various types of DAOs, large or small in size.
              </div>
            </div>
            <div class="list-item">
              <div class="icon">
                <img src="../../assets/imgs/part8_list_8.png" alt="">
              </div>
              <div class="title">
                8. Inclusiveness
              </div>
              <div class="detail">
                The RainbowDAO Protocol can be employed by different types of people. We always hope to build the
                RainbowDAO Protocol into a viable, growing, and warm protocol.
              </div>
            </div>
          </div>
        </div>
        <div class="part9">
          <div class="part-title-l"
               :class="{'animate__animated animate__flipInX': part9ToTop - 50< scrollNumber && scrollNumber< part9ToTop + clintHeight +100}">
            Design Mechanism of RainbowDao Protocol
          </div>
          <div class="intro">
            The RainbowDAO Protocol allows unlimited expansion and unlimited upgrades of DAO. This part is the
            architecture design of the protocol, so that everyone can clearly know the design mechanism of the protocol.
          </div>
          <div class="list-box">
            <div class="list-item">
              <div class="icon">
                <img src="../../assets/imgs/part9_list_1.png" alt="">
              </div>
              <div class="title">
                1. Tier 1 Architecture: RBD Governance Dao
              </div>
              <div class="detail">
                The first layer of the RainbowDAO Protocol consists of RBD governance DAO. The holders of RBD constitute
                the DAO and are responsible for the governance of the entire protocol.
              </div>
            </div>
            <div class="list-item">
              <div class="icon">
                <img src="../../assets/imgs/part9_list_2.png" alt="">
              </div>
              <div class="title">
                2. Tier 2 Architecture: Basic Protocol Layer
              </div>
              <div class="detail">
                The second layer is the basic part of the protocol, which mainly contains six parts: rainbow core
                contract, membership contract, revenue contract, web3 tool contract, DCV controller contract, and the
                DAO factory contract.
              </div>
            </div>
            <div class="list-item">
              <div class="icon">
                <img src="../../assets/imgs/part9_list_3.png" alt="">
              </div>
              <div class="title">
                3. Tier 3 Architecture: DAO Factory
              </div>
              <div class="detail">
                The DAO factory contract is mainly used for the batch creation and management of DAO. It can be divided
                into three parts: DAO type contract, DAO initialization contract, and DAO management contract.
              </div>
            </div>
          </div>
          <img class="part9_img" src="../../static/imgs/part9_img.png" alt="">
        </div>
        <div class="part10">
          <div class="part-title"
               :class="{'animate__animated animate__fadeIn': part10ToTop - 50< scrollNumber}">
            Function Display of RainbowDAO Protocol
          </div>
          <div class="intro">
            Anyone can creat an independent DAO organization through the RainbowDAO Protocol. Through this independent
            DAO, we can carry out three-part extension, and finally make this DAO infinitely upgradeable and expandable,
            allowing it to accommodate tens of thousands or even hundreds of thousands of user groups.
          </div>
          <div class="list-box">
            <div class="list-item">
              <div class="icon">
                <img src="../../assets/imgs/part10_list_1.png" alt="">
              </div>
              <div class="title">
                1. Scale up: Alliance DAO
              </div>
              <div class="detail">
                An independent DAO can join a Alliance DAO, such as investment Alliance DAO, media Alliance DAO, social
                Alliance DAO, and so on.
              </div>
            </div>
            <div class="list-item">
              <div class="icon">
                <img src="../../assets/imgs/part10_list_2.png" alt="">
              </div>
              <div class="title">
                2. Scale Out: Parent DAO and Child DAO
              </div>
              <div class="detail">
                Each independent DAO can create child DAOs belonging to this independent DAO. This is equivalent to the
                relationship between the parent company and the subsidiary.
              </div>
            </div>
            <div class="list-item">
              <div class="icon">
                <img src="../../assets/imgs/part10_list_3.png" alt="">
              </div>
              <div class="title">
                3. Scale In: DAO Department Management
              </div>
              <div class="detail">
                Each independent DAO can also creat a department . So it can establish its own clear organizational
                structure, and the department is managed by the multi-signature committee.
              </div>
            </div>
          </div>
          <img class="part10_img" src="../../static/imgs/part10_img.png" alt="">
        </div>
        <div class="part11">
          <img class="part11-img" src="../../static/imgs/part11_img.png" alt="">
        </div>
        <div class="bottom-line-box">
          <div class="left">

          </div>
          <div class="line">

          </div>
          <div class="right">

          </div>
        </div>
        <div class="footer-box">
          <pageFooter v-show="scrollNumber>footerToTop "></pageFooter>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import $ from "jquery";

export default {
  name: "rainbowCityPage",
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
      part6ToTop: 0,
      part7ToTop: 0,
      part8ToTop: 0,
      part9ToTop: 0,
      part10ToTop: 0,
      part11ToTop: 0,
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
      $(".header-title").css("transform", `translate3d(${transValue / 3}px,0,0)`);
      // $(".city-mask").css("transform", `translate3d(${transValue / 2}px,0,0)`);

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
    this.part6ToTop = document.getElementsByClassName("part6")[0].offsetTop - document.body.clientHeight;
    this.part7ToTop = document.getElementsByClassName("part7")[0].offsetTop - document.body.clientHeight;
    this.part8ToTop = document.getElementsByClassName("part8")[0].offsetTop - document.body.clientHeight;
    this.part9ToTop = document.getElementsByClassName("part9")[0].offsetTop - document.body.clientHeight;
    this.part10ToTop = document.getElementsByClassName("part10")[0].offsetTop - document.body.clientHeight;
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
    box-shadow: 0 0 50px rgba(93,147,255,0.6);
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


.rainbowDao {
  width: 100%;
  height: auto;
  overflow-x: hidden;

  .title {
    font-family: "Miriam Libre", sans-serif;
  }

  .intro {
    line-height: 32px;
    padding: 20px 0 10px;
  }

  .list-box {
    display: flex;
    margin: 0 auto;
    flex-wrap: wrap;

    .list-item {
      width: 25%;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 30px 0 60px;

      .icon {
        width: 80px;
        height: 80px;

        img {
          width: 100%;
          height: 100%;
        }
      }

      .title {
        font-size: 22px;
        font-weight: bold;
        text-align: center;
        padding: 16px 0;
      }

      .detail {
        font-size: 15px;
        font-weight: 500;
        padding: 0 10px;
        text-align: center;
        line-height: 20px;
      }
    }
  }

  font-family: "Libre Franklin", sans-serif;

  .page-footer .page-footer-part1 {
    left: 0 !important;
  }

  .city-mask {
    width: 120%;
    height: 100%;
    position: absolute;
    top: 0px;
    animation: scrollInTop 3s linear;
    left: 0;
    background: url("../../static/imgs/city_mask.png");
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

  .header-title-box {
    padding: 110px 0;
    background: url("../../static/imgs/rainbowdao_bg1.png");

    background-size: 100% 100%;

    .header-title {
      transition: 1.5s;
      transition-timing-function: ease-out;
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
            //animation: flash 6s infinite linear;
            //animation-delay: 3s !important;

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
        font-weight: 400;
        text-align: center;
        color: #ffffff;
        line-height: 60px;
      }

      .tip2 {
        margin: 50px auto;
        width: 1200px;
        height: 100px;
        animation: fadeIn 2s linear;
        font-size: 20px;
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
        background: rgba(255, 255, 255, 0.12);
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        padding: 10px;

        .icon path {
          fill: white !important;
        }

        &:hover .icon path {
          fill: #10101B !important;
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

    .building-btn {
      font-size: 16px;
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

  .rainbow-protocol-box {
    background: url("../../static/imgs/protocol_bg.png");
    background-size: 100% 100%;
    overflow: hidden;

    .rainbow-protocol {
      height: 900px;
      width: 1200px;
      margin: 350px auto 0;
      position: relative;
      line-height: 40px;

      .protocol-title-box {
        margin-top: -330px !important;
        position: absolute !important;
        width: 100%;

        .protocol-title {
          margin-top: 20px !important;
        }

        .detail {
          padding: 60px 0;
          width: 1200px;
          height: 120px;
          font-size: 18px;
          font-weight: 500;
          text-align: center;
          color: #6b005a;
          line-height: 30px;
        }
      }


      .protocol-line {
        position: absolute;
        width: 1200px;
        left: 6px;
        top: 48px;
        z-index: 0;
      }

      .protocol-top {
        position: absolute;
        left: calc(50% - 290px);
        top: 9px;
        display: flex;
        justify-content: space-between;
        color: #fff;
        text-align: center;
        width: 580px;

        .lightning-network, .otherY {
          width: 260px;
          height: 40px;
          border-radius: 21px;
          border: 1px solid #FFAF18;
          box-sizing: content-box;
          padding: 1px;
          font-size: 20px;
          animation: twinkleYellow 10s infinite linear;
          animation-delay: 5s !important;
          .title-inner {
            border-radius: 40px;
            background: #FFAF18;
          }
        }
      }

      .protocol-left {
        position: absolute;
        top: 100px;
        left: -50px;
        height: 500px;
        text-align: center;
        color: #94F2F5;

        .title1, .title2, .title3 {
          position: relative;
          font-size: 20px;
          line-height: 44px;
          text-align: center;
          height: 44px;
          border: 1px solid #5d93ff;
          border-radius: 31px;
          padding: 1px;
          box-sizing: content-box;
          color: #ffffff;
          animation: twinkleBlue 11s infinite linear;
          .title-inner {
            border-radius: 40px;
            background: #5d93ff;
          }
        }

        .info1, .info2 {
          display: flex;
          position: relative;

          .item, .other {
            margin-left: 16px;
            width: 94px;
            height: 40px;
            font-size: 16px;
            line-height: 40px;
            font-weight: bold;
            background: #d1deff;
            border: 1px solid #5d93ff;
            color: #5d93ff;
            border-radius: 26px;
          }
        }

        .title1 {
          width: 300px;
          left: 70px;
        }

        .info1 {
          top: 26px;
        }

        .title2 {
          width: 130px;
          left: 170px;
          top: 66px;
        }

        .title3 {
          width: 190px;
          left: 130px;
          top: 182px;
        }

        .info2 {
          top: 220px;

          .other {
            position: relative;
            left: -260px;
            top: 60px;
          }
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
          left: 110px;
          top: 70px;
          width: 368px;
          height: 368px;
          z-index: -1;
          opacity: 0.8;

          img {
            width: 100%;
          }
        }

        .btc-icon, .dot-icon, .eth-icon, .rainbow-icon {
          position: absolute;
          z-index: 10;
          width: 120px;
          height: 120px;
          border-radius: 50%;

          img {
            width: 100%;
          }
        }

        .btc-icon {
          top: -1px;
          left: 232px;
          animation: twinkleYellow 7s infinite linear, rotateCircle 20s infinite linear;
          animation-delay: 5s !important;
        }

        .eth-icon {
          top: 202px;
          left: 34px;
          animation: twinkleBlue 11s infinite linear, rotateCircle 20s infinite linear;
          animation-delay: 5s !important;

        }

        .rainbow-icon {
          top: 390px;
          left: 234px;
          animation: twinklePurple 12s infinite linear, rotateCircle 20s infinite linear;
          animation-delay: 5s !important;
        }

        .dot-icon {
          top: 202px;
          animation: twinkleOrigen 13s infinite linear, rotateCircle 20s infinite linear;
          left: 432px;
          animation-delay: 5s !important;
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
        right: 0px;
        text-align: center;
        color: #FFB7B7;

        .title1, .title2, .title3 {
          position: relative;
          font-size: 20px;
          line-height: 44px;
          text-align: center;
          height: 44px;
          border: 1px solid #e10082;
          padding: 1px;
          border-radius: 31px;
          color: #ffffff;
          box-sizing: content-box;
          .title-inner {
            border-radius: 40px;
            background: #e10082;
          }
        }

        .info1, .info2 {
          display: flex;
          position: relative;

          .item, .other {
            margin-left: 16px;
            font-size: 16px;
            line-height: 40px;
            padding: 0 10px;
            height: 40px;
            background: rgba(225, 0, 130, 0.20);
            border: 1px solid #e10082;
            border-radius: 30px;
            color: #e10082;
            font-weight: bold;
          }
        }

        .title1 {
          width: 300px;
          left: 140px;
        }

        .info1 {
          top: 25px;
          left: 42px;
        }

        .title2 {
          width: 160px;
          left: 222px;
          top: 68px;
        }

        .title3 {
          width: 160px;
          left: 222px;
          top: 176px;
        }

        .info2 {
          top: 220px;
          left: 40px;

          .other {
            position: relative;
            left: -260px;
            top: 60px;
          }
        }

      }

      .protocol-bottom {
        position: absolute;
        top: 656px;
        left: 0px;
        text-align: center;
        color: #fff;

        .token-economy, .community-governance {
          position: absolute;
          height: 40px;
          border-radius: 21px;
          font-size: 20px;
          animation: twinklePurple 7s infinite linear;
          animation-delay: 5s !important;
          border: 1px solid #c471ed;
          padding: 1px;
          box-sizing: content-box;
          .title-inner {
            border-radius: 40px;
            background: linear-gradient(90deg, #12c2e9, #c471ed 55%, #f64f59);
          }
        }

        .token-economy {
          width: 260px;
          left: 320px;
        }

        .community-governance {
          width: 260px;
          left: 620px;
        }

        .tip-box {
          width: 350px;
          height: 36px;
          line-height: 36px;
          border: 1px solid;
          border-image: linear-gradient(90deg, #12c2e9, #c471ed 55%, #f64f59) 1 1;
          border-radius: 26px;
          position: absolute;
          left: 710px;
          top: -80px;

          .tip-content {
            font-weight: bold;
            background: linear-gradient(90deg, #12c2e9 0%, #c471ed 64%, #f64f59 100%);
            color: transparent;
            -webkit-background-clip: text;
          }
        }
      }

      .bottom {
        position: absolute;
        width: 800px;
        top: 760px;
        left: calc(50% - 400px);
        height: 33px;
        font-size: 26px;

        font-weight: bold;
        text-align: center;
        color: #e10082;
        line-height: 34px;
      }

    }
  }


  .part2 {
    padding-bottom: 30px;
    background: url("../../static/imgs/rainbowdao_part2_bg.png");
    background-size: 100% 100%;
    overflow: hidden;
    color: #fff;

    .part2-content {
      width: 1200px;
      margin: 0 auto;
      padding: 20px 0 40px;
      font-size: 16px;
      text-align: center;

      .intro {
        width: 900px;
        margin: 0 auto;
      }
    }
  }

  .part3 {
    background: url("../../static/imgs/part3_bg.png");
    background-size: 100% 100%;
    overflow: hidden;

    .city-content {
      width: 1000px;
      margin: 70px auto;
      color: #FF238B;

      .intro {
        color: #6B005A;
        text-align: center;
        font-size: 16px;
        width: 900px;
        margin: 20px auto;

      }

      .list-box {

        .list-item {
          width: 33.3% !important;

          .detail {
            color: #A5619A;
          }
        }
      }
    }
  }

  .part4 {
    background: url("../../static/imgs/part4_bg.png");
    background-size: 100% 100%;
    overflow: hidden;
    color: #fff;

    .intro {
      width: 900px;
      margin: 30px auto;
      font-size: 16px;
      text-align: center;
    }

    .part4-list {
      display: flex;
      flex-wrap: wrap;
      width: 1100px;
      margin: 30px auto;

      .part4-list-item {
        width: 50%;
        display: flex;
        padding: 10px 0;
        align-items: center;

        .index-box {
          padding: 3px;
          border-radius: 50%;
          border: 2px solid rgba(255, 255, 255, 0.30);
          width: 60px;
          height: 60px;
          flex-shrink: 0;

          .index {
            background: #4c19c7;
            border-radius: 50%;
            width: 100%;
            height: 100%;
            opacity: 0.8;
            text-align: center;
            font-size: 39px;
          }
        }

        .part4-list-item-content {
          font-size: 20px;
          padding: 0 30px;
        }
      }
    }

  }

  .part5 {
    padding-bottom: 90px;
    position: relative;
    background: url("../../static/imgs/part5_bg.png");
    background-size: 100% 100%;
    overflow: hidden;

    .part5-content {
      color: #6B005A;
      font-size: 16px;
      width: 1000px;
      margin: 60px auto 0;
      text-align: center;

      p {
        margin-top: 36px;
      }

    }

    .part5-dao-img {
      width: 1100px;
      margin-top: 80px;
      margin-left: calc(50% - 550px);
    }
  }


  .part6 {
    overflow: hidden;
    background-image: url("../../static/imgs/part6_bg.png");
    background-size: 100% 100%;
    color: #fff;

    .intro {
      width: 900px;
      margin: 60px auto;
      font-size: 17px;
      text-align: center;
    }

    .list-box {
      width: 1100px;
      margin: 0 auto;

      .list-item {
        width: 33.3% !important;

        .detail {
          opacity: 0.75;
        }
      }
    }
  }

  .part7 {
    width: 100%;
    background-color: floralwhite;
    background-image: url("../../static/imgs/part7_bg.png");
    background-size: 100% 100%;
    overflow: hidden;
    color: #FF238B;

    .intro {
      width: 1000px;
      margin: 30px auto;
      font-size: 18px;
      color: #6B005A;
      text-align: center;
    }

    .list-box {
      width: 1100px;
      margin: 30px auto;
    }

  }

  .part8 {
    background-color: floralwhite;
    overflow: hidden;
    background-image: url("../../static/imgs/part6_bg.png");
    background-size: 100% 100%;
    color: #fff;

    .intro {
      width: 1000px;
      margin: 30px auto;
      font-size: 18px;
      text-align: center;
    }

    .list-box {
      width: 1100px;

      .detail {
        opacity: 0.75;
      }
    }
  }

  .part9 {
    overflow: hidden;
    background-image: url("../../static/imgs/part9_bg.png");
    background-size: 100% 100%;
    color: #FF238B;

    .intro {
      width: 1000px;
      margin: 30px auto;
      font-size: 18px;
      text-align: center;
      color: #6B005A;
    }

    .list-box {
      width: 1100px;
      border-bottom: 1px solid rgba(255, 35, 139, 0.50);

      .list-item {
        width: 33.3%;
      }

      .detail {
        color: #A5619A;
      }
    }

    .part9_img {
      width: 90%;
      margin: 50px 0 60px 5%;
    }
  }

  .part10 {
    overflow: hidden;
    background-image: url("../../static/imgs/part10_bg.png");
    background-size: 100% 100%;
    color: #fff;

    .intro {
      width: 1000px;
      margin: 30px auto;
      font-size: 18px;
      text-align: center;
    }

    .list-box {
      width: 1100px;

      .list-item {
        width: 33.3%;
      }
    }

    .part10_img {
      width: 90%;
      margin: 30px 0 30px 5%;
    }
  }

  .part11 {
    overflow: hidden;
    .part11-img {
      width: 100%;
    }
  }
  .bottom-line-box{
    height: 4px;
    width: 100%;
    position: relative;
    z-index:1;
    background: #FF238B;
    .left{
      position: absolute;
      width: 46px;
      height: 46px;
      background: #FF238B;
      top:-21px;
      left: 0;
    }
    .right{
      position: absolute;
      width: 46px;
      height: 46px;
      background: #FF238B;
      top:-21px;
      right: 0;
    }
  }
}
</style>
