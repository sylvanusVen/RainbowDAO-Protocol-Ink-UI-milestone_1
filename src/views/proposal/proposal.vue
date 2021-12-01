<template>
  <div class="proposal">
    <rainbow-nav-new></rainbow-nav-new>
    <div class="rainbow-panel">
      <div class="title">
        PROPOSAL
      </div>
      <div class="nav-list">
        <div class="nav-item" @click="chooseNav(item);activeIndex=index" :class="{'active':activeIndex == index}"
             v-for="(item, index) in navList" :key="index">
          {{ item.name }}({{ item.number }})
        </div>
      </div>
      <div class="rainbow-list">
        <div class="list-item">
          <div class="index">
            01
          </div>
          <div class="name-box">
            <div class="header-icon">
              <img src="../../assets/imgs/header-icon.png" alt="">
            </div>
            <div class="name">
              Bruce Banner
            </div>
          </div>
          <div class="item-content">
            <div class="content">
              Risk Parameter Updates for DAI, BAT, ZRX, and ETH
            </div>
            <div class="floor">
              <div class="stage">
                Voting period
              </div>
              <div class="date">
                071 • 1 day, 20 hrs left
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <pageFooter>

    </pageFooter>
  </div>
</template>

<script>
export default {
  name: "proposal",
  data() {
    return {
      activeIndex: 0,
      navList: [
        {
          name: "ALL",
          number: 80
        },
        {
          name: "In execution",
          number: 2
        },
        {
          name: "Voting period",
          number: 0
        },
        {
          name: "Arbitration period",
          number: 0
        },
        {
          name: "Executed",
          number: 68
        },
        {
          name: "Rejected",
          number: 10
        }
      ]
    }
  },
  methods: {
    chooseNav() {

    }
  }
}
</script>

<style lang="scss" scoped>
.proposal {

}
</style>
