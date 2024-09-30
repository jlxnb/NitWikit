"use strict";(self.webpackChunkWiki=self.webpackChunkWiki||[]).push([[7651],{12652:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>d});var r=t(86070),i=t(11100);const s={title:"\u5982\u4f55\u9884\u9632\u5d29\u670d"},o="\u5982\u4f55\u9884\u9632\u5d29\u670d\u95ee\u9898",l={id:"process/maintenance/how-to-prevent-crash-server",title:"\u5982\u4f55\u9884\u9632\u5d29\u670d",description:"\u4f1a\u6709\u90e8\u5206\u4e0d\u6000\u597d\u610f\u7684\u4eba\u53bb\u6d4b\u8bd5\u670d\u52a1\u5668\u7684\u5d29\u6e83\u6f0f\u6d1e\u3002",source:"@site/docs/process/maintenance/how-to-prevent-crash-server.md",sourceDirName:"process/maintenance",slug:"/process/maintenance/how-to-prevent-crash-server",permalink:"/NitWikit/process/maintenance/how-to-prevent-crash-server",draft:!1,unlisted:!1,editUrl:"https://github.com/postyizhan/NitWikit/tree/main/docs/process/maintenance/how-to-prevent-crash-server.md",tags:[],version:"current",lastUpdatedBy:"postyizhan",lastUpdatedAt:1727673996e3,frontMatter:{title:"\u5982\u4f55\u9884\u9632\u5d29\u670d"},sidebar:"tutorialSidebar",previous:{title:"\u5982\u4f55\u6392\u9664\u6709\u95ee\u9898\u7684\u63d2\u4ef6",permalink:"/NitWikit/process/maintenance/how-to-troubleshoot-problematic-plugins"},next:{title:"\u8fdb\u9636\u6559\u7a0b",permalink:"/NitWikit/advance"}},c={},d=[{value:"\u5206\u7c7b",id:"\u5206\u7c7b",level:2},{value:"\u63d2\u4ef6\u7c7b",id:"\u63d2\u4ef6\u7c7b",level:3},{value:"\u63a8\u8350\u6dfb\u52a0\u9ed1\u540d\u5355\u7684\u6307\u4ee4",id:"\u63a8\u8350\u6dfb\u52a0\u9ed1\u540d\u5355\u7684\u6307\u4ee4",level:4},{value:"\u8fd0\u884c\u73af\u5883\u7c7b",id:"\u8fd0\u884c\u73af\u5883\u7c7b",level:3},{value:"\u53d1\u5305\u7c7b/\u7269\u54c1\u7c7b(\u4e5f\u79f0\u539f\u7248\u6f0f\u6d1e)",id:"\u53d1\u5305\u7c7b\u7269\u54c1\u7c7b\u4e5f\u79f0\u539f\u7248\u6f0f\u6d1e",level:3}];function a(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",...(0,i.R)(),...e.components},{Details:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"\u5982\u4f55\u9884\u9632\u5d29\u670d\u95ee\u9898",children:"\u5982\u4f55\u9884\u9632\u5d29\u670d\u95ee\u9898"})}),"\n",(0,r.jsx)(n.p,{children:"\u4f1a\u6709\u90e8\u5206\u4e0d\u6000\u597d\u610f\u7684\u4eba\u53bb\u6d4b\u8bd5\u670d\u52a1\u5668\u7684\u5d29\u6e83\u6f0f\u6d1e\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u522b\u62c5\u5fc3,\u957f\u671f\u4fdd\u6301\u7ef4\u62a4\u7684\u63d2\u4ef6\u4e00\u822c\u4e0d\u4f1a\u6709\u5d29\u6e83\u7684\u6f0f\u6d1e,\u4f46\u662f\u6211\u4eec\u4e5f\u8981\u6709\u9884\u9632\u7684\u51c6\u5907\u3002"}),"\n",(0,r.jsx)(n.h2,{id:"\u5206\u7c7b",children:"\u5206\u7c7b"}),"\n",(0,r.jsx)(n.p,{children:"\u4e0b\u9762\u5c06\u5217\u51fa\u51e0\u79cd\u5e38\u89c1\u7684 Minecraft \u670d\u52a1\u5668\u5bb9\u6613\u906d\u53d7\u7684\u5d29\u6e83\u7c7b\u578b\u3002"}),"\n",(0,r.jsx)(n.h3,{id:"\u63d2\u4ef6\u7c7b",children:"\u63d2\u4ef6\u7c7b"}),"\n",(0,r.jsx)(n.p,{children:"\u5728\u670d\u52a1\u5668\u4e0a\u5b89\u88c5\u4e86\u8001\u7248\u672c/\u672a\u53d1\u73b0\u6f0f\u6d1e\u7684\u63d2\u4ef6\u53ef\u80fd\u5bfc\u81f4\u63d2\u4ef6\u56e0bug\u81ea\u884c\u5d29\u6e83,\u751a\u81f3\u751a\u81f3\u6709\u6f0f\u6d1e\u88ab\u653b\u51fb\u8005\u5229\u7528\u3002\u8fd9\u7c7b\u901a\u5e38\u9700\u8981\u670d\u4e3b\u505a\u597d\u76f8\u5e94\u7684\u63aa\u65bd\u9884\u9632\u3002\u9996\u5148\u5728\u9009\u7528\u63d2\u4ef6\u65f6\u5c31\u5e94\u6ce8\u610f\uff1a"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"\u521d\u6b21\u5b89\u88c5\u65f6\u5c31\u5c3d\u53ef\u80fd\u89e3\u51b3 WARN \u548c ERROR,\u5b9e\u5728\u4e0d\u884c\u5c31\u7acb\u523b\u6362\u63d2\u4ef6"}),"\n",(0,r.jsx)(n.li,{children:"\u5c11\u7528,\u6700\u597d\u4e0d\u7528\u505c\u66f4\u63d2\u4ef6"}),"\n",(0,r.jsx)(n.li,{children:"\u5c11\u7528,\u6700\u597d\u4e0d\u7528\u9ed1\u63d2\u4ef6"}),"\n",(0,r.jsx)(n.li,{children:"\u5c3d\u53ef\u80fd\u4f7f\u7528\u7528\u6237\u6570\u591a\u7684\u63d2\u4ef6"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"\u5c31\u7b97\u4f60\u5df2\u7ecf\u4fdd\u8bc1\u9009\u7528\u4e86\u53ef\u4f9d\u8d56\u7684\u63d2\u4ef6,\u4ecd\u7136\u8981\u5bf9\u8fd9\u7c7b\u95ee\u9898\u8fdb\u884c\u9884\u9632\u3002\u5177\u4f53\u9884\u9632\u65b9\u9762\u6709\uff1a"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u5bf9\u73a9\u5bb6\u4f7f\u7528\u7684\u6307\u4ee4\u8fdb\u884c\u9650\u5236,\u6700\u597d\u662f\u901a\u8fc7\u767d\u540d\u5355,\u4ec5\u5f00\u653e\u73a9\u5bb6\u4f1a\u7528\u5230\u7684\u6307\u4ee4\u3002"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u5c06\u670d\u52a1\u5668\u7684\u63d2\u4ef6\u505a\u597d\u9690\u85cf\u548c\u4f2a\u88c5,\u5c3d\u53ef\u80fd\u9632\u6b62\u653b\u51fb\u8005\u83b7\u5f97\u670d\u52a1\u5668\u6240\u4f7f\u7528\u7684\u63d2\u4ef6\u3002"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"\u63a8\u8350\u6dfb\u52a0\u9ed1\u540d\u5355\u7684\u6307\u4ee4",children:"\u63a8\u8350\u6dfb\u52a0\u9ed1\u540d\u5355\u7684\u6307\u4ee4"}),"\n",(0,r.jsxs)(t,{children:[(0,r.jsx)("summary",{children:"\u9ed1\u540d\u5355\u6307\u4ee4"}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'      # WorldEdit exploit\n      - "//calc"\n      - "//calculate"\n      - "//eval"\n      - "//evaluate"\n      - "//solve"\n      - "//asc"\n      - "//ascend"\n      - "//desc"\n      - "//descend"\n      # HolographicDisplays exploit\n      - "/hd readtext"\n      - "/holo readtext"\n      - "/hologram readtext"\n      - "/holograms readtext"\n      - "/holographicdisplays readtext"\n      # PermissionsEx exploit\n      - "/pex promote"\n      - "/pex demote"\n      - "/promote"\n      - "/demote"\n      - "/execute"\n      # Multiverse exploit\n      - "/mv ^"\n      - "/mv help <"\n      - "/mvhelp <"\n      - "/$"\n      # FAWE exploit\n      - "//to"\n      - "/to"\n'})})]}),"\n",(0,r.jsx)(n.h3,{id:"\u8fd0\u884c\u73af\u5883\u7c7b",children:"\u8fd0\u884c\u73af\u5883\u7c7b"}),"\n",(0,r.jsx)(n.p,{children:"\u8fd9\u7c7b\u6f0f\u6d1e\u57fa\u672c\u4e0a\u5f88\u96be\u907f\u514d,\u5982log4j,\u5728\u672a\u53d1\u73b0\u4e4b\u524d\u8c01\u4e5f\u4e0d\u77e5\u9053\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u670d\u4e3b\u8fd8\u662f\u5c3d\u53ef\u80fd\u7684\u591a\u5173\u6ce8\u7f51\u7edc\u4fe1\u606f,\u4fdd\u8bc1\u81ea\u5df1\u80fd\u5c3d\u5feb\u4e86\u89e3\u5230\u4e00\u4e9b\u6f0f\u6d1e\u7684\u4ea7\u751f,\u9632\u6b62\u88ab\u653b\u51fb\u8005\u94bb\u7a7a\u5b50\u3002"}),"\n",(0,r.jsx)(n.h3,{id:"\u53d1\u5305\u7c7b\u7269\u54c1\u7c7b\u4e5f\u79f0\u539f\u7248\u6f0f\u6d1e",children:"\u53d1\u5305\u7c7b/\u7269\u54c1\u7c7b(\u4e5f\u79f0\u539f\u7248\u6f0f\u6d1e)"}),"\n",(0,r.jsx)(n.p,{children:"\u7b80\u5355\u6765\u8bf4,\u5c31\u662f\u5411\u670d\u52a1\u5668\u53d1\u9001\u4e00\u4e9b\u65e0\u6cd5\u5904\u7406/\u5904\u7406\u7f13\u6162\u7684\u5305\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u5982\u7ecf\u5178\u7684Book\u5d29\u670d/\u544a\u793a\u724c\u5d29\u670d(\u9ad8\u7248\u672c\u5df2\u4fee\u590d)"}),"\n",(0,r.jsx)(n.p,{children:"\u8fd9\u7c7b\u5982\u679c\u4f60\u662f\u4f4e\u7248\u672c\u670d\u52a1\u5668,\u5c31\u9700\u8981\u5b89\u88c5\u76f8\u5e94\u7684\u63d2\u4ef6\u8fdb\u884c\u9632\u5fa1\u3002"})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},11100:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>l});var r=t(30758);const i={},s=r.createContext(i);function o(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);