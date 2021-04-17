(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{436:function(s,n,a){"use strict";a.r(n);var t=a(29),e=Object(t.a)({},(function(){var s=this,n=s.$createElement,a=s._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"介绍"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#介绍"}},[s._v("#")]),s._v(" 介绍")]),s._v(" "),a("h4",{attrs:{id:"nginx"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nginx"}},[s._v("#")]),s._v(" Nginx")]),s._v(" "),a("h2",{attrs:{id:"环境安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#环境安装"}},[s._v("#")]),s._v(" 环境安装")]),s._v(" "),a("h3",{attrs:{id:"安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[s._v("#")]),s._v(" 安装")]),s._v(" "),a("ul",[a("li",[s._v("添加 Centos7 Nginx yum 资源库")])]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rpm")]),s._v(" -Uvh http://nginx.org/packages/centos/7/noarch/RPMS/nginx-release-centos-7-0.el7.ngx.noarch.rpm\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("ul",[a("li",[s._v("安装")])]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("yum "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" nginx\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("ul",[a("li",[s._v("启动")])]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("systemctl start nginx\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("ul",[a("li",[s._v("停止")])]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("systemctl stop nginx\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("ul",[a("li",[s._v("重载")])]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("systemctl reload nginx\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"docker-安装-nginx"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#docker-安装-nginx"}},[s._v("#")]),s._v(" Docker 安装 Nginx")]),s._v(" "),a("h4",{attrs:{id:"拉取镜像"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#拉取镜像"}},[s._v("#")]),s._v(" 拉取镜像")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("docker pull nginx:latest\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h4",{attrs:{id:"运行-nginx"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#运行-nginx"}},[s._v("#")]),s._v(" 运行 Nginx")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" -p /home/docker/nginx/"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("conf,logs,html"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" /home/docker/nginx\n\ndocker run --name tmp-nginx-container -d nginx\ndocker "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cp")]),s._v(" tmp-nginx-container:/etc/nginx/nginx.conf "),a("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$PWD")]),s._v("/conf/nginx.conf\ndocker "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" -f tmp-nginx-container\n\ndocker run -d --privileged"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("true --restart"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("always -p "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("80")]),s._v(":80 -p "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("443")]),s._v(":443 -v "),a("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$PWD")]),s._v("/conf/nginx.conf:/etc/nginx/nginx.conf -v "),a("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$PWD")]),s._v("/logs:/var/log/nginx -v "),a("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$PWD")]),s._v("/html:/usr/share/nginx/html --name nginx nginx:latest\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("h2",{attrs:{id:"虚拟主机-etc-nginx-conf-d"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#虚拟主机-etc-nginx-conf-d"}},[s._v("#")]),s._v(" 虚拟主机 /etc/nginx/conf.d")])])}),[],!1,null,null,null);n.default=e.exports}}]);