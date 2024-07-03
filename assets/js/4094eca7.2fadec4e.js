"use strict";(self.webpackChunkWiki=self.webpackChunkWiki||[]).push([[3772],{17405:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>c,frontMatter:()=>s,metadata:()=>d,toc:()=>p});var i=t(74848),r=t(28453);const s={title:"\u5185\u7f51\u7a7f\u900f",sidebar_position:5},l="\u5185\u7f51\u7a7f\u900f",d={id:"start/deploy/intranet-penetration",title:"\u5185\u7f51\u7a7f\u900f",description:"\u9002\u7528\u4e8e\uff1f",source:"@site/docs/start/deploy/intranet-penetration.md",sourceDirName:"start/deploy",slug:"/start/deploy/intranet-penetration",permalink:"/NitWikit/start/deploy/intranet-penetration",draft:!1,unlisted:!1,editUrl:"https://github.com/postyizhan/NitWikit/tree/main/docs/start/deploy/intranet-penetration.md",tags:[],version:"current",lastUpdatedBy:"Radiation-pi",lastUpdatedAt:1720014522e3,sidebarPosition:5,frontMatter:{title:"\u5185\u7f51\u7a7f\u900f",sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"\u8fde\u63a5\u5230\u4e91",permalink:"/NitWikit/start/deploy/connect-to-the-cloud"},next:{title:"\u8fde\u63a5\u670d\u52a1\u5668",permalink:"/NitWikit/start/connect-to-server"}},a={},p=[{value:"\u53ef\u80fd\u7684\u95ee\u9898?",id:"\u53ef\u80fd\u7684\u95ee\u9898",level:2},{value:"\u767b\u5f55\u63d2\u4ef6",id:"\u767b\u5f55\u63d2\u4ef6",level:3},{value:"\u73a9\u5bb6\u6ce8\u518c",id:"\u73a9\u5bb6\u6ce8\u518c",level:4},{value:"\u81ea\u52a8\u767b\u5f55",id:"\u81ea\u52a8\u767b\u5f55",level:4},{value:"\u663e\u793a\u73a9\u5bb6 IP \u5f52\u5c5e\u5730",id:"\u663e\u793a\u73a9\u5bb6-ip-\u5f52\u5c5e\u5730",level:3},{value:"ban-ip ban\u6389\u6240\u6709\u4eba",id:"ban-ip-ban\u6389\u6240\u6709\u4eba",level:3},{value:"\u53cd\u5047\u4eba\u63d2\u4ef6",id:"\u53cd\u5047\u4eba\u63d2\u4ef6",level:3}];function o(e){const n={a:"a",del:"del",h1:"h1",h2:"h2",h3:"h3",h4:"h4",p:"p",strong:"strong",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"\u5185\u7f51\u7a7f\u900f",children:"\u5185\u7f51\u7a7f\u900f"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"\u9002\u7528\u4e8e\uff1f"})}),"\n",(0,i.jsx)(n.p,{children:"\u6ca1\u6709\u516c\u7f51\u7684\u5bb6\u91cc\u4e91"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"\u6765\u51e0\u4e2a\uff1f"})}),"\n",(0,i.jsx)(n.p,{children:"\u5185\u7f51\u7a7f\u900f\u4e00\u6293\u4e00\u5927\u628a"}),"\n",(0,i.jsxs)(n.p,{children:["\u6bd4\u5982\u6bd4\u8f83\u6709\u540d\u7684\u6a31\u82b1\u5185\u7f51\u7a7f\u900f\uff1a",(0,i.jsx)(n.a,{href:"https://www.natfrp.com/?page=panel&module=addproxy",children:"https://www.natfrp.com/?page=panel&module=addproxy"})]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.del,{children:"\u56e0\u4e3arz\u7528\u6237\u6bd4\u8f83\u591a\uff0c\u4f60\u751a\u81f3\u80fd\u7528\u67d0\u4eba\u7528\u4e0d\u7528\u6a31\u82b1\u6765\u5b9a\u6027\u5224\u65ad\u8fd9\u4eba\u6709\u6ca1\u6709\u6280\u672f"})}),"\n",(0,i.jsxs)(n.p,{children:["openFrp\uff1a",(0,i.jsx)(n.a,{href:"https://www.openfrp.net/",children:"https://www.openfrp.net/"})]}),"\n",(0,i.jsx)(n.p,{children:"TODO\uff1a\u81ea\u5efaFrp"}),"\n",(0,i.jsx)(n.h2,{id:"\u53ef\u80fd\u7684\u95ee\u9898",children:"\u53ef\u80fd\u7684\u95ee\u9898?"}),"\n",(0,i.jsx)(n.p,{children:"\u5185\u7f51\u7a7f\u900f\u540e\u76f8\u5f53\u4e8e\u73a9\u5bb6\u7684\u8fde\u63a5\u4f20\u9012\u5230\u4e86\u4f60\u673a\u5668\u4e0a\u7684\u8f6f\u4ef6\u4e0a\uff0c\u7528\u8fd9\u4e2a\u8f6f\u4ef6\u8bbf\u95ee\u672c\u5730\u7684\u670d\u52a1\u7aef\uff08\u7c7b\u4f3c\u4ee3\u7406\uff09\uff0c\u670d\u52a1\u7aef\u5c31\u4f1a\u8bef\u8ba4\u4e3a\u662f\u672c\u5730\u8fde\u63a5\u8bbf\u95ee\u4e86\u670d\u52a1\u5668\uff0c\u5c31\u4f1a\u51fa\u73b0\u4ee5\u4e0b\u95ee\u9898\uff1a"}),"\n",(0,i.jsx)(n.h3,{id:"\u767b\u5f55\u63d2\u4ef6",children:"\u767b\u5f55\u63d2\u4ef6"}),"\n",(0,i.jsx)(n.h4,{id:"\u73a9\u5bb6\u6ce8\u518c",children:"\u73a9\u5bb6\u6ce8\u518c"}),"\n",(0,i.jsx)(n.p,{children:"\u652f\u6301 IP \u9650\u5236\u6ce8\u518c\u8d26\u53f7\u7684\u767b\u5f55\u63d2\u4ef6\uff08\u5982 Authme \u3001CMI \uff09\u4f1a\u51fa\u95ee\u9898"}),"\n",(0,i.jsx)(n.p,{children:"\u5982\u679c\u5185\u7f51\u7a7f\u900f\u7684\u8bdd\uff0c\u4ed6\u4eec\u7684 IP \u5730\u5740\u90fd\u662f\u56de\u73af\u5730\u5740\uff0c\u6240\u4ee5\u4ed6\u4eec\u4e0d\u80fd\u6ce8\u518c\u8d26\u53f7\u4e86"}),"\n",(0,i.jsx)(n.h4,{id:"\u81ea\u52a8\u767b\u5f55",children:"\u81ea\u52a8\u767b\u5f55"}),"\n",(0,i.jsx)(n.p,{children:"\u6b64\u529f\u80fd\u4f9d\u9760 IP \u8fdb\u884c\u8bc6\u522b\uff0c\u5982\u679c\u5185\u7f51\u7a7f\u900f\u7684\u8bdd\uff0c\u666e\u901a\u73a9\u5bb6\u548c OP \u73a9\u5bb6\u7684 IP \u90fd\u662f\u56de\u73af\u5730\u5740"}),"\n",(0,i.jsx)(n.p,{children:"\u5c31\u51fa\u73b0\u4e86\u73a9\u5bb6\u767b\u5f55 OP \u8d26\u53f7\u7b49 \u201c\u7ed5\u8fc7\u767b\u5f55\u6f0f\u6d1e\u201d"}),"\n",(0,i.jsx)(n.h3,{id:"\u663e\u793a\u73a9\u5bb6-ip-\u5f52\u5c5e\u5730",children:"\u663e\u793a\u73a9\u5bb6 IP \u5f52\u5c5e\u5730"}),"\n",(0,i.jsx)(n.p,{children:"\u4e00\u4e9b\u53ef\u4ee5\u663e\u793a\u73a9\u5bb6 IP \u5f52\u5c5e\u5730\u7684\u63d2\u4ef6\u4f1a\u5931\u6548"}),"\n",(0,i.jsx)(n.p,{children:"\u56e0\u4e3a\u4ed6\u4eec\u7684 IP \u90fd\u662f\u56de\u73af\u5730\u5740"}),"\n",(0,i.jsx)(n.h3,{id:"ban-ip-ban\u6389\u6240\u6709\u4eba",children:"ban-ip ban\u6389\u6240\u6709\u4eba"}),"\n",(0,i.jsx)(n.p,{children:"\u56e0\u4e3a\u4f60\u4eec\u7684\u5730\u5740\u90fd\u662f\u56de\u73af\u5730\u5740"}),"\n",(0,i.jsx)(n.p,{children:"\u6240\u4ee5\u4f60 ban-ip \u4f1a ban \u6389\u6240\u6709\u4eba\uff0c\u5305\u62ec\u4f60\u81ea\u5df1......"}),"\n",(0,i.jsx)(n.h3,{id:"\u53cd\u5047\u4eba\u63d2\u4ef6",children:"\u53cd\u5047\u4eba\u63d2\u4ef6"}),"\n",(0,i.jsx)(n.p,{children:"\u8fd9\u4f1a\u5bfc\u81f4\u53cd\u5047\u4eba\u63d2\u4ef6\u51e0\u4e4e\u4e0d\u80fd\u4f7f\u7528\uff0c\u56e0\u4e3a\u65e0\u8bba\u662f\u5c01\u7981 IP \u8fd8\u662f IP \u767d\u540d\u5355\u90fd\u4f1a\u56e0\u4e3a\u6240\u6709\u73a9\u5bb6 IP \u76f8\u540c\u800c\u5931\u6548\u3002"})]})}function c(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>d});var i=t(96540);const r={},s=i.createContext(r);function l(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);