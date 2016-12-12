<!-- Created by JUEXINPC-008 on 2016/11/25. !-->

<template>
  <div class="block">
    <!--<input type="text" v-focus="focused" @focus="focused = true" @blur="focused = false">-->
    <input type="text" v-focus="isFocused1" @keydown.down="keyupControl(0)" @keydown.up="upKeyControl(0)">
    <button @click="toggleFocus">toggle test</button>
  </div>
  <div class="block">
    <input type="text" v-focus="isFocused2" @keydown.down="keyupControl(1)"  @keydown.up="upKeyControl(1)">
  </div>
  <div class="block">
    <input type="text" v-focus="isFocused3" @keydown.down="keyupControl(2)"  @keydown.up="upKeyControl(2)">
  </div>
</template>

<script>
//  import { focus } from 'vue-focus'
  import Vue from 'vue'
  Vue.directive('focus', {
    bind: function () {
    },
    update: function (newValue, oldValue) {
//      console.log(newValue)
//      console.log(oldValue)
      if (newValue) {
        let object = this.el
        Vue.nextTick(function () {
          object.focus()
        })
      } else {
        let object = this.el
        Vue.nextTick(function () {
          object.blur()
        })
      }
    },
    unbind: function () {
    }
  })
  export default {
//    directives: { focus: focus },
    data () {
      return {
        curFocus: 0
      }
    },
    methods: {
      toggleFocus: function () {
        this.isFocused1 = !this.isFocused1
      },
      keyupControl: function (index) {
        this.curFocus = (index + 1) % 3
      },
      upKeyControl: function (index) {
        this.curFocus = (index + 3 - 1) % 3
      }
    },
    computed: {
      isFocused1: function () {
        return this.curFocus === 0
      },
      isFocused2: function () {
        return this.curFocus === 1
      },
      isFocused3: function () {
        return this.curFocus === 2
      }
    }
  }
</script>
