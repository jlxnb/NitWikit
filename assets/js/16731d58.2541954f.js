"use strict";(self.webpackChunkWiki=self.webpackChunkWiki||[]).push([["6970"],{610:function(e,s,n){n.r(s),n.d(s,{metadata:()=>r,contentTitle:()=>o,default:()=>h,assets:()=>l,toc:()=>d,frontMatter:()=>c});var r=JSON.parse('{"id":"process/cross-server/cross-server","title":"\u8DE8\u670D\u7AEF","description":"\u7B80\u5355\u7684\u6765\u8BF4\u5C31\u662F\u5C06\u591A\u4E2A\u670D\u52A1\u5668\u8FDE\u6210\u4E00\u4E2A\u6574\u4F53(\u6BD4\u5982\u4F60\u7ECF\u5E38\u770B\u5230\u7684\u67D0\u4E9B\u751F\u5B58\u4E00\u533A\uFF0C\u751F\u5B58\u4E8C\u533A)\uFF0C\u73A9\u5BB6\u53EF\u4EE5\u81EA\u7531\u9009\u62E9\u5230\u54EA\u4E2A\u670D\u52A1\u5668\uFF0C\u800C\u4E0D\u7528\u9000\u51FA\u91CD\u8FDE\uFF0C","source":"@site/docs-java/process/cross-server/cross-server.md","sourceDirName":"process/cross-server","slug":"/cross-server","permalink":"/Java/cross-server","draft":false,"unlisted":false,"editUrl":"https://github.com/8aka-Team/NitWikit/tree/main/docs-java/process/cross-server/cross-server.md","tags":[],"version":"current","lastUpdatedBy":"lilingfengdev","lastUpdatedAt":1732240545000,"sidebarPosition":4,"frontMatter":{"title":"\u8DE8\u670D\u7AEF","slug":"/cross-server","sidebar_position":4},"sidebar":"tutorialSidebar","previous":{"title":"GeyserMEG4\u652F\u6301","permalink":"/Java/process/mobile-player/Geyser/Upgrade/GeyserMEG4-supports"},"next":{"title":"\u6838\u5FC3\u9009\u62E9","permalink":"/Java/process/cross-server/server-core-choose"}}'),i=n("52676"),t=n("69532");let c={title:"\u8DE8\u670D\u7AEF",slug:"/cross-server",sidebar_position:4},o="\u8DE8\u670D\u7AEF",l={},d=[{value:"\u539F\u7406\u8BB2\u89E3",id:"\u539F\u7406\u8BB2\u89E3",level:2},{value:"\u4E3A\u4EC0\u4E48\u9700\u8981\u4EE3\u7406\u7AEF?",id:"\u4E3A\u4EC0\u4E48\u9700\u8981\u4EE3\u7406\u7AEF",level:2},{value:"\u63A8\u8350\u7528\u4EC0\u4E48?",id:"\u63A8\u8350\u7528\u4EC0\u4E48",level:2},{value:"\u5B89\u88C5\u6570\u636E\u5E93",id:"\u5B89\u88C5\u6570\u636E\u5E93",level:3}];function a(e){let s={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",...(0,t.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.header,{children:(0,i.jsx)(s.h1,{id:"\u8DE8\u670D\u7AEF",children:"\u8DE8\u670D\u7AEF"})}),"\n",(0,i.jsx)(s.p,{children:"\u7B80\u5355\u7684\u6765\u8BF4\u5C31\u662F\u5C06\u591A\u4E2A\u670D\u52A1\u5668\u8FDE\u6210\u4E00\u4E2A\u6574\u4F53(\u6BD4\u5982\u4F60\u7ECF\u5E38\u770B\u5230\u7684\u67D0\u4E9B\u751F\u5B58\u4E00\u533A\uFF0C\u751F\u5B58\u4E8C\u533A)\uFF0C\u73A9\u5BB6\u53EF\u4EE5\u81EA\u7531\u9009\u62E9\u5230\u54EA\u4E2A\u670D\u52A1\u5668\uFF0C\u800C\u4E0D\u7528\u9000\u51FA\u91CD\u8FDE\uFF0C"}),"\n",(0,i.jsx)(s.p,{children:"\u4E0D\u540C\u670D\u52A1\u5668\u4E4B\u95F4\u53EF\u4EE5\u901A\u8FC7\u8DE8\u670D\u540C\u6B65(\u6BD4\u5982 HuskSync )\u548C\u6570\u636E\u5E93\u540C\u6B65\u6570\u636E\uFF0C\u5E73\u65F6\u5E38\u542C\u5230\u7684\u7FA4\u7EC4\u670D\u4E5F\u662F\u4E00\u4E2A\u610F\u601D. \u8DE8\u670D\u901A\u5E38\u7684\u5B9E\u73B0\u65B9\u6CD5\u662F:"}),"\n",(0,i.jsx)(s.p,{children:"\u4E00\u4E2A\u53CD\u5411\u4EE3\u7406\u7AEF(\u5982 Velocity / BungeeCord )\u548C\u591A\u4E2A\u5B50\u670D\u52A1\u5668(\u5982 Paper / Purpur / Leaf \u7B49). \u73A9\u5BB6\u53EA\u9700\u8981\u8FDE\u63A5\u5230\u53CD\u5411\u4EE3\u7406\u7AEF\u5373\u53EF\u8BA9\u53CD\u5411\u4EE3\u7406\u7AEF\u548C\u5B50\u670D\u52A1\u5668\u8054\u7CFB\uFF0C\u6700\u540E\u628A\u73A9\u5BB6\u9001\u5230\u5BF9\u5E94\u7684\u670D\u52A1\u5668."}),"\n",(0,i.jsx)(s.h2,{id:"\u539F\u7406\u8BB2\u89E3",children:"\u539F\u7406\u8BB2\u89E3"}),"\n",(0,i.jsx)(s.p,{children:"\u5047\u8BBE\u4F60\u73B0\u5728\u6709\u4E09\u4E2A\u670D\u52A1\u5668\uFF0C\u5206\u522B\u4E3A\u767B\u5F55\u670D\uFF0C\u751F\u5B58\u670D\u548C\u8D44\u6E90\u670D\uFF0C\u4E09\u4E2A\u670D\u52A1\u5668\u90FD\u80FD\u6B63\u5E38\u8FDB\u5165\u548C\u6E38\u73A9\uFF0C"}),"\n",(0,i.jsx)(s.p,{children:"\u73B0\u5728\u4F60\u60F3\u5EFA\u8BBE\u4E00\u4E2A\u7FA4\u7EC4\u670D\u628A\u8FD9\u4E09\u4E2A\u670D\u52A1\u5668\u8FDE\u63A5\u8D77\u6765\uFF0C\u90A3\u4E48\uFF0C\u4F60\u7684\u670D\u52A1\u5668\u7ED3\u6784\u5C31\u4F1A\u662F\u8FD9\u6837"}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{src:n(31611).Z+"",width:"950",height:"585"})}),"\n",(0,i.jsxs)(s.admonition,{type:"info",children:[(0,i.jsxs)(s.p,{children:["BungeeCord / Velocity \u7AEF(\u6216\u4ED6\u4EEC\u7684 Fork )\u5728\u8FD9\u91CC\u6211\u4EEC\u79F0\u4E3A",(0,i.jsx)(s.code,{children:"\u8DE8\u670D\u7AEF"}),"(\u6216\u8005\u79F0\u4E3A\u4E0A\u6E38\u670D\u52A1\u5668)"]}),(0,i.jsxs)(s.p,{children:["\u8FD9\u4E09\u4E2A\u670D\u52A1\u5668\u90FD\u79F0\u4E3A ",(0,i.jsx)(s.code,{children:"\u5B50\u670D"})," \u56FE\u4E2D\u4E3A\u4E09\u4E2A\u5B50\u670D\uFF0C\u5B50\u670D\u6CA1\u6709\u5148\u540E\u4E4B\u5206(\u6216\u8005\u79F0\u4E3A\u4E0B\u6E38\u670D\u52A1\u5668)"]})]}),"\n",(0,i.jsxs)(s.blockquote,{children:["\n",(0,i.jsx)(s.p,{children:"\u5982\u679C\u4F60\u7684\u7FA4\u7EC4\u670D\u642D\u5EFA\u5B8C\u6210\uFF0C\u90A3\u4E48\u6B63\u5E38\u6D41\u7A0B\u662F:"}),"\n",(0,i.jsxs)(s.blockquote,{children:["\n",(0,i.jsx)(s.p,{children:"\u73A9\u5BB6\u901A\u8FC7\u5BA2\u6237\u7AEF\u8FDE\u63A5\u5230\u8DE8\u670D\u7AEF\uFF0C\u63A5\u7740\u7531\u8DE8\u670D\u7AEF\u9001\u81F3\u5404\u4E2A\u5B50\u670D\uFF0C\u73A9\u5BB6\u53EF\u4EE5\u901A\u8FC7\u4E00\u4E9B\u65B9\u5F0F\u5207\u6362\u81EA\u5DF1\u6240\u5728\u7684\u5B50\u670D\uFF0C\u611F\u89C9\u4E0A\u5C31\u50CF\u662F\u5207\u6362\u7EF4\u5EA6\uFF0C\u73A9\u5BB6\u751A\u81F3\u610F\u8BC6\u4E0D\u5230\u81EA\u5DF1\u6362\u8FC7\u670D"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"\u4E3A\u4EC0\u4E48\u9700\u8981\u4EE3\u7406\u7AEF",children:"\u4E3A\u4EC0\u4E48\u9700\u8981\u4EE3\u7406\u7AEF?"}),"\n",(0,i.jsxs)(s.ol,{children:["\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:"Minecraft \u662F\u4E2A\u5355\u6838\u5FC3\u6E38\u620F\uFF0C\u73A9\u5BB6\u6570\u91CF\u5728\u8D85\u8FC7 50-100 \u540E\u51E0\u4E4E\u4EFB\u4F55\u6838\u5FC3\u90FD\u65E0\u6CD5\u4FDD\u8BC1\u5B8C\u5168\u6D41\u7545( Folia \u9664\u5916)\uFF0C\u800C\u4F7F\u7528\u591A\u4E2A\u670D\u52A1\u5668\u5219\u53EF\u4EE5\u5145\u5206\u5229\u7528\u591A\u6838\u5FC3\u4F18\u52BF\uFF0C\u5927\u670D\u52A1\u5668\u5FC5\u5907;"}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:"\u5BF9\u591A\u4E2A\u670D\u52A1\u5668\uFF0C\u73A9\u5BB6\u9700\u8981\u9000\u51FA\u91CD\u65B0\u8FDB\u5165\uFF0C\u4E14\u6570\u636E\u4E0D\u80FD\u5171\u4EAB. \u4EC5\u4EC5\u53EA\u662F\u5F00\u4E24\u4E2A\u670D\u52A1\u5668\u65E0\u6CD5\u4EA7\u751F\u6709\u6548\u4EA4\u4E92. \u6240\u4EE5\u9700\u8981\u8DE8\u670D\u7AEF\u5BF9\u670D\u52A1\u5668\u8FDB\u884C\u5207\u6362\u548C\u4EA4\u4E92\u7684\u5B8C\u5584;"}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:"\u5BF9\u5355\u4E2A\u670D\u52A1\u5668\uFF0C\u5728\u5185\u5B58\u6709\u4E00\u70B9\u70B9\u5BCC\u88D5\u7684\u60C5\u51B5\u4E0B(\u901A\u5E38\u4E0D\u5230 1GB )\uFF0C\u4ECD\u63A8\u8350\u4F7F\u7528\u4EE3\u7406\u7AEF\uFF0C\u670D\u52A1\u7AEF\u5BF9\u4E8E\u53CD\u5047\u4EBA\u653B\u51FB\u7684\u6027\u80FD\u4E0D\u5982\u4EE3\u7406\u7AEF\uFF0C\u5982\u679C\u4F60\u88AB\u653B\u51FB\u4E86\uFF0C\u66F4\u6362\u6210\u4EE3\u7406\u7AEF\u518D\u8BF4;"}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:["\u6709\u4E9B\u63D2\u4EF6\u662F\u4EE3\u7406\u7AEF\u624D\u80FD\u5B89\u88C5\u7684\uFF0C\u800C\u5728 Bukkit \u7CFB\u4E0B\u53EF\u80FD\u4E0D\u7A33\u5B9A(\u5982",(0,i.jsx)(s.a,{href:"https://github.com/CaaMoe/MultiLogin",children:"MultiLogin"}),")."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"\u63A8\u8350\u7528\u4EC0\u4E48",children:"\u63A8\u8350\u7528\u4EC0\u4E48?"}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"\u63A8\u8350\u4F7F\u7528 Velocity"}),"\uFF0C\u9664\u975E\u4F60\u7684\u7248\u672C\u4E0D\u9002\u5408 Velocity \u7684\u73B0\u4EE3\u8F6C\u53D1"]}),"\n",(0,i.jsx)(s.h3,{id:"\u5B89\u88C5\u6570\u636E\u5E93",children:"\u5B89\u88C5\u6570\u636E\u5E93"}),"\n",(0,i.jsx)(s.p,{children:"\u4F60\u90FD\u8DE8\u670D\u4E86\uFF0C\u4F30\u8BA1\u4F1A\u6709\u591A\u7AEF\u6570\u636E\u540C\u6B65\u7684\u9700\u6C42\u5427?"}),"\n",(0,i.jsxs)(s.p,{children:["\u770B ",(0,i.jsx)(s.a,{href:"https://nitwikit.yizhan.wiki/database",children:"\u6570\u636E\u5E93\u76F8\u5173"})]}),"\n",(0,i.jsx)(s.p,{children:"\u4E00\u822C\u9700\u8981\u5B89\u88C5\u4E24\u4E2A\u6570\u636E\u5E93\uFF0CMySQL \u548C Redis\uFF0CMySQL \u7528\u4E8E\u5B58\u50A8\u91CD\u8981\u4FE1\u606F\uFF0C\u6BD4\u5982\u8D26\u53F7\u5BC6\u7801\uFF0C\u7ECF\u6D4E\uFF0C\u6743\u9650 Redis \u7528\u4E8E\u5FEB\u901F\u8DE8\u670D\u540C\u6B65"})]})}function h(e={}){let{wrapper:s}={...(0,t.a)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},31611:function(e,s,n){n.d(s,{Z:function(){return r}});let r=n.p+"assets/images/\u7075\u9B42\u753B\u5E08\u6559\u5F00\u7FA4\u7EC4\u670D-7ca5cdd4358a53b85459c4a47876a709.png"},69532:function(e,s,n){n.d(s,{Z:function(){return o},a:function(){return c}});var r=n(75271);let i={},t=r.createContext(i);function c(e){let s=r.useContext(t);return r.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),r.createElement(t.Provider,{value:s},e.children)}}}]);