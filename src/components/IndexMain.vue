<template>
    <div>
        <router-view></router-view>
        <NavBottom/>
    </div>
</template>
<script>
import NavBottom from "./NavBottom";
export default {
  name: "indexMain",
  components: {
    NavBottom
  }
};
</script>
