"use strict";(self.webpackChunkWiki=self.webpackChunkWiki||[]).push([[1614],{88988:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>m,frontMatter:()=>o,metadata:()=>a,toc:()=>u});var r=n(86070),s=n(25710),i=n(48911);const o={title:"\u642d\u5efa",slug:"/build",sidebar_position:2,author:{commit:"c9104d1",username:"wuyuncheng-26"}},c="\u642d\u5efa\u4ee3\u7406\u670d",a={id:"advance/cross-server/build-up/build-up",title:"\u642d\u5efa",description:"\u5e38\u89c1\u7684\u4ee3\u7406\u670d\u5206\u4e3a\u4ee5\u4e0b\u4e24\u79cd\uff1a",source:"@site/docs-java/advance/cross-server/build-up/build-up.md",sourceDirName:"advance/cross-server/build-up",slug:"/build",permalink:"/NitWikit/Java/build",draft:!1,unlisted:!1,editUrl:"https://github.com/postyizhan/NitWikit/tree/main/docs-java/advance/cross-server/build-up/build-up.md",tags:[],version:"current",lastUpdatedBy:"\u662f\u5c0f\u80d6\u544026",lastUpdatedAt:1724477855e3,sidebarPosition:2,frontMatter:{title:"\u642d\u5efa",slug:"/build",sidebar_position:2,author:{commit:"c9104d1",username:"ghost"}},sidebar:"tutorialSidebar",previous:{title:"\u6838\u5fc3\u9009\u62e9",permalink:"/NitWikit/Java/advance/cross-server/server-core-choose"},next:{title:"BungeeCord \u7aef",permalink:"/NitWikit/Java/bungeecord"}},l={},u=[];function d(e){const t={h1:"h1",header:"header",p:"p",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"\u642d\u5efa\u4ee3\u7406\u670d",children:"\u642d\u5efa\u4ee3\u7406\u670d"})}),"\n",(0,r.jsx)(t.p,{children:"\u5e38\u89c1\u7684\u4ee3\u7406\u670d\u5206\u4e3a\u4ee5\u4e0b\u4e24\u79cd\uff1a"}),"\n","\n",(0,r.jsx)(i.A,{}),"\n",(0,r.jsx)(t.p,{children:"\u8bf7\u9009\u62e9\u5408\u9002\u4f60\u7684\u6838\u5fc3\u3002"})]})}function m(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},48911:(e,t,n)=>{n.d(t,{A:()=>v});n(30758);var r=n(13526),s=n(51889),i=n(46499),o=n(72620),c=n(48689),a=n(62378),l=n(79623);const u={cardContainer:"cardContainer_FN5v",cardTitle:"cardTitle_Chu5",cardDescription:"cardDescription_MvZc"};var d=n(86070);function m(e){let{href:t,children:n}=e;return(0,d.jsx)(i.A,{href:t,className:(0,r.A)("card padding--lg",u.cardContainer),children:n})}function p(e){let{href:t,icon:n,title:s,description:i}=e;return(0,d.jsxs)(m,{href:t,children:[(0,d.jsxs)(l.A,{as:"h2",className:(0,r.A)("text--truncate",u.cardTitle),title:s,children:[n," ",s]}),i&&(0,d.jsx)("p",{className:(0,r.A)("text--truncate",u.cardDescription),title:i,children:i})]})}function h(e){let{item:t}=e;const n=(0,s.Nr)(t),r=function(){const{selectMessage:e}=(0,o.W)();return t=>e(t,(0,a.T)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return n?(0,d.jsx)(p,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??r(t.items.length)}):null}function f(e){let{item:t}=e;const n=(0,c.A)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",r=(0,s.cC)(t.docId??void 0);return(0,d.jsx)(p,{href:t.href,icon:n,title:t.label,description:t.description??r?.description})}function g(e){let{item:t}=e;switch(t.type){case"link":return(0,d.jsx)(f,{item:t});case"category":return(0,d.jsx)(h,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function x(e){let{className:t}=e;const n=(0,s.$S)();return(0,d.jsx)(v,{items:n.items,className:t})}function v(e){const{items:t,className:n}=e;if(!t)return(0,d.jsx)(x,{...e});const i=(0,s.d1)(t);return(0,d.jsx)("section",{className:(0,r.A)("row",n),children:i.map(((e,t)=>(0,d.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,d.jsx)(g,{item:e})},t)))})}},72620:(e,t,n)=>{n.d(t,{W:()=>l});var r=n(30758),s=n(32491);const i=["zero","one","two","few","many","other"];function o(e){return i.filter((t=>e.includes(t)))}const c={locale:"en",pluralForms:o(["one","other"]),select:e=>1===e?"one":"other"};function a(){const{i18n:{currentLocale:e}}=(0,s.A)();return(0,r.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:o(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),c}}),[e])}function l(){const e=a();return{selectMessage:(t,n)=>function(e,t,n){const r=e.split("|");if(1===r.length)return r[0];r.length>n.pluralForms.length&&console.error(`For locale=${n.locale}, a maximum of ${n.pluralForms.length} plural forms are expected (${n.pluralForms.join(",")}), but the message contains ${r.length}: ${e}`);const s=n.select(t),i=n.pluralForms.indexOf(s);return r[Math.min(i,r.length-1)]}(n,t,e)}}},25710:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>c});var r=n(30758);const s={},i=r.createContext(s);function o(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);