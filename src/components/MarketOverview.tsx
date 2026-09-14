import React, { useState } from 'react';
import { assetUrl } from '../assets';
import { BRANDS, PRODUCTS, formatCnyFromUsd } from '../data';
import { Brand, Product } from '../types';
import { Search, Globe, Award, Star, Eye, Video, CheckCircle, ListChecks, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface MarketOverviewProps {
  onSelectProduct: (product: Product) => void;
  onAddToCompare: (product: Product) => void;
  comparedProductIds: string[];
}

export default function MarketOverview({ onSelectProduct, onAddToCompare, comparedProductIds }: MarketOverviewProps) {
  const [selectedBrandId, setSelectedBrandId] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [filterDisplay, setFilterDisplay] = useState<'all' | 'with-screen' | 'audio-only'>('all');
  const [filterCamera, setFilterCamera] = useState<'all' | 'with-camera' | 'no-camera'>('all');
  const fallbackImage = assetUrl('product_placeholder.svg');

  const roleClassName = (role: string) => {
    if (role.includes('标杆')) return 'bg-amber-100 text-amber-800';
    if (role.includes('挑战')) return 'bg-blue-100 text-blue-800';
    if (role.includes('HUD') || role.includes('显示')) return 'bg-purple-100 text-purple-800';
    if (role.includes('开源')) return 'bg-emerald-100 text-emerald-800';
    if (role.includes('低价')) return 'bg-cyan-100 text-cyan-800';
    if (role.includes('企业')) return 'bg-slate-200 text-slate-800';
    return 'bg-slate-100 text-slate-800';
  };

  const formatPrice = (product: Product) => {
    if (product.priceUSD === null) return '待核验';
    const price = product.priceUSD % 1 === 0 ? `$${product.priceUSD}` : `$${product.priceUSD.toFixed(2)}`;
    return price;
  };

  const filteredProducts = PRODUCTS.filter(p => {
    const brandMatch = selectedBrandId === 'all' || p.brandId === selectedBrandId;
    const normalizedQuery = searchQuery.toLowerCase().trim();
    const queryMatch = !normalizedQuery ||
                       p.name.toLowerCase().includes(normalizedQuery) ||
                       p.line.toLowerCase().includes(normalizedQuery) ||
                       (p.variants ?? []).some(v => v.toLowerCase().includes(normalizedQuery)) ||
                       p.keyFeatures.some(f => f.toLowerCase().includes(normalizedQuery)) ||
                       p.techSpecs.chip.toLowerCase().includes(normalizedQuery);
    const displayMatch = filterDisplay === 'all' ||
                         (filterDisplay === 'with-screen' && p.hasDisplay) ||
                         (filterDisplay === 'audio-only' && !p.hasDisplay);
    const cameraMatch = filterCamera === 'all' ||
                        (filterCamera === 'with-camera' && p.hasCamera) ||
                        (filterCamera === 'no-camera' && !p.hasCamera);
    return brandMatch && queryMatch && displayMatch && cameraMatch;
  });

  return (
    <div className="space-y-8" id="market-overview-section">
      {/* Brand Selection Panel */}
      <div className="bg-white rounded-2xl border border-slate-100 p-6 shadow-sm">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
          <div>
            <h3 className="text-lg font-bold text-slate-800 flex items-center gap-2">
              <Award className="w-5 h-5 text-indigo-500" />
              主流AI眼镜品牌格局
            </h3>
            <p className="text-xs text-slate-500 mt-1">先看品牌，再过滤查看该品牌完整产品线与具体产品卡片</p>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs text-slate-400 font-mono">数据截至: 2026-06-29</span>
          </div>
        </div>

        {/* Brand Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          <button
            onClick={() => setSelectedBrandId('all')}
            className={`p-4 rounded-xl text-left border transition-all relative overflow-hidden ${
              selectedBrandId === 'all'
                ? 'border-indigo-600 bg-indigo-50/50 shadow-sm'
                : 'border-slate-100 hover:border-slate-200 bg-slate-50/30'
            }`}
          >
            <div className="flex items-center gap-3">
              <span className="text-2xl">🌍</span>
              <div>
                <h4 className="font-bold text-slate-800 text-sm">全部品牌</h4>
                <p className="text-[11px] text-slate-500 mt-0.5">查看全量智能眼镜</p>
              </div>
            </div>
          </button>

          {BRANDS.map(brand => {
            const isSelected = selectedBrandId === brand.id;
            return (
              <button
                key={brand.id}
                onClick={() => setSelectedBrandId(brand.id)}
                className={`p-4 rounded-xl text-left border transition-all relative ${
                  isSelected
                    ? 'border-indigo-600 bg-indigo-50/50 shadow-sm'
                    : 'border-slate-100 hover:border-slate-200 bg-white'
                }`}
              >
                <div className="flex items-start gap-2">
                  <span className="text-2xl mt-0.5">{brand.logo}</span>
                  <div className="space-y-0.5">
                    <div className="flex items-center gap-1.5 flex-wrap">
                      <span className="font-bold text-slate-800 text-sm">{brand.name}</span>
                      {brand.originCountry && (
                        <span className="text-[9px] px-1.5 py-0.2 rounded-full font-medium bg-slate-100 text-slate-600 border border-slate-200">
                          {brand.originCountry}
                        </span>
                      )}
                      <span className={`text-[9px] px-1.5 py-0.2 rounded-full font-medium ${roleClassName(brand.marketRole)}`}>
                        {brand.marketRole}
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-500 line-clamp-1">{brand.focus}</p>
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Brand Details */}
        {selectedBrandId !== 'all' && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-6 p-4 bg-slate-50 rounded-xl border border-slate-100 space-y-3"
          >
            {(() => {
              const b = BRANDS.find(x => x.id === selectedBrandId)!;
              return (
                <>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-2.5">
                    <div className="flex items-center gap-2">
                      <span className="text-lg font-bold text-slate-800">{b.chineseName}</span>
                      {b.originCountry && (
                        <span className="text-[10px] px-2 py-0.5 rounded-full bg-white border border-slate-200 text-slate-500 font-bold">
                          {b.originCountry}
                        </span>
                      )}
                      <span className="text-xs text-slate-400 font-mono">始于 {b.launchYear} 年</span>
                    </div>
                    <a
                      href={b.website}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 text-xs text-indigo-600 hover:text-indigo-800 font-medium transition-colors"
                    >
                      <Globe className="w-3.5 h-3.5" />
                      访问品牌官网
                    </a>
                  </div>
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 text-xs">
                    <div className="lg:col-span-5 space-y-3">
                      {b.companyBackground && (
                        <div>
                          <span className="font-semibold text-slate-700 block mb-1">品牌背景：</span>
                          <p className="text-slate-600 leading-relaxed">{b.companyBackground}</p>
                        </div>
                      )}
                      <div>
                        <span className="font-semibold text-slate-700 block mb-1">AI眼镜定位：</span>
                        <p className="text-slate-600 leading-relaxed">{b.description}</p>
                      </div>
                    </div>
                    <div className="lg:col-span-4">
                      <span className="font-semibold text-slate-700 block mb-1 flex items-center gap-1">
                        <ListChecks className="w-3.5 h-3.5 text-indigo-500" /> 完整产品线：
                      </span>
                      <ul className="list-disc pl-4 space-y-1 text-slate-600">
                        {b.productLines.map((s, idx) => (
                          <li key={idx} className="leading-relaxed">{s}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="lg:col-span-3">
                      <span className="font-semibold text-slate-700 block mb-1 flex items-center gap-1">
                        <Sparkles className="w-3.5 h-3.5 text-amber-500" /> 竞品分析要点：
                      </span>
                      <ul className="list-disc pl-4 space-y-1 text-slate-600">
                        {b.analysisPoints.map((s, idx) => (
                          <li key={idx} className="leading-relaxed">{s}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </>
              );
            })()}
          </motion.div>
        )}
      </div>

      {/* Filter and Search Bar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input
            type="text"
            placeholder="搜索产品、核心芯片、AI能力或参数..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 bg-white shadow-sm focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none text-sm transition-all text-slate-800"
          />
        </div>

        <div className="flex items-center gap-2 flex-wrap text-xs">
          <span className="text-slate-400 font-medium">高级筛选:</span>
          {/* Display Filter */}
          <select
            value={filterDisplay}
            onChange={(e: any) => setFilterDisplay(e.target.value)}
            className="bg-white border border-slate-200 rounded-lg px-3 py-1.5 shadow-sm text-slate-700 font-medium cursor-pointer outline-none focus:border-indigo-500"
          >
            <option value="all">所有光学显示 (全部)</option>
            <option value="with-screen">🖥️ 带有镜片内屏幕 (HUD)</option>
            <option value="audio-only">🔇 无镜片内显示</option>
          </select>

          {/* Camera Filter */}
          <select
            value={filterCamera}
            onChange={(e: any) => setFilterCamera(e.target.value)}
            className="bg-white border border-slate-200 rounded-lg px-3 py-1.5 shadow-sm text-slate-700 font-medium cursor-pointer outline-none focus:border-indigo-500"
          >
            <option value="all">所有相机配置 (全部)</option>
            <option value="with-camera">📸 带有 POV 摄像头</option>
            <option value="no-camera">🔒 无摄像头 (零隐私担忧)</option>
          </select>
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence mode="popLayout">
          {filteredProducts.map(product => {
            const isCompared = comparedProductIds.includes(product.id);
            return (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                key={product.id}
                className="bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col h-full group"
              >
                {/* Product Image and Indicators */}
                <div className="relative aspect-[16/10] bg-slate-50 overflow-hidden border-b border-slate-50">
                  <img
                    src={product.image}
                    alt={product.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-contain p-3 group-hover:scale-102 transition-transform duration-300"
                    onError={(e) => {
                      if ((e.currentTarget as HTMLImageElement).src.endsWith('product_placeholder.svg')) return;
                      (e.currentTarget as HTMLImageElement).src = fallbackImage;
                    }}
                  />
                  <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                    <span className="text-[10px] px-2 py-0.5 rounded-md font-bold bg-slate-900/80 text-white backdrop-blur-xs shadow-xs">
                      {product.line}
                    </span>
                    {product.hasDisplay ? (
                      <span className="text-[10px] px-2 py-0.5 rounded-md font-bold bg-purple-600/90 text-white flex items-center gap-1 shadow-xs">
                        <Eye className="w-3 h-3" /> HUD显示
                      </span>
                    ) : (
                      <span className="text-[10px] px-2 py-0.5 rounded-md font-bold bg-slate-500/80 text-white shadow-xs">
                        无显示屏
                      </span>
                    )}
                    {product.hasCamera ? (
                      <span className="text-[10px] px-2 py-0.5 rounded-md font-bold bg-blue-600/90 text-white flex items-center gap-1 shadow-xs">
                        <Video className="w-3 h-3" /> {product.techSpecs.camera}
                      </span>
                    ) : (
                      <span className="text-[10px] px-2 py-0.5 rounded-md font-bold bg-emerald-600/90 text-white flex items-center gap-1 shadow-xs">
                        🔒 零摄像隐私
                      </span>
                    )}
                  </div>

                  {/* Price tag */}
                  <div className="absolute bottom-3 right-3 bg-white/95 text-slate-900 px-2.5 py-1 rounded-lg font-mono font-bold text-sm shadow-sm border border-slate-100 flex flex-col items-end">
                    <span className="text-indigo-600">{formatPrice(product)}</span>
                    {product.priceUSD !== null && <span className="text-[9px] text-slate-400">{formatCnyFromUsd(product.priceUSD)}</span>}
                  </div>
                </div>

                {/* Body Details */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div className="space-y-3">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <h4 className="font-bold text-slate-800 text-sm group-hover:text-indigo-600 transition-colors">
                          {product.name}
                        </h4>
                        {product.releaseDate && (
                          <span className="inline-flex mt-1 mb-0.5 text-[10px] px-2 py-0.5 rounded-full bg-indigo-50 text-indigo-700 border border-indigo-100 font-bold">
                            发布时间：{product.releaseDate}
                          </span>
                        )}
                        <span className="text-[11px] text-slate-400 font-mono mt-0.5 block">
                          芯片: {product.techSpecs.chip}
                        </span>
                      </div>
                      <div className={`flex items-center gap-1 shrink-0 ${product.sentiment.rating === null ? 'text-slate-400' : 'text-amber-500'}`}>
                        <Star className={`w-3.5 h-3.5 ${product.sentiment.rating === null ? '' : 'fill-amber-400'}`} />
                        <span className="text-xs font-bold font-mono">{product.sentiment.rating ?? '待核验'}</span>
                      </div>
                    </div>

                    {/* Features List */}
                    <div className="space-y-1.5">
                      <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">核心功能亮点</span>
                      <ul className="space-y-1 text-xs text-slate-600">
                        {product.keyFeatures.slice(0, 3).map((f, i) => (
                          <li key={i} className="flex items-start gap-1.5">
                            <CheckCircle className="w-3.5 h-3.5 text-indigo-500 mt-0.5 shrink-0" />
                            <span className="line-clamp-1">{f}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Specifications badges */}
                    <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-50 text-[10px] font-mono text-slate-500">
                      <span className="bg-slate-50 px-2 py-0.5 rounded-md border border-slate-100">⚖️ {product.techSpecs.weight}</span>
                      <span className="bg-slate-50 px-2 py-0.5 rounded-md border border-slate-100">🔋 {product.techSpecs.battery.split('；')[0]}</span>
                      <span className="bg-slate-50 px-2 py-0.5 rounded-md border border-slate-100">🛡️ {product.techSpecs.protection}</span>
                    </div>
                  </div>

                  {/* Actions buttons */}
                  <div className="grid grid-cols-2 gap-2 mt-5 pt-3 border-t border-slate-100">
                    <button
                      onClick={() => onSelectProduct(product)}
                      className="py-1.5 text-center text-xs font-semibold text-slate-600 bg-slate-50 hover:bg-slate-100 rounded-lg transition-colors border border-slate-150"
                    >
                      查看详细资料
                    </button>
                    <button
                      onClick={() => onAddToCompare(product)}
                      className={`py-1.5 text-center text-xs font-semibold rounded-lg transition-all border ${
                        isCompared
                          ? 'bg-amber-50 text-amber-800 border-amber-300'
                          : 'bg-indigo-600 text-white hover:bg-indigo-700 border-indigo-600'
                      }`}
                    >
                      {isCompared ? '⚡ 已加对比' : '➕ 加入对比'}
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>

        {filteredProducts.length === 0 && (
          <div className="col-span-full py-12 text-center bg-slate-50 rounded-2xl border border-dashed border-slate-200">
            <p className="text-sm text-slate-500">没有找到符合筛选条件的产品线，请尝试调整搜索或筛选过滤器。</p>
          </div>
        )}
      </div>
    </div>
  );
}
