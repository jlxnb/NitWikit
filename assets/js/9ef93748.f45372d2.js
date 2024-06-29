"use strict";(self.webpackChunkWiki=self.webpackChunkWiki||[]).push([[5024],{50954:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>s,metadata:()=>d,toc:()=>c});var r=n(74848),t=n(28453);const s={slug:"/optimize",sidebar_position:5},a="\u4f18\u5316",d={id:"maintenance/optimize/optimize",title:"\u4f18\u5316",description:"\u4f18\u5316\u662f\u505a\u51cf\u6cd5\uff0c\u6e05\u7406\u670d\u52a1\u5668\u7684\u5361\u987f\u56e0\u7d20\uff0c\u7531\u4e8e Minecraft \u672c\u8eab\u7684\u6027\u80fd\u4f4e\u4e0b\u3001\u90e8\u5206\u63d2\u4ef6\u4f5c\u8005\u5e76\u6ca1\u6709\u4f18\u5316\u4ee3\u7801\u7684\u610f\u8bc6\u3001\u670d\u52a1\u5668\u5b9e\u4f53\u8fc7\u591a\u7b49\u3002",source:"@site/docs/maintenance/optimize/optimize.md",sourceDirName:"maintenance/optimize",slug:"/optimize",permalink:"/NitWikit/optimize",draft:!1,unlisted:!1,editUrl:"https://github.com/postyizhan/NitWikit/tree/main/docs/maintenance/optimize/optimize.md",tags:[],version:"current",lastUpdatedBy:"lilingfengdev",lastUpdatedAt:1719626298e3,sidebarPosition:5,frontMatter:{slug:"/optimize",sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"RNG",permalink:"/NitWikit/maintenance/anticheat/rng"},next:{title:"\u8c03\u670d\u52a1\u7aef\u914d\u7f6e",permalink:"/NitWikit/maintenance/optimize/go"}},l={},c=[{value:"\u9009\u62e9\u5408\u9002\u7684 Java",id:"\u9009\u62e9\u5408\u9002\u7684-java",level:2},{value:"JVM \u53c2\u6570\u4f18\u5316",id:"jvm-\u53c2\u6570\u4f18\u5316",level:2},{value:"Paper - \u8ffd\u6c42\u6781\u81f4\u7a33\u5b9a <em>\u63a8\u8350\u5ea6\u2605\u2605\u2605\u2605\u2606</em>",id:"paper---\u8ffd\u6c42\u6781\u81f4\u7a33\u5b9a-\u63a8\u8350\u5ea6",level:2},{value:"Purpur - \u7a33\u5b9a\u6027\u4e0e\u6027\u80fd\u6700\u4f73\u9009\u62e9 <em>\u63a8\u8350\u5ea6\u2605\u2605\u2605\u2605\u2605</em>",id:"purpur---\u7a33\u5b9a\u6027\u4e0e\u6027\u80fd\u6700\u4f73\u9009\u62e9-\u63a8\u8350\u5ea6",level:2},{value:"Leaf - \u6781\u81f4\u6027\u80fd <em>\u63a8\u8350\u5ea6\u2605\u2605\u2605\u2605\u2606</em>",id:"leaf---\u6781\u81f4\u6027\u80fd-\u63a8\u8350\u5ea6",level:2},{value:"Folia - \u786c\u4ef6\u5229\u7528\u7387\u8d85\u9ad8\u7684\u9ad8\u6027\u80fd\uff0c\u4f46\u517c\u5bb9\u6027\u8f83\u5dee <em>\u63a8\u8350\u5ea6\u2605\u2605\u2605\u2606\u2606</em>",id:"folia---\u786c\u4ef6\u5229\u7528\u7387\u8d85\u9ad8\u7684\u9ad8\u6027\u80fd\u4f46\u517c\u5bb9\u6027\u8f83\u5dee-\u63a8\u8350\u5ea6",level:2}];function o(e){const i={a:"a",admonition:"admonition",em:"em",h1:"h1",h2:"h2",p:"p",strong:"strong",...(0,t.R)(),...e.components},{Details:n}=i;return n||function(e,i){throw new Error("Expected "+(i?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.h1,{id:"\u4f18\u5316",children:"\u4f18\u5316"}),"\n",(0,r.jsx)(i.p,{children:"\u4f18\u5316\u662f\u505a\u51cf\u6cd5\uff0c\u6e05\u7406\u670d\u52a1\u5668\u7684\u5361\u987f\u56e0\u7d20\uff0c\u7531\u4e8e Minecraft \u672c\u8eab\u7684\u6027\u80fd\u4f4e\u4e0b\u3001\u90e8\u5206\u63d2\u4ef6\u4f5c\u8005\u5e76\u6ca1\u6709\u4f18\u5316\u4ee3\u7801\u7684\u610f\u8bc6\u3001\u670d\u52a1\u5668\u5b9e\u4f53\u8fc7\u591a\u7b49\u3002"}),"\n",(0,r.jsx)(i.p,{children:"\u6bcf\u4e2a\u670d\u52a1\u5668\u53ef\u80fd\u6709\u81ea\u5df1\u7684\u5361\u987f\u539f\u56e0\uff0c\u5728\u8fd9\u90e8\u5206\u5148\u505a\u6700\u57fa\u7840\u7684\u901a\u7528\u4f18\u5316\uff0c\u5982\u679c\u4f60\u4f7f\u7528\u540e\u4f5c\u7528\u4e0d\u5927\u8bf7\u53c2\u8003\u6027\u80fd\u5206\u6790\u677f\u5757\u3002"}),"\n",(0,r.jsxs)(i.p,{children:["\u5728\u6b64\u4e4b\u524d\uff0c\u8bf7\u4e00\u5b9a\u67e5\u770b ",(0,r.jsx)(i.a,{href:"/NitWikit/maintenance/optimize/optimized-plugin",children:"\u4f18\u5316\u8bef\u533a"}),'\uff0c\u505c\u6b62\u6b64\u7c7b\u65e0\u6548"\u4f18\u5316"\uff0c\u7136\u540e\u6839\u636e\u4e0b\u9762\u7684\u6b65\u9aa4\u8fdb\u884c\u64cd\u4f5c\u3002']}),"\n",(0,r.jsx)(i.h1,{id:"\u7b2c\u4e00\u6b65---java-\u4f18\u5316",children:"\u7b2c\u4e00\u6b65 - Java \u4f18\u5316"}),"\n",(0,r.jsx)(i.p,{children:"\u4e3a\u4ec0\u4e48\u9009\u62e9 Java \u4f18\u5316\u4f5c\u4e3a\u7b2c\u4e00\u6b65 - \u51e0\u4e4e\u4efb\u4f55\u60c5\u51b5\u4e0b\uff0c\u670d\u52a1\u5668\u90fd\u4f1a\u56e0\u4e3a\u5408\u9002\u7684 Java \u53d7\u76ca\uff0c"}),"\n",(0,r.jsx)(i.p,{children:"\u4ec5\u4ec5\u9700\u8981\u4f60\u4e0b\u8f7d\u4e00\u4e2a\u5c0f\u5c0f\u7684 Java \u5b89\u88c5\u7a0b\u5e8f\uff0c\u6216\u8005\u66f4\u6539 JVM \u53c2\u6570(\u5927\u767d\u8bdd\u6765\u8bf4\u5c31\u662f\u5f00\u670d\u53c2\u6570)\u3002"}),"\n",(0,r.jsx)(i.h2,{id:"\u9009\u62e9\u5408\u9002\u7684-java",children:"\u9009\u62e9\u5408\u9002\u7684 Java"}),"\n",(0,r.jsxs)(i.p,{children:["\u53c2\u8003",(0,r.jsx)(i.a,{href:"/NitWikit/preparation/download-and-install-java",children:" Java \u4e0b\u8f7d\u53ca\u5b89\u88c5"}),"\u5b89\u88c5\u5408\u9002\u7684 Java"]}),"\n",(0,r.jsx)(i.h2,{id:"jvm-\u53c2\u6570\u4f18\u5316",children:"JVM \u53c2\u6570\u4f18\u5316"}),"\n",(0,r.jsxs)(i.p,{children:["\u53ef\u4ee5\u5728 ",(0,r.jsx)(i.a,{href:"https://startmc.jakaco.xyz/",children:"JVM \u53c2\u6570\u751f\u6210\u5668"}),"\u751f\u6210\u9002\u5408\u4f60\u670d\u52a1\u5668\u7684\u57fa\u672c JVM \u53c2\u6570\uff0c\u7136\u540e\u590d\u5236\u5e76\u4fdd\u5b58\u5230\u4f60\u7684\u542f\u52a8\u811a\u672c\u91cc\uff0c\u7136\u540e\u91cd\u542f\u5c31\u5b8c\u6210\u4e86"]}),"\n",(0,r.jsxs)(i.p,{children:["\u522b\u6025\uff0c\u8fd8\u6709\u4e00\u4e9b\u66f4\u9ad8\u9636\u7684\u53c2\u6570\u3002",(0,r.jsx)(i.a,{href:"/NitWikit/maintenance/optimize/jvm-optimization",children:"JVM\u4f18\u5316"})]}),"\n",(0,r.jsx)(i.h1,{id:"\u7b2c\u4e8c\u6b65---\u9884\u751f\u6210",children:"\u7b2c\u4e8c\u6b65 - \u9884\u751f\u6210"}),"\n",(0,r.jsx)(i.p,{children:"\u4ec0\u4e48\u662f\u9884\u751f\u6210 - \u9884\u751f\u6210\u5c31\u662f\u8ba9\u670d\u52a1\u5668\u5728\u73a9\u5bb6\u8fdb\u5165\u4e4b\u524d\uff0c\u9884\u5148\u751f\u6210\u533a\u5757\u5bf9\u5e94\u65b9\u5757\u3001\u7ed3\u6784\u7b49\u3002"}),"\n",(0,r.jsx)(i.p,{children:"\u5728 Minecraft \u670d\u52a1\u5668\u4e2d\uff0c\u751f\u6210\u65b0\u533a\u5757\u4f1a\u6d88\u8017\u5927\u91cf\u670d\u52a1\u5668\u8d44\u6e90\uff0c\u5982\u679c\u8981\u5f00\u542f\u65b0\u7684\u5730\u56fe / \u670d\u52a1\u5668\uff0c\u5efa\u8bae\u5148\u9884\u751f\u6210\u5730\u56fe\u3002"}),"\n",(0,r.jsxs)(i.p,{children:[(0,r.jsx)(i.a,{href:"https://hangar.papermc.io/pop4959/Chunky",children:"Chunky"})," \u662f\u6700\u5e38\u7528\u7684\u9884\u751f\u6210\u63d2\u4ef6\uff0c\u901a\u5e38\u4e0e ",(0,r.jsx)(i.a,{href:"https://modrinth.com/plugin/chunkyborder",children:"ChunkyBorder"})," \u7ed3\u5408\u4f7f\u7528\uff0c\u4f60\u53ef\u4ee5\u6839\u636e\u81ea\u5df1\u7684\u559c\u597d\u81ea\u5b9a\u4e49\u8fb9\u754c\u53ca\u5f62\u72b6\u3002"]}),"\n",(0,r.jsx)(i.p,{children:"\u901a\u5e38\u6765\u8bf4\uff0c\u5373\u4f7f\u4f60\u4e0d\u8bbe\u7f6e\u8fb9\u754c\uff0c\u4e5f\u52a1\u5fc5\u8fdb\u884c\u9884\u751f\u6210\u5927\u7ea6 1w x 1w \u5927\u5c0f\u7684\u4e16\u754c\u3002\u8fd9\u5bf9\u964d\u4f4e\u540e\u671f\u670d\u52a1\u5668\u8d1f\u8f7d\u5f88\u6709\u6548\u3002"}),"\n",(0,r.jsx)(i.p,{children:"\u9884\u751f\u6210\u65f6\u5e94\u8be5\u6ce8\u610f\uff0c\u9ed8\u8ba4\u60c5\u51b5 1.20 \u539f\u7248 1w x 1w \u7684\u5730\u56fe\u9700\u8981 4-5 GB \u786c\u76d8\u3002\u5e94\u6839\u636e\u786c\u76d8\u5927\u5c0f\u9009\u62e9\u4e16\u754c\u7684\u9884\u751f\u6210\u5927\u5c0f\u3002"}),"\n",(0,r.jsx)(i.h1,{id:"\u7b2c\u4e09\u6b65---\u66f4\u6362\u6838\u5fc3",children:"\u7b2c\u4e09\u6b65 - \u66f4\u6362\u6838\u5fc3"}),"\n",(0,r.jsx)(i.p,{children:"\u5728\u63d2\u4ef6\u548c\u914d\u7f6e\u5c42\u9762\u80fd\u8fdb\u884c\u7684\u4f18\u5316\u5176\u5b9e\u4e0d\u591a\uff08\u53d7\u9650\u4e8e API \u8fd8\u6709\u670d\u52a1\u7aef\u6838\u5fc3)\uff0c\u6240\u4ee5\u6700\u597d\u7684\u65b9\u6cd5\u662f\u66f4\u6362\u670d\u52a1\u5668\u6838\u5fc3\u3002"}),"\n",(0,r.jsx)(i.admonition,{type:"warning",children:(0,r.jsx)(i.p,{children:"\u4efb\u4f55\u65f6\u5019\u90fd\u4e0d\u8981\u518d\u4f7f\u7528 CraftBukkit \u548c Spigot \u4e86\u3002\u8ffd\u6c42\u7a33\u5b9a/\u6027\u80fd\u4e0a Purpur \uff0c\u8ffd\u6c42\u539f\u7248\u7279\u6027\u4e0a Leaves,\u6027\u80fd\u4e0aLeaf"})}),"\n",(0,r.jsxs)(n,{children:[(0,r.jsx)("summary",{children:"\u9009\u62e9\u66f4\u6362\u7684\u670d\u52a1\u5668\u6838\u5fc3"}),(0,r.jsxs)(i.p,{children:["\u6b64\u5904\u53ea\u662f\u4f5c\u4e3a\u6700\u57fa\u7840\u7684\u6838\u5fc3\u9009\u62e9\u63a8\u8350\uff0c\u5b8c\u6574\u7248\u8bf7\u67e5\u770b",(0,r.jsx)(i.a,{href:"/NitWikit/start/server-core-choose",children:"\u6838\u5fc3\u9009\u62e9"})]}),(0,r.jsxs)(i.h2,{id:"paper---\u8ffd\u6c42\u6781\u81f4\u7a33\u5b9a-\u63a8\u8350\u5ea6",children:["Paper - \u8ffd\u6c42\u6781\u81f4\u7a33\u5b9a ",(0,r.jsx)(i.em,{children:"\u63a8\u8350\u5ea6\u2605\u2605\u2605\u2605\u2606"})]}),(0,r.jsx)(i.p,{children:"\u5982\u679c\u662f\u7b2c\u4e00\u6b21\u5f00\u670d\uff0c\u6216\u8005\u8ffd\u6c42\u7a33\u5b9a\uff0c\u8bf7\u4f7f\u7528 Paper \u3002\u4efb\u4f55\u65f6\u5019\u60f3\u66f4\u6362\u5176\u4ed6\u6838\u5fc3\u53ef\u4ee5\u968f\u65f6\u66f4\u6362\u5982 Purpur / Leaf \u7b49\u6838\u5fc3\u3002"}),(0,r.jsxs)(i.h2,{id:"purpur---\u7a33\u5b9a\u6027\u4e0e\u6027\u80fd\u6700\u4f73\u9009\u62e9-\u63a8\u8350\u5ea6",children:["Purpur - \u7a33\u5b9a\u6027\u4e0e\u6027\u80fd\u6700\u4f73\u9009\u62e9 ",(0,r.jsx)(i.em,{children:"\u63a8\u8350\u5ea6\u2605\u2605\u2605\u2605\u2605"})]}),(0,r.jsx)(i.p,{children:"\u5982\u679c\u4f60\u5e76\u4e0d\u662f\u8ffd\u6c42\u66f4\u6781\u81f4\u7684\u6027\u80fd\uff0cPurpur \u4f60\u6700\u597d\u7684\u9009\u62e9\uff0c\u53ea\u9700\u8981\u66ff\u6362\u6389\u6838\u5fc3\u5c31\u53ef\u4ee5\uff0cPurpur \u517c\u5bb9\u5168\u90e8\u63d2\u4ef6!!"}),(0,r.jsxs)(i.h2,{id:"leaf---\u6781\u81f4\u6027\u80fd-\u63a8\u8350\u5ea6",children:["Leaf - \u6781\u81f4\u6027\u80fd ",(0,r.jsx)(i.em,{children:"\u63a8\u8350\u5ea6\u2605\u2605\u2605\u2605\u2606"})]}),(0,r.jsx)(i.p,{children:"\u524d\u5f80 Leaf \u7684 Github Action \u4e0b\u8f7d\u6700\u65b0\u6838\u5fc3\uff0c\u7136\u540e\u66ff\u6362!!\uff0cLeaf \u517c\u5bb9\u4f60\u7684\u7edd\u5927\u90e8\u5206\u63d2\u4ef6(\u5df2\u77e5\u4ec5\u6709\u4e00\u4e2a\u4e0d\u517c\u5bb9\uff0c\u4f46\u5728\u63d2\u4ef6\u7684\u5206\u652f\u89e3\u51b3)"}),(0,r.jsxs)(i.h2,{id:"folia---\u786c\u4ef6\u5229\u7528\u7387\u8d85\u9ad8\u7684\u9ad8\u6027\u80fd\u4f46\u517c\u5bb9\u6027\u8f83\u5dee-\u63a8\u8350\u5ea6",children:["Folia - \u786c\u4ef6\u5229\u7528\u7387\u8d85\u9ad8\u7684\u9ad8\u6027\u80fd\uff0c\u4f46\u517c\u5bb9\u6027\u8f83\u5dee ",(0,r.jsx)(i.em,{children:"\u63a8\u8350\u5ea6\u2605\u2605\u2605\u2606\u2606"})]}),(0,r.jsx)(i.p,{children:"\u5982\u679c\u4f60\u7684\u670d\u52a1\u5668\u5bf9\u63d2\u4ef6\u7684\u9700\u6c42\u4e0d\u5927\uff0c\u6216\u8005\u4f60\u7684\u63d2\u4ef6\u5df2\u5168\u90e8\u517c\u5bb9 Folia \uff0c\u90a3\u4f60\u5c31\u53ef\u4ee5\u9009\u62e9\u5207\u6362\u5230\u8fd9\u4e2a\u6838\u5fc3\uff0c\u4f60\u7684 tps \u6709\u7edd\u5bf9\u5de8\u5927\u7684\u63d0\u5347(\u751a\u81f3\u8d85\u8fc7\u4e86 Leaf )"})]}),"\n",(0,r.jsx)(i.h1,{id:"\u7b2c\u56db\u6b65---\u8c03\u6574\u670d\u52a1\u7aef\u914d\u7f6e",children:"\u7b2c\u56db\u6b65 - \u8c03\u6574\u670d\u52a1\u7aef\u914d\u7f6e"}),"\n",(0,r.jsx)(i.p,{children:"\u76ee\u524d\uff0cBilibili\u4e0a\u9762\u7684\u914d\u7f6e\u90fd\u662f\u5f88\u8001\u7684\uff0c\u4e0d\u63a8\u8350\u4f7f\u7528"}),"\n",(0,r.jsxs)(i.p,{children:["\u6587\u6863\u91cc\u7684 ",(0,r.jsx)(i.a,{href:"/NitWikit/maintenance/optimize/go",children:"\u8c03\u670d\u52a1\u7aef\u914d\u7f6e"})," \u6bd4\u8f83\u65b0\uff0c\u975e\u5e38\u63a8\u8350"]}),"\n",(0,r.jsx)(i.h1,{id:"\u7b2c\u4e94\u6b65---\u66f4\u6362\u786c\u4ef6",children:"\u7b2c\u4e94\u6b65 - \u66f4\u6362\u786c\u4ef6"}),"\n",(0,r.jsxs)(i.p,{children:[(0,r.jsx)(i.strong,{children:"\u4e0d\u8981\u65e0\u8111\u6362\u786c\u4ef6!"})," \u9996\u5148\u8981\u77e5\u9053\u81ea\u5df1\u7684\u786c\u4ef6\u74f6\u9888\u5728\u54ea\u91cc\u3002\u5982\u679c CPU \u8d1f\u8377\u8fc7\u9ad8\uff0c\u5efa\u8bae\u5148\u6392\u9664 CPU \u5f02\u5e38\u5360\u7528\uff0c\u518d\u770b CPU \u603b\u4f53\u5360\u7528\u60c5\u51b5\u3002\u4e00\u822c\u6765\u8bf4\u670d\u52a1\u5668\u5361\u987f\u6362 CPU \u662f\u6700\u6709\u6548\u7684\uff0c\u5355\u6838\u6027\u80fd\u548c MC \u670d\u52a1\u5668 TPS \u51e0\u4e4e\u5448\u7ebf\u6027\u76f8\u5173\uff0c\u4f46\u662f\u6362 CPU \u51e0\u4e4e\u5c31\u76f8\u5f53\u4e8e\u8981\u6362\u4e00\u53f0\u673a\u5668\uff0c\u8fc1\u79fb\u5bf9\u4e8e\u65b0\u624b\u6765\u8bf4\u5e76\u4e0d\u662f\u6613\u4e8b\u3002"]}),"\n",(0,r.jsx)(i.p,{children:"\u5bf9\u4e8e\u5355\u7aef\u670d\u52a1\u5668\u6765\u8bf4\uff0c\u8d85\u8fc78\u6838\u5fc3\u7684\u90e8\u5206\u57fa\u672c\u5f88\u96be\u901a\u8fc7\u63d0\u5347 CPU \u6838\u5fc3\u6570\u91cf\u63d0\u5347 TPS \u3002\u4e0d\u8981\u52a8\u4e0d\u52a8\u5c31\u4e70 E5 \u7136\u540e\u5361\u4e86\u5c31\u52a0 4 \u6838 8G \u5185\u5b58\uff0c\u66f4\u591a\u4e5f\u6ca1\u7528\u7684\u3002"}),"\n",(0,r.jsx)(i.p,{children:"\u5bf9\u4e8e\u7fa4\u7ec4\u670d\u52a1\u5668\u6765\u8bf4\uff0c\u4e00\u822c\u6838\u5fc3\u6570\u91cf\u90fd\u4f1a\u5360\u7528\u4e0a\uff0c\u4f46\u662f\u5185\u5b58\u53ef\u80fd\u4f1a\u6709\u4e9b\u6349\u6025\uff0c\u5bf9\u4e8e\u6bcf\u4e00\u4e2a\u666e\u901a\u7684\u751f\u5b58\u670d\u6765\u8bf4\u5185\u5b58\u7684\u63a8\u8350\u503c\u4e3a 8G - 20G \u66f4\u591a\u66f4\u5c11\u90fd\u662f\u4e0d\u63a8\u8350\u7684\u3002"}),"\n",(0,r.jsx)(i.admonition,{type:"warning",children:(0,r.jsx)(i.p,{children:"\u5982\u679c\u53d1\u73b0 CPU \u5360\u7528\u548c\u5185\u5b58\u5360\u7528\u90fd\u4e0d\u662f\u5f88\u9ad8\u4f46\u662f\u670d\u52a1\u5668\u5361\u5361\u7684\uff0c\u8bf7\u8003\u8651\u662f\u4e0d\u662f\u670d\u52a1\u5668\u5e26\u5bbd\u53d7\u9650\u5bfc\u81f4\u73a9\u5bb6 ping \u503c\u7a81\u7136\u5347\u9ad8\u7684\u95ee\u9898\u3002\u8bf7\u5206\u6e05\u695a TPS \u4f4e\u5bfc\u81f4\u7684\u5361\u987f\uff0cMSPT\u9ad8\u5bfc\u81f4\u7684\u5361\u987f\uff0c\u5e26\u5bbd\u5360\u6ee1\u5bfc\u81f4\u7684\u5361\u987f\u3002"})}),"\n",(0,r.jsx)(i.h1,{id:"\u7b2c\u516d\u6b65---\u66f4\u6362\u64cd\u4f5c\u7cfb\u7edf",children:"\u7b2c\u516d\u6b65 - \u66f4\u6362\u64cd\u4f5c\u7cfb\u7edf"}),"\n",(0,r.jsx)(i.p,{children:"\u65e0\u8bba\u5728\u6027\u80fd\u8fd8\u662f\u7a33\u5b9a\u6027\uff0c Linux \u90fd\u6bd4 Windows \u66f4\u9002\u5408\u7528\u4e8e\u5f00\u670d\uff0c\u5bf9\u4e8e Linux \u6839\u636e\u81ea\u5df1\u7684\u4f7f\u7528\u7ecf\u9a8c\u9009\u62e9\u5373\u53ef\uff0c\u5982\u679c\u6ca1\u6709\u4f7f\u7528\u7ecf\u9a8c\u53ef\u4ee5\u5148\u4f7f\u7528 Ubuntu \u7b49\u4e3b\u6d41\u7cfb\u7edf\u3002"}),"\n",(0,r.jsxs)(i.p,{children:["\u5982\u679c\u60f3\u8981\u4e86\u89e3\u66f4\u591a\u8bf7\u524d\u5f80\u8fdb\u9636 ",(0,r.jsx)(i.a,{href:"/NitWikit/sundry/advance/Linux/start",children:"Linux \u5f00\u670d\u6559\u7a0b"})]}),"\n",(0,r.jsx)(i.h1,{id:"\u7b2c\u4e03\u6b65---\u6027\u80fd\u5206\u6790",children:"\u7b2c\u4e03\u6b65 - \u6027\u80fd\u5206\u6790"}),"\n",(0,r.jsx)(i.p,{children:(0,r.jsx)(i.strong,{children:"\u201c\u9a6c\u514b\u601d\u4e3b\u4e49\u6d3b\u7684\u7075\u9b42\u5728\u4e8e\u5bf9\u5177\u4f53\u95ee\u9898\u4f5c\u5177\u4f53\u5206\u6790\u3002\u201d - \u5217\u5b81"})}),"\n",(0,r.jsx)(i.p,{children:"\u901a\u7528\u4f18\u5316\u5df2\u7ecf\u5dee\u4e0d\u591a\u505a\u597d\u4e86\uff0c\u800c\u6bcf\u4e2a\u670d\u90fd\u6709\u81ea\u5df1\u5bfc\u81f4\u6ede\u540e\u7684\u56e0\u7d20\uff0c\u53ef\u80fd\u662f\u5b9e\u4f53\u592a\u591a\uff0c\u53ef\u80fd\u662f\u73a9\u5bb6\u673a\u5668\u591a\uff0c\u4e5f\u53ef\u80fd\u662f\u67d0\u4e9b\u63d2\u4ef6\u5199\u7684\u592a\u5c4e..."}),"\n",(0,r.jsx)(i.p,{children:"\u5982\u6b64\uff0c\u90a3\u4e48\u5e94\u8be5\u5982\u4f55\u77e5\u9053\u670d\u52a1\u5668\u4e3a\u4f55\u5361\u987f\u5462\uff1f"}),"\n",(0,r.jsxs)(i.p,{children:["\u5982\u679c\u4f60\u662f\u4e2a\u5b8c\u5b8c\u5168\u5168\u7684\u65b0\u624b\uff0c\u6216\u8005\u61d2\u5f97\u5206\u6790\uff0c\u60f3\u8bf7\u6559\u522b\u4eba\u5206\u6790\u5e94\u8be5\u600e\u4e48\u529e\u5462? \u8bf7\u8f6c\u8df3\u5230 ",(0,r.jsx)(i.a,{href:"/NitWikit/maintenance/optimize/ask-for-help",children:"\u600e\u4e48\u8ba9\u5927\u4f6c\u5e2e\u6211"})]}),"\n",(0,r.jsxs)(i.p,{children:["\u5982\u679c\u4f60\u4e0d\u60f3\u6c42\u52a9\u522b\u4eba\uff0c\u4ea6\u6216\u8005\u4f60\u60f3\u6709\u4e00\u4e9b\u8fdb\u6b65\uff0c\u8bf7\u53c2\u8003 ",(0,r.jsx)(i.a,{href:"/NitWikit/maintenance/optimize/performance-analysis",children:"\u6027\u80fd\u5206\u6790"})]})]})}function h(e={}){const{wrapper:i}={...(0,t.R)(),...e.components};return i?(0,r.jsx)(i,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},28453:(e,i,n)=>{n.d(i,{R:()=>a,x:()=>d});var r=n(96540);const t={},s=r.createContext(t);function a(e){const i=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function d(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),r.createElement(s.Provider,{value:i},e.children)}}}]);