"use strict";(self.webpackChunkWiki=self.webpackChunkWiki||[]).push([["6053"],{51954:function(e,n,i){i.r(n),i.d(n,{metadata:()=>r,contentTitle:()=>l,default:()=>o,assets:()=>a,toc:()=>c,frontMatter:()=>d});var r=JSON.parse('{"id":"process/maintenance/optimize/storage-space-optimization","title":"\u50A8\u5B58\u7A7A\u95F4\u4F18\u5316","description":"\u63D2\u4EF6\u6570\u636E\u4F18\u5316","source":"@site/docs-java/process/maintenance/optimize/storage-space-optimization.md","sourceDirName":"process/maintenance/optimize","slug":"/process/maintenance/optimize/storage-space-optimization","permalink":"/Java/process/maintenance/optimize/storage-space-optimization","draft":false,"unlisted":false,"editUrl":"https://github.com/8aka-Team/NitWikit/tree/main/docs-java/process/maintenance/optimize/storage-space-optimization.md","tags":[],"version":"current","lastUpdatedBy":"lilingfengdev","lastUpdatedAt":1732619997000,"sidebarPosition":4,"frontMatter":{"title":"\u50A8\u5B58\u7A7A\u95F4\u4F18\u5316","sidebar_position":4},"sidebar":"tutorialSidebar","previous":{"title":"\u8C03\u670D\u52A1\u7AEF\u914D\u7F6E","permalink":"/Java/process/maintenance/optimize/go"},"next":{"title":"\u6027\u80FD\u5206\u6790","permalink":"/Java/process/maintenance/optimize/performance-analysis"}}'),s=i("52676"),t=i("79938");let d={title:"\u50A8\u5B58\u7A7A\u95F4\u4F18\u5316",sidebar_position:4},l="\u50A8\u5B58\u7A7A\u95F4\u4F18\u5316",a={},c=[{value:"\u63D2\u4EF6\u6570\u636E\u4F18\u5316",id:"\u63D2\u4EF6\u6570\u636E\u4F18\u5316",level:2},{value:"\u4F7F\u7528\u6570\u636E\u5E93",id:"\u4F7F\u7528\u6570\u636E\u5E93",level:3},{value:"\u5907\u4EFD\u7A7A\u95F4\u4F18\u5316",id:"\u5907\u4EFD\u7A7A\u95F4\u4F18\u5316",level:2},{value:"\u4F7F\u7528\u5907\u4EFD\u63D2\u4EF6\u66FF\u4EE3\u6574\u7AEF\u5907\u4EFD",id:"\u4F7F\u7528\u5907\u4EFD\u63D2\u4EF6\u66FF\u4EE3\u6574\u7AEF\u5907\u4EFD",level:3},{value:"\u5B58\u6863\u5B58\u50A8\u7A7A\u95F4\u4F18\u5316",id:"\u5B58\u6863\u5B58\u50A8\u7A7A\u95F4\u4F18\u5316",level:2},{value:"\u5220\u9664\u8FC7\u65F6\u533A\u5757",id:"\u5220\u9664\u8FC7\u65F6\u533A\u5757",level:3},{value:"\u66F4\u9AD8\u6548\u7684\u50A8\u5B58\u65B9\u5F0F",id:"\u66F4\u9AD8\u6548\u7684\u50A8\u5B58\u65B9\u5F0F",level:3},{value:"Linear",id:"linear",level:4},{value:"\u8F6C\u6362\u533A\u57DF\u683C\u5F0F",id:"\u8F6C\u6362\u533A\u57DF\u683C\u5F0F",level:5},{value:"\u5F00\u542F\u533A\u57DF\u683C\u5F0F",id:"\u5F00\u542F\u533A\u57DF\u683C\u5F0F",level:5},{value:"\u4E0D\u517C\u5BB9\u7684\u63D2\u4EF6",id:"\u4E0D\u517C\u5BB9\u7684\u63D2\u4EF6",level:5},{value:"\u6D4B\u8BD5\u7ED3\u679C",id:"\u6D4B\u8BD5\u7ED3\u679C",level:5},{value:"Slime",id:"slime",level:4},{value:"\u5176\u4ED6",id:"\u5176\u4ED6",level:2}];function h(e){let n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",header:"header",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"\u50A8\u5B58\u7A7A\u95F4\u4F18\u5316",children:"\u50A8\u5B58\u7A7A\u95F4\u4F18\u5316"})}),"\n",(0,s.jsx)(n.h2,{id:"\u63D2\u4EF6\u6570\u636E\u4F18\u5316",children:"\u63D2\u4EF6\u6570\u636E\u4F18\u5316"}),"\n",(0,s.jsxs)(n.p,{children:["\u5BF9\u4E8E ",(0,s.jsx)(n.code,{children:"/plugins"})," \u6587\u4EF6\u5939\u50A8\u5B58\u662F\u5426\u9700\u8981\u8FDB\u884C\u4F18\u5316\u8FD9\u4E2A\u95EE\u9898\uFF0C\u6709\u4E2A\u5F88\u7B80\u5355\u7684\u5224\u65AD\u65B9\u6CD5\u5C31\u662F\u67E5\u770B\u603B\u5360\u7528\uFF0C"]}),"\n",(0,s.jsx)(n.p,{children:"\u5982\u679C\u8D85\u8FC7\u4E86 200 MB \uFF0C\u90A3\u4E48\u5F88\u6709\u53EF\u80FD\u6709\u4E9B\u63D2\u4EF6\u4F7F\u7528\u4E86 Sqlite / yml / zip \u7B49\u65B9\u5F0F\u50A8\u5B58\u4E86\u4E00\u4E9B\u4E1C\u897F\uFF0C"}),"\n",(0,s.jsx)(n.p,{children:"\u5728\u670D\u52A1\u5668\u6709\u4E00\u5B9A\u4EBA\u6570\u7684\u60C5\u51B5\u4E0B\u8FD9\u5E76\u4E0D\u662F\u63A8\u8350\u7684\u50A8\u5B58\u65B9\u5F0F\uFF0C\u5728\u67D0\u4E9B\u60C5\u51B5\u4E0B\u53EF\u80FD\u5BF9\u50A8\u5B58\u7A7A\u95F4\u4F1A\u6709\u4E00\u5B9A\u7684\u5360\u7528\u3002"}),"\n",(0,s.jsx)(n.h3,{id:"\u4F7F\u7528\u6570\u636E\u5E93",children:"\u4F7F\u7528\u6570\u636E\u5E93"}),"\n",(0,s.jsxs)(n.p,{children:["\u5408\u7406\u4F7F\u7528\u6570\u636E\u5E93\u53EF\u4EE5\u964D\u4F4E\u670D\u52A1\u5668\u786C\u76D8\u5360\u7528\u3002\u8BE6\u89C1",(0,s.jsx)(n.a,{href:"https://nitwikit.yizhan.wiki/database",children:"\u6570\u636E\u5E93\u76F8\u5173"})]}),"\n",(0,s.jsx)(n.h2,{id:"\u5907\u4EFD\u7A7A\u95F4\u4F18\u5316",children:"\u5907\u4EFD\u7A7A\u95F4\u4F18\u5316"}),"\n",(0,s.jsx)(n.h3,{id:"\u4F7F\u7528\u5907\u4EFD\u63D2\u4EF6\u66FF\u4EE3\u6574\u7AEF\u5907\u4EFD",children:"\u4F7F\u7528\u5907\u4EFD\u63D2\u4EF6\u66FF\u4EE3\u6574\u7AEF\u5907\u4EFD"}),"\n",(0,s.jsx)(n.p,{children:"\u63A8\u8350\u4E24\u4E2A\u5907\u4EFD\u63D2\u4EF6(\u9AD8\u6548\u7684\u5907\u4EFD\uFF0C\u65E0\u9700\u505C\u670D\u5373\u53EF\u5907\u4EFD)\uFF1A"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"https://www.spigotmc.org/resources/ebackup-simple-and-reliable-backups-for-your-server-supports-ftp-sftp.69917/",children:"ebackup"}),"\n\u53EF\u8BBE\u7F6E\u9ED1\u540D\u5355\u4E0D\u5907\u4EFD\u67D0\u4E9B\u6587\u4EF6\uFF0CFTP \u8FDC\u7A0B\u5907\u4EFD\u652F\u6301"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"https://www.spigotmc.org/resources/server-backup-ingame-dropbox-ftp-backup-1-8-1-20-multithreaded.79320/",children:"serverbackup"}),"\n\u53EF\u652F\u6301\u52A8\u6001\u5907\u4EFD(\u5373\u53EA\u5907\u4EFD\u6700\u8FD1\u53D8\u66F4\u8FC7\u7684\u6587\u4EF6)\uFF0C\u5360\u7528\u7A7A\u95F4\u66F4\u5C0F"]}),"\n",(0,s.jsx)(n.h2,{id:"\u5B58\u6863\u5B58\u50A8\u7A7A\u95F4\u4F18\u5316",children:"\u5B58\u6863\u5B58\u50A8\u7A7A\u95F4\u4F18\u5316"}),"\n",(0,s.jsx)(n.p,{children:"Minecraft \u9ED8\u8BA4\u7684\u533A\u5757\u683C\u5F0F\u662F ANVIL \uFF0C\u4F46\u662F\u8FD9\u4E2A\u533A\u5757\u683C\u5F0F\u6709\u5F88\u591A\u5F0A\u7AEF\uFF0C\u6BD4\u5982\u5B58\u4E86\u4E00\u4E9B\u65E0\u7528\u4FE1\u606F\uFF0C\u4F7F\u7528\u4E86\u5F3A\u5236\u5BF9\u9F50\u7B49\uFF0C"}),"\n",(0,s.jsx)(n.p,{children:"\u4E14\u81F3\u4ECA\u8FD8\u4F7F\u7528\u7740\u53E4\u8001\u7684 zlib \u538B\u7F29\u683C\u5F0F\uFF0C\u6240\u4EE5\u5982\u679C\u786C\u76D8\u5403\u7D27\u65F6\u5019\uFF0C\u53EF\u4EE5\u5C1D\u8BD5\u5BF9\u5176\u8FDB\u884C\u8C03\u6574\u3002"}),"\n",(0,s.jsx)(n.p,{children:"\u6CE8\u610F\uFF0C\u8FD9\u662F\u5F88\u5E95\u5C42\u7684\u4E1C\u897F\uFF0C\u5176\u5B9E\u4E0D\u63A8\u8350\u5728\u975E\u5FC5\u8981\u60C5\u51B5\u4E0B\u8FDB\u884C\u5904\u7406"}),"\n",(0,s.jsx)(n.h3,{id:"\u5220\u9664\u8FC7\u65F6\u533A\u5757",children:"\u5220\u9664\u8FC7\u65F6\u533A\u5757"}),"\n",(0,s.jsx)(n.p,{children:"\u6709\u4E00\u4E2A\u63D2\u4EF6\u53EF\u4EE5\u505A\u5230\uFF0C\u4F46\u662F\u5FD8\u4E86\u540D\u5B57"}),"\n",(0,s.jsx)(n.p,{children:"TODO"}),"\n",(0,s.jsx)(n.h3,{id:"\u66F4\u9AD8\u6548\u7684\u50A8\u5B58\u65B9\u5F0F",children:"\u66F4\u9AD8\u6548\u7684\u50A8\u5B58\u65B9\u5F0F"}),"\n",(0,s.jsx)(n.h4,{id:"linear",children:"Linear"}),"\n",(0,s.jsxs)(n.admonition,{type:"danger",children:[(0,s.jsx)(n.p,{children:"Linear\u4E0D\u9002\u5408\u73A9\u5BB6\u57FA\u6570\u975E\u5E38\u5927/\u670D\u52A1\u5668\u7ECF\u5E38\u6EDE\u540E/\u538B\u7F29\u6BD4\u8F83\u5927(\u63A8\u8350\u9ED8\u8BA41-5)/ CPU \u6838\u5FC3\u6570\u76EE\u5C0F/\u670D\u52A1\u5668\u786C\u76D8\u7A7A\u95F4\u8DB3\u591F\u5927\u7684\u670D\u52A1\u5668\u3002"}),(0,s.jsx)(n.p,{children:"\u6362\u53E5\u8BDD\u6765\u8BF4\uFF0C\u53EA\u6709\u73A9\u5BB6\u5E76\u4E0D\u591A\u4F46\u9700\u8981\u8F83\u5927\u7684\u5730\u56FE\u4E14 VPS \u9ED8\u8BA4\u7ED9\u7684\u786C\u76D8\u8F83\u5C0F\u65F6\u624D\u5E94\u8BE5\u8003\u8651\u6B64\u683C\u5F0F\u3002"}),(0,s.jsxs)(n.p,{children:["\u5982\u679C\u5F3A\u884C\u5728\u4EE5\u4E0A\u4E0D\u9002\u5408\u4F7F\u7528 Linear \u7684\u670D\u52A1\u5668\u4F7F\u7528\u65F6\u53EF\u80FD\u4F1A\u51FA\u73B0 ",(0,s.jsx)(n.strong,{children:"\u5C40\u90E8\u5927\u89C4\u6A21\u56DE\u6863"})," \u7684\u60C5\u51B5\uFF0C\u8BF7\u6CE8\u610F\u3002"]}),(0,s.jsx)(n.p,{children:"\u8FD9\u5E94\u8BE5\u662F\u6700\u540E\u624D\u5E94\u8BE5\u8003\u8651\u7684\u65B9\u6848\u3002"})]}),"\n",(0,s.jsx)(n.p,{children:"\u6B64\u683C\u5F0F\u662F\u7531\u8457\u540D\u7684 Xymb \u5927\u4F6C\u5F00\u53D1\uFF0C\u76F8\u6BD4\u4E8E ANVIL \uFF0C\u53EF\u4EE5\u8282\u7701\u5DE8\u5927\u7684\u7A7A\u95F4"}),"\n",(0,s.jsx)(n.p,{children:"\u4E3B\u4E16\u754C\u53EF\u4EE5\u8282\u7701\u5927\u7EA6 50% \u7684\u7A7A\u95F4\uFF0C\u672B\u5730\u5927\u7EA6\u4E3A 90% \uFF0C\u4E14\u4F7F\u7528\u73B0\u4EE3\u7684 zstd \u538B\u7F29\uFF0C\u53EF\u4EE5\u83B7\u5F97\u66F4\u5FEB\u7684\u52A0\u8F7D\u548C\u4FDD\u5B58\u901F\u5EA6"}),"\n",(0,s.jsx)(n.h5,{id:"\u8F6C\u6362\u533A\u57DF\u683C\u5F0F",children:"\u8F6C\u6362\u533A\u57DF\u683C\u5F0F"}),"\n",(0,s.jsx)(n.p,{children:"\u4F7F\u7528\u4E4B\u524D\u4F60\u9700\u8981\u5C06 ANVIL \u8F6C\u6362\u6210 Linear \u533A\u57DF\u683C\u5F0F\uFF0C\u5982\u679C\u4F60\u4F7F\u7528\u7684\u662F Leaves \uFF0C\u4F60\u53EF\u4EE5\u5728\u670D\u52A1\u7AEF\u5185\u90E8\u81EA\u52A8\u8F6C\u6362\u3002"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"https://github.com/xymb-endcrystalme/LinearRegionFileFormatTools",children:"\u8F6C\u6362\u5DE5\u5177"})," \uFF0C\u8F6C\u6362\u975E\u5E38\u7B80\u5355\u4F60\u53EA\u9700\u8981\u770B\u7740\u6559\u7A0B\u505A\u5C31\u884C(\u8BB0\u5F97\u505A\u5907\u4EFD)"]}),"\n",(0,s.jsx)(n.h5,{id:"\u5F00\u542F\u533A\u57DF\u683C\u5F0F",children:"\u5F00\u542F\u533A\u57DF\u683C\u5F0F"}),"\n",(0,s.jsx)(n.p,{children:"\u76EE\u524D\uFF0C\u652F\u6301\u7EBF\u6027\u533A\u57DF\u683C\u5F0F\u7684\u4EC5\u6709 LinearPurpur \uFF0C LinearPaper \uFF0C Leaves \uFF0C Leaf \uFF0C Kaiiju (\u8FD8\u6709\u4E00\u5806Fork)\uFF0C"}),"\n",(0,s.jsx)(n.p,{children:"\u5F00\u542F\u6559\u7A0B\u4E0D\u591A\u8BF4\uFF0C\u4F60\u53EA\u9700\u8981\u67E5\u770B Wiki \u5C31\u884C\u3002"}),"\n",(0,s.jsx)(n.h5,{id:"\u4E0D\u517C\u5BB9\u7684\u63D2\u4EF6",children:"\u4E0D\u517C\u5BB9\u7684\u63D2\u4EF6"}),"\n",(0,s.jsx)(n.p,{children:"ServerBackup \u4E00\u6B3E\u5907\u4EFD\u63D2\u4EF6\uFF0C\u4F1A\u7531\u4E8E\u627E\u4E0D\u5230mca\u6587\u4EF6\u62A5\u9519\u3002\n\u76EE\u524D\u5DF2\u77E5\u4E0D\u517C\u5BB9\u7EBF\u6027\u533A\u57DF\u7684\u683C\u5F0F\u7684\u63D2\u4EF6\u6781\u5C11\u65E0\u6BD4\uFF0C\u5DF2\u77E5\u7684\u6709\u5927\u90E8\u5206\u5728\u7EBF\u7F51\u9875\u5730\u56FE\u6D4F\u89C8\u7A0B\u5E8F\uFF0C\u4EE5\u53CAResidence\u90E8\u5206\u4E0D\u517C\u5BB9(\u611F\u8C22z\u5927\u795E\u7684\u4F18\u96C5\u4EE3\u7801\uFF0C\u5F53\u4F20\u9001\u5230\u4E00\u4E2A\u672A\u52A0\u8F7D\u533A\u5757\u7684\u9886\u5730\u65F6\u4F1A\u5D29\u6E83)"}),"\n",(0,s.jsx)(n.h5,{id:"\u6D4B\u8BD5\u7ED3\u679C",children:"\u6D4B\u8BD5\u7ED3\u679C"}),"\n",(0,s.jsx)(n.p,{children:"\u611F\u8C22 HaHaWTH \u63D0\u4F9B\u7684\u6D4B\u8BD5\u7ED3\u679C\uFF0C\u6D4B\u8BD5\u5185\u5BB9\u4E3A\u4F7F\u7528 Chunky \u52A0\u8F7D\u534A\u5F84 1000 \u683C\u7684\u65B9\u5757\u5E76\u4FDD\u5B58\uFF0C\u6D4B\u8BD5\u6838\u5FC3\u4E3A Leaf \uFF0C\u5B9E\u9645\u7ED3\u679C\u53EF\u80FD\u4E0E\u6D4B\u8BD5\u7ED3\u679C\u6709\u51FA\u5165"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"\u4E16\u754C"}),(0,s.jsx)(n.th,{children:"ANVIL(\u539F\u7248\u683C\u5F0F)"}),(0,s.jsx)(n.th,{children:"Linear(\u538B\u7F29\u6BD4\u4E3A\u4E00)"}),(0,s.jsx)(n.th,{children:"Linear(\u538B\u7F29\u6BD4\u4E3A\u516D\uFF0C\u9ED8\u8BA4\u538B\u7F29\u6BD4)"}),(0,s.jsx)(n.th,{children:"Linear(\u538B\u7F29\u6BD4\u4E3A22)(\u6700\u5927\u538B\u7F29\u6BD4)"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"\u4E3B\u4E16\u754C"}),(0,s.jsx)(n.td,{children:"192MB"}),(0,s.jsx)(n.td,{children:"142MB"}),(0,s.jsx)(n.td,{children:"117MB"}),(0,s.jsx)(n.td,{children:"92MB"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"\u5730\u72F1"}),(0,s.jsx)(n.td,{children:"118MB"}),(0,s.jsx)(n.td,{children:"70MB"}),(0,s.jsx)(n.td,{children:"60MB"}),(0,s.jsx)(n.td,{children:"46MB"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"\u672B\u5730"}),(0,s.jsx)(n.td,{children:"87MB"}),(0,s.jsx)(n.td,{children:"1.72MB"}),(0,s.jsx)(n.td,{children:"1.2MB"}),(0,s.jsx)(n.td,{children:"914KB"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"\u4FDD\u5B58\u7528\u65F6"}),(0,s.jsx)(n.td,{children:"3m18s"}),(0,s.jsx)(n.td,{children:"3m50s"}),(0,s.jsx)(n.td,{children:"4m44s"}),(0,s.jsx)(n.td,{children:"23m21s"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"\u5185\u5B58\u5360\u7528"}),(0,s.jsx)(n.td,{children:"3GB\u5DE6\u53F3"}),(0,s.jsx)(n.td,{children:"3.1GB"}),(0,s.jsx)(n.td,{children:"3.3GB"}),(0,s.jsx)(n.td,{children:"3.4 ~ 18GB(\u6781\u4E0D\u7A33\u5B9A)"})]})]})]}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsx)(n.p,{children:"\u4E0D\u63A8\u8350\u538B\u7F29\u6BD4\u5F00\u5230\u6700\u5927\uFF0C\u63A8\u8350\u503C\u4E3A 6"})}),"\n",(0,s.jsx)(n.h4,{id:"slime",children:"Slime"}),"\n",(0,s.jsxs)(n.p,{children:["\u8BF7\u67E5\u770B",(0,s.jsx)(n.a,{href:"https://nitwikit.yizhan.wiki/Java/advance/slime-world",children:"Slime \u533A\u57DF\u683C\u5F0F"})]}),"\n",(0,s.jsx)(n.h2,{id:"\u5176\u4ED6",children:"\u5176\u4ED6"}),"\n",(0,s.jsx)(n.p,{children:"1\u3002\u4F7F\u7528\u8F6F\u94FE\u63A5 / \u5FEB\u6377\u65B9\u5F0F\u5171\u4EAB\u591A\u4E2A\u670D\u52A1\u5668\u7684 lib \uFF0CMinecraft \u672C\u4F53\u7B49(\u9664\u975E\u7A7A\u95F4\u975E\u5E38\u5C11\u5426\u5219\u4E0D\u8981\u8FD9\u6837\uFF0C\u540E\u679C\u81EA\u8D1F)\uFF1B"}),"\n",(0,s.jsx)(n.p,{children:"2\u3002\u4F7F\u7528\u6E05\u7406\u8F6F\u4EF6\uFF1B"}),"\n",(0,s.jsx)(n.p,{children:"3\u3002\u91CD\u88C5\u7CFB\u7EDF\uFF0C\u5E76\u6700\u5C0F\u5316\u5B89\u88C5(\u4E0D\u5B89\u88C5\u975E\u5FC5\u8981\u8F6F\u4EF6)\uFF1B"}),"\n",(0,s.jsx)(n.p,{children:"4\u3002\u68C0\u67E5\u662F\u5426\u6709\u591A\u4F59\u7684 Java(\u4E00\u822C\u6765\u8BF4\u5F00\u670D\u4E00\u4E2A\u7248\u672C\u7684 Java \u5373\u53EF)\u3002"}),"\n",(0,s.jsx)(n.admonition,{type:"warning",children:(0,s.jsx)(n.p,{children:"\u9664\u975E\u4F60\u77E5\u9053\u4F60\u5728\u5220\u4EC0\u4E48\u5426\u5219\u8BF7\u5148\u8BF7\u6559\u5927\u4F6C\u80FD\u4E0D\u80FD\u5220\u9664\u6216\u8005\u5148\u5907\u4EFD\uFF0C\u4E0D\u8981\u5220\u4E86\u624D\u53D1\u73B0\u670D\u52A1\u5668\u51FA\u95EE\u9898\u3002"})})]})}function o(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},79938:function(e,n,i){i.d(n,{Z:function(){return l},a:function(){return d}});var r=i(75271);let s={},t=r.createContext(s);function d(e){let n=r.useContext(t);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);