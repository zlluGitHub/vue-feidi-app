<template>
    <div class="details">
        <div>
            <p class="p1"><span>收货人：清风</span><span>18****8240</span></p>
            <p class="p2">               
                <span>收货地址：</span>北京市大兴区亦庄经济开发区中和街14号汇龙森一园B座301座
                 <img src="../../images/details_03.jpg" alt="地址">
            </p>
        </div>
        <ul>
            <li>
                <div>
                    <img src="../../images/didan_03.jpg" alt="">
                    <div>
                        <p>美国 Lung flute 正品“肺笛”正式进入中国</p>
                        <p>购买类型：肺笛单品</p>
                        <span>￥2888.00</span>
                    </div>
                </div>
                <div>
                    <p><span>*</span>优惠券：<span>-￥20.00</span></p>
                    <p>优惠码：<span>-￥0.00</span></p>
                </div>
                
            </li>
            <li>
                <div>
                    <img src="../../images/didan_03.jpg" alt="">
                    <div>
                        <p>美国 Lung flute 正品“肺笛”正式进入中国</p>
                        <p>购买类型：肺笛单品</p>
                        <span>￥2888.00</span>
                    </div>
                </div>
                <div>
                    <p><span>*</span>优惠券：<span>-￥20.00</span></p>
                    <p>优惠码：<span>-￥0.00</span></p>
                </div>
                
            </li>
            <li>
                <div>
                    <img src="../../images/didan_03.jpg" alt="">
                    <div>
                        <p>美国 Lung flute 正品“肺笛”正式进入中国</p>
                        <p>购买类型：肺笛单品</p>
                        <span>￥2888.00</span>
                    </div>
                </div>
                <div>
                    <p><span>*</span>优惠券：<span>-￥20.00</span></p>
                    <p>优惠码：<span>-￥0.00</span></p>
                </div>
                
            </li>
        </ul>
        <div class="order-details">
            <p>订单编号：<span>9086723109</span></p>
            <p>下单时间：<span>2017.11.04  09：10：23</span></p>
            <p>支付方式：<span>在线支付</span></p>
            <p>配送方式：<span>包邮</span></p>
            <p>发票类型：<span>个人</span></p>
            <p>发票抬头：<span>个人</span></p>
            <p>发票内容：<span>明细</span></p>
        </div>
        <div class="doogs-all">
            <p>商品总额：<span>￥2078</span> </p>
            <p>运&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;费：<span>+￥0.00</span> </p>
            <p>积&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;分：<span>-￥20</span> </p>
            <p>实付款：<span>￥4000.00</span></p>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.details {
  > div {
    background-color: #fff;
    padding: 20px;
    margin-bottom: 20px;
    p.p1 {
      font-size: 25px;
      font-weight: 600;
      padding: 20px 0;
      span {
        margin-right: 40px;
      }
    }
    p.p2 {
      position: relative;
      font-size: 24px;
      line-height: 1.5;
      padding-left: 30px;
      span {
        margin-right: 12px;
      }
      img {
        width: 20px;
        height: 25px;
        top: 0;
        left: 0;
        position: absolute;
      }
    }
  }
  ul {
    li {
      background-color: #fff;
      padding: 20px;
      color: #666;
      font-size: 24px;
      margin-bottom: 20px;
      div:nth-child(1) {
        display: flex;
        img {
          width: 150px;
          margin-right: 26px;
          border: 1px solid #f5f5f5;
        }
        > div {
          display: flex;
          flex-direction: column;
          p:nth-child(2) {
            margin-top: 12px;
            margin-bottom: 30px;
            color: #b3b3b3;
          }
          span {
            font-size: 26px;
          }
        }
      }
      div:nth-child(2) {
        display: flex;
        margin-top: 12px;
        > p:nth-child(1) {
          margin-right: 52px;
          span:nth-child(1) {
            margin-right: 6px;
            color: red;
          }
        }
        > p:nth-child(2) {
          span {
            margin-left: 6px;
          }
        }
      }
    }
  }
  .order-details {
    margin-top: 20px;
    background-color: #fff;
    font-size: 24px;
    > p {
      padding: 6px 0px;
      span {
        margin-left: 12px;
      }
    }
    p:nth-child(2) {
      padding-bottom: 10px;
      border-bottom: 1px solid #f5f5f5;
    }
    p:nth-child(3),
    p:nth-child(4) {
      padding: 25px 0px;
      margin: 5px 0px;
      border-bottom: 1px solid #f5f5f5;
    }
  }
  .doogs-all {
    background-color: #fff;
    font-size: 24px;
    p {
      padding: 6px 0px;
      span {
        margin-left: 12px;
      }
    }
    p:nth-child(3) {
      padding: 20px 0px;
      margin: 5px 0px;
      border-top: 1px solid #f5f5f5;
      border-bottom: 1px solid #f5f5f5;
    }
    p:nth-child(4) {
      display: flex;
      justify-content: flex-end;
      margin-top: 20px;
      font-size: 28px;
      span {
        color: #fc9c20;
      }
    }
  }
}
</style>
