"use strict";(self.webpackChunkWiki=self.webpackChunkWiki||[]).push([[1478],{30713:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>r,contentTitle:()=>a,default:()=>h,frontMatter:()=>d,metadata:()=>c,toc:()=>l});var t=n(74848),s=n(28453);const d={title:"\u5f00\u670d",sidebar_position:3},a="\u5f00\u670d",c={id:"advance/Linux/start",title:"\u5f00\u670d",description:"\u5f00\u670d\u4e4b\u524d\uff0c\u8bf7\u68c0\u67e5\u670d\u52a1\u5668\u662f\u5426\u5b89\u88c5\u4e86 Java\uff0c\u5728\u7ec8\u7aef\u8f93\u5165",source:"@site/docs/advance/Linux/start.md",sourceDirName:"advance/Linux",slug:"/advance/Linux/start",permalink:"/NitWikit/advance/Linux/start",draft:!1,unlisted:!1,editUrl:"https://github.com/postyizhan/NitWikit/tree/main/docs/advance/Linux/start.md",tags:[],version:"current",lastUpdatedBy:"Radiation-pi",lastUpdatedAt:1720014522e3,sidebarPosition:3,frontMatter:{title:"\u5f00\u670d",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"\u5982\u4f55\u4fdd\u6301\u670d\u52a1\u5668\u5728 Linux \u670d\u52a1\u5668\u4e2d\u540e\u53f0\u8fd0\u884c",permalink:"/NitWikit/advance/Linux/keep-running"},next:{title:"\u642d\u5efa\u5185\u7f51\u7a7f\u900f\uff08Frp\uff09",permalink:"/NitWikit/advance/Linux/frp"}},r={},l=[{value:"Java \u5b89\u88c5",id:"java-\u5b89\u88c5",level:2},{value:"\u4e0b\u8f7d",id:"\u4e0b\u8f7d",level:3},{value:"SFTP \u6587\u4ef6\u4f20\u8f93",id:"sftp-\u6587\u4ef6\u4f20\u8f93",level:4},{value:"wegt \u4e0b\u8f7d",id:"wegt-\u4e0b\u8f7d",level:4},{value:"\u538b\u7f29\u5305\u89e3\u538b",id:"\u538b\u7f29\u5305\u89e3\u538b",level:3},{value:"\u5f00\u670d",id:"\u5f00\u670d-1",level:2}];function o(e){const i={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",img:"img",p:"p",pre:"pre",...(0,s.R)(),...e.components},{Details:d}=i;return d||function(e,i){throw new Error("Expected "+(i?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.h1,{id:"\u5f00\u670d",children:"\u5f00\u670d"}),"\n",(0,t.jsx)(i.p,{children:"\u5f00\u670d\u4e4b\u524d\uff0c\u8bf7\u68c0\u67e5\u670d\u52a1\u5668\u662f\u5426\u5b89\u88c5\u4e86 Java\uff0c\u5728\u7ec8\u7aef\u8f93\u5165"}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.code,{children:"java -ver"})}),"\n",(0,t.jsx)(i.p,{children:"\u5982\u679c\u4f60\u770b\u5230\u7c7b\u4f3c\u4ee5\u4e0b\u7684\u8f93\u51fa\uff0c\u90a3\u4e48\u670d\u52a1\u5668\u4e2d\u5df2\u7ecf\u5b89\u88c5\u4e86 Java"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{children:'openjdk version "21.0.2" 2024-01-16 LTS\nOpenJDK Runtime Environment Zulu21.32+17-CA (build 21.0.2+13-LTS)\nOpenJDK 64-Bit Server VM Zulu21.32+17-CA (build 21.0.2+13-LTS, mixed mode, sharing)\n'})}),"\n",(0,t.jsx)(i.h2,{id:"java-\u5b89\u88c5",children:"Java \u5b89\u88c5"}),"\n",(0,t.jsx)(i.p,{children:"\u5982\u679c\u5df2\u7ecf\u5b89\u88c5\u4e86 Java\uff0c\u53ef\u4ee5\u5ffd\u7565\u6389\u8fd9\u4e00\u90e8\u5206\u3002\u5982\u679c\u73af\u5883\u672a\u5b89\u88c5 Java \u53ef\u4ee5\u53c2\u8003\uff1a"}),"\n",(0,t.jsxs)(d,{children:[(0,t.jsx)("summary",{children:"Java \u5b89\u88c5"}),(0,t.jsxs)(i.p,{children:["\u4e00\u822c\u6765\u8bf4\uff0c\u5728 Linux \u4e2d\u8fdb\u884c\u8f6f\u4ef6\u5b89\u88c5\u90e8\u7f72\u4f1a\u653e\u5728 ",(0,t.jsx)(i.code,{children:"/opt"})," \u76ee\u5f55\u4e0b\uff0c\u6211\u4eec\u4e5f\u9075\u5faa\u8fd9\u4e2a\u89c4\u5219\uff0c\u5f53\u7136\u4f60\u4e5f\u53ef\u4ee5\u4e0d\u9075\u5faa"]}),(0,t.jsx)(i.p,{children:"\u4f7f\u7528cd\u5207\u6362\u5230/opt\u76ee\u5f55"}),(0,t.jsx)(i.p,{children:(0,t.jsx)(i.code,{children:"cd /opt"})}),(0,t.jsx)(i.h3,{id:"\u4e0b\u8f7d",children:"\u4e0b\u8f7d"}),(0,t.jsx)(i.h4,{id:"sftp-\u6587\u4ef6\u4f20\u8f93",children:"SFTP \u6587\u4ef6\u4f20\u8f93"}),(0,t.jsxs)(i.p,{children:["\u4e0d\u719f\u6089 wget \u65f6\uff0c\u5148\u4f7f\u7528 Windows \u524d\u5f80",(0,t.jsx)(i.a,{href:"https://www.azul.com/downloads/?package=jdk#zulu",children:"zulu\u4e0b\u8f7d"}),"\uff0c\u4e0b\u8f7d\u518d\u4f7f\u7528 SFTP \u8f6f\u4ef6\u4e0a\u4f20\u5230\u670d\u52a1\u5668 ",(0,t.jsx)(i.code,{children:"/opt"})," \u76ee\u5f55\u4e0b\u3002"]}),(0,t.jsx)(i.p,{children:(0,t.jsx)(i.img,{src:n(2275).A+"",width:"1651",height:"884"})}),(0,t.jsx)(i.h4,{id:"wegt-\u4e0b\u8f7d",children:"wegt \u4e0b\u8f7d"}),(0,t.jsx)(i.p,{children:"\u4f7f\u7528 wget \u6307\u4ee4\u4e0b\u8f7d"}),(0,t.jsx)(i.p,{children:(0,t.jsx)(i.code,{children:"wget https://cdn.azul.com/zulu/bin/zulu21.34.19-ca-jdk21.0.3-linux_x64.tar.gz"})}),(0,t.jsx)(i.p,{children:(0,t.jsx)(i.img,{src:n(40296).A+"",width:"840",height:"205"})}),(0,t.jsx)(i.h3,{id:"\u538b\u7f29\u5305\u89e3\u538b",children:"\u538b\u7f29\u5305\u89e3\u538b"}),(0,t.jsx)(i.p,{children:"\u89e3\u538b\u538b\u7f29\u5305\uff1a"}),(0,t.jsx)(i.p,{children:(0,t.jsx)(i.img,{src:n(88689).A+"",width:"602",height:"97"})}),(0,t.jsx)(i.p,{children:"\u5c06\u76ee\u5f55\u91cd\u547d\u540d\u4e3a jdk21 \uff1a"}),(0,t.jsx)(i.p,{children:(0,t.jsx)(i.img,{src:n(44126).A+"",width:"470",height:"70"})}),(0,t.jsx)(i.p,{children:"\u8fd9\u6837\u5c31\u7b97\u662f\u5b89\u88c5\u597d\u4e86\uff08PS\uff1a\u8fd9\u91cc\u7684\u64cd\u4f5c\u4ec5\u9002\u7528\u4e8e\u5f00\u670d\u4f7f\u7528\uff0c\u82e5\u9700\u8981\u5176\u4ed6\u9700\u8981jdk\u7684\u64cd\u4f5c\u8bf7\u4f7f\u7528\u5305\u7ba1\u7406\u5668\u5b89\u88c5openjdk\uff09"})]}),"\n",(0,t.jsx)(i.h2,{id:"\u5f00\u670d-1",children:"\u5f00\u670d"}),"\n",(0,t.jsx)(i.admonition,{type:"warning",children:(0,t.jsx)(i.p,{children:"TODO - \u5b8c\u5584\u548c\u6392\u7248"})}),"\n",(0,t.jsx)(i.p,{children:"\u5728/opt\u76ee\u5f55\u4e2d\u4f7f\u7528mkdir\u521b\u5efa\u4e00\u4e2a\u76ee\u5f55\u7528\u4e8e\u5f00\u670d"}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.img,{src:n(19911).A+"",width:"221",height:"53"})}),"\n",(0,t.jsx)(i.p,{children:"\u5c06\u6838\u5fc3\u653e\u5165\u670d\u52a1\u5668\u5185\uff0c\u5e76\u7f16\u5199\u7b80\u5355\u7684\u5f00\u670d\u811a\u672c\uff0c\u4f7f\u7528 chmod \u547d\u4ee4\u7ed9\u811a\u672c\u589e\u52a0\u8fd0\u884c\u6743\u9650"}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.img,{src:n(69228).A+"",width:"906",height:"513"})}),"\n",(0,t.jsx)(i.p,{children:"\u8f93\u5165./start.sh\u6216\u8005\u8f93\u5165bash start.sh\u5373\u53ef\u542f\u52a8"}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.img,{src:n(64501).A+"",width:"752",height:"184"})}),"\n",(0,t.jsx)(i.p,{children:"\u4f7f\u7528vim\u4fee\u6539eula\u4e3atrue\u5c31\u53ef\u4ee5\u5f00\u670d\u4e86"}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.img,{src:n(35346).A+"",width:"761",height:"132"})})]})}function h(e={}){const{wrapper:i}={...(0,s.R)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},2275:(e,i,n)=>{n.d(i,{A:()=>t});const t=n.p+"assets/images/1-2e62989985c08bcd180078a0d5b4fbcf.png"},40296:(e,i,n)=>{n.d(i,{A:()=>t});const t=n.p+"assets/images/2-813d98ab21962d9e5bb584c064c66881.png"},88689:(e,i,n)=>{n.d(i,{A:()=>t});const t=n.p+"assets/images/3-1c1ab8388ae65c7d2513d331514bd5c1.png"},44126:(e,i,n)=>{n.d(i,{A:()=>t});const t=n.p+"assets/images/4-b8cd44d251fce63b8af9885b4300ce4d.png"},19911:(e,i,n)=>{n.d(i,{A:()=>t});const t=n.p+"assets/images/5-ad436380e014f6c6cfbedcdf09ab6d04.png"},69228:(e,i,n)=>{n.d(i,{A:()=>t});const t=n.p+"assets/images/6-da6bec542850260ab00c7302000ad61a.png"},64501:(e,i,n)=>{n.d(i,{A:()=>t});const t=n.p+"assets/images/7-40366a87a0c0b9d0801b7b0abda2268d.png"},35346:(e,i,n)=>{n.d(i,{A:()=>t});const t=n.p+"assets/images/8-7f06aff07435414af944cfb8fcef555c.png"},28453:(e,i,n)=>{n.d(i,{R:()=>a,x:()=>c});var t=n(96540);const s={},d=t.createContext(s);function a(e){const i=t.useContext(d);return t.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function c(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),t.createElement(d.Provider,{value:i},e.children)}}}]);