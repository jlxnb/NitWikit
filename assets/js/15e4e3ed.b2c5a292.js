"use strict";(self.webpackChunkWiki=self.webpackChunkWiki||[]).push([[8177],{99938:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>a,frontMatter:()=>t,metadata:()=>c,toc:()=>d});var r=s(74848),i=s(28453);const t={title:"\u670d\u52a1\u7aef\u7ed3\u6784",sidebar_position:1},o="Biggest TODO...",c={id:"bds-core/start/basic/server-file-structure",title:"\u670d\u52a1\u7aef\u7ed3\u6784",description:"\u672c\u7bc7\u6587\u6863\u6301\u7eed\u66f4\u65b0\u4e2d...",source:"@site/docs-bedrock/bds-core/start/basic/server-file-structure.md",sourceDirName:"bds-core/start/basic",slug:"/bds-core/start/basic/server-file-structure",permalink:"/NitWikit/Bedrock/bds-core/start/basic/server-file-structure",draft:!1,unlisted:!1,editUrl:"https://github.com/postyizhan/NitWikit/tree/main/docs-bedrock/bds-core/start/basic/server-file-structure.md",tags:[],version:"current",lastUpdatedBy:"\u68a6\u6db5LOVE",lastUpdatedAt:1722184381e3,sidebarPosition:1,frontMatter:{title:"\u670d\u52a1\u7aef\u7ed3\u6784",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"\u57fa\u7840\u77e5\u8bc6",permalink:"/NitWikit/Bedrock/bds-core/start/basic/"},next:{title:"\u5efa\u8bbe\u9636\u6bb5",permalink:"/NitWikit/Bedrock/bds-core/process/"}},l={},d=[{value:"\u6839\u76ee\u5f55\u4e0b\u7684\u4e00\u4e9b\u6587\u4ef6",id:"\u6839\u76ee\u5f55\u4e0b\u7684\u4e00\u4e9b\u6587\u4ef6",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components},{Details:s}=n;return s||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.admonition,{type:"warning",children:[(0,r.jsxs)(n.p,{children:["\u672c\u7bc7\u6587\u6863\u6301\u7eed\u66f4\u65b0\u4e2d...",(0,r.jsx)("br",{}),"\n\u652f\u6301\u540e\u7eed PR"]}),(0,r.jsx)(n.h1,{id:"biggest-todo",children:"Biggest TODO..."}),(0,r.jsx)(n.p,{children:"\u4f5c\u8005\uff1a\u68a6\u6db5LOVE"})]}),"\n",(0,r.jsx)(n.h1,{id:"\u670d\u52a1\u7aef\u7ed3\u6784",children:"\u670d\u52a1\u7aef\u7ed3\u6784"}),"\n",(0,r.jsxs)(n.p,{children:["\u6211\u4eec\u5148\u6765\u7b80\u5355\u770b\u4e00\u773c BDS ",(0,r.jsx)(n.strong,{children:"\u5f00\u670d\u540e"})," \u7684\u6587\u4ef6\u5939\u7ed3\u6784\uff1a"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-c",children:"BDS\u670d\u52a1\u7aef\u6587\u4ef6\u5939\n\u251c\u2500behavior_packs                  // \u5b89\u88c5\u65b0\u884c\u4e3a\u5305\u7684\u6587\u4ef6\u5939\n\u251c\u2500config                          // \u6ca1\u5565\u7528\n\u251c\u2500definitions                     // \u8c8c\u4f3c\u662f\u751f\u6210\u7fa4\u7cfb\u7684\u5185\u5bb9\n\u251c\u2500development_behavior_packs      // \u4e3a\u5f00\u53d1\u8005\u63d0\u4f9b\u5b89\u88c5\u65b0\u884c\u4e3a\u5305\u7684\u6587\u4ef6\u5939\n\u251c\u2500development_resource_packs      // \u4e3a\u5f00\u53d1\u8005\u63d0\u4f9b\u5b89\u88c5\u65b0\u8d44\u6e90\u5305\u7684\u6587\u4ef6\u5939\n\u251c\u2500development_skin_packs          // \u4e3a\u5f00\u53d1\u8005\u63d0\u4f9b\u5b89\u88c5\u65b0\u76ae\u80a4\u5305\u7684\u6587\u4ef6\u5939\n\u251c\u2500resource_packs                  // \u5b89\u88c5\u65b0\u8d44\u6e90\u5305\u7684\u6587\u4ef6\u5939\n\u251c\u2500world-templates                 // \u4e16\u754c\u6a21\u677f\n\u251c\u2500worlds                          // \u4e3b\u4e16\u754c\u6587\u4ef6\u5939\n\u2502  \u2514\u2500Bedrock level                // \u4e16\u754c\u5b58\u6863\n\u2502    \u251c\u2500db                         // \u5b58\u6863\u6570\u636e\u6587\u4ef6\u5939\n\u2502    \u251c\u2500level_dat                  // \u5b58\u6863\u8bbe\u5b9a\n\u2502    \u251c\u2500level.dat_old              // \u5b58\u6863\u8bbe\u5b9a\uff08\u65e7\uff09\n\u2502    \u2514\u2500level_name.txt             // \u5b58\u6863\u540d\u79f0\n\u251c\u2500allowlist.json                  // \u767d\u540d\u5355\u6587\u4ef6\n\u251c\u2500bedrock_server.exe              // \u670d\u52a1\u7aef\u542f\u52a8\u7a0b\u5e8f\n\u251c\u2500bedrock_server.pdb              // \u7a0b\u5e8f\u6570\u636e\u5e93\u6587\u4ef6\n\u251c\u2500bedrock_server_how_to.html      // \u5982\u4f55\u4f7f\u7528BDS\u670d\u52a1\u5668\u7684\u5b98\u65b9\u6307\u5357\uff08\u6ca1\u591a\u5927\u7528\u5904\uff0c\u770b\u770b\u5c31\u884c\uff09\n\u251c\u2500permissions.json                // \u7ba1\u7406\u5458\uff08OP\uff09\u73a9\u5bb6\u76f8\u5173\u6570\u636e\n\u251c\u2500release-notes.txt               // \u670d\u52a1\u7aef\u53d1\u884c\u7248\u672c\u8be6\u60c5\n\u251c\u2500server.properties               // \u914d\u7f6e\u6587\u4ef6\n\u2514\u2500valid_known_packs.json          // \u5df2\u77e5\u7684\u9644\u52a0\u5305\n"})}),"\n",(0,r.jsx)(n.h2,{id:"\u6839\u76ee\u5f55\u4e0b\u7684\u4e00\u4e9b\u6587\u4ef6",children:"\u6839\u76ee\u5f55\u4e0b\u7684\u4e00\u4e9b\u6587\u4ef6"}),"\n",(0,r.jsxs)(n.admonition,{type:"warning",children:[(0,r.jsxs)(n.p,{children:["\u8bf7\u4e0d\u8981\u8ba9\u60a8\u7684\u670d\u52a1\u7aef\u7ed3\u6784\u4e0e\u6587\u6863\u89e3\u8bf4\u7ed3\u6784\u6709\u4efb\u4f55\u7684 ",(0,r.jsx)(n.strong,{children:"\u7f3a\u5c11"}),"\uff0c\u5426\u5219\u53ef\u80fd\u4f1a\u51fa\u73b0 ",(0,r.jsx)(n.strong,{children:"\u7384\u5b66\u95ee\u9898"})]}),(0,r.jsxs)(n.p,{children:["\u82e5\u60a8 ",(0,r.jsx)(n.strong,{children:"\u4e00\u81f4\u8ba4\u4e3a"})," \u6709\u53ef\u5220\u4e4b\u5904\uff0c\u90a3\u4e48\u4ee5\u4e0b\u662f ",(0,r.jsx)(n.strong,{children:"\u7edd\u5bf9\u53ef\u4ee5\u5220"})," \u7684\u670d\u52a1\u7aef\u7ed3\u6784\uff08\u53cd\u6b63\u6bcf\u6b21\u5f00\u670d\u90fd\u4f1a\u68c0\u6d4b\u662f\u5426\u6709\u8fd9\u4e9b\u6587\u4ef6\u5939\uff0c\u5982\u679c\u6ca1\u6709\u8fd8\u662f\u4f1a\u521b\u5efa\u7684\uff09"]}),(0,r.jsxs)(s,{children:[(0,r.jsx)("summary",{children:"\u70b9\u51fb\u5c55\u5f00"}),(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"config"})}),"\n",(0,r.jsx)(n.li,{children:"development_behavior_packs"}),"\n",(0,r.jsx)(n.li,{children:"development_resource_packs"}),"\n",(0,r.jsx)(n.li,{children:"development_skin_packs"}),"\n",(0,r.jsx)(n.li,{children:"world-templates"}),"\n",(0,r.jsx)(n.li,{children:"bedrock_server_how_to.html\uff08\u8fd9\u4e2a\u4e0d\u4f1a\u81ea\u5df1\u521b\u5efa\uff09"}),"\n",(0,r.jsx)(n.li,{children:"release-notes.txt\uff08\u8fd9\u4e2a\u4e0d\u4f1a\u81ea\u5df1\u521b\u5efa\uff09"}),"\n",(0,r.jsx)(n.li,{children:"valid_known_packs.json"}),"\n"]})]})]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"permissions.json"})}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"\u4ee5 json \u683c\u5f0f\u5b58\u653e\u4e86 OP \u73a9\u5bb6\u7684 UUID \u53ca\u6e38\u620f\u540d\u79f0\u7b49\u76f8\u5173\u4fe1\u606f\u3002"}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"bedrock_server.exe"})}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["\u4f60\u53ef\u4ee5\u6539\u540d\u53eb\u4efb\u4f55\u540d\u5b57\uff08\u53ea\u8981\u4ee5 ",(0,r.jsx)(n.code,{children:".exe"})," \u7ed3\u5c3e\u5c31\u884c\uff09\uff0c\u4f46\u4e0d\u5efa\u8bae\u60a8\u8fd9\u4e48\u505a\uff0c\u53ef\u80fd\u4f1a\u5bfc\u81f4\u6210\u4e3a\u540e\u7eed\u64cd\u4f5c\u62a5\u9519\u7684\u56e0\u7d20\u3002\u4f8b\u5982\uff1a"]}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\u82e5\u60a8\u4f7f\u7528 ",(0,r.jsx)(n.strong,{children:"\u9762\u677f"})," \u5f00\u670d\uff0c\u9700\u8981\u5728\u5bf9\u5e94\u7684 ",(0,r.jsx)(n.strong,{children:"\u542f\u52a8\u8def\u5f84"})," \u4e2d\u4fee\u6539\u670d\u52a1\u7aef\u542f\u52a8\u7a0b\u5e8f\u7684\u6587\u4ef6\u540d"]}),"\n",(0,r.jsxs)(n.li,{children:["\u82e5\u60a8\u4f7f\u7528 ",(0,r.jsx)(n.strong,{children:"\u542f\u7528\u811a\u672c"})," \u5f00\u670d\uff0c\u9700\u8981\u5728\u811a\u672c\u5bf9\u5e94\u4f4d\u7f6e\u7684 ",(0,r.jsx)(n.strong,{children:"\u542f\u52a8\u547d\u4ee4"})," \u4e2d\u4fee\u6539 ",(0,r.jsx)(n.strong,{children:"\u542f\u52a8\u7a0b\u5e8f\u7684\u6587\u4ef6\u540d"})," \u4e3a ",(0,r.jsx)(n.strong,{children:"\u8be5\u670d\u52a1\u7aef\u542f\u52a8\u7a0b\u5e8f\u7684\u6587\u4ef6\u540d"}),"\uff08bedrock_server.exe\uff09"]}),"\n"]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"server.properties"})}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["\u670d\u52a1\u7aef\u7684\u4e00\u4e9b\u57fa\u672c\u8bbe\u7f6e\u5c31\u5728\u91cc\u9762\uff0c\u5982\u8bbe\u7f6e\u7aef\u53e3\uff0c\u8bbe\u7f6e\u6e38\u620f\u96be\u5ea6\uff0c\u8bbe\u7f6e\u6e38\u620f\u6a21\u5f0f\uff08\u751f\u5b58\u3001\u521b\u9020\u7b49\uff09\u7b49\u3002",(0,r.jsx)(n.a,{href:"#",children:(0,r.jsx)(n.strong,{children:"\u5982\u4f55\u4f7f\u7528"})})]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"whitelist.json"})}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["\u767d\u540d\u5355\u5217\u8868\u3002\uff08\u5982\u679c\u60a8\u5728 ",(0,r.jsx)(n.code,{children:"server.properties"})," \u4e2d\u5f00\u542f\u4e86\u767d\u540d\u5355\uff0c\u60a8\u5c31\u53ef\u4ee5\u5728\u8be5\u6587\u4ef6\u4e2d\u6dfb\u52a0\u548c\u7ba1\u7406\u8c01\u88ab\u5141\u8bb8\u6216\u4e0d\u88ab\u5141\u8bb8\u8fdb\u5165\u670d\u52a1\u5668\u3002\uff09"]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.p,{children:"\u81f3\u6b64\uff0c\u5927\u90e8\u5206\u7684\u4ee5 BDS \u4e3a\u57fa\u7840\u7684\u670d\u52a1\u5668\u6838\u5fc3\u670d\u52a1\u7aef\u7684\u7ed3\u6784\u5df2\u7ecf\u5927\u81f4\u5448\u73b0\u5728\u60a8\u773c\u524d\u3002"}),"\n",(0,r.jsx)(n.admonition,{type:"warning",children:(0,r.jsxs)(n.p,{children:["\u5982\u679c\u4f60\u7684\u670d\u52a1\u7aef\u6709\u66f4\u591a\u7684\u6587\u4ef6\uff0c\u5927\u6982\u7387\u662f ",(0,r.jsx)(n.strong,{children:"\u63d2\u4ef6\u52a0\u8f7d\u5668"})," / ",(0,r.jsx)(n.strong,{children:"\u63d2\u4ef6"}),"\uff08\u5982\u9488\u5bf9 BDS \u7684 Levilamina \u63d2\u4ef6\u52a0\u8f7d\u5668\u4f1a\u91ca\u653e\u66f4\u591a\u6587\u4ef6\u5939\uff09\u521b\u5efa\u7684\u6587\u4ef6\u5939\uff0c\u4e00\u822c\u6765\u8bf4\u65e0\u9700\u62c5\u5fc3\u3002"]})})]})}function a(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>o,x:()=>c});var r=s(96540);const i={},t=r.createContext(i);function o(e){const n=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);