"use strict";(self.webpackChunkWiki=self.webpackChunkWiki||[]).push([[8524],{24979:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>a,contentTitle:()=>c,default:()=>p,frontMatter:()=>s,metadata:()=>l,toc:()=>u});var i=n(74848),r=n(28453),o=n(3514);const s={sidebar_position:0,slug:"/contribution/writing"},c="\u683c\u5f0f\u8981\u6c42",l={id:"contribution/writing-specification/writing-specification",title:"\u683c\u5f0f\u8981\u6c42",description:"\u63d0\u4ea4 PR \u65f6\u5019\u8bf7\u52a1\u5fc5\u6ee1\u8db3\u4ee5\u4e0b\u8981\u6c42",source:"@site/docs/contribution/writing-specification/writing-specification.md",sourceDirName:"contribution/writing-specification",slug:"/contribution/writing",permalink:"/NitWikit/contribution/writing",draft:!1,unlisted:!1,editUrl:"https://github.com/postyizhan/NitWikit/tree/main/docs/contribution/writing-specification/writing-specification.md",tags:[],version:"current",lastUpdatedBy:"lilingfengdev",lastUpdatedAt:1719656661e3,sidebarPosition:0,frontMatter:{sidebar_position:0,slug:"/contribution/writing"},sidebar:"tutorialSidebar",previous:{title:"\u6587\u6863\u8d21\u732e",permalink:"/NitWikit/contribution"},next:{title:"\u6807\u9898",permalink:"/NitWikit/contribution/writing-specification/title"}},a={},u=[];function d(t){const e={admonition:"admonition",h1:"h1",p:"p",strong:"strong",...(0,r.R)(),...t.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h1,{id:"\u683c\u5f0f\u8981\u6c42",children:"\u683c\u5f0f\u8981\u6c42"}),"\n",(0,i.jsx)(e.p,{children:"\u63d0\u4ea4 PR \u65f6\u5019\u8bf7\u52a1\u5fc5\u6ee1\u8db3\u4ee5\u4e0b\u8981\u6c42"}),"\n",(0,i.jsx)(e.admonition,{title:"\u63d0\u793a~",type:"tip",children:(0,i.jsxs)(e.p,{children:["\u82e5\u683c\u5f0f\u4e0d\u89c4\u8303\u4f46\u4e0d\u4f1a\u6216\u4e0d\u60f3\u6392\u7248\u65f6\u8bf7\u5728 PR \u65f6\u63d0\u51fa",(0,i.jsx)(e.strong,{children:"\u6587\u6863\u9700\u6392\u7248"}),"\uff09"]})}),"\n","\n",(0,i.jsx)(o.A,{})]})}function p(t={}){const{wrapper:e}={...(0,r.R)(),...t.components};return e?(0,i.jsx)(e,{...t,children:(0,i.jsx)(d,{...t})}):d(t)}},3514:(t,e,n)=>{n.d(e,{A:()=>b});n(96540);var i=n(34164),r=n(81754),o=n(28774),s=n(53465),c=n(16654),l=n(21312),a=n(51107);const u={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var d=n(74848);function p(t){let{href:e,children:n}=t;return(0,d.jsx)(o.A,{href:e,className:(0,i.A)("card padding--lg",u.cardContainer),children:n})}function m(t){let{href:e,icon:n,title:r,description:o}=t;return(0,d.jsxs)(p,{href:e,children:[(0,d.jsxs)(a.A,{as:"h2",className:(0,i.A)("text--truncate",u.cardTitle),title:r,children:[n," ",r]}),o&&(0,d.jsx)("p",{className:(0,i.A)("text--truncate",u.cardDescription),title:o,children:o})]})}function f(t){let{item:e}=t;const n=(0,r.Nr)(e),i=function(){const{selectMessage:t}=(0,s.W)();return e=>t(e,(0,l.T)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:e}))}();return n?(0,d.jsx)(m,{href:n,icon:"\ud83d\uddc3\ufe0f",title:e.label,description:e.description??i(e.items.length)}):null}function h(t){let{item:e}=t;const n=(0,c.A)(e.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",i=(0,r.cC)(e.docId??void 0);return(0,d.jsx)(m,{href:e.href,icon:n,title:e.label,description:e.description??i?.description})}function g(t){let{item:e}=t;switch(e.type){case"link":return(0,d.jsx)(h,{item:e});case"category":return(0,d.jsx)(f,{item:e});default:throw new Error(`unknown item type ${JSON.stringify(e)}`)}}function x(t){let{className:e}=t;const n=(0,r.$S)();return(0,d.jsx)(b,{items:n.items,className:e})}function b(t){const{items:e,className:n}=t;if(!e)return(0,d.jsx)(x,{...t});const o=(0,r.d1)(e);return(0,d.jsx)("section",{className:(0,i.A)("row",n),children:o.map(((t,e)=>(0,d.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,d.jsx)(g,{item:t})},e)))})}},53465:(t,e,n)=>{n.d(e,{W:()=>a});var i=n(96540),r=n(44586);const o=["zero","one","two","few","many","other"];function s(t){return o.filter((e=>t.includes(e)))}const c={locale:"en",pluralForms:s(["one","other"]),select:t=>1===t?"one":"other"};function l(){const{i18n:{currentLocale:t}}=(0,r.A)();return(0,i.useMemo)((()=>{try{return function(t){const e=new Intl.PluralRules(t);return{locale:t,pluralForms:s(e.resolvedOptions().pluralCategories),select:t=>e.select(t)}}(t)}catch(e){return console.error(`Failed to use Intl.PluralRules for locale "${t}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${e.message}\n`),c}}),[t])}function a(){const t=l();return{selectMessage:(e,n)=>function(t,e,n){const i=t.split("|");if(1===i.length)return i[0];i.length>n.pluralForms.length&&console.error(`For locale=${n.locale}, a maximum of ${n.pluralForms.length} plural forms are expected (${n.pluralForms.join(",")}), but the message contains ${i.length}: ${t}`);const r=n.select(e),o=n.pluralForms.indexOf(r);return i[Math.min(o,i.length-1)]}(n,e,t)}}},28453:(t,e,n)=>{n.d(e,{R:()=>s,x:()=>c});var i=n(96540);const r={},o=i.createContext(r);function s(t){const e=i.useContext(o);return i.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function c(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(r):t.components||r:s(t.components),i.createElement(o.Provider,{value:e},t.children)}}}]);