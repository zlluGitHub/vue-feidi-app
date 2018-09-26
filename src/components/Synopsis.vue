<template>
    <div class="synopsis">
        <h2>产品介绍</h2>
        <ul class="ul1">
            <li>
                <img src="../../images/1_03.jpg" alt="排痰器">
                <span>产品名称：</span>
                <span>排痰器</span>
            </li>
            <li>
                <img src="../../images/2_06.jpg" alt="郎弗罗">
                <span>商品名：</span>
                <span>郎弗罗@肺笛</span>
            </li>
            <li>
                <img src="../../images/3_09.jpg" alt="家庭治疗护理型">
                <span>可选型号：</span>
                <span>家庭治疗护理型</span>
            </li>
        </ul>
    <h2>适用人群</h2>
    <ul class="ul2">
        <li>
            <img src="../../images/4_13.jpg" alt="烟民">
            <span>烟民</span>
        </li>
        <li>
            <img src="../../images/5_16.jpg" alt="尘肺病">
            <span>尘肺病</span>
        </li>
        <li>
            <img src="../../images/6_16.jpg" alt="肺部疾病患者">
            <span>肺部疾病患者</span>
        </li>
        <li>
            <img src="../../images/7_22.jpg" alt="雾霾吸入者">
            <span>雾霾吸入者</span>
        </li>
    </ul>
    <h2>产品特点</h2>
    <ul class="ul3">
        <li>
            <img src="../../images/8_28.jpg" alt="美国原装进口">
            <span>美国原装进口</span>
        </li>
        <li>
            <img src="../../images/9_30.jpg" alt="纯物理治疗">
            <span>纯物理治疗</span>
        </li>
        <li>
            <img src="../../images/10_32.jpg" alt="吹出有害物质">
            <span>吹出有害物质</span>
        </li>
    </ul>
    <h2>使用方法</h2>
    <div class="p1">
        <p>保持一个放松的位置；背部挺直不要靠在椅背上，身体略前倾，并保持喉咙和祈祷通畅，拿着肺笛向下指<i></i></p>
        <p>比平常更深一些吸气。<i></i></p>
        <p>把嘴唇完全的包住吹嘴。<i></i></p>
        <p>保持一个放松的位置；背部挺直不要靠在椅背上，身体略前倾，并保持喉咙和祈祷通畅，拿着肺笛向下指<i></i></p>
    </div>
    <h2>工作原理</h2>
    <div class="p2">
        保持一个放松的位置；背部挺直不要靠在椅背上，身体略前倾，并保持喉咙和祈祷通畅，拿着肺笛向下指保持一个放松的位置；背部挺直不要靠在椅背上，身体略前倾，并保持喉咙和祈祷通畅，拿着肺笛向下指保持一个放松的位置；背部挺直不要靠在椅背上，身体略前倾，并保持喉咙和祈祷通畅，拿着肺笛向下指保持一个放松的位置；背部挺直不要靠在椅背上，身体略前倾，并保持喉咙和祈祷通畅，拿着肺笛向下指
    </div>
</div>
</template>
<style lang="scss" scoped>
.synopsis {
  color: #666;
  font-size: 0.24rem;
  h2 {
    font-size: 0.3rem;
    margin-top: 0.5rem;
    border-left: 0.02rem solid #35d4a0;
    margin-left: 0.15rem;
    padding-left: 0.2rem;
  }
  .ul1 {
    padding: 0.15rem 0px;
    background-color: #fff;
    li {
      padding: 0.18rem 0.2rem;
      display: flex;
      border-bottom: 0.01rem solid #f5f5f5;
      img {
        width: 0.36rem;
        height: 0.34rem;
      }
      span {
        margin-left: 0.14rem;
      }
    }
    li:nth-child(3) {
      border-bottom: 0rem solid #fff;
    }
  }
  .ul2 {
    display: flex;
    background-color: #fff;
    li {
      flex-grow: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 0.2rem;
      img {
        width: 0.38rem;
      }
      span {
        padding: 0.12rem;
        padding-bottom: 0px;
      }
    }
  }
  .ul3 {
    display: flex;
    padding: 0.2rem;
    li {
      display: flex;
      flex-direction: column;
      margin-left: 0.15rem;
      img {
        width: 2rem;
      }
      span {
        padding: 0.1rem;
      }
    }
  }
  .p1 {
    p {
      position: relative;
      padding: 0.08rem;
      padding-left: 0.25rem;
      margin-left: 0.15rem;
      line-height: 0.42rem;
      i {
        position: absolute;
        width: 0.1rem;
        height: 0.1rem;
        top: 0.25rem;
        left: 0rem;
        background-color: #35d4a0;
        border-radius: 1rem;
      }
    }
  }
  .p2 {
    padding: 0.4rem;
    padding-top: 0rem;
    line-height: 0.45rem;
  }
}
</style>
