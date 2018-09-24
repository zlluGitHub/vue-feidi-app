<template>
    <nav>
        <ul>
          <li>
            <img src="../../images/index_39.gif" alt="首页"> 
            <span>首页</span>
          </li>
          <li>
            <img src="../../images/index_31.gif" alt="个人中心"> 
            <span>个人中心</span>
          </li>
          <li>
            <img src="../../images/index_34.gif" alt="肺笛"> 
            <span>肺笛</span>
          </li>
          <li>
            <img src="../../images/index_36.jpg" alt="关于我们"> 
            <span>关于我们</span>
          </li>
        </ul>
      </nav>
</template>
<style lang="scss" scoped>
nav ul {
  margin: 0px;
  background: #fff;
  display: flex;
  justify-content: space-around;
  li {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 18px;
    padding-top: 20px;
    img {
      width: 45px;
      height: 55px;
      padding-bottom: 8px;
    }
    span {
      font-size: 20px;
    }
  }
}
</style>
