"use strict";(self.webpackChunkWiki=self.webpackChunkWiki||[]).push([[45],{84795:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>m,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var r=n(86070),i=n(25296),s=n(83110);const o={title:"LeviLamina",sidebar_position:3},a="LeviLamina",c={id:"bds-core/process/LeviLamina/LeviLamina",title:"LeviLamina",description:"LeviLamina \u662f BDS \u6838\u5fc3\u7684\u4e00\u6b3e\u529f\u80fd\u5f3a\u5927\u7684\u63d2\u4ef6\u52a0\u8f7d\u5668, \u66fe\u88ab\u79f0\u4e3a LiteLoaderBDS\u3002",source:"@site/docs-bedrock/bds-core/process/LeviLamina/LeviLamina.md",sourceDirName:"bds-core/process/LeviLamina",slug:"/bds-core/process/LeviLamina/",permalink:"/NitWikit/Bedrock/bds-core/process/LeviLamina/",draft:!1,unlisted:!1,editUrl:"https://github.com/postyizhan/NitWikit/tree/main/docs-bedrock/bds-core/process/LeviLamina/LeviLamina.md",tags:[],version:"current",lastUpdatedBy:"MF.",lastUpdatedAt:1725264206e3,sidebarPosition:3,frontMatter:{title:"LeviLamina",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"BDSX \u5b89\u88c5\u6559\u7a0b",permalink:"/NitWikit/Bedrock/bds-core/process/BDSX/bdsx-install"},next:{title:"LeviLamina \u5b89\u88c5\u6559\u7a0b",permalink:"/NitWikit/Bedrock/bds-core/process/LeviLamina/LeviLamina-Install"}},l={},d=[];function u(e){const t={h1:"h1",header:"header",p:"p",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"levilamina",children:"LeviLamina"})}),"\n",(0,r.jsx)(t.p,{children:"LeviLamina \u662f BDS \u6838\u5fc3\u7684\u4e00\u6b3e\u529f\u80fd\u5f3a\u5927\u7684\u63d2\u4ef6\u52a0\u8f7d\u5668, \u66fe\u88ab\u79f0\u4e3a LiteLoaderBDS\u3002"}),"\n",(0,r.jsx)(t.p,{children:"\u4ee5\u4e0b\u5185\u5bb9\u4e3a LeviLamina \u7684\u914d\u7f6e\u6559\u7a0b"}),"\n","\n",(0,r.jsx)(s.A,{})]})}function m(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},83110:(e,t,n)=>{n.d(t,{A:()=>v});n(30758);var r=n(13526),i=n(74339),s=n(21886),o=n(26401),a=n(49910),c=n(44264),l=n(97167);const d={cardContainer:"cardContainer_sywd",cardTitle:"cardTitle_kNFb",cardDescription:"cardDescription_foIn"};var u=n(86070);function m(e){let{href:t,children:n}=e;return(0,u.jsx)(s.A,{href:t,className:(0,r.A)("card padding--lg",d.cardContainer),children:n})}function p(e){let{href:t,icon:n,title:i,description:s}=e;return(0,u.jsxs)(m,{href:t,children:[(0,u.jsxs)(l.A,{as:"h2",className:(0,r.A)("text--truncate",d.cardTitle),title:i,children:[n," ",i]}),s&&(0,u.jsx)("p",{className:(0,r.A)("text--truncate",d.cardDescription),title:s,children:s})]})}function h(e){let{item:t}=e;const n=(0,i.Nr)(t),r=function(){const{selectMessage:e}=(0,o.W)();return t=>e(t,(0,c.T)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return n?(0,u.jsx)(p,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??r(t.items.length)}):null}function f(e){let{item:t}=e;const n=(0,a.A)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",r=(0,i.cC)(t.docId??void 0);return(0,u.jsx)(p,{href:t.href,icon:n,title:t.label,description:t.description??r?.description})}function L(e){let{item:t}=e;switch(t.type){case"link":return(0,u.jsx)(f,{item:t});case"category":return(0,u.jsx)(h,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function x(e){let{className:t}=e;const n=(0,i.$S)();return(0,u.jsx)(v,{items:n.items,className:t})}function v(e){const{items:t,className:n}=e;if(!t)return(0,u.jsx)(x,{...e});const s=(0,i.d1)(t);return(0,u.jsx)("section",{className:(0,r.A)("row",n),children:s.map(((e,t)=>(0,u.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,u.jsx)(L,{item:e})},t)))})}},26401:(e,t,n)=>{n.d(t,{W:()=>l});var r=n(30758),i=n(64130);const s=["zero","one","two","few","many","other"];function o(e){return s.filter((t=>e.includes(t)))}const a={locale:"en",pluralForms:o(["one","other"]),select:e=>1===e?"one":"other"};function c(){const{i18n:{currentLocale:e}}=(0,i.A)();return(0,r.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:o(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),a}}),[e])}function l(){const e=c();return{selectMessage:(t,n)=>function(e,t,n){const r=e.split("|");if(1===r.length)return r[0];r.length>n.pluralForms.length&&console.error(`For locale=${n.locale}, a maximum of ${n.pluralForms.length} plural forms are expected (${n.pluralForms.join(",")}), but the message contains ${r.length}: ${e}`);const i=n.select(t),s=n.pluralForms.indexOf(i);return r[Math.min(s,r.length-1)]}(n,t,e)}}},25296:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>a});var r=n(30758);const i={},s=r.createContext(i);function o(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);