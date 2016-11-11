/**
 * Created by JUEXINPC-008 on 2016/11/11.
 */
import Hello from './components/test/Hello.vue'
import App from './views/test/App.vue'
import Main from './views/Main.vue'
import Login from './views/Login.vue'
import Svg from './views/test/svg.vue'

// 路由map
module.exports = {
  '/hello': {
    component: Hello
  },
  '/login': {
    component: Login
  },
  '/drive': {
    component: Main
  },
  '/app': {
    component: App
  },
  'svg': {
    component: Svg
  },
  '*': {
    component: App
  }
}
