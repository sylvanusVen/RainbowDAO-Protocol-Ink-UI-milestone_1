<template>
  <div class="createProposal">
    <dao-nav></dao-nav>
    <div class="rainbow-panel">
      <div class="title">
        INITIATE A PROPOSAL
      </div>
      <div class="content">
        <div class="proposal-form">
          <div class="item">
            <div class="item-title">
              Proposer
            </div>
            <div class="proposal-info">
              <div class="value">
                {{account}}
              </div>
            </div>
          </div>
          <div class="item">
            <div class="item-title">
              Proposal Name
            </div>
            <input type="text" v-model="form.title">
          </div>
          <div class="item">
            <div class="item-title">
              Proposal Content
            </div>
            <textarea class="proposal-content" v-model="form.desc" rows="10" cols="60"></textarea>
          </div>
          <div class="item">
            <div class="item-title">
              Proposal PublicityDelay(block)
            </div>
            <input type="text" v-model="form.publicityDelay">
          </div>
          <div class="item">
            <div class="item-title">
              Proposal category(1:Fund management type:2:Contract invocation type,3:Newer code)
            </div>
            <input type="text" v-model="form.category">
          </div>

          <div class="btn-box">
            <div class="sub-btn" @click="createProposal">
              Create
            </div>
          </div>
        </div>
      </div>
    </div>
    <dao-footer></dao-footer>
  </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "createProposal",
  data() {
    return {
      form: {}
    }
  },
  created() {

  },
  computed: {
    ...mapGetters(['account', 'isConnected'])
  },
  methods:{
    createProposal(){
      this.form.transaction={
        calle: this.account,
      }
      this.form.address = this.$store.state.daoManage.curDaoControlAddress.proposalAddr
      this.$store.dispatch("daoProposal/propose",this.form).then(()=>{
        this.$eventBus.$on('message', (message) => {
          if(message.type == "success"&& message.message=="Create Proposal Success" &&this.$route.path=="/createDaoProposal"){
            this.$router.push({name:"daoManage",params:{
                activeNavIndex:1
              }})
            this.$eventBus.$on('message',null)
          }
        })
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.createProposal {
  .proposal-form {
    .item{
      text-align: left;
      padding: 10px 0;
      .item-title{
        line-height: 30px;
        font-weight: bold;
        font-size: 16px;
        color: #999;
      }
      input{
        padding: 0 10px;
        width: 260px;
        height:32px;
        background: #ffffff;
        border: 1px solid #eaeaea;
        border-radius: 10px;
      }
      .proposal-info{
        display: flex;
        .value{
          padding: 0 20px;
          background: #fbfcfe;
          border: 1px solid #f0f0f0;
          border-radius: 10px;
          height: 36px;
          color: #f96aaf;
          line-height: 36px;
        }
      }
      .proposal-content{
        padding: 10px;
        border: 1px solid #f0f0f0;
        border-radius: 10px;
      }
    }
    .btn-box  {
      display: flex;
      justify-content: center;
      .sub-btn{
        width: 120px;
        text-align: center;
        line-height: 40px;
        font-size: 18px;
        font-weight: bold;
        height: 40px;
        cursor: pointer;
        background: linear-gradient(90deg,#12c2e9 0%, #c471ed 64%, #f64f59 100%);
        border: 1px solid #eaeaea;
        border-radius: 10px;
        color: white;
      }
    }
  }
}
</style>
