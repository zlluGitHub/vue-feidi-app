<template>
    <div class="follow-box">
        <div class="number"><span>订单编号</span><span>234325436576592</span></div>
        <div class="forecast"><span>预计送达</span><span>2017.11.14</span></div>
        <ul>
            <li>
                <p>快递在【北京通州集散中心】装车，已发往下一站</p>
                <p>2017年11月11日下午8：24：25</p>
                <span>最新</span>
                <i>      </i>
            </li>
            <li>
                <p>快递在【北京通州集散中心】装车，已发往下一站</p>
                <p>2017年11月11日下午7：24：25</p>
                <span>最新</span>
                <i>      </i>
            </li>
            <li>
                <p>快递在【北京大兴科创二街营业点】装车，已发往下一站</p>
                <p>2017年11月11日下午8：24：25</p>
                <span>最新</span>
                <i>      </i>
            </li>
            <li>
                <p>顺丰速递 已收取快件</p>
                <p>2017年11月11日下午8：24：25</p>
                <span>最新</span>
                <i>      </i>
            </li>
        </ul>
    </div>

</template>
<style lang="scss" scoped>
.follow-box {
  font-size: 0.25rem;
  .number,
  .forecast {
    padding: 0.2rem;
    display: flex;
    justify-content: space-between;
    border-bottom: 0.01rem solid #f5f5f5;
    background-color: #fff;
    span:nth-child(1) {
      font-weight: 600;
    }
  }
  .forecast {
    border-bottom: none;
  }
  > ul {
    padding: 0.2rem;
    padding-top: 0rem;
    margin-top: 0.2rem;
    font-size: 0.24rem;
    background-color: #fff;
    li {
      position: relative;
      padding-left: 1.2rem;
      padding-top: 0.2rem;
      padding-bottom: 0.2rem;
      border-bottom: 0.01rem solid #f5f5f5;
      p {
        padding: 0.05rem;
      }
      p:nth-child(2) {
        font-size: 0.2rem;
        color: #9f9f9f;
      }
      span {
        position: absolute;
        top: 0.4rem;
        left: 0.4rem;
        padding: 0.03rem;
        border-radius: 0.05rem;
        background-color: #35d4a0;
        color: #fff;
        font-size: 0.2rem;
      }
    }
  }
}
</style>
