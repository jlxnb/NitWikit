"use strict";(self.webpackChunkWiki=self.webpackChunkWiki||[]).push([[7960],{75035:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>m,frontMatter:()=>o,metadata:()=>r,toc:()=>u});const r=JSON.parse('{"id":"process/maintenance/maintenance","title":"\u7ef4\u62a4","description":"\u8ba9\u4f60\u7684\u670d\u52a1\u5668\u53d8\u5f97\u66f4\u597d","source":"@site/docs-java/process/maintenance/maintenance.md","sourceDirName":"process/maintenance","slug":"/maintenance/Java","permalink":"/Java/maintenance/Java","draft":false,"unlisted":false,"editUrl":"https://github.com/postyizhan/NitWikit/tree/main/docs-java/process/maintenance/maintenance.md","tags":[],"version":"current","lastUpdatedBy":"\u9a7f\u7ad9","lastUpdatedAt":1722370260000,"sidebarPosition":2,"frontMatter":{"sidebar_position":2,"slug":"/maintenance/Java"},"sidebar":"tutorialSidebar","previous":{"title":"\u5546\u5e97 - QuickShop","permalink":"/Java/process/plugin/other/QuickShop"},"next":{"title":"\u4f18\u5316","permalink":"/Java/optimize"}}');var s=n(86070),i=n(51582),a=n(75133);const o={sidebar_position:2,slug:"/maintenance/Java"},c="\u7ef4\u62a4",l={},u=[];function d(e){const t={h1:"h1",header:"header",p:"p",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"\u7ef4\u62a4",children:"\u7ef4\u62a4"})}),"\n",(0,s.jsx)(t.p,{children:"\u8ba9\u4f60\u7684\u670d\u52a1\u5668\u53d8\u5f97\u66f4\u597d"}),"\n","\n",(0,s.jsx)(a.A,{})]})}function m(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},75133:(e,t,n)=>{n.d(t,{A:()=>j});n(30758);var r=n(13526),s=n(59022),i=n(34426),a=n(36706),o=n(92194),c=n(65031),l=n(46096);const u={cardContainer:"cardContainer_diBC",cardTitle:"cardTitle_nQYB",cardDescription:"cardDescription_Izla"};var d=n(86070);function m(e){let{href:t,children:n}=e;return(0,d.jsx)(i.A,{href:t,className:(0,r.A)("card padding--lg",u.cardContainer),children:n})}function p(e){let{href:t,icon:n,title:s,description:i}=e;return(0,d.jsxs)(m,{href:t,children:[(0,d.jsxs)(l.A,{as:"h2",className:(0,r.A)("text--truncate",u.cardTitle),title:s,children:[n," ",s]}),i&&(0,d.jsx)("p",{className:(0,r.A)("text--truncate",u.cardDescription),title:i,children:i})]})}function h(e){let{item:t}=e;const n=(0,s.Nr)(t),r=function(){const{selectMessage:e}=(0,a.W)();return t=>e(t,(0,c.T)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return n?(0,d.jsx)(p,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??r(t.items.length)}):null}function f(e){let{item:t}=e;const n=(0,o.A)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",r=(0,s.cC)(t.docId??void 0);return(0,d.jsx)(p,{href:t.href,icon:n,title:t.label,description:t.description??r?.description})}function g(e){let{item:t}=e;switch(t.type){case"link":return(0,d.jsx)(f,{item:t});case"category":return(0,d.jsx)(h,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function x(e){let{className:t}=e;const n=(0,s.$S)();return(0,d.jsx)(j,{items:n.items,className:t})}function j(e){const{items:t,className:n}=e;if(!t)return(0,d.jsx)(x,{...e});const i=(0,s.d1)(t);return(0,d.jsx)("section",{className:(0,r.A)("row",n),children:i.map(((e,t)=>(0,d.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,d.jsx)(g,{item:e})},t)))})}},36706:(e,t,n)=>{n.d(t,{W:()=>l});var r=n(30758),s=n(41566);const i=["zero","one","two","few","many","other"];function a(e){return i.filter((t=>e.includes(t)))}const o={locale:"en",pluralForms:a(["one","other"]),select:e=>1===e?"one":"other"};function c(){const{i18n:{currentLocale:e}}=(0,s.A)();return(0,r.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:a(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),o}}),[e])}function l(){const e=c();return{selectMessage:(t,n)=>function(e,t,n){const r=e.split("|");if(1===r.length)return r[0];r.length>n.pluralForms.length&&console.error(`For locale=${n.locale}, a maximum of ${n.pluralForms.length} plural forms are expected (${n.pluralForms.join(",")}), but the message contains ${r.length}: ${e}`);const s=n.select(t),i=n.pluralForms.indexOf(s);return r[Math.min(i,r.length-1)]}(n,t,e)}}},51582:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>o});var r=n(30758);const s={},i=r.createContext(s);function a(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);