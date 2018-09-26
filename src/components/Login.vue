<template>
    <div class="login">
        <img src="../../images/beijing_02.jpg" alt="logo">
        <div class="warp">
            <div class="input">
                <div class="user">
                    <label for="suer"></label>
                    <input name="user" placeholder="手机号/用户名" type="text">
                </div>
                <div class="password">
                    <label for="password"> </label>
                    <input name="password" placeholder="密码" type="text">
                </div>
            </div>
            <div class="submit"> 登录</div>
            <div class="other">
                <span>手机快捷登陆</span>
                <span>忘记密码</span>
            </div>
        </div>
        <div class="login-bottom">
            其他登录方式：<span></span>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.login {
  background-color: #fff;
  color: #e6e6e6;
  img {
    display: block;
    width: 100%;
  }
  .warp {
    padding: 0.4rem;
    .input {
      label {
        position: absolute;
        top: 0.2rem;
        left: 0.2rem;
        width: 0.3rem;
        height: 0.3rem;
        background-size: contain;
      }
      input {
        position: relative;
        border-radius: 0.08rem;
        padding: 0.2rem;
        padding-left: 0.2rem;
        border: 0.01rem solid #999;
      }
      .user {
        label {
          background: url("../../images/ren_05.jpg") center center no-repeat;
        }
      }
      .password {
        label {
          background: url("../../images/suo_09.jpg") center center no-repeat;
        }
      }
      .submit {
        background-color: #35d4a0;
        color: #fff;
        padding: 0.25rem;
        text-align: center;
      }
      .other {
        display: flex;
        justify-content: space-between;
        padding: 0.2rem 0;
        span {
          color: #e6e6e6;
        }
      }
    }
  }
  .login-bottom {
    span {
    }
  }
  .login-bottom {
    span {
      width: 0.3rem;
      height: 0.3rem;
      background: url("../../images/weixin_12.jpg") center center no-repeat;
      background-size: contain;
    }
  }
}
</style>
