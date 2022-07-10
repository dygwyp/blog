(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{572:function(t,e,r){"use strict";r.r(e);var l=r(3),a=Object(l.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("blockquote",[r("p",[t._v("本系列文章介绍了PyTorch的大部分基础知识点。"),r("br"),t._v("\n本系列文章主要参考书籍《深度学习框架PyTorch入门与实践》 陈云著。"),r("br"),t._v("\n本篇文章的CSDN链接：待更新。")])]),t._v(" "),r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"title"}),r("p",[t._v("本篇文章主要介绍PyTorch的简介，包括一些常用深度学习框架的对比，以及一些PyTorch资源。")])]),r("img",{attrs:{src:t.$withBase("/img/pytorch.jpg"),alt:"mixureSecure",width:"100%",height:"50%"}}),t._v(" "),r("h2",{attrs:{id:"pytorch简介"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#pytorch简介"}},[t._v("#")]),t._v(" PyTorch简介")]),t._v(" "),r("p",[t._v("PyTorch最初由Facebook人工智能团队在Github上开源，其历史可以追溯到2002年诞生于纽约大学的Torch。"),r("br"),t._v("\nPyTorch一经推出立刻引起了广泛关注，截止到2017年10月18日，PyTorch的热度已经超过了其它三个框架（Caffe、MXNet、Theano）。")]),t._v(" "),r("h3",{attrs:{id:"常见的深度学习框架对比"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#常见的深度学习框架对比"}},[t._v("#")]),t._v(" 常见的深度学习框架对比")]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",{staticStyle:{"text-align":"left"}},[t._v("框架")]),t._v(" "),r("th",{staticStyle:{"text-align":"left"}},[t._v("简介")]),t._v(" "),r("th",{staticStyle:{"text-align":"left"}},[t._v("优点")]),t._v(" "),r("th",{staticStyle:{"text-align":"left"}},[t._v("缺点")])])]),t._v(" "),r("tbody",[r("tr",[r("td",{staticStyle:{"text-align":"left"}},[t._v("Theano")]),t._v(" "),r("td",{staticStyle:{"text-align":"left"}},[r("div",{staticStyle:{width:"190pt"}},[r("br"),t._v("2008年诞生于LISA实验室，其设计具有较浓厚的学术气息。"),r("br"),t._v("  作为第一个Python深度学习框架，Theano很好的完成了自己的使命，为之后深度学习框架的开发奠定了基本设计方向："),r("font",{attrs:{color:"red"}},[t._v("以计算图为框架的核心，采用GPU加速计算")])],1)]),t._v(" "),r("td",{staticStyle:{"text-align":"left"}},[r("div",{staticStyle:{width:"145pt"}},[t._v("(1) Python+NumPy的组合；(2) 使用计算图；"),r("br"),t._v("(3) 学习门槛低"),r("br")])]),t._v(" "),r("td",{staticStyle:{"text-align":"left"}},[r("div",{staticStyle:{width:"145pt"}},[t._v("(1) 比Torch臃肿；"),r("br"),t._v("(2) 不支持分布式；"),r("br"),t._v("(3) 大模型的编译时间有时要很久，调试困难；"),r("br"),t._v("(4) 目前已停止开发"),r("br")])])]),t._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"left"}},[t._v("TensorFlow")]),t._v(" "),r("td",{staticStyle:{"text-align":"left"}},[t._v("2015年诞生于Google，可以看作是Theano的后继者。TensorFlow作为"),r("font",{attrs:{color:"red"}},[t._v("当前最流行的深度学习框架")]),t._v("，它拥有一个全面而灵活的生态系统，其中包含各种工具、库和社区资源")],1),t._v(" "),r("td",{staticStyle:{"text-align":"left"}},[t._v("(1) 具有更好的计算图可视化效果；"),r("br"),t._v("(2) 可扩展性强，能部署在各种服务器和移动设备上；"),r("br"),t._v("(3) 出色的社区支持；"),r("br"),t._v("(4) 性能优异"),r("br")]),t._v(" "),r("td",{staticStyle:{"text-align":"left"}},[t._v("(1) 过于复杂的系统设计，总代码量超过100万行，维护困难；"),r("br"),t._v("(2) 接口设计复杂，且频繁变动；"),r("br"),t._v("(3) 图构造是静态的，必须先被‘编译’再运行")])]),t._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"left"}},[t._v("Keras")]),t._v(" "),r("td",{staticStyle:{"text-align":"left"}},[t._v("2015年诞生于Google，是一个用Python编写的高级神经网络 API，它能够以 TensorFlow, CNTK,或者Theano作为后端运行。Keras的开发重点是"),r("font",{attrs:{color:"red"}},[t._v("支持快速的实验")])],1),t._v(" "),r("td",{staticStyle:{"text-align":"left"}},[t._v("(1) 简单容易上手；"),r("br"),t._v("(2) 提供规范丰富的文档；"),r("br"),t._v("(3) 基于Python实现，易调试易扩展；"),r("br"),t._v("(4) 可使用theano和tensorflow两个backend")]),t._v(" "),r("td",{staticStyle:{"text-align":"left"}},[t._v("(1) 缺少灵活性；"),r("br"),t._v("(2) 运行速度慢")])]),t._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"left"}},[t._v("Caffe"),r("br"),t._v("Caffe2")]),t._v(" "),r("td",{staticStyle:{"text-align":"left"}},[t._v("Caffe 2014年诞生于伯克利，核心语言是C++，支持命令行、python和MATLAB接口，可在CPU和GPU上运行。"),r("br"),t._v(" Caffe2诞生于2017年的Facebook，其沿袭了大量的Caffe设计，是一个"),r("font",{attrs:{color:"red"}},[t._v("兼具表现力、速度和模块性的开源深度学习框架")])],1),t._v(" "),r("td",{staticStyle:{"text-align":"left"}},[t._v("Caffe:"),r("br"),t._v("(1) 简洁快速，易用性强；"),r("br"),t._v("(2) 可支持Matlab 和 Python 接口"),r("br"),t._v("Caffe2: "),r("br"),t._v(" (1) 轻量级，扩展性好；"),r("br"),t._v("(2) 性能优异；"),r("br"),t._v("(3) 几乎全平台支持")]),t._v(" "),r("td",{staticStyle:{"text-align":"left"}},[t._v("Caffe: "),r("br"),t._v("(1) 缺少灵活性；"),r("br"),t._v("(2) 在递归神经网络上表现不佳"),r("br"),t._v("Caffe2: "),r("br"),t._v(" (1) 官方未提供完整的文档；(2) 安装复杂，编译过程常出现异常")])]),t._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"left"}},[t._v("MXNet")]),t._v(" "),r("td",{staticStyle:{"text-align":"left"}},[t._v("MXNet是一个深度学习库，支持各种常见的语言，其借鉴了Caffe的思想，但实现更干净。2016年，MXNet被AWS正式选择为其云计算的官方深度学习平台")]),t._v(" "),r("td",{staticStyle:{"text-align":"left"}},[t._v("(1) 支持灵活的动态图和高效的静态图，性能优异；"),r("br"),t._v("(2) 扩展性好，分布式性能强大，可移植性强；"),r("br"),t._v("(3) 支持多种语言和平台")]),t._v(" "),r("td",{staticStyle:{"text-align":"left"}},[t._v("(1) 入门门槛高；"),r("br"),t._v("(2) 文档不完善，更新慢；(3) 代码有一些小bug")])]),t._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"left"}},[t._v("CNTK")]),t._v(" "),r("td",{staticStyle:{"text-align":"left"}},[t._v("2016年诞生于微软，根据开发者描述，CNTK的性能比主流工具都要强。"),r("font",{attrs:{color:"red"}},[t._v("CNTK表现比较均衡，没有明显的短板")])],1),t._v(" "),r("td",{staticStyle:{"text-align":"left"}},[t._v("(1) 性能出众；"),r("br"),t._v("(2) 在语音领域效果突出")]),t._v(" "),r("td",{staticStyle:{"text-align":"left"}},[t._v("(1) 社区活跃度不高；"),r("br"),t._v("(2) 文档比较难懂；"),r("br"),t._v("(3) 目前不支持ARM架构，限制了其在移动设备上的发挥")])]),t._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"left"}},[t._v("PyTorch")]),t._v(" "),r("td",{staticStyle:{"text-align":"left"}},[t._v("2017年诞生于Facebook，PyTorch本质上是支持GPU的NumPy替代，配备了可用于构建和训练深度神经网络的更高级的功能。"),r("font",{attrs:{color:"red"}},[t._v("PyTorch是当前难得的简洁优雅且高效快速的框架")])],1),t._v(" "),r("td",{staticStyle:{"text-align":"left"}},[t._v("(1) 简洁，代码易于理解；(2) 速度快，优于TensorFlow和Keras等；"),r("br"),t._v("(3) 灵活易用；"),r("br"),t._v("(4) 社区活跃，文档完整")]),t._v(" "),r("td",{staticStyle:{"text-align":"left"}},[t._v("(1) 不支持移动设备部署；(2) 无可视化接口和工具")])])])]),t._v(" "),r("p",[t._v("更多对比资料请参考：")]),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://blog.csdn.net/WJ_MeiMei/article/details/88724984",target:"_blank",rel:"noopener noreferrer"}},[t._v("tensorflow和pytorch框架对比总结"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://blog.csdn.net/zuochao_2013/article/details/56024172",target:"_blank",rel:"noopener noreferrer"}},[t._v("主流深度学习框架对比"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://www.jianshu.com/p/cbba871100a6",target:"_blank",rel:"noopener noreferrer"}},[t._v("常见深度学习框架对比-《深度学习框架PyTorch:入门与实践》"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/61576496",target:"_blank",rel:"noopener noreferrer"}},[t._v("深度学习框架对比与选择"),r("OutboundLink")],1)])]),t._v(" "),r("h3",{attrs:{id:"pytorch资源"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#pytorch资源"}},[t._v("#")]),t._v(" PyTorch资源")]),t._v(" "),r("ol",[r("li",[t._v("总结类：")])]),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/64895011",target:"_blank",rel:"noopener noreferrer"}},[t._v("知乎--新手必备 | 史上最全的PyTorch学习资源汇总"),r("OutboundLink")],1)])]),t._v(" "),r("ol",{attrs:{start:"2"}},[r("li",[t._v("文档类")])]),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://pytorch.apachecn.org",target:"_blank",rel:"noopener noreferrer"}},[t._v("PyTorch 中文教程"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://pytorch-cn.readthedocs.io/zh/latest/",target:"_blank",rel:"noopener noreferrer"}},[t._v("PyTorch 中文文档"),r("OutboundLink")],1)])]),t._v(" "),r("ol",{attrs:{start:"3"}},[r("li",[t._v("视频类")])]),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://www.bilibili.com/video/av31914351/",target:"_blank",rel:"noopener noreferrer"}},[t._v("PyTorch深度学习(系列)教程-纯英文无字幕"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://morvanzhou.github.io/tutorials/machine-learning/torch/",target:"_blank",rel:"noopener noreferrer"}},[t._v("莫烦PyTorch教程"),r("OutboundLink")],1)])]),t._v(" "),r("ol",{attrs:{start:"4"}},[r("li",[t._v("代码工程类-NLP&PyTorch实战")])]),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://github.com/xavier-zy/Awesome-pytorch-list-CNVersion",target:"_blank",rel:"noopener noreferrer"}},[t._v("超赞的 PyTorch 资源大列表"),r("OutboundLink")],1),t._v(" "),r("ul",[r("li",[t._v("目录截图\n"),r("div",{attrs:{align:"left"}},[r("img",{attrs:{src:t.$withBase("/img/pytorch-list.png"),alt:"mixureSecure",width:"60%",height:"30%"}})])])])]),t._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/pytorch/text",target:"_blank",rel:"noopener noreferrer"}},[t._v("Pytorch text"),r("OutboundLink")],1),t._v(" "),r("ul",[r("li",[t._v("Torchtext是一个非常好用的库，可以帮助我们很好的解决文本的预处理问题")])])]),t._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/kamalkraj/BERT-NER",target:"_blank",rel:"noopener noreferrer"}},[t._v("BERT NER"),r("OutboundLink")],1),t._v(" "),r("ul",[r("li",[t._v("该github库是BERT的PyTorch版本，内置了很多强大的预训练模型，使用时非常方便、易上手")])])])]),t._v(" "),r("ol",{attrs:{start:"5"}},[r("li",[t._v("书籍类")])]),t._v(" "),r("ul",[r("li",[r("p",[t._v("《深度学习入门之PyTorch》电子工业出版社 作者：廖星宇")]),t._v(" "),r("ul",[r("li",[t._v("这本《深度学习入门之PyTorch》是所有PyTorch书籍中出版的相对较早的一本，作者以自己的小白入门深度学习之路，深入浅出的讲解了PyTorch的语法、原理以及实战等内容，适合新手的入门学习。但不足的是，书中有很多不严谨以及生搬硬套的地方，需要读者好好甄别")])])]),t._v(" "),r("li",[r("p",[t._v("《PyTorch深度学习》人民邮电出版社 作者：王海玲、刘江峰")]),t._v(" "),r("ul",[r("li",[t._v("该书是一本英译书籍，原作者是两位印度的大佬，该书除了PyTorch基本语法、函数外，还涵盖了ResNET、Inception、DenseNet等在内的高级神经网络架构以及它们的应用案例。该书适合数据分析师、数据科学家等相对有一些理论基础和实战经验的读者学习，不太建议作为新手的入门选择")])])]),t._v(" "),r("li",[r("p",[t._v("《深度学习框架PyTorch入门与实践》电子工业出版社 作者：陈云")]),t._v(" "),r("ul",[r("li",[t._v("这是一本2018年上市的PyTorch书籍，包含理论入门和实战项目两大部分，相较于其它同类型书籍，该书案例非常的翔实，包括：Kaggle竞赛中经典项目、GAN生成动漫头像、AI滤镜、RNN写诗、图像描述任务等。理论+实战的内容设置也更适合深度学习入门者和从业者学习")])])]),t._v(" "),r("li",[r("p",[t._v("《PyTorch机器学习从入门到实战》机械工业出版社 作者：校宝在线、孙琳等")]),t._v(" "),r("ul",[r("li",[t._v("该书同样是一本理论结合实战的Pytorch教程，相较于前一本入门+实战教程，本书的特色在于关于深度学习的理论部分讲的非常详细，后边的实战项目更加的综合。总体而言，本书也是一本适合新手学习的不错的PyTorch入门书籍")])])])])])}),[],!1,null,null,null);e.default=a.exports}}]);