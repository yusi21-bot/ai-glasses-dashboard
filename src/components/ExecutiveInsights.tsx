import React from 'react';
import { BarChart3, Brain, ExternalLink, GitBranch, LineChart, PieChart, Sparkles, UserRoundCheck } from 'lucide-react';
import { assetUrl } from '../assets';

const routes = [
  { label: '无屏助手化', examples: 'Ray-Ban Meta / Rokid Style', note: '第一视角相机 + 开放式音频 + AI 问答', color: 'bg-blue-50 text-blue-700 border-blue-100' },
  { label: 'HUD 信息化', examples: 'Even G2 / Rokid Glasses', note: '翻译、导航、字幕、通知显示在眼前', color: 'bg-emerald-50 text-emerald-700 border-emerald-100' },
  { label: 'AR 空间化', examples: 'RayNeo X3 Pro', note: '全彩显示、AIOS、AR App 与空间界面', color: 'bg-purple-50 text-purple-700 border-purple-100' },
  { label: 'Agent 平台化', examples: 'Brilliant Halo / Frame', note: 'Noa agent、长期记忆、开源生态、Miniapps', color: 'bg-amber-50 text-amber-700 border-amber-100' }
];

const findings = [
  {
    title: 'AI 眼镜不是一个赛道，而是四条路线并行演进',
    body: '海外 AI 眼镜不能简单归为一类。当前更有分析价值的是看清“无屏助手化、HUD 信息化、AR 空间化、Agent 平台化”四条路线。最成熟的是无屏 AI 眼镜，但长期价值更可能来自 HUD / AI+AR / Agent 的融合形态。',
    chips: ['四路线', '产品形态', '长期演进']
  },
  {
    title: 'Meta 当前赢在消费级验证，但不一定代表终局',
    body: 'Ray-Ban Meta / Oakley Meta / Meta Glasses 证明用户愿意为“普通眼镜外观 + 拍摄 + 音频 + AI 助手”买单。但 Meta 主要验证的是 AI 眼镜能被普通消费者接受，还没有完全证明它能成为完整个人智能助理终端。',
    chips: ['消费验证', '渠道强', '非终局']
  },
  {
    title: '显示屏打开 AI 助理想象空间，但显示型产品仍在早期验证',
    body: '只有语音很难承载复杂任务；一旦有显示，翻译、导航、会议、提词、任务提醒和通知摘要都会更自然。但 Even G2、Rokid Glasses、RayNeo X3 Pro 也暴露出价格、续航、重量、外观和软件稳定性压力。',
    chips: ['显示层', 'HUD', '早期验证']
  },
  {
    title: '下一阶段竞争点从硬件参数转向 AI 工作流闭环',
    body: '真正重要的问题不是“能不能问 AI”，而是 AI 能不能理解当前场景、记住上下文、调用手机/PC/地图/日历/邮件，并把任务执行完。眼镜只是入口，壁垒在 OS、Agent、应用生态和设备协同。',
    chips: ['上下文', '跨应用', '任务闭环']
  },
  {
    title: '封闭生态 Meta 与开放生态 / 多模型阵营正在对抗',
    body: 'Meta 依靠 Ray-Ban / Oakley、Meta AI 和社交生态形成闭环；Google 以 Android XR + Gemini 连接 Samsung、Warby Parker、Gentle Monster、XREAL 等伙伴。Solos、Rokid、Brilliant Labs 也强调多模型或开放开发。',
    chips: ['Meta 闭环', 'Android XR', '多模型']
  },
  {
    title: '多模型接入正在成为非 Meta 阵营的共同选择',
    body: '不同国家和任务场景可能更适合 Gemini、ChatGPT、DeepSeek、Qwen、Perplexity 或本地翻译/地图服务。非 Meta 阵营正在用“多模型接入 + 开放服务生态”对抗封闭体系。',
    chips: ['模型可用性', '区域适配', '开放生态']
  },
  {
    title: '中国品牌出海优势在硬件和性价比，短板在渠道信任和售后',
    body: 'Rokid、RayNeo 展示出较强硬件集成、价格策略和产品迭代速度，但海外反馈也反复指向发货、退款、客服、处方镜片履约、App 稳定性、连接体验和长期软件维护。',
    chips: ['硬件强', '性价比', '售后风险']
  },
  {
    title: 'Echo Frames 说明只做语音助手眼镜已经不够',
    body: 'Alexa + 开放式音频 + 通知 + 智能家居代表智能眼镜早期路线，但在多模态和 Agent 时代，眼镜至少需要一种增量能力：第一视角感知、眼前信息显示、跨设备执行，或长期记忆。',
    chips: ['音频天花板', '增量能力', '非终点']
  },
  {
    title: '新进入者的机会不在复制 Ray-Ban Meta，而在跨设备个人 Agent',
    body: 'AI 眼镜不应只被定义为一件孤立硬件，也可以成为跨设备 Agent 的随身入口：把手机和 PC 上的任务、通知、会议、文件与日程，以更自然的方式推送到眼前或耳边，并在必要时衔接下一步操作。',
    chips: ['PC + 手机', '个人 Agent', '跨设备协同']
  }
];

const shipmentStats = [
  {
    value: 110,
    label: '2025 H1 全球智能眼镜出货同比增长',
    suffix: '%',
    source: 'Counterpoint / ET',
    url: 'https://economictimes.indiatimes.com/tech/technology/smart-glasses-market-surges-110-in-h1-2025-with-new-meta-xiaomi-launches/articleshow/123345604.cms'
  },
  {
    value: 78,
    label: '2025 H1 AI smart glasses 出货占比',
    suffix: '%',
    source: 'Counterpoint / ET',
    url: 'https://economictimes.indiatimes.com/tech/technology/smart-glasses-market-surges-110-in-h1-2025-with-new-meta-xiaomi-launches/articleshow/123345604.cms'
  },
  {
    value: 200,
    label: 'Ray-Ban Meta 自 2023 年 10 月以来累计销量',
    suffix: '万副',
    source: 'EssilorLuxottica / The Verge',
    url: 'https://www.theverge.com/news/613292/meta-ray-ban-2-million-10-million-capacity-subscription-essilor-luxottica-earnings'
  },
  {
    value: 1000,
    label: 'EssilorLuxottica 计划 2026 年底达到年产能',
    suffix: '万副/年',
    source: 'EssilorLuxottica / The Verge',
    url: 'https://www.theverge.com/news/613292/meta-ray-ban-2-million-10-million-capacity-subscription-essilor-luxottica-earnings'
  }
];

const forecastStats = [
  { year: '2025', value: 510, label: 'AI glasses 全球出货预测', source: 'Omdia 二级口径', url: 'https://omdia.tech.informa.com/' },
  { year: '2026', value: 1000, label: 'AI glasses 全球出货预测', source: 'Omdia 二级口径', url: 'https://omdia.tech.informa.com/' },
  { year: '2026', value: 1360, label: '无显示智能眼镜出货预测', source: 'IDC 二级口径', url: 'https://www.idc.com/' },
  { year: '2030', value: 2730, label: '无显示智能眼镜出货预测', source: 'IDC 二级口径', url: 'https://www.idc.com/' }
];

const shareData = [
  { label: 'Meta', value: 73, color: 'bg-indigo-600' },
  { label: '其他品牌', value: 27, color: 'bg-slate-300' }
];

const sourceNotes = [
  {
    title: 'Counterpoint 公开转述',
    note: '用于支撑 2025 H1 智能眼镜出货同比增长、AI smart glasses 占比等短期增长判断。',
    url: 'https://economictimes.indiatimes.com/tech/technology/smart-glasses-market-surges-110-in-h1-2025-with-new-meta-xiaomi-launches/articleshow/123345604.cms'
  },
  {
    title: 'EssilorLuxottica / The Verge',
    note: '用于支撑 Ray-Ban Meta 已售约 200 万副，以及 2026 年底年产能目标 1000 万副。',
    url: 'https://www.theverge.com/news/613292/meta-ray-ban-2-million-10-million-capacity-subscription-essilor-luxottica-earnings'
  },
  {
    title: 'Meta 官方 AI 眼镜对比页',
    note: '用于核对 Ray-Ban Meta、Oakley Meta、Meta Ray-Ban Display 等官方产品线与规格。',
    url: 'https://www.meta.com/ai-glasses/compare/'
  },
  {
    title: 'Meta 与 EssilorLuxottica 长期合作',
    note: '用于支撑 Meta 与眼镜渠道/品牌方长期绑定的战略判断。',
    url: 'https://www.theverge.com/2024/9/17/24247236/meta-ray-ban-smart-glasses-essilorluxottica'
  }
];

const consumerLayers = [
  {
    title: '第一层：用户为什么买',
    body: '购买动机通常不是抽象的 AI 概念，而是好奇尝鲜叠加具体任务：免手持记录、翻译沟通、通勤提醒、办公辅助、运动记录、智能家居和无障碍辅助。',
    tags: ['好奇尝鲜', '免手持拍摄', '翻译沟通', '办公辅助', '运动记录', '无障碍辅助'],
    tone: 'border-indigo-100 bg-indigo-50/60 text-indigo-700'
  },
  {
    title: '第二层：用户在哪些场景高频使用',
    body: '高频使用几乎都发生在“不方便拿手机，但信息又必须及时处理”的时刻。正向反馈集中在少掏手机、少打断交流、少漏掉现场信息。',
    tags: ['第一视角拍摄', '实时翻译', '导航提示', '会议摘要', '通知筛选', '即时问答'],
    tone: 'border-emerald-100 bg-emerald-50/70 text-emerald-700'
  },
  {
    title: '第三层：用户为什么弃用 / 差评',
    body: '弃用原因往往不是 AI 不够酷，而是眼镜产品化没有过关：续航、连接、佩戴、漏音、AI 准确性、售后、隐私和价格感知都会直接影响留存。',
    tags: ['续航不足', '连接不稳', '佩戴不适', '音频漏音', 'AI 不准', '售后慢', '隐私压力', '价格不值'],
    tone: 'border-rose-100 bg-rose-50/60 text-rose-700'
  }
];

const userTakeaways = [
  {
    title: '用户买单的不是“AI 概念”，而是不用掏手机的小任务',
    highlight: 'hands-free / real-time / quick / convenient / lightweight',
    body: '好评里反复出现的不是复杂 Agent，而是第一视角拍照、录像、听音乐、接电话、翻译字幕、导航提示、提词器、会议提示、Alexa 通知等“低打扰完成任务”的场景。消费者最真实的需求是：走路、开会、旅行、拍摄、通勤、做饭、购物、演讲时，不用掏手机也能完成一个小任务。',
    tags: ['免手持', '低打扰', '高频小任务']
  },
  {
    title: '外观与佩戴比参数更能影响留存',
    highlight: 'AI 眼镜首先是眼镜，其次才是 AI 设备',
    body: 'Meta 强不只是因为 AI，而是 Ray-Ban / Oakley 本身就是用户愿意戴出门的眼镜；Even G2 被认可，也因为它更像日常眼镜。相反，RayNeo X3 Pro 虽然技术激进，但“太科技感”“不够日常”“社交接受度不足”是媒体和用户反复提到的限制。',
    tags: ['普通眼镜外观', '舒适度', '社交接受度']
  },
  {
    title: '用户愿意尝鲜，但对基础不稳定容忍度很低',
    highlight: '基础体验比 AI 概念更决定复购和留存',
    body: '负面评价高度集中在蓝牙断连、App 不稳定、翻译识别不准、AI 回答错误、充电麻烦、续航虚标、更新后 bug、客服不回应。用户可以接受 AI 功能不完美，但不能接受连接、续航、通话、音频、App、售后这些基础项不稳定。',
    tags: ['连接稳定', '续航真实', '售后响应']
  },
  {
    title: '隐私态度很矛盾：想要第一视角能力，又害怕摄像头定义',
    highlight: '想让眼镜看见世界，但不想让旁人产生被监视感',
    body: '用户喜欢 Ray-Ban Meta / Rokid Style 的拍照、录像、识物，但摄像头也带来偷拍、隐私、旁人不舒服的担忧。Even G2、Echo Frames 的无摄像头路线降低了公共场合阻力，但功能上限也因此受限。',
    tags: ['拍摄指示灯', '权限控制', '隐私教育']
  },
  {
    title: '高频价值来自“低打扰任务闭环”',
    highlight: '少掏手机、少打断交流、少丢失现场信息',
    body: '消费者真正认可的不是泛泛 AI 陪伴，而是在移动、交流、办公或创作时，把原本需要拿出手机才能完成的小任务压缩到眼镜上的一句话、一次提醒或一次自动记录。后面的 6 类高频场景，本质上都在解决“当前不方便看手机，但信息必须被捕捉、理解或处理”的问题。',
    tags: ['低打扰', '任务闭环', '即时处理']
  },
  {
    title: '高价产品必须对应稳定刚需',
    highlight: '$300-$500 更容易尝鲜，$600-$1100 会被严苛审视',
    body: 'Ray-Ban Meta 在 300-500 美元价格带更容易被接受；Rokid Style 低价让用户觉得性价比不错。Even G2、Rokid Glasses、RayNeo X3 Pro 进入 600-1100 美元后，用户会追问它是不是每天都能用、是不是比手机/耳机/手表更有必要、是不是稳定到可以替代某些习惯。',
    tags: ['价格带', '稳定刚需', '不可替代性']
  }
];

const highFrequencyScenarios = [
  {
    scene: '第一视角拍摄',
    need: '旅行、亲子、宠物、运动、户外时不用掏手机拍照录像。',
    products: 'Ray-Ban Meta、Rokid Style',
    implication: '若做摄像头，应主打“随手记录 + AI 识别 + 自动整理”。',
    visuals: [
      { src: assetUrl('scenario_capture_party.png'), label: '日常聚会 / 亲友记录' },
      { src: assetUrl('scenario_capture_pet.png'), label: '宠物 / 通勤路上免手持拍摄' },
      { src: assetUrl('scenario_capture_snow.png'), label: '运动 / 户外第一视角' }
    ]
  },
  {
    scene: '实时翻译 / 跨语言交流',
    need: '出国旅行、商务沟通、课堂、会议中直接听懂对方。',
    products: 'Even G2、Rokid Glasses、RayNeo X3 Pro',
    implication: '翻译是最容易被用户感知价值的 AI 眼镜场景。',
    visuals: [
      { src: assetUrl('scenario_translation_conversation.png'), label: '面对面跨语言交流' },
      { src: assetUrl('scenario_translation_hud.png'), label: 'HUD 字幕 / 内容翻译' }
    ]
  },
  {
    scene: '导航 / 通勤提示',
    need: '走路、骑行、出差时不想频繁低头看手机。',
    products: 'Even G2、Rokid Glasses、RayNeo X3 Pro',
    implication: '适合 HUD 显示，语音 + 简短视觉提示最自然。',
    visuals: [
      { src: assetUrl('scenario_navigation_hud.png'), label: 'HUD 导航 / 目的地提示' }
    ]
  },
  {
    scene: '会议 / 课堂 / 演讲辅助',
    need: '会议转写、摘要、提词、要点提醒、会后整理。',
    products: 'Even G2、Rokid Glasses、Brilliant Labs、RayNeo',
    implication: '可与 PC 协同，完成会议纪要、待办提取和资料联动。',
    visuals: [
      { src: assetUrl('scenario_meeting_summary.png'), label: 'AI Summary / 会议摘要' },
      { src: assetUrl('scenario_meeting_teleprompter.png'), label: 'Teleprompter / 演讲提词' }
    ]
  },
  {
    scene: '通知筛选 / 日程提醒',
    need: '不想被手机打断，但又不想错过重要信息。',
    products: 'Echo Frames、Even G2、Rokid Glasses',
    implication: '可做“跨手机 + PC 的智能通知摘要”。',
    visuals: [
      { src: assetUrl('scenario_notification_hud.png'), label: '通知中心 / 重要消息筛选' },
      { src: assetUrl('scenario_notification_reply.png'), label: '消息提醒 / 快捷回复' }
    ]
  },
  {
    scene: 'AI 识物 / 即时问答',
    need: '看到一个东西立刻问 AI：这是什么、怎么用、怎么修、怎么选。',
    products: 'Ray-Ban Meta、Rokid、Brilliant Labs',
    implication: '可与手机摄像头和 PC 工具结合，延伸即时问答后的处理动作。',
    visuals: [
      { src: assetUrl('scenario_object_recognition_food.png'), label: '视觉识别 / 食材与物体理解' }
    ]
  }
];

export default function ExecutiveInsights() {
  const maxForecast = Math.max(...forecastStats.map(item => item.value));

  return (
    <div className="space-y-8" id="executive-insights-section">
      <section className="rounded-2xl border border-indigo-100 bg-gradient-to-br from-indigo-50/80 via-white to-slate-50 p-5 shadow-sm">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-3 border-b border-indigo-100 pb-4 mb-5">
          <div>
            <p className="text-[11px] font-bold tracking-widest text-indigo-600 font-mono uppercase">Executive Overview</p>
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 mt-1">结论先行：先看市场规模、增长与战略判断</h2>
          </div>
          <p className="text-xs text-slate-500 max-w-none leading-relaxed whitespace-nowrap overflow-x-auto pb-1">
            这一页先从宏观层面回答三个问题：海外 AI 眼镜市场有多大、当前发展到哪一步、主流品牌正在沿哪些路线竞争。
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,2.2fr)_minmax(280px,0.8fr)] gap-4 items-start">
          <div className="rounded-xl border border-white bg-white/80 p-4 shadow-sm">
            <h3 className="flex items-center gap-2 text-sm font-extrabold text-slate-900">
              <LineChart className="h-4 w-4 text-indigo-600" />
              市场增长与渗透数据
            </h3>
            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-3">
              {shipmentStats.map((stat) => (
                <div key={stat.label} className="rounded-lg border border-slate-100 bg-slate-50 p-3">
                  <div className="flex items-baseline justify-between gap-2">
                    <span className="text-2xl font-black text-indigo-600">{stat.value}{stat.suffix}</span>
                    <a
                      href={stat.url}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex shrink-0 items-center gap-1 text-[9px] font-bold text-slate-400 hover:text-indigo-600"
                    >
                      {stat.source}
                      <ExternalLink className="h-2.5 w-2.5" />
                    </a>
                  </div>
                  <p className="mt-1 text-[11px] font-semibold leading-snug text-slate-700">{stat.label}</p>
                  <div className="mt-2 h-1.5 rounded-full bg-white">
                    <div className="h-full rounded-full bg-indigo-600" style={{ width: `${Math.min(stat.value, 100)}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-xl border border-white bg-white/80 p-4 shadow-sm">
            <h3 className="flex items-center gap-2 text-sm font-extrabold text-slate-900">
              <PieChart className="h-4 w-4 text-indigo-600" />
              份额判断
            </h3>
            <div className="mt-3 flex items-center justify-center">
              <div className="aspect-square w-[170px] rounded-full bg-conic-gradient flex items-center justify-center border border-indigo-50" style={{ background: `conic-gradient(#4f46e5 0% ${shareData[0].value}%, #cbd5e1 ${shareData[0].value}% 100%)` }}>
                <div className="h-16 w-16 rounded-full bg-white flex flex-col items-center justify-center shadow-inner">
                  <span className="text-xl font-black text-indigo-600">{shareData[0].value}%</span>
                  <span className="text-[8px] text-slate-500 font-bold">Meta 份额</span>
                </div>
              </div>
            </div>
            <div className="mt-3 rounded-lg border border-indigo-50 bg-indigo-50/50 px-3 py-2 text-center">
              <div className="text-[10px] font-bold text-slate-500">公开转述份额判断</div>
              <div className="mt-0.5 text-xs font-extrabold text-slate-800">
                Meta 仍是当前消费级 AI 眼镜最强主导者
              </div>
            </div>
            <div className="mt-3 grid grid-cols-2 gap-2 text-[10px] font-bold">
              {shareData.map((item) => (
                <div key={item.label} className="flex items-center justify-center gap-1.5 rounded-lg border border-slate-100 bg-slate-50 px-2 py-1.5">
                  <span className={`h-2 w-2 rounded-full ${item.color}`} />
                  <span className="text-slate-600">{item.label} {item.value}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-4 rounded-xl border border-white bg-white/80 p-4 shadow-sm">
          <h3 className="flex items-center gap-2 text-sm font-extrabold text-slate-900">
            <BarChart3 className="h-4 w-4 text-indigo-600" />
            出货预测：AI glasses 与无显示智能眼镜
          </h3>
          <div className="mt-4 grid grid-cols-1 md:grid-cols-4 gap-3">
            {forecastStats.map((item) => (
              <div key={`${item.year}-${item.label}`} className="rounded-lg border border-slate-100 bg-slate-50 p-3">
                <div className="flex items-center justify-between text-[10px] font-bold text-slate-400">
                  <span>{item.year}</span>
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 hover:text-indigo-600"
                  >
                    {item.source}
                    <ExternalLink className="h-2.5 w-2.5" />
                  </a>
                </div>
                <div className="mt-2 flex h-28 items-end">
                  <div className="w-full rounded-t-lg bg-indigo-500/90" style={{ height: `${Math.max(14, (item.value / maxForecast) * 100)}%` }} />
                </div>
                <div className="mt-2 text-xl font-black text-slate-900">{item.value.toLocaleString('zh-CN')}万</div>
                <p className="text-[10px] font-semibold leading-snug text-slate-600">{item.label}</p>
              </div>
            ))}
          </div>
          <p className="mt-3 text-[11px] text-slate-500 leading-relaxed">
            这些预测说明：短期由无屏 AI 眼镜放量，长期竞争会继续向显示、Agent 和生态入口升级。Omdia / IDC 数据属于行业研究口径，若用于正式汇报，建议同步保存原始报告页或数据库截图。
          </p>
        </div>

        <div className="mt-4 rounded-xl border border-indigo-100 bg-white/80 p-4 shadow-sm">
          <div className="flex items-center justify-between gap-3">
            <h3 className="flex items-center gap-2 text-sm font-extrabold text-slate-900">
              <ExternalLink className="h-4 w-4 text-indigo-600" />
              数据来源链接
            </h3>
            <span className="rounded-full border border-indigo-100 bg-indigo-50 px-2.5 py-1 text-[10px] font-bold text-indigo-700">
              可点击核查
            </span>
          </div>
          <div className="mt-3 grid grid-cols-1 md:grid-cols-2 gap-2.5">
            {sourceNotes.map((source) => (
              <a
                key={source.title}
                href={source.url}
                target="_blank"
                rel="noreferrer"
                className="group rounded-lg border border-slate-100 bg-slate-50 px-3 py-2.5 transition hover:border-indigo-200 hover:bg-indigo-50/60"
              >
                <div className="flex items-center justify-between gap-2">
                  <span className="text-[11px] font-extrabold text-slate-800 group-hover:text-indigo-700">{source.title}</span>
                  <ExternalLink className="h-3 w-3 shrink-0 text-slate-400 group-hover:text-indigo-600" />
                </div>
                <p className="mt-1 text-[10px] leading-relaxed text-slate-500">{source.note}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-3">
        {routes.map((route) => (
          <div key={route.label} className={`rounded-xl border px-4 py-3 ${route.color}`}>
            <div className="text-sm font-extrabold">{route.label}</div>
            <div className="text-[11px] font-bold mt-0.5 opacity-90">{route.examples}</div>
            <div className="text-[11px] leading-relaxed mt-1.5 text-slate-600">{route.note}</div>
          </div>
        ))}
      </section>

      <section className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm">
        <div className="flex items-center gap-2">
          <Sparkles className="h-5 w-5 text-indigo-600" />
          <h3 className="text-lg font-extrabold text-slate-900">市场与品牌核心判断</h3>
        </div>
        <div className="mt-4 grid grid-cols-1 lg:grid-cols-3 gap-3">
          {findings.map((item, index) => (
            <div key={item.title} className={`rounded-xl border border-slate-100 bg-slate-50/70 p-3.5 ${index === 8 ? 'lg:col-span-3' : ''}`}>
              <div className="flex items-start gap-2">
                <span className="mt-0.5 shrink-0 rounded-md bg-indigo-600 px-1.5 py-0.5 text-[10px] font-black text-white">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h4 className="text-sm font-extrabold text-slate-900 leading-snug">{item.title}</h4>
              </div>
              <div className="mt-2 flex flex-wrap gap-1.5">
                {item.chips.map((chip) => (
                  <span key={chip} className="rounded-full border border-indigo-100 bg-indigo-50 px-2 py-0.5 text-[10px] font-bold text-indigo-700">
                    {chip}
                  </span>
                ))}
              </div>
              <p className="text-[11px] text-slate-600 leading-relaxed mt-2">{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 border-b border-slate-100 pb-4">
          <div>
            <p className="text-[11px] font-bold tracking-widest text-indigo-600 font-mono uppercase">User Insight</p>
            <h3 className="mt-1 flex items-center gap-2 text-lg font-extrabold text-slate-900">
              <UserRoundCheck className="h-5 w-5 text-indigo-600" />
              用户侧洞察：消费者买单的是低打扰、稳定、可长期佩戴的日常价值
            </h3>
          </div>
          <p className="max-w-xl text-xs leading-relaxed text-slate-500">
            从 Amazon、官网评价、Trustpilot、Reddit、媒体测评看，用户并不围绕“大模型有多强”评价 AI 眼镜，而是围绕是否像普通眼镜、连接是否稳定、续航是否够、声音是否漏、翻译/导航/拍照是否真的好用、售后是否可靠。
          </p>
        </div>

        <div className="mt-4 grid grid-cols-1 lg:grid-cols-3 gap-3">
          {consumerLayers.map((layer) => (
            <div key={layer.title} className={`rounded-xl border p-4 ${layer.tone}`}>
              <h4 className="text-sm font-extrabold leading-snug text-slate-900">{layer.title}</h4>
              <p className="mt-2 text-[11px] leading-relaxed text-slate-600">{layer.body}</p>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {layer.tags.map((tag) => (
                  <span key={tag} className="rounded-full border border-white/80 bg-white/90 px-2 py-0.5 text-[10px] font-bold">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-4 grid grid-cols-1 lg:grid-cols-3 gap-3">
          {userTakeaways.map((item) => (
            <div key={item.title} className="rounded-xl border border-slate-100 bg-slate-50/70 p-3.5">
              <h4 className="text-sm font-extrabold leading-snug text-slate-900">{item.title}</h4>
              <div className="mt-2 rounded-lg border border-indigo-100 bg-white px-2.5 py-1.5 text-[11px] font-black text-indigo-700">
                {item.highlight}
              </div>
              <p className="mt-2 text-[11px] leading-relaxed text-slate-600">{item.body}</p>
              <div className="mt-2 flex flex-wrap gap-1.5">
                {item.tags.map((tag) => (
                  <span key={tag} className="rounded-full bg-white px-2 py-0.5 text-[10px] font-bold text-slate-500 border border-slate-100">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-4 rounded-xl border border-slate-100 bg-slate-50/70 p-4">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-2">
            <div>
              <h4 className="text-sm font-extrabold text-slate-900">高频使用场景：用户真正形成习惯的 6 类任务</h4>
              <p className="mt-1 text-[11px] leading-relaxed text-slate-500">
                这些场景的共同点不是“AI 很酷”，而是用户处于移动、交流或多任务状态，手机交互成本变高。
              </p>
            </div>
            <div className="rounded-full border border-indigo-100 bg-white px-3 py-1 text-[10px] font-black text-indigo-700">
              核心逻辑：看见 / 听见 / 提醒 / 记录
            </div>
          </div>
          <div className="mt-4 grid grid-cols-1 xl:grid-cols-2 gap-3">
            {highFrequencyScenarios.map((item, index) => (
              <div key={item.scene} className="rounded-xl border border-slate-100 bg-white p-3.5">
                {item.visuals && (
                  <div className="relative mb-3 aspect-[16/9] overflow-hidden rounded-lg border border-slate-100 bg-slate-950">
                    {item.visuals.map((visual, visualIndex) => (
                      <div
                        key={visual.src}
                        className={`absolute inset-0 ${item.visuals && item.visuals.length > 1 ? 'scenario-slide' : 'opacity-100'}`}
                        style={{
                          animationDelay: `${visualIndex * 3.2}s`,
                          animationDuration: `${item.visuals.length * 3.2}s`
                        }}
                      >
                        <img
                          src={visual.src}
                          alt={`${item.scene}概念图：${visual.label}`}
                          className="h-full w-full object-contain"
                        />
                        <div className="absolute left-2 top-2 rounded-full bg-black/45 px-2.5 py-1 text-[10px] font-bold text-white backdrop-blur">
                          {visual.label}
                        </div>
                      </div>
                    ))}
                    {item.visuals.length > 1 && (
                      <div className="absolute bottom-2 right-2 flex gap-1">
                        {item.visuals.map((visual) => (
                          <span key={visual.src} className="h-1.5 w-1.5 rounded-full bg-white/80 shadow-sm" />
                        ))}
                      </div>
                    )}
                  </div>
                )}
                <div className="flex items-start gap-2">
                  <span className="shrink-0 rounded-md bg-indigo-600 px-1.5 py-0.5 text-[10px] font-black text-white">
                    {index + 1}
                  </span>
                  <h5 className="text-sm font-extrabold text-slate-900 leading-snug">{item.scene}</h5>
                </div>
                <div className="mt-3 grid grid-cols-1 md:grid-cols-[88px_minmax(0,1fr)] gap-x-3 gap-y-2 text-[11px] leading-relaxed">
                  <span className="font-black text-slate-400">真实需求</span>
                  <span className="text-slate-700">{item.need}</span>
                  <span className="font-black text-slate-400">代表产品</span>
                  <span className="text-slate-700">{item.products}</span>
                  <span className="font-black text-indigo-500">产品启发</span>
                  <span className="font-semibold text-indigo-800">{item.implication}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-4 grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-3">
          <div className="rounded-xl border border-indigo-100 bg-indigo-50/70 p-4">
            <h4 className="text-sm font-extrabold text-indigo-900">用户洞察总结</h4>
            <p className="mt-2 text-xs leading-relaxed text-indigo-900/80">
              从消费者评价和社交媒体讨论看，AI 眼镜目前最容易形成真实使用习惯的场景集中在第一视角拍摄、实时翻译、导航提示和会议辅助。它们的共同特点是：用户处于移动、交流或多任务状态，不方便频繁掏手机，因此眼镜能够通过“看见、听见、提醒、记录”降低交互成本。相比之下，泛泛的 AI 问答、陪伴聊天或复杂 Agent 执行，目前还没有在消费者评价中形成足够稳定的高频需求。
            </p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white p-4">
            <h4 className="text-sm font-extrabold text-slate-900">落到产品定义</h4>
            <p className="mt-2 text-xs leading-relaxed text-slate-600">
              产品定义不应从“大模型能做什么”出发，而应从“用户什么时候不方便使用手机和电脑”出发。短期优先做稳会议摘要、实时翻译、导航提醒、重要通知筛选、拍照识别和跨设备待办同步；中长期再升级为能理解上下文、主动建议并调用手机/PC 完成任务的个人 Agent。
            </p>
            <div className="mt-3 rounded-lg border border-slate-100 bg-slate-50 px-3 py-2 text-[11px] font-extrabold leading-relaxed text-slate-800">
              一句话：消费者高频使用 AI 眼镜的场景，本质上都是“手机不方便、信息又必须及时处理”的场景。
            </div>
          </div>
        </div>
      </section>

      <section className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm">
          <h3 className="flex items-center gap-2 text-sm font-extrabold text-slate-900">
            <GitBranch className="h-4 w-4 text-indigo-600" />
            生态变量：平台竞争正在出现
          </h3>
          <p className="mt-2 text-xs text-slate-600 leading-relaxed">
            Google 目前不是销量竞争者，而是未来平台格局的关键变量。Android XR + Gemini 可能把 AI 眼镜竞争从单品竞争推向平台竞争，使眼镜厂商、手机厂商、应用开发者和 AI 模型服务商进入同一生态。
          </p>
        </div>
        <div className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm">
          <h3 className="flex items-center gap-2 text-sm font-extrabold text-slate-900">
            <Brain className="h-4 w-4 text-indigo-600" />
            Agent 变量：硬件只是入口
          </h3>
          <p className="mt-2 text-xs text-slate-600 leading-relaxed">
            下一阶段的真正竞争不是“能否接入大模型”，而是“能否完成跨应用、跨设备、多步骤任务闭环”。从这个角度看，AI 眼镜的壁垒在操作系统、Agent 服务、应用生态和设备协同。
          </p>
        </div>
      </section>
    </div>
  );
}
