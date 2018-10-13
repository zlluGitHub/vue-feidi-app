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
                                        <button @click="delivery()">-</button>
                                        <input type="text" value="1">
                                        <button @click="delivery()">+</button>
                                    </p>
                                    <span>￥2888.00</span>
                                </div>
                            </div>
                        </div>
                        <div>
                            <router-link to="/">申请退款</router-link>
                            <router-link to="/">再次购买</router-link>
                            <router-link to="/follow">查看物流</router-link>
                            <router-link class="active" to="/">确认收货</router-link>
                            
                        </div>
                    </div>
                </li>
                <li>
                    <div class="inner">
                        <p><span>2017.11.09</span><span>待付款</span></p>
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
                                        <button @click="delivery()">-</button>
                                        <input type="text" value="1">
                                        <button @click="delivery()">+</button>
                                    </p>
                                    <span>￥2888.00</span>
                                </div>
                            </div>
                        </div>
                        <div>
                            <router-link to="/follow">取消订单</router-link>
                            <router-link class="active" to="/">去付款</router-link>
                            
                        </div>
                    </div>
                </li>
                <li>
                    <div class="inner">
                        <p><span>2017.11.09</span><span>已完成</span></p>
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
                                        <button @click="delivery()">-</button>
                                        <input type="text" value="1">
                                        <button @click="delivery()">+</button>
                                    </p>
                                    <span>￥2888.00</span>
                                </div>
                            </div>
                        </div>
                        <div>
                            <router-link to="/">申请退款</router-link>
                            <router-link class="active" to="/">再次购买</router-link>
                            
                        </div>
                    </div>
                </li>
                <li>
                    <div class="inner">
                        <p><span>2017.11.09</span><span>待发货</span></p>
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
                                        <button @click="delivery()">-</button>
                                        <input type="text" value="1">
                                        <button @click="delivery()">+</button>
                                    </p>
                                    <span>￥2888.00</span>
                                </div>
                            </div>
                        </div>
                        <div>
                            <router-link to="/">申请退款</router-link>
                            <router-link to="/">提醒发货</router-link>
                            <router-link class="active" to="/">再次购买</router-link>
                            
                        </div>
                    </div>
                </li>

            </ul>
        </div>
    </div>
</template>
<script>
import { MessageBox } from 'mint-ui';
export default {
    data:()=>({
      value:'1'
    }),
    methods:{
        delivery(){
            MessageBox({
                title: '温馨提示',
                message: '数据拉取失败请稍后再试。。。'
            });
        }
    }
}
</script>
<style lang="scss" scoped>
.order-top {
  .receiveNoteList {
    ul {
      li {
        .inner {
          padding: 0 0.2rem;
          background-color: #fff;
          margin-top: 0.2rem;
          > p {
            display: flex;
            justify-content: space-between;
            padding: 0.2rem 0;
            font-size: 0.26rem;
            span:nth-child(2) {
              color: #fdaa40;
            }
          }
          > div:nth-child(2) {
            padding: 0.2rem;
            border-top: 0.01rem solid #f5f5f5;
            border-bottom: 0.01rem solid #f5f5f5;
            display: flex;
            a img {
              width: 1.2rem;
              border: 0.01rem solid #999;
            }
            > div {
              width: 4.8rem;
              margin-left: 0.2rem;
              > p:nth-child(1) {
                font-size: 0.21rem;
                a {
                  color: #404040;
                }
              }
              > p:nth-child(2) {
                font-size: 0.18rem;
                margin: 0.16rem 0;
                color: #999;
              }
              > div {
                display: flex;
                justify-content: space-between;
                p {
                  text-align: center;
                  display: flex;
                  align-items: center;
                  font-size: 0.26rem;
                  button {
                    width: 0.38rem;
                    border: 0.01rem solid #999;
                    background-color: #fff;
                    font-size: 0.26rem;
                  }
                  button:nth-child(1) {
                    border-right: none;
                  }
                  button:nth-child(3) {
                    border-left: none;
                  }
                  input {
                    text-align: center;
                    width: 0.5rem;
                    height: 0.35rem;
                    border: 0.01rem solid #999;
                  }
                }
                > span {
                  font-size: 0.26rem;
                  color: #fdaa40;
                }
              }
            }
          }
          > div:nth-child(3) {
            padding: 0.18rem;
            display: flex;
            justify-content: flex-end;
            margin-bottom: 0.2rem;
            a {
              padding: 0.08rem 0.13rem;
              margin-right: 0.16rem;
              font-size: 0.15rem;
              border-radius: 0.08rem;
              border: 0.02rem solid #9e9e9e;
              color: #666;
            }
            a.active {
              color: #fdaa40;
              border: 0.02rem solid #fdaa40;
            }
            a:nth-child(4) {
              margin-right: 0rem;
            }
          }
        }
      }
    }
  }
}
</style>

