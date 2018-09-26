<template>
    <div>
         <HeadeGreen :title="'登录'"/>
         <Login/>
    </div>
</template>
<script>
import HeadeGreen from "./HeadeGreen";
import Login from "./Login";
export default {
  name: "login",
  components: {
    Login,
    HeadeGreen
  }
};
</script>