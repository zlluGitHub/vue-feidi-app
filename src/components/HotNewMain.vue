<template>
    <div>
         <HeadeBlack :title="'热点新闻'"/>
         <HotNews/>
    </div>
</template>
<script>
import HotNews from "./HotNews";
import HeadeBlack from "./HeadeBlack";
export default {
  name: "hotNews",
  components: {
    HotNews,
    HeadeBlack
  }
};
</script>