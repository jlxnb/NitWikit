"use strict";(self.webpackChunkWiki=self.webpackChunkWiki||[]).push([[7819],{13189:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>X,frontMatter:()=>r,metadata:()=>t,toc:()=>l});const t=JSON.parse('{"id":"process/maintenance/optimize/jvm/openj9","title":"OpenJ9","description":"\u8fd9\u4e9b\u53c2\u6570\u53ea\u9002\u5408 OpenJ9","source":"@site/docs-java/process/maintenance/optimize/jvm/openj9.md","sourceDirName":"process/maintenance/optimize/jvm","slug":"/optimize/jvm/openj9","permalink":"/Java/optimize/jvm/openj9","draft":false,"unlisted":false,"editUrl":"https://github.com/postyizhan/NitWikit/tree/main/docs-java/process/maintenance/optimize/jvm/openj9.md","tags":[],"version":"current","lastUpdatedBy":"SB-Reborn","lastUpdatedAt":1727754229000,"sidebarPosition":7,"frontMatter":{"sidebar_position":7,"title":"OpenJ9","slug":"/optimize/jvm/openj9"},"sidebar":"tutorialSidebar","previous":{"title":"Azul Zing","permalink":"/Java/optimize/jvm/zing"},"next":{"title":"\u8c03\u670d\u52a1\u7aef\u914d\u7f6e","permalink":"/Java/process/maintenance/optimize/go"}}');var a=i(86070),s=i(51582);const r={sidebar_position:7,title:"OpenJ9",slug:"/optimize/jvm/openj9"},o="OpenJ9",c={},l=[{value:"\u57fa\u7840",id:"\u57fa\u7840",level:2},{value:"GC",id:"gc",level:2}];function p(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.header,{children:(0,a.jsx)(n.h1,{id:"openj9",children:"OpenJ9"})}),"\n",(0,a.jsx)(n.p,{children:"\u8fd9\u4e9b\u53c2\u6570\u53ea\u9002\u5408 OpenJ9"}),"\n",(0,a.jsx)(n.admonition,{type:"warning",children:(0,a.jsx)(n.p,{children:"\u8fd9\u4e9b\u53c2\u6570\u7684\u4e3b\u8981\u76ee\u7684\u662f\u964d\u4f4e\u5185\u5b58\u5360\u7528\uff0c\u800c\u975e\u4f18\u5316\u6027\u80fd"})}),"\n",(0,a.jsx)(n.h2,{id:"\u57fa\u7840",children:"\u57fa\u7840"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-text",children:"-XX:+IdleTuningGcOnIdle -XX:+UseAggressiveHeapShrink -XX:-OmitStackTraceInFastThrow -XX:+UseFastAccessorMethods -XX:+OptimizeStringConcat -Xshareclasses:allowClasspaths -Xshareclasses:cacheDir=./cache -Xaot -XX:+UseCompressedOops -XX:ObjectAlignmentInBytes=256 -Xshareclasses -XX:SharedCacheHardLimit=800M -Xtune:virtualized -XX:+TieredCompilation -XX:InitialTenuringThreshold=5 -Dlog4j2.formatMsgNoLookups=true -XX:-DisableExplicitGC -XX:InitiatingHeapOccupancyPercent=35 -XX:+UnlockExperimentalVMOptions \n"})}),"\n",(0,a.jsx)(n.h2,{id:"gc",children:"GC"}),"\n",(0,a.jsx)(n.p,{children:"\u8003\u8651\u5230 ZGC \u901a\u5e38\u4f1a\u4f7f\u7528\u66f4\u591a\u7684\u5185\u5b58\uff0c\u6240\u4ee5\u63a8\u8350\u4f7f\u7528 G1GC"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-text",children:"-XX:+UseG1GC -XX:MaxGCPauseMillis=130 -XX:+UnlockExperimentalVMOptions -XX:+DisableExplicitGC -XX:+AlwaysPreTouch -XX:G1NewSizePercent=28 -XX:G1HeapRegionSize=16M -XX:G1ReservePercent=20 -XX:G1MixedGCCountTarget=3 -XX:InitiatingHeapOccupancyPercent=10 -XX:G1MixedGCLiveThresholdPercent=90 -XX:G1RSetUpdatingPauseTimePercent=0 -XX:SurvivorRatio=32 -XX:MaxTenuringThreshold=1 -XX:G1SATBBufferEnqueueingThresholdPercent=30 -XX:G1ConcMarkStepDurationMillis=5.0 -XX:G1ConcRefinementServiceIntervalMillis=150 -XX:G1ConcRSHotCardLimit=16 -XX:MaxGCPauseMillis=6 -Djava.net.preferIPv4Stack=true -XX:-ParallelRefProcEnabled-XX:+UseTLAB -XX:ReservedCodeCacheSize=70M -XX:G1NewSizePercent=20 -XX:G1ReservePercent=20\n"})})]})}function X(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(p,{...e})}):p(e)}},51582:(e,n,i)=>{i.d(n,{R:()=>r,x:()=>o});var t=i(30758);const a={},s=t.createContext(a);function r(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);