<template>
    <div class="login-box">
         <HeadeGreen :title="'登录'"/>
         <router-view></router-view>
    </div>
</template>
<script>
import HeadeGreen from "./HeadeGreen";
export default {
  name: "login",
  components: {
    HeadeGreen
  }
};
</script>
