(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{181:function(t,e,n){"use strict";n.r(e);var a=n(0),r=Object(a.a)({},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),n("p",[t._v("这里列出我希望你在阅读文章前最好了解的东西：")]),t._v(" "),n("ul",[t._m(2),t._v(" "),n("li",[n("p",[t._v("nodejs")]),t._v(" "),n("ul",[n("li",[t._v("参考教程 "),n("a",{attrs:{href:"https://www.runoob.com/nodejs/nodejs-tutorial.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://www.runoob.com/nodejs/nodejs-tutorial.html"),n("OutboundLink")],1)])])]),t._v(" "),n("li",[n("p",[t._v("模块化方法")]),t._v(" "),n("ul",[n("li",[t._v("参考文章 "),n("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/26477995",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://zhuanlan.zhihu.com/p/26477995"),n("OutboundLink")],1)])])]),t._v(" "),t._m(3)]),t._v(" "),t._m(4),t._v(" "),n("p",[t._v("Koa2 是一个基于 nodejs 的一个小框架 ,github 地址 "),n("a",{attrs:{href:"https://github.com/koajs/koa",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/koajs/koa"),n("OutboundLink")],1)]),t._v(" "),t._m(5),t._v(" "),t._m(6),t._m(7),t._v(" "),t._m(8),t._v(" "),t._m(9),t._v(" "),t._m(10),t._v(" "),t._m(11),t._m(12),t._v(" "),t._m(13),n("ol",{attrs:{start:"3"}},[t._m(14),t._v(" "),n("li",[n("p",[t._v("最后,这里有个简单易懂的文档，"),n("a",{attrs:{href:"https://chenshenhai.github.io/koa2-note/",target:"_blank",rel:"noopener noreferrer"}},[t._v("github Koa2 学习资料"),n("OutboundLink")],1)])])])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"koa2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#koa2","aria-hidden":"true"}},[this._v("#")]),this._v(" Koa2")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"前言"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#前言","aria-hidden":"true"}},[this._v("#")]),this._v(" 前言")])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("p",[this._v("es7 async/await 异步编程,es6 基本语法")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",[n("p",[t._v("node.js 调试方法")]),t._v(" "),n("ul",[n("li",[t._v("使用vscode\n可以用vscode 自身的调试，选择node.js 类型启动,选择js 配置启动。然后点击启动即可。")])]),t._v(" "),n("p",[n("img",{attrs:{src:"/main/1startKoa/nodeDebugger.png",alt:"Image text"}})]),t._v(" "),n("ul",[n("li",[t._v("最新的调试办法,node.js 内置\n"),n("ul",[n("li",[t._v("1 环境\n"),n("ul",[n("li",[t._v("node环境 8.x +")]),t._v(" "),n("li",[t._v("chrome 60+")])])]),t._v(" "),n("li",[t._v("2 准备一段代码"),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("    /**\n    * 测试resolve.js path 模块\n    */\n    const Koa=require('koa');\n    const path = require('path');\n\n    const app=new Koa();\n    const p=path.resolve('/src','../','view');\n    console.log(`p:${p}`);\n    const dir=path.resolve();\n    debugger\n    console.log(dir);\n    app.use(async(ctx) =>{\n        ctx.body= p;\n    })\n\n    app.listen(3000);\n\n    console.log('[测试resolve.js] start-quick is starting at port 3000')\n\n")])])])]),t._v(" "),n("li",[t._v("3 步骤：\n"),n("ul",[n("li",[n("p",[t._v("(1) 命令行node --inspect resolve.js\n"),n("img",{attrs:{src:"/main/1startKoa/node_1.png",alt:"Image text"}})])]),t._v(" "),n("li",[n("p",[t._v("(2) 打开chrome 输入http://localhost:3000\n"),n("img",{attrs:{src:"/main/1startKoa/node_2.png",alt:"Image text"}})]),t._v(" "),n("p",[t._v("说明：绿色的按钮会打开一个新的debugger窗口，在那个窗口可以进行node.js 的调试\n"),n("img",{attrs:{src:"/main/1startKoa/node_3.png",alt:"Image text"}})])])])]),t._v(" "),n("li",[t._v("4 结束")])])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"介绍"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#介绍","aria-hidden":"true"}},[this._v("#")]),this._v(" 介绍")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"目录结构"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#目录结构","aria-hidden":"true"}},[this._v("#")]),this._v(" 目录结构")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("├── lib ----------------------------- 核心目录\n│   ├── application.js -------------- 是整个koa2 的入口文件\n│   ├── context.js ------------------ 处理应用上下文\n│   ├── request.js ------------------ 处理http 请求\n│   ├── response.js ----------------- 处理http 响应\n├── package.json  \n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"特性"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#特性","aria-hidden":"true"}},[this._v("#")]),this._v(" 特性")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("只提供封装好http上下文、请求、响应，以及基于async/await的中间件容器。")]),this._v(" "),e("li",[this._v("利用ES7的async/await的来处理传统回调嵌套问题和代替koa@1的generator，但是需要在node.js 7.x的harmony模式下才能支持async/await。")]),this._v(" "),e("li",[this._v("中间件只支持 async/await 封装的，如果要使用koa@1基于generator中间件，需要通过中间件koa-convert封装一下才能使用。")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"例子"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#例子","aria-hidden":"true"}},[this._v("#")]),this._v(" 例子")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ol",[e("li",[this._v("/util/render.js")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v(" const fs=require('fs');\n\n function render(page){\n     return new Promise((resolve,reject)=>{\n         let viewUrl=`./views/${page}`;\n         fs.readFile(viewUrl,'binary',(err,data)=>{\n             if(err){\n                 reject(err)\n             }\n             else{\n                 resolve(data)\n             }\n         })\n     })\n }\n module.exports=render;\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ol",{attrs:{start:"2"}},[e("li",[this._v("/index.js")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("/**\n * Description node.js 读取文件\n * @authors fanjiongrong (fanjiongrong@tvflnet.com)\n * @date    2018-10-29 11:33:19\n * @version 1.0.0\n */\n\nconst Koa=require('koa')\nconst render =require( './util/render')\nconst app= new Koa()\n\napp.use(async (ctx) =>{\n    let html = await render('demo1.html')\n    ctx.body= html\n})\n\napp.listen(3000)\n\nconsole.log('[demo] file-render is starting at port 3000')\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("p",[this._v("启动方式 node index.js")])])}],!1,null,null,null);r.options.__file="1startKoa.md";e.default=r.exports}}]);