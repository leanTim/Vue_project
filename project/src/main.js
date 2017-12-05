import Vue from 'vue'
import VueRouter from 'vue-router'

//引入moment处理时间的组件
import Moment from 'moment'
//注册全局过滤器处理时间格式
Vue.filter('convert-time', (value) => {
  return Moment(value).format('YYYY-MM-DD')
})
//注册全局过滤器
Vue.filter('convert-title', (value, limit) => {
  if (value.length > limit) {
    return value.substr(0, limit) + '...'
  }
  //否则返回原始数据
  return value
})

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
import NewsList from './components/NewsList/NewsList.vue'


//注册全局组件
import MyUl from './components/commons/MyUl.vue'
import MyLi from './components/commons/MyLi.vue'
import NavBar from './components/commons/NavBar.vue'

Vue.component(MyUl.name, MyUl)
Vue.component(MyLi.name, MyLi)
Vue.component(NavBar.name, NavBar)



//创建路由
Vue.use(VueRouter)
var router = new VueRouter()

router.addRoutes([
  {path: '/', redirect: {name: 'Home'}},
  {name: 'Home', path: '/home', component: Home},
  {name: 'Members', path: '/members', component: Members},
  {name: 'ShopCart', path: '/shopcart', component: ShopCart},
  {name: 'Find', path: '/find', component: Find},
  {name: 'News.list', path: '/news/list', component: NewsList},
])

new Vue({
  el: '#app',
  render: c => c(App),
  router
})