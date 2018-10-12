<template>
<div>
    <HeadeBlack :title="'个人中心'"/>
    <div class="center">
      <img src="../../images/index_06.gif" alt="图片">
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
            <p><span @click="add">加入购物车</span><span @click="buy">立即购买</span></p>
          </div>
        </div>
      </div>
      <div class="new-list">
        <h2>热点新闻</h2>
        <ul>
          <li>
             <img src="../../images/index_27.gif" alt="icon">
             <p>北京郎恒安生物科技有限公司核心团队有多名海外学者昨中国...</p>
             <span><router-link to="/news" title="查看更多">查看更多</router-link></span>
          </li>
          <li>
             <img src="../../images/index_27.gif" alt="icon">
             <p>北京郎恒安生物科技有限公司核心团队有多名海外学者昨中国...</p>
             <span><router-link to="/news" title="查看更多">查看更多</router-link></span>
          </li>
          <li>
             <img src="../../images/index_27.gif" alt="icon">
             <p>北京郎恒安生物科技有限公司核心团队有多名海外学者昨中国...</p>
             <span><router-link to="/news" title="查看更多">查看更多</router-link></span>
          </li>
          <li>
             <img src="../../images/index_27.gif" alt="icon">
             <p>北京郎恒安生物科技有限公司核心团队有多名海外学者昨中国...</p>
             <span><router-link to="/news" title="查看更多">查看更多</router-link></span>
          </li>
          <li>
             <img src="../../images/index_27.gif" alt="icon">
             <p>北京郎恒安生物科技有限公司核心团队有多名海外学者昨中国...</p>
             <span><router-link to="/news" title="查看更多">查看更多</router-link></span>
          </li>
        </ul>
        <div class="more">
          <router-link to="/news" title="查看更多">查看更多</router-link>
        </div>
      </div>
    </div>
    </div>
</template>
<script>
import HeadeBlack from "./HeadeBlack";
import NavTop from "./NavTop";
import { MessageBox } from 'mint-ui';
export default {
  name: "navtop",
  components: {
    NavTop,
    HeadeBlack
  },
  methods: {
      add() {
          MessageBox({
            title: '温馨提示',
            message: '已成功加入购物车'
          });
      },
      buy() {
          MessageBox({
            title: '温馨提示',
            message: '数据拉取失败，请稍后再试。。。'
          });
      }
  }
};
</script>

<style lang="scss" scoped>
.center {
  img {
    width: 100%;
  }
  .more {
    a {
      display: block;
      color: #666;
      font-size: 0.24rem;
      text-align: center;
      padding: 0.18rem 0rem;
    }
  }
  h2 {
    margin: 0rem;
    font-size: 0.26rem;
    font-weight: 800;
    padding: 0.16rem 0.18rem;
    border: 0.01rem solid #f5f5f5;
    background-color: #fff;
    margin-top: 0.2rem;
  }
  .product {
    background-color: #fff;
    margin-top: 0.1rem;

    .product-content {
      display: flex;
      padding: 0.2rem;
      .product-left {
        padding: 0rem 0.8rem;
        img {
          width: 0.25rem;
        }
      }
      .product-right {
        font-size: 0.28rem;
        color: #fc8e00;
        padding-top: 0.2rem;
        p:nth-child(1) {
          color: #666666;
          font-size: 0.24rem;
          margin-bottom: 0.2rem;
        }
        p:nth-child(3) {
          font-size: 0.24rem;
          margin-top: 0.5rem;
          span {
            border: 0.01rem solid #fc8e00;
            border-radius: 0.08rem;
            padding: 0.12rem 0.18rem;
            margin-right: 0.2rem;
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
      padding: 0rem 0.2rem;
      li {
        position: relative;
        display: flex;
        margin-bottom: 0.28rem;
        img {
          width: 2rem;
        }
        p {
          font-size: 0.2rem;
          color: #666666;
          line-height: 0.35rem;
          padding: 0 0.2rem;
        }
        span a{
          position: absolute;
          right: 0.25rem;
          bottom: 0;
          color: #fc8e00;
          font-size: 0.18rem;
        }
      }
    }
  }
}
</style>
