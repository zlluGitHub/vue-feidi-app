<template>
<div>
    <HeadeBlack/>
    <OrderNav/>
    <OrderList/>
    <NavBottom/>
</div>
</template>
<script>
import OrderNav from "./OrderNav";
import HeadeBlack from "./HeadeBlack";
import OrderList from "./OrderList";
import NavBottom from "./NavBottom";
export default {
  components: {
    HeadeBlack,
    OrderNav,
    OrderList,
    NavBottom
  }
};
</script>
