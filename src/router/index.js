import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

// 用来存放路由的数组
const routerList = []
function importAll (route){
  route.keys().forEach(
    // 将每个模块的路由文件放进数组
    // route(key) 即获取到的路由文件
    (key) => routerList.push(route(key).default)
  )

  // console.dir(route)
  // console.log('keys',route.keys())
  // console.log('id',route.id)
  // console.log('resolve',route.resolve(route.keys()[0]))
  // console.log('module',route(route.keys()[0]))
}
// 抛出一个期待的结构数组 
// 获取view文件夹下面的以.routers.js结尾的文件，遍历子目录
importAll(require.context('../view', true, /\.routers\.js/))
// console.log(routerList)


export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    // 展开路由数组
    ...routerList
  ]
})
