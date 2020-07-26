import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueLazyLoad from 'vue-lazyload'
import router from './router.js'
import App from './App.vue'
// import env from './env.js'

//mock开关
const mock = false;
if(mock) {
  require('./mock/api');
}

Vue.use(VueAxios, axios);
Vue.use(VueLazyLoad,{
  loading:'/imgs/loading-svg/loading-bars.svg'
})
Vue.config.productionTip = false;

// 根据前端的跨域方式做调整 /a/b : /api/a/b => /a/b
axios.defaults.baseURL = '/api';
axios.defaults.timeout = 8000; 

//根据环境变量获取不同的请求地址
// axios.defaults.baseURL = env.baseURL;

//接口错误拦截
axios.interceptors.response.use(function(response){
  let res = response.data;
  if(res.status == 0){  //主要看接口约定，status是0代表成功，10代表未登录。
    return res.data;
  } else if(res.status == 10) {
    window.location.href = "/#/login";
  } else {
    alert(res.msg);
  }
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')