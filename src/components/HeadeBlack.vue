<template>
  <div class="black-top">
      <h1>{{title}}</h1>
      <div class="back" @click="back"></div>
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
  background-color: #1c1b20;
  h1 {
    color: #fff;
    text-align: center;
    font-size: 0.28rem;
  }
  .back {
    position: absolute;
    left: 0.25rem;
    top: 0.38rem;
    width: 0.25rem;
    height: 0.25rem;
    background: url("../../images/index_03.gif") center center no-repeat;
    background-size: cover;
  }
}
</style>
