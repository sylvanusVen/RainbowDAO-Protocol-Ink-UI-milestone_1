<template>
<div class="connectMe">
  <dao-nav></dao-nav>
  <div class="content">
    <h3>Email：market@rainbowdao.io</h3>
    <h3>Address：5001 Beach Rd, Singapore 199588</h3>
    <h3>postcode:198965</h3>
  </div>
  <dao-footer></dao-footer>
</div>
</template>

<script>
export default {
name: "connectMe"
}
</script>

<style lang="scss" scoped>
.content{
  height: calc(100vh - 600px);
  text-align: center;
  padding: 30px;
}
</style>
