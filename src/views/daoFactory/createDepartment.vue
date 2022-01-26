<template>
  <div class="create-department">
    <dao-nav></dao-nav>
    <div class="create-box">
      <div class="title">
        CREATE DEPARTMENT
      </div>
      <div class="create-form">
        <div class="input-box">
          <div class="input-title">
            Department Name
          </div>
          <input type="text" placeholder="Enter">
        </div>
        <div class="input-box">
          <div class="input-title">
            Department Logo
          </div>
          <input type="text" placeholder="Enter">
        </div>
        <div class="select-box">
          <div class="select-title">
            Management Authority
          </div>
          <select v-model="form.authority" @change="select">
            <option selected value="0"> Governance Token DAO Management</option>
            <option value="1"> Yes</option>
          </select>
        </div>
        <div class="select-box">
          <div class="select-title">
            Join Review
          </div>
          <select v-model="form.joinReview" @change="select">
            <option selected value="0"> YES</option>
            <option value="1"> NO</option>
          </select>
        </div>
        <div class="select-box">
          <div class="select-title">
            Proposal Review
          </div>
          <select v-model="form.proposal" @change="select">
            <option selected value="0"> YES</option>
            <option value="1"> NO</option>
          </select>
        </div>
      </div>
      <div class="rainbow-btn">Continue</div>
    </div>
    <dao-footer></dao-footer>
  </div>
</template>

<script>
export default {
  name: "createDepartment",
  data() {
    return {
      count: 1,
      stage: 0,
      memberLength: 1,
      daoInfo: {
        name: '', logo: '', des: ''
      },
      tokenInfo: {
        tokenName: "",
        symbol: "",
        decimals: 0,
        totalSupply: 0,
        support: 50
      },
      form:{}
    }
  },
  created() {
    this.$eventBus.$on('message', (message) => {
      console.log(message)
      if(message.type == "success"){
        this.$router.push({name:'daoManage'})
      }
    })
  },
  methods: {
    select(){

    },
    next(index) {
      switch (index) {
        case 1:
          break
        case 2:
          break
      }
      this.stage += 1
    },
    createDao() {

      this.$store.dispatch("daoFactory/initDaoByTemplate",{})
    }
  }
}
</script>

<style lang="scss" scoped>

.create-department {
  background: #ffffff;
  box-shadow: 0px 6px 20px 0px rgba(0, 0, 0, 0.05);
  .input-title{
    font-size: 16px;
    font-weight: bold;
    text-align: left;
    color: #333333;
    line-height: 40px;
  }
  .select-box{
    width: 50%;
    .select-title{
      font-size: 16px;
      font-weight: bold;
      text-align: left;
      color: #333333;
      line-height: 50px;
    }
    select {
      appearance: none;
      border: 0;
      outline: 0;
      font: inherit;
      /* Personalize */
      width: 90%;
      height: 3em;
      padding: 0 4em 0 1em;
      background: #f6f5fa;
      color: #333;
      border-radius: 0.25em;
      cursor: pointer;
      /* <option> colors */
      option {
        color: inherit;
        background-color: #fff;
      }

      /* Remove focus outline */
      &:focus {
        outline: none;
      }

      /* Remove IE arrow */
      &::-ms-expand {
        display: none;
      }
    }
  }
  .input-box,.input-box-full,.radio-box{
    width: 50%;

    input{
      width: 310px;
      height: 50px;
      background: #f6f5fa;
      border: 1px solid #eaeaea;
      border-radius: 10px;
      padding: 0 10px;
    }
    .input-detail{
      padding: 10px 0;
      color: #eaeaea;
    }
  }
  .create-box {
    background: url("../../static/imgs/bg.png");
    background-size: 100% 100%;
    position: relative;
    margin: -100px auto 0;
    border-radius: 30px;
    z-index: 1;
    background: #ffffff;
    padding: 30px 60px;
    width: 1000px;
    min-height: 500px;

    .title {
      font-size: 30px;
      font-weight: bold;
      color: #333333;
      line-height: 60px;
    }

  }

}
</style>
