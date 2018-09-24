<template>
        <nav>
            <ul>
                <li>全部</li>
                <li>代付款</li>
                <li>待发货</li>
                <li>代收货</li>
                <li>已完成</li>
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
      padding: 26px 12px;
    }
    li.active {
      color: aqua;
      border-bottom: 1px solid aqua;
    }
  }
}
</style>

