<template>
    <div class="login">
        <img src="../../images/bgc_02.jpg" alt="logo">
        <div class="warp">
            <div class="input">
                <div class="user">
                    <label for="phone"></label>
                    <input name="phone" placeholder="请输入手机号" type="text">
                </div>
                <div class="password">
                    <label for="yanzheng"> </label>
                    <input name="yanzheng" placeholder="验证码" type="text">
                    <span>获取验证码</span>
                </div>
            </div>
            <div class="submit"> 登 &emsp;录</div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.login {
  background-color: #fff;
  color: #e6e6e6;
  height: 12rem;
  font-size: 0.24rem;
  img {
    display: block;
    width: 100%;
  }
  .warp {
    padding: 0.6rem;
    .input {
      label {
        position: absolute;
        top: 0.2rem;
        left: 0.26rem;
        width: 0.35rem;
        height: 0.35rem;
        background-size: cover;
      }
      input {
        width: 100%;
        font-size: 0.24rem;
        border-radius: 0.3rem;
        padding: 0.2rem;
        padding-left: 0.8rem;
        border: 0.01rem solid #999;
        outline: none;
      }
      .user {
        position: relative;
        label {
          background: url("../../images/phone_03.jpg") center center no-repeat;
          background-size: contain;
        }
      }
      .password {
        position: relative;
        margin-top: 0.2rem;
        label {
          top: 0.2rem;
          background: url("../../images/we_06.jpg") center center no-repeat;
          background-size: contain;
        }
        span {
          position: absolute;
          top: 0.1rem;
          padding: 0.1rem 0.2rem;
          border-left: 0.02rem solid #f5f5f5;
          right: 0.2rem;
          color: #35d4a0;
        }
      }
    }
  }
  .submit {
    margin-top: 0.5rem;
    background-color: #35d4a0;
    color: #fff;
    padding: 0.25rem;
    border-radius: 0.3rem;
    font-size: 0.26rem;
    text-align: center;
  }
}
</style>
