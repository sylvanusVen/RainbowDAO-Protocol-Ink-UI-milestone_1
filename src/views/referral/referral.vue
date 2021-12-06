<template>
  <div class="referral">
    <rainbow-nav-new>
    </rainbow-nav-new>
    <div class="refer-content">
      <div class="rainbow-panel">
        <div class="rainbow-nav-box">
          <div class="nav-item " :class="{'active': 0 == activeIndex}" @click="activeIndex=0">
            Referral relationship
          </div>
          <div class="nav-item" :class="{'active': 1 == activeIndex}" @click="activeIndex=1">
            Member information
          </div>
        </div>
        <div class="referral-relationship" v-show="activeIndex==0">
          <div class="title">
            Referral relationship
          </div>
          <div class="my-code">
            <span>Invitation code</span>
            <div class="number">
              123456
            </div>
          </div>
          <div class="my-inviter">
            <div class="in-title">
              My inviter
            </div>
            <div class="people-info-box">
              <div class="people-info">
                <div class="title-box">
                  <div class="icon">
                    <img src="" alt="">
                  </div>
                  <div class="name">
                    Bruce Banner
                  </div>
                </div>
                <div class="address">
                  0xf45c0A7e91c89aBF37b9b0C274563AAf49cff83F
                </div>
              </div>
            </div>

          </div>
          <div class="inviters">
            <div class="level">
              <div class="level-title">
                level1
              </div>
              <div class="people-info-box">
                <div class="people-info">
                  <div class="title-box">
                    <div class="icon">
                      <img src="" alt="">
                    </div>
                    <div class="name">
                      Bruce Banner
                    </div>
                  </div>
                  <div class="address">
                    0xf45c0A7e91c89aBF37b9b 0C274563AAf49cff83F
                  </div>
                </div>
                <div class="people-info">
                  <div class="title-box">
                    <div class="icon">
                      <img src="" alt="">
                    </div>
                    <div class="name">
                      Bruce Banner
                    </div>
                  </div>
                  <div class="address">
                    0xf45c0A7e91c89aBF37b9b 0C274563AAf49cff83F
                  </div>
                </div>
                <div class="people-info">
                  <div class="title-box">
                    <div class="icon">
                      <img src="" alt="">
                    </div>
                    <div class="name">
                      Bruce Banner
                    </div>
                  </div>
                  <div class="address">
                    0xf45c0A7e91c89aBF37b9b 0C274563AAf49cff83F
                  </div>
                </div>
                <div class="people-info">
                  <div class="title-box">
                    <div class="icon">
                      <img src="" alt="">
                    </div>
                    <div class="name">
                      Bruce Banner
                    </div>
                  </div>
                  <div class="address">
                    0xf45c0A7e91c89aBF37b9b 0C274563AAf49cff83F
                  </div>
                </div>
                <div class="people-info">
                  <div class="title-box">
                    <div class="icon">
                      <img src="" alt="">
                    </div>
                    <div class="name">
                      Bruce Banner
                    </div>
                  </div>
                  <div class="address">
                    0xf45c0A7e91c89aBF37b9b 0C274563AAf49cff83F
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="member-info">
          <div class="title">
            Member information
          </div>
          <div class="people-info-box">
            <div class="people-info">
              <div class="title-box">
                <div class="icon">
                  <img src="" alt="">
                </div>
                <div class="name">
                  Bruce Banner
                </div>
              </div>
              <div class="address">
                0xf45c0A7e91c89aBF37b9b 0C274563AAf49cff83F
              </div>
            </div>
            <div class="people-info">
              <div class="title-box">
                <div class="icon">
                  <img src="" alt="">
                </div>
                <div class="name">
                  Bruce Banner
                </div>
              </div>
              <div class="address">
                0xf45c0A7e91c89aBF37b9b 0C274563AAf49cff83F
              </div>
            </div>
            <div class="people-info">
              <div class="title-box">
                <div class="icon">
                  <img src="" alt="">
                </div>
                <div class="name">
                  Bruce Banner
                </div>
              </div>
              <div class="address">
                0xf45c0A7e91c89aBF37b9b 0C274563AAf49cff83F
              </div>
            </div>
            <div class="people-info">
              <div class="title-box">
                <div class="icon">
                  <img src="" alt="">
                </div>
                <div class="name">
                  Bruce Banner
                </div>
              </div>
              <div class="address">
                0xf45c0A7e91c89aBF37b9b 0C274563AAf49cff83F
              </div>
            </div>
            <div class="people-info">
              <div class="title-box">
                <div class="icon">
                  <img src="" alt="">
                </div>
                <div class="name">
                  Bruce Banner
                </div>
              </div>
              <div class="address">
                0xf45c0A7e91c89aBF37b9b 0C274563AAf49cff83F
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <page-footer></page-footer>
  </div>
</template>

<script>
export default {
  name: "referral",
  data() {
    return {
      activeIndex: 0
    }
  }
}
</script>

<style lang="scss" scoped>
.referral {
  .title {
    padding: 20px 0;
  }

  .people-info-box {
    display: flex;
    flex-wrap: wrap;
  }

  .people-info {
    width: 200px;
    padding: 10px;
    border: 1px solid #eee;
    margin: 10px 20px 10px 0px;
    border-radius: 5px;
    .address {
      color: #999;
      word-wrap : break-word ;
    }
    .title-box {
      display: flex;
      padding: 10px 0;
      align-items: center;

      .icon {
        width: 26px;
        height: 26px;
        border-radius: 50%;

        img {
          width: 100%;
          height: 100%;
        }
      }

      .name {
        font-weight: 600;
        text-align: left;
        color: #6919bb;
        line-height: 20px;
        margin-left: 10px;
      }
    }
  }

  .referral-relationship {
    .my-code {
      display: flex;
      padding: 10px 0;
      align-items: center;

      span {
        font-size: 16px;
      }

      .number {
        border: 1px solid #eaeaea;
        border-radius: 10px;
        padding: 6px 12px;
        margin-left: 20px;
      }

    }

    .my-inviter {
      .in-title {
        font-weight: bold;
        text-align: left;
        color: #333333;
        font-size: 18px;
        line-height: 20px;
      }
    }

    .inviters {
      .level-title {
        color: #666;
      }


    }
  }
}
</style>
