<template>
  <div class="layout">
    <div id="resize-box">
      <rainbow-nav></rainbow-nav>
      <div class="layout-content">
        <router-view/>
      </div>
      <pageFooter></pageFooter>
    </div>
  </div>
</template>

<script>
import pageFooter from "./components/pageFooter";
export default {
  name: "layout",
  components:{pageFooter},
  data() {
    return {}
  },
  mounted() {
    // let screenWidth = document.documentElement.clientWidth; //窗口宽度
    // let oIframe = document.getElementById("resize-box");
    // if ((screenWidth / 1620) > 1) {
    //   oIframe.style.zoom = `${screenWidth / 1620}`;
    // }

  },
  methods: {

  }
}
</script>


<style lang="scss" scoped>
@media screen and (min-width:1960px){
  #resize-box{
    zoom: 1.3;
  }
}
#galaxy {
  width: 100%;
  height: 100%;
  opacity: 0.8;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0);
}


@keyframes glow {
  0%, 100% {
    text-shadow: 0 0 20px #12C2E9;
  }
  40% {
    text-shadow: 0 0 20px #C471ED;
  }
  75% {
    text-shadow: 0 0 20px #F64F59;
  }
}
//public css
::v-deep .rainbow-panel{
  position: relative;
  color: black;
  width: 1120px;
  z-index: 1000;
  top: -130px;
  margin: 0px auto 0;
  padding: 30px;
  background: #ffffff;
  border: 1px solid #f8f8f8;
  border-radius: 10px;
  box-shadow: 0px 20px 20px 3px rgba(156,156,156,0.10);
  .title{
    width: 157px;
    height: 37px;
    font-size: 26px;
    font-family: Arial, Arial-Black;
    font-weight: 900;
    text-align: left;
    color: #333333;
    line-height: 37px;
  }
}
.layout {
  background: #10101B;

  ::v-deep .swiper-container, .swiper-slide {
    height: 100% !important;
  }

  ::v-deep .swiper-pagination {
    width: 30px;
    position: fixed;
    left: 10px !important;
    top: calc(50% - 100px);
    z-index: 3;

    .swiper-pagination-bullet {
      display: inline-block;
      width: 20px;
      height: 20px;
      background: rgba(255, 255, 255, 0.15);
      border: 2px solid #2c3e50 !important;
      margin-top: 6px;
      //border-image: linear-gradient(90deg, #12c2e9, #c471ed 55%, #f64f59) 1 1;
      border-radius: 50%;
      cursor: pointer;
    }

    .swiper-pagination-bullet-active {
      border: 3px solid #2c3e50 !important;
      background: linear-gradient(90deg, #12c2e9 0%, #c471ed 64%, #f64f59 100%);
    }
  }

  .layout-content {
    height: calc(100% - 52px);
    min-height: 500px;
    background: #fff url("./assets/imgs/content_bg.png");
    background-size: 100% 100%;
  }


  ::v-deep .page-header {
    width: 900px;
    margin: 20px auto 0px;
    display: flex;
    padding-bottom: 10px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.10);

    .page-header-img {
      width: 110px;
    }

    .page-header-index {
      display: block;
      font: 900 70px 'Concert One', sans-serif;
      text-transform: uppercase;
      color: transparent;
      -webkit-text-stroke: 1px #fff;
      animation: glow 20s ease-in-out infinite;
    }

    .page-header-name {
      font: 900 50px 'Concert One', sans-serif;
      text-transform: uppercase;
      background: linear-gradient(90deg, #12c2e9 0%, #c471ed 64%, #f64f59 100%);
      -webkit-text-fill-color: transparent;
      -webkit-background-clip: text;
    }

    .page-header-title {
      text-transform: uppercase;
      margin-top: 10px;
      width: 680px;
      font-size: 28px;
      font-weight: bold;
      text-align: justify;
      line-height: 35px;
      margin-left: 40px;
    }
  }

  ::v-deep .page-content {
    width: 900px;
    padding: 0 100px;
    margin: 0px auto;
    font-size: 16px;
    text-align: justify;
    color: #ffffff;
    line-height: 30px;
    box-sizing: content-box;

    p {
      margin-top: 20px;
    }
  }
}
</style>
