<template>
    <div class="top-nav">
        <ul>
            <li><router-link to="/">首页</router-link></li>
            <li><router-link to="/">肺笛简介</router-link></li>
            <li><router-link to="/">关于我们</router-link></li>
            <li><router-link to="/">招商引资</router-link></li>
        </ul>
    </div>
</template>

<style lang="scss" scoped>
.top-nav {
  ul {
    display: flex;
    background-color: #fff;
    li {
      a {
        width: 180px;
        display: block;
        padding: 20px;
        color: #666;
        text-align: center;
        font-weight: 500;
        font-size: 25px;
        border-right: 1px solid #f5f5f5;
      }
      a:nth-child(4) {
        border-right: 0px solid #fff;
      }
    }
  }
}
</style>
