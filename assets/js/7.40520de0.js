(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{414:function(s,a,t){s.exports=t.p+"assets/img/idea-config.f1a7db61.png"},415:function(s,a,t){s.exports=t.p+"assets/img/idea-config-golint-config.4bff75ab.png"},426:function(s,a,t){"use strict";t.r(a);var n=t(29),e=Object(n.a)({},(function(){var s=this,a=s.$createElement,n=s._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"go"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#go"}},[s._v("#")]),s._v(" Go")]),s._v(" "),n("h2",{attrs:{id:"开发环境"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#开发环境"}},[s._v("#")]),s._v(" 开发环境")]),s._v(" "),n("h3",{attrs:{id:"源码安装"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#源码安装"}},[s._v("#")]),s._v(" 源码安装")]),s._v(" "),n("ul",[n("li",[s._v("安装依赖")])]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[s._v("yum "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" gcc gcc-c++ libxml2 libxml2-devel autoconf\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("ul",[n("li",[s._v("安装 Go")])]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" https://dl.google.com/go/go1.14.2.linux-amd64.tar.gz\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("tar")]),s._v(" zxvf go1.14.2.linux-amd64.tar.gz -C /usr/local/\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("h3",{attrs:{id:"环境变量"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#环境变量"}},[s._v("#")]),s._v(" 环境变量")]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" /etc/profile\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#添加以下内容")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("GOROOT")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/usr/local/go\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("GOPATH")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$HOME")]),s._v("/go\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[n("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("PATH")])]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$PATH")]),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$GOROOT")]),s._v("/bin:"),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$GOPATH")]),s._v("/bin\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#生效配置")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("source")]),s._v(" /etc/profile\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br")])]),n("ul",[n("li",[s._v("GO111MODULE")])]),s._v(" "),n("p",[s._v("这个环境变量主要是 Go modules 的开关，主要有以下参数：")]),s._v(" "),n("ul",[n("li",[n("p",[s._v("auto：只在项目包含了 go.mod 文件时启用 Go modules，在 Go 1.13 中仍然是默认值")])]),s._v(" "),n("li",[n("p",[s._v("on：启用 Go modules，推荐设置，未来版本中的默认值，让 GOPATH 从此成为历史")])]),s._v(" "),n("li",[n("p",[s._v("off：禁用 Go modules")])])]),s._v(" "),n("h4",{attrs:{id:"参考-https-github-com-golang-go-issues-31857"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#参考-https-github-com-golang-go-issues-31857"}},[s._v("#")]),s._v(" 参考: "),n("a",{attrs:{href:"https://github.com/golang/go/issues/31857",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://github.com/golang/go/issues/31857"),n("OutboundLink")],1)]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[s._v("go "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("env")]),s._v(" -w "),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("GO111MODULE")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("on\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("ul",[n("li",[s._v("GOPROXY")])]),s._v(" "),n("p",[s._v("这个环境变量主要是用于设置 Go 模块代理")]),s._v(" "),n("ul",[n("li",[s._v("用于使 Go 在后续拉取模块版本时能够脱离传统的 VCS 方式从镜像站点快速拉取")])]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[s._v("go "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("env")]),s._v(" -w "),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("GOPROXY")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("https://goproxy.cn,direct\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("ul",[n("li",[s._v("使用 GitHub 私有仓库")])]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[s._v("go mod init github.com/lalifeier/demo-module\n\ngo "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("env")]),s._v(" -w "),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("GOPRIVATE")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("github.com/lalifeier\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v('# git config --global --add url."git@github.com:lalifeier".insteadOf "https://github.com/lalifeier"')]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" config --global --add url."),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"git@github.com:"')]),s._v(".insteadOf "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"https://github.com/"')]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br")])]),n("h4",{attrs:{id:"参考"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[s._v("#")]),s._v(" 参考:")]),s._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"https://golang.org/dl/",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://golang.org/dl/"),n("OutboundLink")],1)]),s._v(" "),n("li",[n("a",{attrs:{href:"https://golang.google.cn/dl/",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://golang.google.cn/dl/"),n("OutboundLink")],1)])]),s._v(" "),n("h3",{attrs:{id:"常用包安装"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#常用包安装"}},[s._v("#")]),s._v(" 常用包安装")]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" -p "),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$GOPATH")]),s._v("/src/golang.org/x\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" clone https://github.com/golang/tools.git "),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$GOPATH")]),s._v("/src/golang.org/x/tools\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" clone https://github.com/golang/net.git "),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$GOPATH")]),s._v("/src/golang.org/x/net\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" clone https://github.com/golang/lint.git "),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$GOPATH")]),s._v("/src/golang.org/x/lint\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" clone https://github.com/golang/image.git "),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$GOPATH")]),s._v("/src/golang.org/x/image\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])]),n("h3",{attrs:{id:"vscode-配置"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#vscode-配置"}},[s._v("#")]),s._v(" vscode 配置")]),s._v(" "),n("h4",{attrs:{id:"安装-go-插件"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#安装-go-插件"}},[s._v("#")]),s._v(" 安装 go 插件")]),s._v(" "),n("p",[s._v("在 vscode 中点击扩展按钮，搜索 go，安装 go 插件")]),s._v(" "),n("h4",{attrs:{id:"安装-go-工具"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#安装-go-工具"}},[s._v("#")]),s._v(" 安装 go 工具")]),s._v(" "),n("p",[s._v("在 vscode 中按下 F1 或 Ctrl+Shift+P，输入 Go:Install/Update Tools 回车")]),s._v(" "),n("h3",{attrs:{id:"idea-配置"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#idea-配置"}},[s._v("#")]),s._v(" idea 配置")]),s._v(" "),n("ul",[n("li",[s._v("go fmt : 统一的代码格式化工具（必须）。")]),s._v(" "),n("li",[s._v("golangci-lint : 静态代码质量检测工具，用于包的质量分析（推荐）。")]),s._v(" "),n("li",[s._v("goimports : 自动 import 依赖包工具（可选）。")]),s._v(" "),n("li",[s._v("golint : 代码规范检测，并且也检测单文件的代码质量，比较出名的 Go 质量评估站点 Go Report 在使用（可选）。")])]),s._v(" "),n("ol",[n("li",[s._v("在 idea 的设置中，选择 Tools - File Watchers, 依次点击添加这 3 个工具")])]),s._v(" "),n("p",[n("img",{attrs:{src:t(414),alt:"idea 配置"}})]),s._v(" "),n("ol",{attrs:{start:"2"}},[n("li",[s._v("golint 配置")])]),s._v(" "),n("p",[s._v("复制 go fmt 的配置，修改 Name, Program, Arguments 三项配置，其中 Arguments 需要加上"),n("code",[s._v("-set_exit_status")]),s._v("参数")]),s._v(" "),n("p",[n("img",{attrs:{src:t(415),alt:"idea 配置 - golint配置"}})]),s._v(" "),n("h2",{attrs:{id:"go-micro"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#go-micro"}},[s._v("#")]),s._v(" go-micro")]),s._v(" "),n("h3",{attrs:{id:"开发环境-2"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#开发环境-2"}},[s._v("#")]),s._v(" 开发环境")]),s._v(" "),n("ul",[n("li",[s._v("安装 protoc-gen-micro")])]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Protobuf")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" -y protobuf-compiler\nprotoc --version  "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Ensure compiler version is 3+")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" https://github.com/protocolbuffers/protobuf/releases/download/v3.14.0/protoc-3.14.0-linux-x86_64.zip\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# sudo unzip protoc-3.14.0-linux-x86_64.zip -d /usr/local/protoc-3.14.0-linux-x86_64")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("unzip")]),s._v(" protoc-3.14.0-linux-x86_64.zip -d protoc-3.14.0-linux-x86_64\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("mv")]),s._v(" protoc-3.14.0-linux-x86_64 /usr/local/protoc-3.14.0-linux-x86_64\n\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" /etc/profile\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#添加以下内容")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[n("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("PATH")])]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$PATH")]),s._v(":/usr/local/protoc-3.14.0-linux-x86_64/bin\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("PATH")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#生效配置")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("source")]),s._v(" /etc/profile\n\nprotoc --version\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# protoc-gen-go")]),s._v("\ngo get github.com/golang/protobuf/protoc-gen-go\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# protoc-gen-micro")]),s._v("\ngo get github.com/micro/protoc-gen-micro\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br")])]),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# https://github.com/microhq/protoc-gen-micro")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# greeter.proto")]),s._v("\nsyntax "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"proto3"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("service")]),s._v(" Greeter "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\trpc Hello"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("Request"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" returns "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("Response"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\nmessage Request "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\tstring name "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\nmessage Response "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\tstring msg "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\nprotoc --proto_path"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$GOPATH")]),s._v("/src:. --micro_out"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(". --go_out"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(". *.proto\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br")])]),n("ul",[n("li",[s._v("安装 Go Micro")])]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Micro 工具集 https://github.com/micro/micro")]),s._v("\ngo get github.com/micro/micro/v3\nmicro --version\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# micro new user/api --type=api --alias=user --namespace=github.com/lalifeier --gopath=false")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Run the server locally")]),s._v("\nmicro server\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Set the environment to local (127.0.0.1:8081)")]),s._v("\nmicro "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("env")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("local")]),s._v("\n\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# generate a service (follow instructions in output)")]),s._v("\nmicro new helloworld\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# run the service")]),s._v("\nmicro run helloworld\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# check the status")]),s._v("\nmicro status\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# list running services")]),s._v("\nmicro services\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# call the service")]),s._v("\nmicro helloworld --name"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("Alice\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# curl via the api")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" -d "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('\'{"name": "Alice"}\'')]),s._v(" http://localhost:8080/helloworld\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br")])]),n("ul",[n("li",[s._v("安装 Consul")])]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" https://releases.hashicorp.com/consul/1.9.3/consul_1.9.3_linux_amd64.zip\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("unzip")]),s._v(" consul_1.9.3_linux_amd64.zip consul_1.9.3_linux_amd64\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("mv")]),s._v(" consul_1.9.3_linux_amd64 /usr/local/consul_1.9.3_linux_amd64\n\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" /etc/profile\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#添加以下内容")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[n("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("PATH")])]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$PATH")]),s._v(":/usr/local/consul_1.9.3_linux_amd64/bin\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("PATH")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#生效配置")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("source")]),s._v(" /etc/profile\n\nconsul version\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br")])])])}),[],!1,null,null,null);a.default=e.exports}}]);