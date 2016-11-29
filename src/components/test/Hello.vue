<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
  import inArray from 'in-array'
  export default {
    name: 'test',
    data () {
      return {
        // note: changing this line won't causes changes
        // with hot-reload because the reloaded component
        // preserves its current state and we are modifying
        // its initial state.
        msg: 'Hello World!'
      }
    },
    methods: {
      inArrayTest: function () {
        let arr = [1, 3, 4]
        // 返回true或者false
        console.log(inArray(arr, 1))
        console.log(inArray(arr, 89))
        console.log(inArray(arr, ''))
        // indexOf 找不到-1,找到返回数组索引下标
        console.log(arr.indexOf(1))
        console.log(arr.indexOf(89))
        console.log(arr.indexOf(''))
        console.log('%c-----------------------------------------------------------', 'background-color:#85a;color:#fff;font-size:30px;')

        let str = ['zhanglongde', 'zhanglongbao', 'zhangsanfen', 'zhangwei']
        console.log(inArray(str, 'zhangsanfen'))
        console.log(inArray(str, 'zhangsa'))
        console.log(inArray(str, ''))
        console.log(str.indexOf('zhangsanfen'))
        console.log(str.indexOf('zhangsa'))
        console.log(str.indexOf(''))
        console.log('%c-----------------------------------------------------------', 'background-color:#85a;color:#fff;font-size:30px;')

        // 如果数组项是一个对象怎么办？将其序列化之后进行比较
        let objs = [{ 'name': 'zhangxiaoming', 'age': '26' }, { 'name': 'zld', 'age': '26' }, { 'name': 'wms', 'age': '26' }]
        console.log(inArray(objs, { 'name': 'zld', 'age': '26' }))
        console.log(objs.indexOf({ 'name': 'zld', 'age': '26' }))
        console.log(this.objInArray(objs, { 'name': 'zld', 'age': '26' }))
      },
      objInArray: function (objs, obj) {
        var o = []
        for (let i = 0, LEN = objs.length; i < LEN; i++) {
          o.push(JSON.stringify(objs[i]))
        }
        return o.indexOf(JSON.stringify(obj))
      }
    },
    ready: function () {
      this.inArrayTest()
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  color: #42b983;
}
</style>
