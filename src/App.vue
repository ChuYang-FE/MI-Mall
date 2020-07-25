<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import storage from './storage/index'
export default {
  name: 'app',
  components: {
    
  },
  data(){
    return {
      
    }
  },
  mounted(){
    // storage.setItem('age', '23','user');
    storage.setItem('friend', {'f1': 'nope'});
    storage.clear('friend');
    storage.clear('fri');
    storage.clear('age');
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
