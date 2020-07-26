<template>
  <div class="footer">
    <div class="footer-logo">
      <img src="/imgs/logo-footer.png" alt="">
      <p>小米商城</p>
    </div>    
    <div class="footer-link">
      <a href="https://github.com/CoderTyy" target="_blank">谭小羊的个人主页</a><span>|</span>
      <a href="https://github.com/CoderTyy/MI-Mall" target="_blank">PC端-小米商城</a><span>|</span>
      <a href="https://github.com/CoderTyy/Vue-travel" target="_blank">移动端-去哪儿网</a><span>|</span>
      <a href="https://github.com/CoderTyy/JDFinance" target="_blank">移动端-京东金融</a>
    </div>
    <div class="copyright">Copyright @2020 <span class="domain">谭小羊</span> All Rights Reserved.</div>
  </div>
</template>

<script>
export default {
  name: 'nav-footer',
  components: {
    
},
  data() {
    return {
      
    }
},
//生命周期 - 创建完成（访问当前this实例）
  created() {
    
  },
//生命周期 - 挂载完成（访问DOM元素）
  mounted() {
    
  }
}
</script>

<style lang="scss" scoped>
/* @import url(); 引入css类 */
// @import '';
  .footer{
    height:234px;
    border-top:4px solid #FF6600;
    background-color:#333333;
    color:#999999;
    font-size:16px;
    text-align:center;
    .footer-logo{
      margin-top:46px;
      margin-bottom:31px;
      img{
        width:53px;
        height:36px;
        margin-bottom:13px;
      }
    }
    .footer-link{
      a{
        color:#999999;
        display:inline-block;
      }
      span{
        margin:0 10px;
      }
      margin-bottom:13px;
    }
    .copyright{
      .domain{
        color:#FF6600;
      }
    }
  }
</style>