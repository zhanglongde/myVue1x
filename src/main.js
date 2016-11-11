import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

// 注册两个插件
Vue.use(VueResource)
Vue.use(VueRouter)

const router = new VueRouter()
// 启用路由规则
router.map(require('./router'))

// 移动到map中的*，进行处理
// router.redirect({
//  '*': '/app'
// })

// vue-cli 生成的不带路由
/* eslint-disable no-new */
// new Vue({
//  el: 'body',
//  components: { App }
// })

let App = Vue.extend({})
router.start(App, '#app')

// router.start({}, '#app')
