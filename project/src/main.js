import Vue from 'vue'
import VueRouter from 'vue-router'

//引入axios
import Axios from 'axios'
Vue.prototype.$axios = Axios
//设置全局默认的
Axios.defaults.baseURL = 'http://vue.studyit.io/api/'


//引入mintui
import MintUi from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUi)

//引入页面样式文件 
import './static/css/global.css'

//引入自己的组件
import App from './components/App.vue'
import Home from './components/Home/Home.vue'
//引入底部导航的组件
import Members from './components/Members/Members.vue'
import ShopCart from './components/ShopCart/ShopCart.vue'
import Find from './components/Find/Find.vue'

//注册全局组件
import MyUl from './components/commons/MyUl.vue'
import MyLi from './components/commons/MyLi.vue'

Vue.component(MyUl.name, MyUl)
Vue.component(MyLi.name, MyLi)



//创建路由
Vue.use(VueRouter)
var router = new VueRouter()

router.addRoutes([
  {path: '/', redirect: {name: 'Home'}},
  {name: 'Home', path: '/home', component: Home},
  {name: 'Members', path: '/members', component: Members},
  {name: 'ShopCart', path: '/shopcart', component: ShopCart},
  {name: 'Find', path: '/find', component: Find}
])

new Vue({
  el: '#app',
  render: c => c(App),
  router
})