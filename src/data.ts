import { Brand, Product } from './types';
import { assetUrl } from './assets';

const placeholder = assetUrl('product_placeholder.svg');
export const SGD_TO_CNY_RATE = 5.2529;
export const USD_TO_CNY_RATE = 6.794;

export const formatCnyFromSgd = (sgd: number) => `约 ¥${Math.round(sgd * SGD_TO_CNY_RATE).toLocaleString('zh-CN')}`;
export const formatCnyFromUsd = (usd: number) => `约 ¥${Math.round(usd * USD_TO_CNY_RATE).toLocaleString('zh-CN')}`;

export const BRANDS: Brand[] = [
  {
    id: 'meta',
    name: 'Meta',
    chineseName: 'Meta / Ray-Ban / Oakley 智能眼镜矩阵',
    logo: '👓',
    originCountry: '美国',
    companyBackground:
      'Meta 的传统核心业务是社交网络和数字广告，旗下 Facebook、Instagram、WhatsApp 和 Messenger 构成其用户关系与内容分发基础，广告是主要商业化来源。Meta 进入 AI 眼镜市场，并不是单纯为了硬件销售收入，而是为了在手机之后争夺下一代用户入口：通过 AI 眼镜把社交拍摄、即时通讯、内容分享、实时翻译和 Meta AI 助手前置到用户第一视角场景中。',
    description:
      'Meta AI Glasses 的战略意义在于把 Meta 从“手机屏幕里的社交平台”延伸为“现实世界中的 AI 与社交入口”。Meta 通过 Ray-Ban 的日常时尚心智、Oakley 的运动心智和自有品牌低价线，形成从大众款、运动款到显示旗舰的完整产品阶梯，是海外消费级 AI 眼镜最核心的标杆玩家。',
    focus: 'POV 拍摄、开放式音频、Meta AI、线下零售和处方镜片渠道。',
    website: 'https://www.meta.com/ai-glasses/',
    launchYear: 2021,
    marketRole: '主流标杆',
    productLines: [
      'Ray-Ban Meta Gen 2：Wayfarer / Skyler / Headliner / Blayzer Optics / Scriber Optics',
      'Oakley Meta：HSTN 日常运动款 / Vanguard 专业运动款',
      'Meta Glasses：Adventurer / Fury / Starfire Kylie Edition，$299 起的自有品牌入门线',
      'Meta Ray-Ban Display + Neural Band：带镜片内显示和肌电手环的高端旗舰'
    ],
    analysisPoints: [
      'Meta 的产品线不是单点爆品，而是围绕“普通眼镜外观 + AI 摄录音频能力”做 SKU 扩张。',
      'Ray-Ban 负责日常穿搭和走量，Oakley 负责运动人群，Display 负责显示交互探索，自有品牌负责价格下探。',
      '真实零售评价和线下渠道最强，但摄像头隐私、地区功能限制、续航和无显示屏仍是高频痛点。'
    ]
  },
  {
    id: 'solos',
    name: 'Solos',
    chineseName: 'Solos AirGo AI Smartglasses',
    logo: '🎧',
    originCountry: '美国 / 香港',
    companyBackground:
      'Solos 是一家专注智能眼镜和可穿戴设备的技术型品牌，早期主要从运动智能眼镜、开放式音频和可穿戴计算场景切入，后来逐渐转向 AI smart glasses。其核心优势不在传统眼镜品牌力，而在 AirGo 技术体系：通过 Solos AirGo App、SolosChat、SolosTranslate、SmartHinge 和 Whisper Audio Technology，将眼镜硬件、AI 助手、实时翻译、消息播报、开放式音频和模块化镜框整合在一起。相比 Meta 主要绑定 Meta AI，Solos 更强调接入 ChatGPT、Claude、Gemini、DeepSeek 等外部模型，把智能眼镜作为多模型 AI 的入口。',
    description:
      '在 AI 眼镜定位上，Solos 更像“低价、多模型、模块化”的 AI-first 眼镜品牌。Solos 主要覆盖两条路线：一类是 AirGo 3 / AirGo A5 这类无摄像头音频 AI 眼镜，主打语音助手、通话、音乐、翻译和消息播报；另一类是 AirGo V / AirGo V2 这类带摄像头的视觉 AI 眼镜，主打拍照、识物、文本识别、实时翻译和多模态 AI。其差异化在于 SmartHinge 可换前框、Whisper 音频降噪、实时翻译和多模型 AI 接入；但其渠道、品牌认知和消费者口碑沉淀仍明显弱于 Meta，不是已经被大规模市场验证的销量标杆。',
    focus: 'ChatGPT / Gemini / Claude / DeepSeek 多模型、翻译、SmartHinge、低价入门。',
    website: 'https://solosglasses.com/',
    launchYear: 2018,
    marketRole: 'AI-first 挑战者',
    productLines: [
      'AirGo V2：当前视觉旗舰，16MP 摄像头，$299 起',
      'AirGo A5：无摄像头音频 AI 线，Hydro / X / 7 / 8 / 15 等框型',
      'AirGo V / AirGo Vision：上一代视觉 AI 线，强调多模型视觉问答',
      'AirGo 3：早期 ChatGPT 音频眼镜，Argon / Xeon / Helium 等系列'
    ],
    analysisPoints: [
      'Solos 的优势在开放模型和翻译场景，产品理念更像 AI 工具，而不是社交拍摄设备。',
      '零售评论样本远少于 Meta，公开反馈中对 App 成熟度、音频表现和售后体验分歧较大。',
      '适合观察“低价 + 多模型 + 可换镜腿”是否能形成稳定消费心智。'
    ]
  },
  {
    id: 'evenrealities',
    name: 'Even Realities',
    chineseName: 'Even Realities G 系列',
    logo: '✨',
    originCountry: '德国',
    companyBackground:
      'Even Realities 是一家聚焦轻量显示型智能眼镜的科技品牌，核心不是做拍摄型 AI 眼镜，也不是做沉浸式 AR 大屏，而是把智能显示、处方镜片和日常眼镜形态结合起来。其技术重点集中在 Micro LED 波导显示、Even HAO 光学系统、处方镜片适配、低打扰 HUD 显示和全天候佩戴体验。相比 Meta 强调摄像头、社交分享和 Meta AI，Solos 强调多模型接入和模块化，Even 更强调“把 AI 信息自然显示在用户眼前”，例如实时翻译字幕、会议提示、提词器、导航、通知摘要和任务提醒。',
    description:
      '在 AI 眼镜市场中，Even Realities 的定位可以概括为无摄像头、隐私友好、轻量 HUD 型 AI 眼镜代表品牌。它的 G1 是第一代验证产品，G2 是当前主推款，通过双目绿色 Micro LED 显示、Even AI / EvenLLM、35 种语言翻译、Conversate 会议辅助、Teleprompt 提词器和 R1 智能戒指交互，切入办公、会议、跨语言沟通和日常信息提示等生产力场景。整体来看，Even 不是销量规模最大的主流品牌，但在“AI 眼镜如何显示信息、如何降低隐私阻力、如何成为日常主力眼镜”这几个问题上，具有很强的参考价值。',
    focus: '无摄像头隐私、双目 HUD、提词器、翻译、日常近视镜形态。',
    website: 'https://www.evenrealities.com/',
    launchYear: 2024,
    marketRole: '轻量 HUD',
    productLines: [
      'Even G2 A / G2 B：当前旗舰，$599 起，G2 A 为 Crown Panto，G2 B 为另一主力框型',
      'Even G1 A：上一代无摄像 HUD 眼镜，$499 起，仍在官方商店中保留',
      'R1 Smart Ring：$249，G2 专属控制和健康数据配件',
      'G2 Case / G2 Clip & Pouch / R1 Charger 等官方配件'
    ],
    analysisPoints: [
      'Even 的核心不是拍摄，而是把字幕、翻译、提词、通知和导航变成“视线内文字层”。',
      '没有摄像头降低了公共场合阻力，但也意味着缺少视觉 AI 问答和 POV 内容创作能力。',
      'Trustpilot 等公开评价里，服务响应、发货、提词稳定性和高价是主要负面聚类。'
    ]
  },
  {
    id: 'brilliantlabs',
    name: 'Brilliant Labs',
    chineseName: 'Brilliant Labs Halo / Frame',
    logo: '🟠',
    originCountry: '新加坡 / 美国',
    companyBackground:
      'Brilliant Labs 是一家偏开源硬件与 AI agent 方向的智能眼镜创业品牌，核心特点不是做大众消费级拍摄眼镜，而是把 AI 眼镜做成一个可开发、可扩展的个人计算平台。其早期产品 Frame 已经具备小型显示、摄像头、麦克风、Noa AI 助手和开源开发接口；新一代 Halo 则进一步强化了彩色显示、骨传导音频、低功耗视觉传感器、AI 处理器、长期记忆和 Miniapps 生态。相比 Meta、Even、Solos，Brilliant Labs 更强调 open source、developer-friendly、personal AI agent、长期记忆和自然语言生成应用，品牌调性更偏极客、开发者和早期科技用户。',
    description:
      '在 AI 眼镜市场中，Brilliant Labs 的定位可以概括为开源 AI agent 眼镜代表品牌。它不是销量规模最大的主流品牌，也不是最成熟的消费级产品，而是更像 AI 眼镜形态和交互方式的前沿实验者：通过 Noa AI agent、Narrative 长期记忆、Vibe Mode 自然语言生成 Miniapps，以及 Liquid AI 视觉语言模型能力，探索眼镜从“拍摄/显示设备”升级为“随身 AI 代理”的可能性。其亮点在开放生态、agent 化能力、个人记忆和开发者平台建设；短板则在出货节奏、消费者口碑、隐私争议和产品成熟度仍待验证。',
    focus: '开源、Noa AI、彩色显示、传感器、开发者生态。',
    website: 'https://brilliant.xyz/',
    launchYear: 2023,
    marketRole: '开源开发者',
    productLines: [
      'Halo：当前主推开源 AI 眼镜，官方定价 $349',
      'Frame：上一代轻量 AI 眼镜，主打开源、micro OLED 和摄像头',
      'Noa AI / Miniapps：围绕眼镜构建的个人 AI agent 与应用生态'
    ],
    analysisPoints: [
      'Halo 更像开发者社区的 AI 入口，强调“眼镜 + agent + miniapp”的可扩展性。',
      '公开零售样本有限，不能用 Meta 的消费品评价标准直接判断市场规模。',
      '值得作为技术生态样本，而不是大众销量样本。'
    ]
  },
  {
    id: 'rokid',
    name: 'Rokid',
    chineseName: 'Rokid AI Glasses / Rokid Glasses',
    logo: '🪶',
    originCountry: '中国',
    companyBackground:
      'Rokid 是一家来自中国杭州的 AI/AR 智能眼镜品牌，核心方向是把人工智能、可穿戴显示和空间计算结合到日常眼镜形态中。从产品矩阵看，Rokid 不只做单一 AI 眼镜，而是同时布局无屏 AI 眼镜和显示型 AI&AR 眼镜：Rokid AI Glasses Style 偏低价、轻量、无屏，主打拍摄、开放式音频、实时翻译、AI 识图和会议纪要；Rokid Glasses 则是更高阶的显示型产品，集成 Micro LED 显示、12MP 摄像头、多模型 AI、字幕、导航、翻译和会议转写，代表 Rokid 在 AI+AR 融合方向上的完整能力。',
    description:
      '在 AI 眼镜市场中，Rokid 的定位可以概括为中国 AI/AR 眼镜出海品牌，主打性价比、多模型接入和 AI+AR 双线布局。相比 Meta 依靠 Ray-Ban / Oakley 品牌和社交生态，Rokid 更强调硬件配置、价格优势、处方镜片服务，以及 ChatGPT、Gemini、DeepSeek、Qwen 等多模型适配；相比 Even 和 Brilliant Labs，Rokid 的产品线更完整，既有对标 Ray-Ban Meta 的无屏入门款，也有对标 Even G2、Meta Ray-Ban Display 的显示型高阶款。它展示了中国品牌通过低价硬件、多模型 AI、摄像头、显示和海外电商渠道切入 AI 眼镜市场的方式；但海外售后、发货履约、配件成本、连接稳定性和品牌信任争议也说明，AI 眼镜出海不能只依赖参数和价格，还必须依赖稳定的全球服务体系。',
    focus: '无屏视觉 AI、显示型 AI&AR、12MP 摄像头、多模型 AI、实时翻译。',
    website: 'https://global.rokid.com/',
    launchYear: 2025,
    marketRole: 'AI 眼镜出海',
    productLines: [
      'Rokid AI Glasses Style：无屏摄像头 + 开放式音频款，全球官网当前 $269',
      'Rokid Glasses：双目 Micro LED 显示 + 摄像头 + AI&AR 款，全球官网当前 $699',
      '配件与镜片服务：处方镜片、胶囊电池、充电盒等多为额外购买'
    ],
    analysisPoints: [
      'Style 的参数接近 Ray-Ban Meta 的无屏视觉路线，但价格显著更低，是价格敏感型替代方案。',
      'Rokid Glasses 更接近 Even G2、Meta Ray-Ban Display 和 RayNeo X3 Pro 的显示型路线，重点在翻译、字幕、导航和会议场景。',
      'Rokid 在日本众筹、新加坡 Challenger、欧洲入口和官网评价上已有热度信号，但 Trustpilot 品牌级售后口碑仍需谨慎。'
    ]
  },
  {
    id: 'rayneo',
    name: 'RayNeo',
    chineseName: 'RayNeo X3 Pro',
    logo: '🔭',
    originCountry: '中国',
    companyBackground:
      'RayNeo / 雷鸟创新是 TCL 体系下的消费级 AR / AI 眼镜品牌，核心方向是把显示、AI 助手、空间交互和影音娱乐体验放进眼镜形态里。它的产品矩阵比单一 AI 眼镜品牌更宽：一端是 RayNeo X3 Pro 这样的旗舰 AI+AR 眼镜，具备全彩 MicroLED 显示、Gemini AI、摄像头、实时翻译、AR 导航和 AIOS；另一端是 Air 4 Pro / Air 3s Pro 这类海外零售更成熟的 AR 显示眼镜，主打 201 英寸虚拟屏、影音、游戏和便携办公。也就是说，雷鸟不是只做“AI 问答眼镜”，而是同时覆盖 AI+AR 旗舰验证和消费级 AR 显示走量产品。',
    description:
      '在 AI 眼镜市场中，RayNeo 的定位可以概括为国产消费级 AR/AI 眼镜出海品牌，主打显示能力、AI+AR 融合和影音显示生态。它和 Meta 的差异在于，Meta 更偏社交拍摄和 AI 助手，雷鸟更偏“把信息显示出来”；它和 Even / Rokid Glasses 的差异在于，RayNeo X3 Pro 走更激进的全彩 AR 显示和 Gemini AI 路线，但价格、续航、外观接受度和软件生态仍是短板。RayNeo 展示了 AI 眼镜从无屏语音助手走向 AI+AR 可视化终端的可能性；同时也说明，真正消费级落地不能只堆 MicroLED、摄像头和 AIOS，还必须解决续航、佩戴、社交接受度、应用生态和价格问题。',
    focus: '双目 AR 显示、摄像头、Gemini AI、翻译导航、较高客单价。',
    website: 'https://www.rayneo.com/',
    launchYear: 2021,
    marketRole: '高端 AR AI',
    productLines: [
      'RayNeo X3 Pro：全彩光波导 AI 眼镜，官方众筹早鸟价 $1,099',
      'RayNeo Air / Air 3s 等：更偏消费显示眼镜，非 AI 全天佩戴主线'
    ],
    analysisPoints: [
      'RayNeo X3 Pro 的显示和 AI 能力更激进，但价格、重量、量产交付和社交佩戴门槛也更高。',
      '适合作为“显示能力上探”的样本，不能直接和无屏 Ray-Ban Meta 按同一价格层比较。',
      '公开社交讨论更多集中在 CES 展示、众筹和早期体验，稳定零售评价还不足。'
    ]
  },
  {
    id: 'amazon',
    name: 'Amazon',
    chineseName: 'Amazon Echo Frames',
    logo: '🔊',
    originCountry: '美国',
    companyBackground:
      'Amazon 是美国电商、云计算、智能音箱和智能家居生态巨头，硬件产品围绕 Echo、Alexa、Fire TV、Ring、Kindle 等入口构建。Echo Frames 不是为了切入高端 AR 光学，而是把 Alexa、开放式音频、电话、通知和智能家居控制前置到眼镜形态中，让用户在户外也能获得 hands-free Alexa 体验。',
    description:
      '在 AI 眼镜市场中，Amazon Echo Frames 代表的是“语音助手 + 开放式音频”的早期智能眼镜路线。它没有摄像头、没有显示屏，不做第一视角拍摄、视觉识别或 AR 导航，因此不是最前沿的 AI glasses 形态；但它在 Alexa 生态、通知筛选、智能家居控制、无摄像头隐私和 Amazon 自营零售渠道方面有参考价值。对新入局者来说，Echo Frames 说明音频助手路线隐私阻力低、价格门槛低，但也容易被消费者理解成“眼镜形态耳机”，AI 差异化有限。',
    focus: 'Alexa、开放式音频、通话通知、智能家居、无摄像头隐私。',
    website: 'https://www.amazon.com/All-new-Echo-Frames/dp/B0BP8GLX64',
    launchYear: 2019,
    marketRole: '音频助手相邻样本',
    productLines: [
      'Echo Frames 3rd Gen：第三代 Alexa 音频智能眼镜',
      'Carrera Smart Glasses with Alexa：与 Carrera 合作的时尚镜型线'
    ],
    analysisPoints: [
      'Echo Frames 的 AI 感知弱于视觉 AI 眼镜，但渠道、价格和无摄像头接受度值得参考。',
      '它更像“把耳机和 Alexa 放进眼镜”，不是 Meta 式 POV 相机，也不是 Even 式 HUD。',
      '适合用来观察音频眼镜天花板和纯语音助手路线的局限。'
    ]
  },
  {
    id: 'xreal',
    name: 'XREAL',
    chineseName: 'XREAL One Pro',
    logo: '🖥️',
    originCountry: '中国',
    companyBackground:
      'XREAL 是中国 AR 显示眼镜品牌，长期围绕消费级 AR 光学、便携大屏、空间显示和外接设备生态构建产品心智。其核心产品不是全天候 AI 助手眼镜，而是让手机、电脑、游戏掌机等设备获得更大、更稳定、更沉浸的虚拟屏幕体验；XREAL One Pro 进一步通过自研 X1 空间计算芯片、Sony Micro-OLED、57° FOV、Bose 音频和 3DoF 空间显示强化显示体验。',
    description:
      '在 AI 眼镜调研中，XREAL 更适合作为 AR 显示相邻赛道代表，而不是严格意义上的 AI-first 眼镜品牌。它的价值在于显示体验、FOV、空间稳定、影音和办公扩屏，而不是摄像头视觉 AI、实时翻译字幕或独立 agent。XREAL 对光学显示、佩戴舒适度、外接设备体验和消费级 AR 显示定价具有参考意义；但它也说明，仅有优秀显示并不等于 AI 眼镜，因为模型入口、摄像头/传感、无感交互、续航和日常场景闭环仍然需要单独解决。',
    focus: '大屏显示、Micro OLED、X1 芯片、Bose 音频、空间计算。',
    website: 'https://www.xreal.com/one-pro',
    launchYear: 2017,
    marketRole: 'AR 显示相邻赛道',
    productLines: [
      'XREAL One Pro：57° FOV、Sony Micro OLED、X1 空间芯片',
      'XREAL One / Air 系列：便携显示眼镜线，与 AI 眼镜主线相邻'
    ],
    analysisPoints: [
      'XREAL 的核心价值是显示体验，而不是眼镜自带 AI agent。',
      '重量、外接设备和公共场合佩戴形态让它不适合直接对标 Ray-Ban Meta。',
      '适合作为“显示效果上限”和 AR 光学体验参照。'
    ]
  },
  {
    id: 'vuzix',
    name: 'Vuzix',
    chineseName: 'Vuzix Z100',
    logo: '🏭',
    originCountry: '美国',
    companyBackground:
      'Vuzix 是美国老牌智能眼镜和企业级 AR 厂商，长期服务工业、物流、医疗、远程协作、仓储和现场作业等 B2B 场景。它的优势不是大众消费品牌和时尚镜框，而是波导显示、企业部署、开发者 SDK、行业应用集成和长期硬件经验。Z100 则是 Vuzix 把企业 HUD 做得更轻、更像普通眼镜的一次尝试。',
    description:
      '在 AI 眼镜市场中，Vuzix 的定位可以概括为企业级轻量 HUD 与工作流智能眼镜代表。Z100 没有摄像头，主打绿色单目 waveguide 显示、通知、工作流提醒、手机/企业应用连接和低功耗全天使用；它不适合和 Ray-Ban Meta 按社交拍摄能力比较，也不适合和 XREAL 按娱乐大屏比较。对新入局者来说，Vuzix 的参考价值在于 B2B 场景、隐私合规、低打扰信息提示和开发者生态，但其消费端吸引力、公开零售评价和时尚品牌心智都明显有限。',
    focus: '企业通知、轻量 HUD、开发者 SDK、全天工作流。',
    website: 'https://www.vuzix.com/products/z100-smart-glasses',
    launchYear: 1997,
    marketRole: '企业 HUD',
    productLines: [
      'Z100 Smart Glasses：轻量无线智能眼镜，面向通知和工作流',
      'M 系列 / Shield 系列：更偏工业、仓储、远程协作的企业 AR 设备'
    ],
    analysisPoints: [
      'Vuzix 不是时尚消费路线，而是企业效率工具路线。',
      'Z100 的价值在低打扰通知和开发者集成，公开大众零售评价有限。',
      '适合放在报告里作为企业场景参照，而非消费端走量样本。'
    ]
  }
];

export const PRODUCTS: Product[] = [
  {
    id: 'meta-rayban-gen2',
    brandId: 'meta',
    name: 'Ray-Ban Meta Gen 2',
    line: 'Ray-Ban Meta 日常主力线',
    image: assetUrl('rayban_meta_gen2_black.png'),
    releaseDate: '2025 年发布 / 2025 年底起陆续上市',
    priceUSD: 379,
    priceSGD: 629,
    hasDisplay: false,
    hasCamera: true,
    controlMethod: '镜腿触控 / 实体拍摄键 / Hey Meta 语音',
    variants: ['Wayfarer Gen 2', 'Skyler Gen 2', 'Headliner Gen 2', 'Blayzer Optics Gen 2', 'Scriber Optics Gen 2'],
    variantDetails: [
      {
        name: 'Wayfarer Gen 2',
        difference: 'Ray-Ban 最标志性的经典方框，百搭、辨识度最高。',
        targetUser: '想要最稳妥、最经典、最容易日常穿搭的人。',
        price: '$379 起 / 约 ¥2,577 起'
      },
      {
        name: 'Skyler Gen 2',
        difference: '更柔和、更时尚，略带 cat-eye / 女性化风格。',
        targetUser: '更重视时尚感、脸型较柔和、想要不那么硬朗的人。',
        price: '$379 起 / 约 ¥2,577 起'
      },
      {
        name: 'Headliner Gen 2',
        difference: '复古圆润框型，比 Wayfarer 更圆、更 retro。',
        targetUser: '喜欢复古感、圆润框型的人。',
        price: '$379 起 / 约 ¥2,577 起'
      },
      {
        name: 'Blayzer Optics Gen 2',
        difference: '处方镜片优化款，矩形框，提供 Standard / Large 尺寸。',
        targetUser: '长期戴近视/处方眼镜，希望把智能眼镜当日常主力眼镜的人。',
        price: '$499 起 / 约 ¥3,392 起'
      },
      {
        name: 'Scriber Optics Gen 2',
        difference: '处方镜片优化款，圆润框型。',
        targetUser: '想要处方优化，但不喜欢矩形框的人。',
        price: '$499 起 / 约 ¥3,392 起'
      }
    ],
    variantConfigNote: '功能配置结论：五款同属 Ray-Ban Meta Gen 2，Meta AI、12MP 超广角摄像头、3K 视频、开放式音频、实时翻译、Meta AI App 连接和充电盒等基础能力基本一致；Wayfarer / Skyler / Headliner 主要差异是框型、颜色和镜片风格，Blayzer / Scriber 的溢价主要来自处方镜片与长期佩戴结构优化，而不是 AI 功能更强。',
    techSpecs: {
      chip: 'Qualcomm Snapdragon AR1 Gen 1',
      camera: '12MP 超广角；100° FOV；最高 3K Ultra HD 30fps / 1080p 60fps',
      weight: '约 49g',
      display: '无镜片内显示',
      battery: '约 8 小时眼镜续航；充电盒约 48 小时',
      sensors: '开放式蓝牙扬声器、5 麦克风阵列、约 90% 背景噪声抑制、佩戴检测、拍摄提示灯、触控板',
      connectivity: 'Wi-Fi 6、Bluetooth 5.3；多数基础功能可离线使用，Meta AI 需要互联网连接',
      protection: 'IPX4 防泼溅'
    },
    keyFeatures: [
      '第一视角照片和视频拍摄：12MP 超广角、100° FOV，最高 3K Ultra HD 30fps / 1080p 60fps',
      '隐蔽式开放耳蓝牙扬声器，可播放音乐、播客和媒体内容，同时不阻断环境声',
      'POV 视频通话：用眼镜摄像头分享你看到的画面，并通过降噪让通话更清晰',
      'Meta AI 视觉问答、翻译、识物和社交分享',
      '很多基础功能可离线使用，但 Meta AI 需要互联网连接',
      'Ray-Ban 经典镜型与处方镜片/变色镜片渠道最成熟',
      'Amazon、Best Buy、Ray-Ban、LensCrafters 等渠道沉淀最强'
    ],
    pros: [
      '普通眼镜外观最自然，社会接受度高于多数“科技感眼镜”。',
      '零售渠道和配镜体系成熟，消费者能试戴、配镜、退换货。',
      'POV 拍摄和开放式音频体验完整，是目前海外最具代表性的走量标杆。'
    ],
    cons: [
      '没有显示屏，导航、字幕和复杂 AI 结果仍要靠手机或语音。',
      '摄像头在办公室、课堂、会议等场景容易触发隐私顾虑。',
      'Meta AI 功能和语言能力存在地区差异，高频录像会显著影响续航。'
    ],
    sentiment: {
      rating: 4.6,
      reviewsCount: 'Amazon / Best Buy 公开评价样本最高，常见 SKU 为千级评论',
      positiveSummary: '好评集中在外观自然、拍摄方便、开放式音频实用、旅行和亲子场景记录效率高。',
      negativeSummary: '差评集中在续航、发热、无显示屏、地区功能限制和摄像头隐私压力。',
      redditTopicVolume: '很高：Reddit、YouTube、TikTok 和零售评论中都属于讨论主力。',
      typicalPositiveComments: [
        '用户普遍认为它不像数码设备，日常佩戴不会突兀。',
        '旅行和骑行用户喜欢不用掏手机即可记录第一视角。',
        '开放式音频让通勤听播客、接电话更自然。'
      ],
      typicalNegativeComments: [
        '重度拍视频时耗电快，长时间使用会感到发热。',
        '没有屏幕导致导航和字幕类场景不够直观。',
        '摄像头提示灯仍不能完全消除身边人的隐私顾虑。'
      ]
    },
    evidenceNotes: [
      '官网比较页列出 Ray-Ban Meta 多个 Gen 2 镜型，本卡按产品线合并呈现；五个款式的基础 AI 功能基本一致。',
      '官方 Ray-Ban Meta 页面强调 12MP 超广角、100° FOV、最高 3K Ultra HD 30fps / 1080p 60fps、开放式蓝牙音频、POV 视频通话和约 90% 背景噪声抑制。',
      'Wayfarer / Skyler / Headliner 更偏时尚/日常款，差异主要是框型、颜色和镜片风格；新加坡官网价按 2026-06-26 汇率折合约 ¥3,304 起。',
      'Blayzer Optics / Scriber Optics 是处方/长期佩戴优化款，强调 over-extension hinges、interchangeable nose pads、optician-adjustable temple tips；新加坡官网价折合约 ¥3,672 起。',
      '零售评分会随 SKU、镜片版本和地区变化，本报告只作为公开口碑强弱信号。'
    ],
    retailLinks: [
      { platform: 'Meta AI Glasses 官网', url: 'https://www.meta.com/ai-glasses/', price: '$379 起', status: '官方入口' },
      { platform: 'Meta SG Ray-Ban Meta', url: 'https://www.meta.com/sg/ai-glasses/ray-ban-meta/#compare', price: '折合约 ¥3,304 起', status: '官方参数/FAQ' },
      { platform: 'Meta 蓝牙音频说明', url: 'https://www.meta.com/sg/ai-glasses/bluetooth-glasses/', price: '功能说明', status: '官方说明' },
      { platform: 'Meta 官方对比页', url: 'https://www.meta.com/ai-glasses/compare/', price: '按 SKU 对比', status: '参数来源' },
      { platform: 'Ray-Ban 官方系列页', url: 'https://www.ray-ban.com/usa/ray-ban-meta-ai-glasses', price: '$379 起', status: '官方入口' },
      { platform: 'Best Buy Ray-Ban Meta', url: 'https://www.bestbuy.com/site/ray-ban-meta/ray-ban-meta-smart-glasses/pcmcat1760128154259.c?id=pcmcat1760128154259', price: '$379.99 起', status: '零售评价' }
    ]
  },
  {
    id: 'meta-oakley-hstn',
    brandId: 'meta',
    name: 'Oakley Meta HSTN',
    line: 'Oakley Meta 运动生活线',
    image: assetUrl('oakley_meta_hstn_white.png'),
    releaseDate: '2025 年发布',
    priceUSD: 399,
    hasDisplay: false,
    hasCamera: true,
    controlMethod: '镜腿触控 / 实体拍摄键 / Hey Meta 语音',
    variants: ['日常运动生活款', '$399-$479 / 约 ¥2,712-¥3,256', '支持处方镜片', 'Clear / Polarized / Transitions', 'IPX4 防泼溅', '8h + 48h 充电盒'],
    techSpecs: {
      chip: 'Qualcomm Snapdragon AR1 Gen 1',
      camera: '12MP 超广角；最高 3K 30fps 视频；支持语音或按键免提拍摄',
      weight: '约 49g',
      display: '无镜片内显示',
      battery: '约 8 小时眼镜续航；充电盒约 48 小时',
      sensors: '开放式蓝牙扬声器、自适应音量、5 麦克风阵列、32GB 存储、触控板、拍摄提示灯',
      connectivity: 'Wi-Fi 6E、Bluetooth 5.3；连接 Meta AI App，支持 Garmin / Strava 相关运动生态',
      protection: 'IPX4 防泼溅'
    },
    keyFeatures: [
      '日常运动生活款：更接近日常太阳镜，适合通勤、旅行和轻运动。',
      '支持处方镜片，并覆盖 clear / polarized / Transitions 等镜片选择。',
      '保留 Meta AI、3K 视频、开放式音频、免提通话、音乐和实时翻译。',
      '32GB 存储可容纳 100+ 段 30 秒视频和 1,000+ 张照片，适合社交分享。',
      '镜片选择更丰富，支持 clear / polarized / Transitions / prescription，是 Oakley Meta 中更适合普通消费者的版本。',
      '与 Garmin / Strava 等运动生态有关联，但运动硬件强度低于 Vanguard。'
    ],
    pros: [
      '比 Vanguard 更日常、更百搭，适合普通用户和轻运动场景。',
      '支持处方镜片和更多镜片选择，对长期佩戴用户更友好。',
      '价格低于 Vanguard，同时保留 Meta AI、POV 摄录和开放式音频主能力。'
    ],
    cons: [
      '仍然没有显示屏，运动数据可视化有限。',
      '只有 IPX4 防泼溅，无法覆盖高强度或恶劣天气运动。',
      '侧边摄像头和常规视野不如 Vanguard 适合专业运动 POV 拍摄。'
    ],
    sentiment: {
      rating: 4.5,
      reviewsCount: 'Best Buy 公开页面已有数百级评论样本',
      positiveSummary: '好评强调 Oakley 外观、日常户外佩戴、镜片选择和 Meta 功能成熟。',
      negativeSummary: '负面集中在价格、镜型适配、防护等级和与 Vanguard 的运动能力差距。',
      redditTopicVolume: '中高：讨论集中在轻运动、骑行、Ray-Ban / Oakley 外观取舍和处方镜片。',
      typicalPositiveComments: [
        '运动用户喜欢它比 Ray-Ban 更贴近户外装备审美。',
        'Prizm / 偏光 / Transitions / 处方镜片让白天户外和日常佩戴更合理。',
        '拍摄和音频体验基本继承 Meta 主线能力。'
      ],
      typicalNegativeComments: [
        '有人认为 HSTN 的运动硬件升级不如 Vanguard 明显。',
        '价格区间会让用户和 Ray-Ban Meta、运动相机做横向比较。',
        '无显示屏和 IPX4 防护让专业运动用户仍可能转向 Vanguard。'
      ]
    },
    retailLinks: [
      { platform: 'Oakley Meta 官网', url: 'https://www.oakley.com/en-us/l/oakley-meta', price: '$399 起', status: '官方入口' },
      { platform: 'Meta 官方对比页', url: 'https://www.meta.com/ai-glasses/compare/', price: '按 SKU 对比', status: '参数来源' },
      { platform: 'Best Buy Oakley 搜索页', url: 'https://www.bestbuy.com/site/searchpage.jsp?id=pcat17071&st=oakley+meta', price: '$399 起', status: '零售评价' }
    ]
  },
  {
    id: 'meta-oakley-vanguard',
    brandId: 'meta',
    name: 'Oakley Meta Vanguard',
    line: 'Oakley Meta 专业运动线',
    image: assetUrl('oakley_meta_vanguard_white.png'),
    releaseDate: '2025 年发布',
    priceUSD: 499,
    hasDisplay: false,
    hasCamera: true,
    controlMethod: '实体按键 / 触控板 / Hey Meta 语音',
    variants: ['专业运动性能款', '$499 / 约 ¥3,392', '122° 居中超广角', 'IP67 防尘防水', '9h + 36h 充电盒', 'Garmin / Strava 联动', '不支持处方 / Transitions'],
    techSpecs: {
      chip: 'Qualcomm Snapdragon AR1 Gen 1',
      camera: '12MP 居中超广角；122° FOV；3K 30fps / 最高 60fps Full HD；支持 hyperlapse / slow motion',
      weight: '约 55g',
      display: '无镜片内显示',
      battery: '约 9 小时眼镜续航；充电盒约 36 小时',
      sensors: '开放式蓝牙扬声器、自适应音量、抗风噪音频、5 麦克风阵列、32GB 存储、三点贴合系统、可更换鼻托',
      connectivity: 'Wi-Fi 6、Bluetooth 5.3；兼容 Garmin 设备和 Strava 等运动追踪应用',
      protection: 'IP67 防尘防水'
    },
    keyFeatures: [
      '专业运动性能款：面向跑步、骑行、滑雪等高强度运动。',
      '居中 12MP 超广角摄像头和 122° 视野，更适合运动 POV 拍摄。',
      'IP67 防尘防水、包裹式结构和三点贴合系统，运动佩戴更稳。',
      '支持 3K 视频、hyperlapse、slow motion，以及语音或按键免提拍摄。',
      '不支持处方镜片和 Transitions，更适合不依赖处方镜片的专业运动用户。',
      '与 Garmin / Strava 等运动平台联动，可查看训练指标、触发自动拍摄，并把距离、速度等数据叠加到照片或视频后分享。'
    ],
    pros: [
      '相比侧边摄像头，居中镜头对高速运动构图更自然。',
      'IP67 是消费 AI 眼镜里少见的高防护等级。',
      'Garmin / Strava 联动让它更像运动内容创作和训练记录工具。'
    ],
    cons: [
      '价格高、重量更高，日常通勤佩戴不够低调。',
      '不支持处方镜片或 Transitions，对近视用户不如 HSTN 友好。',
      '运动装备化外观和专业场景定位让目标人群窄于 HSTN。'
    ],
    sentiment: {
      rating: 4.6,
      reviewsCount: 'Best Buy 公开页面已有数百级评论样本',
      positiveSummary: '好评集中在居中 POV、抗风噪、防护等级和运动镜片。',
      negativeSummary: '负面集中在价格、重量、日常百搭性和近视用户适配。',
      redditTopicVolume: '中等：运动社区讨论更集中，泛消费社区声量低于 Ray-Ban。',
      typicalPositiveComments: [
        '骑行和滑雪用户更看重居中镜头带来的画面稳定感。',
        'IP67 和抗风噪让它更像真正运动装备。',
        'Garmin / Strava 关联让运动内容分享更顺手。'
      ],
      typicalNegativeComments: [
        '部分近视用户担心处方镜片适配不如 Ray-Ban 灵活。',
        '硬核运动外观不适合办公室或正式场合。',
        '$499 起的价格让用户会和 GoPro、运动手表等设备横向比较。'
      ]
    },
    retailLinks: [
      { platform: 'Oakley Meta 官网', url: 'https://www.oakley.com/en-us/l/oakley-meta', price: '$499 起', status: '官方入口' },
      { platform: 'Meta 官方对比页', url: 'https://www.meta.com/ai-glasses/compare/', price: 'Vanguard SKU', status: '参数来源' },
      { platform: 'Best Buy Oakley 搜索页', url: 'https://www.bestbuy.com/site/searchpage.jsp?id=pcat17071&st=oakley+meta', price: '$499 起', status: '零售评价' }
    ]
  },
  {
    id: 'meta-glasses-value',
    brandId: 'meta',
    name: 'Meta Glasses',
    line: 'Meta 自有品牌入门线',
    image: assetUrl('meta_glasses_family.png'),
    releaseDate: '2026 年新品线',
    priceUSD: 299,
    hasDisplay: false,
    hasCamera: true,
    controlMethod: 'Hey Meta 语音 / 2-way touchpad / 拍摄键 / 可自定义 action button',
    variants: ['US$299 起', '26 种 styles', 'Adventurer', 'Fury', 'Starfire Kylie', '20+ 语言翻译', 'IPX4', '支持 Rx 处方镜片'],
    variantDetails: [
      {
        name: 'Adventurer',
        price: '$299 / 约 ¥2,031',
        difference: '经典矩形框，timeless / versatile，Standard 和 Large 双尺寸，颜色与镜片组合最稳妥。',
        targetUser: '想要低价、低调、像普通日常眼镜的人，适合作为自有品牌线走量款。'
      },
      {
        name: 'Fury',
        price: '$299 / 约 ¥2,031',
        difference: '更 bold 的框型，颜色更跳，覆盖 Racing Green、Sandstone、Mahogany 等个性化选择。',
        targetUser: '想要智能眼镜更有设计感、更潮流，但不想提高预算的人。'
      },
      {
        name: 'Starfire Kylie',
        price: '$399 / 约 ¥2,711',
        difference: 'Kylie Jenner 合作款，slim oval 小椭圆框，Kylie AI voice、宝石细节和镜面充电盒。',
        targetUser: '更重视时尚联名、社交媒体传播和明星风格表达的用户。'
      }
    ],
    variantConfigNote: '克重与配置备注：Meta 官方目前未在公开对比页披露 Adventurer / Fury / Starfire Kylie 的逐款克重，因此这里不编造具体克数。三款核心 AI 能力基本一致，差异主要体现在框型、尺寸、颜色/镜片组合和 Starfire Kylie 的联名外观与语音设定。',
    techSpecs: {
      chip: 'Meta AI powered by Muse Spark；具体 SoC 未完全公开',
      camera: '12MP 超广角；100° 左侧视角；最高 3K 30fps / 1080p 60fps；单段最长约 3 分钟',
      weight: '官方未公开逐款克重',
      display: '无镜片内显示',
      battery: '超过 8 小时眼镜续航；充电盒额外约 40 小时',
      sensors: '开放式扬声器、自适应音量、6 麦克风阵列、风噪降低、隐私 LED、三向可调鼻托、可调镜腿',
      connectivity: 'Meta AI App；Live Translate 20+ 语言；WhatsApp / Instagram / Messenger；Be My Eyes；音乐平台 AI 集成',
      protection: 'IPX4 防泼溅 / 轻雨'
    },
    keyFeatures: [
      '$299 起的 Meta 自有品牌入门线，覆盖 26 种 styles，降低 AI 眼镜尝鲜门槛。',
      '三款框型：Adventurer 日常矩形、Fury bold 个性、Starfire Kylie 联名小椭圆。',
      '保留 12MP / 3K 视频、开放式音频、Meta AI、实时翻译和处方镜片。',
      '首批从 day one 搭载 Meta AI powered by Muse Spark，强调上下文理解、音乐控制和社交媒体相关洞察。',
      '三向可调鼻托、over-extension hinges 和用户可调镜腿，让它更像可长期佩戴的普通眼镜。',
      '上市渠道覆盖 Meta.com、Best Buy、Amazon、LensCrafters、Sunglass Hut 等，热度来自渠道铺货和媒体曝光，而非已沉淀销量。'
    ],
    pros: [
      '价格低于 Ray-Ban / Oakley 主力线，适合扩大 AI 眼镜用户基盘。',
      '低价并没有明显砍掉核心能力，仍保留 12MP、3K、开放式音频、Meta AI 和 Live Translate。',
      '三款框型覆盖日常、个性、明星联名，能测试 Meta 自有品牌的独立心智。',
      '佩戴调节和处方镜片能力更接近传统眼镜零售逻辑，有利于长期佩戴。'
    ],
    cons: [
      '去掉 Ray-Ban / Oakley 标签后，时尚信任感需要重新建立。',
      'Best Buy / Amazon 早期仍缺少稳定消费者评分，真实口碑尚未沉淀。',
      '仍是无显示屏路线，AI 结果主要靠语音和手机 App 承接。',
      '摄像头隐私、偷拍担忧和防滥用机制仍是公众讨论焦点。',
      'Starfire Kylie Edition 可能形成两极分化，时尚联名带来传播，也可能被认为过度营销。'
    ],
    sentiment: {
      rating: null,
      reviewsCount: 'Best Buy 多数 SKU 仍为 Reviews coming soon / Not Yet Reviewed',
      positiveSummary: '正面讨论集中在 US$299 起售价、自有品牌心智、功能保留、佩戴调节和 Kylie 联名传播。',
      negativeSummary: '负面风险集中在隐私担忧、去品牌化后的时尚信任、Starfire 两极化、早期真实评价缺失和无显示屏短板。',
      redditTopicVolume: '中高：上市周媒体密集上手，真实用户评论仍少，当前热度更多来自渠道铺货和新品讨论。',
      typicalPositiveComments: [
        'US$299 起显著降低 AI 眼镜门槛，比主流联名款更容易尝鲜。',
        '功能没有因为低价明显缩水，仍然保留摄像头、Meta AI、音频和翻译。',
        '三向可调鼻托、可调镜腿和处方镜片让它更像真正的日常眼镜。',
        'Kylie 合作款让 AI 眼镜进入更强的时尚和社交媒体语境。'
      ],
      typicalNegativeComments: [
        '没有 Ray-Ban / Oakley 标识后，消费者是否愿意为 Meta 自有品牌买单仍需验证。',
        '摄像头和录制提示灯仍会引发隐私和偷拍担忧。',
        '早期 SKU 评价不足，续航、AI 稳定性、配镜流程和售后还不能下定论。',
        '没有镜片内显示，导航、字幕和 AI 结果仍不如有屏路线直观。'
      ]
    },
    evidenceNotes: ['该线以 Meta 官方 Meta Glasses 页面、官方 Compare 页和早期零售/媒体上手为准；不写未披露销量。'],
    retailLinks: [
      { platform: 'Meta Glasses 官网', url: 'https://www.meta.com/ai-glasses/meta-glasses/', price: '$299 起', status: '官方入口' },
      { platform: 'Meta 官方对比页', url: 'https://www.meta.com/ai-glasses/compare/', price: 'Adventurer / Fury / Starfire', status: '参数来源' },
      { platform: 'Wired 上市报道', url: 'https://www.wired.com/story/meta-new-smart-glasses-are-cheaper-colorful-and-meta-branded', price: '$299 / $399', status: '媒体参考' },
      { platform: 'TechRadar CTO 访谈', url: 'https://www.techradar.com/ai-platforms-assistants/we-have-every-ambition-to-reach-every-corner-of-market-meta-cto-andrew-boz-bosworth-on-the-new-usd299-essilorluxotica-meta-smart-glasses', price: '$299 起', status: '媒体参考' },
      { platform: 'Android Central 上手', url: 'https://www.androidcentral.com/wearables/meta-ai-glasses-2026-hands-on-kylie-jenner', price: '$299 起', status: '上手参考' },
      { platform: 'Best Buy 搜索页', url: 'https://www.bestbuy.com/site/searchpage.jsp?id=pcat17071&st=meta+glasses+adventurer', price: '$299 起', status: '零售状态' }
    ]
  },
  {
    id: 'meta-rayban-display',
    brandId: 'meta',
    name: 'Meta Ray-Ban Display + Neural Band',
    line: 'Meta 显示旗舰线',
    image: assetUrl('meta_rayban_display_neural_band_wide.png'),
    releaseDate: '2025 年发布',
    priceUSD: 799,
    hasDisplay: true,
    hasCamera: true,
    controlMethod: 'Hey Meta 语音 / 镜腿触控 / 实体拍摄键 / Neural Band 手势',
    variants: ['右眼全彩显示', '600 x 600', '20° FOV', '3x 数字变焦', '实时字幕', '双向视频通话', 'Transitions 镜片', 'IPX4 眼镜'],
    techSpecs: {
      chip: 'Meta / Qualcomm 智能眼镜平台，具体 SoC 未完全公开',
      camera: '12MP 超广角；3024 x 4032 照片；1440 x 1920 @ 30fps 视频；3x 数字变焦；显示屏可作取景器',
      weight: '眼镜约 69g / 70g',
      display: '右眼单目全彩显示；600 x 600；20° FOV；42 PPD；最高 90Hz；30-5,000 nits',
      battery: '眼镜最高 6 小时混合使用；折叠充电盒额外约 24 小时',
      sensors: '6 麦克风阵列、2 个开放式扬声器、触控板、摄像头、隐私 LED',
      connectivity: 'Wi-Fi 6、Bluetooth 5.3；iOS 15.2+ / Android 10+',
      protection: '眼镜 IPX4；充电盒不防水'
    },
    keyFeatures: [
      '右眼镜片内显示在需要时出现、不需要时隐藏，可私密查看消息、翻译、字幕、地图、天气、日历和 Meta AI 视觉答案。',
      '12MP 摄像头支持 3x 变焦，镜片内显示可作为取景器，用于构图、拍摄和回看照片。',
      '支持 WhatsApp、Messenger、Instagram 和手机消息，可用手势私密回复，也能进行 POV + 对方画面的双向视频通话。',
      '实时字幕、附近地图建议、日历、天气、股票和音乐视觉控件都可以直接显示在镜片内。',
      '每副眼镜标配 Transitions 镜片，并支持处方镜片范围 -4.00 到 +4.00 total power。',
      '盒内包括 Display 眼镜、折叠充电盒、Meta Neural Band、手环充电器、清洁布、USB-C 线和参考指南。'
    ],
    accessorySection: {
      title: 'Meta Neural Band 手环',
      subtitle: 'Display 这条线独有的 EMG 静默手势控制配件',
      description: 'Meta Neural Band 佩戴在手腕上，通过肌电传感器读取手腕和手指的细微肌肉信号，让用户用轻微手势控制镜片内显示内容。它只与 Meta Ray-Ban Display 配套使用，核心价值是把交互从语音和触控扩展到更隐蔽、更自然的手势控制。',
      specs: [
        { label: '交互原理', value: 'EMG 肌电信号识别' },
        { label: '佩戴位置', value: '手腕佩戴，三种尺寸，需合适贴合' },
        { label: '重量', value: '约 42g' },
        { label: '续航', value: '最高约 18 小时' },
        { label: '连接', value: 'Bluetooth 5.2' },
        { label: '防护', value: 'IPX7，可应对洗手、洗碗和雨水' }
      ],
      highlights: [
        '用细微手势浏览消息、确认操作、控制音乐和切换显示内容，减少公共场合一直说话的尴尬。',
        '手环贴合度会影响信号质量，所以官方强调线下 demo 和尺寸适配。',
        '它不是通用手环，目前设计为只与 Meta Ray-Ban Display 无缝协同。'
      ]
    },
    pros: [
      '镜片内显示让 AI 回答、消息、字幕和导航不再只靠语音反馈。',
      'Neural Band 是目前消费级眼镜里最有辨识度的静默交互方案之一，适合会议、通勤和公共空间。',
      '实时字幕、双向视频通话、地图附近推荐、Instagram Reels / Stories 和音乐视觉控件都更适合有屏形态。',
      'Transitions 镜片、处方适配和 Ray-Ban 外观让它仍保留日常眼镜属性。'
    ],
    cons: [
      '$799 起，价格处于消费级 AI 眼镜高端区间。',
      '眼镜约 69g，加上手环和试戴调校流程，购买门槛明显高于普通无屏眼镜。',
      '目前更强调线下试戴和手环尺寸适配，线上直接购买便利性相对受限。',
      '6 小时混合续航适合日常分段使用，但全天重度显示场景仍有压力。',
      '显示屏、手环、处方范围和 App 生态让系统复杂度上升，早期体验更依赖适配成熟度。'
    ],
    sentiment: {
      rating: 3.8,
      reviewsCount: 'Best Buy 公开页面已有百级评价样本',
      positiveSummary: '好评集中在显示屏带来的私密信息可视化、实时字幕、双向通话和 Neural Band 手势交互的未来感。',
      negativeSummary: '负面集中在 $799 起价格、重量、6 小时续航、线下试戴门槛、手环尺寸适配和早期系统复杂度。',
      redditTopicVolume: '高：技术社区和消费电子媒体讨论集中在右眼显示、EMG 手环、是否代表 AI 眼镜下一阶段。',
      typicalPositiveComments: [
        '用户把它视为真正补齐“显示反馈”的 AI 眼镜，而不是只会拍摄和播声音的眼镜。',
        '静默手势让会议、通勤等场景不用一直语音控制，隐私和礼貌感更好。',
        '实时字幕、地图、消息和视频通话比拍摄更能体现显示屏价值。',
        'Neural Band 把“眼镜交互”从触控和语音扩展到手腕肌电，体验辨识度很高。'
      ],
      typicalNegativeComments: [
        '价格接近一台高端手机，普通用户需要更强理由才会购买。',
        '眼镜 + 手环的完整系统比普通智能眼镜更复杂，需要试戴和尺寸适配。',
        '重量和续航让全天佩戴仍有压力，尤其是重度显示和视频通话场景。',
        '目前更偏高端尝鲜，短期走量能力仍需要继续观察。'
      ]
    },
    retailLinks: [
      { platform: 'Meta Display 官网', url: 'https://www.meta.com/ai-glasses/meta-ray-ban-display/', price: '$799 起', status: '官方入口' },
      { platform: 'Meta 官方对比页', url: 'https://www.meta.com/ai-glasses/compare/', price: '$799 起', status: '参数来源' },
      { platform: 'Meta Demo 预约', url: 'https://www.meta.com/demo/scheduler/', price: '线下试戴', status: '试戴入口' },
      { platform: 'Best Buy Display 页面', url: 'https://www.bestbuy.com/product/meta-ray-ban-display-neural-band--ai-glasses-with-in-lens-display-shiny-frame-large-band-size-3-black/J3LHRV8TWF/sku/6642483', price: '$799.99', status: '零售评价' }
    ]
  },
  {
    id: 'solos-airgo-v2',
    brandId: 'solos',
    name: 'Solos AirGo V2 / Prime 2',
    line: 'Solos 视觉 AI 主力线',
    image: assetUrl('solos_v2_wide.png'),
    releaseDate: '2026 年 CES 后开售',
    priceUSD: 299,
    hasDisplay: false,
    hasCamera: true,
    controlMethod: '语音 / 触控 / Solos App / SmartHinge 模块',
    variants: ['Prime 2 Smartglasses', '16MP 视觉 AI', '多模型 AI', 'SolosTranslate', 'SmartHinge 模块化'],
    techSpecs: {
      chip: 'Solos AI 平台，调用 ChatGPT / Gemini / Claude / DeepSeek 等模型',
      camera: '16MP 摄像头；支持拍照、录像、视频稳定和低功耗 Wi-Fi',
      weight: '佩戴克重官方未稳定披露；需按最终 SKU 核验',
      display: '无镜片内显示',
      battery: '官网强调 extended battery life；V2 具体小时数仍需后续实测核验',
      sensors: '摄像头、麦克风、触控、唤醒词、Automatic Power On/Off、SmartHinge',
      connectivity: 'Bluetooth、低功耗 Wi-Fi、Solos App；支持多模型云端 AI',
      protection: '当前商品页未给出稳定防护等级，需按正式规格表核验'
    },
    keyFeatures: [
      'AirGo V2 是 Solos 当前最接近 Ray-Ban Meta / Oakley Meta 的视觉 AI 眼镜：有摄像头、多模态 AI 和视频能力。',
      '16MP 摄像头支持 Photo Capturing、Video Recording、live video stabilization 和低功耗 Wi-Fi，定位从音频眼镜升级到视觉 AI 眼镜。',
      '多模态 AI 覆盖 image / video / audio / text，支持 ChatGPT、Gemini、Claude、DeepSeek 等模型，适合识物、读文本、路牌/菜单翻译和场景问答。',
      'SolosTranslate 是全系重点功能，V2 支持 1-to-1 Translation 和 Instant Translate；SolosChat 覆盖 28+ 语言。',
      '支持 Wake-Up Word Activation、Automatic Power On/Off 和 Enhanced Directional Audio，交互更接近自然唤醒式 AI 眼镜。',
      'SmartHinge 模块化结构可更换前框，在带摄像头眼镜、普通日用眼镜和运动太阳镜形态之间切换。'
    ],
    pros: [
      '官网当前基准价 $299，低于 Ray-Ban Meta Gen 2 入门价，试错门槛更低。',
      '多模型路线开放度明显高于 Meta 绑定式体验，AI 工具属性更强。',
      '16MP 摄像头、视频稳定、翻译和 SmartHinge 模块化形成清晰差异点。'
    ],
    cons: [
      'Amazon / Best Buy 等主流零售评论样本尚未沉淀，渠道成熟度明显弱于 Meta。',
      'App、连接稳定性、真实视频质量和售后体验需要等更多上市后反馈验证。',
      '没有镜片内显示，翻译和 AI 结果仍主要依赖音频/手机承接。'
    ],
    sentiment: {
      rating: null,
      reviewsCount: 'V2 刚上市，公开零售评价样本不足',
      positiveSummary: '媒体和早期关注点集中在 $299 定价、16MP 摄像头、多模型 AI、视频稳定和模块化结构。',
      negativeSummary: '主要风险在零售可得性、软件成熟度、售后、真实视频质量和长期佩戴体验。',
      redditTopicVolume: '中低：AI 眼镜圈和科技媒体有讨论，但泛消费声量仍小于 Meta。',
      typicalPositiveComments: [
        '开放模型让用户不用被单一 AI 生态锁定。',
        '16MP 摄像头和视频稳定让它真正进入视觉 AI 眼镜范畴。',
        '$299 起让它具备较强试错吸引力。'
      ],
      typicalNegativeComments: [
        '用户会担心 App 稳定性、连接体验和视频实拍效果。',
        '品牌渠道和售后不如 Meta 让人安心。',
        '如果 AI 反馈主要靠听或手机承接，效率仍不如带显示方案。'
      ]
    },
    retailLinks: [
      { platform: 'Solos Prime 2 官方商品页', url: 'https://solosglasses.com/products/prime-2-smartglasses-solos-airgo%E2%84%A2-v2?variant=53146978648224', price: '$299', status: '官网当前基准价' },
      { platform: 'Android Central CES 2026 报道', url: 'https://www.androidcentral.com/wearables/solos-airgo-v2-smart-glasses-are-here-with-camera-enabled-ai-for-usd299-at-ces-2026', price: '$299', status: '发布报道' },
      { platform: 'AirGo V2 官方发布', url: 'https://solosglasses.com/blogs/news/solos-launched-the-airgo-v2-smart-glasses-at-ces-2026-now-available-to-buy-starting-at-299-with-multiple-frame-colors', price: '$299 起', status: '参数来源' },
      { platform: 'Solos FAQ', url: 'https://solosglasses.com/pages/faq-1', price: '功能说明', status: '官方说明' }
    ]
  },
  {
    id: 'solos-airgo-a5',
    brandId: 'solos',
    name: 'Solos AirGo A5',
    line: 'Solos 音频 AI 线',
    image: assetUrl('solos_airgo_a5_hydro_x_wide.png'),
    releaseDate: '2025 年上市',
    priceUSD: 249,
    hasDisplay: false,
    hasCamera: false,
    controlMethod: 'Hey Solos 语音唤醒 / Temple Touch Sensor / Virtual Button / Solos AirGo App',
    variants: ['第 5 代 Audio AI', '无摄像头', '$249 起 / 约 ¥1,692', 'Hydro Collection', 'SmartHinge', 'SolosTranslate 25 种语言', '10h 音乐 / 7h 通话'],
    variantDetails: [
      {
        name: 'Hydro 7 / 8 / X / 11-14',
        price: '$249 / 约 ¥1,692',
        difference: 'AirGo A5 常规 Hydro 框型，不同前框、尺寸和颜色组合，本质上属于同一代音频 AI 硬件平台。',
        targetUser: '想要低价、无摄像头、普通眼镜外观，用于翻译、通话、音乐、日程和轻量 AI 助手的用户。'
      },
      {
        name: 'Hydro 15 Titanium',
        price: '$349 / 约 ¥2,371',
        difference: 'Premium Edition 钛金属框版本，价格更高，主打更高级的材质、质感和日常佩戴舒适性。',
        targetUser: '接受更高价格、希望音频 AI 眼镜更像高端日常眼镜的人。'
      },
      {
        name: 'Temple Kit',
        price: '$174 / 约 ¥1,182',
        difference: '智能镜腿 / 模块套件，体现 Solos SmartHinge 的模块化思路，可与不同前框组合。',
        targetUser: '已有 Solos 生态前框，或希望通过镜腿模块升级/切换框型的用户。'
      }
    ],
    variantConfigNote: 'A5 Hydro 系列目前更适合按“同代音频 AI 平台 + 多框型 SKU”理解，不应把 Hydro 7 / 8 / X / 14 看成完全不同硬件平台。官网多款页面显示 Unavailable / backordered，库存状态需实时核验。',
    techSpecs: {
      chip: 'SolosChat 云端 AI；App 内可选 gpt-4o-mini / claude-3-haiku / gemini-2.0-flash 等模型',
      camera: '无摄像头',
      weight: '轻量普通眼镜外观；随 Hydro 框型和镜片变化',
      display: '无镜片内显示',
      battery: '约 10 小时音乐 / 7 小时通话',
      sensors: '立体声扬声器、麦克风、Temple Touch Sensor、Virtual Button、SmartHinge 模块',
      connectivity: 'Bluetooth；兼容 iOS / Android；依赖 Solos AirGo App 后台连接',
      protection: '官网功能区常见 IP54；部分 Amazon SKU 写 IP67，建议按具体 SKU 页面核验'
    },
    keyFeatures: [
      'AirGo A5 是 Solos 第五代 Audio AI Smartglasses，没有摄像头和显示屏，核心是“音频 + AI + 翻译 + 日程”。',
      '通过 “Hey Solos” 或 App 虚拟按钮唤起 SolosChat，可回答问题、安排会议、撰写邮件和处理轻办公任务。',
      'SolosTranslate 支持约 25 种语言实时翻译，适合旅行、多语言会议、讲座和演示场景。',
      '支持语音添加手机日历事件、会议提醒、实时天气更新，以及音乐播放、跳过和音量控制。',
      'SmartHinge 模块化结构可更换前框，从日用眼镜切换到其他镜框或运动太阳镜形态。',
      '官网信息和 Amazon 信息对防护等级存在 IP54 / IP67 口径差异，报告中应按具体 SKU 核验。'
    ],
    pros: [
      'US$249 起，低于多数带摄像头或带显示的 AI 眼镜，试错门槛低。',
      '无摄像头路线降低隐私阻力，更适合办公室、课堂、会议等敏感空间。',
      '翻译、日程、天气、音乐和轻量 AI 助手场景清楚，产品叙事比泛功能堆叠更集中。',
      'SmartHinge 模块化让同一智能镜腿适配不同前框，SKU 扩展方式和 Meta 的品牌矩阵不同。'
    ],
    cons: [
      '没有摄像头和显示屏，不能做视觉问答、POV 拍摄或视野内字幕显示，AI 能力边界明显。',
      'Amazon 公开评论样本极少且早期评分偏低，不能证明已经形成成熟口碑。',
      '音频漏音、通话质量、App 稳定性、后台运行依赖和触控灵敏度是主要差评点。',
      '官网多款显示 Unavailable / backordered，零售供货稳定性弱于 Meta。'
    ],
    sentiment: {
      rating: 2.0,
      reviewsCount: 'Amazon Hydro 8 约 1 条评价；推荐区 Hydro X / Hydro 15 也仅低个位数评价',
      positiveSummary: '正面集中在轻、像普通眼镜、无摄像头更隐私、价格低、翻译/日程/天气/音乐控制概念清晰。',
      negativeSummary: '负面集中在音频漏音、App 体验差、语音助手不稳定、后台运行依赖、塑料感、通话/音频质量一般和触控不够灵敏。',
      redditTopicVolume: '低到中：更多出现在智能眼镜小众社区和媒体测评中，尚未形成主流用户讨论量。',
      typicalPositiveComments: [
        '外观看起来接近普通眼镜，无摄像头让它比拍摄型眼镜更容易被周围人接受。',
        'US$249 价格对尝鲜用户友好，适合只需要音频 AI 和翻译的人。',
        '旅行翻译、会议提醒、天气和音乐控制是比较清晰的使用理由。'
      ],
      typicalNegativeComments: [
        'Gizmodo 测评指出音频外泄、通话声音偏闷、App 体验和语音助手稳定性不足。',
        'Amazon 早期评价提到音频外泄严重、App 很差、不适合日常佩戴。',
        '没有屏幕导致翻译和 AI 反馈不够直观，仍要依赖音频或手机 App。',
        '公开零售样本太少，购买前很难判断长期可靠性。'
      ]
    },
    retailLinks: [
      { platform: 'Hydro X / AirGo A5 官方页', url: 'https://solosglasses.com/products/hydro-x-smartglasses-solos-airgo%E2%84%A2-a5', price: '$249', status: '官方商品页' },
      { platform: 'Solos FAQ', url: 'https://solosglasses.com/pages/faq-1', price: 'SolosChat / 模型说明', status: '官方说明' },
      { platform: 'Amazon A5 Hydro 8', url: 'https://www.amazon.com/SOLOS-Integrated-Translation-Speakers-Compatible/dp/B0FW6QBCBM', price: '$249', status: '零售样本' },
      { platform: 'Gizmodo A5 评测', url: 'https://gizmodo.com/solos-airgo-a5-review-these-ai-smart-glasses-need-a-brain-transplant-2000685667', price: '媒体评测', status: '体验参考' }
    ]
  },
  {
    id: 'solos-airgo-v',
    brandId: 'solos',
    name: 'Solos AirGo V / AirGo Vision',
    line: 'Solos 第一代视觉 AI 线',
    image: assetUrl('solos_airgo_v_airgo_vision_wide.png'),
    releaseDate: '2024 年发布',
    priceUSD: 299,
    hasDisplay: false,
    hasCamera: true,
    controlMethod: '语音视觉提问 / 触控 / Solos App / SmartHinge',
    variants: ['Krypton 1', 'Krypton 2', 'Camera Hinge', '仅拍照不录像', '可拆摄像头隐私路线'],
    techSpecs: {
      chip: 'Solos AI 平台；OpenAI ChatGPT / GPT-4o 路线，亦可接入 Gemini、Claude 等模型',
      camera: 'Camera Hinge；Photo Shooting Yes；Video Recording No；最高 2048 x 1944',
      weight: '官网规格未披露净重；媒体常见口径约 42g，需按 SKU 核验',
      display: '无镜片内显示',
      battery: '约 10h 音乐 / 7h 通话；拍照与 AI 问询约 16h；待机约 2 天',
      sensors: 'Camera Hinge、Notification LED、麦克风、触控、SmartHinge 模块',
      connectivity: 'BT 5.2 + BLE，约 33ft 蓝牙距离，支持 Android / iOS',
      protection: 'IP67'
    },
    keyFeatures: [
      'AirGo V / AirGo Vision 是 Solos 第一代带摄像头视觉 AI 眼镜，也是 AirGo V2 的前身；它比 A5 更接近 Ray-Ban Meta，但影像能力明显弱于 V2。',
      '核心是 Camera Hinge：支持拍照、通知 LED 和视觉 AI 问答，但官网规格明确写明 Video Recording: No，不能录制视频。',
      '视觉 AI 可用于翻译文本、识别物体/人物、提供方向和场景问答；媒体报道提到 GPT-4o，并可接入 Gemini、Claude 等模型。',
      '可拆摄像头 / 可换前框是这一代最有辨识度的隐私设计：需要视觉 AI 时装上摄像头，不需要时可切换到无摄像头前框。',
      '保留 Solos 原有开放式音频、通话、音乐/播客、SolosChat、SolosTranslate、Whisper Message 等音频 AI 能力。',
      'Krypton 1 / Krypton 2 官方价均为 $299，但当前官网显示 Unavailable / backordered，更适合作为上一代路线案例而非当前主推走量款。'
    ],
    pros: [
      '较早验证了“视觉输入 + 多模型 AI”的眼镜路线，是 Solos V2 的直接前身。',
      '可拆摄像头比单纯依赖摄像头指示灯更直观，隐私设计有差异化。',
      '$299 定价和 SmartHinge 模块化降低了视觉 AI 眼镜的尝鲜门槛。',
      '翻译、文本识别、方向提示和开放式音频是相对清晰的工具型场景。'
    ],
    cons: [
      '不支持视频录制，和 Ray-Ban Meta / Oakley Meta / AirGo V2 的 POV 视频能力存在明显代际差距。',
      '相机质量和外观自然度被媒体认为弱于 Ray-Ban Meta，镜腿和摄像头存在感更强。',
      '当前官网多为 Unavailable / backordered，Amazon / Best Buy 没有形成稳定评价池。',
      'AI 体验、发货节奏和售后信任仍依赖小众用户反馈，成熟度弱于 Meta。'
    ],
    sentiment: {
      rating: 4.5,
      reviewsCount: 'Krypton 1 官网 6 条评价；Krypton 2 官网约 7 条评价，主流零售样本不足',
      positiveSummary: '正面集中在可拆摄像头、SmartHinge 模块化、翻译、ChatGPT 视觉识别、开放式音频和约 $299 定价。',
      negativeSummary: '负面集中在相机质量、不支持视频、镜腿偏厚、音频漏音、AI 体验成熟度和发货/库存稳定性。',
      redditTopicVolume: '中低：2024-2025 年媒体关注较多，但 Amazon / Best Buy 等主流零售讨论沉淀不足。',
      typicalPositiveComments: [
        '用户和媒体看重可拆摄像头，认为它比单纯开关或提示灯更能缓解隐私顾虑。',
        '翻译、ChatGPT 视觉识别和文本理解概念有吸引力，适合旅行、商务和跨语言交流。',
        '开放式音频、通话和触控调音量保留了 Solos 音频眼镜的基础体验。',
        '官网少量评价对在线翻译、声音清晰度和柔性镜腿有正面反馈。'
      ],
      typicalNegativeComments: [
        '媒体评测认为相机质量不足以挑战 Ray-Ban Meta，镜腿也更厚、更显眼。',
        '官网规格明确不支持视频录制，这在 2026 年已是明显短板。',
        '开放式音频在高音量下可能漏音，办公室、地铁等场景有打扰他人的风险。',
        'Reddit 等社区反馈提到 AI 表现、交付延期和用户信任问题。'
      ]
    },
    retailLinks: [
      { platform: 'Krypton 1 / AirGo V 官方页', url: 'https://solosglasses.com/products/krypton-1-smartglasses-solos-airgo%E2%84%A2-v', price: '$299', status: '官方商品页 / 当前不可用' },
      { platform: 'The Verge AirGo Vision 报道', url: 'https://www.theverge.com/2024/12/10/24317805/solos-airgo-vision-chatgpt-ai-smart-glasses-price-availability', price: '$299 / $349 bundle', status: '媒体参考' },
      { platform: 'Solos FAQ', url: 'https://solosglasses.com/pages/faq-1', price: 'SolosChat / 翻译说明', status: '官方说明' },
      { platform: 'Solos 官网', url: 'https://solosglasses.com/', price: '品牌入口', status: '官方入口' }
    ]
  },
  {
    id: 'solos-airgo-3',
    brandId: 'solos',
    name: 'Solos AirGo 3',
    line: 'Solos 早期音频 AI 平台',
    image: assetUrl('solos_airgo3_argon_wide.png'),
    releaseDate: '2023 年发布',
    priceUSD: 199,
    hasDisplay: false,
    hasCamera: false,
    controlMethod: '虚拟按钮 / 触控 / Solos App / SmartHinge',
    variants: ['Argon 日常眼镜', 'Xeon 太阳镜', 'Helium 运动太阳镜', '无摄像头', '无显示屏'],
    imageGallery: [
      {
        src: assetUrl('solos_airgo3_argon_wide.png'),
        label: 'Argon Collection',
        caption: '日常眼镜 / 办公学习 / 处方与蓝光镜片'
      },
      {
        src: assetUrl('solos_airgo3_xeon_wide.png'),
        label: 'Xeon Collection',
        caption: '太阳镜 / 户外通勤 / 旅行驾驶'
      },
      {
        src: assetUrl('solos_airgo3_helium_wide.png'),
        label: 'Helium Collection',
        caption: '运动太阳镜 / 跑步骑行 / 户外运动'
      }
    ],
    techSpecs: {
      chip: 'Audio AI Smartglasses 平台，SolosChat 通过 App 调用 ChatGPT / OpenAI 等模型',
      camera: '无摄像头',
      weight: '随 Argon / Xeon / Helium 框型和镜片变化，需按 SKU 核验',
      display: '无镜片内显示',
      battery: '约 10 小时音乐 / 7 小时通话',
      sensors: '麦克风、开放式扬声器、触控传感器、Virtual Button、SmartHinge',
      connectivity: 'Bluetooth、Solos AirGo App，兼容 iOS / Android',
      protection: 'IP67'
    },
    variantDetails: [
      {
        name: 'Argon Collection',
        price: '$249-$299 / 约 ¥1,692-¥2,031',
        difference: 'Eyeglasses 日常眼镜款，覆盖蓝光镜片、处方镜片和普通办公学习场景。',
        targetUser: '日常佩戴、办公学习、会议通话、通勤和想让智能眼镜更像普通眼镜的人。'
      },
      {
        name: 'Xeon Collection',
        price: '$199 / 约 ¥1,352',
        difference: 'Sunglasses 太阳镜款，核心 AI 与 Argon 基本一致，差异主要在太阳镜片和户外外观。',
        targetUser: '户外通勤、开车、旅行和希望智能眼镜兼具遮阳功能的人。'
      },
      {
        name: 'Helium Collection',
        price: '$199 / 约 ¥1,352',
        difference: 'Sports 运动太阳镜款，镜片面积更大，包裹感和运动佩戴稳定性更强。',
        targetUser: '跑步、骑行、户外运动和需要更稳固运动太阳镜形态的人。'
      }
    ],
    variantConfigNote:
      '三条 Collection 属于同一 AirGo 3 音频智能眼镜平台，核心智能能力基本一致：无摄像头、无显示屏、开放式音频、蓝牙通话、SolosChat / ChatGPT 语音助手、SolosTranslate、Whisper Message、SmartHinge、iOS / Android 连接和 IP67 防护。差异主要是框型、镜片、场景和价格；Helium Clip On 属于配件，约 $75。',
    keyFeatures: [
      'AirGo 3 是 Solos 较早一代 Audio AI Smartglasses，不是单一一款眼镜，而是同一音频 AI 平台下的 Argon、Xeon、Helium 三条 Collection。',
      '三者核心智能功能基本一致：无摄像头、无显示屏、开放式音频、蓝牙通话、音乐/播客、SolosChat / ChatGPT 语音助手和 SolosTranslate。',
      'Argon 面向日常眼镜、办公学习、蓝光和处方镜片；Xeon 面向太阳镜、通勤和旅行；Helium 面向跑步、骑行等运动太阳镜场景。',
      'Whisper Message / Whisper Events 可朗读短信、WhatsApp、iMessage、Teams、日历等通知，减少查看手机频率。',
      'SmartHinge 是 AirGo 3 的核心结构差异：用户可在日常、太阳镜和运动前框之间切换，路线不同于 Meta 的固定款式购买逻辑。',
      '价格带清晰：Xeon / Helium 多为 $199，Argon 主流款 $249，高配或特殊镜片款可到 $299。'
    ],
    pros: [
      '$199 起，是 Solos 较低价的音频 AI 眼镜平台，试错门槛低。',
      '无摄像头、无显示屏，隐私阻力明显低于视觉 AI 眼镜。',
      '开放式音频、翻译、消息播报、日程提醒和语音 AI 助手场景明确。',
      'Argon / Xeon / Helium 覆盖日常、太阳镜和运动场景，SKU 扩展逻辑清晰。'
    ],
    cons: [
      '没有摄像头和显示屏，不能做视觉问答、POV 拍摄或眼前字幕。',
      '翻译和 AI 结果主要依赖音频和手机 App，直观性不如 Even G2 这类 HUD 眼镜。',
      '公开零售评论和销量沉淀有限，Amazon / Best Buy 不是稳定成熟商品池。',
      '作为早期产品线，部分 SKU 和区域库存会波动，已被 A5 和 V2 等后续产品分流。'
    ],
    sentiment: {
      rating: null,
      reviewsCount: '官网 SKU 多、媒体测评较多；主流零售评价分散且样本不足',
      positiveSummary: '正面集中在开放式音频、轻量佩戴、SmartHinge、实时翻译、消息播报和多场景框型选择。',
      negativeSummary: '负面集中在 App 使用率、AI 功能粘性、开放式音频漏音、无显示屏/无摄像头带来的能力边界。',
      redditTopicVolume: '低到中：更多被当作“带开放式耳机的智能眼镜”讨论，而非成熟 AI 计算入口。',
      typicalPositiveComments: [
        '媒体测评普遍认可 AirGo 3 的开放式音频、全天佩戴感和镜框选择。',
        'SmartHinge 可换前框让同一平台覆盖办公、户外和运动场景。',
        'SolosTranslate、Whisper Message 和语音 AI 助手有明确的旅行、会议和通勤用途。'
      ],
      typicalNegativeComments: [
        '没有屏幕导致翻译和通知仍要靠听或手机承接，信息密度有限。',
        '作为开放式音频设备，高音量下可能漏音，安静公共空间不一定合适。',
        '部分用户把它主要当蓝牙耳机使用，App 和 AI 功能未必形成高频习惯。'
      ]
    },
    retailLinks: [
      { platform: 'Argon 7 官方页', url: 'https://solosglasses.com/products/airgo3-argon-collection-argon-7?variant=46027256332448', price: '$249', status: '日常眼镜款' },
      { platform: 'Xeon 5 官方页', url: 'https://solosglasses.com/products/airgo3-xeon-collection-xeon-5?variant=46049161281696', price: '$199', status: '太阳镜款' },
      { platform: 'Helium 2 官方页', url: 'https://solosglasses.com/products/airgo3-helium-collection-helium-2?variant=47025276715168', price: '$199', status: '运动太阳镜款' },
      { platform: 'Laptop Mag AirGo 3 评测', url: 'https://www.laptopmag.com/reviews/solos-airgo-3-smart-glasses', price: '媒体评测', status: '体验参考' }
    ]
  },
  {
    id: 'even-g2',
    brandId: 'evenrealities',
    name: 'Even G2',
    line: 'Even 当前 HUD 旗舰线',
    image: assetUrl('even_g2_b_wide.png'),
    releaseDate: '2026 年主推',
    priceUSD: 599,
    hasDisplay: true,
    hasCamera: false,
    controlMethod: 'Hey Even 语音 / 触控 / Even Hub / R1 Smart Ring',
    variants: ['G2 A Crown Panto', 'G2 B Rectangular', 'Even R1 可选配件', '无摄像头', '双目 HUD'],
    imageGallery: [
      {
        src: assetUrl('even_g2_b_wide.png'),
        label: 'Even G2 A',
        caption: 'Crown Panto 复古圆润框型'
      },
      {
        src: assetUrl('even_g2_a_wide.png'),
        label: 'Even G2 B',
        caption: 'Rectangular 矩形商务框型'
      }
    ],
    techSpecs: {
      chip: 'Even 自研光学与低功耗系统，具体 SoC 未完全公开',
      camera: '无摄像头',
      weight: '约 36g',
      display: '双目绿色 Micro LED 波导；640 x 350；27.5° FOV；60Hz；1200 nits；98% 透光率',
      battery: '最高约 2 天；约 1-1.5 小时充满；充电盒最多约 7 次完整充电',
      sensors: '4 麦克风、环境光、自适应亮度、触控；R1 可选作手势控制器',
      connectivity: 'Bluetooth Low Energy 5.4；Even Hub / Companion App',
      protection: 'IP65'
    },
    variantDetails: [
      {
        name: 'Even G2 A',
        price: '$599 / 约 ¥4,070',
        difference: 'Crown Panto 复古圆润框型，frame size 48-23，外观更柔和。',
        targetUser: '更偏日常、复古、柔和脸型和希望智能眼镜低调像普通眼镜的人。'
      },
      {
        name: 'Even G2 B',
        price: '$599 / 约 ¥4,070',
        difference: 'Rectangular 矩形框，frame size 50-20，视觉上更利落、更办公。',
        targetUser: '更偏商务、效率场景和喜欢矩形镜框、线条更清晰的人。'
      }
    ],
    variantConfigNote:
      'G2 A 与 G2 B 的核心硬件和 AI 功能基本一致，主要差异是框型、尺寸和外观风格。R1 不是 G2 正常使用的必需组件，G2 的显示、翻译、通知、提词和会议辅助功能可独立运行。',
    accessorySection: {
      title: '配套设备：Even R1 Smart Ring',
      subtitle: 'G2 的智能戒指控制器与健康追踪配件；$249 / 约 ¥1,692',
      image: assetUrl('even_r1_ring_wide.png'),
      description:
        'Even R1 是 Even G2 的配套智能戒指，不是 G2 的必需组件。它的核心价值有两类：一是作为隐蔽控制器，通过 tap、scroll、long-press 等手势控制 G2 的 Dashboard、菜单、确认和滚动；二是作为健康追踪设备，记录心率、HRV、血氧、皮肤温度、步数、睡眠和 Productivity Score。R1 提升公共场景下的无感交互体验，但 G2 的基础显示、翻译、通知和提词功能并不依赖 R1。',
      specs: [
        { label: '价格', value: '$249 / 约 ¥1,692' },
        { label: '是否必需', value: '非必需，G2 可独立使用' },
        { label: '兼容性', value: '当前用于 G2 交互；不支持 G1' },
        { label: '控制方式', value: 'tap / scroll / long-press / Dashboard' },
        { label: '健康指标', value: '心率、HRV、血氧、皮温、步数、睡眠' },
        { label: '定位', value: 'Wearable interaction + health tracking' }
      ],
      highlights: [
        '让 G2 在会议、演讲、通勤等公共场景中操作更隐蔽。',
        '本质是输入方式和健康配件，不会改变 G2 的核心显示能力。',
        '可单独购买，但核心价值仍依附 Even G2 生态。'
      ]
    },
    keyFeatures: [
      'Even G2 是当前主推的第二代轻量显示型 AI smart glasses，路线明显区别于 Meta / Solos 的“摄像头 + 音频 + AI”。',
      '无摄像头、无外放喇叭，依靠麦克风输入和双目 HUD 输出，更适合隐私敏感、商务会议和日常信息提示场景。',
      '双目绿色 Micro LED 波导显示用于通知、翻译字幕、提词器、导航、会议提示和 AI 摘要，而不是沉浸式大屏 AR。',
      'Conversate 支持 Prep Notes、AI Cues、AI Summary；Translate 支持 35 种语言实时翻译；Teleprompt 支持语音控制提词。',
      'Even AI 由 EvenLLM 驱动，强调上下文 cues、summaries、translation 和 smart notifications。',
      '支持处方镜片，范围 -12.00 到 +12.00；单光可在线购买，渐进多焦点需通过授权眼镜合作门店。'
    ],
    pros: [
      '无摄像头路线降低隐私阻力，比拍摄型眼镜更适合会议、课堂和商务场景。',
      '双目 HUD 对翻译、提词、通知、导航和会议提示比纯音频眼镜更直观。',
      '外观、重量和处方适配都在向“长期主力眼镜”靠拢。',
      'R1 提供更隐蔽的输入方式，让公共场景交互更自然。'
    ],
    cons: [
      '没有摄像头，无法做视觉识别、拍摄和第一视角内容创作。',
      '显示为绿色信息层，不适合复杂图像、娱乐或沉浸式 AR。',
      'G2 本体 $599，若叠加 R1、处方镜片和配件，完整成本会快速升高。',
      '公开反馈中仍有蓝牙连接、软件稳定性、R1 误触/断连和售后体验争议。'
    ],
    sentiment: {
      rating: 2.2,
      reviewsCount: 'Trustpilot 公开样本约 70+ 条，评价分化明显',
      positiveSummary: '正面集中在普通眼镜外观、无摄像隐私、HUD 翻译/提词、会议辅助和 R1 交互潜力。',
      negativeSummary: '负面集中在蓝牙连接、软件 bug、R1 误触/断连、不能回复消息、价格和客服售后。',
      redditTopicVolume: '中等：讨论集中在无摄像 HUD 是否更适合日常、翻译/提词实用性和 R1 交互稳定性。',
      typicalPositiveComments: [
        '用户喜欢它看起来不像拍摄设备，商务场合更自然。',
        '实时翻译像字幕一样出现在视线内，能够减少低头看手机。',
        '提词器、会议提示和 AI 摘要是效率人群最容易理解的功能。',
        'R1 让 Dashboard 和菜单导航更容易，操作比频繁触摸眼镜更隐蔽。'
      ],
      typicalNegativeComments: [
        '部分用户反馈蓝牙 bug、功能不稳定和固件更新后通信异常。',
        'G2 + R1 + 处方镜片的总成本很高，价值感需要强场景支撑。',
        'AI 问答和翻译准确性仍有分化，不是所有用户都认为成熟。',
        '没有摄像头让视觉 AI 能力天然缺失。'
      ]
    },
    evidenceNotes: [
      'G2 官方商店显示 From $599；颜色、镜片和地区可能影响最终价格。',
      'Trustpilot 评分只代表公开售后/履约声量，不能等同产品全量满意度。'
    ],
    retailLinks: [
      { platform: 'Even 官网', url: 'https://www.evenrealities.com/', price: '$599 起', status: '官方入口' },
      { platform: 'Even 官方商店', url: 'https://www.evenrealities.com/store', price: 'G2 From $599 / R1 $249', status: '官方价格' },
      { platform: 'Even Retailers', url: 'https://www.evenrealities.com/retailers', price: '试戴 / 验配渠道', status: '官方渠道' },
      { platform: 'Trustpilot', url: 'https://www.trustpilot.com/review/evenrealities.com', price: '2.2 / 5', status: '公开口碑' }
    ]
  },
  {
    id: 'even-g1',
    brandId: 'evenrealities',
    name: 'Even G1',
    line: 'Even 上一代 HUD 线',
    image: assetUrl('even_g1_new.png'),
    releaseDate: '2024 年发布',
    priceUSD: 499,
    hasDisplay: true,
    hasCamera: false,
    controlMethod: '语音 / 触控 / Even App / HeadUp',
    variants: ['G1 A Panto', 'G1 B Rectangular', 'G1 Clip & Pouch', '不支持 R1'],
    techSpecs: {
      chip: 'Even 低功耗 HUD 平台，具体 SoC 未完全公开',
      camera: '无摄像头',
      weight: '约 38-40g',
      display: '双目绿色 Micro LED 波导；640 x 200；25° FOV；20Hz；1000 nits；98% 透光率',
      battery: '最高约 1.5 天；充电盒约 2.5 次完整充电；完全充电约 2-3 小时',
      sensors: '2 麦克风、触控、环境光、自适应亮度、HeadUp 交互',
      connectivity: 'Bluetooth Low Energy 5.2；兼容 iOS / Android',
      protection: '官方资料未突出防护等级，需按 SKU 核验'
    },
    variantDetails: [
      {
        name: 'Even G1 A',
        price: '$499 / 约 ¥3,390',
        difference: 'Panto 圆润复古框型，当前官网 Store 主要展示的 G1 在售款。',
        targetUser: '想体验 Even 轻量 HUD 路线，但预算低于 G2 的日常佩戴用户。'
      },
      {
        name: 'Even G1 B',
        price: '英国约 £679 / 约 ¥6,106',
        difference: '更矩形的经典框型，常见于早期报道和部分授权零售渠道。',
        targetUser: '偏好方框/矩形框、需要线下验配或区域零售购买的人。'
      },
      {
        name: 'G1 Clip & Pouch',
        price: '$99 / 约 ¥672',
        difference: '太阳镜夹片 + 收纳配件，用于补充户外遮阳场景。',
        targetUser: '已有 G1、希望增加户外太阳镜使用场景的人。'
      }
    ],
    variantConfigNote:
      'G1 是上一代产品，当前官网仍在售但 G2 已成为主推款。G1 不支持 R1 智能戒指，交互主要依靠手机 App、眼镜本体和 HeadUp/软件功能。',
    keyFeatures: [
      'Even G1 是 Even Realities 第一代轻量显示型智能眼镜，定位为 everyday smart glasses，不走拍摄路线，也不是大屏 AR。',
      '核心是无摄像头、无扬声器、低打扰双目 HUD，用于导航、翻译、AI 信息、QuickNote、Dashboard、实时字幕和 Teleprompt。',
      '显示规格为 640 x 200、25° FOV、20Hz、1000 nits，低于 G2 的 640 x 350、27.5° FOV、60Hz、1200 nits。',
      '主要功能包括 Teleprompt、Translate、Navigate、Even AI、QuickNote、Dashboard / HeadUp、Transcribe 和 Notification。',
      '支持处方镜片和线下眼镜师调校，官网称有 300+ opticians 可调校 pantoscopic tilt、vertex distance、wrap angle 等参数。',
      'G1 不依赖 R1，也不能用 R1 控制；R1 当前只支持 G2 交互。'
    ],
    pros: [
      '已经验证无摄像 HUD 的基本使用场景：提词、翻译、导航、通知和 QuickNote。',
      '外观接近普通眼镜，隐私阻力低于拍摄型 AI 眼镜。',
      '当前官网价 $499，低于 G2，适合作为 Even 早期 HUD 路线的价格参照。',
      '处方镜片和线下验配能力较强，有利于长期日常佩戴。'
    ],
    cons: [
      '显示、刷新率、续航、防护、交互和软件体验都弱于 G2。',
      '不兼容 R1 智能戒指，交互方式不如 G2 + R1 自然。',
      '没有摄像头和扬声器，不能拍摄、视觉识别、通话或播放音乐。',
      '品牌整体口碑受到软件 bug、黑屏/冻结、数据不准和客服响应差等反馈影响。'
    ],
    sentiment: {
      rating: 2.2,
      reviewsCount: 'Even 品牌 Trustpilot 样本可作为整体售后口碑参考',
      positiveSummary: '正面集中在普通眼镜外观、提词器、翻译、导航、Dashboard 和无摄像隐私路线。',
      negativeSummary: '负面集中在高价格、AI/软件成熟度、功能边界、交互限制、售后和品牌整体口碑。',
      redditTopicVolume: '中等偏低：G2 发布后，G1 更多作为上一代对比对象。',
      typicalPositiveComments: [
        'Reddit 一周体验用户称硬件可靠、做工漂亮、全天佩戴舒适，绿色显示不太分散注意力。',
        'Tom’s Guide 认为 HUD 提词、实时翻译、导航和通知是 G1 的核心价值。',
        '没有摄像头、没有外放喇叭，让它更像低调的信息提示眼镜。',
        '处方镜片和线下验配让它比纯电子设备更接近日常主力眼镜。'
      ],
      typicalNegativeComments: [
        'Wired 等测评认为部分功能仍需打磨，消息回复、双向翻译和导航体验有限。',
        '没有 R1 支持，交互方式比 G2 新系统更受限。',
        '没有摄像头和扬声器，无法覆盖 Ray-Ban Meta 式拍摄、社交分享、音乐和通话场景。',
        'Trustpilot 负面反馈集中在软件限制、bug、冻结、黑屏、数据不准和客服响应差。'
      ]
    },
    retailLinks: [
      { platform: 'Even 官网', url: 'https://www.evenrealities.com/', price: '$499 起', status: '官方入口' },
      { platform: 'Even 官方商店', url: 'https://www.evenrealities.com/store', price: 'G1 From $499', status: '官方价格' },
      { platform: 'Even Retailers', url: 'https://www.evenrealities.com/retailers', price: '试戴 / 验配渠道', status: '官方渠道' },
      { platform: 'Trustpilot', url: 'https://www.trustpilot.com/review/evenrealities.com', price: '2.2 / 5', status: '公开口碑' }
    ]
  },
  {
    id: 'brilliant-halo',
    brandId: 'brilliantlabs',
    name: 'Brilliant Labs Halo',
    line: 'Brilliant 当前开源 AI Agent 线',
    image: assetUrl('brilliant_halo_wide.jpg'),
    releaseDate: '2025 年发布 / 2026 年早期出货',
    priceUSD: 349,
    hasDisplay: true,
    hasCamera: false,
    controlMethod: 'Noa AI / 语音 / Vibe Mode / Miniapps / 开源 SDK',
    variants: ['Halo Black', 'Noa AI Agent', 'Miniapps 开源生态'],
    techSpecs: {
      chip: 'Alif B1 低功耗 AI 处理器；Cortex-M55 CPU + NPU',
      camera: '低功耗 optical sensor，主要用于 AI inference；不主打 POV 拍照/录像',
      weight: '略高于 40g',
      display: 'Color microOLED 显示；IPD 58-72mm；显示光学 +2 至 -6D 可调',
      battery: '最高约 14 小时',
      sensors: '低功耗 optical sensor、2 麦克风、6 轴 IMU、2 个骨传导扬声器',
      connectivity: 'Bluetooth 5.3；ZephyrOS；Lua interface；跨平台 App；GitHub 开源代码/设计文件',
      protection: '官方未作为核心卖点公开强调，需后续随量产版本核验'
    },
    keyFeatures: [
      '定位不是大众拍摄社交眼镜，而是面向开发者、AI hacker 和早期科技用户的开源 AI agent 眼镜。',
      'Noa 是私人 conversational AI agent，强调实时上下文、多模态理解和 Narrative 长期记忆。',
      'Vibe Mode 支持用自然语言生成 Miniapps，强化“眼镜端可编程应用平台”的属性。',
      'Halo 接入 Liquid AI 轻量视觉语言模型 LFM2-VL-450M，路线是 Noa AI agent + 端侧轻量模型 + 开源开发平台。',
      '价格口径需区分：早期预购 $299；当前官网 $349；官网提示后续可能升至 $399。'
    ],
    pros: [
      '开源软硬件定位非常清晰，GitHub / SDK / Lua interface 对开发者友好。',
      '显示、骨传导、低功耗视觉传感器、麦克风、NPU 和 IMU 组合比普通音频眼镜完整。',
      '$349 当前官网价低于多数高端显示型眼镜，早期 $299 预购价具备话题性。',
      'Noa、Narrative 和 Miniapps 让 Halo 更像“AI agent 终端”，而不是单纯语音助手眼镜。'
    ],
    cons: [
      '目前主要是官网预购/早期出货，Amazon / Best Buy 尚未形成稳定官方评价池。',
      '延期、交付节奏和售后规模仍是早期用户最关注的风险。',
      '长期记忆和实时环境理解会带来更强隐私争议。',
      'Vibe Mode、Narrative、Noa 的真实稳定性、延迟和日常价值仍需量产用户验证。'
    ],
    sentiment: {
      rating: null,
      reviewsCount: '官网预购/早期出货阶段，缺少主流零售评分池',
      positiveSummary: '正面集中在开源平台、Noa 长期记忆、Vibe Mode、低功耗 AI 硬件和 $299-$349 的价格带。',
      negativeSummary: '谨慎声音集中在延期/预购风险、隐私争议、真实量产体验和 AI 功能是否稳定有用。',
      redditTopicVolume: '中高：开发者、AI 硬件和早期用户社区讨论明显多于大众零售渠道。',
      typicalPositiveComments: [
        '开发者认可 open hardware + software platform，不是封闭消费硬件。',
        'Noa、Narrative 和 Vibe Mode 让眼镜更接近可编程 AI agent。',
        '彩色 microOLED、骨传导、NPU 和 14 小时续航组合在 $349 档位有吸引力。'
      ],
      typicalNegativeComments: [
        '很多用户仍在等待真实商业化发货和 YouTube 长测。',
        'Narrative 长期记忆会让隐私和同意问题更敏感。',
        '小团队交付能力、渠道覆盖和售后不能和 Meta 相比。'
      ]
    },
    retailLinks: [
      { platform: 'Brilliant Halo 官网', url: 'https://brilliant.xyz/products/halo', price: '$349 当前官网价', status: '官方主渠道' },
      { platform: 'Brilliant 官网', url: 'https://brilliant.xyz/', price: 'Halo 主推', status: '品牌入口' },
      { platform: 'SmartBuyGlasses', url: 'https://www.smartbuyglasses.com/', price: '处方镜片合作渠道', status: '镜片合作参考' },
      { platform: 'Brilliant GitHub', url: 'https://github.com/brilliantlabsAR', price: '开源仓库', status: '开发者生态' }
    ]
  },
  {
    id: 'brilliant-frame',
    brandId: 'brilliantlabs',
    name: 'Brilliant Labs Frame',
    line: 'Brilliant 上一代开源 AI 线',
    image: assetUrl('brilliant_frame_updated.jpg'),
    releaseDate: '2024 年发布',
    priceUSD: 349,
    hasDisplay: true,
    hasCamera: true,
    controlMethod: 'Noa AI / 语音 / App / Lua API / Frame SDK',
    variants: ['Frame Black', 'Frame Grey', 'Frame Clear'],
    techSpecs: {
      chip: 'Lua-based OS；面向 Noa AI、Frame SDK 和开源应用开发',
      camera: '720p 低功耗彩色摄像头，用于视觉 AI、场景识别和开发者应用',
      weight: '约 39g',
      display: '右眼单目 640×400 彩色 OLED；20° FOV',
      battery: '210mAh 内置电池；USB-C 充电底座内置 140mAh 电池',
      sensors: '720p 摄像头、麦克风、3 轴加速度计、3 轴电子罗盘',
      connectivity: 'Bluetooth 5.3；Noa App；Lua API；Frame SDK',
      protection: '官方未作为核心卖点公开强调'
    },
    keyFeatures: [
      'Frame 是 Halo 之前的 Brilliant 开源 AI 眼镜，偏开发者、极客和 early adopter，不是成熟大众消费品。',
      '硬件组合是右眼单目显示 + 720p 摄像头 + 麦克风 + Noa AI，适合轻量 HUD、视觉 AI 和应用原型开发。',
      'Noa App 支持 GPT-powered chat、web search、translation，并把回答显示到 Frame 上。',
      'Frame 当前已不再是 Brilliant 官网主推在售产品，更像被 Halo 替代的上一代有限规模产品。',
      '价格约 $349，低于多数显示型 AI 眼镜，但产品完成度、渠道和售后成熟度也更弱。'
    ],
    pros: [
      '39g 级别重量和普通眼镜外观让它比很多早期 AR 设备更轻。',
      '摄像头 + 单目显示 + Noa AI 的组合比纯音频眼镜更适合视觉 AI 原型。',
      '官方文档、Lua API 和 Frame SDK 让它具备开发平台属性。',
      '$349 价格相对 Even G1/G2 等显示型眼镜更低。'
    ],
    cons: [
      '右眼单目显示不可左右切换，对一部分用户有适配门槛。',
      '没有内置扬声器，交互链路不如带音频输出的智能眼镜完整。',
      'Noa、连接、电量提示、电源控制和 App 成熟度曾被早期用户质疑。',
      '官网当前主推 Halo，Frame 已更接近上一代/历史产品。'
    ],
    sentiment: {
      rating: null,
      reviewsCount: '媒体和极客社区为主，缺少主流零售评分',
      positiveSummary: '正面集中在轻量外观、开源可开发性、摄像头+显示+AI 的前瞻组合和 $349 价格。',
      negativeSummary: '负面集中在消费级完成度、Noa 稳定性、credits/云服务依赖、单目显示和交付沟通。',
      redditTopicVolume: '中等：讨论更多在硬件极客圈。',
      typicalPositiveComments: [
        'Frame 轻、薄，确实完成了可佩戴开源 AI 眼镜的早期形态。',
        'Lua API、SDK 和官方文档让开发者可以自行构建应用。',
        '摄像头、单目显示和 Noa AI 让它比普通蓝牙眼镜更有研究价值。'
      ],
      typicalNegativeComments: [
        'Noa 回答稳定性、连接和 App 体验不像成熟消费产品。',
        '右眼单目显示和缺少扬声器会限制日常使用。',
        '购买后交付节奏和官方沟通曾引发部分 Reddit 用户不满。'
      ]
    },
    retailLinks: [
      { platform: 'Brilliant 官网', url: 'https://brilliant.xyz/', price: '当前主推 Halo', status: '品牌入口' },
      { platform: 'Brilliant GitHub', url: 'https://github.com/brilliantlabsAR', price: '开源仓库', status: '开发者生态' },
      { platform: 'The Verge Frame 报道', url: 'https://www.theverge.com/2024/2/8/24065677/brilliant-labs-frame-ai-smart-glasses-price-specs', price: '$349 报道', status: '媒体参考' }
    ]
  },
  {
    id: 'rokid-style',
    brandId: 'rokid',
    name: 'Rokid AI Glasses Style',
    line: 'Rokid 低价无屏视觉 AI 线',
    image: assetUrl('rokid_style_front.png'),
    releaseDate: '2025 年海外上市',
    priceUSD: 269,
    hasDisplay: false,
    hasCamera: true,
    controlMethod: '语音 / 触控 / Hi Rokid App / ChatGPT / Gemini',
    variants: ['Style Non-Display', '官网 $269', 'Amazon 促销曾低至 $249'],
    imageGallery: [
      {
        src: assetUrl('rokid_style_front.png'),
        label: 'Rokid AI Glasses Style',
        caption: '无屏视觉 AI 眼镜'
      },
      {
        src: assetUrl('rokid_style_package.png'),
        label: 'Rokid Style 标准包装',
        caption: '眼镜、收纳、磁吸充电线和说明书'
      }
    ],
    techSpecs: {
      chip: 'Snapdragon AR1 Gen 1 + RT600 MIMXRT685SFAWBR；2GB RAM / 32GB ROM',
      camera: '12MP Sony IMX681；3024×4032；109° 对角视场；F2.25；34cm 至无限远景深',
      weight: '38.5g',
      display: '无镜片内显示',
      battery: '210mAh；官方称 12 小时 typical use；标准包装不含充电盒',
      sensors: '4 个定向麦克风、2 个 AAC 0920 开放式扬声器、摄像头、触控',
      connectivity: 'Wi-Fi 6 / Bluetooth 5.3；依赖 Hi Rokid App',
      protection: '官方商品页未突出防护等级，需按 SKU 核验'
    },
    keyFeatures: [
      'Rokid AI Glasses Style 是 Rokid 用来对标 Ray-Ban Meta 的无屏视觉 AI 眼镜，重点是摄像头、音频、AI 问答和翻译，而不是 AR 显示。',
      'AI 路线偏开放模型接入：海外口径强调 ChatGPT、Gemini、DeepSeek、Qwen、Google Maps 和 Microsoft AI Translation。',
      '核心场景包括 AI Assistant、实时翻译、语音导航、AI 识图、会议纪要、开放式音频和第一视角拍摄。',
      '价格口径变化明显：官网当前 $269，发布/媒体常见 $299，Amazon 促销曾到 $249，部分页面显示 $399 划线价。',
      '支持处方镜片服务，覆盖近视、散光、渐进、多焦和老花，最高可到 +15.00D。'
    ],
    pros: [
      '价格非常激进，是 Meta 之外低门槛视觉 AI 眼镜的重要样本。',
      'AR1、12MP Sony IMX681、38.5g、Wi-Fi 6 和多模型 AI 组合完整。',
      '官网已有 158 条自有评价，并进入 Amazon 促销露出，说明已进入正式销售阶段。',
      '处方镜片服务和轻量机身强化了日常佩戴可能性。'
    ],
    cons: [
      '无显示屏意味着翻译、导航和 AI 回答主要依赖音频或手机承接，视觉反馈弱于 Rokid Glasses / Even G2。',
      '标准包装不含充电盒，磁吸线充电比 Meta 充电盒体验弱。',
      'Trustpilot 品牌级评分偏低，发货、退款、客服和履约是海外购买信任风险。',
      '外观、易用性和品牌认知仍弱于 Ray-Ban Meta。'
    ],
    sentiment: {
      rating: null,
      reviewsCount: '官网自有评价约 158 条；Amazon / Best Buy 尚未形成 Meta 级大规模评价池',
      positiveSummary: '正面集中在低价、轻量、12MP 摄像头、处方镜片服务、实时翻译和多模型 AI。',
      negativeSummary: '负面集中在无显示屏限制、充电盒不随附、蓝牙/App 稳定性和品牌级售后口碑。',
      redditTopicVolume: '中等：更多围绕 Meta 替代品、价格和 AI 实用性讨论。',
      typicalPositiveComments: [
        'Android Central 将它视为 Ray-Ban Meta 的高性价比替代品。',
        'Gizmodo 认为其 AI、音频、视频和照片表现有竞争力，AI 有时比 Meta 更进一步。',
        '官网用户集中认可轻量、处方镜片、翻译和语音控制。'
      ],
      typicalNegativeComments: [
        '外观和品牌质感不如 Ray-Ban Meta。',
        '标准包没有自动充电盒，充电体验不够优雅。',
        'Trustpilot 负面反馈会影响海外用户对售后和履约的信任。'
      ]
    },
    retailLinks: [
      { platform: 'Rokid Style 官网', url: 'https://global.rokid.com/products/rokid-ai-glasses-style', price: '$269 当前官网价', status: '官方入口' },
      { platform: 'Rokid Trustpilot', url: 'https://www.trustpilot.com/review/global.rokid.com', price: '品牌级口碑', status: '售后风险参考' }
    ]
  },
  {
    id: 'rokid-glasses-display',
    brandId: 'rokid',
    name: 'Rokid Glasses',
    line: 'Rokid 显示型 AI&AR 线',
    image: assetUrl('rokid_glasses_display.png'),
    releaseDate: '2025 年海外上市',
    priceUSD: 699,
    hasDisplay: true,
    hasCamera: true,
    controlMethod: 'Hi Rokid 语音 / 触控 / App / GPT 与 Gemini',
    variants: ['Display Smart Glasses', 'Power Capsule', 'Charging Case'],
    techSpecs: {
      chip: 'Snapdragon AR1 Gen 1 + RT600；2GB RAM / 32GB ROM',
      camera: '12MP Sony IMX681；3024×4032 照片；1680P 30fps 视频；109° 对角视场',
      weight: '49g',
      display: '双目单色 Micro LED；最高 1500 nits；30° FOV；用于字幕、导航和提示',
      battery: '210mAh；胶囊电池和充电盒为额外配件',
      sensors: '4 个定向麦克风、2 个 AAC 0920 近耳扬声器、摄像头、触控',
      connectivity: 'Wi-Fi 6 / Bluetooth 5.3；Hi Rokid App；云端 AI 服务',
      protection: '官方商品页未突出防护等级，需按 SKU 核验'
    },
    keyFeatures: [
      'Rokid Glasses 是 Rokid 当前海外更高阶的显示型 AI&AR 眼镜，定位为“World’s Lightest Full Function AI&AR Glasses”。',
      '与 Style 的核心差异是镜片内双目 Micro LED 显示，可把翻译字幕、导航、会议转写、AI 回答和提示直接显示在视野中。',
      'AI 功能包括 GPT / Gemini 问答、实时翻译、双向翻译、智能字幕、音频转写、会议摘要、AR 导航和提词器。',
      '官方当前 $699，原价 $799；胶囊电池、充电盒、处方镜片等配件会抬高真实到手成本。',
      '日本 Makuake 曾筹资超过 6.36 亿日元、支持者 7,413 人，是显示型 AI 眼镜里非常强的早期热度信号。'
    ],
    pros: [
      '显示屏是最大差异化，适合翻译、字幕、导航、提示和会议场景。',
      '49g 机身在显示型 AI&AR 眼镜里相对轻，日常佩戴感优于很多重型 AR 设备。',
      '多模型 AI + 视觉识别 + HUD 信息呈现比无屏 Style 更接近完整 AI 眼镜体验。',
      '新加坡 Challenger、欧洲入口、日本众筹和官网评价说明出海渠道不止官网直销。'
    ],
    cons: [
      '$699 裸机价明显高于无屏 AI 眼镜，配件和处方镜片会继续加价。',
      'Amazon / Best Buy 尚未形成 Ray-Ban Meta 那种稳定大规模独立评价池。',
      '低光相机、iOS 连接、蓝牙重连和音乐音质仍被部分测评指出短板。',
      'Trustpilot 品牌级售后口碑偏弱，需要与单品评价分开看。'
    ],
    sentiment: {
      rating: null,
      reviewsCount: '官网自有评价约 63 条；日本 Makuake 支持者 7,413 人；主流零售评价池仍有限',
      positiveSummary: '正面集中在双目显示、实时翻译、导航、会议转写、轻量和多模型 AI。',
      negativeSummary: '负面集中在高价、配件成本、低光相机、iOS/蓝牙连接和品牌售后口碑。',
      redditTopicVolume: '中高：显示型 AI 眼镜、Makuake 众筹和海外测评带来较多讨论。',
      typicalPositiveComments: [
        'Tom’s Guide 认为它把波导显示、日常 AI 和摄像头结合到相对普通的眼镜里。',
        'PhoneArena 认可单色显示在户外明亮清晰，适合快速扫视信息。',
        'EFTM 认为翻译、提词和消息显示是屏幕真正发挥价值的场景。'
      ],
      typicalNegativeComments: [
        '处方镜片、充电盒和电池胶囊额外购买会让总成本上升。',
        '低光拍摄、蓝牙重连和 iOS 权限设置会影响日常体验。',
        '品牌售后和退款争议会削弱海外购买信任。'
      ]
    },
    retailLinks: [
      { platform: 'Rokid Glasses 官网', url: 'https://global.rokid.com/products/rokid-glasses', price: '$699 当前官网价', status: '官方入口' },
      { platform: 'Rokid Trustpilot', url: 'https://www.trustpilot.com/review/global.rokid.com', price: '品牌级口碑', status: '售后风险参考' }
    ]
  },
  {
    id: 'rayneo-x3-pro',
    brandId: 'rayneo',
    name: 'RayNeo X3 Pro',
    line: 'RayNeo 高端 AR AI 线',
    image: assetUrl('rayneo_x3_pro_updated.png'),
    releaseDate: '2025 年发布 / 2026 年海外开售',
    priceUSD: 1104,
    hasDisplay: true,
    hasCamera: true,
    controlMethod: '语音 / 触控 / 手势 / 5-way touch / Gemini AI / RayNeo AIOS',
    variants: ['X3 Pro', 'Creator Mode', 'Lensology 处方镜片合作'],
    techSpecs: {
      chip: 'Qualcomm Snapdragon AR1 Gen 1；Google Gemini / Gemini Live + RayNeo AIOS',
      camera: '12MP Sony 传感器；4K 照片；1440p 视频；用于识物、记录和 AI 理解',
      weight: '约 76g',
      display: '双目全彩 MicroLED / waveguide；640×480；约 30° FOV；60Hz；最高 6000 nits',
      battery: '官方口径约 5 小时，但多家实测指出高强度使用续航明显偏短',
      sensors: '摄像头、双扬声器、麦克风、触控、手势和 AR 空间交互相关传感',
      connectivity: 'RayNeo AIOS；手机 App；AR App 生态；开发者 Creator Mode',
      protection: '官方未作为核心卖点公开强调，需按销售版本核验'
    },
    keyFeatures: [
      'RayNeo X3 Pro 是雷鸟当前海外 AI 眼镜旗舰，官方定位为“World’s Most Advanced AI+AR Glasses”。',
      '它不是无屏语音眼镜，而是把 Gemini AI、全彩 AR 显示、摄像头、RayNeo AIOS 和 AR App 生态整合到一副眼镜里。',
      '核心场景包括 Gemini Live AI、实时翻译、AR 导航、AI Recorder、to-do、memos、日程、AR App 和开发者 Creator Mode。',
      '官方美国页当前约 $1,104，原价 $1,299；媒体早鸟口径常见 $1,099，已进入 $1,100-$1,300 的高阶 AI+AR 价格带。',
      '相比 RayNeo Air 系列，X3 Pro 自带 AI、摄像头、系统和空间界面，不只是外接大屏显示设备。'
    ],
    pros: [
      '双目全彩 MicroLED 显示、6000 nits 亮度和 30° FOV 是当前消费级 AI 眼镜里激进的 AR 路线。',
      'Gemini 多模态 AI 可结合摄像头理解现实场景，用于识物、翻译、记录和建议。',
      'RayNeo AIOS、AR App 和 Creator Mode 让它比普通 AI 眼镜更接近空间计算终端。',
      '适合作为中国品牌冲击高阶 AI+AR 眼镜的代表样本。'
    ],
    cons: [
      '价格显著高于 Ray-Ban Meta、Rokid Style、RayNeo Air 4 Pro 和 Meta Ray-Ban Display。',
      '76g 重量和强科技感外观限制全天佩戴与社交接受度。',
      '续航是最大短板，多家实测认为高强度任务下远低于官方理想口径。',
      'App 生态、侧载体验、Gemini 跨 App 执行能力和软件成熟度仍需迭代。'
    ],
    sentiment: {
      rating: null,
      reviewsCount: '美国官网少量评价；Amazon / Best Buy 尚未形成大规模评价池',
      positiveSummary: '正面集中在全彩 MicroLED、Gemini AI、AIOS、实时翻译、AR 导航、录音转写和开发者模式。',
      negativeSummary: '负面集中在价格、重量、外观科技感、续航、App 生态和软件成熟度。',
      redditTopicVolume: '中高：媒体评测、CES 展示和高价旗舰属性带来 early adopter 讨论。',
      typicalPositiveComments: [
        'Tom’s Guide 认为它是“真正聪明”的智能眼镜，显示、AIOS 和 Gemini 有价值。',
        'Android Central 肯定 MicroLED HUD、实时翻译、Gemini、拍摄和音频。',
        'TechRadar 认为它比 Ray-Ban Meta 更进一步，走向更完整的 AR 形态。'
      ],
      typicalNegativeComments: [
        'Android Central 一个月体验认为实际续航严重不足。',
        'Tom’s Guide 认为技术先进但戴在脸上仍太像实验设备。',
        'Gizmodo 对 App 生态、侧载、Gemini 实用性、续航和价格都较谨慎。'
      ]
    },
    retailLinks: [
      { platform: 'RayNeo X3 Pro 官网', url: 'https://www.rayneo.com/pages/x3-pro-launch', price: '$1,104 当前官网价', status: '官方详情页' },
      { platform: 'RayNeo 官网', url: 'https://www.rayneo.com/', price: '$1,299 原价口径', status: '品牌入口' }
    ]
  },
  {
    id: 'amazon-echo-frames',
    brandId: 'amazon',
    name: 'Amazon Echo Frames 3rd Gen',
    line: 'Amazon Alexa 音频眼镜线',
    image: assetUrl('amazon_echo_frames_3rd_gen.png'),
    releaseDate: '2023 年 12 月上市',
    priceUSD: 269.99,
    hasDisplay: false,
    hasCamera: false,
    controlMethod: 'Alexa 语音 / 触控 / Amazon App',
    variants: ['Echo Frames 3rd Gen', 'Black Rectangle / Blue Round / Brown Cat Eye', 'Carrera Smart Glasses with Alexa'],
    techSpecs: {
      chip: 'Amazon Alexa 智能音频平台',
      camera: '无摄像头',
      weight: '约 39.7g',
      display: '无镜片内显示',
      battery: '约 6 小时连续媒体/通话；约 14 小时中度使用；约 2.5 小时充满',
      sensors: '4 麦克风波束成形阵列、环境光传感器、加速度计、霍尔传感器、触控区',
      connectivity: 'Bluetooth 5.2；支持多点连接；兼容 Android 9.0+ / iOS 14+',
      protection: 'IPX4 防汗防水'
    },
    keyFeatures: [
      'Echo Frames 3rd Gen 是 Amazon 的 Alexa 音频智能眼镜，核心是把 Alexa、通话、通知和智能家居控制放进日常眼镜。',
      '它没有摄像头和镜片内显示，不做视觉 AI、POV 拍摄或 HUD 字幕，因此更像“开放式耳机 + Alexa 助手”的眼镜形态。',
      '第三代相比早期 Echo Frames 改进了镜框设计、开放式音频、续航、麦克风阵列和佩戴舒适度，并支持处方镜片/太阳镜片配置。',
      '典型功能包括 Alexa 问答、音乐/播客/Audible、电话、短信、VIP Filter 通知筛选、智能家居控制、Find My Smart Glasses 和隐私按键/麦克风关闭。'
    ],
    pros: [
      'Amazon 自营渠道成熟，购买、退换、配镜和售后路径比多数创业品牌清楚。',
      '无摄像头、无显示屏让公共场合接受度更高，隐私阻力显著低于拍摄型眼镜。',
      'Alexa 深度用户可以直接获得智能家居控制、日程提醒、语音查询和音频内容入口。',
      '价格低于大多数显示型 AI 眼镜，适合作为音频智能眼镜路线的成熟样本。'
    ],
    cons: [
      '没有摄像头和显示屏，无法覆盖识物、拍摄、字幕、导航、提词等当前 AI 眼镜高关注功能。',
      'Alexa 生态绑定明显，生成式多模态能力弱于 Solos / Rokid / RayNeo 等 AI-native 产品。',
      '开放式音频存在漏音和嘈杂环境通话质量风险，充电座体验也常被媒体提及。',
      '消费者容易把它理解成“眼镜形态耳机”，AI 差异化和升级欲望有限。'
    ],
    sentiment: {
      rating: null,
      reviewsCount: 'Amazon 页面评价随地区和 SKU 变化，本报告不抓取动态评分',
      positiveSummary: '正面集中在无摄像头隐私、Alexa 生态、智能家居控制、通知筛选、通话和 Amazon 渠道可信度。',
      negativeSummary: '负面集中在 AI 感不强、无视觉能力、开放式音频漏音、嘈杂环境通话和充电座体验。',
      redditTopicVolume: '中等：更多被作为音频眼镜、Alexa 生态和隐私友好智能眼镜讨论。',
      typicalPositiveComments: [
        'Alexa 用户喜欢不用拿手机即可控制家居、听通知和播放音频内容。',
        '没有摄像头让它比拍摄型眼镜更低调，也更容易在公共场合佩戴。',
        'Amazon 购买、退换和售后路径让用户放心。'
      ],
      typicalNegativeComments: [
        '它缺少视觉 AI、拍摄和显示能力，智能感有限。',
        '作为音频设备，音质、漏音和嘈杂场景通话不一定满足所有人。',
        '非 Alexa 用户的购买理由较弱，且不属于当前最前沿的 AI 眼镜形态。'
      ]
    },
    retailLinks: [
      { platform: 'Amazon Echo Frames', url: 'https://www.amazon.com/All-new-Echo-Frames/dp/B0BP8GLX64', price: '约 $269.99', status: '官方零售' },
      { platform: 'Amazon Echo Frames 支持页', url: 'https://www.amazon.com/gp/help/customer/display.html?nodeId=T74HpzaK8fWRpYt9tO', price: '功能说明', status: '官方说明' }
    ]
  },
  {
    id: 'xreal-one-pro',
    brandId: 'xreal',
    name: 'XREAL One Pro',
    line: 'XREAL AR 显示相邻线',
    image: assetUrl('xreal_one_pro_wide.png'),
    releaseDate: '2025 年上市',
    priceUSD: 599,
    hasDisplay: true,
    hasCamera: false,
    controlMethod: '外接设备 / 3DoF 空间显示 / App 与硬件按键',
    variants: ['XREAL One Pro', 'XREAL One Pro + XREAL Eye 套装'],
    techSpecs: {
      chip: 'XREAL X1 空间计算芯片',
      camera: '本体无通用拍摄摄像头；可搭配 XREAL Eye',
      weight: '约 87g',
      display: 'Sony Micro OLED；57° FOV；最高 120Hz',
      battery: '依赖外接设备供电',
      sensors: '3DoF 空间显示相关传感、音频与显示模组',
      connectivity: 'USB-C 外接设备',
      protection: '非全天候户外眼镜定位，需按官方说明核验'
    },
    keyFeatures: [
      '57° FOV、Sony Micro OLED 和 X1 芯片，显示能力强',
      'Sound by Bose，适合娱乐和便携大屏',
      '不是独立 AI 眼镜，更像 AR 显示终端',
      '可作为显示技术和空间计算体验的相邻参照'
    ],
    pros: [
      '显示效果和视场角显著强于轻量 HUD 文字眼镜。',
      '适合游戏、视频、办公扩屏等明确大屏场景。',
      '官方商店和全球用户讨论较多。'
    ],
    cons: [
      '需要外接设备供电和输入，不是独立全天候 AI 眼镜。',
      '重量和佩戴形态不适合普通近视镜替代。',
      'AI agent、摄像头视觉问答和公共场合低调性不是核心优势。'
    ],
    sentiment: {
      rating: null,
      reviewsCount: 'AR 显示品类评价较多，但不宜和 AI 眼镜评分直接比较',
      positiveSummary: '正面集中在显示、FOV、空间显示稳定性和娱乐体验。',
      negativeSummary: '负面集中在外接设备、重量、舒适度和非 AI 独立设备定位。',
      redditTopicVolume: '高：AR glasses、Steam Deck、Mac/PC 扩屏社区讨论活跃。',
      typicalPositiveComments: [
        '用户看重它作为便携大屏的沉浸感。',
        '57° FOV 让显示体验比上一代更有吸引力。',
        'Bose 音频和空间稳定提升娱乐体验。'
      ],
      typicalNegativeComments: [
        '外接线和设备依赖让它不像普通眼镜。',
        '长时间佩戴舒适度和鼻梁压力仍是问题。',
        'AI 能力不是购买核心理由。'
      ]
    },
    retailLinks: [
      { platform: 'XREAL One Pro 官网', url: 'https://www.xreal.com/one-pro', price: '参数入口', status: '官方入口' },
      { platform: 'XREAL 美国商店', url: 'https://us.shop.xreal.com/products/xreal-one-pro', price: '$599 起', status: '官方价格' }
    ]
  },
  {
    id: 'vuzix-z100',
    brandId: 'vuzix',
    name: 'Vuzix Z100 Smart Glasses',
    line: 'Vuzix 企业轻量 HUD 线',
    image: assetUrl('vuzix_z100_wide.png'),
    releaseDate: '2024 年发布 / 企业部署',
    priceUSD: null,
    hasDisplay: true,
    hasCamera: false,
    controlMethod: '手机/企业应用 / 通知工作流 / 开发者 SDK',
    variants: ['Z100 Smart Glasses', '企业/开发者部署 SKU'],
    techSpecs: {
      chip: 'Vuzix 低功耗智能眼镜平台',
      camera: '无摄像头',
      weight: '约 35g 级别',
      display: '单目绿色 microLED / waveguide 简洁信息显示，面向通知和工作流',
      battery: '官方强调低功耗全天工作流，典型使用可覆盖长时段通知场景',
      sensors: '显示模组、连接模组、企业应用相关传感',
      connectivity: 'Bluetooth / App / SDK',
      protection: '企业环境按部署核验'
    },
    keyFeatures: [
      '面向工作流、通知和企业应用，而非社交拍摄',
      '无摄像头轻量 HUD，降低隐私和企业合规压力',
      'Vuzix 拥有较长的企业 AR / 智能眼镜经验',
      '适合作为 B2B 赛道和开发者部署参照'
    ],
    pros: [
      '企业应用和 SDK 经验比消费品牌更深。',
      '轻量和无摄像头有利于工作场景合规。',
      '能补足消费 AI 眼镜报告里的 B2B 样本。'
    ],
    cons: [
      '大众消费心智弱，外观和渠道不是时尚路线。',
      '价格、采购和评价信息不如消费零售页透明。',
      'AI 对话和多模态能力不是核心卖点。'
    ],
    sentiment: {
      rating: null,
      reviewsCount: '企业/开发者产品，公开消费零售评价不足',
      positiveSummary: '正面集中在轻量、低打扰通知、企业工作流和 SDK。',
      negativeSummary: '负面风险集中在消费吸引力不足、采购不透明和场景窄。',
      redditTopicVolume: '低：更多出现在企业 AR / wearable 讨论。',
      typicalPositiveComments: [
        '企业用户更看重稳定通知和工作流，而不是拍摄娱乐。',
        '无摄像头对敏感工作环境更友好。',
        'Vuzix 的行业经验让它有 B2B 可信度。'
      ],
      typicalNegativeComments: [
        '普通消费者很难把它作为日常 AI 眼镜选择。',
        '购买和价格信息不如消费品牌透明。',
        '功能表达偏工作流，不够大众化。'
      ]
    },
    retailLinks: [
      { platform: 'Vuzix Z100 官网', url: 'https://www.vuzix.com/products/z100-smart-glasses', price: '联系/按部署核验', status: '官方入口' }
    ]
  }
];

export const COMPARISON_DIMENSIONS = [
  { id: 'releaseDate', label: '发布时间', group: '时间' },
  { id: 'brandCountry', label: '品牌国家/地区', group: '品牌结构' },
  { id: 'productTier', label: '市场层级判断', group: '品牌结构' },
  { id: 'line', label: '产品线定位', group: '品牌结构' },
  { id: 'price', label: '官方/零售起价', group: '价格' },
  { id: 'aiModel', label: 'AI 基座/模型路线', group: 'AI 架构' },
  { id: 'display', label: '镜片内显示', group: '硬件' },
  { id: 'camera', label: '摄像头', group: '硬件' },
  { id: 'audio', label: '音频能力', group: '硬件' },
  { id: 'weight', label: '重量', group: '佩戴' },
  { id: 'battery', label: '续航', group: '佩戴' },
  { id: 'control', label: '交互方式', group: '交互' },
  { id: 'prescription', label: '处方镜片适配', group: '佩戴' },
  { id: 'translation', label: '翻译/字幕', group: 'AI 场景' },
  { id: 'visualAi', label: '视觉 AI', group: 'AI 场景' },
  { id: 'privacy', label: '隐私风险', group: '社会接受度' },
  { id: 'retailSignal', label: '零售/口碑信号', group: '市场验证' },
  { id: 'bestUse', label: '最适合人群', group: '定位' },
  { id: 'strengthRisk', label: '优势与风险', group: '结论' }
];

const priceText = (product: Product) => {
  if (product.priceUSD === null) return '需按官网/采购流程核验';
  const base = product.priceUSD % 1 === 0 ? `$${product.priceUSD}` : `$${product.priceUSD.toFixed(2)}`;
  return `${base} 起 / ${formatCnyFromUsd(product.priceUSD)} 起`;
};

const brandById = Object.fromEntries(BRANDS.map(brand => [brand.id, brand]));

const hasTranslation = (product: Product) =>
  product.keyFeatures.some(feature => /翻译|字幕|同传|Translate|translation/i.test(feature));

const hasVisualAi = (product: Product) =>
  product.hasCamera && product.keyFeatures.some(feature => /视觉|识物|问答|Gemini|ChatGPT|Meta AI|Noa|AIOS|多模态|摄像头|识别/i.test(feature));

const aiModelText = (product: Product) => {
  if (product.brandId === 'meta') return 'Meta AI 封闭生态';
  if (product.brandId === 'solos') return 'ChatGPT / Gemini / Claude / DeepSeek 等多模型';
  if (product.brandId === 'evenrealities') return 'Even AI / EvenLLM，偏生产力场景';
  if (product.brandId === 'brilliantlabs') return 'Noa AI / Liquid AI，偏开源 agent';
  if (product.brandId === 'rokid') return 'ChatGPT / Gemini / DeepSeek / Qwen 等多模型';
  if (product.brandId === 'rayneo') return 'Google Gemini + RayNeo AIOS';
  if (product.brandId === 'amazon') return 'Alexa 语音助手生态';
  if (product.brandId === 'xreal') return '非 AI-first，本体更偏 AR 显示终端';
  if (product.brandId === 'vuzix') return '企业 App / SDK / 工作流平台';
  return '需按产品页核验';
};

const productTierText = (product: Product) => {
  if (product.id === 'meta-rayban-gen2') return '第一梯队主流标杆，销量和零售评价沉淀最强';
  if (product.id.startsWith('meta-oakley')) return 'Meta 第二增长线，运动场景细分';
  if (product.id === 'meta-rayban-display') return '高端显示旗舰，供货与试戴门槛高';
  if (product.id === 'meta-glasses-value') return 'Meta 自有品牌低价入门线';
  if (product.id === 'solos-airgo-v2' || product.id === 'rokid-style') return '低价视觉 AI 挑战者';
  if (product.brandId === 'solos') return '低价多模型/音频 AI 补位线';
  if (product.id === 'even-g2' || product.id === 'rokid-glasses-display') return '显示型 AI 生产力主线';
  if (product.id === 'rayneo-x3-pro') return '高价全彩 AI+AR 旗舰验证';
  if (product.brandId === 'brilliantlabs') return '开源 agent / 开发者早期样本';
  if (product.brandId === 'amazon') return '成熟音频助手相邻样本';
  if (product.brandId === 'xreal') return 'AR 显示相邻样本，非 AI-first';
  if (product.brandId === 'vuzix') return '企业 HUD / B2B 工作流样本';
  return '细分样本';
};

const prescriptionText = (product: Product) => {
  const text = [product.line, product.techSpecs.display, product.keyFeatures.join(' '), product.variants.join(' ')].join(' ');
  if (/不支持处方|No prescription/i.test(text)) return '不支持或非主推处方镜片';
  if (/处方|prescription|单光|渐进|optician|验配/i.test(text)) return '支持或强调整体处方/验配路径';
  if (product.brandId === 'xreal' || product.brandId === 'rayneo') return '更偏 AR 设备，通常不作为日常处方镜替代';
  if (product.brandId === 'vuzix') return '按企业/开发者部署核验';
  return '需按具体 SKU 核验';
};

const audioText = (product: Product) => {
  const text = [product.keyFeatures.join(' '), product.techSpecs.sensors].join(' ');
  if (/无外放喇叭|无扬声器/.test(text)) return '麦克风输入为主，无外放';
  if (product.brandId === 'xreal') return 'Bose 音频，偏影音/扩屏场景';
  if (product.brandId === 'brilliantlabs') return product.id === 'brilliant-halo' ? '骨传导音频 + 麦克风' : '麦克风/小型音频交互';
  if (product.brandId === 'evenrealities' || product.brandId === 'vuzix') return '以麦克风和显示提示为主';
  return '开放式音频 / 麦克风 / 通话交互';
};

const retailSignal = (product: Product) => {
  if (product.id === 'meta-rayban-gen2') return '强：Best Buy / Amazon / Ray-Ban / LensCrafters 评价沉淀最多';
  if (product.id.startsWith('meta-oakley')) return '强：Meta 与 Oakley 渠道成熟，运动线热度高';
  if (product.id === 'meta-rayban-display') return '中：关注度高，但供货、价格和试戴门槛高';
  if (product.id === 'rokid-style') return '中：官网评价和海外电商露出已出现，但非 Meta 级规模';
  if (product.id === 'rokid-glasses-display') return '弱到中：官网主导，显示型 AI&AR 仍处早期';
  if (product.brandId === 'rayneo') return '弱到中：旗舰早期样本，媒体讨论高于零售评价沉淀';
  if (product.brandId === 'evenrealities') return '中：官网直销 + Trustpilot 售后口碑可参考';
  if (product.brandId === 'solos') return '弱到中：官网/Amazon/媒体评价，样本少于 Meta';
  if (product.brandId === 'amazon') return '中：Amazon 自有零售强，但 AI 眼镜属性弱';
  if (product.brandId === 'xreal') return '强：AR 显示品类用户讨论多，但不等同 AI 眼镜主赛道';
  if (product.brandId === 'vuzix') return '企业向：公开消费评价少，需看 B2B 部署信号';
  return '弱到中：以官网和媒体信息为主，零售评分不足';
};

const bestUse = (product: Product) => {
  if (product.id === 'meta-rayban-gen2') return '日常记录、旅行、社交内容、希望外观自然的用户';
  if (product.id === 'meta-oakley-vanguard') return '骑行、跑步、滑雪等专业运动记录';
  if (product.id === 'meta-oakley-hstn') return '户外运动生活方式和 Oakley 用户';
  if (product.id === 'meta-rayban-display') return '需要字幕、导航、消息可视化的高端尝鲜用户';
  if (product.id === 'meta-glasses-value') return '价格敏感的 Meta AI 眼镜初次尝试者';
  if (product.brandId === 'solos') return '重视多模型、翻译和低价 AI 工具的用户';
  if (product.id === 'even-g2') return '商务演讲、跨语言沟通、无摄像 HUD 日常佩戴';
  if (product.id === 'even-g1') return '低一档预算的无摄像 HUD 使用者';
  if (product.brandId === 'brilliantlabs') return '开发者、开源硬件爱好者、早期采用者';
  if (product.id === 'rokid-style') return '想用低价尝试无屏视觉 AI 的用户';
  if (product.id === 'rokid-glasses-display') return '想尝试显示、字幕、翻译和拍摄一体化的用户';
  if (product.brandId === 'rayneo') return '追求全彩 AR 显示和高端 AI 体验的发烧友';
  if (product.brandId === 'amazon') return 'Alexa 生态和无摄像头音频眼镜用户';
  if (product.brandId === 'xreal') return '便携大屏、游戏、扩屏和空间显示用户';
  return '企业工作流、开发者部署和低打扰通知场景';
};

export const COMPARISON_DATA: Record<string, Record<string, string | boolean>> = Object.fromEntries(
  PRODUCTS.map(product => [
    product.id,
    {
      releaseDate: product.releaseDate || '需按官方发布时间核验',
      brandCountry: brandById[product.brandId]?.originCountry || '需核验',
      productTier: productTierText(product),
      price: priceText(product),
      line: product.line,
      aiModel: aiModelText(product),
      display: product.hasDisplay,
      camera: product.hasCamera,
      audio: audioText(product),
      weight: product.techSpecs.weight,
      battery: product.techSpecs.battery,
      control: product.controlMethod,
      prescription: prescriptionText(product),
      translation: hasTranslation(product) ? '✅ 支持或作为核心卖点' : '未作为核心卖点',
      visualAi: hasVisualAi(product) ? '✅ 摄像头/视觉识别相关' : product.hasCamera ? '部分支持，需按 SKU 核验' : '不支持摄像头视觉 AI',
      privacy: product.hasCamera ? '中高：摄像头需要提示灯和场景管理' : '低：无摄像头，公共场合阻力更小',
      retailSignal: retailSignal(product),
      bestUse: bestUse(product),
      strengthRisk: `👍 ${product.pros[0]}\n👎 ${product.cons[0]}`
    }
  ])
);
