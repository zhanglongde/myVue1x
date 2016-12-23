<template>
  <div id="app">
    <img class="logo" src="../../assets/logo.png">
    <button @click="toastrSuccess">Success</button>
    <button @click="toastrInfo">Info</button>
    <button @click="toastrWarn">Warn</button>
    <button @click="toastrError">error</button>
    <!--<hello></hello>-->
    <hello></hello>
    <hello></hello>
    <hello></hello>
    <Notification>111</Notification>
    <Notification>222</Notification>
    <Notification>333</Notification>
    <Notification>lazy</Notification>
    <Notification>rebase test</Notification>
    <Notification>1</Notification>
    <Notification>2</Notification>
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
import hello from '../../components/test/Hello'
import Notification from '../../components/test/Notification'
import miniToastr from 'mini-toastr'

export default {
  components: {
    // 'test': require('./components/Hello.vue')
    'hello': hello,
    'Notification': Notification
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
    const defaultConfig = {
      style: {
        '.mini-toastr': {
          position: 'fixed',
          'z-index': 99999,
          right: '12px',
          top: '12px'
        },
        '.mini-toastr__notification': {
          cursor: 'pointer',
          padding: '12px 18px',
          margin: '0 0 6px 0',
          'background-color': '#000',
          opacity: 0.8,
          color: '#fff',
          'border-radius': '10px',
          'box-shadow': '#3c3b3b 0 0 12px',
          width: '300px',
          '&.-error': {
            'background-color': '#D5122B'
          },
          '&.-warn': {
            'background-color': '#F5AA1E'
          },
          '&.-success': {
            'background-color': '#7AC13E'
          },
          '&.-info': {
            'background-color': '#5E6C86'
          },
          '&:hover': {
            opacity: 1,
            'box-shadow': '#000 0 0 12px'
          }
        },
        '.mini-toastr-notification__title': {
          'font-weight': '500'
        },
        '.mini-toastr-notification__message': {
          display: 'inline-block',
          'vertical-align': 'middle',
          width: '240px',
          padding: '0 12px'
        }
      }
    }
    miniToastr.init(defaultConfig)
  }
}
</script>


