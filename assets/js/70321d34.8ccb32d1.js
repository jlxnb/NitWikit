"use strict";(self.webpackChunkWiki=self.webpackChunkWiki||[]).push([[6371],{1993:(e,s,i)=>{i.r(s),i.d(s,{assets:()=>l,contentTitle:()=>c,default:()=>p,frontMatter:()=>o,metadata:()=>n,toc:()=>h});const n=JSON.parse('{"id":"process/plugin/ManageTool/Permission/Permission","title":"\u6743\u9650\u63d2\u4ef6","description":"\u6211\u4eec\u53ea\u63a8\u8350 Luckperms \u4f5c\u4e3a\u670d\u52a1\u5668\u7684\u6743\u9650\u63d2\u4ef6","source":"@site/docs-java/process/plugin/ManageTool/Permission/Permission.md","sourceDirName":"process/plugin/ManageTool/Permission","slug":"/permission","permalink":"/Java/permission","draft":false,"unlisted":false,"editUrl":"https://github.com/postyizhan/NitWikit/tree/main/docs-java/process/plugin/ManageTool/Permission/Permission.md","tags":[],"version":"current","lastUpdatedBy":"\u9a7f\u7ad9","lastUpdatedAt":1727693356000,"sidebarPosition":1,"frontMatter":{"title":"\u6743\u9650\u63d2\u4ef6","slug":"/permission","sidebar_position":1},"sidebar":"tutorialSidebar","previous":{"title":"\u7ba1\u7406\u7c7b\u63d2\u4ef6","permalink":"/Java/ManageTool"},"next":{"title":"\u4ec0\u4e48\u662f\u6743\u9650","permalink":"/Java/process/plugin/ManageTool/Permission/WhatIsPermission"}}');var r=i(86070),t=i(51582);const o={title:"\u6743\u9650\u63d2\u4ef6",slug:"/permission",sidebar_position:1},c="LuckPerms",l={},h=[{value:"\u4e0b\u8f7d",id:"\u4e0b\u8f7d",level:2},{value:"\u5b58\u50a8\u65b9\u5f0f",id:"\u5b58\u50a8\u65b9\u5f0f",level:2}];function d(e){const s={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.header,{children:(0,r.jsx)(s.h1,{id:"luckperms",children:"LuckPerms"})}),"\n",(0,r.jsx)(s.admonition,{title:"\u6ce8\u610f",type:"tip",children:(0,r.jsx)(s.p,{children:"\u6211\u4eec\u53ea\u63a8\u8350 Luckperms \u4f5c\u4e3a\u670d\u52a1\u5668\u7684\u6743\u9650\u63d2\u4ef6"})}),"\n",(0,r.jsxs)(s.admonition,{type:"info",children:[(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"\u5b98\u7f51"})," ",(0,r.jsx)(s.a,{href:"https://luckperms.net/",children:"https://luckperms.net/"})]}),(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"SpigotMC"})," ",(0,r.jsx)(s.a,{href:"https://www.spigotmc.org/resources/luckperms.28140/",children:"https://www.spigotmc.org/resources/luckperms.28140/"})]}),(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"GitHub"})," ",(0,r.jsx)(s.a,{href:"https://github.com/LuckPerms/LuckPerms",children:"https://github.com/LuckPerms/LuckPerms"})]}),(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"\u6587\u6863(\u82f1\u6587)"})," ",(0,r.jsx)(s.a,{href:"https://luckperms.net/wiki/Home",children:"https://luckperms.net/wiki/Home"})]}),(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"\u6587\u6863(\u4e2d\u6587)"})," ",(0,r.jsx)(s.a,{href:"https://snowcutieowo.github.io/LuckPerms/",children:"https://snowcutieowo.github.io/LuckPerms/"})]}),(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"\u63d2\u4ef6\u767e\u79d1"})," ",(0,r.jsx)(s.a,{href:"https://mineplugin.org/LuckPerms",children:"https://mineplugin.org/LuckPerms"})]}),(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"papi\u53d8\u91cf"})," ",(0,r.jsx)(s.a,{href:"https://snowcutieowo.github.io/LuckPerms/#/project-info.placeholders?id=%e5%8f%98%e9%87%8f-1",children:"https://snowcutieowo.github.io/LuckPerms/#/project-info.placeholders?id=%e5%8f%98%e9%87%8f-1"})]})]}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"\u4e0d\u5efa\u8bae\u4f7f\u7528"}),"Luckperms \u4ee5\u5916\u7684\u6743\u9650\u63d2\u4ef6\u5982\uff1a"]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"GroupManager"}),"\n",(0,r.jsx)(s.li,{children:"zPermissions"}),"\n",(0,r.jsx)(s.li,{children:"PermissionsEx"}),"\n",(0,r.jsx)(s.li,{children:"PowerfulPerms"}),"\n",(0,r.jsx)(s.li,{children:"BungeePerms"}),"\n",(0,r.jsx)(s.li,{children:"bPermissions"}),"\n"]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.a,{href:"https://snowcutieowo.github.io/LuckPerms/#/how-to.migrate-from-other-plugins",children:"\u5176\u4ed6\u6743\u9650\u7ec4\u63d2\u4ef6\u5bfc\u5165\u6570\u636e\u5230 Luckperms"})}),"\n",(0,r.jsx)(s.h2,{id:"\u4e0b\u8f7d",children:"\u4e0b\u8f7d"}),"\n",(0,r.jsx)(s.p,{children:"\u4e0b\u8f7d jar \u6587\u4ef6\u653e\u5165 plugins \u6587\u4ef6\u5939\u5373\u53ef"}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.a,{href:"https://snowcutieowo.github.io/LuckPerms/#/install-on-a-single-server",children:"\u70b9\u51fb\u6b64\u5904\u67e5\u770b\u6559\u7a0b"})}),"\n",(0,r.jsx)(s.admonition,{title:"\u6ce8\u610f",type:"tip",children:(0,r.jsx)(s.p,{children:"1.7.10 \u8981\u7528 Bukkit Legacy \u7248\u672c"})}),"\n",(0,r.jsx)(s.h2,{id:"\u5b58\u50a8\u65b9\u5f0f",children:"\u5b58\u50a8\u65b9\u5f0f"}),"\n",(0,r.jsx)(s.p,{children:"LuckPerms \u53ef\u4ee5\u4f7f\u7528 yml \u6587\u4ef6\u5b58\u50a8\u6570\u636e\uff0c\u6613\u4e8e\u7f16\u8f91\uff0c\u4f46\u6211\u63a8\u8350\u4f7f\u7528 h2(\u9ed8\u8ba4) \u6216\u8005\u8fde\u63a5\u6570\u636e\u5e93\u4f7f\u7528"}),"\n",(0,r.jsxs)(s.p,{children:["\u5982\u679c\u4f60\u60f3\u66f4\u6539\u5b58\u50a8\u65b9\u5f0f\uff0c\u53ef\u89c1\uff1a",(0,r.jsx)(s.a,{href:"https://snowcutieowo.github.io/LuckPerms/#/configuration?id=storage-method",children:"https://snowcutieowo.github.io/LuckPerms/#/configuration?id=storage-method"})]})]})}function p(e={}){const{wrapper:s}={...(0,t.R)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},51582:(e,s,i)=>{i.d(s,{R:()=>o,x:()=>c});var n=i(30758);const r={},t=n.createContext(r);function o(e){const s=n.useContext(t);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),n.createElement(t.Provider,{value:s},e.children)}}}]);