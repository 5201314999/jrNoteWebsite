(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{170:function(_,e,t){"use strict";t.r(e);var v=t(0),i=Object(v.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var _=this,e=_.$createElement,t=_._self._c||e;return t("div",{staticClass:"content"},[t("h2",{attrs:{id:"浏览器面试系列"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#浏览器面试系列","aria-hidden":"true"}},[_._v("#")]),_._v(" 浏览器面试系列")]),_._v(" "),t("h3",{attrs:{id:"_1-浏览器有几种进程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-浏览器有几种进程","aria-hidden":"true"}},[_._v("#")]),_._v(" 1. 浏览器有几种进程")]),_._v(" "),t("ol",[t("li",[_._v("浏览器主进程")]),_._v(" "),t("li",[_._v("网络进程")]),_._v(" "),t("li",[_._v("gpu 进程")]),_._v(" "),t("li",[_._v("渲染进程")]),_._v(" "),t("li",[_._v("插件进程")])]),_._v(" "),t("h3",{attrs:{id:"_2-浏览器怎么确保传输数据的完整性"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-浏览器怎么确保传输数据的完整性","aria-hidden":"true"}},[_._v("#")]),_._v(" 2. 浏览器怎么确保传输数据的完整性")]),_._v(" "),t("p",[_._v("浏览器使用IP 协议发送数据，ip 协议只能知道发送到哪台主机，交付给哪个应用需要传输层协议TCP 或者用户数据包协议UDP,这2种协议各自的特点是")]),_._v(" "),t("p",[t("code",[_._v("速度，可靠性，传输数据大小")]),_._v(" 。TCP 使用了3次握手和4次挥手建立，关闭连接。传输报文带有队列号，可以做完整性校验，丢包重传等。")]),_._v(" "),t("ul",[t("li",[_._v("TCP三次握手")])]),_._v(" "),t("ol",[t("li",[_._v("主机1发送报文给主机2，设置SYN=1 和sequenceNumber, 发送之后主机1进入SYNC_SEND 状态")]),_._v(" "),t("li",[_._v("主机2此时给主机1 应答信号（Acknowledgement）同时把主机2自身的连接报文发送过去，设置SYNC和sequenceNumber。(挥手要4次，而这里只要3次的关键原因),此时主机2进入了SYN_RECV 状态")]),_._v(" "),t("li",[_._v("主机1收到主机2的连接报文之后，设置应答信号，acknowledgement number信号，发送给主机2，2台主机进入established 状态（连接）。")])]),_._v(" "),t("ul",[t("li",[_._v("TCP四次挥手")])]),_._v(" "),t("ol",[t("li",[_._v("主机1 没有数据要发送给主机2时，发送一个断开的报文，报文内容设置FIN字段和 sequenceNumber，发送之后进入 FIN_WAIT_1 状态")]),_._v(" "),t("li",[_._v("主机2 收到主机1断开报文之后，发送一个应答信号，设置acknowledgement Number ，主机1 收到主机2应答之后，进入FIN_WAIT_2 状态")]),_._v(" "),t("li",[_._v("主机2 没有数据发送给主机1之后,也会给主机1一个断开信号，报文内容设置FIN 状态和sequecence number. 然后主机2进入LAST_ACK 状态")]),_._v(" "),t("li",[_._v("主机1 收到主机2请求关闭状态报文后，会发送一个应答Fin 报文段，主机1 进入TIME_WAIT 状态，主机2 收到后关闭连接，2MSL 时间后主机1 没收到消息也关闭连接。")])]),_._v(" "),t("h3",{attrs:{id:"_3-url-输入之后发生了什么"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-url-输入之后发生了什么","aria-hidden":"true"}},[_._v("#")]),_._v(" 3. url 输入之后发生了什么")]),_._v(" "),t("ol",[t("li",[_._v("url 合成，例如只输入关键词的话，浏览器会带上默认的搜索引擎顶尖域名，带上对应的协议字段http。")]),_._v(" "),t("li",[_._v("DNS 解析")]),_._v(" "),t("li",[_._v("建立TCP连接")]),_._v(" "),t("li",[_._v("发送数据给服务端，服务端进行相应处理，如果if-modified-since 携带的时间仍就有效，返回304， 否则返回状态200， 资源重定向302 等。")]),_._v(" "),t("li",[_._v("关闭TCP连接")]),_._v(" "),t("li",[_._v("获取到对应的html 资源后进行渲染处理")])]),_._v(" "),t("h3",{attrs:{id:"_4-dns-解析"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-dns-解析","aria-hidden":"true"}},[_._v("#")]),_._v(" 4. DNS 解析")]),_._v(" "),t("p",[_._v("把域名解析成ip，具体解析过程有好几个步骤")]),_._v(" "),t("ol",[t("li",[_._v("DNS 服务器是一个树状结构")])]),_._v(" "),t("ul",[t("li",[_._v("根DNS服务器 返回 顶级域DNS ip")]),_._v(" "),t("li",[_._v("顶级域DNS 服务器 返回 权威DNS服务器")]),_._v(" "),t("li",[_._v("权威DNS服务器 返回主机ip")])]),_._v(" "),t("ol",{attrs:{start:"2"}},[t("li",[_._v("递归查询 和迭代 查询")])]),_._v(" "),t("ul",[t("li",[t("p",[_._v("递归查询： 从浏览器缓存中查找->本地的hosts文件查找->找本地DNS解析器缓存查找->本地DNS服务器查找，这个过程中任何一步找到了都会结束查找流程。")])]),_._v(" "),t("li",[t("p",[_._v("迭代查询：\n"),t("img",{attrs:{src:"https://mmbiz.qpic.cn/sz_mmbiz_jpg/2wV7LicL762ZUCR5WEela9H9fDfYic8BApiaGWKMcic9TPQKGcwHlPhq5K9WBgr6ZZpoaCVhibtZx6Ewtcy5nlDgEbQ/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1",alt:"image"}})])])]),_._v(" "),t("h3",{attrs:{id:"_5-http-缓存"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-http-缓存","aria-hidden":"true"}},[_._v("#")]),_._v(" 5. http 缓存")]),_._v(" "),t("ol",[t("li",[t("p",[_._v("强缓存\nexpires 是一个时间戳，可能存在客户端和服务器端时间不一致的问题。\n考虑到 expires 的局限性，HTTP1.1 新增了cache-control字段来完成 expires 的任务。expires 能做的事情，Cache-Control 都能做；expires 完成不了的事情，Cache-Control 也能做。因此，Cache-Control 可以视作是 expires 的完全替代方案。在当下的前端实践里，我们继续使用 expires 的唯一目的就是向下兼容。cache-control 优先级更高。")])]),_._v(" "),t("li",[t("p",[_._v("协商缓存\nlast-modified etag ,etag 是 last-modified 的补充，解决last-modified 只能精确到秒，无法监听毫秒级文件变化；内容做了编辑，但实际内容并无改变，请求时无法有效利用缓存的2大问题。")])]),_._v(" "),t("li",[t("p",[_._v("整体图谱")])])]),_._v(" "),t("p",[t("img",{attrs:{src:"https://mmbiz.qpic.cn/mmbiz_jpg/2wV7LicL762Yiaw2R76AlG93kEADDlb7liaW9XXFkicFQKUbViclh1X1XYgSOtpzBCyOXXTQficE8rUQmznxEWu6UgHA/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1",alt:"image"}})]),_._v(" "),t("h3",{attrs:{id:"_6-浏览器渲染"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_6-浏览器渲染","aria-hidden":"true"}},[_._v("#")]),_._v(" 6 浏览器渲染")]),_._v(" "),t("p",[t("code",[_._v("构建dom 树")]),_._v("，"),t("code",[_._v("样式计算")]),_._v("，"),t("code",[_._v("布局树")]),_._v("，"),t("code",[_._v("分层")]),_._v(","),t("code",[_._v("栅格化")]),_._v(","),t("code",[_._v("显示")])]),_._v(" "),t("ol",[t("li",[t("p",[_._v("渲染进程将html 解析成dom 树")])]),_._v(" "),t("li",[t("p",[_._v("渲染引擎解析样式，设置到对应的dom 节点上")])]),_._v(" "),t("li",[t("p",[_._v("将dom 树构建成布局树，过滤掉不用显示的节点")])]),_._v(" "),t("li",[t("p",[_._v("将布局树分层，有些css 3d 变化会单独用个图层存储，使用gpu 硬件加速，提高效率，每个图层都是一堆执行指令列表")])]),_._v(" "),t("li",[t("p",[_._v("再交给合成线程，合成线程对每个小块的图层光栅化，图层转化成位图")])]),_._v(" "),t("li",[t("p",[_._v("渲染引擎开始渲染位图")])])]),_._v(" "),t("p",[_._v("注意： "),t("code",[_._v("通常有层叠上下文设置的元素，或者裁剪的区域，例如文字溢出容器，那么文字单独一个层，滚动条也是单独一个层。")])]),_._v(" "),t("h3",{attrs:{id:"_7-3种内存空间"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_7-3种内存空间","aria-hidden":"true"}},[_._v("#")]),_._v(" 7. 3种内存空间")]),_._v(" "),t("ol",[t("li",[_._v("代码空间")]),_._v(" "),t("li",[_._v("栈: 基本类型， "),t("code",[_._v("执行上下文状态，不能太大，太大会影响到上下文切换效率，进而影响程序执行效率")]),_._v("，")]),_._v(" "),t("li",[_._v("堆空间 ：对象的值，"),t("code",[_._v("闭包也会创建一个对象，闭包中的变量是放在堆中")])])]),_._v(" "),t("h3",{attrs:{id:"_8-变脸提升和块级作用域"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_8-变脸提升和块级作用域","aria-hidden":"true"}},[_._v("#")]),_._v(" 8. 变脸提升和块级作用域")]),_._v(" "),t("p",[_._v("块级作用域 依靠的是词法环境， 变量提升依赖变量环境，放在函数上下文中，2者都是存在栈结构中,执行上下文和函数上下文的区别")]),_._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[_._v("function foo() {\n    var test = 1\n    let myname= 'LuckyWinty'\n    {\n        console.log(myname)\n        let myname= 'winty'\n    }\n    console.log(test,'---',myname)\n}\nfoo()\n\n")])])])])}],!1,null,null,null);i.options.__file="browser.md";e.default=i.exports}}]);