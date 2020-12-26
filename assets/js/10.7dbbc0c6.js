(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{377:function(a,s,t){"use strict";t.r(s);var n=t(27),e=Object(n.a)({},(function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h2",{attrs:{id:"介绍"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#介绍"}},[a._v("#")]),a._v(" 介绍")]),a._v(" "),t("h4",{attrs:{id:"java"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#java"}},[a._v("#")]),a._v(" Java")]),a._v(" "),t("h2",{attrs:{id:"环境安装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#环境安装"}},[a._v("#")]),a._v(" 环境安装")]),a._v(" "),t("h3",{attrs:{id:"安装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[a._v("#")]),a._v(" 安装")]),a._v(" "),t("h4",{attrs:{id:"参考"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[a._v("#")]),a._v(" 参考：")]),a._v(" "),t("ul",[t("li",[t("p",[t("a",{attrs:{href:"https://www.oracle.com/java/technologies/oracle-java-archive-downloads.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://www.oracle.com/java/technologies/oracle-java-archive-downloads.html"),t("OutboundLink")],1)])]),a._v(" "),t("li",[t("p",[t("a",{attrs:{href:"https://lv.binarybabel.org/catalog/java/jdk8",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://lv.binarybabel.org/catalog/java/jdk8"),t("OutboundLink")],1)])])]),a._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#查看是否自带jdk")]),a._v("\njava -version\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("rpm")]),a._v(" -qa "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("grep")]),a._v(" java\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#卸载")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("rpm")]),a._v(" -e --nodeps 要卸载的包\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#下载")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("mkdir")]),a._v(" /usr/local/java/\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("cd")]),a._v(" /usr/local/java\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#wget --no-check-certificate --no-cookies --header 'Cookie: oraclelicense=accept-securebackup-cookie' 'http://download.oracle.com/otn-pub/java/jdk/8u251-b08/3d5a2bb8f8d4428bbe94aed7ec7ae784/jdk-8u251-linux-x64.tar.gz'")]),a._v("\n\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("tar")]),a._v(" -zxvf jdk-8u211-linux-x64.tar.gz\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#环境变量")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("vim")]),a._v(" /etc/profile\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#添加以下内容")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("export")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("JAVA_HOME")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("/usr/local/java/jdk1.8.0_211\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("export")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("JRE_HOME")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$JAVA_HOME")]),a._v("/jre\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("export")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("CLASSPATH")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(".:"),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$JAVA_HOME")]),a._v("/lib/dt.jar:"),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$JAVA_HOME")]),a._v("/lib/tools.jar:"),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$JRE_HOME")]),a._v("/lib\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("export")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t("span",{pre:!0,attrs:{class:"token environment constant"}},[a._v("PATH")])]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token environment constant"}},[a._v("$PATH")]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v(":")]),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$JAVA_HOME")]),a._v("/bin\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#生效配置")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("source")]),a._v(" /etc/profile\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#添加软链接")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#ln -s /usr/local/java/jdk1.8.0_211/bin/java /usr/bin/java")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#检查")]),a._v("\njava -version\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br"),t("span",{staticClass:"line-number"},[a._v("6")]),t("br"),t("span",{staticClass:"line-number"},[a._v("7")]),t("br"),t("span",{staticClass:"line-number"},[a._v("8")]),t("br"),t("span",{staticClass:"line-number"},[a._v("9")]),t("br"),t("span",{staticClass:"line-number"},[a._v("10")]),t("br"),t("span",{staticClass:"line-number"},[a._v("11")]),t("br"),t("span",{staticClass:"line-number"},[a._v("12")]),t("br"),t("span",{staticClass:"line-number"},[a._v("13")]),t("br"),t("span",{staticClass:"line-number"},[a._v("14")]),t("br"),t("span",{staticClass:"line-number"},[a._v("15")]),t("br"),t("span",{staticClass:"line-number"},[a._v("16")]),t("br"),t("span",{staticClass:"line-number"},[a._v("17")]),t("br"),t("span",{staticClass:"line-number"},[a._v("18")]),t("br"),t("span",{staticClass:"line-number"},[a._v("19")]),t("br"),t("span",{staticClass:"line-number"},[a._v("20")]),t("br"),t("span",{staticClass:"line-number"},[a._v("21")]),t("br"),t("span",{staticClass:"line-number"},[a._v("22")]),t("br"),t("span",{staticClass:"line-number"},[a._v("23")]),t("br"),t("span",{staticClass:"line-number"},[a._v("24")]),t("br"),t("span",{staticClass:"line-number"},[a._v("25")]),t("br"),t("span",{staticClass:"line-number"},[a._v("26")]),t("br"),t("span",{staticClass:"line-number"},[a._v("27")]),t("br")])]),t("h3",{attrs:{id:"maven"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#maven"}},[a._v("#")]),a._v(" Maven")]),a._v(" "),t("h4",{attrs:{id:"参考-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#参考-2"}},[a._v("#")]),a._v(" 参考：")]),a._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"http://maven.apache.org/download.cgi",target:"_blank",rel:"noopener noreferrer"}},[a._v("http://maven.apache.org/download.cgi"),t("OutboundLink")],1)])]),a._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#下载")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("wget")]),a._v(" https://mirrors.tuna.tsinghua.edu.cn/apache/maven/maven-3/3.6.3/binaries/apache-maven-3.6.3-bin.tar.gz\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("tar")]),a._v(" -zxvf apache-maven-3.6.3-bin.tar.gz\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("mv")]),a._v(" apache-maven-3.6.3 /usr/local/\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#配置环境变量")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("vim")]),a._v(" /etc/profile\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#添加以下内容")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("export")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("MAVEN_HOME")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("/usr/local/apache-maven-3.6.3\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("export")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t("span",{pre:!0,attrs:{class:"token environment constant"}},[a._v("PATH")])]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token environment constant"}},[a._v("$PATH")]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v(":")]),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$MAVEN_HOME")]),a._v("/bin\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#生效配置")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("source")]),a._v(" /etc/profile\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#检查")]),a._v("\nmvn -version\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br"),t("span",{staticClass:"line-number"},[a._v("6")]),t("br"),t("span",{staticClass:"line-number"},[a._v("7")]),t("br"),t("span",{staticClass:"line-number"},[a._v("8")]),t("br"),t("span",{staticClass:"line-number"},[a._v("9")]),t("br"),t("span",{staticClass:"line-number"},[a._v("10")]),t("br"),t("span",{staticClass:"line-number"},[a._v("11")]),t("br"),t("span",{staticClass:"line-number"},[a._v("12")]),t("br"),t("span",{staticClass:"line-number"},[a._v("13")]),t("br")])]),t("h3",{attrs:{id:"maven-配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#maven-配置"}},[a._v("#")]),a._v(" Maven 配置")]),a._v(" "),t("ul",[t("li",[a._v("自定义本地仓库路径")])]),a._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("vim")]),a._v(" /usr/local/apache-maven-3.6.3/conf/settings.xml\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#修改localRepository")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("localRepository"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("/usr/local/apache-maven-3.6.3/repo"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("/localRepository"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br")])]),t("ul",[t("li",[a._v("配置 Maven 的镜像仓库源")])]),a._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("vim")]),a._v(" /usr/local/apache-maven-3.6.3/conf/settings.xml\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#在<mirrors></mirrors>标签中添加 mirror 子节点")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("mirror"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n      "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("id"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("nexus-aliyun"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("/id"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n      "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("mirrorOf"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("*"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("/mirrorOf"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n      "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("name"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("Nexus aliyun"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("/name"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n      "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("url"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("http://maven.aliyun.com/nexus/content/groups/public"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("/url"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("/mirror"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br"),t("span",{staticClass:"line-number"},[a._v("6")]),t("br"),t("span",{staticClass:"line-number"},[a._v("7")]),t("br"),t("span",{staticClass:"line-number"},[a._v("8")]),t("br")])]),t("h3",{attrs:{id:"tomcat"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#tomcat"}},[a._v("#")]),a._v(" Tomcat")]),a._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://tomcat.apache.org/download-90.cgi",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://tomcat.apache.org/download-90.cgi"),t("OutboundLink")],1)])]),a._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#下载")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("wget")]),a._v(" https://mirrors.tuna.tsinghua.edu.cn/apache/tomcat/tomcat-9/v9.0.35/bin/apache-tomcat-9.0.35.tar.gz\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("tar")]),a._v(" -zxvf apache-tomcat-9.0.35.tar.gz\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("mv")]),a._v(" apache-tomcat-9.0.35 /usr/local/\n\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("vim")]),a._v(" /etc/systemd/system/tomcat.service\n\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("Unit"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("Description")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("tomcat\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("After")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("syslog.target network.target remote-fs.target nss-lookup.target\n\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("Service"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("Type")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("oneshot\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("Environment")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'JAVA_HOME=/usr/local/java/jdk1.8.0_211'")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("Environment")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'JRE_HOME=/usr/local/java/jdk1.8.0_211/jre'")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("ExecStart")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("/usr/local/apache-tomcat-9.0.35/bin/startup.sh\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("ExecStop")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("/usr/local/apache-tomcat-9.0.35/bin/shutdown.sh\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("ExecReload")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("/bin/kill -s HUP "),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$MAINPID")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("RemainAfterExit")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("yes\n\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("Install"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("WantedBy")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("multi-user.target\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br"),t("span",{staticClass:"line-number"},[a._v("6")]),t("br"),t("span",{staticClass:"line-number"},[a._v("7")]),t("br"),t("span",{staticClass:"line-number"},[a._v("8")]),t("br"),t("span",{staticClass:"line-number"},[a._v("9")]),t("br"),t("span",{staticClass:"line-number"},[a._v("10")]),t("br"),t("span",{staticClass:"line-number"},[a._v("11")]),t("br"),t("span",{staticClass:"line-number"},[a._v("12")]),t("br"),t("span",{staticClass:"line-number"},[a._v("13")]),t("br"),t("span",{staticClass:"line-number"},[a._v("14")]),t("br"),t("span",{staticClass:"line-number"},[a._v("15")]),t("br"),t("span",{staticClass:"line-number"},[a._v("16")]),t("br"),t("span",{staticClass:"line-number"},[a._v("17")]),t("br"),t("span",{staticClass:"line-number"},[a._v("18")]),t("br"),t("span",{staticClass:"line-number"},[a._v("19")]),t("br"),t("span",{staticClass:"line-number"},[a._v("20")]),t("br"),t("span",{staticClass:"line-number"},[a._v("21")]),t("br"),t("span",{staticClass:"line-number"},[a._v("22")]),t("br")])])])}),[],!1,null,null,null);s.default=e.exports}}]);