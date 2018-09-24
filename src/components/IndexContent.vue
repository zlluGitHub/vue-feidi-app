<template>
    <div class="center">
      <img src="../../images/index_06.gif" alt="">
      <NavTop/>
      <div class="product">
        <h2>我的产品</h2>
        <div class="product-content">
          <div class="product-left">
            <img src="../../images/projuct_03.jpg" alt="产品">
          </div>
          <div class="product-right">
            <p>美国lung flute 正品 “肺笛” 正式进入中国</p>
            <p>￥2880.00</p>
            <p><span>加入购物车</span><span>立即购买</span></p>
          </div>
        </div>
      </div>
      <div class="new-list">
        <h2>热点新闻</h2>
        <ul>
          <li>
             <img src="../../images/index_27.gif" alt="icon">
             <p>北京郎恒安生物科技有限公司核心团队有多名海外学者昨中国...</p>
             <span>查看更多</span>
          </li>
          <li>
             <img src="../../images/index_27.gif" alt="icon">
             <p>北京郎恒安生物科技有限公司核心团队有多名海外学者昨中国...</p>
             <span>查看更多</span>
          </li>
          <li>
             <img src="../../images/index_27.gif" alt="icon">
             <p>北京郎恒安生物科技有限公司核心团队有多名海外学者昨中国...</p>
             <span>查看更多</span>
          </li>
          <li>
             <img src="../../images/index_27.gif" alt="icon">
             <p>北京郎恒安生物科技有限公司核心团队有多名海外学者昨中国...</p>
             <span>查看更多</span>
          </li>
          <li>
             <img src="../../images/index_27.gif" alt="icon">
             <p>北京郎恒安生物科技有限公司核心团队有多名海外学者昨中国...</p>
             <span>查看更多</span>
          </li>
        </ul>
        <div class="more">查看更多</div>
      </div>
    </div>
</template>
<script>
import NavTop from "./NavTop";

export default {
  name: "navtop",
  components: {
    NavTop
  }
};
</script>

<style lang="scss" scoped>
.center {
  img {
    width: 100%;
  }

  .more {
    font-size: 24px;
    text-align: center;
    padding: 18px 0px;
  }
  h2 {
    margin: 0px;
    font-size: 26px;
    font-weight: 800;
    padding: 16px 18px;
    border: 1px solid #f5f5f5;
    background-color: #fff;
    margin-top: 20px;
  }
  .product {
    background-color: #fff;
    margin-top: 10px;

    .product-content {
      display: flex;
      padding: 20px;
      .product-left {
        padding: 0px 80px;
        img {
          width: 25px;
        }
      }
      .product-right {
        font-size: 28px;
        color: #fc8e00;
        padding-top: 20px;
        p:nth-child(1) {
          color: #666666;
          font-size: 24px;
          margin-bottom: 20px;
        }
        p:nth-child(3) {
          font-size: 24px;
          margin-top: 50px;
          span {
            border: 1px solid #fc8e00;
            border-radius: 8px;
            padding: 12px 18px;
            margin-right: 20px;
          }
          span.active {
            background-color: #fc8e00;
            color: #fff;
          }
        }
      }
    }
  }
  .new-list {
    background-color: #fff;
    ul {
      padding: 0px 20px;
      li {
        position: relative;
        display: flex;
        margin-bottom: 28px;
        img {
          width: 200px;
        }
        p {
          font-size: 20px;
          color: #666666;
          line-height: 35px;
          padding: 0 20px;
        }
        span {
          position: absolute;
          right: 25px;
          bottom: 0;
          color: #fc8e00;
          font-size: 18px;
        }
      }
    }
  }
}
</style>
