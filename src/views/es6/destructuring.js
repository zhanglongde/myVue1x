/**
 * Created by JUEXINPC-008 on 2016/11/25.
 * 变量的解构赋值
 */

export default class {
  init () {
    let sum = add([7, 9])
    console.log(sum)

    let [a, b, c] = mulRet()
    console.log(a)
    console.log(b)
    console.log(c)

    let [c1, c2] = change(10, 20)
    console.log(c1)
    console.log(c2)

    getJsonData()

    funDefaultParam()

    traverseMap()
  }
}

/**
 * 1.交换两个值，否则需要设置中间变量
 * @param x
 * @param y
 * @returns {*[]}
 */
function change (x, y) {
  // [x, y] = [y, x]
  return [y, x]
}

/**
 * 2.从函数返回多个值，否则需要返回一个对象
 * @returns {number[]}
 */
function mulRet () {
  return [1, 2, 3]
}

/**
 * 3.函数参数定义
 * @param x
 * @param y
 * @returns {*}
 */
function add ([x, y]) {
  return x + y
}

/**
 * 4.提取JSON数据，否则需要一一赋值
 */
function getJsonData () {
  let jsonData = {
    id: 42,
    status: 'ok',
    data: [88, 99]
  }
  let {id, status, data: number} = jsonData
  console.log(id, status, number)
}

/**
 * 5.函数参数的默认值，否则需要短路运算符
 * @param x
 * @param y
 */
function funDefaultParam (x = 1, y = 2) {
  console.log(x, y)
}

function traverseMap () {
  let map = new Map()
  map.set('first', 'hello')
  map.set('second', 'world')
  // 同时获取键值和键名
  for (let [key, value] of map) {
    console.log(key + ':' + value)
  }
  // 只获取键名
  for (let [key] of map) {
    console.log(key)
  }
  // 获取键值
  for (let [, value] of map) {
    console.log(value)
  }

  // let o = {'t': 'test'}
  let m = new Map([['t', 'test']])
  for (let [key, value] of m) {
    console.log(key + ':' + value)
  }
}
