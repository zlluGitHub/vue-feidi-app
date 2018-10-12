<template>
    <div class="hotNews">
        <ul>
            <li @click="news">
                <p>北京郎恒安生物科技有限公司核心团队由多名海外学者昨中国...</p>
                <p><span>2017-12-23 09：23</span><span>查看更多</span> </p>
            </li>
            <li @click="news">
                <p>公司下设研发部、项目部、信息部...</p>
                <p><span>2017-12-23 09：23</span><span>查看更多</span> </p>
            </li>
            <li @click="news">
                <p>恒安将依靠先进的基因组学研究和分子检测技术，生物信息学技术...</p>
                <p><span>2017-12-23 09：23</span><span>查看更多</span> </p>
            </li>
            <li @click="news">
                <p>恒安团队正与被禁大学人民医、首都医科大学...</p>
                <p><span>2017-12-23 09：23</span><span>查看更多</span> </p>
            </li>
           
            <li @click="news">
                <p>北京郎恒安生物科技有限公司核心团队由多名海外学者昨中国...</p>
                <p><span>2017-12-23 09：23</span><span>查看更多</span> </p>
            </li>
        </ul>
        <div @click="news" class="more">查看更多</div>
    </div>
</template>
<script>
import { MessageBox } from 'mint-ui';
export default {
    name: "new",
    methods: {
        news() {
            MessageBox({
                title: '温馨提示',
                message: '数据拉取失败，请稍后再试。。。'
            });
        }
    }
}
</script>

<style lang="scss" scoped>
.hotNews {
  background-color: #fff;
  .more {
    display: block;
    color: #666;
    font-size: 0.24rem;
    text-align: center;
    padding-top: 0.5rem;
    background: #f5f5f5;
  }
  ul {
    padding: 0.2rem;
    padding-top: 0rem;
    li {
      padding: 0.28rem 0rem;
      border-bottom: 0.01rem solid #f5f5f5;
      p:nth-child(1) {
        font-size: 0.26rem;
      }
      p:nth-child(2) {
        font-size: 0.22rem;
        color: #999;
        display: flex;
        justify-content: space-between;
        padding-top: 0.15rem;

        span:nth-child(2) {
          color: #f9a52c;
        }
      }
    }
  }
}
</style>

