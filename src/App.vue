<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  components: {
    
  },
  data(){
    return {
      res: {},
    }
  },
  mounted(){
    //本地加载请求静态JSON文件的形式
    // this.axios.get('/mock/user/login.json').then((res) => {
    //   this.res = res;
    // })

    //mockjs
    this.axios.get('/user/login').then((res) => {
      this.res = res;
    })
  },
  methods:{
    
  }
}
</script>

<style lang="scss">
@import './assets/scss/reset.scss';
@import './assets/scss/config.scss';
@import './assets/scss/button.scss';
</style>
