<template>
    <div class="order-top">
       
        <div class="receiveNoteList">
            <ul>
                <li>
                    <div class="inner">
                        <p><span>2017.11.09</span><span>待收货</span></p>
                        <div>
                            <img src="../../images/didan_03.jpg" alt="商品图">
                            <div>
                                <p>美国 Lung flute “肺笛” 正师级入中国</p>
                                <p>购买类型：肺笛单品</p>
                                <div>
                                    <p>
                                        <button disabled="disabled">-</button>
                                        <input type="text" value="1">
                                        <button disabled="disabled">+</button>
                                    </p>
                                    <span>￥2888.00</span>
                                </div>
                            </div>
                        </div>
                        <div>
                            <span>申请退款</span>
                            <span>再次购买</span>
                            <span>查看物流</span>
                            <span>确认收货</span>
                        </div>
                    </div>
                </li>
                <li>
                    <div class="inner">
                        <p><span>2017.11.09</span><span>待收货</span></p>
                        <div>
                            <img src="../../images/didan_03.jpg" alt="商品图">
                            <div>
                                <p>美国 Lung flute “肺笛” 正师级入中国</p>
                                <p>购买类型：肺笛单品</p>
                                <div>
                                    <p>
                                        <button disabled="disabled">-</button>
                                        <input type="text" value="1">
                                        <button disabled="disabled">+</button>
                                    </p>
                                    <span>￥2888.00</span>
                                </div>
                            </div>
                        </div>
                        <div>
                            <span>申请退款</span>
                            <span>再次购买</span>
                            <span>查看物流</span>
                            <span>确认收货</span>
                        </div>
                    </div>
                </li>
                <li>
                    <div class="inner">
                        <p><span>2017.11.09</span><span>待收货</span></p>
                        <div>
                            <img src="../../images/didan_03.jpg" alt="商品图">
                            <div>
                                <p>美国 Lung flute “肺笛” 正师级入中国</p>
                                <p>购买类型：肺笛单品</p>
                                <div>
                                    <p>
                                        <button disabled="disabled">-</button>
                                        <input type="text" value="1">
                                        <button disabled="disabled">+</button>
                                    </p>
                                    <span>￥2888.00</span>
                                </div>
                            </div>
                        </div>
                        <div>
                            <span>申请退款</span>
                            <span>再次购买</span>
                            <span>查看物流</span>
                            <span>确认收货</span>
                        </div>
                    </div>
                </li>
               
            </ul>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.order-top {
  .receiveNoteList {
    ul {
      li {
        .inner {
          padding: 0 20px;
          background-color: #fff;
          margin-top: 20px;
          > p {
            display: flex;
            justify-content: space-between;
            padding: 16px 0;
            font-size: 24px;
            span:nth-child(2) {
              color: #fdaa40;
            }
          }
          > div:nth-child(2) {
            padding: 20px;
            border-top: 1px solid #aaa;
            border-bottom: 1px solid #aaa;

            display: flex;
            img {
              width: 145px;
              border: 1px solid #999;
            }
            > div {
              width: 480px;
              margin-left: 16px;
              > p:nth-child(1) {
                font-size: 24px;
                color: #404040;
              }
              > p:nth-child(2) {
                font-size: 18px;
                margin: 16px 0;
                color: #999;
              }
              > div {
                display: flex;
                justify-content: space-between;
                p {
                  text-align: center;
                  display: flex;
                  align-items: center;
                  font-size: 26px;
                  button {
                    width: 38px;
                    border: 1px solid #999;
                    background-color: #fff;
                    font-size: 26px;
                  }
                  button:nth-child(1) {
                    border-right: none;
                  }
                  button:nth-child(3) {
                    border-left: none;
                  }
                  input {
                    text-align: center;
                    width: 50px;
                    height: 35px;
                    border: 1px solid #999;
                  }
                }
                > span {
                  font-size: 26px;
                  color: #fdaa40;
                }
              }
            }
          }
          > div:nth-child(3) {
            padding: 18px;
            display: flex;
            justify-content: flex-end;
            margin-bottom: 20px;
            span {
              padding: 10px 15px;
              margin-right: 16px;
              font-size: 20px;
              border-radius: 8px;
              border: 2px solid #9e9e9e;
            }
            span:nth-child(4) {
              margin-right: 0px;
            }
          }
        }
      }
    }
  }
}
</style>

