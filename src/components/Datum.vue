<template>
    <div class="datum">
        <div class="head-img">
            <img src="../../images/touxiang_03.jpg" alt="头像">
        </div> 
        <ul>
            <li>
                <span>用户名</span>
                <div>
                    <span>可爱的桃桃</span>
                    <i></i>
                </div>
                
            </li>
            <li>
                <span>性别</span>
                <div>
                    <span>女</span>
                    <i></i>
                </div>
                
            </li>
            <li>
                <span>出生日期</span>
                <div>
                    <span>1993.09.08</span>
                    <i></i>
                </div>
                
            </li>
            <li>
                <span>籍贯</span>
                <div>
                    <span>河北省保定市徐水县西村</span>
                    <i></i>
                </div>
                
            </li>
            <li>
                <span>邮箱</span>
                <div>
                    <span>18230086651@163.com</span>
                    <i></i>
                </div>
                
            </li>
            <li>
                <span>病因</span>
                <div>
                    <span>咳嗽</span>
                    <i></i>
                </div>
               
            </li>
        </ul> 
        <div class="back-bottom">退出登录</div>
    </div>    
</template>
<style lang="scss" scoped>
.datum {
  background: #fff;
  font-size: 0.25rem;
  color: #231815;
  .head-img {
    display: flex;
    justify-content: center;
    img {
      display: block;
      width: 1.2rem;
      height: 1.2rem;
      margin: 1rem;
      border-radius: 1rem;
    }
  }
  ul {
    li {
      padding: 0.2rem;
      border-bottom: 1px solid #f5f5f5;
      display: flex;

      justify-content: space-between;
      div {
        span {
          color: #666;
          margin: 0 0.12rem;
        }
        i {
          display: inline-block;
          background: url("../../images/rightjiantou_07.jpg") center center
            no-repeat;
          background-size: contain;
          width: 0.25rem;
          height: 0.25rem;
        }
      }
    }
  }
}
.back-bottom {
  width: 100%;
  position: absolute;
  bottom: 0;
  padding: 0.3rem;
  text-align: center;
  font-size: 0.26rem;
  color: #fff;
  background-color: #fc8e00;
}
</style>
