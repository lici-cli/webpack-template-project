// 动态导入 懒加载

document.getElementById('btn').addEventListener('click', function () {
  // import 异步加载模块，es7语法
  import('./video.js').then(function (video) {
    // video 指的是video.js的export导出对象
    let name = video.getName()
    console.log(name)
  })
})