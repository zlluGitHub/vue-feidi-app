<template>
    <div>
         <HeadeBlack :title="'订单跟踪'"/>
         <Follow/>
    </div>
</template>
<script>
import Follow from "./Follow";
import HeadeBlack from "./HeadeBlack";
export default {
  name: "order",
  components: {
    Follow,
    HeadeBlack
  }
};
</script>