<template>
    <div>
        <HeadeGreen :title="'独家代理'"/>
        <AgentNav/>
        <AgentContent/>
    </div>
</template>
<script>
import HeadeGreen from "./HeadeGreen";
import AgentNav from "./AgentNav";
import AgentContent from "./AgentContent";
export default {
  name: "agent",
  components: {
    HeadeGreen,
    AgentNav,
    AgentContent
  }
};
</script>