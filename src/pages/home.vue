<template>
  <div>
    home
    <nav-header></nav-header>
    <router-view></router-view>
    <nav-footer></nav-footer>
  </div>
</template>

<script>
import NavHeader from './../components/NavHeader'
import NavFooter from './../components/NavFooter'
export default {
  name: 'nav-home',
  components: {
    NavHeader,
    NavFooter,
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

<style scoped>
/* @import url(); 引入css类 */

</style>