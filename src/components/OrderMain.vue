<template>
<div>
    <HeadeBlack :title="'订单中心'"/>
    <OrderNav/>
    <router-view></router-view>
    <!-- <OrderList/> -->
</div>
</template>
<script>
import OrderNav from "./OrderNav";
import HeadeBlack from "./HeadeBlack";
// import OrderList from "./OrderList";
export default {
  name: "order",
  components: {
    OrderNav,
    HeadeBlack
    // OrderList
  }
};
</script>
