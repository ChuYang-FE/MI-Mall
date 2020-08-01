<template>
  <div class="login">
    <div class="container">
      <a href="/#/index"><img src="/imgs/login-logo.png" alt=""></a>
    </div>
    <div class="wrapper">
      <div class="container">
        <div class="login-form">
          <h3>
            <span class="checked">帐号登录</span><span class="sep-line">|</span><span>扫码登录</span>
          </h3>
          <div class="input">
            <input type="text" placeholder="请输入帐号" v-model="username">
          </div>
          <div class="input">
            <input type="password" placeholder="请输入密码" v-model="password"  @keyup.enter="login">
          </div>
          <div class="btn-box">
            <a href="javascript:;" class="btn" @click="login">登录</a>
          </div>
          <div class="tips">
            <div class="sms" @click="register">手机短信登录/注册</div>
            <div class="reg" @click="register">立即注册<span>|</span>忘记密码？</div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer">
      <div class="footer-link">
      <a href="https://github.com/CoderTyy" target="_blank">谭小羊的个人主页</a><span>|</span>
      <a href="https://github.com/CoderTyy/MI-Mall" target="_blank">PC端-小米商城</a><span>|</span>
      <a href="https://github.com/CoderTyy/Vue-travel" target="_blank">移动端-去哪儿网</a><span>|</span>
      <a href="https://github.com/CoderTyy/JDFinance" target="_blank">移动端-京东金融</a>
    </div>
    <div class="copyright">Copyright @2020 <span class="domain">谭小羊</span> All Rights Reserved.</div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  name: 'login',
  components: {
    
  },
  data() {
    return {
      username:'',
      password:'',
      userId:''
    }
  },

  methods:{
    login(){
      let {username,password} = this;
      if(username != '' && password != ''){
        this.axios.post('/user/login', {
          username,
          password,
        }).then((res) => {
          this.$cookie.set('userId',res.id,{expires:'session'});  //因为无token，所以用userId来标识用户
          // this.$store.dispatch('saveUserName',res.username);
          this.saveUserName(res.username);
          this.$router.push({
            name:'index',
            params:{
              from:'login'
            }
          });
        })
      }else{
        this.$message.warning('账号、密码不能为空！');
      }
    },
    ...mapActions(['saveUserName']),
    register(){
      let {username,password} = this;
      if(username != '' && password != ''){
        this.axios.post('/user/register', {
          username,
          password,
          // email:''
        }).then(() => {
          this.$message.success('注册成功！');
        })
      }else{
        this.$message.warning('账号、密码不能为空！');
      }
    }
  }
}
</script>

<style lang="scss">
.login{
  &>.container{
    height:113px;
    img{
      width:auto;
      height:100%;
    }
  }
  .wrapper{
    background:url('/imgs/login-bg.jpg') no-repeat center;
    .container{
      height:576px;
      .login-form{
        box-sizing: border-box;
        padding-left: 31px;
        padding-right: 31px;
        width:410px;
        height:510px;
        background-color:#ffffff;
        position:absolute;
        bottom:29px;
        right:0;
        h3{
          line-height:23px;
          font-size:24px;
          text-align:center;
          margin:40px auto 49px;
          .checked{
            color:#FF6600;
          }
          .sep-line{
            margin:0 32px;
          }
        }
        .input{
          display:inline-block;
          width:348px;
          height:50px;
          border:1px solid #E5E5E5;
          margin-bottom:20px;
          input{
            width: 100%;
            height: 100%;
            border: none;
            padding: 18px;
          }
        }
        .btn{
          width:100%;
          line-height:50px;
          margin-top:10px;
          font-size:16px;
        }
        .tips{
          margin-top:14px;
          display:flex;
          justify-content:space-between;
          font-size:14px;
          cursor:pointer;
          .sms{
            color:#FF6600;
          }
          .reg{
            color:#999999;
            span{
              margin:0 7px;
            }
          }
        }
      }
    }
  }
  .footer{
    height:100px;
    padding-top:60px;
    color:#999999;
    font-size:16px;
    text-align:center;
    .footer-link{
      a{
        color:#999999;
        display:inline-block;
        position: relative;
        transition: 0.6s;
        &::before{
          content: '';
          display: inline-block;
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          border-radius: 50%;
          background: #FF6600;
          transition: 0.6s;
          transform: scale(0.8);
          z-index: -1;
        }
        &:hover{
          text-decoration-line: underline;
          text-shadow: 0 0 25px #FF6600;
        }
        &:hover::before{
          box-shadow: 0 0 14px 2px #FF6600;
          transform: scale(1.05);
        }
      }
      span{
        margin:0 10px;
      }
    }
    .copyright{
      margin-top:13px;
    }
  }
}

</style>