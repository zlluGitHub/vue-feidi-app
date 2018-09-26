<template>
    <div>
         <HeadeBlack :title="'订单详情'"/>
         <Details/>
    </div>
</template>
<script>
import Details from "./Details";
import HeadeBlack from "./HeadeBlack";
export default {
  name: "details",
  components: {
    Details,
    HeadeBlack
    // OrderList
  }
};
</script>