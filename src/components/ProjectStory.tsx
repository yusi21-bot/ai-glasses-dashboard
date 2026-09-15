import React from 'react';
import {
  ArrowRight,
  Boxes,
  Braces,
  FileSearch,
  GitCompareArrows,
  Layers3,
  LayoutDashboard,
  MonitorSmartphone,
  SearchCheck,
  Sparkles,
} from 'lucide-react';

interface ProjectStoryProps {
  onExplore: () => void;
  onBrowse: () => void;
}

const workflow = [
  ['01', '定义研究问题', '先区分不同眼镜形态解决的任务，而不是直接排列参数。'],
  ['02', '整理公开资料', '以品牌官网为主，补充零售、媒体与社区入口，并保留来源边界。'],
  ['03', '统一数据口径', '拆开品牌、产品线、款式和配件，建立可复用的产品字段。'],
  ['04', '设计阅读路径', '按结论、浏览、比较和图谱四种任务组织信息。'],
  ['05', '实现交互界面', '用 React 与 TypeScript 构建筛选、详情、比较和图谱组件。'],
  ['06', '检查与交付', '核对资源、缺失值和展示逻辑，并完成静态构建与公开部署。'],
];

const modules = [
  {
    icon: Sparkles,
    title: '结论先行',
    body: '先用市场信号、产品路线和用户洞察建立全局认知。',
  },
  {
    icon: Layers3,
    title: '产品大观',
    body: '按品牌、关键词、显示和摄像头形态筛选19个核心样本。',
  },
  {
    icon: GitCompareArrows,
    title: '横向对标',
    body: '选择最多4个产品，查看19个维度并突出差异。',
  },
  {
    icon: LayoutDashboard,
    title: '象限图谱',
    body: '从售价、重量和硬件组合理解不同产品路线。',
  },
];

export default function ProjectStory({ onExplore, onBrowse }: ProjectStoryProps) {
  return (
    <div className="space-y-8" id="project-story-section">
      <section className="overflow-hidden rounded-3xl border border-indigo-100 bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-900 text-white shadow-xl shadow-indigo-950/10">
        <div className="grid gap-8 px-6 py-9 sm:px-10 sm:py-12 lg:grid-cols-[1.25fr_0.75fr] lg:items-end">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[11px] font-bold tracking-wide text-indigo-100">
              <MonitorSmartphone className="h-3.5 w-3.5" />
              Product Research × Data Visualization × Frontend
            </div>
            <p className="mt-6 text-xs font-bold uppercase tracking-[0.22em] text-indigo-300">Portfolio Case Study</p>
            <h2 className="mt-3 max-w-3xl text-3xl font-black leading-tight sm:text-4xl">
              把一份复杂的竞品报告，转化成可以探索和比较的研究工具
            </h2>
            <p className="mt-5 max-w-3xl text-sm leading-7 text-slate-300 sm:text-base">
              本项目围绕海外 AI 眼镜的产品路线、硬件形态、AI 能力、价格和公开市场反馈，
              将分散资料整理为结构化数据，并进一步实现为可筛选、可查看详情、可横向比较的交互式 Web 应用。
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <button
                onClick={onExplore}
                className="inline-flex cursor-pointer items-center gap-2 rounded-xl bg-white px-4 py-2.5 text-xs font-extrabold text-slate-950 transition hover:-translate-y-0.5 hover:bg-indigo-50"
              >
                进入交互看板 <ArrowRight className="h-4 w-4" />
              </button>
              <button
                onClick={onBrowse}
                className="inline-flex cursor-pointer items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-4 py-2.5 text-xs font-extrabold text-white transition hover:bg-white/10"
              >
                浏览产品目录
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            {[
              ['9', '品牌组'],
              ['19', '产品 / 产品线'],
              ['19', '对比维度'],
              ['4', '分析视图'],
            ].map(([value, label]) => (
              <div key={label} className="rounded-2xl border border-white/10 bg-white/8 p-4 backdrop-blur">
                <div className="text-2xl font-black text-white">{value}</div>
                <div className="mt-1 text-[11px] font-semibold text-slate-300">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="grid gap-4 lg:grid-cols-3">
        <div className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm">
          <FileSearch className="h-5 w-5 text-indigo-600" />
          <h3 className="mt-4 text-base font-extrabold text-slate-900">为什么做</h3>
          <p className="mt-2 text-xs leading-6 text-slate-600">
            长篇报告适合完整阅读，却很难快速回答“哪些产品有显示”“同一品牌有哪些路线”“几款候选产品具体差在哪里”。
          </p>
        </div>
        <div className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm">
          <Boxes className="h-5 w-5 text-indigo-600" />
          <h3 className="mt-4 text-base font-extrabold text-slate-900">核心思路</h3>
          <p className="mt-2 text-xs leading-6 text-slate-600">
            先把品牌、产品线、规格、反馈和来源整理成统一数据，再让同一份数据驱动目录、详情、比较和图谱。
          </p>
        </div>
        <div className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm">
          <SearchCheck className="h-5 w-5 text-indigo-600" />
          <h3 className="mt-4 text-base font-extrabold text-slate-900">希望解决的问题</h3>
          <p className="mt-2 text-xs leading-6 text-slate-600">
            降低研究成果的阅读成本，让读者既能快速获得结论，也能随时回到具体产品和来源核查依据。
          </p>
        </div>
      </section>

      <section className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm sm:p-8">
        <div className="flex items-start gap-3">
          <Braces className="mt-0.5 h-5 w-5 text-indigo-600" />
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-indigo-600">Process</p>
            <h3 className="mt-1 text-xl font-black text-slate-900">从研究问题到可交付网页</h3>
          </div>
        </div>
        <div className="mt-6 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
          {workflow.map(([number, title, body]) => (
            <div key={number} className="rounded-xl border border-slate-100 bg-slate-50/80 p-4">
              <div className="font-mono text-[10px] font-black text-indigo-500">{number}</div>
              <h4 className="mt-2 text-sm font-extrabold text-slate-900">{title}</h4>
              <p className="mt-2 text-[11px] leading-5 text-slate-600">{body}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <div className="mb-4">
          <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-indigo-600">Information Architecture</p>
          <h3 className="mt-1 text-xl font-black text-slate-900">四种阅读任务，对应四个分析视图</h3>
        </div>
        <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
          {modules.map(({ icon: Icon, title, body }) => (
            <div key={title} className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm">
              <Icon className="h-5 w-5 text-indigo-600" />
              <h4 className="mt-4 text-sm font-extrabold text-slate-900">{title}</h4>
              <p className="mt-2 text-[11px] leading-5 text-slate-600">{body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="grid gap-4 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="rounded-2xl border border-indigo-100 bg-indigo-50/70 p-6">
          <h3 className="text-base font-extrabold text-indigo-950">一个可以复用到其他研究项目的方法</h3>
          <p className="mt-3 text-xs leading-6 text-indigo-950/80">
            用户研究、竞品研究和行业分析不一定只能以 PDF 或幻灯片交付。当资料包含大量对象、维度和比较关系时，
            HTML 可以把线性阅读转化为按问题探索：概要负责建立认知，筛选负责缩小范围，对比负责支持判断，详情与来源负责保留证据。
          </p>
        </div>
        <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
          <h3 className="text-base font-extrabold text-slate-900">项目范围与实现</h3>
          <p className="mt-3 text-xs leading-6 text-slate-600">
            研究框架、资料结构化、信息架构、交互逻辑与内容核验构成项目核心；前端采用 React、TypeScript、Vite 与 Tailwind CSS，并在 AI 辅助开发下持续迭代和检查。
          </p>
          <p className="mt-3 text-[11px] leading-5 text-slate-500">
            当前数据为阶段性公开资料快照，不是实时数据库；产品参数、价格和市场数字应结合页面标注日期理解。
          </p>
        </div>
      </section>

      <section className="flex flex-col gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h3 className="text-base font-extrabold text-slate-900">准备好查看研究结果了吗？</h3>
          <p className="mt-1 text-xs leading-5 text-slate-500">建议先看结论，再选择几款产品进入横向对标。</p>
        </div>
        <button
          onClick={onExplore}
          className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-xl bg-indigo-600 px-4 py-2.5 text-xs font-extrabold text-white transition hover:bg-indigo-700"
        >
          查看结论 <ArrowRight className="h-4 w-4" />
        </button>
      </section>
    </div>
  );
}
