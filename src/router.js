/**
 * Created by JUEXINPC-008 on 2016/11/11.
 */
import Hello from './components/test/Hello.vue'
import App from './views/test/App.vue'
import Home from './views/Home.vue'
import Disk from './views/Disk.vue'
import Login from './views/Login.vue'
import Svg from './views/test/svg.vue'
import Es6 from './views/es6/es6.vue'
import Notification from './components/test/Notification.vue'
import VFocus from './components/test/VFocus.vue'

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
  '/svg': {
    component: Svg
  },
  '/es6': {
    component: Es6
  },
  '/Notification': {
    component: Notification
  },
  '/vfocus': {
    component: VFocus
  },
  '*': {
    component: App
  }
}
