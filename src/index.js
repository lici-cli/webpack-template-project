// console.log('hello')

require('./index.css')
// require('./indexless.less')

// 解决图片引入问题
// let liciPng = require('./lici.png')
// // import liciPng from './lici.png'
// let IMG = new Image()
// IMG.src = liciPng
// document.body.appendChild(IMG)

// 箭头函数和const
// const b = '123'
// let str = "abcd"
// let timer = setTimeout(() => {
//   console.log('timeout')
// }, 1000)
// // 高版本API 
// let d = str.includes('b')

// react jsx
// import React from 'react'
// import ReactDOM from 'react-dom'
//  ReactDOM.render(<h1>ddd</h1>, document.getElementById('root'))

// require('./other')

// // JS的热更新
// if (module.hot) {
//   module.hot.accept('./other.js', function () {
//     require('./other.js')
//   })
// }

// webpack-definePlugin 到处的全局变量
// console.log(process.env.NODE_ENV)
// console.log(__development__)


//提取JS冗余代码 @babel/plugin-transform-runtime
// class Parent {

// }
// let p = new Parent;
// class Mon {

// }
// let n = new Mon;

  

// class decorator

// @type('金毛1')
// class Dog {
//   @readOnly
//   name='faci'
// }

// function type (type) {
//   return function (target) {
//     target.type = type
//   }
// }


// function readOnly (target,property,descritor) {
//   descritor.writable = false
//   return descritor
// }

// let dog = new Dog
// dog.name = 'lli'
// console.log(Dog.type,dog.name)

