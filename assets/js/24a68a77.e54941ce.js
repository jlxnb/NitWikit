"use strict";(self.webpackChunkWiki=self.webpackChunkWiki||[]).push([[7819],{19361:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>X,frontMatter:()=>s,metadata:()=>o,toc:()=>l});var t=i(86070),a=i(25710);const s={sidebar_position:7,title:"OpenJ9",slug:"/optimize/jvm/openj9",author:{commit:"c4ad1c9",username:"xmk2333"}},r="OpenJ9",o={id:"process/maintenance/optimize/jvm/openj9",title:"OpenJ9",description:"\u8fd9\u4e9b\u53c2\u6570\u53ea\u9002\u5408 OpenJ9",source:"@site/docs-java/process/maintenance/optimize/jvm/openj9.md",sourceDirName:"process/maintenance/optimize/jvm",slug:"/optimize/jvm/openj9",permalink:"/NitWikit/Java/optimize/jvm/openj9",draft:!1,unlisted:!1,editUrl:"https://github.com/postyizhan/NitWikit/tree/main/docs-java/process/maintenance/optimize/jvm/openj9.md",tags:[],version:"current",lastUpdatedBy:"\u53ef\u7231\u7684\u76ae\u5361\u4e18",lastUpdatedAt:1724238462e3,sidebarPosition:7,frontMatter:{sidebar_position:7,title:"OpenJ9",slug:"/optimize/jvm/openj9",author:{commit:"c4ad1c9",username:"xmk2333"}},sidebar:"tutorialSidebar",previous:{title:"Azul Zing",permalink:"/NitWikit/Java/optimize/jvm/zing"},next:{title:"\u8c03\u670d\u52a1\u7aef\u914d\u7f6e",permalink:"/NitWikit/Java/process/maintenance/optimize/go"}},c={},l=[{value:"\u57fa\u7840",id:"\u57fa\u7840",level:2},{value:"GC",id:"gc",level:2}];function p(e){const n={code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"openj9",children:"OpenJ9"})}),"\n",(0,t.jsx)(n.p,{children:"\u8fd9\u4e9b\u53c2\u6570\u53ea\u9002\u5408 OpenJ9"}),"\n",(0,t.jsx)(n.h2,{id:"\u57fa\u7840",children:"\u57fa\u7840"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"-XX:+IdleTuningGcOnIdle -XX:+UseAggressiveHeapShrink -XX:-OmitStackTraceInFastThrow -XX:+UseFastAccessorMethods -XX:+OptimizeStringConcat -Xshareclasses:allowClasspaths -Xshareclasses:cacheDir=./cache -Xaot -XX:+UseCompressedOops -XX:ObjectAlignmentInBytes=256 -Xshareclasses -XX:SharedCacheHardLimit=800M -Xtune:virtualized -XX:+TieredCompilation -XX:InitialTenuringThreshold=5 -Dlog4j2.formatMsgNoLookups=true -XX:-DisableExplicitGC -XX:InitiatingHeapOccupancyPercent=35 -XX:+UnlockExperimentalVMOptions \n"})}),"\n",(0,t.jsx)(n.h2,{id:"gc",children:"GC"}),"\n",(0,t.jsx)(n.p,{children:"\u8003\u8651\u5230 ZGC \u901a\u5e38\u4f1a\u4f7f\u7528\u66f4\u591a\u7684\u5185\u5b58,\u6240\u4ee5\u63a8\u8350\u4f7f\u7528 G1GC"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"-XX:+UseG1GC -XX:MaxGCPauseMillis=130 -XX:+UnlockExperimentalVMOptions -XX:+DisableExplicitGC -XX:+AlwaysPreTouch -XX:G1NewSizePercent=28 -XX:G1HeapRegionSize=16M -XX:G1ReservePercent=20 -XX:G1MixedGCCountTarget=3 -XX:InitiatingHeapOccupancyPercent=10 -XX:G1MixedGCLiveThresholdPercent=90 -XX:G1RSetUpdatingPauseTimePercent=0 -XX:SurvivorRatio=32 -XX:MaxTenuringThreshold=1 -XX:G1SATBBufferEnqueueingThresholdPercent=30 -XX:G1ConcMarkStepDurationMillis=5.0 -XX:G1ConcRefinementServiceIntervalMillis=150 -XX:G1ConcRSHotCardLimit=16 -XX:MaxGCPauseMillis=6 -Djava.net.preferIPv4Stack=true -XX:-ParallelRefProcEnabled-XX:+UseTLAB -XX:ReservedCodeCacheSize=70M -XX:G1NewSizePercent=20 -XX:G1ReservePercent=20\n"})})]})}function X(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}},25710:(e,n,i)=>{i.d(n,{R:()=>r,x:()=>o});var t=i(30758);const a={},s=t.createContext(a);function r(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);