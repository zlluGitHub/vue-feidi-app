<template>
  <div class="black-top">
      <h1>{{title}}</h1>
      <div class="back" @click="back"></div>
      <div class="navList"><router-link to="/register" title="注册">注册</router-link></div>
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
  padding: 0.1rem;
  padding-top: 0.2rem;
  background-color: #35d4a0;
  h1 {
    color: #fff;
    text-align: center;
    font-size: 0.28rem;
  }
  .back {
    position: absolute;
    left: 0.25rem;
    top: 0.5rem;
    width: 0.3rem;
    height: 0.3rem;
    background: url("../../images/jian_03.jpg") center center no-repeat;
    background-size: contain;
  }
  .navList {
    position: absolute;
    top: 0.5rem;
    right: 0.25rem;
    width: 0.35rem;
    height: 0.23rem;
    // background: url("../../images/nav_03.jpg") center center no-repeat;
    background-size: contain;
  }
  .navList {
    a {
      position: absolute;
      font-size: 0.24rem;
      display: block;
      top: -0.06rem;
      right: -0rem;
      width: 0.5rem;
      color: #fff;
    }
  }
}
</style>
