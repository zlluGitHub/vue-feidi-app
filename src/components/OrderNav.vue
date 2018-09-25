<template>
        <nav>
            <ul>
                <li class="active"><router-link to="/all" title="全部">全部</router-link></li>
                <li><router-link to="/pay" title="代付款">代付款</router-link></li>
                <li><router-link to="/delivery" title="待发货">待发货</router-link></li>
                <li><router-link to="/take" title="代收货">代收货</router-link></li>
                <li><router-link to="/finish" title="已完成">已完成</router-link></li>
            </ul>
        </nav>
</template>
<style lang="scss" scoped>
nav {
  background-color: #fff;
  ul {
    display: flex;
    justify-content: space-around;
    font-size: 24px;
    color: #000;
    li {
      border-bottom: 1px solid #fff;
      padding: 26px 8px;
      a {
        color: #666;
        font-size: 24px;
      }
    }
    li.active {
      border-bottom: 1px solid #35d4a0;
      a {
        color: #35d4a0;
      }
    }
  }
}
</style>

