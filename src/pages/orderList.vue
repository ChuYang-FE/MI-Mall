<template>
  <div class="order-list">
    <order-header title="订单列表">
      <template v-slot:tip>
        <span>请谨防钓鱼链接或诈骗电话，了解更多></span>
      </template>
    </order-header>
  </div>
</template>

<script>
import OrderHeader from './../components/OrderHeader'
export default {
  name: 'order-confirm',
  components: {
    OrderHeader
  },
  data() {
    return {
      
    }
  },
//生命周期 - 挂载完成（访问DOM元素）
  mounted() {
    
  }
}
</script>

<style scoped>

</style>