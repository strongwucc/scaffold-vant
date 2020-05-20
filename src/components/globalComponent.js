import Vue from 'vue'

// 处理首字母大写
function changeStr(str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

// eslint-disable-next-line no-undef
const requireComponent = require.context('./common', false, /\.vue$/)
// 打印
// console.log("requireComponent.keys():", requireComponent.keys());
requireComponent.keys().forEach(fileName => {
  const config = requireComponent(fileName)
  // 打印
  // console.log("config:", config);
  // child1.vue => child1
  console.log(fileName.replace(/^\.\//, ''))
  const componentName = changeStr(fileName.replace(/^\.\//, '')).replace(
    /\.\w+$/,
    ''
  )
  // 动态注册目录下的所有 .vue 文件
  Vue.component(componentName, config.default || config)
})
