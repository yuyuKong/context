
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
  let ikey = key.replace(/\.\//,'')
  // console.log(key)
  // console.log(ikey)
  let _keyArr = key.replace('/index.vue','').split('.')
  let keyArr = key.split('/')
  if (ikey.indexOf('/') === -1 && ikey.indexOf('index') != -1) {
    route = {
      path:_keyArr[1],
      component:()=>import(`./pages/${ikey}`)
    }
  } else if (keyArr.indexOf('index') != -1) {
    arr.push({
      path:`${keyArr[keyArr.indexOf('index')-1].replace('/','')}`,
      component:()=>import(`./pages/${ikey}`)
    })
  } else {
    arr.push({
      path:`${_keyArr[1].replace('/','')}`,
      component:()=>import(`./pages/${ikey}`)
    })
  }
})
route.children = arr
// console.log(route)
export default route