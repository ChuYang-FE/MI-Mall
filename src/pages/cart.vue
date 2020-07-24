<template>
  <div>
    <order-header></order-header>
    cart
    <nav-footer></nav-footer>
  </div>
</template>

<script>
import OrderHeader from './../components/OrderHeader'
import NavFooter from './../components/NavFooter'
export default {
  name: 'cart',
  components: {
    OrderHeader,
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