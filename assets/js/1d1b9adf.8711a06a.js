"use strict";(self.webpackChunkWiki=self.webpackChunkWiki||[]).push([[45],{60903:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>m,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var r=n(86070),i=n(25710),s=n(48911);const o={title:"LeviLamina",sidebar_position:3,author:{commit:"c9104d1",username:"wuyuncheng-26"}},a="LeviLamina",c={id:"bds-core/process/LeviLamina/LeviLamina",title:"LeviLamina",description:"LeviLamina \u662f BDS \u6838\u5fc3\u7684\u4e00\u6b3e\u529f\u80fd\u5f3a\u5927\u7684\u63d2\u4ef6\u52a0\u8f7d\u5668\uff0c \u66fe\u88ab\u79f0\u4e3a LiteLoaderBDS\u3002",source:"@site/docs-bedrock/bds-core/process/LeviLamina/LeviLamina.md",sourceDirName:"bds-core/process/LeviLamina",slug:"/bds-core/process/LeviLamina/",permalink:"/NitWikit/Bedrock/bds-core/process/LeviLamina/",draft:!1,unlisted:!1,editUrl:"https://github.com/postyizhan/NitWikit/tree/main/docs-bedrock/bds-core/process/LeviLamina/LeviLamina.md",tags:[],version:"current",lastUpdatedBy:"\u662f\u5c0f\u80d6\u544026",lastUpdatedAt:1724477855e3,sidebarPosition:3,frontMatter:{title:"LeviLamina",sidebar_position:3,author:{commit:"c9104d1",username:"ghost"}},sidebar:"tutorialSidebar",previous:{title:"\u7b2c\u4e09\u65b9\u63d2\u4ef6\u52a0\u8f7d\u5668\u9009\u62e9",permalink:"/NitWikit/Bedrock/bds-core/process/plugins/plugins-loader-choose"},next:{title:"LeviLamina \u5b89\u88c5\u6559\u7a0b",permalink:"/NitWikit/Bedrock/bds-core/process/LeviLamina/LeviLamina-Install"}},l={},d=[];function u(e){const t={h1:"h1",header:"header",p:"p",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"levilamina",children:"LeviLamina"})}),"\n",(0,r.jsx)(t.p,{children:"LeviLamina \u662f BDS \u6838\u5fc3\u7684\u4e00\u6b3e\u529f\u80fd\u5f3a\u5927\u7684\u63d2\u4ef6\u52a0\u8f7d\u5668\uff0c \u66fe\u88ab\u79f0\u4e3a LiteLoaderBDS\u3002"}),"\n",(0,r.jsx)(t.p,{children:"\u4ee5\u4e0b\u5185\u5bb9\u4e3a LeviLamina \u7684\u914d\u7f6e\u6559\u7a0b"}),"\n","\n",(0,r.jsx)(s.A,{})]})}function m(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},48911:(e,t,n)=>{n.d(t,{A:()=>g});n(30758);var r=n(13526),i=n(51889),s=n(46499),o=n(72620),a=n(48689),c=n(62378),l=n(79623);const d={cardContainer:"cardContainer_FN5v",cardTitle:"cardTitle_Chu5",cardDescription:"cardDescription_MvZc"};var u=n(86070);function m(e){let{href:t,children:n}=e;return(0,u.jsx)(s.A,{href:t,className:(0,r.A)("card padding--lg",d.cardContainer),children:n})}function p(e){let{href:t,icon:n,title:i,description:s}=e;return(0,u.jsxs)(m,{href:t,children:[(0,u.jsxs)(l.A,{as:"h2",className:(0,r.A)("text--truncate",d.cardTitle),title:i,children:[n," ",i]}),s&&(0,u.jsx)("p",{className:(0,r.A)("text--truncate",d.cardDescription),title:s,children:s})]})}function h(e){let{item:t}=e;const n=(0,i.Nr)(t),r=function(){const{selectMessage:e}=(0,o.W)();return t=>e(t,(0,c.T)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return n?(0,u.jsx)(p,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??r(t.items.length)}):null}function f(e){let{item:t}=e;const n=(0,a.A)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",r=(0,i.cC)(t.docId??void 0);return(0,u.jsx)(p,{href:t.href,icon:n,title:t.label,description:t.description??r?.description})}function L(e){let{item:t}=e;switch(t.type){case"link":return(0,u.jsx)(f,{item:t});case"category":return(0,u.jsx)(h,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function v(e){let{className:t}=e;const n=(0,i.$S)();return(0,u.jsx)(g,{items:n.items,className:t})}function g(e){const{items:t,className:n}=e;if(!t)return(0,u.jsx)(v,{...e});const s=(0,i.d1)(t);return(0,u.jsx)("section",{className:(0,r.A)("row",n),children:s.map(((e,t)=>(0,u.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,u.jsx)(L,{item:e})},t)))})}},72620:(e,t,n)=>{n.d(t,{W:()=>l});var r=n(30758),i=n(32491);const s=["zero","one","two","few","many","other"];function o(e){return s.filter((t=>e.includes(t)))}const a={locale:"en",pluralForms:o(["one","other"]),select:e=>1===e?"one":"other"};function c(){const{i18n:{currentLocale:e}}=(0,i.A)();return(0,r.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:o(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),a}}),[e])}function l(){const e=c();return{selectMessage:(t,n)=>function(e,t,n){const r=e.split("|");if(1===r.length)return r[0];r.length>n.pluralForms.length&&console.error(`For locale=${n.locale}, a maximum of ${n.pluralForms.length} plural forms are expected (${n.pluralForms.join(",")}), but the message contains ${r.length}: ${e}`);const i=n.select(t),s=n.pluralForms.indexOf(i);return r[Math.min(s,r.length-1)]}(n,t,e)}}},25710:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>a});var r=n(30758);const i={},s=r.createContext(i);function o(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);