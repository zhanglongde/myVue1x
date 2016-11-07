<template>
  <div id="app">
    <img class="logo" src="./assets/logo.png">
    <button @click="toastrSuccess">Success</button>
    <button @click="toastrInfo">Info</button>
    <button @click="toastrWarn">Warn</button>
    <button @click="toastrError">error</button>
    <hello></hello>
  </div>
</template>

<style scoped>
  .mini-toastr{
    background-color: #85a;
  }
  .mini-toastr__notification .-success .mini-toastr-notification__message{
    background-color: #85a !important;
  }
</style>

<script>
import Hello from './components/Hello'
import miniToastr from 'mini-toastr'

export default {
  components: {
    Hello
  },
  methods: {
    toastrSuccess: function () {
      console.log('miniToastr 测试...')
      miniToastr.success('成功', 'toastrSuccess', 10000, undefined, undefined)
    },
    toastrInfo: function () {
      miniToastr.info('信息', 'toastrInfo')
    },
    toastrWarn: function () {
      miniToastr.warn('警告', 'toastrWarn')
    },
    toastrError: function () {
      miniToastr.error('错误', 'toastrError')
    }
  },
  ready: function () {
    miniToastr.init()
  }
}
</script>


