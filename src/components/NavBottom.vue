<template>
    <nav>
        <ul>
          <li>
            <router-link to="/">
              <img src="../../images/index_39.gif" alt="首页"> 
              <span>首页</span>
            </router-link>
          </li>
          <li> 
            <router-link to="/order">
            <img src="../../images/index_31.gif" alt="个人中心"> 
            <span>个人中心</span>
           </router-link>
          </li>
          <li>
            <router-link to="/order">
              <img src="../../images/index_34.gif" alt="肺笛"> 
              <span>肺笛</span> 
            </router-link>
          </li>
          <li>
            <router-link to="/order">
              <img src="../../images/index_36.jpg" alt="关于我们"> 
              <span>关于我们</span>
            </router-link>
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
    padding-top: 0.2rem;

    a {
      color: #666;
      font-size: 0.22rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      img {
        width: 0.45rem;
        height: 0.55rem;
        padding-bottom: 0.08rem;
      }
    }
  }
}
</style>
