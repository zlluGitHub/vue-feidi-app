<template>
  <div id="app">
    <HeadeBlack/>
    <IndexContent/>
    <!-- <Main/> -->
    <NavBottom/>
    <OrderMain/>
  </div>
</template>

<script>
import HeadeBlack from "./components/HeadeBlack.vue";
import IndexContent from "./components/IndexContent.vue";
import NavBottom from "./components/NavBottom.vue";
import OrderMain from "./components/OrderMain.vue";

export default {
  name: "app",
  components: {
    HeadeBlack,
    IndexContent,
    NavBottom,
    OrderMain
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
