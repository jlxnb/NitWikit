"use strict";(self.webpackChunkWiki=self.webpackChunkWiki||[]).push([[5628],{24828:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var t=i(86070),a=i(25296);const r={sidebar_position:1,title:"JVM \u4f18\u5316",slug:"/optimize/jvm"},s="JVM \u4f18\u5316",o={id:"process/maintenance/optimize/jvm/jvm",title:"JVM \u4f18\u5316",description:"\u8fd9\u7bc7\u6587\u7ae0\u53ef\u4ee5\u8bf4\u662f\u6574\u4e2a\u7b28\u86cb\u6587\u6863\u4e2d\u7f16\u5199\u5386\u65f6\u6700\u4e45\u7684(),\u4e3a\u4e86\u786e\u4fdd\u6b63\u786e\u6027,\u6211\u4eec\u5728Windows\u548cLinux \u4e0a\u8fdb\u884c\u4e86\u5927\u91cf\u6027\u80fd\u6d4b\u8bd5,\u7ed3\u679c\u53ef\u4ee5\u8bf4\u662f\u5341\u5206\u51fa\u4eba\u610f\u6599",source:"@site/docs-java/process/maintenance/optimize/jvm/jvm.md",sourceDirName:"process/maintenance/optimize/jvm",slug:"/optimize/jvm",permalink:"/NitWikit/Java/optimize/jvm",draft:!1,unlisted:!1,editUrl:"https://github.com/postyizhan/NitWikit/tree/main/docs-java/process/maintenance/optimize/jvm/jvm.md",tags:[],version:"current",lastUpdatedBy:"lilingfengdev",lastUpdatedAt:1726460382e3,sidebarPosition:1,frontMatter:{sidebar_position:1,title:"JVM \u4f18\u5316",slug:"/optimize/jvm"},sidebar:"tutorialSidebar",previous:{title:"\u4f18\u5316",permalink:"/NitWikit/Java/optimize"},next:{title:"\u901a\u7528\u4f18\u5316\u53c2\u6570",permalink:"/NitWikit/Java/optimize/jvm/common"}},l={},d=[{value:"Java \u9009\u62e9",id:"java-\u9009\u62e9",level:2},{value:"\u5783\u573e\u56de\u6536\u5668",id:"\u5783\u573e\u56de\u6536\u5668",level:2}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",mermaid:"mermaid",p:"p",strong:"strong",...(0,a.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"jvm-\u4f18\u5316",children:"JVM \u4f18\u5316"})}),"\n",(0,t.jsx)(n.p,{children:"\u8fd9\u7bc7\u6587\u7ae0\u53ef\u4ee5\u8bf4\u662f\u6574\u4e2a\u7b28\u86cb\u6587\u6863\u4e2d\u7f16\u5199\u5386\u65f6\u6700\u4e45\u7684(),\u4e3a\u4e86\u786e\u4fdd\u6b63\u786e\u6027,\u6211\u4eec\u5728Windows\u548cLinux \u4e0a\u8fdb\u884c\u4e86\u5927\u91cf\u6027\u80fd\u6d4b\u8bd5,\u7ed3\u679c\u53ef\u4ee5\u8bf4\u662f\u5341\u5206\u51fa\u4eba\u610f\u6599"}),"\n",(0,t.jsxs)(n.p,{children:["\u8fd9\u573a\u6d4b\u8bd5\u7684\u7ec6\u8282\u548c\u65e5\u5fd7,\u62a5\u544a,Spark,GCLog\u7b49\u53ef\u4ee5\u5728",(0,t.jsx)(n.a,{href:"https://github.com/lilingfengdev/Test-Java",children:"Test - Java"}),"\u627e\u5230"]}),"\n",(0,t.jsx)(n.h2,{id:"java-\u9009\u62e9",children:"Java \u9009\u62e9"}),"\n",(0,t.jsx)(n.mermaid,{value:"flowchart TD\n    A[\u9009\u62e9] \n    A --\x3e Java8\n    A --\x3e Java11\n    A --\x3e Java21\n    Java8 --\x3e Dragonwell\n    Java11 --\x3e Dragonwell\n    Java21 --\x3e Windows\n    Windows --\x3e \u5185\u5b58\u5145\u8db3\n    \u5185\u5b58\u5145\u8db3 --\x3e C[GraalVM Enterprise Edition]\n    Windows --\x3e \u5185\u5b58\u4e0d\u8db3\n    \u5185\u5b58\u4e0d\u8db3 --\x3e OpenJ9\n    Java21 --\x3e Linux\n    Linux --\x3e \u5185\u5b58\u4e0d\u8db3\n    Linux --\x3e D[\u5185\u5b58\u5145\u8db3]\n    D --\x3e \u597d\u7684\u517c\u5bb9\u6027\n    \u597d\u7684\u517c\u5bb9\u6027 --\x3e|\u9700\u8981| C\n    \u597d\u7684\u517c\u5bb9\u6027 --\x3e|\u4e0d\u9700\u8981| E[Azul Zing]"}),"\n",(0,t.jsx)(n.p,{children:"\u8fd9\u53ef\u80fd\u4e0e\u4f60\u60f3\u7684\u4e0d\u592a\u4e00\u6837"}),"\n",(0,t.jsxs)(n.admonition,{title:"Zulu\u7684\u6027\u80fd",type:"tip",children:[(0,t.jsxs)(n.p,{children:["\u6839\u636e\u5b98\u65b9\u5bf9 Zulu \u7684\u5b9a\u4f4d,Zulu \u7684\u91cd\u70b9\u662f",(0,t.jsx)(n.strong,{children:"\u5b89\u5168\u6027\u548c\u7a33\u5b9a\u6027"}),"\uff0c\u800c\u975e\u6027\u80fd"]}),(0,t.jsxs)(n.p,{children:["\u5927\u90e8\u5206\u4eba\u5bf9",(0,t.jsx)(n.code,{children:"Zulu \u6027\u80fd\u597d"}),"\u8fd9\u4e00\u9519\u8bef\u770b\u6cd5\u4e3b\u8981\u662f\u6765\u6e90\u4e8e\u540c\u4e00\u516c\u53f8 Azul \u65d7\u4e0b\u7684\u53e6\u4e00\u6b3e\u4ea7\u54c1 Zing"]}),(0,t.jsx)(n.p,{children:"\u8be5\u4ea7\u54c1(Zing)\u7684\u4e3b\u8981\u4fa7\u91cd\u70b9\u662f\u6027\u80fd\uff0c\u4f46\u662f\uff0c\u5982\u679c\u4f60\u4e0d\u60f3\u6298\u817e\uff0c\u60f3\u62e5\u6709\u4e00\u4e2a\u8d85\u9ad8\u7a33\u5b9a\u6027\u7684\u73af\u5883\uff0cZulu \u4ecd\u7136\u662f\u4f60\u7684\u6700\u4f73\u9009\u62e9"})]}),"\n",(0,t.jsxs)(n.admonition,{title:"\u517c\u5bb9\u6027",type:"tip",children:[(0,t.jsx)(n.p,{children:"\u6839\u636e\u6211\u4eec\u7684\u6d4b\u8bd5,GraalVM,Dragonwell,Zulu \u76ee\u524d\u90fd\u6ca1\u6709\u88ab\u62a5\u544a\u8fc7\u4e0d\u517c\u5bb9"}),(0,t.jsx)(n.p,{children:"Zing \u4e0e LuckPerms \u4ee5\u53ca\u4e00\u4e9b\u7279\u6b8a\u63d2\u4ef6\u4f1a\u6709\u4e00\u70b9\u4e0d\u517c\u5bb9"}),(0,t.jsx)(n.p,{children:"OpenJ9 \u867d\u7136\u5185\u5b58\u5360\u7528\u5f88\u4f4e,\u4f46\u662f\u6027\u80fd\u5f88\u5dee\uff0c\u5e76\u4e14\u4e0e\u5f88\u591a\u63d2\u4ef6\u6709\u4e0d\u517c\u5bb9(\u6bd4\u5982 Spark)"}),(0,t.jsx)(n.p,{children:"GraalVM \u5728 22.3.0 \u4fee\u590d\u4e86\u6240\u6709\u5df2\u77e5\u7684 Minecraft \u9519\u8bef"})]}),"\n",(0,t.jsx)(n.h2,{id:"\u5783\u573e\u56de\u6536\u5668",children:"\u5783\u573e\u56de\u6536\u5668"}),"\n",(0,t.jsx)(n.p,{children:"\u7ecf\u8fc7\u6211\u4eec\u7684\u591a\u6b21\u6d4b\u8bd5,G1GC\u548cZGC \u6700\u9002\u5408MC\u670d\u52a1\u5668(\u8fd8\u6709\u4e00\u4e2a Zing C4)"}),"\n",(0,t.jsx)(n.p,{children:"\u9009\u62e9\uff01"}),"\n",(0,t.jsx)(n.mermaid,{value:"flowchart TD\n    A[\u9009\u62e9] \n    A --\x3e B[\u673a\u5668\u914d\u7f6e\u8db3\u591f,\u8d77\u6b654h8g,\u63a8\u83508h8g]\n    A --\x3e \u673a\u5668\u914d\u7f6e\u4e0d\u8fbe\u6807\n    B --\x3e C[Java 21+,\u6216Dragonwell 11]\n    B --\x3e \u5176\u4ed6\n    C --\x3e ZGC\n    \u5176\u4ed6 --\x3e G1\n    \u673a\u5668\u914d\u7f6e\u4e0d\u8fbe\u6807 --\x3e G1"}),"\n",(0,t.jsx)(n.p,{children:"ZGC \u7684\u65e0\u505c\u987f\u53ef\u4ee5\u7ed9\u73a9\u5bb6\u5e26\u6765\u66f4\u597d\u7684\u4f53\u9a8c,\u5e76\u4e14\u66f4\u5145\u5206\u7684\u5229\u7528\u591a\u6838"}),"\n",(0,t.jsx)(n.p,{children:"\u5bf9\u4e8e GC \u7ec6\u8282\u6027\u7684\u4f18\u5316\u8bf7\u9605\u8bfb\u6bcf\u4e2aJava\u7684\u4f18\u5316\u6307\u5357"})]})}function p(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},25296:(e,n,i)=>{i.d(n,{R:()=>s,x:()=>o});var t=i(30758);const a={},r=t.createContext(a);function s(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);