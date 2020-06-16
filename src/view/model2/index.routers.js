
/**
 * 自动路由
 * 按照业务去划分模块，
 * 这种方法可以全局统一写路由文件。可以规范模块命名方式
 * 但是不可以组件按需加载，可以学习服务器端渲染
 */



var r = require.context('./pages',true,/.vue/)
var arr = []
var route = {}

r.keys().forEach(key=>{
  var _keyArr = key.split('.')
  if (key.indexOf('index') != -1) {
    route = {
      path:_keyArr[1],
      component:r(key).default
    }
  } else {
    arr.push({
      path:`${_keyArr[2]}`,
      component:r(key).default
    })
  }
})
route.children = arr
console.log(route)
export default route