import React, { useState } from 'react';
import { BRANDS, PRODUCTS } from './data';
import { Product } from './types';
import MarketOverview from './components/MarketOverview';
import ComparePanel from './components/ComparePanel';
import MarketCharts from './components/MarketCharts';
import ProductDetailModal from './components/ProductDetailModal';
import ExecutiveInsights from './components/ExecutiveInsights';
import ProjectStory from './components/ProjectStory';
import { Compass, Scale, Layers, BarChart2, Sparkles, BookOpen } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<'about' | 'insights' | 'catalog' | 'compare' | 'charts'>('about');
  const [comparedProducts, setComparedProducts] = useState<Product[]>([
    PRODUCTS.find(product => product.id === 'meta-rayban-gen2'),
    PRODUCTS.find(product => product.id === 'even-g2'),
    PRODUCTS.find(product => product.id === 'solos-airgo-v2')
  ].filter(Boolean) as Product[]);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const handleAddToCompare = (product: Product) => {
    setComparedProducts(prev => {
      if (prev.some(p => p.id === product.id)) {
        // Already exists, remove it
        return prev.filter(p => p.id !== product.id);
      }
      if (prev.length >= 4) {
        alert('为保证多维矩阵排版美观，对比引擎限制最多同时对比 4 款智能眼镜！');
        return prev;
      }
      return [...prev, product];
    });
  };

  const handleRemoveFromCompare = (productId: string) => {
    setComparedProducts(prev => prev.filter(p => p.id !== productId));
  };

  const handleClearCompare = () => {
    setComparedProducts([]);
  };

  return (
    <div className="min-h-screen bg-slate-50/50 text-slate-900 font-sans antialiased selection:bg-indigo-500 selection:text-white">
      {/* Upper Elegant Header */}
      <header className="border-b border-slate-100 bg-white/80 backdrop-blur-md sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-3 py-3 sm:min-h-20 sm:flex-row sm:items-center sm:justify-between sm:py-0">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-gradient-to-br from-indigo-500 to-indigo-700 rounded-xl shadow-md shadow-indigo-500/20 text-white shrink-0">
                <Compass className="h-5 w-5" />
              </div>
              <div>
                <h1 className="text-base sm:text-lg font-bold tracking-tight text-slate-900 flex items-center gap-2">
                  海外 AI 眼镜竞品研究看板
                  <span className="text-[10px] bg-indigo-50 text-indigo-700 border border-indigo-150 px-2 py-0.5 rounded-full font-bold uppercase hidden sm:inline">
                    Competitive Intelligence
                  </span>
                </h1>
                <p className="text-[11px] text-slate-500 font-medium">
                  海外主流品牌、完整产品线、价格口碑与功能矩阵结构化调研
                </p>
              </div>
            </div>

            {/* Nav Tabs */}
            <nav className="flex w-full space-x-1 overflow-x-auto rounded-xl bg-slate-100 p-1 sm:w-auto">
              <button
                onClick={() => setActiveTab('about')}
                className={`flex shrink-0 cursor-pointer items-center gap-1 rounded-lg px-3 py-1.5 text-xs font-semibold transition-all ${
                  activeTab === 'about'
                    ? 'bg-white text-indigo-600 shadow-sm'
                    : 'text-slate-500 hover:text-slate-800'
                }`}
              >
                <BookOpen className="w-3.5 h-3.5" />
                项目说明
              </button>
              <button
                onClick={() => setActiveTab('insights')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all flex items-center gap-1 cursor-pointer ${
                  activeTab === 'insights'
                    ? 'bg-white text-indigo-600 shadow-sm'
                    : 'text-slate-500 hover:text-slate-800'
                }`}
              >
                <Sparkles className="w-3.5 h-3.5" />
                结论先行
              </button>
              <button
                onClick={() => setActiveTab('catalog')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all flex items-center gap-1 cursor-pointer ${
                  activeTab === 'catalog'
                    ? 'bg-white text-indigo-600 shadow-sm'
                    : 'text-slate-500 hover:text-slate-800'
                }`}
              >
                <Layers className="w-3.5 h-3.5" />
                产品大观
              </button>
              <button
                onClick={() => setActiveTab('compare')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all flex items-center gap-1 cursor-pointer ${
                  activeTab === 'compare'
                    ? 'bg-white text-indigo-600 shadow-sm'
                    : 'text-slate-500 hover:text-slate-800'
                }`}
              >
                <Scale className="w-3.5 h-3.5" />
                横向对标
                {comparedProducts.length > 0 && (
                  <span className="bg-indigo-600 text-white text-[9px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                    {comparedProducts.length}
                  </span>
                )}
              </button>
              <button
                onClick={() => setActiveTab('charts')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all flex items-center gap-1 cursor-pointer ${
                  activeTab === 'charts'
                    ? 'bg-white text-indigo-600 shadow-sm'
                    : 'text-slate-500 hover:text-slate-800'
                }`}
              >
                <BarChart2 className="w-3.5 h-3.5" />
                象限图谱
              </button>
            </nav>
          </div>
        </div>
      </header>

      <section className="bg-white border-b border-slate-100 py-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-50/40 rounded-full blur-3xl pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-4">
          <div className="inline-flex items-center space-x-2 px-2.5 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-xs text-indigo-700 font-bold font-mono">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse"></span>
            <span>AI 产品经理海外智能眼镜竞品资料库</span>
          </div>

          <div className="max-w-none space-y-2">
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900 leading-tight">
              海外主流 AI 眼镜产品线、功能与市场反馈深度调研
            </h2>
            <p className="max-w-4xl text-xs leading-relaxed text-slate-500 sm:text-sm">
              从项目背景与研究方法出发，再按“结论先行 → 产品大观 → 横向对标 → 象限图谱”逐层进入品牌、产品、参数和功能路线。
            </p>
          </div>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-1 md:grid-cols-[1.15fr_0.75fr_1.1fr_1fr] gap-4 pt-2">
            <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 text-xs space-y-0.5 min-w-0">
              <span className="text-slate-400 font-bold whitespace-nowrap">覆盖品牌</span>
              <p className="text-slate-800 font-extrabold text-sm whitespace-nowrap overflow-hidden text-ellipsis">Meta, Solos, Even, Brilliant, Rokid 等 9 家</p>
            </div>
            <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 text-xs space-y-0.5 min-w-0">
              <span className="text-slate-400 font-bold whitespace-nowrap">覆盖产品/产品线</span>
              <p className="text-slate-800 font-extrabold text-sm whitespace-nowrap">19 个核心样本</p>
            </div>
            <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 text-xs space-y-0.5 min-w-0">
              <span className="text-slate-400 font-bold whitespace-nowrap">信源结构</span>
              <p className="text-slate-800 font-extrabold text-sm whitespace-nowrap overflow-hidden text-ellipsis">官网优先，补充零售、媒体和社区入口</p>
            </div>
            <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 text-xs space-y-0.5 min-w-0">
              <span className="text-slate-400 font-bold whitespace-nowrap">可交互分析</span>
              <p className="text-slate-800 font-extrabold text-sm whitespace-nowrap overflow-hidden text-ellipsis">品牌筛选、产品详情、横向对比、象限图谱</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Tab Render Container */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {activeTab === 'about' && (
          <ProjectStory
            onExplore={() => setActiveTab('insights')}
            onBrowse={() => setActiveTab('catalog')}
          />
        )}

        {activeTab === 'insights' && (
          <ExecutiveInsights />
        )}

        {activeTab === 'catalog' && (
          <MarketOverview
            onSelectProduct={setSelectedProduct}
            onAddToCompare={handleAddToCompare}
            comparedProductIds={comparedProducts.map(p => p.id)}
          />
        )}

        {activeTab === 'compare' && (
          <ComparePanel
            selectedProducts={comparedProducts}
            onRemoveFromCompare={handleRemoveFromCompare}
            onClearCompare={handleClearCompare}
            onAddToCompare={handleAddToCompare}
          />
        )}

        {activeTab === 'charts' && (
          <MarketCharts
            onSelectProduct={setSelectedProduct}
          />
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-150 py-10 mt-16 bg-white text-center text-xs text-slate-400 space-y-1">
        <p>AI Smart Glasses 海外竞品研究看板 &copy; 2026.</p>
        <p className="font-mono">数据采集周期: 2026-06-26 至 2026-07-01 | 来源: 品牌官网、官方商店、Amazon/Best Buy、Trustpilot、媒体测评与公开社区讨论</p>
      </footer>

      {/* Modal Overlay for details */}
      {selectedProduct && (
        <ProductDetailModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </div>
  );
}
