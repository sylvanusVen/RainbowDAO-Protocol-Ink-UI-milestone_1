<template>
  <div class="management">
    <rainbow-nav-new></rainbow-nav-new>
    <div class="rainbow-panel">
      <div class="rainbow-nav-box">
        <div class="nav-item " :class="{'active': 0 == activeIndex}" @click="activeIndex=0">
          Role management
        </div>
        <div class="nav-item" :class="{'active': 1 == activeIndex}" @click="activeIndex=1">
          Authority management
        </div>
        <div class="nav-item" :class="{'active': 2 == activeIndex}" @click="activeIndex=2">
          Route management
        </div>
      </div>
      <div class="content">
        <div class="role" v-show="activeIndex==0">
          <div class="title">
            Role management
          </div>
          <div class="role-list">
            <div class="role-item">
              <div class="icon">
                <img src="" alt="">
              </div>
              <div class="name">
                Issuer
              </div>
              <div class="detail">
                This is the token originator
              </div>
            </div>
          </div>
          <div class="confirm-btn rainbow-btn">
            confirm
          </div>
        </div>
        <div class="authority" v-show="activeIndex==1">
          <div class="title">
            Authority management
          </div>
          <div class="role-list">
            <div class="role-item">
              <div class="icon">
                <img src="" alt="">
              </div>
              <div class="name">
                Issuer
              </div>
              <div class="detail">
                This is the token originator
              </div>
            </div>
          </div>
          <div class="confirm-btn rainbow-btn">
            confirm
          </div>
        </div>
        <div class="route" v-show="activeIndex==2">
          <div class="title">
            Route management
          </div>
          <div class="role-list">
            <div class="role-item">
              <div class="icon">
                <img src="" alt="">
              </div>
              <div class="name">
                Issuer
              </div>
              <div class="detail">
                This is the token originator
              </div>
            </div>
          </div>
          <div class="confirm-btn rainbow-btn">
            confirm
          </div>
        </div>
      </div>

    </div>
    <pageFooter></pageFooter>
  </div>
</template>

<script>
export default {
  name: "management",
  data() {
    return {
      activeIndex: 0
    }
  }
}
</script>

<style lang="scss" scoped>
.management {
  .content {
    .title {
      padding: 20px 0;
      font-size: 26px;
      font-weight: 900;
      text-align: left;
      color: #333333;
    }

    .role-list {
      margin-top: 20px;

      .role-item {
        margin-top: 20px;
        display: flex;
        align-items: center;

        .icon {
          width: 30px;
          height: 30px;
          border-radius: 50%;

          img {
            width: 100%;
            height: 100%;
            border-radius: 50%;
          }
        }

        .name {
          width: 80px;
          margin: 0 10px;
          color: #333333;
          line-height: 20px;
        }

        .detail {
          padding: 10px;
          background: #fbfcfe;
          border: 1px solid #eaeaea;
          border-radius: 10px;
        }
      }
    }

    .confirm-btn {
      margin-top: 30px;
      width: 80px;
      height: 32px;
      background: linear-gradient(90deg, #12c2e9 0%, #c471ed 64%, #f64f59 100%);
      border-radius: 10px;
      box-shadow: 0px 3px 6px 0px rgba(128, 4, 149, 0.30);
      color: #fff;
      text-align: center;
      line-height: 32px;
      cursor: pointer;
    }
  }
}
</style>
