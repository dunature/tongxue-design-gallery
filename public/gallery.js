const concepts=[{"id":"01","name":"星轨方舟","slug":"orbital-ark","motion":"星轨缓转 · 星尘漂移","zone":[50,15,47,53],"tone":"dark","accent":"#52dfff","fx":"orbit","src":"images/01-home.png"},{"id":"02","name":"科研纸白","slug":"research-paper","motion":"柔光呼吸 · 细线掠过","zone":[53,17,42,49],"tone":"light","accent":"#508ba4","fx":"breath","src":"images/02-home.png"},{"id":"03","name":"极光共研","slug":"aurora","motion":"极光流动 · 光点上浮","zone":[50,15,47,52],"tone":"dark","accent":"#73ffdf","fx":"aurora","src":"images/03-home.png"},{"id":"04","name":"证据晶体","slug":"evidence-crystal","motion":"晶面光泽 · 数据线扫描","zone":[51,16,46,51],"tone":"dark","accent":"#8bc9ff","fx":"scan","src":"images/04-home.png"},{"id":"05","name":"生命图谱","slug":"life-atlas","motion":"光点呼吸 · 局部脉冲","zone":[53,15,44,52],"tone":"dark","accent":"#64f0e6","fx":"pulse","src":"images/05-home.png"},{"id":"06","name":"学术长廊","slug":"academic-gallery","motion":"窗光缓移 · 空气微尘","zone":[50,16,48,53],"tone":"light","accent":"#80b8dc","fx":"beam","src":"images/06-home.png"},{"id":"07","name":"临床涟漪","slug":"clinical-ripple","motion":"同心涟漪 · 波峰呼吸","zone":[51,15,47,53],"tone":"dark","accent":"#27f1fa","fx":"ripple","src":"images/07-home.png"},{"id":"08","name":"协作星座","slug":"research-constellation","motion":"节点闪烁 · 连接线流动","zone":[51,14,47,55],"tone":"dark","accent":"#aba0ff","fx":"network","src":"images/08-home.png"},{"id":"09","name":"循证书页","slug":"evidence-editorial","motion":"页边掠光 · 纸面呼吸","zone":[51,15,47,52],"tone":"light","accent":"#5595b8","fx":"pages","src":"images/09-home.png"},{"id":"10","name":"共研启幕","slug":"launch-stage","motion":"聚光缓扫 · 舞台光晕","zone":[50,14,47,54],"tone":"dark","accent":"#88adff","fx":"spotlight","src":"images/10-home.png"}];
const pages=[{key:"home",label:"首页"},{key:"papers",label:"科研成果"},{key:"demos",label:"能力中心"},{key:"service",label:"论文服务"}];
const designNotes=[
  {
    "id": "01",
    "name": "星轨方舟",
    "form": "深色宇宙叙事 × 立体品牌雕塑",
    "idea": "把临床问题到科研发现的过程，转译成一次有方向的探索。悬浮环带标识是视觉中心，轨道线把标识、论文与数据连接起来，传达开放、共研和向前推进的品牌气质。",
    "visual": "深蓝近黑的远景、发光的蓝青环带、少量星点与椭圆轨道共同建立空间深度。它的重点是宏观的探索感：标识像承载科研协作的方舟，周围元素围绕同一中心组织。",
    "palette": [
      [
        "背景",
        "#070B19"
      ],
      [
        "内容面板",
        "#111C30"
      ],
      [
        "行动强调",
        "#52DFFF"
      ],
      [
        "主要文字",
        "#F4F8FF"
      ]
    ],
    "type": "建议用思源宋体的较粗字重呈现品牌主张，正文与导航用思源黑体或苹方。标题以两行短句构成鲜明轮廓，英文小标签保持轻量；数据数字使用等宽数字特性，方便横向比较。",
    "layout": "首屏采用左侧文字、右侧标识的非对称构图，标识可占首屏约一半宽度。能力入口以三张等宽卡片承接，进入内容区后采用稳定网格；轨道线穿行在留白中，不穿过正文。",
    "components": "深蓝实底卡片配细蓝灰描边，主要按钮使用明亮青蓝实色，次要按钮采用描边。发光只留给品牌标识和少量关键入口，数据表与阅读区域保持平整。建议卡片圆角 12px、按钮圆角 999px。",
    "pages": {
      "home": "以大环带和星轨建立品牌记忆，再用三张能力卡片分流。",
      "papers": "将论文与关键图表组成研究星图；具体研究内容放入规整的实底面板。",
      "demos": "保留右侧品牌光晕，下面以能力货架和重点解剖体验区建立主次。",
      "service": "把四步协作串成连续轨道，将交付成果呈现为可逐项查阅的文档组。"
    },
    "motion": "当前图库叠加缓慢轨道摆动与星尘漂移，主轨道约 20–26 秒一轮。正式页面可保留小幅标识悬浮，但文字和数据面板保持静止；不要把整页做成不断旋转的星空。",
    "fit": "适合把品牌愿景放在首位的官网首页、面向外部合作伙伴的开场介绍，以及需要一眼建立医学 AI 品牌识别的场景。",
    "avoid": "避免满屏粒子、密集星图与霓虹描边叠加，否则容易偏向游戏或科幻娱乐。与 10 号方案相比，本方案突出持续探索，10 号更突出聚焦亮相。"
  },
  {
    "id": "02",
    "name": "科研纸白",
    "form": "白皮书式编辑排版 × 理性网格",
    "idea": "以研究文档和清晰信息为主角，让访问者先理解内容，再感受到技术。白底、规整对齐与节制的蓝色强调，形成可以长时间阅读的学术门户气质。",
    "visual": "大面积冷白留白、浅灰分区、细线图表和局部半透明标识共同构成画面。立体元素只承担品牌点睛作用，整体形式接近经过精心排版的研究白皮书。",
    "palette": [
      [
        "背景",
        "#F8FAFC"
      ],
      [
        "内容面板",
        "#FFFFFF"
      ],
      [
        "行动强调",
        "#1467D8"
      ],
      [
        "主要文字",
        "#132842"
      ]
    ],
    "type": "建议以思源黑体或苹方为正文和操作控件字体，主标题可搭配思源宋体。让标题、摘要、元信息形成清晰三级层次，避免靠极细灰字营造精致感。正文建议 16–18px、行高 1.7–1.85。",
    "layout": "使用稳定的多栏网格与明确的左右对齐线。首屏图文比例接近平衡，正文区通过留白和浅灰底划分章节；指标、图表、说明采用一致的卡片内边距，减少阅读跳跃。",
    "components": "白色卡片以细边框为主，阴影只用于轻微区分前后层次。按钮与选中标签使用实色蓝，表格保留清楚的表头和行分隔。建议卡片圆角 8px，避免过大的胶囊卡片。",
    "pages": {
      "home": "用简洁的品牌主张与小型立体标识开场，重点突出可理解的能力入口。",
      "papers": "以论文摘要、研究设计、关键指标和图表组成可连续阅读的证据页面。",
      "demos": "使用白底能力卡片和统一的分类标签，让读者快速比较各项能力。",
      "service": "把四步流程、阶段进度和交付清单排成清晰的信息层级，突出过程透明。"
    },
    "motion": "当前图库使用柔光呼吸和约 12 秒一轮的细线掠过。正式页面建议只在进入视口时做一次轻微淡入，悬停反馈以边框和底色变化为主，保持阅读稳定。",
    "fit": "适合长期运营的学术门户、医院合作沟通与内容持续增长的成果库。相较强调舞台效果的方案，更有利于高密度信息的阅读和维护。",
    "avoid": "避免把所有内容都装进带阴影的白卡片，也不要使用过浅的正文颜色。与 09 号相比，本方案偏数字化、标准化研究文档，09 号偏纸书与人文编辑感。"
  },
  {
    "id": "03",
    "name": "极光共研",
    "form": "流体极光 × 有机立体视觉",
    "idea": "用连续流动的光带表达临床洞察与智能方法之间的交流。视觉重心是柔和的流动与汇聚，让技术呈现出开放、具有生命感的一面。",
    "visual": "深蓝背景上铺展青蓝、蓝紫的半透明光带，环带标识像由同一束光塑成。曲线、渐变与薄雾形成连续空间，边界较柔和，区别于 04 号的硬质玻璃切面。",
    "palette": [
      [
        "背景",
        "#061225"
      ],
      [
        "主要光带",
        "#4ACFEB"
      ],
      [
        "次级光带",
        "#8D8AFF"
      ],
      [
        "主要文字",
        "#F0F7FF"
      ]
    ],
    "type": "建议中文品牌大标题保留有力度的宋体字形，导航和正文采用清晰黑体。标题保持短而集中，渐变只用于少量装饰或标识，不用于长段文字。",
    "layout": "首屏采用文字在左、流体主视觉在右的构图，让曲线从视觉区流向下一屏。下方仍使用明确的矩形网格承载信息，保留动感背景与稳定内容之间的节奏。",
    "components": "卡片可使用很轻的蓝色边缘高光，但阅读区需要足够实的底色。主要按钮使用单一亮蓝，次要入口用低对比描边。建议圆角 12–16px，少用尖锐折角。",
    "pages": {
      "home": "通过环带与极光的汇聚建立“共同探索”的第一印象。",
      "papers": "在首屏以光带衬托论文组，正文图表回归稳定的深色阅读面板。",
      "demos": "用同一方向的柔性光带串起能力模块，重点体验区保持清楚边界。",
      "service": "用渐进的光带节奏连接协作步骤，交付物按文档、图表、代码分别呈现。"
    },
    "motion": "当前图库的极光约 10 秒一轮缓慢形变，局部光晕约 5 秒呼吸。正式页面可延续低幅度的流动，颜色变化保持缓慢，避免闪烁或快速粒子穿越。",
    "fit": "适合强调探索活力、跨学科融合与 AI 创新气质的品牌传播，也适合发布活动的首屏主视觉。",
    "avoid": "避免大面积高饱和渐变压住正文，也不要让所有卡片同时漂浮。与 01 号相比，这里强调有机流动，01 号强调围绕明确中心的轨道秩序。"
  },
  {
    "id": "04",
    "name": "证据晶体",
    "form": "透明玻璃展板 × 精密仪器美学",
    "idea": "把“研究有据、过程可查”转译成可以逐层观察的透明展板。标识、医学影像与统计曲线像摆放在同一实验空间中的证据，突出清楚、有序和可检视。",
    "visual": "竖向玻璃板、冷蓝边缘高光、细网格与克制的地面反射形成精密感。上部使用深色空间建立质感，下部切换到浅色内容区，形成展陈与阅读的明确分工。",
    "palette": [
      [
        "深色背景",
        "#081522"
      ],
      [
        "浅色阅读区",
        "#F1F6FB"
      ],
      [
        "玻璃高光",
        "#8BC9FF"
      ],
      [
        "深色正文",
        "#132B43"
      ]
    ],
    "type": "建议主标题用较粗宋体建立学术分量，界面说明和数据标签用黑体。曲线坐标、数字与表头尽量保持统一基线；不要让透明、发光效果降低细字的辨识度。",
    "layout": "首屏让文字与竖向展板形成左右对照，展板的纵向节奏带来秩序感。内页使用清楚的分栏、图表边界与浅色信息带，把视觉上的“透明”落实为结构上的可读。",
    "components": "玻璃质感集中在主视觉展板，真实表格和说明采用实底容器。用 1px 细描边、少量冷色阴影与 8–12px 圆角表达精密；主要按钮保持实色填充。",
    "pages": {
      "home": "通过标识、医学影像和曲线三类展板，说明品牌连接医学问题与研究证据。",
      "papers": "把论文、指标和分析图表组织为相互对应的证据组，阅读区保留足够留白。",
      "demos": "以解剖图谱作为重点体验，其他能力放在分界清楚的浅色卡片中。",
      "service": "以透明文档组表达交付完整性，流程、进度和交付清单各占明确分区。"
    },
    "motion": "当前图库叠加约 6 秒一轮的数据线扫描和约 13 秒一轮的窄光束。正式页面建议只让展板边缘出现轻微掠光，图表本身不因装饰动画发生跳动。",
    "fit": "适合强调方法严谨、成果可追溯和技术可信度的医学研究品牌，也适合呈现证据链或高质量研究交付。",
    "avoid": "避免把正文卡片全部做成透明玻璃，或在每张图表上叠加扫描线。视觉上的透明只是表达方式，具体可信度仍需通过内容与来源建立。"
  },
  {
    "id": "05",
    "name": "生命图谱",
    "form": "医学解剖可视化 × 科学图谱",
    "idea": "让医学对象本身成为主角。以心脏、血管和解剖结构建立直接的医学识别，再用线条和标签把器官、数据与研究问题连接起来。",
    "visual": "深蓝背景衬托半透明蓝色器官，细线标注与局部光点强化结构层次。视觉语言接近经过品牌化处理的医学科学插图，医学辨识度比抽象标识更突出。",
    "palette": [
      [
        "背景",
        "#061421"
      ],
      [
        "内容面板",
        "#10263A"
      ],
      [
        "结构高光",
        "#64F0E6"
      ],
      [
        "主要文字",
        "#EEF8FF"
      ]
    ],
    "type": "建议标题用具有明确笔画重量的宋体或黑体，正文与解剖标签统一使用清晰黑体。标签字号不得为了容纳更多结构而无限缩小；术语、单位和数字采用一致格式。",
    "layout": "首屏以左侧简洁主张配右侧大型医学结构，能力页则把主要体验区放到最显眼的位置。图谱周围留出标注空间，相关说明按系统或任务分组，不把文字直接堆在器官上。",
    "components": "使用深色信息卡、细结构线和少量状态标签。能力分类强调清楚的选中状态，体验区与说明区分开布局。建议容器圆角 10–12px，标注线保持细而稳定。",
    "pages": {
      "home": "用具有辨识度的器官主视觉说明医学研究定位，标识作为辅助品牌线索。",
      "papers": "让医学研究对象与统计结果并置，形成问题、方法、证据的阅读顺序。",
      "demos": "突出解剖图谱和系统分类，再展开论文、图表、视频等其他能力。",
      "service": "以文档与医学结构的组合维持风格一致，重点仍落在协作步骤和交付清单。"
    },
    "motion": "当前图库用约 5 秒一轮的局部脉冲和呼吸光点营造生命节奏。正式页面建议让动效服务于结构定位，实际旋转或分层操作留在用户主动进入的解剖体验中。",
    "fit": "适合优先展示医学专业属性、解剖能力、专科研究方向的页面，以及希望减少通用 AI 平台既视感的品牌。",
    "avoid": "避免过度写实的血液与病灶刺激，也不要在首页自动运行沉重的三维场景。与 07 号相比，本方案强调空间结构，07 号强调时间、波形与节律。"
  },
  {
    "id": "06",
    "name": "学术长廊",
    "form": "建筑展廊 × 博物馆式学术陈列",
    "idea": "把研究成果看作值得认真观看和阅读的作品。通过明亮的建筑空间、展台与留白，形成从容、开放、有文化感的学术品牌形象。",
    "visual": "白色弧面空间、通高窗光、浅灰地面与立式论文展板共同构成展廊。自然光和真实空间感承担主要气氛，蓝色标识与图表作为少量视觉焦点。",
    "palette": [
      [
        "背景",
        "#F7F8F6"
      ],
      [
        "展陈面板",
        "#FFFFFF"
      ],
      [
        "辅助强调",
        "#80B8DC"
      ],
      [
        "主要文字",
        "#17344D"
      ]
    ],
    "type": "建议主标题使用思源宋体，正文与导航搭配思源黑体。标题可以舒展，但一屏只保留一个主要叙述；说明文字像展签一样简短、有层次，详细内容进入独立阅读区域。",
    "layout": "以左侧主张与右侧展廊纵深形成空间关系，段落间留出明显呼吸区。成果卡片按展陈单元排列，使用稳定的垂直节奏；避免把整页排成密集工具面板。",
    "components": "卡片以白色面板、轻阴影和薄边界表现实体展板，按钮使用深蓝实色以保持可见性。建议卡片圆角 6–8px，边缘保持克制，减少过多玻璃模糊效果。",
    "pages": {
      "home": "把品牌标识放进明亮学术空间，传达共同探索与开放交流。",
      "papers": "将论文和研究图表视作展品，建立总览、代表作、深入阅读的顺序。",
      "demos": "用分区展陈介绍能力，重点体验作为展厅中的主展项。",
      "service": "以成组文档展台表达成果交付，流程区像导览路线一样易于理解。"
    },
    "motion": "当前图库使用约 14 秒一轮的窗光缓移和轻微空气微尘。正式页面适合慢速光影与一次性淡入，不宜让展板持续漂移或让文字跟随视差移动。",
    "fit": "适合面向医院学术带头人、研究机构与合作伙伴的品牌展示，也适合成果展、学术活动和内容品质优先的场景。",
    "avoid": "避免过度放大建筑效果导致研究内容退居背景。与 09 号相比，本方案通过“空间展陈”建立学术气质，09 号通过“纸面阅读”建立学术气质。"
  },
  {
    "id": "07",
    "name": "临床涟漪",
    "form": "参数化波纹 × 临床时序视觉",
    "idea": "把一个临床问题激发更多研究连接的过程，表达为不断向外展开的涟漪。线条、波形与节律强调连续观察，而不是瞬间给出答案。",
    "visual": "近黑蓝底上排列细密但有间距的青色等高线、同心波纹与时间序列曲线。整体以线性几何为主，立体标识较小，形成安静而有节奏的科技界面。",
    "palette": [
      [
        "背景",
        "#03151E"
      ],
      [
        "内容面板",
        "#092631"
      ],
      [
        "波纹强调",
        "#27F1FA"
      ],
      [
        "主要文字",
        "#EBFAFC"
      ]
    ],
    "type": "建议以思源黑体或苹方构建清晰的信息界面，数字使用等宽数字特性。标题可以比其他深色方案更简洁直接，避免用过多英文大写和极细字重强化仪表盘感。",
    "layout": "首屏以横向延展的波纹建立视线方向，正文用纵向章节和规则网格稳定阅读。波纹位于留白或主视觉区，真实图表放在独立面板内，防止装饰线与数据线混淆。",
    "components": "深色面板配低对比边框，青色只用于主要入口、选中标签和局部数据强调。按钮轮廓简洁，建议卡片圆角 10px；状态需要文字说明，不只依靠颜色区分。",
    "pages": {
      "home": "用中心标识和向外展开的涟漪表达临床问题带来的研究扩展。",
      "papers": "以时序图表和研究摘要建立证据层次，背景波纹不进入坐标绘图区。",
      "demos": "重点突出临床计算、时序分析等能力，同时以一致卡片组织其他任务。",
      "service": "把四步流程串成具有清楚节点的连续线，进度与交付结果分别呈现。"
    },
    "motion": "当前图库的同心波纹约 8 秒一轮缓慢扩散。正式页面应保持平稳节律，用户暂停后所有装饰停止；不采用快速闪烁或类似监护报警的视觉节奏。",
    "fit": "适合突出连续数据、动态研究和临床计算方向的品牌，也适合希望科技感明确但画面相对克制的选择。",
    "avoid": "避免让背景线密度高于真实图表，也不要把动态演示误排成实时监护界面。与 01 号的轨道相比，这里强调波的传播和时间连续性。"
  },
  {
    "id": "08",
    "name": "协作星座",
    "form": "空间卡片编组 × 网络协作叙事",
    "idea": "把论文、方法、工具与研究者的协作关系，表达为围绕共同问题组织的星座。多张漂浮资料卡与中心标识形成相互支撑的关系，突出连接和共创。",
    "visual": "深蓝空间中分布论文页、曲线图、立体节点与蓝紫高光。卡片有不同角度和前后层次，但整体仍围绕明确中心排列，形成“多份知识共同构成成果”的印象。",
    "palette": [
      [
        "背景",
        "#080E22"
      ],
      [
        "内容面板",
        "#17203B"
      ],
      [
        "协作强调",
        "#ABA0FF"
      ],
      [
        "主要文字",
        "#F4F3FF"
      ]
    ],
    "type": "建议品牌标题使用较粗宋体或黑体，资料卡上的正文统一采用清晰黑体。可读信息需要回到正向平面；斜放卡片只显示少量标题和图形，不承载长段内容。",
    "layout": "首屏左侧建立主张，右侧通过不同层级的资料卡构成知识组合。下面的内容采用稳定网格，每组卡片围绕同一个主题组织；连线用于表达关系，不承担页面导航。",
    "components": "主要内容卡采用实底，装饰卡可带轻微透视和阴影。按钮使用蓝紫或浅蓝强调，关系标签采用较低饱和度。建议卡片圆角 12px，避免每一张都使用不同角度和尺寸。",
    "pages": {
      "home": "用标识与资料卡的编组，说明仝学连接临床问题、研究方法和交付成果。",
      "papers": "把摘要、图表、方法与结果作为一个研究主题下的成组证据。",
      "demos": "将工具矩阵组织成能互相补充的能力组，清楚标出每个入口的用途。",
      "service": "把各阶段参与的文档与最终交付包建立对应，突出协作过程的连续性。"
    },
    "motion": "当前图库使用约 4 秒的节点明暗变化和约 10 秒一轮的连线光点流动。正式页面可在用户聚焦某组内容时轻微强调相关卡片，其余资料保持稳定。",
    "fit": "适合展示跨学科合作、工具组合、研究方法整合，以及需要说明“多方共同完成一个课题”的品牌故事。",
    "avoid": "避免卡片过多、连线交叉或把整页做成需要拖拽的复杂关系图。与 03 号相比，本方案以离散资料之间的连接为核心，03 号以连续光带的融合为核心。"
  },
  {
    "id": "09",
    "name": "循证书页",
    "form": "学术期刊编辑感 × 纸书实物质感",
    "idea": "把研究成果放回阅读、推敲与理解的场景中。纸页、打开的书本与自然光，让“学术”以可触摸、可阅读的方式出现，减少纯数字科技的距离感。",
    "visual": "偏暖的纸白底色、墨蓝文字、自然窗光和书页的浅阴影构成整体。少量蓝色图表与立体标识嵌入纸面场景，形成传统学术表达与现代研究工具之间的联系。",
    "palette": [
      [
        "纸面背景",
        "#F7F5F0"
      ],
      [
        "内容面板",
        "#FFFFFF"
      ],
      [
        "链接强调",
        "#356D9B"
      ],
      [
        "主要文字",
        "#16324B"
      ]
    ],
    "type": "建议中文标题采用思源宋体，正文可使用清晰黑体；长文区域也可单独评估宋体阅读效果。标题层级、摘要、图注和引文应像期刊一样有明确区别，行长保持适中。",
    "layout": "首屏用左侧文字与右侧翻开的书本形成平衡，下方按照阅读顺序分章节展开。利用细分隔线、图注和留白建立秩序，正文区建议控制在舒适的阅读宽度内。",
    "components": "内容卡以纸面和细边框为主，阴影更轻，按钮保持深蓝实色。建议卡片圆角 4–6px，以略带直角的轮廓延续纸页气质；长篇内容可直接排在页面上。",
    "pages": {
      "home": "通过书本与品牌主张建立可信、温和的学术第一印象。",
      "papers": "最适合发展为摘要、方法、图表、讨论逐层展开的期刊式成果阅读页。",
      "demos": "把每项能力介绍写成清楚的工具条目，配简短用途与代表性示例。",
      "service": "把流程与交付清单组织成易查阅的服务手册，重点说明交付物是什么。"
    },
    "motion": "当前图库使用约 12 秒一轮的页边掠光，没有星尘装饰。正式页面建议保持轻柔的入场和悬停反馈；翻页效果只用于确有分页结构的内容，不模拟无意义的纸张翻动。",
    "fit": "适合以内容信任、论文成果和长期阅读为重点的官网，也适合希望品牌更温和、更接近学术出版物的选择。",
    "avoid": "避免复古纹理、装饰花体和过重纸张阴影，也不要牺牲数字界面的检索与导航效率。与 02 号相比，本方案更重纸面与阅读情境，02 号更重清晰的数字网格。"
  },
  {
    "id": "10",
    "name": "共研启幕",
    "form": "发布会舞台 × 聚光式品牌呈现",
    "idea": "把平台亮相组织成一次聚焦的登场。标识、展台和垂直光束形成明确主角，先建立品牌记忆，再有顺序地揭示能力、成果与协作方式。",
    "visual": "深色舞台、集中照明、低台座和克制的反射共同构成首屏。与星空叙事相比，空间范围更集中、背景更安静，重要信息像依次被聚光灯照亮的展项。",
    "palette": [
      [
        "舞台背景",
        "#050A14"
      ],
      [
        "内容面板",
        "#101C2E"
      ],
      [
        "聚光强调",
        "#88ADFF"
      ],
      [
        "主要文字",
        "#F3F7FF"
      ]
    ],
    "type": "建议使用有分量的黑体大标题，与简短的品牌主张形成发布演讲式节奏。正文与按钮保持直接易读，避免堆叠小字标签；单个画面只突出一个最重要的信息层级。",
    "layout": "首屏以聚焦标识和简洁文案建立主次，随后按能力、成果、协作依次展开。内容模块可采用横向展示台的构图，但阅读顺序与按钮位置需要在四个页面中保持一致。",
    "components": "卡片像放置在舞台上的独立展项，以深色实底、少量高光边缘和清楚间距形成层次。主要按钮采用亮蓝实色；建议卡片圆角 10–12px，减少多重外发光。",
    "pages": {
      "home": "让标识和核心口号成为主角，下方能力卡像发布环节中的重点展项。",
      "papers": "以论文和研究图表作为主展品，再展开具体指标与研究内容。",
      "demos": "用一个重点体验领衔，其余能力按清楚的展示顺序排列。",
      "service": "以成组交付文档收束品牌承诺，流程与成果包承担最后的说服作用。"
    },
    "motion": "当前图库使用约 12 秒一轮的聚光缓扫和约 5 秒的舞台光晕呼吸。正式发布页可让重点元素依次淡入一次，随后保持稳定，避免持续闪光或自动轮播打断阅读。",
    "fit": "适合平台发布、学术工作坊开场、品牌宣传页，以及需要在短时间内形成明确记忆的展示场景。",
    "avoid": "避免舞台特效压过具体研究内容，也不要用自动播放音视频制造气氛。长期官网需要补足阅读层次；与 01 号相比，本方案强调“此刻亮相”，01 号强调“持续探索”。"
  }
];
const q=s=>document.querySelector(s);
const imageSource=(id,key)=>"images/"+id+"-"+key+".png?v=original-20261001";
let nativeSize=true;
let imageRequest=0;
async function loadImage(src,description){
  const request=++imageRequest,img=q("#concept"),stage=q(".stage");
  stage.dataset.state="loading";
  stage.setAttribute("aria-busy","true");
  q("#loadMessage").textContent="正在加载 "+description+"…";
  q("#retryImage").hidden=true;
  q("#pixelInfo").textContent="";
  img.alt=description+"视觉设计图";
  img.src=src;
  try{
    await img.decode();
    if(request!==imageRequest)return;
    syncView();
    stage.dataset.state="ready";
    stage.setAttribute("aria-busy","false");
    q("#loadMessage").textContent="";
  }catch(error){
    if(request!==imageRequest)return;
    stage.dataset.state="error";
    stage.setAttribute("aria-busy","false");
    q("#loadMessage").textContent=description+"暂未加载成功，请重试。";
    q("#retryImage").hidden=false;
  }
}
function syncView(){const img=q("#concept");if(!img.complete||!img.naturalWidth)return;const ratio=window.devicePixelRatio||1;const stage=q(".stage"),style=getComputedStyle(stage);const border=parseFloat(style.borderLeftWidth)+parseFloat(style.borderRightWidth);stage.style.maxWidth=((nativeSize?img.naturalWidth/ratio:Math.min(1230,img.naturalWidth))+border)+"px";q("#nativeSize").setAttribute("aria-pressed",String(nativeSize));q("#fitSize").setAttribute("aria-pressed",String(!nativeSize));q("#pixelInfo").textContent="原图 "+img.naturalWidth+" × "+img.naturalHeight;}
const hash=location.hash.slice(1).split("/");
let index=Math.max(0,concepts.findIndex(d=>d.id===hash[0]));
let pageKey=pages.some(p=>p.key===hash[1])?hash[1]:"papers";
let overview=false;
let paused=matchMedia("(prefers-reduced-motion: reduce)").matches;
q(".choices").innerHTML=concepts.map((d,i)=>'<button class="choice" data-index="'+i+'" aria-pressed="false"><img src="'+"images/thumbs/"+d.id+"-home.png"+'" alt="" loading="lazy"><div><small>STYLE '+d.id+' · 4 PAGES</small><b>'+d.name+'</b></div></button>').join("");
q(".page-tabs").innerHTML=pages.map(p=>'<button class="page-tab" data-page="'+p.key+'" aria-pressed="false">'+p.label+'</button>').join("");
function syncMotion(){document.body.classList.toggle("paused",paused);q("#motionButton").textContent=paused?"播放光效":"暂停光效";q("#motionButton").setAttribute("aria-pressed",String(!paused));}
function renderOverview(){const d=concepts[index];q(".overview").innerHTML=pages.map(p=>'<button class="tile" data-page="'+p.key+'"><div class="tile-image"><img src="'+imageSource(d.id,p.key)+'" alt="'+d.name+' · '+p.label+'" loading="lazy"></div><div><b>'+p.label+'</b><small>'+d.name+' · '+(p.key==="home"?"首页原稿":"内页设计")+'</small></div></button>').join("");}
function renderDesignNotes(id){
  const n=designNotes.find(item=>item.id===id);
  q("#designStyle").textContent=n.id+" · "+n.name;
  q("#designForm").textContent=n.form;
  q("#designBody").innerHTML='<p class="design-intro">'+n.idea+'</p><p class="design-caption">推荐落地色板 · 具体色值与字体为设计建议</p><div class="design-palette">'+n.palette.map(([label,color])=>'<span><i style="background:'+color+'" aria-hidden="true"></i>'+label+' <code>'+color+'</code></span>').join('')+'</div><dl class="design-grid">'+[["视觉语言",n.visual],["字体与排版",n.type+" "+n.layout],["材质与组件",n.components],["动效节奏",n.motion],["适用场景",n.fit],["取舍与边界",n.avoid]].map(([label,text])=>'<div><dt>'+label+'</dt><dd>'+text+'</dd></div>').join('')+'</dl><h3>四类页面如何延续</h3><dl class="design-grid design-page-notes">'+pages.map(p=>'<div><dt>'+p.label+'</dt><dd>'+n.pages[p.key]+'</dd></div>').join('')+'</dl>';
}
function show(i,key=pageKey){index=(i+concepts.length)%concepts.length;pageKey=key;const d=concepts[index];const p=pages.find(x=>x.key===pageKey);const src=imageSource(d.id,pageKey);renderDesignNotes(d.id);q("#title").textContent=d.id+" / "+d.name;q("#counter").textContent="TONGXUE · 10 STYLES × 4 PAGES";loadImage(src,d.name+" · "+p.label);q("#pageLabel").textContent=p.label;q("#motionName").textContent=d.motion;q("#original").href=src;q("#download").href=src;q("#download").download=d.id+"-"+pageKey+".png";const z=pageKey==="home"?d.zone:[54,5,43,20];const f=q(".fx");f.className="fx fx-"+d.fx;f.style.cssText="left:"+z[0]+"%;top:"+z[1]+"%;width:"+z[2]+"%;height:"+z[3]+"%;--accent:"+d.accent;f.innerHTML='<div class="glow"></div><div class="ring r1"></div><div class="ring r2"></div><div class="ring r3"></div><div class="beam"></div><div class="sweep"></div><svg class="trace" viewBox="0 0 100 100"><path d="M8 22L43 13L78 27L92 62L58 88L15 72L8 22M43 13L58 88M8 22L92 62M15 72L78 27"/><circle cx="8" cy="22" r="1"/><circle cx="43" cy="13" r="1.2"/><circle cx="78" cy="27" r="1"/><circle cx="92" cy="62" r="1.3"/><circle cx="58" cy="88" r="1"/><circle cx="15" cy="72" r="1"/></svg>'+Array.from({length:18},(_,n)=>'<i class="dust" style="left:'+((n*37+9)%94)+'%;top:'+((n*29+13)%90)+'%;animation-delay:-'+(n*.67)+'s;animation-duration:'+(5+n%5)+'s"></i>').join("");document.querySelectorAll(".choice").forEach((b,n)=>b.setAttribute("aria-pressed",String(n===index)));document.querySelectorAll(".page-tab").forEach(b=>b.setAttribute("aria-pressed",String(b.dataset.page===pageKey)));history.replaceState(null,"","#"+d.id+"/"+pageKey);}
function setOverview(value){overview=value;if(value)renderOverview();q(".overview").hidden=!value;q(".focus").hidden=value;q("#overviewButton").textContent=value?"返回单页":"整套对比";q("#motionButton").hidden=value;}
document.querySelectorAll(".choice").forEach(b=>b.addEventListener("click",()=>{show(Number(b.dataset.index));setOverview(false);}));
q(".page-tabs").addEventListener("click",e=>{const b=e.target.closest("[data-page]");if(b){show(index,b.dataset.page);setOverview(false);}});
q(".overview").addEventListener("click",e=>{const b=e.target.closest("[data-page]");if(b){show(index,b.dataset.page);setOverview(false);scrollTo({top:0,behavior:"instant"});}});
q("#motionButton").onclick=()=>{paused=!paused;syncMotion();};
q("#overviewButton").onclick=()=>setOverview(!overview);
q("#previous").onclick=()=>show(index-1);q("#next").onclick=()=>show(index+1);
document.addEventListener("keydown",e=>{if(e.target.matches("input,textarea,select")||e.metaKey||e.ctrlKey||e.altKey)return;if(e.key==="ArrowRight"||e.key==="ArrowLeft"){e.preventDefault();show(index+(e.key==="ArrowRight"?1:-1));setOverview(false);}});
window.addEventListener("hashchange",()=>{const [id,key]=location.hash.slice(1).split("/");const i=concepts.findIndex(d=>d.id===id);if(i>=0&&pages.some(p=>p.key===key)){show(i,key);setOverview(false);}});
q("#retryImage").onclick=()=>show(index);
q("#nativeSize").onclick=()=>{nativeSize=true;syncView();};
q("#fitSize").onclick=()=>{nativeSize=false;syncView();};
window.addEventListener("resize",syncView);
syncMotion();show(index);
