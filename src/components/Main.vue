<template>
  <div class="main" ref="viewBox">
    <nav :class="{'main-active':active}" >
      <ul>
        <li>
          <router-link active-class="active" exact to='/'>点餐</router-link>
        </li>
        <li>
          <router-link active-class="active" to='/evaluate'>评价</router-link>
        </li>
        <li>
          <router-link active-class="active" to='/business'>商家</router-link>
        </li>
      </ul>
    </nav>
    <router-view></router-view>
  </div>
</template>
<script>

export default {
  data:()=>({
    active:false,
    navHeight:0
  }),
  components:{
    PopUp,
    Activity,
    Coupon,
    Details
  },
  mounted() {
    const {viewBox}=this.$refs;
    window.addEventListener('scroll', () => {
      if ($(viewBox).offset().top-$(window).scrollTop()<=0) {
        this.active=true;
      }else{
        this.active=false
      }
    }, false);
  }
}
</script>

<style lang="scss" scoped>

</style>
