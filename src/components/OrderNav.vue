<template>
        <nav>
            <ul>
                <li @click="activeClick('all')" :class="[activeid==='all'?'active':'']"><router-link to="/all" title="全部">全部</router-link></li>
                <li @click="activeClick('pay')" :class="[activeid==='pay'?'active':'']"><router-link to="/pay" title="代付款">代付款</router-link></li>
                <li @click="activeClick('delivery')" :class="[activeid==='delivery'?'active':'']"><router-link to="/delivery" title="待发货">待发货</router-link></li>
                <li @click="activeClick('take')" :class="[activeid==='take'?'active':'']"><router-link to="/take" title="代收货">代收货</router-link></li>
                <li @click="activeClick('finish')" :class="[activeid==='finish'?'active':'']"><router-link to="/finish" title="已完成">已完成</router-link></li>
            </ul>
        </nav>
</template>
<script>
import { MessageBox } from 'mint-ui';
export default {
    name: "new",
    data:()=>({
      activeid:'all'
    }),
    methods: {
        activeClick(e) {
          this.activeid=e
        }
    }
}
</script>

<style lang="scss" scoped>
nav {
  background-color: #fff;
  ul {
    display: flex;
    justify-content: space-around;
    font-size: 0.24rem;
    color: #000;
    li {
      border-bottom: 0.01rem solid #fff;
      padding: 0.26rem 0.08rem;
      a {
        color: #666;
        font-size: 0.24rem;
      }
    }
    li.active {
      border-bottom: 0.01rem solid #35d4a0;
      a {
        color: #35d4a0;
      }
    }
  }
}
</style>

