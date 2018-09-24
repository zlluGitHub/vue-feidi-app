<template>
  <div id="app">
    <HeadeBlack/>
    <IndexContent/>
    <!-- <Main/> -->
    <NavBottom/>
    <OrderMain/>
    <Details/>
    <Following/>
    <HotNews/>
  </div>
</template>

<script>
import HeadeBlack from "./components/HeadeBlack.vue";
import IndexContent from "./components/IndexContent.vue";
import NavBottom from "./components/NavBottom.vue";
import OrderMain from "./components/OrderMain.vue";
import Details from "./components/Details.vue";
import Following from "./components/Following.vue";
import HotNews from "./components/HotNews.vue";

export default {
  name: "app",
  components: {
    HeadeBlack,
    IndexContent,
    NavBottom,
    OrderMain,
    Details,
    Following,
    HotNews
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
