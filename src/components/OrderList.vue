<template>
    <div class="order-top">
        <div class="receiveNoteList">
            <ul>
               <li>
                    <div class="inner">
                        <p><span>2017.11.09</span><span>待收货</span></p>
                        <div>
                            <router-link to="/details">
                                <img src="../../images/didan_03.jpg" alt="商品图">
                            </router-link>
                            <div>
                                <p>
                                    <router-link to="/details" title="美国 Lung flute “肺笛” 正师级入中国">美国 Lung flute “肺笛” 正师级入中国</router-link>
                                </p>
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
                            <router-link class="active" to="/">申请退款</router-link>
                            <router-link to="/">再次购买</router-link>
                            <router-link to="/follow">查看物流</router-link>
                            <router-link to="/">确认收货</router-link>
                            
                        </div>
                    </div>
                </li>
                <li>
                    <div class="inner">
                        <p><span>2017.11.09</span><span>待收货</span></p>
                        <div>
                            <router-link to="/details">
                                <img src="../../images/didan_03.jpg" alt="商品图">
                            </router-link>
                            <div>
                                <p>
                                    <router-link to="/details" title="美国 Lung flute “肺笛” 正师级入中国">美国 Lung flute “肺笛” 正师级入中国</router-link>
                                </p>
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
                            <router-link to="/">申请退款</router-link>
                            <router-link to="/">再次购买</router-link>
                            <router-link to="/follow">查看物流</router-link>
                            <router-link to="/">确认收货</router-link>
                            
                        </div>
                    </div>
                </li>
                <li>
                    <div class="inner">
                        <p><span>2017.11.09</span><span>待收货</span></p>
                        <div>
                            <router-link to="/details">
                                <img src="../../images/didan_03.jpg" alt="商品图">
                            </router-link>
                            <div>
                                <p>
                                    <router-link to="/details" title="美国 Lung flute “肺笛” 正师级入中国">美国 Lung flute “肺笛” 正师级入中国</router-link>
                                </p>
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
                            <router-link to="/">申请退款</router-link>
                            <router-link to="/">再次购买</router-link>
                            <router-link to="/follow">查看物流</router-link>
                            <router-link to="/">确认收货</router-link>
                            
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
            padding: 20px 0;
            font-size: 26px;
            span:nth-child(2) {
              color: #fdaa40;
            }
          }
          > div:nth-child(2) {
            padding: 20px;
            border-top: 1px solid #f5f5f5;
            border-bottom: 1px solid #f5f5f5;
            display: flex;
            a img {
              width: 120px;
              border: 1px solid #999;
            }
            > div {
              width: 480px;
              margin-left: 20px;
              > p:nth-child(1) a {
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
            a {
              padding: 10px 15px;
              margin-right: 16px;
              font-size: 20px;
              border-radius: 8px;
              border: 2px solid #9e9e9e;
              color: #666;
            }
            a.active {
              color: #fdaa40;
              border: 2px solid #fdaa40;
            }
            a:nth-child(4) {
              margin-right: 0px;
            }
          }
        }
      }
    }
  }
}
</style>

