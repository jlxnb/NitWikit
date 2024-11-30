"use strict";(self.webpackChunkWiki=self.webpackChunkWiki||[]).push([["2605"],{99172:function(e,i,r){r.r(i),r.d(i,{metadata:()=>E,contentTitle:()=>t,default:()=>B,assets:()=>o,toc:()=>h,frontMatter:()=>n});var E=JSON.parse('{"id":"process/plugin/WorldManagement/Multiverse","title":"Multiverse","description":"Bukkit https://dev.bukkit.org/projects/multiverse-core","source":"@site/docs-java/process/plugin/WorldManagement/Multiverse.md","sourceDirName":"process/plugin/WorldManagement","slug":"/process/plugin/WorldManagement/Multiverse","permalink":"/Java/process/plugin/WorldManagement/Multiverse","draft":false,"unlisted":false,"editUrl":"https://github.com/8aka-Team/NitWikit/tree/main/docs-java/process/plugin/WorldManagement/Multiverse.md","tags":[],"version":"current","lastUpdatedBy":"lilingfengdev","lastUpdatedAt":1732240545000,"sidebarPosition":3,"frontMatter":{"sidebar_position":3,"sidebar_label":"\u591A\u4E16\u754C - Multiverse"},"sidebar":"tutorialSidebar","previous":{"title":"\u4FDD\u62A4 - WorldGuard","permalink":"/Java/process/plugin/WorldManagement/WorldGuard"},"next":{"title":"\u521B\u4E16\u795E - WorldEdit","permalink":"/Java/process/plugin/WorldManagement/WorldEdit"}}'),l=r("52676"),s=r("79938");let n={sidebar_position:3,sidebar_label:"\u591A\u4E16\u754C - Multiverse"},t="Multiverse",o={},h=[{value:"\u9644\u5C5E",id:"\u9644\u5C5E",level:2},{value:"Multiverse-Core",id:"multiverse-core",level:3},{value:"Multiverse-Portals",id:"multiverse-portals",level:3},{value:"Multiverse-NetherPortals",id:"multiverse-netherportals",level:3},{value:"\u5D29\u670D\u6F0F\u6D1E",id:"\u5D29\u670D\u6F0F\u6D1E",level:2},{value:"\u5E38\u89C1\u95EE\u7B54(FAQ)",id:"\u5E38\u89C1\u95EE\u7B54faq",level:2},{value:"\u8FDB\u5165\u4E16\u754C\u6743\u9650",id:"\u8FDB\u5165\u4E16\u754C\u6743\u9650",level:3},{value:"Multiverse-Core \u63D2\u4EF6\u662F\u4EC0\u4E48\uFF1F",id:"multiverse-core-\u63D2\u4EF6\u662F\u4EC0\u4E48",level:3},{value:"\u4E3A\u4EC0\u4E48\u5728\u63D2\u4EF6\u4F1A\u4EE5\u201C-Core\u201D\u7ED3\u5C3E\uFF1F",id:"\u4E3A\u4EC0\u4E48\u5728\u63D2\u4EF6\u4F1A\u4EE5-core\u7ED3\u5C3E",level:3},{value:"MultiVerse \u5269\u4E0B\u7684\u90E8\u5206\u53D1\u751F\u4E86\u4EC0\u4E48\u5462\uFF1F",id:"multiverse-\u5269\u4E0B\u7684\u90E8\u5206\u53D1\u751F\u4E86\u4EC0\u4E48\u5462",level:3},{value:"\u6211\u4E0D\u80FD\u8BFB\u53D6\u6211\u7684\u7A7A\u5C9B\u4E16\u754C",id:"\u6211\u4E0D\u80FD\u8BFB\u53D6\u6211\u7684\u7A7A\u5C9B\u4E16\u754C",level:3},{value:"\u6709\u80FD\u591F\u5206\u5272\u4E0D\u540C\u4E16\u754C\u7269\u54C1\u680F\u7684\u65B9\u6CD5\u5417\uFF1F",id:"\u6709\u80FD\u591F\u5206\u5272\u4E0D\u540C\u4E16\u754C\u7269\u54C1\u680F\u7684\u65B9\u6CD5\u5417",level:3},{value:"\u5728\u4F7F\u7528 MultiInv \u540E\uFF0C\u67D0\u4E2A\u73A9\u5BB6\u4F1A\u5728\u67D0\u4E2A\u7279\u6B8A\u7684\u4E16\u754C\u4E00\u76F4\u6B7B\u4EA1",id:"\u5728\u4F7F\u7528-multiinv-\u540E\u67D0\u4E2A\u73A9\u5BB6\u4F1A\u5728\u67D0\u4E2A\u7279\u6B8A\u7684\u4E16\u754C\u4E00\u76F4\u6B7B\u4EA1",level:3},{value:"Multiverse \u7684\u6D88\u606F\u63D0\u793A\u56E0\u4E3A\u4E0D\u5B89\u5168\uFF0C\u4E0D\u80FD\u5E26\u6211\u53BB\u67D0\u4E2A\u5730\u65B9\uFF01\u6211\u77E5\u9053\u5B83\u662F\u5B89\u5168\u7684",id:"multiverse-\u7684\u6D88\u606F\u63D0\u793A\u56E0\u4E3A\u4E0D\u5B89\u5168\u4E0D\u80FD\u5E26\u6211\u53BB\u67D0\u4E2A\u5730\u65B9\u6211\u77E5\u9053\u5B83\u662F\u5B89\u5168\u7684",level:3},{value:"\u600E\u4E48\u8BA9 Multiverse \u5904\u7406\u521B\u9020\u6A21\u5F0F \uFF1F",id:"\u600E\u4E48\u8BA9-multiverse-\u5904\u7406\u521B\u9020\u6A21\u5F0F-",level:3},{value:"\u4E3A\u4EC0\u4E48\u4F60\u4E0D\u7528\u7B80\u5355\u4E9B\u7684\u4F20\u9001\u6743\u9650\u5462\uFF1F",id:"\u4E3A\u4EC0\u4E48\u4F60\u4E0D\u7528\u7B80\u5355\u4E9B\u7684\u4F20\u9001\u6743\u9650\u5462",level:3},{value:"\u5F53\u73A9\u5BB6\u9996\u6B21\u767B\u5165\u65F6\uFF0C\u51FA\u751F\u70B9\u7684\u4F4D\u7F6E\u4E0D\u5BF9",id:"\u5F53\u73A9\u5BB6\u9996\u6B21\u767B\u5165\u65F6\u51FA\u751F\u70B9\u7684\u4F4D\u7F6E\u4E0D\u5BF9",level:3},{value:"\u4E3A\u4EC0\u4E48\u6211\u4E0D\u80FD\u8BFB\u53D6\u7248\u672C\u6BD4 Core \u9AD8\u7684\u5176\u4ED6 Multiverse \u63D2\u4EF6\uFF1F",id:"\u4E3A\u4EC0\u4E48\u6211\u4E0D\u80FD\u8BFB\u53D6\u7248\u672C\u6BD4-core-\u9AD8\u7684\u5176\u4ED6-multiverse-\u63D2\u4EF6",level:3},{value:"\u4E3A\u4EC0\u4E48\u6240\u6709\u7684 Multiverse \u7684\u547D\u4EE4\u90FD\u51FA\u9519\u4E86\uFF1F",id:"\u4E3A\u4EC0\u4E48\u6240\u6709\u7684-multiverse-\u7684\u547D\u4EE4\u90FD\u51FA\u9519\u4E86",level:3},{value:"\u5F53\u6211\u5728\u8C03\u6574\u91CD\u751F\u70B9\u7684\u65F6\u5019 Multiverse \u8BA9\u6211\u7684\u670D\u52A1\u5668\u5D29\u6E83\u4E86\uFF01\u5FEB\u505C\u4E0B\u6765",id:"\u5F53\u6211\u5728\u8C03\u6574\u91CD\u751F\u70B9\u7684\u65F6\u5019-multiverse-\u8BA9\u6211\u7684\u670D\u52A1\u5668\u5D29\u6E83\u4E86\u5FEB\u505C\u4E0B\u6765",level:3},{value:"\u534F\u7BA1/OP/\u73A9\u5BB6\u5728\u5207\u6362\u4E16\u754C\u65F6\u6E38\u620F\u6A21\u5F0F\u4E5F\u5207\u6362\u4E86",id:"\u534F\u7BA1op\u73A9\u5BB6\u5728\u5207\u6362\u4E16\u754C\u65F6\u6E38\u620F\u6A21\u5F0F\u4E5F\u5207\u6362\u4E86",level:3},{value:"\u4F60\u80FD\u8BA9\u6BCF\u4E2A\u63D2\u4EF6\u8BBE\u7F6E\u5728\u4E0D\u540C\u4E16\u754C\u7684\u542F\u7528\u7981\u7528\u6216\u5206\u79BB\u914D\u7F6E\u6587\u4EF6\u5417\uFF1F",id:"\u4F60\u80FD\u8BA9\u6BCF\u4E2A\u63D2\u4EF6\u8BBE\u7F6E\u5728\u4E0D\u540C\u4E16\u754C\u7684\u542F\u7528\u7981\u7528\u6216\u5206\u79BB\u914D\u7F6E\u6587\u4EF6\u5417",level:3},{value:"\u6848\u4F8B",id:"\u6848\u4F8B",level:2},{value:"\u4E2D\u6587\u4E16\u754C\u540D",id:"\u4E2D\u6587\u4E16\u754C\u540D",level:3},{value:"\u8BBE\u7F6E\u522B\u540D",id:"\u8BBE\u7F6E\u522B\u540D",level:3},{value:"\u4F7F\u7528\u522B\u540D",id:"\u4F7F\u7528\u522B\u540D",level:3}];function d(e){let i={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(i.header,{children:(0,l.jsx)(i.h1,{id:"multiverse",children:"Multiverse"})}),"\n",(0,l.jsxs)(i.admonition,{type:"info",children:[(0,l.jsxs)(i.p,{children:[(0,l.jsx)(i.code,{children:"Bukkit"})," ",(0,l.jsx)(i.a,{href:"https://dev.bukkit.org/projects/multiverse-core",children:"https://dev.bukkit.org/projects/multiverse-core"})]}),(0,l.jsxs)(i.p,{children:[(0,l.jsx)(i.code,{children:"SpigotMC"})," ",(0,l.jsx)(i.a,{href:"https://www.spigotmc.org/resources/.390/",children:"https://www.spigotmc.org/resources/.390/"})]}),(0,l.jsxs)(i.p,{children:[(0,l.jsx)(i.code,{children:"PaperMC"})," ",(0,l.jsx)(i.a,{href:"https://hangar.papermc.io/Multiverse/Multiverse-Core",children:"https://hangar.papermc.io/Multiverse/Multiverse-Core"})]}),(0,l.jsxs)(i.p,{children:[(0,l.jsx)(i.code,{children:"Modrinth"})," ",(0,l.jsx)(i.a,{href:"https://modrinth.com/plugin/multiverse-core",children:"https://modrinth.com/plugin/multiverse-core"})]}),(0,l.jsxs)(i.p,{children:[(0,l.jsx)(i.code,{children:"MineBBS"})," ",(0,l.jsx)(i.a,{href:"https://www.minebbs.com/resources/.8889",children:"https://www.minebbs.com/resources/.8889"})]}),(0,l.jsxs)(i.p,{children:[(0,l.jsx)(i.code,{children:"GitHub"})," ",(0,l.jsx)(i.a,{href:"https://github.com/Multiverse/Multiverse-Core",children:"https://github.com/Multiverse/Multiverse-Core"})]}),(0,l.jsxs)(i.p,{children:[(0,l.jsx)(i.code,{children:"\u6587\u6863"})," ",(0,l.jsx)(i.a,{href:"https://github.com/Multiverse/Multiverse-Core/wiki",children:"https://github.com/Multiverse/Multiverse-Core/wiki"})]}),(0,l.jsxs)(i.p,{children:[(0,l.jsx)(i.code,{children:"\u63D2\u4EF6\u767E\u79D1"})," ",(0,l.jsx)(i.a,{href:"https://mineplugin.org/Multiverse-Core",children:"https://mineplugin.org/Multiverse-Core"})]})]}),"\n",(0,l.jsx)(i.p,{children:"\u8001\u724C\u591A\u4E16\u754C\u7BA1\u7406\u63D2\u4EF6\uFF0C\u53EF\u4EE5\u65B0\u5EFA\uFF0C\u5220\u9664\uFF0C\u5BFC\u5165\u4E16\u754C(\u7EF4\u5EA6)\u7B49"}),"\n",(0,l.jsxs)(i.p,{children:["\u503C\u5F97\u4E00\u63D0\u7684\u662F\uFF0C\u5728 ",(0,l.jsx)(i.a,{href:"https://github.com/Multiverse/Multiverse-Core/releases",children:"GitHub releases"})," \u4E0A\u7684\u7248\u672C\u6BD4\u5728 SpigotMC \u4E0A\u80FD\u4E0B\u8F7D\u5230\u7684\u7248\u672C\u8981\u65B0"]}),"\n",(0,l.jsx)(i.h2,{id:"\u9644\u5C5E",children:"\u9644\u5C5E"}),"\n",(0,l.jsx)(i.h3,{id:"multiverse-core",children:"Multiverse-Core"}),"\n",(0,l.jsxs)(i.p,{children:[(0,l.jsx)(i.a,{href:"https://github.com/Multiverse/Multiverse-Core/wiki",children:"Multiverse-Core"})," \u662F\u57FA\u7840\u63D2\u4EF6\u3002\u4E0B\u9762\u7684\u5176\u5B83\u63D2\u4EF6\u90FD\u5FC5\u987B\u9700\u8981 Core \u3002"]}),"\n",(0,l.jsx)(i.p,{children:"\u672C\u63D2\u4EF6\u80FD\u591F\u8BA9\u4F60\uFF1A"}),"\n",(0,l.jsxs)(i.ul,{children:["\n",(0,l.jsx)(i.li,{children:"\u521B\u5EFA/\u4FEE\u6539/\u5220\u9664\u4E16\u754C"}),"\n",(0,l.jsx)(i.li,{children:"\u4F20\u9001\u5230\u4E16\u754C\u4E2D"}),"\n",(0,l.jsx)(i.li,{children:"\u901A\u8FC7\u6743\u9650\u9650\u5236\u5728\u4E16\u754C\u95F4\u5207\u6362"}),"\n",(0,l.jsx)(i.li,{children:"\u67E5\u770B\u67D0\u4EBA\u5728\u54EA\u4E2A\u4E16\u754C\u4E2D"}),"\n"]}),"\n",(0,l.jsxs)(i.p,{children:["Multiverse-Core_Zeta \u662F Multiverse-Core \u7684 Folia \u517C\u5BB9\u7248\u672C,\u53EF\u4EE5",(0,l.jsx)(i.a,{href:"https://dl.yizhan.wiki/plugins/multiverse-core-4.3.13-zeta_folia-experimental.jar",children:"\u5728\u8FD9\u91CC"}),"\u4E0B\u8F7D"]}),"\n",(0,l.jsx)(i.h3,{id:"multiverse-portals",children:"Multiverse-Portals"}),"\n",(0,l.jsxs)(i.p,{children:[(0,l.jsx)(i.a,{href:"https://github.com/Multiverse/Multiverse-Portals/wiki",children:"Multiverse-Portals"})," \u662F\u7C7B\u4F3C\u4E8E Multiverse 1 \u7C7B\u578B\u7684\u4F20\u9001\u95E8\u3002"]}),"\n",(0,l.jsx)(i.p,{children:"\u5982\u679C\u4F60\u4F7F\u7528\u8FC7\u5B83\u7684\u8BDD\uFF0C\u4F60\u53EF\u80FD\u5F88\u60F3\u8981\u672C\u63D2\u4EF6\u3002"}),"\n",(0,l.jsx)(i.p,{children:"\u5B83\u4EEC\u7684\u5927\u90E8\u5206\u662F\u4E00\u6837\u7684\uFF0C\u53EA\u662F\u6709\u4E00\u4E9B\u65B0\u7279\u6027\u3002"}),"\n",(0,l.jsx)(i.p,{children:"\u672C\u63D2\u4EF6\u80FD\u591F\u8BA9\u4F60\uFF1A"}),"\n",(0,l.jsxs)(i.ul,{children:["\n",(0,l.jsx)(i.li,{children:"\u521B\u5EFA/\u4FEE\u6539/\u5220\u9664 Multiverse \u7C7B\u578B\u7684\u4F20\u9001\u95E8"}),"\n",(0,l.jsx)(i.li,{children:"\u901A\u8FC7\u6743\u9650\u9650\u5236\u4F20\u9001\u95E8\u7684\u4F7F\u7528"}),"\n",(0,l.jsx)(i.li,{children:"\u53EF\u4EE5\u6B65\u884C\u6216\u9A91\u7740\u8F7D\u5177\u5728 Multiverse \u4E16\u754C\u95F4\u5207\u6362"}),"\n"]}),"\n",(0,l.jsx)(i.h3,{id:"multiverse-netherportals",children:"Multiverse-NetherPortals"}),"\n",(0,l.jsxs)(i.p,{children:[(0,l.jsx)(i.a,{href:"https://github.com/Multiverse/Multiverse-NetherPortals/wiki",children:"Multiverse-NetherPortals"})," \u8D77\u5230\u4E86 Multiverse 1 \u63D2\u4EF6\u4E2D splike \u7684\u4F5C\u7528\uFF0C\u4F46\u6539\u5584\u4E86\u8BB8\u591A\u3002"]}),"\n",(0,l.jsx)(i.p,{children:"\u672C\u63D2\u4EF6\u662F\u4E3A\u4E86\u80FD\u591F\u8BA9\u4F60\u4EEC\u6709\u66F4\u52A0\u771F\u5B9E\u7684\u4F53\u9A8C\u800C\u8BBE\u8BA1\uFF0C\u5141\u8BB8\u73A9\u5BB6\u521B\u5EFA\u80FD\u591F\u5E26\u4ED6\u4EEC\u53BB\u6307\u5B9A\u4E16\u754C\u7684\u5730\u72F1\u4F20\u9001\u95E8\u3002"}),"\n",(0,l.jsx)(i.p,{children:"\u6240\u6709\u5728 X \u4E16\u754C\u7684\u4F20\u9001\u95E8\u90FD\u4F1A\u53BB Y \u4E16\u754C\uFF0C\u4F46\u662F\u8FD9\u53EF\u4EE5\u5728\u6E38\u620F\u4E2D\u914D\u7F6E\u3002"}),"\n",(0,l.jsx)(i.p,{children:"\u672C\u63D2\u4EF6\u80FD\u591F\u8BA9\u4F60\uFF1A"}),"\n",(0,l.jsxs)(i.ul,{children:["\n",(0,l.jsx)(i.li,{children:"\u81EA\u5B9A\u4E49\u67D0\u4E2A\u4E16\u754C\u4E2D\u7684\u5730\u72F1\u4F20\u9001\u95E8\u6307\u5411\u54EA\u4E2A\u4E16\u754C"}),"\n",(0,l.jsx)(i.li,{children:"\u81EA\u52A8\u8FDE\u63A5\u6709\u7279\u6B8A\u547D\u540D\u6A21\u578B\u7684\u4E16\u754C(\u5982 WORLD \u548C WORLD_nether)"}),"\n"]}),"\n",(0,l.jsxs)(i.p,{children:["\u53D6\u81EA ",(0,l.jsx)(i.a,{href:"https://mineplugin.org/Multiverse-Core#%E9%99%84%E5%B1%9E%E6%8F%92%E4%BB%B6",children:"\u63D2\u4EF6\u767E\u79D1 | Multiverse-Core#\u9644\u5C5E\u63D2\u4EF6"})]}),"\n",(0,l.jsx)(i.h2,{id:"\u5D29\u670D\u6F0F\u6D1E",children:"\u5D29\u670D\u6F0F\u6D1E"}),"\n",(0,l.jsxs)(i.blockquote,{children:["\n",(0,l.jsx)(i.p,{children:"Fix issue where special chars cause PatternSyntaxException leading to a server crash."}),"\n"]}),"\n",(0,l.jsxs)(i.p,{children:["Multiverse-Core ",(0,l.jsx)(i.a,{href:"https://www.spigotmc.org/resources/multiverse-core.390/update?update=424085",children:"4.3.1"})," \u7248\u672C\u5DF2\u7ECF\u4FEE\u590D\u6B64\u95EE\u9898\uFF0C\u8BF7\u66F4\u65B0\u5230\u6700\u65B0\u7248"]}),"\n",(0,l.jsx)(i.p,{children:"\u5982\u679C\u4F60\u56E0\u4E3A\u67D0\u4E9B\u539F\u56E0\u4E0D\u80FD\u66F4\u65B0\u5230\u6700\u65B0\u7248\uFF0C\u53EF\u4EE5\u4F7F\u7528\u4FEE\u590D\u8865\u4E01"}),"\n",(0,l.jsx)(i.p,{children:"\u8865\u4E01(\u53EA\u9700\u5B89\u88C5\u5176\u4E2D\u4E00\u4E2A)\uFF1A"}),"\n",(0,l.jsxs)(i.ul,{children:["\n",(0,l.jsx)(i.li,{children:(0,l.jsx)(i.a,{href:"https://www.spigotmc.org/resources/.96390",children:"Multiverse-Patches"})}),"\n",(0,l.jsx)(i.li,{children:(0,l.jsx)(i.a,{href:"https://www.spigotmc.org/resources/.70218",children:"Multiverse-Core Fix"})}),"\n"]}),"\n",(0,l.jsx)(i.h2,{id:"\u5E38\u89C1\u95EE\u7B54faq",children:"\u5E38\u89C1\u95EE\u7B54(FAQ)"}),"\n",(0,l.jsx)(i.admonition,{type:"warning",children:(0,l.jsx)(i.p,{children:"\u6B64\u90E8\u5206\u6765\u81EA\u63D2\u4EF6\u767E\u79D1"})}),"\n",(0,l.jsx)(i.h3,{id:"\u8FDB\u5165\u4E16\u754C\u6743\u9650",children:"\u8FDB\u5165\u4E16\u754C\u6743\u9650"}),"\n",(0,l.jsx)(i.p,{children:(0,l.jsx)(i.a,{href:"https://mineplugin.org/Multiverse-Core#Multiverse_%E8%BF%9B%E5%85%A5%E4%B8%96%E7%95%8C%E6%9D%83%E9%99%90",children:"https://mineplugin.org/Multiverse-Core#Multiverse_%E8%BF%9B%E5%85%A5%E4%B8%96%E7%95%8C%E6%9D%83%E9%99%90"})}),"\n",(0,l.jsx)(i.h3,{id:"multiverse-core-\u63D2\u4EF6\u662F\u4EC0\u4E48",children:"Multiverse-Core \u63D2\u4EF6\u662F\u4EC0\u4E48\uFF1F"}),"\n",(0,l.jsx)(i.p,{children:(0,l.jsx)(i.a,{href:"https://mineplugin.org/Multiverse-Core#Multiverse-Core_%E6%8F%92%E4%BB%B6%E6%98%AF%E4%BB%80%E4%B9%88%EF%BC%9F",children:"https://mineplugin.org/Multiverse-Core#Multiverse-Core_%E6%8F%92%E4%BB%B6%E6%98%AF%E4%BB%80%E4%B9%88%EF%BC%9F"})}),"\n",(0,l.jsx)(i.h3,{id:"\u4E3A\u4EC0\u4E48\u5728\u63D2\u4EF6\u4F1A\u4EE5-core\u7ED3\u5C3E",children:"\u4E3A\u4EC0\u4E48\u5728\u63D2\u4EF6\u4F1A\u4EE5\u201C-Core\u201D\u7ED3\u5C3E\uFF1F"}),"\n",(0,l.jsx)(i.p,{children:(0,l.jsx)(i.a,{href:"https://mineplugin.org/Multiverse-Core#%E4%B8%BA%E4%BB%80%E4%B9%88%E5%9C%A8%E6%8F%92%E4%BB%B6%E4%BC%9A%E4%BB%A5%E2%80%9C-Core%E2%80%9D%E7%BB%93%E5%B0%BE%EF%BC%9F",children:"https://mineplugin.org/Multiverse-Core#%E4%B8%BA%E4%BB%80%E4%B9%88%E5%9C%A8%E6%8F%92%E4%BB%B6%E4%BC%9A%E4%BB%A5%E2%80%9C-Core%E2%80%9D%E7%BB%93%E5%B0%BE%EF%BC%9F"})}),"\n",(0,l.jsx)(i.h3,{id:"multiverse-\u5269\u4E0B\u7684\u90E8\u5206\u53D1\u751F\u4E86\u4EC0\u4E48\u5462",children:"MultiVerse \u5269\u4E0B\u7684\u90E8\u5206\u53D1\u751F\u4E86\u4EC0\u4E48\u5462\uFF1F"}),"\n",(0,l.jsx)(i.p,{children:(0,l.jsx)(i.a,{href:"https://mineplugin.org/Multiverse-Core#MultiVerse_%E5%89%A9%E4%B8%8B%E7%9A%84%E9%83%A8%E5%88%86%E5%8F%91%E7%94%9F%E4%BA%86%E4%BB%80%E4%B9%88%E5%91%A2%EF%BC%9F",children:"https://mineplugin.org/Multiverse-Core#MultiVerse_%E5%89%A9%E4%B8%8B%E7%9A%84%E9%83%A8%E5%88%86%E5%8F%91%E7%94%9F%E4%BA%86%E4%BB%80%E4%B9%88%E5%91%A2%EF%BC%9F"})}),"\n",(0,l.jsx)(i.h3,{id:"\u6211\u4E0D\u80FD\u8BFB\u53D6\u6211\u7684\u7A7A\u5C9B\u4E16\u754C",children:"\u6211\u4E0D\u80FD\u8BFB\u53D6\u6211\u7684\u7A7A\u5C9B\u4E16\u754C"}),"\n",(0,l.jsx)(i.p,{children:(0,l.jsx)(i.a,{href:"https://mineplugin.org/Multiverse-Core#%E6%88%91%E4%B8%8D%E8%83%BD%E8%AF%BB%E5%8F%96%E6%88%91%E7%9A%84%E7%A9%BA%E5%B2%9B%E4%B8%96%E7%95%8C%EF%BC%81",children:"https://mineplugin.org/Multiverse-Core#%E6%88%91%E4%B8%8D%E8%83%BD%E8%AF%BB%E5%8F%96%E6%88%91%E7%9A%84%E7%A9%BA%E5%B2%9B%E4%B8%96%E7%95%8C%EF%BC%81"})}),"\n",(0,l.jsx)(i.h3,{id:"\u6709\u80FD\u591F\u5206\u5272\u4E0D\u540C\u4E16\u754C\u7269\u54C1\u680F\u7684\u65B9\u6CD5\u5417",children:"\u6709\u80FD\u591F\u5206\u5272\u4E0D\u540C\u4E16\u754C\u7269\u54C1\u680F\u7684\u65B9\u6CD5\u5417\uFF1F"}),"\n",(0,l.jsx)(i.p,{children:(0,l.jsx)(i.a,{href:"https://mineplugin.org/Multiverse-Core#%E6%9C%89%E8%83%BD%E5%A4%9F%E5%88%86%E5%89%B2%E4%B8%8D%E5%90%8C%E4%B8%96%E7%95%8C%E7%89%A9%E5%93%81%E6%A0%8F%E7%9A%84%E6%96%B9%E6%B3%95%E5%90%97%EF%BC%9F",children:"https://mineplugin.org/Multiverse-Core#%E6%9C%89%E8%83%BD%E5%A4%9F%E5%88%86%E5%89%B2%E4%B8%8D%E5%90%8C%E4%B8%96%E7%95%8C%E7%89%A9%E5%93%81%E6%A0%8F%E7%9A%84%E6%96%B9%E6%B3%95%E5%90%97%EF%BC%9F"})}),"\n",(0,l.jsx)(i.h3,{id:"\u5728\u4F7F\u7528-multiinv-\u540E\u67D0\u4E2A\u73A9\u5BB6\u4F1A\u5728\u67D0\u4E2A\u7279\u6B8A\u7684\u4E16\u754C\u4E00\u76F4\u6B7B\u4EA1",children:"\u5728\u4F7F\u7528 MultiInv \u540E\uFF0C\u67D0\u4E2A\u73A9\u5BB6\u4F1A\u5728\u67D0\u4E2A\u7279\u6B8A\u7684\u4E16\u754C\u4E00\u76F4\u6B7B\u4EA1"}),"\n",(0,l.jsx)(i.p,{children:(0,l.jsx)(i.a,{href:"https://mineplugin.org/Multiverse-Core#%E5%9C%A8%E4%BD%BF%E7%94%A8_MultiInv_%E5%90%8E%EF%BC%8C%E6%9F%90%E4%B8%AA%E7%8E%A9%E5%AE%B6%E4%BC%9A%E5%9C%A8%E6%9F%90%E4%B8%AA%E7%89%B9%E6%AE%8A%E7%9A%84%E4%B8%96%E7%95%8C%E4%B8%80%E7%9B%B4%E6%AD%BB%E4%BA%A1%EF%BC%81",children:"https://mineplugin.org/Multiverse-Core#%E5%9C%A8%E4%BD%BF%E7%94%A8_MultiInv_%E5%90%8E%EF%BC%8C%E6%9F%90%E4%B8%AA%E7%8E%A9%E5%AE%B6%E4%BC%9A%E5%9C%A8%E6%9F%90%E4%B8%AA%E7%89%B9%E6%AE%8A%E7%9A%84%E4%B8%96%E7%95%8C%E4%B8%80%E7%9B%B4%E6%AD%BB%E4%BA%A1%EF%BC%81"})}),"\n",(0,l.jsx)(i.h3,{id:"multiverse-\u7684\u6D88\u606F\u63D0\u793A\u56E0\u4E3A\u4E0D\u5B89\u5168\u4E0D\u80FD\u5E26\u6211\u53BB\u67D0\u4E2A\u5730\u65B9\u6211\u77E5\u9053\u5B83\u662F\u5B89\u5168\u7684",children:"Multiverse \u7684\u6D88\u606F\u63D0\u793A\u56E0\u4E3A\u4E0D\u5B89\u5168\uFF0C\u4E0D\u80FD\u5E26\u6211\u53BB\u67D0\u4E2A\u5730\u65B9\uFF01\u6211\u77E5\u9053\u5B83\u662F\u5B89\u5168\u7684"}),"\n",(0,l.jsx)(i.p,{children:(0,l.jsx)(i.a,{href:"https://mineplugin.org/Multiverse-Core#Multiverse_%E7%9A%84%E6%B6%88%E6%81%AF%E6%8F%90%E7%A4%BA%E5%9B%A0%E4%B8%BA%E4%B8%8D%E5%AE%89%E5%85%A8%EF%BC%8C%E4%B8%8D%E8%83%BD%E5%B8%A6%E6%88%91%E5%8E%BB%E6%9F%90%E4%B8%AA%E5%9C%B0%E6%96%B9%EF%BC%81%E6%88%91%E7%9F%A5%E9%81%93%E5%AE%83%E6%98%AF%E5%AE%89%E5%85%A8%E7%9A%84%EF%BC%81",children:"https://mineplugin.org/Multiverse-Core#Multiverse_%E7%9A%84%E6%B6%88%E6%81%AF%E6%8F%90%E7%A4%BA%E5%9B%A0%E4%B8%BA%E4%B8%8D%E5%AE%89%E5%85%A8%EF%BC%8C%E4%B8%8D%E8%83%BD%E5%B8%A6%E6%88%91%E5%8E%BB%E6%9F%90%E4%B8%AA%E5%9C%B0%E6%96%B9%EF%BC%81%E6%88%91%E7%9F%A5%E9%81%93%E5%AE%83%E6%98%AF%E5%AE%89%E5%85%A8%E7%9A%84%EF%BC%81"})}),"\n",(0,l.jsx)(i.h3,{id:"\u600E\u4E48\u8BA9-multiverse-\u5904\u7406\u521B\u9020\u6A21\u5F0F-",children:"\u600E\u4E48\u8BA9 Multiverse \u5904\u7406\u521B\u9020\u6A21\u5F0F \uFF1F"}),"\n",(0,l.jsx)(i.p,{children:(0,l.jsx)(i.a,{href:"https://mineplugin.org/Multiverse-Core#1.8%EF%BC%9A%E6%80%8E%E4%B9%88%E8%AE%A9_Multiverse_%E5%A4%84%E7%90%86%E5%88%9B%E9%80%A0%E6%A8%A1%E5%BC%8F_%EF%BC%9F",children:"https://mineplugin.org/Multiverse-Core#1.8%EF%BC%9A%E6%80%8E%E4%B9%88%E8%AE%A9_Multiverse_%E5%A4%84%E7%90%86%E5%88%9B%E9%80%A0%E6%A8%A1%E5%BC%8F_%EF%BC%9F"})}),"\n",(0,l.jsx)(i.h3,{id:"\u4E3A\u4EC0\u4E48\u4F60\u4E0D\u7528\u7B80\u5355\u4E9B\u7684\u4F20\u9001\u6743\u9650\u5462",children:"\u4E3A\u4EC0\u4E48\u4F60\u4E0D\u7528\u7B80\u5355\u4E9B\u7684\u4F20\u9001\u6743\u9650\u5462\uFF1F"}),"\n",(0,l.jsx)(i.p,{children:(0,l.jsx)(i.a,{href:"https://mineplugin.org/Multiverse-Core#%E4%B8%BA%E4%BB%80%E4%B9%88%E4%BD%A0%E4%B8%8D%E7%94%A8%E7%AE%80%E5%8D%95%E4%BA%9B%E7%9A%84%E4%BC%A0%E9%80%81%E6%9D%83%E9%99%90%E5%91%A2%EF%BC%9F",children:"https://mineplugin.org/Multiverse-Core#%E4%B8%BA%E4%BB%80%E4%B9%88%E4%BD%A0%E4%B8%8D%E7%94%A8%E7%AE%80%E5%8D%95%E4%BA%9B%E7%9A%84%E4%BC%A0%E9%80%81%E6%9D%83%E9%99%90%E5%91%A2%EF%BC%9F"})}),"\n",(0,l.jsx)(i.h3,{id:"\u5F53\u73A9\u5BB6\u9996\u6B21\u767B\u5165\u65F6\u51FA\u751F\u70B9\u7684\u4F4D\u7F6E\u4E0D\u5BF9",children:"\u5F53\u73A9\u5BB6\u9996\u6B21\u767B\u5165\u65F6\uFF0C\u51FA\u751F\u70B9\u7684\u4F4D\u7F6E\u4E0D\u5BF9"}),"\n",(0,l.jsx)(i.p,{children:(0,l.jsx)(i.a,{href:"https://mineplugin.org/Multiverse-Core#%E5%BD%93%E7%8E%A9%E5%AE%B6%E9%A6%96%E6%AC%A1%E7%99%BB%E5%85%A5%E6%97%B6%EF%BC%8C%E5%87%BA%E7%94%9F%E7%82%B9%E7%9A%84%E4%BD%8D%E7%BD%AE%E4%B8%8D%E5%AF%B9%EF%BC%81",children:"https://mineplugin.org/Multiverse-Core#%E5%BD%93%E7%8E%A9%E5%AE%B6%E9%A6%96%E6%AC%A1%E7%99%BB%E5%85%A5%E6%97%B6%EF%BC%8C%E5%87%BA%E7%94%9F%E7%82%B9%E7%9A%84%E4%BD%8D%E7%BD%AE%E4%B8%8D%E5%AF%B9%EF%BC%81"})}),"\n",(0,l.jsx)(i.h3,{id:"\u4E3A\u4EC0\u4E48\u6211\u4E0D\u80FD\u8BFB\u53D6\u7248\u672C\u6BD4-core-\u9AD8\u7684\u5176\u4ED6-multiverse-\u63D2\u4EF6",children:"\u4E3A\u4EC0\u4E48\u6211\u4E0D\u80FD\u8BFB\u53D6\u7248\u672C\u6BD4 Core \u9AD8\u7684\u5176\u4ED6 Multiverse \u63D2\u4EF6\uFF1F"}),"\n",(0,l.jsx)(i.p,{children:(0,l.jsx)(i.a,{href:"https://mineplugin.org/Multiverse-Core#%E4%B8%BA%E4%BB%80%E4%B9%88%E6%88%91%E4%B8%8D%E8%83%BD%E8%AF%BB%E5%8F%96%E7%89%88%E6%9C%AC%E6%AF%94_Core_%E9%AB%98%E7%9A%84%E5%85%B6%E4%BB%96_Multiverse_%E6%8F%92%E4%BB%B6%EF%BC%9F",children:"https://mineplugin.org/Multiverse-Core#%E4%B8%BA%E4%BB%80%E4%B9%88%E6%88%91%E4%B8%8D%E8%83%BD%E8%AF%BB%E5%8F%96%E7%89%88%E6%9C%AC%E6%AF%94_Core_%E9%AB%98%E7%9A%84%E5%85%B6%E4%BB%96_Multiverse_%E6%8F%92%E4%BB%B6%EF%BC%9F"})}),"\n",(0,l.jsx)(i.h3,{id:"\u4E3A\u4EC0\u4E48\u6240\u6709\u7684-multiverse-\u7684\u547D\u4EE4\u90FD\u51FA\u9519\u4E86",children:"\u4E3A\u4EC0\u4E48\u6240\u6709\u7684 Multiverse \u7684\u547D\u4EE4\u90FD\u51FA\u9519\u4E86\uFF1F"}),"\n",(0,l.jsx)(i.p,{children:(0,l.jsx)(i.a,{href:"https://mineplugin.org/Multiverse-Core#%E4%B8%BA%E4%BB%80%E4%B9%88%E6%89%80%E6%9C%89%E7%9A%84_Multiverse_%E7%9A%84%E5%91%BD%E4%BB%A4%E9%83%BD%E5%87%BA%E9%94%99%E4%BA%86%EF%BC%9F",children:"https://mineplugin.org/Multiverse-Core#%E4%B8%BA%E4%BB%80%E4%B9%88%E6%89%80%E6%9C%89%E7%9A%84_Multiverse_%E7%9A%84%E5%91%BD%E4%BB%A4%E9%83%BD%E5%87%BA%E9%94%99%E4%BA%86%EF%BC%9F"})}),"\n",(0,l.jsx)(i.h3,{id:"\u5F53\u6211\u5728\u8C03\u6574\u91CD\u751F\u70B9\u7684\u65F6\u5019-multiverse-\u8BA9\u6211\u7684\u670D\u52A1\u5668\u5D29\u6E83\u4E86\u5FEB\u505C\u4E0B\u6765",children:"\u5F53\u6211\u5728\u8C03\u6574\u91CD\u751F\u70B9\u7684\u65F6\u5019 Multiverse \u8BA9\u6211\u7684\u670D\u52A1\u5668\u5D29\u6E83\u4E86\uFF01\u5FEB\u505C\u4E0B\u6765"}),"\n",(0,l.jsx)(i.p,{children:(0,l.jsx)(i.a,{href:"https://mineplugin.org/Multiverse-Core#%E5%BD%93%E6%88%91%E5%9C%A8%E8%B0%83%E6%95%B4%E9%87%8D%E7%94%9F%E7%82%B9%E7%9A%84%E6%97%B6%E5%80%99_Multiverse_%E8%AE%A9%E6%88%91%E7%9A%84%E6%9C%8D%E5%8A%A1%E5%99%A8%E5%B4%A9%E6%BA%83%E4%BA%86%EF%BC%81%E5%BF%AB%E5%81%9C%E4%B8%8B%E6%9D%A5%EF%BC%81",children:"https://mineplugin.org/Multiverse-Core#%E5%BD%93%E6%88%91%E5%9C%A8%E8%B0%83%E6%95%B4%E9%87%8D%E7%94%9F%E7%82%B9%E7%9A%84%E6%97%B6%E5%80%99_Multiverse_%E8%AE%A9%E6%88%91%E7%9A%84%E6%9C%8D%E5%8A%A1%E5%99%A8%E5%B4%A9%E6%BA%83%E4%BA%86%EF%BC%81%E5%BF%AB%E5%81%9C%E4%B8%8B%E6%9D%A5%EF%BC%81"})}),"\n",(0,l.jsx)(i.h3,{id:"\u534F\u7BA1op\u73A9\u5BB6\u5728\u5207\u6362\u4E16\u754C\u65F6\u6E38\u620F\u6A21\u5F0F\u4E5F\u5207\u6362\u4E86",children:"\u534F\u7BA1/OP/\u73A9\u5BB6\u5728\u5207\u6362\u4E16\u754C\u65F6\u6E38\u620F\u6A21\u5F0F\u4E5F\u5207\u6362\u4E86"}),"\n",(0,l.jsx)(i.p,{children:(0,l.jsx)(i.a,{href:"https://mineplugin.org/Multiverse-Core#%E5%8D%8F%E7%AE%A1/OP/%E7%8E%A9%E5%AE%B6%E5%9C%A8%E5%88%87%E6%8D%A2%E4%B8%96%E7%95%8C%E6%97%B6%E6%B8%B8%E6%88%8F%E6%A8%A1%E5%BC%8F%E4%B9%9F%E5%88%87%E6%8D%A2%E4%BA%86%EF%BC%81",children:"https://mineplugin.org/Multiverse-Core#%E5%8D%8F%E7%AE%A1/OP/%E7%8E%A9%E5%AE%B6%E5%9C%A8%E5%88%87%E6%8D%A2%E4%B8%96%E7%95%8C%E6%97%B6%E6%B8%B8%E6%88%8F%E6%A8%A1%E5%BC%8F%E4%B9%9F%E5%88%87%E6%8D%A2%E4%BA%86%EF%BC%81"})}),"\n",(0,l.jsx)(i.h3,{id:"\u4F60\u80FD\u8BA9\u6BCF\u4E2A\u63D2\u4EF6\u8BBE\u7F6E\u5728\u4E0D\u540C\u4E16\u754C\u7684\u542F\u7528\u7981\u7528\u6216\u5206\u79BB\u914D\u7F6E\u6587\u4EF6\u5417",children:"\u4F60\u80FD\u8BA9\u6BCF\u4E2A\u63D2\u4EF6\u8BBE\u7F6E\u5728\u4E0D\u540C\u4E16\u754C\u7684\u542F\u7528\u7981\u7528\u6216\u5206\u79BB\u914D\u7F6E\u6587\u4EF6\u5417\uFF1F"}),"\n",(0,l.jsx)(i.p,{children:(0,l.jsx)(i.a,{href:"https://mineplugin.org/Multiverse-Core#%E4%BD%A0%E8%83%BD%E8%AE%A9%E6%AF%8F%E4%B8%AA%E6%8F%92%E4%BB%B6%E8%AE%BE%E7%BD%AE%E5%9C%A8%E4%B8%8D%E5%90%8C%E4%B8%96%E7%95%8C%E7%9A%84%E5%90%AF%E7%94%A8%E7%A6%81%E7%94%A8%E6%88%96%E5%88%86%E7%A6%BB%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6%E5%90%97%EF%BC%9F",children:"https://mineplugin.org/Multiverse-Core#%E4%BD%A0%E8%83%BD%E8%AE%A9%E6%AF%8F%E4%B8%AA%E6%8F%92%E4%BB%B6%E8%AE%BE%E7%BD%AE%E5%9C%A8%E4%B8%8D%E5%90%8C%E4%B8%96%E7%95%8C%E7%9A%84%E5%90%AF%E7%94%A8%E7%A6%81%E7%94%A8%E6%88%96%E5%88%86%E7%A6%BB%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6%E5%90%97%EF%BC%9F"})}),"\n",(0,l.jsx)(i.h2,{id:"\u6848\u4F8B",children:"\u6848\u4F8B"}),"\n",(0,l.jsx)(i.h3,{id:"\u4E2D\u6587\u4E16\u754C\u540D",children:"\u4E2D\u6587\u4E16\u754C\u540D"}),"\n",(0,l.jsx)(i.p,{children:(0,l.jsx)(i.img,{src:r(35370).Z+"",width:"276",height:"31"})}),"\n",(0,l.jsx)(i.p,{children:(0,l.jsx)(i.img,{src:r(14714).Z+"",width:"337",height:"323"})}),"\n",(0,l.jsx)(i.p,{children:"\u6240\u9700\u63D2\u4EF6\uFF1A"}),"\n",(0,l.jsxs)(i.ul,{children:["\n",(0,l.jsx)(i.li,{children:"Multiverse-Core"}),"\n",(0,l.jsx)(i.li,{children:(0,l.jsx)(i.a,{href:"/Java/process/plugin/Front-Plugin/PlaceHolderAPI/outline",children:"PlaceHolderAPI"})}),"\n",(0,l.jsx)(i.li,{children:(0,l.jsx)(i.a,{href:"/Java/chat",children:"\u804A\u5929\u63D2\u4EF6"})}),"\n",(0,l.jsx)(i.li,{children:(0,l.jsx)(i.a,{href:"/Java/Plugins/OtherPlugin/Tab&Scoreboard",children:"TAB\u548C\u8BA1\u5206\u677F\u63D2\u4EF6"})}),"\n",(0,l.jsx)(i.li,{children:"\u5176\u4ED6\u4F60\u60F3\u5C55\u793A\u4E2D\u6587\u4E16\u754C\u540D\u7684\u63D2\u4EF6"}),"\n"]}),"\n",(0,l.jsxs)(i.p,{children:["\u5B89\u88C5 ",(0,l.jsx)(i.a,{href:"/Java/process/plugin/Front-Plugin/PlaceHolderAPI/CommonUsage#multiverse",children:"papi \u7684 Multiverse \u6269\u5C55"})]}),"\n",(0,l.jsx)(i.h3,{id:"\u8BBE\u7F6E\u522B\u540D",children:"\u8BBE\u7F6E\u522B\u540D"}),"\n",(0,l.jsxs)(i.p,{children:["\u7F16\u8F91 ",(0,l.jsx)(i.code,{children:"plugins/Multiverse-Core/worlds.yml"})]}),"\n",(0,l.jsx)(i.p,{children:"\u4E0B\u65B9\u5C55\u793A\u90E8\u5206\u914D\u7F6E"}),"\n",(0,l.jsx)(i.pre,{children:(0,l.jsx)(i.code,{className:"language-yaml",children:"worlds:\n  world:\n    ==: MVWorld\n    hidden: 'false'\n    alias: ''\n    # \u7701\u7565\u90E8\u5206\u5185\u5BB9\n  world_nether:\n    ==: MVWorld\n    hidden: 'false'\n    alias: ''\n    # \u7701\u7565\u90E8\u5206\u5185\u5BB9\n  world_the_end:\n    ==: MVWorld\n    hidden: 'false'\n    alias: ''\n    # \u7701\u7565\u90E8\u5206\u5185\u5BB9\n"})}),"\n",(0,l.jsx)(i.p,{children:"\u89E3\u91CA\uFF1A"}),"\n",(0,l.jsxs)(i.ul,{children:["\n",(0,l.jsx)(i.li,{children:"worlds        - \u63D2\u4EF6\u68C0\u7D22\u7684YAML\u8282\u70B9\uFF0C\u4E0D\u7528\u7BA1"}),"\n",(0,l.jsx)(i.li,{children:"world         - \u4E3B\u4E16\u754C\u7684\u9ED8\u8BA4\u672C\u540D(\u53EF\u5728server.properties\u4FEE\u6539)"}),"\n",(0,l.jsx)(i.li,{children:"world_nether  - \u5730\u72F1\u7684\u9ED8\u8BA4\u672C\u540D"}),"\n",(0,l.jsx)(i.li,{children:"world_the_end - \u672B\u5730\u7684\u9ED8\u8BA4\u672C\u540D"}),"\n",(0,l.jsx)(i.li,{children:"alias         - \u8FD9\u4E2A\u4E16\u754C\u7684\u522B\u540D"}),"\n"]}),"\n",(0,l.jsxs)(i.p,{children:["\u6211\u4EEC\u5728 ",(0,l.jsx)(i.strong,{children:"alias: ''"})," \u4E2D ",(0,l.jsx)(i.code,{children:"''"})," \u586B\u5165\u8FD9\u4E2A\u4E16\u754C\u7684\u522B\u540D"]}),"\n",(0,l.jsx)(i.p,{children:"\u5982\uFF1A"}),"\n",(0,l.jsx)(i.pre,{children:(0,l.jsx)(i.code,{className:"language-yaml",children:"worlds:\n  world:\n    ==: MVWorld\n    hidden: 'false'\n    alias: '\u4E3B\u57CE'\n    # \u7701\u7565\u90E8\u5206\u5185\u5BB9\n"})}),"\n",(0,l.jsxs)(i.p,{children:["\u7136\u540E ",(0,l.jsx)(i.code,{children:"/mv reload"})]}),"\n",(0,l.jsx)(i.h3,{id:"\u4F7F\u7528\u522B\u540D",children:"\u4F7F\u7528\u522B\u540D"}),"\n",(0,l.jsxs)(i.p,{children:["\u5C06\u53D8\u91CF ",(0,l.jsx)(i.code,{children:"%multiverse_world_alias%"})," \u5199\u5230\u4F60\u60F3\u5C55\u793A\u4E16\u754C\u522B\u540D\u7684\u63D2\u4EF6\u914D\u7F6E\u91CC"]}),"\n",(0,l.jsx)(i.p,{children:"\u5F53\u7136\uFF0C\u8FD9\u4E2A\u63D2\u4EF6\u8981\u652F\u6301\u4F7F\u7528papi\u53D8\u91CF"}),"\n",(0,l.jsxs)(i.p,{children:["\u63A5\u7740 ",(0,l.jsx)(i.strong,{children:"\u91CD\u8F7D\u90A3\u4E2A\u63D2\u4EF6"})]})]})}function B(e={}){let{wrapper:i}={...(0,s.a)(),...e.components};return i?(0,l.jsx)(i,{...e,children:(0,l.jsx)(d,{...e})}):d(e)}},35370:function(e,i,r){r.d(i,{Z:function(){return E}});let E="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARQAAAAfCAMAAAARHsI8AAAARVBMVEXPz88fHy8cHCpU+1QVPhUZGSZUVFQAp6gAp6enAACnp6inp6cAqKgAKSmoqKgpKSkVFRUpAACoAAA3N1MyMkw+Pl4tLUSNniEbAAAFEUlEQVRo3sWXC5urKAyGa86wTrFK2xnn///UJXyEm6Donmcn03rBgMnbJGRuNyvDQPTnz8cHkVJ85iPEDthrpWREKas1yFOeEa9ZSxGLn0vxOc8THT7zFwL9OAvX2zFnBYkMbaG27MxSqdwEClzgoY8PvhejMYIjC9aILsm41UleHB2WleI6CaBgLnRTUOWYIhm/zIR6gEQoYoRSzqFrUNKX9kBJzT2GQv8dSheQAGUzKawjapt1E4XKG3Njtm+lzMUDyQw4gnIqUFRDPJTG0iUTKhWGuol7ULLY6ALSC+VosVxZtcXXlGH4x4msPmYmffpVx2Ecct0e82SV+71wje73vfsayop32n3jQy3ShkIay08noPACj9SocfZQ5uFRAjz+ycSrEsEelEq+NaBovVgQJiLQBrKYyCiQEtsWQDGHUJ5O4JNSs6pCGWZnyvPJ+l1Qgkv3++tVYslHoFEzswFF62my/lsQ7KZAyc/gs6Sg3MNTUMbPRGCRhTI6ediv83kXSiOl+6DUzaxCsePeT20CA9KLjwqBAz6LuzQSPIvuhYJyPLM8ZkiAEgdhVwrlfucvH3HHIm7KHR/f75giGIsatuIohoIr1CC5jquwR4AiDkweCpl6+gRgizBxwWPFzl2mqVJXKIOSPPiM6YMImV36xB/rF6FEICwLfvhQWcv0CVG0BG48CqCAU4ZkaN6aUIg4Qh4eyigBnEN5v4fh9eIjm/568TWcfnkher/5LEkEAHwNbTx7v5XiO7waTwBL1uSUCVa6gJCDMfX0ARTLbNEhoexQJX2EmDRvqgpFtmILwwYL0uhXoYBE6khIn7D/GBHYz5Dsh4yNFGBx2iWUtGZVoKDEck0dEygcLAHKUEJhk3FOnWYQaSrxyBaKwBPncY5JAz2k0bYQT0aLm0mT4hJr0nH7wRZFxieSvXGph5JSln8PRaWRkhTaBIr92D9qQykd/X+gaC4VnCKoGFJkTZJQro9B4Qm3ZKZ8k96Hgubic06UEijCZJM+cL6EElMpjkA3QhEk0Wk8k/TZhTJp5/kiOwvaVJ8Xscc15EkJFON0YjmuQFEeSuwmcyhu97GfB22gwN1fgmKjHz81o5HeXfbaSXkiFJqZUHb0MmlDtAdFOSgsmyaWkYxcUB4SL247Znk+06ZLymlMGWyvco0n0rJFZ7FVxy05Op/Dk/G8sTAGpQRlIkJJkmdhXmHf9nWHJHF2IsVtyS0oZOuLrSU2SkZyaC5B4Wj++1BsTTHoVBcPxcZOkT7GN3SLgHJll3QHFKXQ5mPvQUcv+w82HVdlH/z/D7f5LK0GPgISWGJjGT2yJYuW/TpjMCMb95t0viVProYSyopxTIylkkHRvghH/03Sz+xBUQJFzbkgg7iWYOdxXdwlKNQFhU5A8W1qyBNyTJRaUFNks/GtbOG/3tl9viDfmXyVMoeDPxbyelUGv+uLiqulanNiXbyuidOMnWjcs9C/BZ11zVTjTFMx/LZrf7dsoLS9qEI5nNxnX0NrZel3Zr11Bco5OefI19biS0AabqwinUBYbkdMziDe9adtw+YVl4BU/FhT6QRyCOVk2J0M+abBF4kUE79yJmsvEYFSe/nJsDtbBvYMvgQkm3j8jh1jAGVjwLmoO7VZdDC5XvUrcX7syLqVDZR1PRV1fUQuB8rZCr/jbScQD6UN5IjJd7/sGrObBN3y83PiJW0iKZTG87/E5DSUr9NEfvahdBOx8i+BMFVCWCDOTwAAAABJRU5ErkJggg=="},14714:function(e,i,r){r.d(i,{Z:function(){return E}});let E="data:image/png;base64,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"},79938:function(e,i,r){r.d(i,{Z:function(){return t},a:function(){return n}});var E=r(75271);let l={},s=E.createContext(l);function n(e){let i=E.useContext(s);return E.useMemo(function(){return"function"==typeof e?e(i):{...i,...e}},[i,e])}function t(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:n(e.components),E.createElement(s.Provider,{value:i},e.children)}}}]);