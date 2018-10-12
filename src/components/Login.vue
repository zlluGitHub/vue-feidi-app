<template>
    <div class="login">
        <img src="../../images/bgc_02.jpg" alt="logo">
        <div class="warp">
            <div class="input">
                <div class="user">
                    <label for="suer"></label>
                    <input name="user" v-model="phone" placeholder="手机号/用户名">
                </div>
                <div class="password">
                    <label for="password"> </label>
                    <input name="password" v-model="possword" placeholder="密码">
                </div>
            </div>
            <div class="submit" @click="submit"> 登 &emsp;录</div>
            <div class="other">
                <router-link to="/phone" title="手机快捷登陆">手机快捷登陆</router-link>
                <span>忘记密码</span>
            </div>
            
        </div>
        <div class="login-bottom">
           <p> 其他登录方式：</p><span></span>
        </div>
    </div>
</template>
<script>
import { MessageBox } from 'mint-ui';
export default {
  name:'login',
  data: () => ({
           phone:'',
           possword:''
  }),
  methods: {
      submit() {
          if(this.possword!=''&&this.phone!=''){
            MessageBox({
              title: '温馨提示',
              message: '数据拉取失败，请稍后再试。。。'
            });
          }else{
             MessageBox({
              title: '温馨提示',
              message: '请正确填写用户名或密码！'
            });
          }
      }
  }
  
}
</script>

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
      .password {
        position: relative;
        padding-top: 0.2rem;
        label {
          top: 0.38rem;
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
    display: flex;
    justify-content: space-between;
    padding: 0.2rem 0.2rem;
    a {
      color: #e6e6e6;
    }
  }
  .login-bottom {
    padding: 0.2rem 0.6rem;
    display: flex;
    align-items: center;
    margin-bottom: 3rem;
    span {
      display: inline-block;
      margin-left: 0.12rem;
      width: 0.5rem;
      height: 0.5rem;
      background: url("../../images/weixin_12.jpg") center center no-repeat;
      background-size: contain;
    }
  }
}
</style>
