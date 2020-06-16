
/**
 * 全局注册高频组件
 * 思路：1.将高频组件统一放在一个文件夹
 *      2.利用wabpack的方法 require.context()获取到所有的文件
 *      3.循环注册
 */
function changeStr(str){
  return str.charAt(0).toUpperCase() + str.slice(1)
}

const install = (Vue)=>{
  // 通过webpackAPI拿到vue文件，如果要遍历子目录，则为true
  // @param  (组件目录，是否遍历子目录，组件文件名格式)
  const requireComponent = require.context('./',false,/\.vue$/);
  // console.log(requireComponent.keys())
  requireComponent.keys().forEach(fileName=>{
    let config = requireComponent(fileName)
    // console.log(config)
    let componentName = changeStr(
      fileName.replace(/^\.\//,'').replace(/\.\w+$/,'')
    )
    // console.log(componentName)
    Vue.component(componentName,config.default || config)
  })
}
export default {
  install
}
