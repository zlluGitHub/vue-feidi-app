<template>
    <div class="login">
        <img src="../../images/bgc_02.jpg" alt="logo">
        <div class="warp">
            <div class="input">
                <div class="user">
                    <label for="suer"></label>
                    <input name="user" placeholder="手机号码/用户名" type="text">
                </div>
                <div class="identify-code">
                    <label for="code"> </label>
                    <input name="code" placeholder="请输入验证码" type="text">
                    <span>获取验证码</span>
                </div>
                <div class="password">
                    <label for="password"> </label>
                    <input name="password" placeholder="请输入密码（6-16位、区分大小写）" type="text">
                </div>
            </div>
            <div class="submit"> 注 &emsp;册</div>
            
            <div class="other">
                <p>用已有账号登录</p>
            </div>
            
        </div>
        <div class="login-bottom">
          <p>
            <input type="checkbox">
            <span>同意并愿意遵守《郎恒安服务条协议》</span>
          </p>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.login {
  background-color: #fff;
  color: #e6e6e6;
  height: 100%;
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
        left: 0.2rem;
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
          background: url("../../images/ren_05.jpg") center center no-repeat;
          background-size: contain;
        }
      }
      .identify-code {
        position: relative;
        margin: 0.3rem 0rem;
        label {
          top: 0.2rem;
          background: url("../../images/anquan_03.jpg") center center no-repeat;
          background-size: contain;
        }
        span {
          position: absolute;
          top: 0rem;
          right: 0rem;
          padding: 0.18rem 0.5rem;
          display: block;
          border-radius: 0.3rem;
          background-color: #d6d6d6;
          color: #fff;
        }
      }
      .password {
        position: relative;
        label {
          top: 0.18rem;
          background: url("../../images/suo_09.jpg") center center no-repeat;
          background-size: contain;
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
  .other {
    p {
      padding: 0.2rem;
      text-align: right;
    }
  }
  .login-bottom {
    padding: 1.2rem 0.6rem;
    p {
      display: flex;
      justify-content: center;
      align-items: center;
      input {
        width: 0.2rem;
        height: 0.2rem;
        border: 1rem solid #f5f5f5;
        background-color: #fff;
        margin-right: 0.1rem;
      }
    }
  }
}
</style>
