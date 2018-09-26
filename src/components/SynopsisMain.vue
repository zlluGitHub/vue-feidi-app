<template>
    <div>
        <HeadeGreen :title="'肺笛简介'"/>
        <AgentNav/>
        <Synopsis/>
    </div>
</template>
<script>
import HeadeGreen from "./HeadeGreen";
import AgentNav from "./AgentNav";
import Synopsis from "./Synopsis";
export default {
  name: "synopsis",
  components: {
    HeadeGreen,
    AgentNav,
    Synopsis
  }
};
</script>