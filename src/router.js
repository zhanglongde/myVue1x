/**
 * Created by JUEXINPC-008 on 2016/11/11.
 */
import Hello from './components/test/Hello.vue'
import App from './views/test/App.vue'
import Home from './views/Home.vue'
import Disk from './views/Disk.vue'
import Login from './views/Login.vue'
import Svg from './views/test/svg.vue'

// 路由map
module.exports = {
  '/': {
    component: Home
  },
  '/hello': {
    component: Hello
  },
  '/login': {
    component: Login
  },
  '/drive': {
    component: Disk
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
