import React, { useState } from 'react';
import { PRODUCTS } from '../data';
import { Product } from '../types';
import { Eye, Video, ShieldCheck, HelpCircle, Target, TrendingUp, DollarSign } from 'lucide-react';

interface MarketChartsProps {
  onSelectProduct: (product: Product) => void;
}

export default function MarketCharts({ onSelectProduct }: MarketChartsProps) {
  const [selectedBubble, setSelectedBubble] = useState<string | null>(null);
  const getWeight = (weightStr: string) => {
    const weightMatch = weightStr.match(/\d+(\.\d+)?/);
    return weightMatch ? Number(weightMatch[0]) : null;
  };
  const pricedProducts = PRODUCTS.filter(
    product => product.priceUSD !== null && getWeight(product.techSpecs.weight) !== null
  );

  // Price range covers low-cost audio glasses through early high-end AR AI products.
  const getCoordinates = (price: number, weightStr: string) => {
    const weight = getWeight(weightStr)!;
    const clampedPrice = Math.min(Math.max(price, 190), 1300);
    const clampedWeight = Math.min(Math.max(weight, 30), 90);

    const x = 10 + ((clampedPrice - 190) / 1110) * 80;

    const y = 90 - ((clampedWeight - 30) / 60) * 80;

    return { x: `${x}%`, y: `${y}%` };
  };

  const bubbleColor = (p: Product) => {
    if (p.hasDisplay && p.hasCamera) return 'bg-purple-500 ring-purple-200'; // Full AR/Advanced Display
    if (p.hasDisplay) return 'bg-emerald-500 ring-emerald-200'; // HUD Only
    if (p.hasCamera) return 'bg-blue-500 ring-blue-200'; // POV Audio/Camera
    return 'bg-amber-500 ring-amber-200'; // Audio Only
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8" id="market-insights-section">
      {/* Price vs Weight Scatter Plot Bubble Chart */}
      <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-100 p-6 shadow-sm space-y-4">
        <div>
          <h3 className="text-sm font-bold text-slate-800 flex items-center gap-2">
            <TrendingUp className="w-4 h-4 text-indigo-500" />
            AI 眼镜「售价 vs. 重量」全局气泡图
          </h3>
          <p className="text-[11px] text-slate-500 mt-1">
            横轴为官方/零售起价(USD)，纵轴为资料中可确认的整机重量(g)。缺少价格或重量的样本不进入坐标图；点击气泡可打开产品详情。
          </p>
        </div>

        {/* Legend */}
        <div className="flex flex-wrap items-center gap-4 text-[10px] text-slate-500 font-medium bg-slate-50 p-2.5 rounded-lg border border-slate-100">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-purple-500"></span>
            <span>有屏 + 有摄：AI+AR</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
            <span>有屏 + 无摄：HUD</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-blue-500"></span>
            <span>无屏 + 有摄：视觉 AI</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500"></span>
            <span>无屏 + 无摄：音频助手</span>
          </div>
        </div>

        {/* Chart Canvas */}
        <div className="relative h-80 bg-slate-50 rounded-xl border border-slate-150 p-4 select-none">
          {/* Axis Labels */}
          <div className="absolute left-3 top-3 text-[10px] text-slate-400 font-bold font-mono">↑ 重量 (重/笨重)</div>
          <div className="absolute left-3 bottom-3 text-[10px] text-slate-400 font-bold font-mono">↓ 重量 (轻/无感)</div>
          <div className="absolute right-3 bottom-3 text-[10px] text-slate-400 font-bold font-mono">售价高 →</div>
          <div className="absolute left-1/4 bottom-3 text-[10px] text-slate-400 font-bold font-mono">← 售价低</div>

          {/* Grid lines */}
          <div className="absolute left-10 right-10 top-10 bottom-10 border-l border-b border-dashed border-slate-200">
            {/* Horizontal helper lines */}
            <div className="absolute left-0 right-0 top-1/4 border-t border-slate-150/40"></div>
            <div className="absolute left-0 right-0 top-2/4 border-t border-slate-150/40"></div>
            <div className="absolute left-0 right-0 top-3/4 border-t border-slate-150/40"></div>
            {/* Vertical helper lines */}
            <div className="absolute top-0 bottom-0 left-1/4 border-l border-slate-150/40"></div>
            <div className="absolute top-0 bottom-0 left-2/4 border-l border-slate-150/40"></div>
            <div className="absolute top-0 bottom-0 left-3/4 border-l border-slate-150/40"></div>
          </div>

          {/* Plotting bubbles */}
          {pricedProducts.map(p => {
            const { x, y } = getCoordinates(p.priceUSD!, p.techSpecs.weight);
            const colorClass = bubbleColor(p);
            const isHovered = selectedBubble === p.id;
            return (
              <div
                key={p.id}
                className="absolute -translate-x-1/2 -translate-y-1/2 transition-all cursor-pointer z-10"
                style={{ left: x, top: y }}
                onMouseEnter={() => setSelectedBubble(p.id)}
                onMouseLeave={() => setSelectedBubble(null)}
                onClick={() => onSelectProduct(p)}
              >
                <div className={`w-5 h-5 rounded-full ${colorClass} ring-4 hover:scale-130 transition-transform shadow-md relative`}>
                  {/* Small pulse effect for display glasses */}
                  {p.hasDisplay && <span className="absolute inset-0 rounded-full animate-ping bg-current opacity-20"></span>}
                </div>

                {/* Tooltip on hover */}
                {isHovered && (
                  <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-slate-900 text-white text-[10px] px-2.5 py-1.5 rounded-lg shadow-lg z-30 min-w-44 border border-slate-800 space-y-1 pointer-events-none">
                    <div className="font-bold truncate">{p.name}</div>
                    <div className="flex items-center justify-between font-mono text-slate-350 border-t border-slate-800 pt-1">
                      <span>价: ${p.priceUSD}</span>
                      <span>重: {p.techSpecs.weight}</span>
                    </div>
                  </div>
                )}

                {/* Always-on abbreviation label */}
                <span className="absolute top-6 left-1/2 -translate-x-1/2 text-[9px] font-bold text-slate-700 bg-white/80 px-1 py-0.2 rounded-md shadow-2xs whitespace-nowrap border border-slate-100">
                  {p.name.split(' ')[0]} {p.name.split(' ')[1] || ''}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Strategic Market Quadrants Mapping */}
      <div className="lg:col-span-5 bg-white rounded-2xl border border-slate-100 p-6 shadow-sm space-y-4">
        <div>
          <h3 className="text-sm font-bold text-slate-800 flex items-center gap-2">
            <Target className="w-4 h-4 text-indigo-500" />
            AI 眼镜市场形态象限图
          </h3>
          <p className="text-[11px] text-slate-500 mt-1">
            按“是否有显示屏”和“是否有摄像头”理解主流玩家的四类形态：
          </p>
        </div>

        {/* Quadrant display */}
        <div className="grid grid-cols-2 gap-3.5 pt-2">
          <div className="p-3 bg-purple-50/50 border border-purple-100 rounded-xl space-y-1.5">
            <span className="text-[10px] font-bold text-purple-800 block uppercase tracking-wider">💻 有屏 + 有摄：高端全功能旗舰</span>
            <p className="text-[11px] text-slate-600 leading-relaxed">
              <strong>典型代表:</strong> RayNeo X3 Pro、Rokid Glasses、Meta Display。<br />
              <strong>特征:</strong> 可视化 AI、字幕导航和视觉输入完整，但价格、重量、续航和供货门槛最高。
            </p>
          </div>

          <div className="p-3 bg-emerald-50/50 border border-emerald-100 rounded-xl space-y-1.5">
            <span className="text-[10px] font-bold text-emerald-800 block uppercase tracking-wider">💼 有屏 + 无摄：隐私友好 HUD</span>
            <p className="text-[11px] text-slate-600 leading-relaxed">
              <strong>典型代表:</strong> Even G2、Even G1、Vuzix Z100。<br />
              <strong>特征:</strong> 提词、翻译、通知和工作流清晰，社会接受度高，但缺少视觉识别和内容创作能力。
            </p>
          </div>

          <div className="p-3 bg-blue-50/50 border border-blue-100 rounded-xl space-y-1.5">
            <span className="text-[10px] font-bold text-blue-800 block uppercase tracking-wider">🤳 无屏 + 有摄：POV 与视觉 AI</span>
            <p className="text-[11px] text-slate-600 leading-relaxed">
              <strong>典型代表:</strong> Ray-Ban Meta、Oakley Meta、Solos V2、Rokid Style。<br />
              <strong>特征:</strong> 拍摄和视觉问答强，价格覆盖广；但无显示屏让翻译、导航和答案承接不够直观。
            </p>
          </div>

          <div className="p-3 bg-amber-50/50 border border-amber-100 rounded-xl space-y-1.5">
            <span className="text-[10px] font-bold text-amber-800 block uppercase tracking-wider">🔒 无屏 + 无摄：音频助手</span>
            <p className="text-[11px] text-slate-600 leading-relaxed">
              <strong>典型代表:</strong> Solos A5、Solos AirGo 3、Echo Frames。<br />
              <strong>特征:</strong> 价格和隐私压力最低，适合通话/翻译/助手；但最容易被用户理解成“眼镜形态耳机”。
            </p>
          </div>
        </div>

        {/* Reading guide */}
        <div className="p-3.5 bg-indigo-50 border border-indigo-150 rounded-xl space-y-1 text-xs">
          <span className="font-bold text-indigo-900 block">💡 赛道阅读提示：</span>
          <p className="text-indigo-800 leading-relaxed text-[11px]">
            当前竞争不只是“有没有 AI”，而是硬件形态、模型入口、隐私接受度和渠道可信度的组合题。
            Meta 赢在渠道和日常佩戴，Even 赢在隐私友好的可视化信息，Solos / Rokid 赢在低价和多模型，RayNeo / XREAL / Vuzix 则分别代表全彩 AR、显示相邻和企业工作流路线。
          </p>
        </div>
      </div>
    </div>
  );
}
