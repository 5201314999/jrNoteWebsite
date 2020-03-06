(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{167:function(t,n,e){"use strict";e.r(n);var r=e(0),a=Object(r.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"content"},[e("h1",{attrs:{id:"koa-请求参数接收"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#koa-请求参数接收","aria-hidden":"true"}},[t._v("#")]),t._v(" koa 请求参数接收")]),t._v(" "),e("h2",{attrs:{id:"前言"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#前言","aria-hidden":"true"}},[t._v("#")]),t._v(" 前言")]),t._v(" "),e("p",[e("strong",[t._v("web 请求都类似，非常容易理解,不详细说明")])]),t._v(" "),e("p",[e("code",[t._v("注意")]),t._v(":  ctx.request 和 node request 不等同")]),t._v(" "),e("h2",{attrs:{id:"get-请求"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#get-请求","aria-hidden":"true"}},[t._v("#")]),t._v(" get 请求")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("    /**\n * Description 获取get 请求参数\n * @authors fanjiongrong (fanjiongrong@tvflnet.com)\n * @date    2018-11-15 11:27:06\n * @version 1.0.0\n */\n\n const Koa=require('koa');\n\n const app=new Koa();\n\n app.use(async (ctx) =>{\n     //从request 对象取\n     let url=ctx.url;\n     console.log(ctx.request);\n     let request=ctx.request;\n     let req_query=ctx.request.query;\n     let req_querystring=ctx.request.querystring;\n\n     //从上下文中取\n     let ctx_query=ctx.query;\n     let ctx_querystring=ctx.querystring;\n\n     ctx.body={\n         url,\n         req_query,\n         req_querystring,\n         ctx_query,\n         ctx_querystring\n     }\n })\n\n\n app.listen(3000);\n\n console.log('[demo] is starting at port 3000');\n console.log('http://localhost:3000');\n\n")])])]),e("h2",{attrs:{id:"post-请求"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#post-请求","aria-hidden":"true"}},[t._v("#")]),t._v(" post 请求")]),t._v(" "),e("p",[t._v("1 ctx.request 是 context 经过封装的对象， ct.req 是 node.js 请求对象。\n2 ctx.response ctx.res 同理\n3 由于 koa 本身没有封装获取 post 请求参数的代码，不借助第三方中间件，代码和 node.js 原生 post 请求一致")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("  /**\n* Description 解析node 请求的post 参数\n* @authors fanjiongrong (fanjiongrong@tvflnet.com)\n* @date    2018-11-15 17:38:30\n* @version 1.0.0\n*/\nasync function parsePostData(ctx) {\nreturn new Promise((resolve, reject) => {\n  try {\n    let postData = '';\n    // 通过req的data事件监听函数，每当接受到请求体的数据，就累加到post变量中\n    ctx.req.addListener('data', data => {\n      postData += data;\n      console.log(postData);\n    });\n    //结束后真正解析\n    ctx.req.addListener('end', () => {\n      let parsePostData = parseQueryStr(postData);\n      resolve(parsePostData);\n    });\n  } catch (err) {\n    reject(err);\n  }\n});\n}\n\nfunction parseQueryStr(queryStr) {\nlet queryData = {};\nconst queryStrList = queryStr.split('&');\nconsole.log(queryStrList);\nfor (let  queryStr of queryStrList) {\n  let itemList = queryStr.split('=');\n  queryData[itemList[0]] = decodeURIComponent(itemList[1]);\n}\nreturn queryData;\n}\n\nmodule.exports=parsePostData;\n\n")])])]),e("h2",{attrs:{id:"借助中间件实现post-请求参数解析"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#借助中间件实现post-请求参数解析","aria-hidden":"true"}},[t._v("#")]),t._v(" 借助中间件实现post 请求参数解析")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("/**\n * Description 使用中间件获取post 请求参数 koa-bodyparser \n * @authors fanjiongrong (fanjiongrong@tvflnet.com)\n * @date    2018-11-15 18:38:58\n * @version 1.0.0\n */\n\nconst Koa = require('koa');\nconst bodyparser=require('koa-bodyparser');\n\n\nconst app = new Koa();\n\napp.use(bodyparser());\n\napp.use(async ctx => {\n  if (ctx.url === '/' && ctx.method === 'GET') {\n    // 当GET请求时候返回表单页面\n    let html = `\n          <h1>koa2 request post demo</h1>\n          <form method=\"POST\" action=\"/\">\n            <p>userName</p>\n            <input name=\"userName\" /><br/>\n            <p>nickName</p>\n            <input name=\"nickName\" /><br/>\n            <p>email</p>\n            <input name=\"email\" /><br/>\n            <button type=\"submit\">submit</button>\n          </form>\n        `;\n    ctx.body = html;\n  } else if (ctx.url === '/' && ctx.method === 'POST') {\n    // 当POST请求的时候，解析POST表单里的数据，并显示出来\n    let postData = ctx.request.body;\n    ctx.body = postData;\n  } else {\n    // 其他请求显示404\n    ctx.body = '<h1>404！！！ o(╯□╰)o</h1>';\n  }\n});\n\napp.listen(3000, () => {\n  console.log('[demo] is starting at port 3000');\n  console.log('http://localhost:3000');\n});\n\n\n")])])])])}],!1,null,null,null);a.options.__file="8koaQuery.md";n.default=a.exports}}]);