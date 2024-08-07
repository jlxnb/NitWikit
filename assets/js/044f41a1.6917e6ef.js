"use strict";(self.webpackChunkWiki=self.webpackChunkWiki||[]).push([[5854],{69597:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>d,contentTitle:()=>i,default:()=>h,frontMatter:()=>c,metadata:()=>o,toc:()=>u});var s=n(74848),l=n(28453),t=n(11470),a=n(19365);const c={title:"\u642d\u5efa\u5185\u7f51\u7a7f\u900f\uff08Frp\uff09",sidebar_position:7},i="\u642d\u5efa\u5185\u7f51\u7a7f\u900f\uff08Frp\uff09",o={id:"advance/Linux/frp",title:"\u642d\u5efa\u5185\u7f51\u7a7f\u900f\uff08Frp\uff09",description:"\u4f7f\u7528\u73b0\u6210\u7684\u5185\u7f51\u7a7f\u900f\u63d0\u4f9b\u5546",source:"@site/docs/advance/Linux/frp.md",sourceDirName:"advance/Linux",slug:"/advance/Linux/frp",permalink:"/NitWikit/advance/Linux/frp",draft:!1,unlisted:!1,editUrl:"https://github.com/postyizhan/NitWikit/tree/main/docs/advance/Linux/frp.md",tags:[],version:"current",lastUpdatedBy:"\u9a7f\u7ad9",lastUpdatedAt:1723023298e3,sidebarPosition:7,frontMatter:{title:"\u642d\u5efa\u5185\u7f51\u7a7f\u900f\uff08Frp\uff09",sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"\u5f00\u670d",permalink:"/NitWikit/advance/Linux/start"},next:{title:"\u6570\u636e\u5e93\u76f8\u5173",permalink:"/NitWikit/database"}},d={},u=[{value:"\u4f7f\u7528\u73b0\u6210\u7684\u5185\u7f51\u7a7f\u900f\u63d0\u4f9b\u5546",id:"\u4f7f\u7528\u73b0\u6210\u7684\u5185\u7f51\u7a7f\u900f\u63d0\u4f9b\u5546",level:2},{value:"\u81ea\u5efa Frp",id:"\u81ea\u5efa-frp",level:2},{value:"\u5b89\u88c5 Frp",id:"\u5b89\u88c5-frp",level:3},{value:"\u914d\u7f6e Frp",id:"\u914d\u7f6e-frp",level:3},{value:"\u5f00\u542f Frp\uff1a",id:"\u5f00\u542f-frp",level:3},{value:"\u914d\u7f6eproxy protocol",id:"\u914d\u7f6eproxy-protocol",level:3}];function p(e){const r={a:"a",br:"br",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,l.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.h1,{id:"\u642d\u5efa\u5185\u7f51\u7a7f\u900ffrp",children:"\u642d\u5efa\u5185\u7f51\u7a7f\u900f\uff08Frp\uff09"}),"\n",(0,s.jsx)(r.h2,{id:"\u4f7f\u7528\u73b0\u6210\u7684\u5185\u7f51\u7a7f\u900f\u63d0\u4f9b\u5546",children:"\u4f7f\u7528\u73b0\u6210\u7684\u5185\u7f51\u7a7f\u900f\u63d0\u4f9b\u5546"}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.a,{href:"https://www.natfrp.com/?page=panel&module=download",children:"Sakura Frp"})," - \u6ce8\u518c\u767b\u5f55\u540e\u524d\u5f80 ",(0,s.jsx)(r.a,{href:"https://www.natfrp.com/tunnel/download",children:"\u4e0b\u8f7d\u9875\u9762"})," \u4e0b\u8f7d Frp \u542f\u52a8\u5668\u3002\u5b89\u88c5\u8fc7\u7a0b\u53c2\u8003\u5b98\u65b9 ",(0,s.jsx)(r.a,{href:"https://doc.natfrp.com/launcher/usage.html",children:"\u5b89\u88c5\u6559\u7a0b"})," \u5373\u53ef\u3002"]}),"\n",(0,s.jsx)(r.h2,{id:"\u81ea\u5efa-frp",children:"\u81ea\u5efa Frp"}),"\n",(0,s.jsxs)(r.p,{children:["\u9996\u5148\u4f60\u5f97\u786e\u4fdd\u4f60\u6709\u4e00\u53f0\u6709\u516c\u7f51 IP \u7684\u673a\u5668\uff0c\u6700\u597d\u662f",(0,s.jsx)(r.strong,{children:"Linux"}),"\u7684\u3002"]}),"\n",(0,s.jsxs)(r.p,{children:["\u8fd9\u91cc\u5047\u5b9a\u4f60\u6709\u4e00\u53f0\u7b26\u5408\u6761\u4ef6\u7684 Linux \u670d\u52a1\u5668\uff0c\u5e76\u4e14\u4f60\u5df2\u7ecf\u53ef\u4ee5\u8fde\u4e0a\u4f60\u670d\u52a1\u5668\u7684",(0,s.jsx)(r.strong,{children:"SSH"}),"\u3002"]}),"\n","\n",(0,s.jsx)(r.h3,{id:"\u5b89\u88c5-frp",children:"\u5b89\u88c5 Frp"}),"\n",(0,s.jsxs)(r.ol,{children:["\n",(0,s.jsx)(r.li,{children:"\u9996\u5148\u786e\u4fdd\u670d\u52a1\u5668\u6240\u6709\u8f6f\u4ef6\u5305\u662f\u6700\u65b0\u7684\uff1a"}),"\n"]}),"\n",(0,s.jsx)(r.p,{children:"\u4e0d\u540c\u7684 linux \u53d1\u884c\u7248\u66f4\u65b0\u65b9\u6cd5\u5927\u540c\u5c0f\u5f02"}),"\n",(0,s.jsxs)(t.A,{children:[(0,s.jsx)(a.A,{value:"debian",label:"Debian/Ubuntu Linux",default:!0,children:(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-bash",children:"apt-get update && apt-get upgrade -y\n"})})}),(0,s.jsx)(a.A,{value:"redhat",label:"CentOS/Redhat Linux",children:(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-bash",children:"yum -y update\n"})})}),(0,s.jsx)(a.A,{value:"arch",label:"Arch Linux",children:(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-bash",children:"pacman -Syu\n"})})})]}),"\n",(0,s.jsxs)(r.ol,{start:"2",children:["\n",(0,s.jsxs)(r.li,{children:["\u5c06",(0,s.jsx)(r.code,{children:"frp.go"}),"\u8f6f\u4ef6\u5b89\u88c5\u5230\u7cfb\u7edf\u4e2d\uff1a"]}),"\n"]}),"\n",(0,s.jsxs)(t.A,{children:[(0,s.jsxs)(a.A,{value:"others",label:"deb\u548crht\u7cfb\u7684 Linux",default:!0,children:[(0,s.jsx)(r.p,{children:"\u624b\u52a8\u4e0b\u8f7dfrp\u8f6f\u4ef6\u5305\uff1a"}),(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-bash",children:"cd ~\nwget https\uff1a//github.com/fatedier/frp/releases/download/v0.58.1/frp_0.58.1_linux_amd64.tar.gz\n"})}),(0,s.jsx)(r.p,{children:"\u89e3\u538b\uff1a"}),(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-bash",children:"tar -xzvf frp_0.58.1_linux_amd64.tar.gz\n"})}),(0,s.jsx)(r.p,{children:"\u5b89\u88c5\uff1a"}),(0,s.jsxs)(t.A,{children:[(0,s.jsx)(a.A,{value:"server",label:"\u670d\u52a1\u7aef",default:!0,children:(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-bash",children:"cd ~/frp_0.58.1_linux_amd64/\ncp frps /usr/bin/\nmkdir -p /etc/frp\ncp frps.toml /etc/frp/\n"})})}),(0,s.jsx)(a.A,{value:"client",label:"\u5ba2\u6237\u7aef",default:!0,children:(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-bash",children:"cd ~/frp_0.58.1_linux_amd64/\ncp frpc /usr/bin/\nmkdir -p /etc/frp\ncp frpc.toml /etc/frp/\n"})})})]})]}),(0,s.jsxs)(a.A,{value:"arch",label:"Arch Linux",children:[(0,s.jsx)(r.p,{children:"\u5728 Arch Linux \u4e0b\u53ef\u4ee5\u76f4\u63a5\u7528aur\u52a9\u624b\u901a\u8fc7\u5305\u7ba1\u7406\u5668\u5b89\u88c5frp"}),(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-bash",children:"# \u4f7f\u7528\u4f60\u7684aur\u52a9\u624b\uff0c\u8fd9\u91cc\u5217\u4e3e\u4e86paru\u7684\nparu -Sy frps # \u670d\u52a1\u5668\u4e0a\u8fd0\u884c\u8fd9\u4e2a\nparu -Sy frpc # \u5ba2\u6237\u673a\u4e0a\u8fd0\u884c\u8fd9\u4e2a\n"})})]})]}),"\n",(0,s.jsx)(r.h3,{id:"\u914d\u7f6e-frp",children:"\u914d\u7f6e Frp"}),"\n",(0,s.jsxs)(t.A,{children:[(0,s.jsxs)(a.A,{value:"server",label:"\u670d\u52a1\u7aef",default:!0,children:[(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-bash",children:"vim /etc/frp/frps.toml\n"})}),(0,s.jsx)(r.p,{children:"\u5199\u5165\u5982\u4e0b\u5185\u5bb9\uff1a"}),(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-toml",children:'bindPort = 7000 # frps\u76d1\u542c\u7684\u7aef\u53e3\n\nlog.to = "/var/log/frps.log" # \u65e5\u5fd7\u5b58\u653e\u8def\u5f84\uff0c\u4e00\u822c\u4e0d\u7528\u6539\nlog.level = "info" # \u65e5\u5fd7\u7b49\u7ea7\uff0c\u4e0d\u7528\u6539\nlog.maxDays = 3\n\nauth.token = "example" # \u8eab\u4efd\u9a8c\u8bc1\u4ee4\u724c\uff0cfrpc\u8981\u4e0efrps\u4e00\u81f4\n'})})]}),(0,s.jsxs)(a.A,{value:"client",label:"\u5ba2\u6237\u7aef",children:[(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-bash",children:"vim ~/frp_0.58.1_linux_amd64/frpc.toml\n"})}),(0,s.jsx)(r.p,{children:"\u8f93\u5165\u4ee5\u4e0b\u5185\u5bb9\uff1a"}),(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-toml",children:'serverAddr = "x.x.x.x" # \u4f60frps\u670d\u52a1\u5668\u7684ip\u5730\u5740\nserverPort = 7000 # \u4f60frps\u670d\u52a1\u5f00\u5728\u7684\u7aef\u53e3\n\nlog.to = "/var/log/frps.log" # \u65e5\u5fd7\u5b58\u653e\u8def\u5f84\uff0c\u4e00\u822c\u4e0d\u7528\u6539\nlog.level = "info" # \u65e5\u5fd7\u7b49\u7ea7\uff0c\u4e0d\u7528\u6539\nlog.maxDays = 3\n\nauth.token = "example" # \u4ee4\u724c\uff0c\u4e0e\u516c\u7f51\u670d\u52a1\u7aef\u4fdd\u6301\u4e00\u81f4\n\n[[proxies]]\nname = "mc je"\ntype = "tcp" # java\u7248\u4f7f\u7528tcp\u534f\u8bae\u901a\u4fe1\uff0c\u4e0d\u53ef\u66f4\u6539\nlocalIP = "127.0.0.1" # \u9ed8\u8ba4\u4e0d\u7528\u6539\nlocalPort = 25565 # mc\u670d\u52a1\u7aef\u5f00\u5728\u54ea\u4e2a\u7aef\u53e3\uff1f\nremotePort = 25565 # \u66b4\u9732\u670d\u52a1\u7684\u516c\u7f51\u5165\u53e3\n\n# \u5982\u679c\u4f60\u5f00\u4e86\u4e92\u901a\uff0c\u8981\u57fa\u5ca9\u652f\u6301\n[[proxies]]\nname = "mc be"\ntype = "udp" # \u57fa\u5ca9\u7248\u4f7f\u7528udp\u534f\u8bae\u901a\u4fe1\uff0c\u4e0d\u53ef\u66f4\u6539\nlocalIP = "127.0.0.1"\nlocalPort = 19132\nremotePort = 19132\n'})})]})]}),"\n",(0,s.jsx)(r.h3,{id:"\u5f00\u542f-frp",children:"\u5f00\u542f Frp\uff1a"}),"\n",(0,s.jsx)(r.p,{children:"\u4e3a\u4e86\u4fdd\u8bc1 frp \u5728\u540e\u53f0\u8fd0\u884c\uff0c\u8fd9\u91cc\u6709\u4e24\u79cd\u65b9\u6cd5\uff1a"}),"\n",(0,s.jsxs)(r.ol,{children:["\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsx)(r.p,{children:"screen    \u65b9\u4fbf\u5feb\u6377"}),"\n"]}),"\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsx)(r.p,{children:"systemd   \u7701\u5fc3\uff0c\u6709\u70b9\u590d\u6742"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(t.A,{children:[(0,s.jsxs)(a.A,{value:"screen",label:"Screen",default:!0,children:[(0,s.jsxs)(r.p,{children:["\u786e\u4fdd\u4f60\u7684\u7cfb\u7edf\u4e0a\u6709",(0,s.jsx)(r.code,{children:"screen"}),"\u5305\uff0c\u6ca1\u6709\u7684\u8bdd\u5b89\u88c5\u5b83\u4eec\uff1a"]}),(0,s.jsxs)(t.A,{children:[(0,s.jsx)(a.A,{value:"debian",label:"Debian/Ubuntu Linux",default:!0,children:(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-bash",children:"apt-get install screen\n"})})}),(0,s.jsx)(a.A,{value:"redhat",label:"CentOS/Redhat Linux",children:(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-bash",children:"yum install screen \n"})})}),(0,s.jsx)(a.A,{value:"arch",label:"Arch Linux",children:(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-bash",children:"pacman -Sy screen\n"})})})]}),(0,s.jsx)(r.p,{children:"\u542f\u52a8\uff1a"}),(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-bash",children:"screen -dR frps frps # \u670d\u52a1\u7aef\nscreen -dR frpc frpc # \u5ba2\u6237\u7aef\n# \u952e\u76d8\u4e0a\u6309Ctrl+A+D\u9000\u51fa\n"})})]}),(0,s.jsxs)(a.A,{value:"systemd",label:"Systemd",children:[(0,s.jsx)(r.p,{children:"\u5728 Linux \u7cfb\u7edf\u4e0b\uff0c\u4f7f\u7528 systemd \u53ef\u4ee5\u65b9\u4fbf\u5730\u63a7\u5236 frps \u670d\u52a1\u7aef\u7684\u542f\u52a8\u3001\u505c\u6b62\u3001\u914d\u7f6e\u540e\u53f0\u8fd0\u884c\u4ee5\u53ca\u5f00\u673a\u81ea\u542f\u52a8\u3002"}),(0,s.jsxs)(t.A,{children:[(0,s.jsxs)(a.A,{value:"server",label:"\u670d\u52a1\u7aef",default:!0,children:[(0,s.jsxs)(r.ol,{children:["\n",(0,s.jsx)(r.li,{children:"\u521b\u5efa systemd \u5355\u5143\u6587\u4ef6\uff1a"}),"\n"]}),(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-bash",children:"vim /etc/systemd/system/frps.service\n"})}),(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{children:"[Unit]\n# \u670d\u52a1\u540d\u79f0\uff0c\u53ef\u81ea\u5b9a\u4e49\nDescription = frp server\nAfter = network.target syslog.target\nWants = network.target\n\n[Service]\nType = simple\nExecStart = /usr/bin/frps -c /etc/frp/frps.toml\n\n[Install]\nWantedBy = multi-user.target\n"})}),(0,s.jsxs)(r.ol,{start:"2",children:["\n",(0,s.jsx)(r.li,{children:"\u4f7f\u7528 systemd \u547d\u4ee4\u7ba1\u7406 frps \u670d\u52a1"}),"\n"]}),(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-bash",children:"# \u542f\u52a8frp\nsudo systemctl start frps\n# \u505c\u6b62frp\nsudo systemctl stop frps\n# \u91cd\u542ffrp\nsudo systemctl restart frps\n# \u67e5\u770bfrp\u72b6\u6001\nsudo systemctl status frps\n"})}),(0,s.jsxs)(r.ol,{start:"3",children:["\n",(0,s.jsx)(r.li,{children:"\u8bbe\u7f6e frps \u5f00\u673a\u81ea\u542f\u52a8"}),"\n"]}),(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-bash",children:"sudo systemctl enable frps\n"})})]}),(0,s.jsxs)(a.A,{value:"client",label:"\u5ba2\u6237\u7aef",default:!0,children:[(0,s.jsxs)(r.ol,{children:["\n",(0,s.jsx)(r.li,{children:"\u521b\u5efa systemd \u5355\u5143\u6587\u4ef6\uff1a"}),"\n"]}),(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-bash",children:"vim /etc/systemd/system/frpc.service\n"})}),(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{children:"[Unit]\n# \u670d\u52a1\u540d\u79f0\uff0c\u53ef\u81ea\u5b9a\u4e49\nDescription = frp client\nAfter = network.target syslog.target\nWants = network.target\n\n[Service]\nType = simple\nExecStart = /usr/bin/frpc -c /etc/frp/frpc.toml\n\n[Install]\nWantedBy = multi-user.target\n"})}),(0,s.jsxs)(r.ol,{start:"2",children:["\n",(0,s.jsx)(r.li,{children:"\u4f7f\u7528 systemd \u547d\u4ee4\u7ba1\u7406 frpc \u670d\u52a1"}),"\n"]}),(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-bash",children:"# \u542f\u52a8frp\nsudo systemctl start frpc\n# \u505c\u6b62frp\nsudo systemctl stop frpc\n# \u91cd\u542ffrp\nsudo systemctl restart frpc\n# \u67e5\u770bfrp\u72b6\u6001\nsudo systemctl status frpc\n"})}),(0,s.jsxs)(r.ol,{start:"3",children:["\n",(0,s.jsx)(r.li,{children:"\u8bbe\u7f6e frpc \u5f00\u673a\u81ea\u542f\u52a8"}),"\n"]}),(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-bash",children:"sudo systemctl enable frpc\n"})})]})]})]})]}),"\n",(0,s.jsx)(r.h3,{id:"\u914d\u7f6eproxy-protocol",children:"\u914d\u7f6eproxy protocol"}),"\n",(0,s.jsxs)(r.p,{children:["\u5982\u679c\u4f60\u4f7f\u7528\u7684\u662f\u73b0\u6210\u7684\u5185\u7f51\u7a7f\u900f\u8fd0\u8425\u5546\u63d0\u4f9b\u7684\u5185\u7f51\u7a7f\u900f\uff0c",(0,s.jsx)(r.strong,{children:"\u4e00\u5b9a\u8981\u6839\u636e\u8fd0\u8425\u5546\u63d0\u4f9b\u7684\u6559\u7a0b\u64cd\u4f5c"}),"\u3002\u4ee5\u4e0b\u662f\u4e24\u4e2a\u6700\u6709\u540d\u7684\u5185\u7f51\u7a7f\u900f\u8fd0\u8425\u5546\u7684 proxy protocol \u5f00\u542f\u65b9\u6cd5\u3002",(0,s.jsx)(r.br,{}),"\n",(0,s.jsx)(r.a,{href:"https://doc.natfrp.com/bestpractice/realip.html#proxy-protocol",children:"SakuraFrp"}),(0,s.jsx)(r.br,{}),"\n",(0,s.jsx)(r.a,{href:"https://openfrp.wiki/use/proxy-protocol.html#%E8%8E%B7%E5%8F%96%E8%AE%BF%E9%97%AE%E8%80%85%E7%9A%84%E7%9C%9F%E5%AE%9E-ip",children:"OpenFrp"})]}),"\n",(0,s.jsxs)(r.p,{children:["\u5982\u679c\u662f\u81ea\u5efa\u5185\u7f51\u7a7f\u900f\uff0c\u90a3\u4e48\u5982\u679c\u662f ini \u914d\u7f6e\u6587\u4ef6\uff0c\u5c31\u5728frpc\u96a7\u9053\u5bf9\u5e94\u7684\u914d\u7f6e\uff08\u4f4d\u4e8efrpc.ini\u4e2d\uff09\u4e2d\u52a0\u5165\u4e00\u884c",(0,s.jsx)(r.code,{children:"proxy_protocol_version = "}),"\uff0c\u5982\u679c\u662f\u534f\u8bae v1 \u5c31\u5199\u7b49\u4e8e v1 \uff0c v2 \u5c31\u5199\u7b49\u4e8e v2 \u3002\u4f8b\u5982\uff1a"]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-ini",children:"[mc]\ntype = tcp\nlocal_port = 25565\n# \u76ee\u524d\u652f\u6301 v1 \u548c v2 \u4e24\u4e2a\u7248\u672c\u7684 proxy protocol \u534f\u8bae\u3002\nproxy_protocol_version = v2\n"})}),"\n",(0,s.jsxs)(r.p,{children:["\u5982\u679c\u662f toml \u914d\u7f6e\u6587\u4ef6\uff0c\u5c31\u5728 frpc \u96a7\u9053\u5bf9\u5e94\u7684\u914d\u7f6e\uff08\u4f4d\u4e8e frpc.toml \u4e2d\uff09\u4e2d\u52a0\u5165\u4e00\u884c",(0,s.jsx)(r.code,{children:"transport.proxyProtocolVersion = "}),"\uff0c\u5982\u679c\u662f\u534f\u8baev1\u5c31\u5199\u7b49\u4e8ev1\uff0cv2\u5c31\u5199\u7b49\u4e8ev2\u3002\u4f8b\u5982\uff1a"]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-toml",children:'[[proxies]]\nname = "mc"\ntype = "tcp"\nlocalPort = 25565\ntransport.proxyProtocolVersion = "v2"\n'})}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.strong,{children:"frps\u7684frps.ini\u6216frps.toml\u4e0d\u7528\u52a8\u3002"})}),"\n",(0,s.jsx)(r.p,{children:"\u81f3\u4e8e\u5982\u4f55\u9009\u62e9 v1 \u548c v2 \uff0c\u4f60\u9700\u8981\u6839\u636e\u5bf9\u5e94\u670d\u52a1\u5668\u5bf9 proxy protocol \u7684\u652f\u6301\u60c5\u51b5\u8fdb\u884c\u9009\u62e9\u3002\u4f8b\u5982 Paper \u670d\u52a1\u7aef\u76ee\u524d\u53ea\u652f\u6301 v2\u3002"})]})}function h(e={}){const{wrapper:r}={...(0,l.R)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},19365:(e,r,n)=>{n.d(r,{A:()=>a});n(96540);var s=n(34164);const l={tabItem:"tabItem_Ymn6"};var t=n(74848);function a(e){let{children:r,hidden:n,className:a}=e;return(0,t.jsx)("div",{role:"tabpanel",className:(0,s.A)(l.tabItem,a),hidden:n,children:r})}},11470:(e,r,n)=>{n.d(r,{A:()=>A});var s=n(96540),l=n(34164),t=n(23104),a=n(56347),c=n(205),i=n(57485),o=n(31682),d=n(70679);function u(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:r}=e;return!!r&&"object"==typeof r&&"value"in r}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:r,children:n}=e;return(0,s.useMemo)((()=>{const e=r??function(e){return u(e).map((e=>{let{props:{value:r,label:n,attributes:s,default:l}}=e;return{value:r,label:n,attributes:s,default:l}}))}(n);return function(e){const r=(0,o.X)(e,((e,r)=>e.value===r.value));if(r.length>0)throw new Error(`Docusaurus error: Duplicate values "${r.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[r,n])}function h(e){let{value:r,tabValues:n}=e;return n.some((e=>e.value===r))}function x(e){let{queryString:r=!1,groupId:n}=e;const l=(0,a.W6)(),t=function(e){let{queryString:r=!1,groupId:n}=e;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:r,groupId:n});return[(0,i.aZ)(t),(0,s.useCallback)((e=>{if(!t)return;const r=new URLSearchParams(l.location.search);r.set(t,e),l.replace({...l.location,search:r.toString()})}),[t,l])]}function f(e){const{defaultValue:r,queryString:n=!1,groupId:l}=e,t=p(e),[a,i]=(0,s.useState)((()=>function(e){let{defaultValue:r,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!h({value:r,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${r}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return r}const s=n.find((e=>e.default))??n[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:r,tabValues:t}))),[o,u]=x({queryString:n,groupId:l}),[f,m]=function(e){let{groupId:r}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(r),[l,t]=(0,d.Dv)(n);return[l,(0,s.useCallback)((e=>{n&&t.set(e)}),[n,t])]}({groupId:l}),j=(()=>{const e=o??f;return h({value:e,tabValues:t})?e:null})();(0,c.A)((()=>{j&&i(j)}),[j]);return{selectedValue:a,selectValue:(0,s.useCallback)((e=>{if(!h({value:e,tabValues:t}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),m(e)}),[u,m,t]),tabValues:t}}var m=n(92303);const j={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=n(74848);function v(e){let{className:r,block:n,selectedValue:s,selectValue:a,tabValues:c}=e;const i=[],{blockElementScrollPositionUntilNextRender:o}=(0,t.a_)(),d=e=>{const r=e.currentTarget,n=i.indexOf(r),l=c[n].value;l!==s&&(o(r),a(l))},u=e=>{let r=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=i.indexOf(e.currentTarget)+1;r=i[n]??i[0];break}case"ArrowLeft":{const n=i.indexOf(e.currentTarget)-1;r=i[n]??i[i.length-1];break}}r?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.A)("tabs",{"tabs--block":n},r),children:c.map((e=>{let{value:r,label:n,attributes:t}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:s===r?0:-1,"aria-selected":s===r,ref:e=>i.push(e),onKeyDown:u,onClick:d,...t,className:(0,l.A)("tabs__item",j.tabItem,t?.className,{"tabs__item--active":s===r}),children:n??r},r)}))})}function g(e){let{lazy:r,children:n,selectedValue:l}=e;const t=(Array.isArray(n)?n:[n]).filter(Boolean);if(r){const e=t.find((e=>e.props.value===l));return e?(0,s.cloneElement)(e,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:t.map(((e,r)=>(0,s.cloneElement)(e,{key:r,hidden:e.props.value!==l})))})}function y(e){const r=f(e);return(0,b.jsxs)("div",{className:(0,l.A)("tabs-container",j.tabList),children:[(0,b.jsx)(v,{...r,...e}),(0,b.jsx)(g,{...r,...e})]})}function A(e){const r=(0,m.A)();return(0,b.jsx)(y,{...e,children:u(e.children)},String(r))}},28453:(e,r,n)=>{n.d(r,{R:()=>a,x:()=>c});var s=n(96540);const l={},t=s.createContext(l);function a(e){const r=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:a(e.components),s.createElement(t.Provider,{value:r},e.children)}}}]);