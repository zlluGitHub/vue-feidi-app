<template>
    <nav>
        <ul>
          <li>
            <img src="../../images/index_09.gif" alt="独家代理"> 
            <router-link to="/agent" title="独家代理">独家代理</router-link> 
            
          </li>
          <li>
            <img src="../../images/index_11.gif" alt="肺笛简介"> 
            <router-link to="/synopsis" title="肺笛简介">肺笛简介</router-link> 
            
          </li>
          <li>
            <img src="../../images/index_14.gif" alt="招商引资">
            <router-link to="/business" title="招商引资">招商引资</router-link> 
            
          </li>
          <li>
            <img src="../../images/index_17.gif" alt="我的订单"> 
             <router-link to="/order" title="我的订单">我的订单</router-link>
          </li>
        </ul>
      </nav>
</template>
<style lang="scss" scoped>
nav ul {
  margin: 0rem;
  background: #fff;
  display: flex;
  justify-content: space-around;
  li {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 0.18rem;
    img {
      width: 0.45rem;
      height: 0.52rem;
      padding-bottom: 0.08rem;
    }
    a {
      color: #666;
      font-size: 0.2rem;
    }
  }
}
</style>
