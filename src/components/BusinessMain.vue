<template>
    <div>
         <HeadeGreen :title="'招商引资'"/>
         <AgentNav/>
         <Business/>
    </div>
</template>
<script>
import Business from "./Business";
import AgentNav from "./AgentNav";
import HeadeGreen from "./HeadeGreen";
export default {
  name: "business",
  components: {
    AgentNav,
    Business,
    HeadeGreen
    // OrderList
  }
};
</script>