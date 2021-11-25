<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>


export default {
  name: 'App',
  components: {

  },
  methods:{

  },
  mounted() {
  }
}
</script>

<style lang="scss">
@keyframes moveBall1 {
  0%{
    transform: translate(100px, 200px);
  }
  25%{
    transform: translate(900px, 600px);
  }
  50%{
    transform: translate(1900px, 1000px);
  }
  75%{
    transform: translate(1000px, 600px);
  }
  100%{
    transform: translate(100px, 200px);
  }
}
@keyframes moveBall2 {
  0%{
    transform: translate(0px, 0px);
  }
  25%{
    transform: translate(100px, 900px);
  }
  50%{
    transform: translate(600px, 1900px);
  }
  75%{
    transform: translate(100px, 600px);
  }
  100%{
    transform: translate(0px, 0px);
  }
}
@keyframes moveBall3 {
  0%{
    transform: translate(0px, 0px);
  }
  25%{
    transform: translate(-100px, 900px);
  }
  50%{
    transform: translate(-600px, 1900px);
  }
  75%{
    transform: translate(-100px, 600px);
  }
  100%{
    transform: translate(0px, 0px);
  }
}
@keyframes moveBall4 {
  0%{
    transform: translate(0px, 0px);
  }
  25%{
    transform: translate(-100px, 900px);
  }
  50%{
    transform: translate(-600px, 1900px);
  }
  75%{
    transform: translate(-100px, 600px);
  }
  100%{
    transform: translate(0px, 0px);
  }
}
@keyframes moveBall5 {
  0%{
    transform: translate(0px, 0px);
  }
  25%{
    transform: translate(-100px, 900px);
  }
  50%{
    transform: translate(-600px, 1900px);
  }
  75%{
    transform: translate(-100px, 600px);
  }
  100%{
    transform: translate(0px, 0px);
  }
}
@keyframes moveBall6 {
  0%{
    transform: translate(0px, 0px);
  }
  25%{
    transform: translate(-100px, 900px);
  }
  50%{
    transform: translate(-600px, 1900px);
  }
  75%{
    transform: translate(-100px, 600px);
  }
  100%{
    transform: translate(0px, 0px);
  }
}
@keyframes moveBall7 {
  0%{
    transform: translate(0px, 0px);
  }
  25%{
    transform: translate(-100px, 900px);
  }
  50%{
    transform: translate(-600px, 1900px);
  }
  75%{
    transform: translate(-100px, 600px);
  }
  100%{
    transform: translate(0px, 0px);
  }
}
@keyframes moveBall8 {
  0%{
    transform: translate(0px, 0px);
  }
  25%{
    transform: translate(-100px, -300px);
  }
  50%{
    transform: translate(-300px, -900px);
  }
  75%{
    transform: translate(-100px, -500px);
  }
  100%{
    transform: translate(0px, 0px);
  }
}
@keyframes moveBall9 {
  0%{
    transform: translate(0px, 0px);
  }
  25%{
    transform: translate(-100px, -900px);
  }
  50%{
    transform: translate(-300px, -1600px);
  }
  75%{
    transform: translate(-100px, -500px);
  }
  100%{
    transform: translate(0px, 0px);
  }
}
@keyframes moveBall10 {
  0%{
    transform: translate(0px, 0px);
  }
  25%{
    transform: translate(-100px, -1200px);
  }
  50%{
    transform: translate(-300px, -1900px);
  }
  75%{
    transform: translate(-100px, -500px);
  }
  100%{
    transform: translate(0px, 0px);
  }
}
#app {
  font-family: Times New Roman,sans-serif;
  color: white;
  ::-webkit-scrollbar{
    width: 0;
  }
  .table-title{
    font-size: 22px;
    font-weight: bold;
    text-align: center;
    color: #DB1F7E;
    line-height: 34px;
    padding: 30px 0;
  }
  .part-title-l{
    margin-top: 80px;
    font-size: 30px;
    font-weight: bold;
    text-align: center;
    padding: 30px 0 16px;
    color: #D0DDFF;
    line-height: 40px;
    text-shadow: 0px 0px 16px #e9eeff;
    position: relative;
    &:after{
      content: '';
      width: 60px;
      height: 5px;
      position: absolute;
      left: calc(50% - 30px);
      bottom: 0;
      background: #db1f7e;
    }
  }
  .part-title {
    margin-top: 80px;
    font-size: 30px;
    font-weight: bold;
    text-align: center;
    padding: 30px 0 10px;
    color: #333;
    line-height: 40px;

    position: relative;
    &:after{
      content: '';
      width: 60px;
      height: 5px;
      position: absolute;
      left: calc(50% - 30px);
      bottom: 0;
      background: #db1f7e;
    }
  }
  .footer-box{
    height: 340px;
    position: relative;
  }

  .long-white-bg{
    background: url("./static/imgs/long_whrite_bg.png");
    background-size: 100% 100%;
    position: relative;
    .part-title{
      color: #333333;
    }
    .page-content{
      color: black!important;
      padding: 30px 0;
    }
    .ball-box{
      position: absolute;
      width: 100%;
      height: 100%;
      overflow: hidden;
      .ball{
        position: absolute;
        border-radius: 50%;
        background:  linear-gradient(160deg, #f1e0ff, #fbfbff);
        z-index: 0;
      }
      .ball:nth-child(1){
        height: 160px;
        width: 160px;
        left: 30px;
        top: 300px;
        animation: moveBall1 400s  infinite;
      }
      .ball:nth-child(2){
        height: 120px;
        width: 120px;
        left: 150px;
        top: 300px;
        animation: moveBall2 400s  infinite;
      }
      .ball:nth-child(3){
        height: 200px;
        width: 200px;
        left: 1700px;
        top: 300px;
        animation: moveBall3 400s  infinite;
      }
      .ball:nth-child(4){
        height: 200px;
        width: 200px;
        left: 700px;
        top: 900px;
        animation: moveBall4 400s  infinite;
      }
      .ball:nth-child(5){
        height: 200px;
        width: 200px;
        left: 100px;
        top: 0px;
        animation: moveBall5 400s  infinite;
      }
      .ball:nth-child(6){
        height: 200px;
        width: 200px;
        left: 90vw;
        top: 0px;
        animation: moveBall5 400s  infinite;
      }
      .ball:nth-child(7){
        height: 100px;
        width: 100px;
        left: 600px;
        top: 0px;
        animation: moveBall5 400s  infinite;
      }
      .ball:nth-child(8){
        height: 100px;
        width: 100px;
        left: 100px;
        top: 1600px;
        animation: moveBall5 400s  infinite;
      }
      .ball:nth-child(9){
        height: 80px;
        width: 80px;
        left: 120px;
        top: 1500px;
        animation: moveBall5 400s  infinite;
      }
      .ball:nth-child(10){
        height: 100px;
        width: 100px;
        left: 90vw;
        bottom: 0;
        animation: moveBall8 400s  infinite;
      }
      .ball:nth-child(11){
        height: 80px;
        width: 80px;
        left: 80vw;
        bottom: 0;
        animation: moveBall8 400s  infinite;
      }
      .ball:nth-child(12){
        height: 100px;
        width: 100px;
        left: 10vw;
        bottom: 0;
        animation: moveBall8 400s  infinite;
      }
      .ball:nth-child(13){
        height: 80px;
        width: 80px;
        left: -1vw;
        bottom: 200px;
        animation: moveBall8 400s  infinite;
      }
      .ball:nth-child(14){
        height: 80px;
        width: 80px;
        left: 30vw;
        bottom: -110px;
        animation: moveBall9 400s  infinite;
      }
      .ball:nth-child(15){
        height: 80px;
        width: 80px;
        left: 10vw;
        bottom: 800px;
        animation: moveBall10 400s  infinite;
      }
    }
  }
  .rainbow-table{
    margin: 50px 0 0 -100px;
    width: 1100px;
    border-radius: 22px;
    border: 0.5px solid #eee;
    color: black;
    background: white;
    overflow: hidden;
    line-height: 20px;
    .row-item:first-child{
      background: linear-gradient(90deg,#12c2e9 0%, #c471ed 64%, #f64f59 100%);
      color: white;
      text-transform: uppercase;
      text-align: center;
    }
    .row-item{
      display: flex;
      text-align: justify;
      &:nth-child(2n){
        background: #f9fbff;
      }
      .col-item{
        display: flex;
        width: 112px;
        padding: 15px 20px;
        justify-content: center;
        align-items: center;
        border: 1px solid #eee;
      }
      .col-item:last-child{
        flex: 1;
      }
    }

  }
}
</style>
