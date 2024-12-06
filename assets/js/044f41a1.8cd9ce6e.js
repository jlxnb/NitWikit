"use strict";(self.webpackChunkWiki=self.webpackChunkWiki||[]).push([["4915"],{93882:function(e,r,n){n.r(r),n.d(r,{metadata:()=>s,contentTitle:()=>o,default:()=>h,assets:()=>d,toc:()=>p,frontMatter:()=>i});var s=JSON.parse('{"id":"advance/Linux/frp","title":"\u642D\u5EFA\u5185\u7F51\u7A7F\u900F(Frp)","description":"\u4F7F\u7528\u73B0\u6210\u7684\u5185\u7F51\u7A7F\u900F\u63D0\u4F9B\u5546","source":"@site/docs/advance/Linux/frp.md","sourceDirName":"advance/Linux","slug":"/advance/Linux/frp","permalink":"/advance/Linux/frp","draft":false,"unlisted":false,"editUrl":"https://github.com/8aka-Team/NitWikit/tree/main/docs/advance/Linux/frp.md","tags":[],"version":"current","lastUpdatedBy":"SB-Reborn","lastUpdatedAt":1727754229000,"sidebarPosition":7,"frontMatter":{"title":"\u642D\u5EFA\u5185\u7F51\u7A7F\u900F(Frp)","sidebar_position":7},"sidebar":"tutorialSidebar","previous":{"title":"\u542F\u52A8\u670D\u52A1\u5668","permalink":"/advance/Linux/start"},"next":{"title":"\u81EA\u52A8\u5907\u4EFD\u5B58\u6863","permalink":"/advance/Linux/backup"}}'),l=n("52676"),a=n("69532"),t=n("81961"),c=n("87882");let i={title:"\u642D\u5EFA\u5185\u7F51\u7A7F\u900F(Frp)",sidebar_position:7},o="\u642D\u5EFA\u5185\u7F51\u7A7F\u900F(Frp)",d={},p=[{value:"\u4F7F\u7528\u73B0\u6210\u7684\u5185\u7F51\u7A7F\u900F\u63D0\u4F9B\u5546",id:"\u4F7F\u7528\u73B0\u6210\u7684\u5185\u7F51\u7A7F\u900F\u63D0\u4F9B\u5546",level:2},{value:"\u81EA\u5EFA Frp",id:"\u81EA\u5EFA-frp",level:2},{value:"\u5B89\u88C5 Frp",id:"\u5B89\u88C5-frp",level:3},{value:"\u914D\u7F6E Frp",id:"\u914D\u7F6E-frp",level:3},{value:"\u5F00\u542F Frp",id:"\u5F00\u542F-frp",level:3},{value:"\u914D\u7F6Eproxy protocol",id:"\u914D\u7F6Eproxy-protocol",level:3}];function u(e){let r={a:"a",br:"br",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,a.a)(),...e.components},{Details:n}=r;return!n&&function(e,r){throw Error("Expected "+(r?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(r.header,{children:(0,l.jsx)(r.h1,{id:"\u642D\u5EFA\u5185\u7F51\u7A7F\u900Ffrp",children:"\u642D\u5EFA\u5185\u7F51\u7A7F\u900F(Frp)"})}),"\n",(0,l.jsx)(r.h2,{id:"\u4F7F\u7528\u73B0\u6210\u7684\u5185\u7F51\u7A7F\u900F\u63D0\u4F9B\u5546",children:"\u4F7F\u7528\u73B0\u6210\u7684\u5185\u7F51\u7A7F\u900F\u63D0\u4F9B\u5546"}),"\n",(0,l.jsx)(r.p,{children:"\u7B14\u8005\u65E0\u6CD5\u5728\u8FD9\u91CC\u63A8\u8350\u8FD0\u8425\u5546\uFF0C\u56E0\u4E3A\u76EE\u524D\u5728\u5F00\u670D\u65B9\u9762\u8FD8\u6CA1\u6709\u53D7\u5230\u5E7F\u6CDB\u8BA4\u53EF\u7684\u5185\u7F51\u7A7F\u900F\u8FD0\u8425\u5546\u3002\u4E0D\u540C\u7684\u8FD0\u8425\u5546\u6536\u8D39\u4E0D\u540C\uFF0C\u9650\u91CF\u4E0D\u540C\uFF0C\u8282\u70B9\u4E5F\u4E0D\u540C\u3002\u4E0A\u7F51\u641C\u7D22\u201C\u5185\u7F51\u7A7F\u900F\u201D\u5C31\u80FD\u627E\u5230\u5927\u91CF\u5185\u7F51\u7A7F\u900F\u7684\u8FD0\u8425\u5546\uFF0C\u4F46\u662F\u5728\u9009\u8D2D\u7684\u65F6\u5019\u975E\u5E38\u5EFA\u8BAE\u591A\u5BB6\u5BF9\u6BD4\uFF0C\u627E\u5230\u6700\u9002\u5408\u81EA\u5DF1\u4F7F\u7528\u7684\u8FD0\u8425\u5546\u3002\u4E0B\u9762\u662F\u9009\u62E9\u8FC7\u7A0B\u4E2D\u9664\u4E86\u4EF7\u683C\u5916\u5C24\u5176\u9700\u8981\u6CE8\u610F\u7684\u5730\u65B9\uFF1A"}),"\n",(0,l.jsxs)(r.ol,{children:["\n",(0,l.jsx)(r.li,{children:"\u6B63\u89C4\u6027\uFF1A\u6700\u597D\u80FD\u5728\u8FD0\u8425\u5546\u7684\u5B98\u7F51\u6700\u4E0B\u9762\u770B\u5230\u7F51\u7AD9\u5907\u6848\u4FE1\u606F\uFF0C\u5E76\u4E14\u8FD0\u8425\u5546\u4E5F\u4ECB\u7ECD\u4E86\u81EA\u5DF1\u7684\u516C\u53F8\u540D\u79F0\uFF0C\u516C\u53F8\u540D\u79F0\u4E0A\u7F51\u4E5F\u80FD\u67E5\u5F97\u5230\u3002"}),"\n",(0,l.jsx)(r.li,{children:"\u6D41\u91CF\uFF1A\u5C0F\u670D\u52A1\u5668\u6BCF\u6708\u53EA\u80FD\u7528\u6389\u51E0G\uFF0C\u4F46\u662F\u5927\u670D\u52A1\u5668\u6BCF\u6708\u80FD\u7528\u6389\u51E0\u767EG\u751A\u81F3\u51E0T\u7684\u6D41\u91CF\u3002\u4F60\u9700\u8981\u786E\u5B9A\u5BF9\u6D41\u91CF\u7684\u6536\u8D39\u662F\u5426\u9002\u5408\u81EA\u5DF1\u3002\u5982\u679C\u4E0D\u786E\u5B9A\u591A\u5C11\u6D41\u91CF\u9002\u5408\u81EA\u5DF1\uFF0C\u4F60\u53EF\u4EE5\u5148\u627E\u4E00\u5BB6\u8FD0\u8425\u5546\u7528\u4E00\u4E2A\u6708\uFF0C\u770B\u770B\u81EA\u5DF1\u8981\u82B1\u6389\u4E50\u591A\u5C11\u6D41\u91CF\u3002"}),"\n",(0,l.jsx)(r.li,{children:"\u5E26\u5BBD\uFF1A\u4E00\u4E9B\u5185\u7F51\u7A7F\u900F\u8FD0\u8425\u5546\u53EA\u4F1A\u7ED9\u6BCF\u4E2A\u670D\u52A1\u5668\u51E0M\u7684\u5E26\u5BBD\uFF0C\u5BF9\u4E8E\u5927\u578B\u670D\u52A1\u5668\u5B8C\u5168\u4E0D\u591F\u7528\u3002\u6CE8\u610F\uFF0C\u4E00\u822C\u4E0D\u9650\u6D41\u91CF\u7684\u5185\u7F51\u7A7F\u900F\u8FD0\u8425\u5546\u5E26\u5BBD\u90FD\u5F88\u4F4E\u3002"}),"\n",(0,l.jsx)(r.li,{children:"\u96A7\u9053\u6570\uFF1A\u5185\u7F51\u7A7F\u900F\u6BCF\u6620\u5C04\u4E00\u4E2A\u7AEF\u53E3\u51FA\u53BB\u5C31\u53EB\u4E00\u6761\u96A7\u9053\u3002\u6BCF\u4E2A\u670D\u52A1\u7AEF\u90FD\u53EF\u80FD\u9700\u8981\u5360\u7528\u4E00\u6761\u96A7\u9053\uFF0C\u4F60\u8FD8\u9700\u8981\u4E00\u4E9B\u96A7\u9053\u7528\u6765\u7BA1\u7406\u670D\u52A1\u5668\u7B49\u3002\u4E00\u822C\u65B0\u624B\u6709\u4E00\u4E2A\u96A7\u9053\u5C31\u591F\uFF0C\u4F46\u662F\u540E\u9762\u4F60\u53EF\u80FD\u9700\u8981\u8FDC\u7A0B\u684C\u9762\u7B49\u8981\u7528\u5230\u66F4\u591A\u96A7\u9053\u3002"}),"\n",(0,l.jsx)(r.li,{children:"\u8282\u70B9\uFF1A\u7531\u4E8E\u5185\u7F51\u7A7F\u900F\u662F\u5BA2\u6237\u7AEF\u5411\u8282\u70B9\u53D1\u9001\u6570\u636E\u540E\u8282\u70B9\u518D\u5411\u670D\u52A1\u5668\u53D1\u9001\u6570\u636E\uFF0C\u548C\u5BA2\u6237\u7AEF\u4E0E\u670D\u52A1\u5668\u76F4\u63A5\u901A\u4FE1\u76F8\u6BD4\uFF0C\u6570\u636E\u9700\u8981\u5728\u8282\u70B9\u4E0A\u7ED5\u4E00\u4E0B\uFF0C\u8FD9\u6837\u4E00\u6765\u5EF6\u8FDF\u5230\u6765\u5230\u4E86\u5BA2\u6237\u7AEF\u5230\u8282\u70B9\u7684\u5EF6\u8FDF\u548C\u670D\u52A1\u7AEF\u5230\u8282\u70B9\u5EF6\u8FDF\u7684\u603B\u548C\u3002"}),"\n"]}),"\n",(0,l.jsxs)(n,{children:[(0,l.jsx)("summary",{children:"\u5982\u4F55\u9009\u62E9\u5408\u9002\u7684\u8282\u70B9\uFF1F"}),(0,l.jsx)(r.p,{children:"\u6839\u636E\u4E09\u89D2\u5F62\u4E24\u8FB9\u4E4B\u548C\u5927\u4E8E\u7B2C\u4E09\u8FB9\u7684\u5B9A\u7406\uFF0C\u8282\u70B9\u8DDD\u79BB\u5BA2\u6237\u7AEF\u6216\u670D\u52A1\u7AEF\u8D8A\u8FD1\uFF0C\u6E38\u620F\u5EF6\u8FDF\u5C31\u8D8A\u5C0F\u3002\u7136\u800C\u4F60\u65E0\u6CD5\u786E\u5B9A\u5BA2\u6237\u7AEF\u7684\u5730\u7406\u4F4D\u7F6E\uFF0C\u6BD5\u7ADF\u73A9\u5BB6\u6765\u81EA\u5927\u6C5F\u5357\u5317\u3002\u90A3\u4E48\u53EA\u6709\u7F29\u77ED\u8282\u70B9\u4E0E\u670D\u52A1\u5668\u4E4B\u95F4\u7684\u8DDD\u79BB\uFF0C\u624D\u80FD\u4FDD\u8BC1\u6240\u6709\u73A9\u5BB6\u7684\u5EF6\u8FDF\u90FD\u6700\u4F4E\u3002\u4F8B\u5982\u670D\u52A1\u5668\u4F4D\u4E8E\u6CB3\u5317\uFF0C\u6709\u4E24\u4E2A\u8282\u70B9\u5206\u522B\u4F4D\u4E8E\u5C71\u4E1C\u67A3\u5E84\u548C\u6C5F\u82CF\u5BBF\u8FC1\uFF0C\u6709\u4E24\u4E2A\u73A9\u5BB6\u5206\u522B\u4F4D\u4E8E\u5E7F\u4E1C\u548C\u8FBD\u5B81\uFF0C\u90A3\u4E48\u5F53\u9009\u62E9\u79BB\u670D\u52A1\u5668\u66F4\u8FD1\u7684\u67A3\u5E84\u8282\u70B9\u65F6\uFF0C\u5047\u8BBE\u8FBD\u5B81\u73A9\u5BB6\u5230\u8282\u70B9\u4E3A20ms\uFF0C\u5E7F\u4E1C\u73A9\u5BB6\u5230\u8282\u70B9\u4E3A50ms\uFF0C\u670D\u52A1\u5668\u5230\u8282\u70B9\u4E3A10ms\uFF0C\u90A3\u4E48\u8FBD\u5B81\u73A9\u5BB6\u7684\u6E38\u620F\u5EF6\u8FDF\u5C31\u662F20+10=30ms\uFF0C\u5E7F\u4E1C\u73A9\u5BB6\u7684\u6E38\u620F\u5EF6\u8FDF\u5C31\u662F50ms+10ms=60ms\u3002\u5F53\u9009\u62E9\u79BB\u670D\u52A1\u5668\u66F4\u8FDC\u7684\u5BBF\u8FC1\u8282\u70B9\u65F6\uFF0C\u5047\u8BBE\u8FBD\u5B81\u73A9\u5BB6\u5230\u8282\u70B9\u4E3A40ms\uFF0C\u5E7F\u4E1C\u73A9\u5BB6\u5230\u8282\u70B9\u4E3A30ms\uFF0C\u670D\u52A1\u5668\u5230\u8282\u70B9\u4E3A30ms\uFF0C\u90A3\u4E48\u8FBD\u5B81\u73A9\u5BB6\u7684\u6E38\u620F\u5EF6\u8FDF\u5C31\u662F50+30=70ms\uFF0C\u5E7F\u4E1C\u73A9\u5BB6\u7684\u6E38\u620F\u5EF6\u8FDF\u5C31\u662F40+30=60ms\u3002\u9009\u62E9\u5BBF\u8FC1\u8282\u70B9\u65F6\u867D\u7136\u5E7F\u4E1C\u73A9\u5BB6\u7684\u5EF6\u8FDF\u4E0D\u53D8\uFF0C\u4F46\u662F\u8FBD\u5B81\u73A9\u5BB6\u8FDE\u63A5\u670D\u52A1\u5668\u65F6\uFF0C\u6570\u636E\u4ECE\u66F4\u8FDC\u7684\u5BBF\u8FC1\u7ED5\u4E86\u4E00\u5708\u518D\u56DE\u6765\uFF0C\u5EF6\u8FDF\u9AD8\u4E86\u5F88\u591A\u3002\u56E0\u6B64\u9009\u62E9\u8FD0\u8425\u5546\u65F6\uFF0C\u4F18\u5148\u9009\u62E9\u62E5\u6709\u79BB\u81EA\u5DF1\u8FD1\u7684\u8282\u70B9\u7684\u8FD0\u8425\u5546\u3002"})]}),"\n",(0,l.jsxs)(r.ol,{start:"6",children:["\n",(0,l.jsx)(r.li,{children:"\u5B9E\u540D\u8BA4\u8BC1\uFF1A\u4E3A\u4E86\u5728\u610F\u5916\u4E8B\u6545\u4E2D\u66F4\u597D\u5730\u89C4\u5212\u8D23\u4EFB\uFF0C\u5F88\u591A\u5185\u7F51\u7A7F\u900F\u8FD0\u8425\u5546\u90FD\u8981\u6C42\u5B9E\u540D\u8BA4\u8BC1\u624D\u80FD\u5F00\u59CB\u4F7F\u7528\uFF0C\u6216\u8005\u90E8\u5206\u8282\u70B9\u9700\u8981\u5B9E\u540D\u8BA4\u8BC1\u3002\u8FD8\u6709\u4E00\u4E9B\u5B9E\u540D\u8BA4\u8BC1\u65F6\u8FD8\u8981\u6C42\u7528\u6237\u5FC5\u987B\u6210\u5E74(\u5E74\u6EE118\u5C81)\u3002\u51B5\u4E14\u5B9E\u540D\u8BA4\u8BC1\u670D\u52A1\u63D0\u4F9B\u65B9\u6536\u8D39\uFF0C\u5185\u7F51\u7A7F\u900F\u8FD0\u8425\u5546\u53EF\u80FD\u4F1A\u8BA9\u4F60\u81EA\u884C\u627F\u62C5\u8D39\u7528\uFF0C\u76EE\u524D\u4EF7\u683C\u901A\u5E38\u57281\u5143\u3002\u6240\u4EE5\u5728\u9009\u62E9\u8FD0\u8425\u5546\u65F6\uFF0C\u5982\u679C\u4F60\u672A\u6210\u5E74\uFF0C\u6216\u8005\u6CA1\u6709\u5728\u7EBF\u652F\u4ED8\u7684\u80FD\u529B\uFF0C\u90A3\u4E48\u5728\u4E00\u4E9B\u8FD0\u8425\u5546\u5904\u53EF\u80FD\u4F1A\u53D7\u5230\u9650\u5236\u3002"}),"\n"]}),"\n",(0,l.jsx)(r.h2,{id:"\u81EA\u5EFA-frp",children:"\u81EA\u5EFA Frp"}),"\n",(0,l.jsxs)(r.p,{children:["\u9996\u5148\u4F60\u5F97\u786E\u4FDD\u4F60\u6709\u4E00\u53F0\u6709\u516C\u7F51 IP \u7684\u673A\u5668\uFF0C\u6700\u597D\u662F",(0,l.jsx)(r.strong,{children:"Linux"}),"\u7684\u3002"]}),"\n",(0,l.jsx)(r.p,{children:"\u5982\u679C\u4F60\u7684\u670B\u53CB\u613F\u610F\u628A\u4ED6\u7684\u670D\u52A1\u5668\u4F5C\u4E3A\u8282\u70B9\u63D0\u4F9B\u7ED9\u4F60\uFF0C\u4F60\u8FD8\u9700\u8981\u6CE8\u610F\u914D\u7F6E\u65B9\u6CD5\u5305\u62EC\u4E86\u9700\u8981\u5728\u4ED6\u7684\u670D\u52A1\u5668\u4E0A\u8FDB\u884C\u7684\u64CD\u4F5C\uFF0C\u4F60\u53EF\u80FD\u9700\u8981\u4ED6\u4EA4\u7ED9\u4F60\u670D\u52A1\u5668\u7684\u63A7\u5236\u6743\uFF0C\u6216\u8005\u8BF7\u6C42\u4ED6\u7684\u5E2E\u52A9\u3002"}),"\n",(0,l.jsxs)(r.p,{children:["\u8FD9\u91CC\u5047\u5B9A\u4F60\u6709\u4E00\u53F0\u7B26\u5408\u6761\u4EF6\u7684 Linux \u670D\u52A1\u5668\uFF0C\u5E76\u4E14\u4F60\u5DF2\u7ECF\u53EF\u4EE5\u8FDE\u4E0A\u4F60\u670D\u52A1\u5668\u7684",(0,l.jsx)(r.strong,{children:"SSH"}),"\u3002"]}),"\n","\n",(0,l.jsx)(r.h3,{id:"\u5B89\u88C5-frp",children:"\u5B89\u88C5 Frp"}),"\n",(0,l.jsxs)(r.ol,{children:["\n",(0,l.jsx)(r.li,{children:"\u9996\u5148\u786E\u4FDD\u670D\u52A1\u5668\u6240\u6709\u8F6F\u4EF6\u5305\u662F\u6700\u65B0\u7684\uFF1A"}),"\n"]}),"\n",(0,l.jsx)(r.p,{children:"\u4E0D\u540C\u7684 Linux \u53D1\u884C\u7248\u66F4\u65B0\u65B9\u6CD5\u5927\u540C\u5C0F\u5F02"}),"\n",(0,l.jsxs)(t.Z,{children:[(0,l.jsx)(c.Z,{value:"debian",label:"Debian/Ubuntu Linux",default:!0,children:(0,l.jsx)(r.pre,{children:(0,l.jsx)(r.code,{className:"language-bash",children:"apt-get update && apt-get upgrade -y\n"})})}),(0,l.jsx)(c.Z,{value:"redhat",label:"CentOS/Redhat Linux",children:(0,l.jsx)(r.pre,{children:(0,l.jsx)(r.code,{className:"language-bash",children:"yum -y update\n"})})}),(0,l.jsx)(c.Z,{value:"arch",label:"Arch Linux",children:(0,l.jsx)(r.pre,{children:(0,l.jsx)(r.code,{className:"language-bash",children:"pacman -Syu\n"})})})]}),"\n",(0,l.jsxs)(r.ol,{start:"2",children:["\n",(0,l.jsxs)(r.li,{children:["\u5C06",(0,l.jsx)(r.code,{children:"frp.go"}),"\u8F6F\u4EF6\u5B89\u88C5\u5230\u7CFB\u7EDF\u4E2D\uFF1A"]}),"\n"]}),"\n",(0,l.jsxs)(t.Z,{children:[(0,l.jsxs)(c.Z,{value:"others",label:"deb\u548Crht\u7CFB\u7684 Linux",default:!0,children:[(0,l.jsx)(r.p,{children:"\u624B\u52A8\u4E0B\u8F7Dfrp\u8F6F\u4EF6\u5305\uFF1A"}),(0,l.jsx)(r.pre,{children:(0,l.jsx)(r.code,{className:"language-bash",children:"cd ~\nwget https\uFF1A//github.com/fatedier/frp/releases/download/v0.58.1/frp_0.58.1_linux_amd64.tar.gz\n"})}),(0,l.jsx)(r.p,{children:"\u89E3\u538B\uFF1A"}),(0,l.jsx)(r.pre,{children:(0,l.jsx)(r.code,{className:"language-bash",children:"tar -xzvf frp_0.58.1_linux_amd64.tar.gz\n"})}),(0,l.jsx)(r.p,{children:"\u5B89\u88C5\uFF1A"}),(0,l.jsxs)(t.Z,{children:[(0,l.jsx)(c.Z,{value:"server",label:"\u670D\u52A1\u7AEF",default:!0,children:(0,l.jsx)(r.pre,{children:(0,l.jsx)(r.code,{className:"language-bash",children:"cd ~/frp_0.58.1_linux_amd64/\ncp frps /usr/bin/\nmkdir -p /etc/frp\ncp frps.toml /etc/frp/\n"})})}),(0,l.jsx)(c.Z,{value:"client",label:"\u5BA2\u6237\u7AEF",default:!0,children:(0,l.jsx)(r.pre,{children:(0,l.jsx)(r.code,{className:"language-bash",children:"cd ~/frp_0.58.1_linux_amd64/\ncp frpc /usr/bin/\nmkdir -p /etc/frp\ncp frpc.toml /etc/frp/\n"})})})]})]}),(0,l.jsxs)(c.Z,{value:"arch",label:"Arch Linux",children:[(0,l.jsx)(r.p,{children:"\u5728 Arch Linux \u4E0B\u53EF\u4EE5\u76F4\u63A5\u7528aur\u52A9\u624B\u901A\u8FC7\u5305\u7BA1\u7406\u5668\u5B89\u88C5frp\uFF1A"}),(0,l.jsx)(r.pre,{children:(0,l.jsx)(r.code,{className:"language-bash",children:"# \u4F7F\u7528\u4F60\u7684aur\u52A9\u624B\uFF0C\u8FD9\u91CC\u5217\u4E3E\u4E86paru\u7684\nparu -Sy frps # \u670D\u52A1\u5668\u4E0A\u8FD0\u884C\u8FD9\u4E2A\nparu -Sy frpc # \u5BA2\u6237\u673A\u4E0A\u8FD0\u884C\u8FD9\u4E2A\n"})})]})]}),"\n",(0,l.jsx)(r.h3,{id:"\u914D\u7F6E-frp",children:"\u914D\u7F6E Frp"}),"\n",(0,l.jsxs)(t.Z,{children:[(0,l.jsxs)(c.Z,{value:"server",label:"\u670D\u52A1\u7AEF",default:!0,children:[(0,l.jsx)(r.pre,{children:(0,l.jsx)(r.code,{className:"language-bash",children:"vim /etc/frp/frps.toml\n"})}),(0,l.jsx)(r.p,{children:"\u5199\u5165\u5982\u4E0B\u5185\u5BB9\uFF1A"}),(0,l.jsx)(r.pre,{children:(0,l.jsx)(r.code,{className:"language-toml",children:'bindPort = 7000 # frps\u76D1\u542C\u7684\u7AEF\u53E3\n\nlog.to = "/var/log/frps.log" # \u65E5\u5FD7\u5B58\u653E\u8DEF\u5F84\uFF0C\u4E00\u822C\u4E0D\u7528\u6539\nlog.level = "info" # \u65E5\u5FD7\u7B49\u7EA7\uFF0C\u4E0D\u7528\u6539\nlog.maxDays = 3\n\nauth.token = "example" # \u8EAB\u4EFD\u9A8C\u8BC1\u4EE4\u724C\uFF0Cfrpc\u8981\u4E0Efrps\u4E00\u81F4\n'})})]}),(0,l.jsxs)(c.Z,{value:"client",label:"\u5BA2\u6237\u7AEF",children:[(0,l.jsx)(r.pre,{children:(0,l.jsx)(r.code,{className:"language-bash",children:"vim ~/frp_0.58.1_linux_amd64/frpc.toml\n"})}),(0,l.jsx)(r.p,{children:"\u8F93\u5165\u4EE5\u4E0B\u5185\u5BB9\uFF1A"}),(0,l.jsx)(r.pre,{children:(0,l.jsx)(r.code,{className:"language-toml",children:'serverAddr = "x.x.x.x" # \u4F60frps\u670D\u52A1\u5668\u7684ip\u5730\u5740\nserverPort = 7000 # \u4F60frps\u670D\u52A1\u5F00\u5728\u7684\u7AEF\u53E3\n\nlog.to = "/var/log/frps.log" # \u65E5\u5FD7\u5B58\u653E\u8DEF\u5F84\uFF0C\u4E00\u822C\u4E0D\u7528\u6539\nlog.level = "info" # \u65E5\u5FD7\u7B49\u7EA7\uFF0C\u4E0D\u7528\u6539\nlog.maxDays = 3\n\nauth.token = "example" # \u4EE4\u724C\uFF0C\u4E0E\u516C\u7F51\u670D\u52A1\u7AEF\u4FDD\u6301\u4E00\u81F4\n\n[[proxies]]\nname = "mc je"\ntype = "tcp" # java\u7248\u4F7F\u7528tcp\u534F\u8BAE\u901A\u4FE1\uFF0C\u4E0D\u53EF\u66F4\u6539\nlocalIP = "127.0.0.1" # \u9ED8\u8BA4\u4E0D\u7528\u6539\nlocalPort = 25565 # mc\u670D\u52A1\u7AEF\u5F00\u5728\u54EA\u4E2A\u7AEF\u53E3\uFF1F\nremotePort = 25565 # \u66B4\u9732\u670D\u52A1\u7684\u516C\u7F51\u5165\u53E3\n\n# \u5982\u679C\u4F60\u5F00\u4E86\u4E92\u901A\uFF0C\u8981\u57FA\u5CA9\u652F\u6301\n[[proxies]]\nname = "mc be"\ntype = "udp" # \u57FA\u5CA9\u7248\u4F7F\u7528udp\u534F\u8BAE\u901A\u4FE1\uFF0C\u4E0D\u53EF\u66F4\u6539\nlocalIP = "127.0.0.1"\nlocalPort = 19132\nremotePort = 19132\n'})})]})]}),"\n",(0,l.jsx)(r.h3,{id:"\u5F00\u542F-frp",children:"\u5F00\u542F Frp"}),"\n",(0,l.jsx)(r.p,{children:"\u4E3A\u4E86\u4FDD\u8BC1 frp \u5728\u540E\u53F0\u8FD0\u884C\uFF0C\u8FD9\u91CC\u6709\u4E24\u79CD\u65B9\u6CD5\uFF1A"}),"\n",(0,l.jsxs)(r.ol,{children:["\n",(0,l.jsxs)(r.li,{children:["\n",(0,l.jsx)(r.p,{children:"screen    \u65B9\u4FBF\u5FEB\u6377"}),"\n"]}),"\n",(0,l.jsxs)(r.li,{children:["\n",(0,l.jsx)(r.p,{children:"systemd   \u7701\u5FC3\uFF0C\u6709\u70B9\u590D\u6742"}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(t.Z,{children:[(0,l.jsxs)(c.Z,{value:"screen",label:"Screen",default:!0,children:[(0,l.jsxs)(r.p,{children:["\u786E\u4FDD\u4F60\u7684\u7CFB\u7EDF\u4E0A\u6709",(0,l.jsx)(r.code,{children:"screen"}),"\u5305\uFF0C\u6CA1\u6709\u7684\u8BDD\u5B89\u88C5\u5B83\u4EEC\uFF1A"]}),(0,l.jsxs)(t.Z,{children:[(0,l.jsx)(c.Z,{value:"debian",label:"Debian/Ubuntu Linux",default:!0,children:(0,l.jsx)(r.pre,{children:(0,l.jsx)(r.code,{className:"language-bash",children:"apt-get install screen\n"})})}),(0,l.jsx)(c.Z,{value:"redhat",label:"CentOS/Redhat Linux",children:(0,l.jsx)(r.pre,{children:(0,l.jsx)(r.code,{className:"language-bash",children:"yum install screen\n"})})}),(0,l.jsx)(c.Z,{value:"arch",label:"Arch Linux",children:(0,l.jsx)(r.pre,{children:(0,l.jsx)(r.code,{className:"language-bash",children:"pacman -Sy screen\n"})})})]}),(0,l.jsx)(r.p,{children:"\u542F\u52A8\uFF1A"}),(0,l.jsx)(r.pre,{children:(0,l.jsx)(r.code,{className:"language-bash",children:"screen -dR frps frps # \u670D\u52A1\u7AEF\nscreen -dR frpc frpc # \u5BA2\u6237\u7AEF\n# \u952E\u76D8\u4E0A\u6309Ctrl+A+D\u9000\u51FA\n"})})]}),(0,l.jsxs)(c.Z,{value:"systemd",label:"Systemd",children:[(0,l.jsx)(r.p,{children:"\u5728 Linux \u7CFB\u7EDF\u4E0B\uFF0C\u4F7F\u7528 systemd \u53EF\u4EE5\u65B9\u4FBF\u5730\u63A7\u5236 frps \u670D\u52A1\u7AEF\u7684\u542F\u52A8\u3001\u505C\u6B62\u3001\u914D\u7F6E\u540E\u53F0\u8FD0\u884C\u4EE5\u53CA\u5F00\u673A\u81EA\u542F\u52A8\u3002"}),(0,l.jsxs)(t.Z,{children:[(0,l.jsxs)(c.Z,{value:"server",label:"\u670D\u52A1\u7AEF",default:!0,children:[(0,l.jsxs)(r.ol,{children:["\n",(0,l.jsx)(r.li,{children:"\u521B\u5EFA systemd \u5355\u5143\u6587\u4EF6\uFF1A"}),"\n"]}),(0,l.jsx)(r.pre,{children:(0,l.jsx)(r.code,{className:"language-bash",children:"vim /etc/systemd/system/frps.service\n"})}),(0,l.jsx)(r.pre,{children:(0,l.jsx)(r.code,{className:"language-ini",children:"[Unit]\n# \u670D\u52A1\u540D\u79F0\uFF0C\u53EF\u81EA\u5B9A\u4E49\nDescription = frp server\nAfter = network.target syslog.target\nWants = network.target\n\n[Service]\nType = simple\nExecStart = /usr/bin/frps -c /etc/frp/frps.toml\n\n[Install]\nWantedBy = multi-user.target\n"})}),(0,l.jsxs)(r.ol,{start:"2",children:["\n",(0,l.jsx)(r.li,{children:"\u4F7F\u7528 systemd \u547D\u4EE4\u7BA1\u7406 frps \u670D\u52A1"}),"\n"]}),(0,l.jsx)(r.pre,{children:(0,l.jsx)(r.code,{className:"language-bash",children:"# \u542F\u52A8frp\nsudo systemctl start frps\n# \u505C\u6B62frp\nsudo systemctl stop frps\n# \u91CD\u542Ffrp\nsudo systemctl restart frps\n# \u67E5\u770Bfrp\u72B6\u6001\nsudo systemctl status frps\n"})}),(0,l.jsxs)(r.ol,{start:"3",children:["\n",(0,l.jsx)(r.li,{children:"\u8BBE\u7F6E frps \u5F00\u673A\u81EA\u542F\u52A8"}),"\n"]}),(0,l.jsx)(r.pre,{children:(0,l.jsx)(r.code,{className:"language-bash",children:"sudo systemctl enable frps\n"})})]}),(0,l.jsxs)(c.Z,{value:"client",label:"\u5BA2\u6237\u7AEF",default:!0,children:[(0,l.jsxs)(r.ol,{children:["\n",(0,l.jsx)(r.li,{children:"\u521B\u5EFA systemd \u5355\u5143\u6587\u4EF6\uFF1A"}),"\n"]}),(0,l.jsx)(r.pre,{children:(0,l.jsx)(r.code,{className:"language-bash",children:"vim /etc/systemd/system/frpc.service\n"})}),(0,l.jsx)(r.pre,{children:(0,l.jsx)(r.code,{className:"language-ini",children:"[Unit]\n# \u670D\u52A1\u540D\u79F0\uFF0C\u53EF\u81EA\u5B9A\u4E49\nDescription = frp client\nAfter = network.target syslog.target\nWants = network.target\n\n[Service]\nType = simple\nExecStart = /usr/bin/frpc -c /etc/frp/frpc.toml\n\n[Install]\nWantedBy = multi-user.target\n"})}),(0,l.jsxs)(r.ol,{start:"2",children:["\n",(0,l.jsx)(r.li,{children:"\u4F7F\u7528 systemd \u547D\u4EE4\u7BA1\u7406 frpc \u670D\u52A1"}),"\n"]}),(0,l.jsx)(r.pre,{children:(0,l.jsx)(r.code,{className:"language-bash",children:"# \u542F\u52A8frp\nsudo systemctl start frpc\n# \u505C\u6B62frp\nsudo systemctl stop frpc\n# \u91CD\u542Ffrp\nsudo systemctl restart frpc\n# \u67E5\u770Bfrp\u72B6\u6001\nsudo systemctl status frpc\n"})}),(0,l.jsxs)(r.ol,{start:"3",children:["\n",(0,l.jsx)(r.li,{children:"\u8BBE\u7F6E frpc \u5F00\u673A\u81EA\u542F\u52A8"}),"\n"]}),(0,l.jsx)(r.pre,{children:(0,l.jsx)(r.code,{className:"language-bash",children:"sudo systemctl enable frpc\n"})})]})]})]})]}),"\n",(0,l.jsx)(r.h3,{id:"\u914D\u7F6Eproxy-protocol",children:"\u914D\u7F6Eproxy protocol"}),"\n",(0,l.jsxs)(r.p,{children:["\u5982\u679C\u4F60\u4F7F\u7528\u7684\u662F\u73B0\u6210\u7684\u5185\u7F51\u7A7F\u900F\u8FD0\u8425\u5546\u63D0\u4F9B\u7684\u5185\u7F51\u7A7F\u900F\uFF0C",(0,l.jsx)(r.strong,{children:"\u4E00\u5B9A\u8981\u6839\u636E\u8FD0\u8425\u5546\u63D0\u4F9B\u7684\u6559\u7A0B\u64CD\u4F5C"}),"\u3002\u4EE5\u4E0B\u662F\u4E24\u4E2A\u6700\u6709\u540D\u7684\u5185\u7F51\u7A7F\u900F\u8FD0\u8425\u5546\u7684 proxy protocol \u5F00\u542F\u65B9\u6CD5\u3002",(0,l.jsx)(r.br,{}),"\n",(0,l.jsx)(r.a,{href:"https://doc.natfrp.com/bestpractice/realip.html#proxy-protocol",children:"SakuraFrp"}),(0,l.jsx)(r.br,{}),"\n",(0,l.jsx)(r.a,{href:"https://openfrp.wiki/use/proxy-protocol.html#%E8%8E%B7%E5%8F%96%E8%AE%BF%E9%97%AE%E8%80%85%E7%9A%84%E7%9C%9F%E5%AE%9E-ip",children:"OpenFrp"})]}),"\n",(0,l.jsxs)(r.p,{children:["\u5982\u679C\u662F\u81EA\u5EFA\u5185\u7F51\u7A7F\u900F\uFF0C\u90A3\u4E48\u5982\u679C\u662F ini \u914D\u7F6E\u6587\u4EF6\uFF0C\u5C31\u5728frpc\u96A7\u9053\u5BF9\u5E94\u7684\u914D\u7F6E(\u4F4D\u4E8Efrpc.ini\u4E2D)\u4E2D\u52A0\u5165\u4E00\u884C",(0,l.jsx)(r.code,{children:"proxy_protocol_version ="}),"\uFF0C\u5982\u679C\u662F\u534F\u8BAE v1 \u5C31\u5199\u7B49\u4E8E v1 \uFF0C v2 \u5C31\u5199\u7B49\u4E8E v2 \u3002\u4F8B\u5982\uFF1A"]}),"\n",(0,l.jsx)(r.pre,{children:(0,l.jsx)(r.code,{className:"language-ini",children:"[mc]\ntype = tcp\nlocal_port = 25565\n# \u76EE\u524D\u652F\u6301 v1 \u548C v2 \u4E24\u4E2A\u7248\u672C\u7684 proxy protocol \u534F\u8BAE\u3002\nproxy_protocol_version = v2\n"})}),"\n",(0,l.jsxs)(r.p,{children:["\u5982\u679C\u662F toml \u914D\u7F6E\u6587\u4EF6\uFF0C\u5C31\u5728 frpc \u96A7\u9053\u5BF9\u5E94\u7684\u914D\u7F6E(\u4F4D\u4E8E frpc.toml \u4E2D)\u4E2D\u52A0\u5165\u4E00\u884C",(0,l.jsx)(r.code,{children:"transport.proxyProtocolVersion ="}),"\uFF0C\u5982\u679C\u662F\u534F\u8BAEv1\u5C31\u5199\u7B49\u4E8Ev1\uFF0Cv2\u5C31\u5199\u7B49\u4E8Ev2\u3002\u4F8B\u5982\uFF1A"]}),"\n",(0,l.jsx)(r.pre,{children:(0,l.jsx)(r.code,{className:"language-toml",children:'[[proxies]]\nname = "mc"\ntype = "tcp"\nlocalPort = 25565\ntransport.proxyProtocolVersion = "v2"\n'})}),"\n",(0,l.jsx)(r.p,{children:(0,l.jsx)(r.strong,{children:"frps\u7684frps.ini\u6216frps.toml\u4E0D\u7528\u52A8\u3002"})}),"\n",(0,l.jsx)(r.p,{children:"\u81F3\u4E8E\u5982\u4F55\u9009\u62E9 v1 \u548C v2 \uFF0C\u4F60\u9700\u8981\u6839\u636E\u5BF9\u5E94\u670D\u52A1\u5668\u5BF9 proxy protocol \u7684\u652F\u6301\u60C5\u51B5\u8FDB\u884C\u9009\u62E9\u3002\u4F8B\u5982 Paper \u670D\u52A1\u7AEF\u76EE\u524D\u53EA\u652F\u6301 v2\u3002"})]})}function h(e={}){let{wrapper:r}={...(0,a.a)(),...e.components};return r?(0,l.jsx)(r,{...e,children:(0,l.jsx)(u,{...e})}):u(e)}},87882:function(e,r,n){n.d(r,{Z:()=>t});var s=n("52676");n("75271");var l=n("54461");let a="tabItem_VDfn";function t(e){let{children:r,hidden:n,className:t}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,l.Z)(a,t),hidden:n,children:r})}},81961:function(e,r,n){n.d(r,{Z:()=>b});var s=n("52676"),l=n("75271"),a=n("54461"),t=n("30202"),c=n("3225"),i=n("66278"),o=n("87900"),d=n("90562"),p=n("53723");function u(e){return l.Children.toArray(e).filter(e=>"\n"!==e).map(e=>{if(!e||l.isValidElement(e)&&function(e){let{props:r}=e;return!!r&&"object"==typeof r&&"value"in r}(e))return e;throw Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})?.filter(Boolean)??[]}function h(e){let{value:r,tabValues:n}=e;return n.some(e=>e.value===r)}var x=n("25728");let f="tabList_CrfP",m="tabItem_lvwC";function j(e){let{className:r,block:n,selectedValue:l,selectValue:c,tabValues:i}=e,o=[],{blockElementScrollPositionUntilNextRender:d}=(0,t.o5)(),p=e=>{let r=e.currentTarget,n=i[o.indexOf(r)].value;n!==l&&(d(r),c(n))},u=e=>{let r=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{let n=o.indexOf(e.currentTarget)+1;r=o[n]??o[0];break}case"ArrowLeft":{let n=o.indexOf(e.currentTarget)-1;r=o[n]??o[o.length-1]}}r?.focus()};return(0,s.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":n},r),children:i.map(e=>{let{value:r,label:n,attributes:t}=e;return(0,s.jsx)("li",{role:"tab",tabIndex:l===r?0:-1,"aria-selected":l===r,ref:e=>o.push(e),onKeyDown:u,onClick:p,...t,className:(0,a.Z)("tabs__item",m,t?.className,{"tabs__item--active":l===r}),children:n??r},r)})})}function v(e){let{lazy:r,children:n,selectedValue:t}=e,c=(Array.isArray(n)?n:[n]).filter(Boolean);if(r){let e=c.find(e=>e.props.value===t);return e?(0,l.cloneElement)(e,{className:(0,a.Z)("margin-top--md",e.props.className)}):null}return(0,s.jsx)("div",{className:"margin-top--md",children:c.map((e,r)=>(0,l.cloneElement)(e,{key:r,hidden:e.props.value!==t}))})}function g(e){let r=function(e){let{defaultValue:r,queryString:n=!1,groupId:s}=e,a=function(e){let{values:r,children:n}=e;return(0,l.useMemo)(()=>{let e=r??u(n).map(e=>{let{props:{value:r,label:n,attributes:s,default:l}}=e;return{value:r,label:n,attributes:s,default:l}});return!function(e){let r=(0,d.lx)(e,(e,r)=>e.value===r.value);if(r.length>0)throw Error(`Docusaurus error: Duplicate values "${r.map(e=>e.value).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e},[r,n])}(e),[t,x]=(0,l.useState)(()=>(function(e){let{defaultValue:r,tabValues:n}=e;if(0===n.length)throw Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!h({value:r,tabValues:n}))throw Error(`Docusaurus error: The <Tabs> has a defaultValue "${r}" but none of its children has the corresponding value. Available values are: ${n.map(e=>e.value).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return r}let s=n.find(e=>e.default)??n[0];if(!s)throw Error("Unexpected error: 0 tabValues");return s.value})({defaultValue:r,tabValues:a})),[f,m]=function(e){let{queryString:r=!1,groupId:n}=e,s=(0,c.k6)(),a=function(e){let{queryString:r=!1,groupId:n}=e;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!n)throw Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:r,groupId:n}),t=(0,o._X)(a);return[t,(0,l.useCallback)(e=>{if(!a)return;let r=new URLSearchParams(s.location.search);r.set(a,e),s.replace({...s.location,search:r.toString()})},[a,s])]}({queryString:n,groupId:s}),[j,v]=function(e){var r;let{groupId:n}=e;let s=(r=n)?`docusaurus.tab.${r}`:null,[a,t]=(0,p.Nk)(s);return[a,(0,l.useCallback)(e=>{if(!!s)t.set(e)},[s,t])]}({groupId:s}),g=(()=>{let e=f??j;return h({value:e,tabValues:a})?e:null})();return(0,i.Z)(()=>{g&&x(g)},[g]),{selectedValue:t,selectValue:(0,l.useCallback)(e=>{if(!h({value:e,tabValues:a}))throw Error(`Can't select invalid tab value=${e}`);x(e),m(e),v(e)},[m,v,a]),tabValues:a}}(e);return(0,s.jsxs)("div",{className:(0,a.Z)("tabs-container",f),children:[(0,s.jsx)(j,{...r,...e}),(0,s.jsx)(v,{...r,...e})]})}function b(e){let r=(0,x.Z)();return(0,s.jsx)(g,{...e,children:u(e.children)},String(r))}},69532:function(e,r,n){n.d(r,{Z:function(){return c},a:function(){return t}});var s=n(75271);let l={},a=s.createContext(l);function t(e){let r=s.useContext(a);return s.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:t(e.components),s.createElement(a.Provider,{value:r},e.children)}}}]);