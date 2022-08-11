(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{465:function(s,n,t){"use strict";t.r(n);var a=t(29),e=Object(a.a)({},(function(){var s=this,n=s.$createElement,t=s._self._c||n;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"jenkins"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#jenkins"}},[s._v("#")]),s._v(" Jenkins")]),s._v(" "),t("h2",{attrs:{id:"安装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[s._v("#")]),s._v(" "),t("a",{attrs:{href:"https://www.jenkins.io/doc/book/installing/",target:"_blank",rel:"noopener noreferrer"}},[s._v("安装"),t("OutboundLink")],1)]),s._v(" "),t("h3",{attrs:{id:"linux"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#linux"}},[s._v("#")]),s._v(" Linux")]),s._v(" "),t("h4",{attrs:{id:"centos"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#centos"}},[s._v("#")]),s._v(" CentOS")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" -O /etc/yum.repos.d/jenkins.repo "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n    https://pkg.jenkins.io/redhat-stable/jenkins.repo\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("rpm")]),s._v(" --import https://pkg.jenkins.io/redhat-stable/jenkins.io.key\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" yum upgrade\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" yum "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" jenkins java-1.8.0-openjdk-devel\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" systemctl daemon-reload\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 启动 Jenkins")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" systemctl start jenkins\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" systemctl status jenkins\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 放行端口")]),s._v("\nfirewall-cmd --permanent --zone"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("public --add-port"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("8080")]),s._v("/tcp\nfirewall-cmd --reload\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br")])]),t("h4",{attrs:{id:"debian-ubuntu"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#debian-ubuntu"}},[s._v("#")]),s._v(" Debian/Ubuntu")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" -q -O - https://pkg.jenkins.io/debian-stable/jenkins.io.key "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" apt-key "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" -\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sh")]),s._v(" -c "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'echo deb https://pkg.jenkins.io/debian-stable binary/ > \\\n    /etc/apt/sources.list.d/jenkins.list'")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" update\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" jenkins\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("h3",{attrs:{id:"docker"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#docker"}},[s._v("#")]),s._v(" Docker")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# https://www.jenkins.io/zh/doc/book/installing/#%E5%AE%89%E8%A3%85docker")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" -p /home/docker/jenkins/data\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" /home/docker/jenkins\ndocker run -d --privileged"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("true --restart"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("always -u root -p "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("8080")]),s._v(":8080 -p "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("50000")]),s._v(":50000 -v "),t("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$PWD")]),s._v("/data:/var/jenkins_home -v /var/run/docker.sock:/var/run/docker.sock --name jenkins jenkinsci/blueocean\n\ndocker logs jenkins\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])]),t("h3",{attrs:{id:"配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#配置"}},[s._v("#")]),s._v(" 配置")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#  http://localhost:8080")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 初始解锁密码")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" /var/lib/jenkins/secrets/initialAdminPassword\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 镜像地址 https://jenkins-zh.cn/tutorial/management/plugin/update-center/")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 插件管理 -> 高级 -> 升级站点 http://localhost:8080/pluginManager/advanced")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# https://mirrors.tuna.tsinghua.edu.cn/jenkins/updates/update-center.json")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 更换为清华大学的 Jenkins 插件源")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sed")]),s._v(" -i "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'s/http:\\/\\/updates.jenkins-ci.org\\/download/https:\\/\\/mirrors.tuna.tsinghua.edu.cn\\/jenkins/g'")]),s._v(" /var/lib/jenkins/updates/default.json "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sed")]),s._v(" -i "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'s/http:\\/\\/www.google.com/https:\\/\\/www.baidu.com/g'")]),s._v(" /var/lib/jenkins/updates/default.json\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 配置jenkins SSH")]),s._v("\nssh-keygen -C "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"邮箱"')]),s._v(" -t rsa\nssh-keygen -C "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"邮箱"')]),s._v(" -m PEM -t rsa -b "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4096")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 将/root/.ssh/id_rsa.pub的内容到宿主机的.ssh/authorized_keys文件中")]),s._v("\nssh-copy-id -i /root/.ssh/id_rsa.pub "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("username"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("@"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("host"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 将公钥配置到github/gitlab的SSH setting中")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" /root/.ssh/id_rsa.pub\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 配置Publish over SSH")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 首页 -> 系统管理 -> 管理插件 ->可选插件 -> 过滤：ssh -> 选择Publish Over SSH")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Path to key /root/.ssh/id_rsa")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# SSH Servers Name  Hostname Username")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 配置node")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 首页 -> 系统管理 -> 管理插件 ->可选插件 -> nodejs -> 选择NodeJS Plugin")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 首页 -> 系统管理 -> 全局工具配置")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# vuepress")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 构建 -> 执行shell")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# npm install -g yarn")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# yarn config set registry https://registry.npm.taobao.org")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" -rf node_modules\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("yarn")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("yarn")]),s._v(" build\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" docs/.vuepress/dist\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("tar")]),s._v(" -zcvf dist.tar.gz *\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 构建后操作 -> Send build artifacts over SSH")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Source files")]),s._v("\ndocs/.vuepress/dist/dist.tar.gz\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Remove prefix")]),s._v("\ndocs/.vuepress/dist/\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Remote directory")]),s._v("\n/home/docker/nginx/html\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Exec command")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" /home/docker/nginx/html\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("tar")]),s._v(" -zxvf dist.tar.gz\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v("  dist.tar.gz\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br"),t("span",{staticClass:"line-number"},[s._v("28")]),t("br"),t("span",{staticClass:"line-number"},[s._v("29")]),t("br"),t("span",{staticClass:"line-number"},[s._v("30")]),t("br"),t("span",{staticClass:"line-number"},[s._v("31")]),t("br"),t("span",{staticClass:"line-number"},[s._v("32")]),t("br"),t("span",{staticClass:"line-number"},[s._v("33")]),t("br"),t("span",{staticClass:"line-number"},[s._v("34")]),t("br"),t("span",{staticClass:"line-number"},[s._v("35")]),t("br"),t("span",{staticClass:"line-number"},[s._v("36")]),t("br"),t("span",{staticClass:"line-number"},[s._v("37")]),t("br"),t("span",{staticClass:"line-number"},[s._v("38")]),t("br"),t("span",{staticClass:"line-number"},[s._v("39")]),t("br"),t("span",{staticClass:"line-number"},[s._v("40")]),t("br"),t("span",{staticClass:"line-number"},[s._v("41")]),t("br"),t("span",{staticClass:"line-number"},[s._v("42")]),t("br"),t("span",{staticClass:"line-number"},[s._v("43")]),t("br"),t("span",{staticClass:"line-number"},[s._v("44")]),t("br"),t("span",{staticClass:"line-number"},[s._v("45")]),t("br"),t("span",{staticClass:"line-number"},[s._v("46")]),t("br"),t("span",{staticClass:"line-number"},[s._v("47")]),t("br"),t("span",{staticClass:"line-number"},[s._v("48")]),t("br")])])])}),[],!1,null,null,null);n.default=e.exports}}]);