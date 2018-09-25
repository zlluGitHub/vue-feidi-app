<template>
  <div class="black-top">
      <h1>{{title}}</h1>
      <div class="back" @click="back"></div>
      <div class="navList"></div>
  </div>
</template>
<script>
export default {
  name: "black-top",
  props: ["title"],
  methods: {
    back() {
      this.$router.go(-1);
    }
  }
};
</script>

<style lang="scss" scoped>
.black-top {
  position: relative;
  padding: 10px;
  padding-top: 20px;
  background-color: #35d4a0;
  h1 {
    color: #fff;
    text-align: center;
  }
  .back {
    position: absolute;
    left: 25px;
    top: 50px;
    width: 30px;
    height: 30px;
    background: url("../../images/jian_03.jpg") center center no-repeat;
    background-size: contain;
  }
  .navList {
    position: absolute;
    top: 50px;
    right: 25px;
    width: 35px;
    height: 23px;
    background: url("../../images/nav_03.jpg") center center no-repeat;
    background-size: contain;
  }
}
</style>
