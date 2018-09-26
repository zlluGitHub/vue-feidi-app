<template>
    <div class="top-nav">
        <ul>
            <li><router-link to="/">首页</router-link></li>
            <li><router-link to="/synopsis">肺笛简介</router-link></li>
            <li><router-link to="/datum">关于我们</router-link></li>
            <li><router-link to="/business">招商引资</router-link></li>
        </ul>
    </div>
</template>

<style lang="scss" scoped>
.top-nav {
  ul {
    display: flex;
    justify-content: space-around;
    background-color: #fff;
    li {
      flex-grow: 1;
      a {
        width: 100%;
        display: block;
        padding: 0.2rem;
        color: #666;
        text-align: center;
        font-weight: 500;
        font-size: 0.25rem;
        border-right: 0.01rem solid #f5f5f5;
      }
      a:nth-child(4) {
        border-right: 0rem solid #fff;
      }
    }
  }
}
</style>
