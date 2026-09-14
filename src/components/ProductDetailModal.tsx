import React from 'react';
import { assetUrl } from '../assets';
import { Product } from '../types';
import { BRANDS, formatCnyFromUsd } from '../data';
import { X, Star, ThumbsUp, ThumbsDown, ExternalLink, Flame, MessageCircle, ListChecks, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'motion/react';

interface ProductDetailModalProps {
  product: Product | null;
  onClose: () => void;
}

export default function ProductDetailModal({ product, onClose }: ProductDetailModalProps) {
  const [galleryIndex, setGalleryIndex] = React.useState(0);

  React.useEffect(() => {
    setGalleryIndex(0);
  }, [product?.id]);

  if (!product) return null;

  const isMetaGlasses = product.id === 'meta-glasses-value';
  const brand = BRANDS.find(b => b.id === product.brandId);
  const fallbackImage = assetUrl('product_placeholder.svg');
  const productGallery = product.imageGallery?.length
    ? product.imageGallery
    : [{ src: product.image, label: product.name, caption: product.line }];
  const activeGalleryIndex = Math.min(galleryIndex, productGallery.length - 1);
  const activeGalleryImage = productGallery[activeGalleryIndex] ?? productGallery[0];
  const moveGallery = (step: number) => {
    setGalleryIndex((current) => (current + step + productGallery.length) % productGallery.length);
  };
  const priceLabel = product.priceUSD === null
    ? '待官网/采购核验'
    : product.priceUSD % 1 === 0
      ? `$${product.priceUSD}`
      : `$${product.priceUSD.toFixed(2)}`;
  const hardwareType = product.hasDisplay
    ? product.hasCamera
      ? '🖥️ HUD 显示 + 摄像头'
      : '🖥️ HUD 显示 / 无摄像头'
    : product.hasCamera
      ? '📸 无显示屏 + 摄像头'
      : '🔇 纯音频 / 无摄像头';
  const renderVariantPrice = (price?: string) => {
    const cleaned = (price ?? '按 SKU 核验').replace(/\s*起/g, '').replace(/约\s+¥/g, '约¥');
    const parts = cleaned.split(/\s*\/\s*/).filter(Boolean);

    if (parts.length <= 1) {
      return <span>{cleaned}</span>;
    }

    return (
      <span className="flex flex-col gap-0.5">
        <span className={isMetaGlasses ? 'whitespace-nowrap' : ''}>{parts[0]}</span>
        <span className={`text-slate-700 ${isMetaGlasses ? 'whitespace-nowrap' : ''}`}>{parts.slice(1).join(' / ')}</span>
      </span>
    );
  };
  const renderVariantName = (name: string) => {
    const genMatch = name.match(/^(.*)\s+(Gen\s+\d+)$/);

    if (!genMatch) {
      return <span>{name}</span>;
    }

    return (
      <span>
        <span>{genMatch[1]}</span>{' '}
        <span className="whitespace-nowrap">{genMatch[2]}</span>
      </span>
    );
  };
  const variantLayout = product.id === 'meta-glasses-value'
    ? {
        featureCol: 'lg:col-span-5',
        tableCol: 'lg:col-span-7',
        colWidths: ['w-[17%]', 'w-[17%]', 'w-[32%]', 'w-[34%]']
      }
    : product.id === 'solos-airgo-3'
      ? {
          featureCol: 'lg:col-span-5',
          tableCol: 'lg:col-span-7',
          colWidths: ['w-[18%]', 'w-[20%]', 'w-[32%]', 'w-[30%]']
        }
    : {
        featureCol: 'lg:col-span-4',
        tableCol: 'lg:col-span-8',
        colWidths: ['w-[20%]', 'w-[13%]', 'w-[31%]', 'w-[36%]']
      };

  return (
    <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        className="bg-white rounded-2xl shadow-xl border border-slate-100 max-w-5xl w-full max-h-[90vh] overflow-hidden flex flex-col"
      >
        {/* Header */}
        <div className="p-5 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
          <div className="flex items-center gap-2.5">
            <span className="text-xl">{brand?.logo}</span>
            <div>
              <span className="text-[10px] uppercase font-bold text-indigo-600 tracking-wider font-mono">
                {brand?.name} · {product.line.split('(')[0]}
              </span>
              <h3 className="text-base font-bold text-slate-800 mt-0.5">{product.name}</h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="overflow-y-auto p-6 space-y-8 flex-1">
          {/* Main Info Hero */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
            {/* Image & Price */}
            <div className="md:col-span-5 flex flex-col gap-3">
              <div className="relative aspect-[2/1] bg-slate-50 rounded-xl overflow-hidden border border-slate-100 flex items-center justify-center">
                <div className="absolute top-3 left-3 z-10 max-w-[82%] rounded-lg border border-white/70 bg-white/90 px-2.5 py-1 shadow-sm">
                  <p className="text-[11px] font-bold text-slate-800 leading-tight">{activeGalleryImage.label}</p>
                  <p className="text-[9px] text-slate-500 leading-tight mt-0.5">{activeGalleryImage.caption ?? product.line}</p>
                </div>
                <img
                  src={activeGalleryImage.src}
                  alt={activeGalleryImage.label}
                  referrerPolicy="no-referrer"
                  className="max-w-full max-h-full object-contain p-1.5"
                  onError={(e) => {
                    if ((e.currentTarget as HTMLImageElement).src.endsWith('product_placeholder.svg')) return;
                    (e.currentTarget as HTMLImageElement).src = fallbackImage;
                  }}
                />
                {productGallery.length > 1 && (
                  <>
                    <button
                      type="button"
                      aria-label="上一张产品图"
                      onClick={() => moveGallery(-1)}
                      className="absolute left-3 top-1/2 z-10 -translate-y-1/2 rounded-full border border-slate-200 bg-white/90 p-1.5 text-slate-500 shadow-sm transition-colors hover:text-indigo-600 hover:border-indigo-200"
                    >
                      <ChevronLeft className="h-4 w-4" />
                    </button>
                    <button
                      type="button"
                      aria-label="下一张产品图"
                      onClick={() => moveGallery(1)}
                      className="absolute right-3 top-1/2 z-10 -translate-y-1/2 rounded-full border border-slate-200 bg-white/90 p-1.5 text-slate-500 shadow-sm transition-colors hover:text-indigo-600 hover:border-indigo-200"
                    >
                      <ChevronRight className="h-4 w-4" />
                    </button>
                    <div className="absolute bottom-3 left-3 z-10 flex items-center gap-1.5 rounded-full border border-white/70 bg-white/90 px-2 py-1 shadow-sm">
                      {productGallery.map((item, idx) => (
                        <button
                          key={item.label}
                          type="button"
                          aria-label={`切换到${item.label}`}
                          onClick={() => setGalleryIndex(idx)}
                          className={`h-1.5 rounded-full transition-all ${
                            idx === activeGalleryIndex ? 'w-5 bg-indigo-600' : 'w-1.5 bg-slate-300 hover:bg-slate-400'
                          }`}
                        />
                      ))}
                    </div>
                    <div className="absolute bottom-3 right-3 z-10 rounded-full border border-white/70 bg-white/90 px-2 py-1 text-[10px] font-bold text-slate-500 shadow-sm">
                      {activeGalleryIndex + 1}/{productGallery.length}
                    </div>
                  </>
                )}
              </div>

              <div className="bg-slate-50 rounded-xl px-4 py-3 border border-slate-150 space-y-2">
                {product.releaseDate && (
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-[11px] text-slate-400 font-bold whitespace-nowrap">发布时间:</span>
                    <span className="text-[11px] font-bold text-slate-800 text-right">{product.releaseDate}</span>
                  </div>
                )}
                <div className="flex items-center justify-between gap-3">
                  <span className="text-[11px] text-slate-400 font-bold whitespace-nowrap">参考零售价:</span>
                  <span className="text-base font-mono font-bold text-indigo-600">{priceLabel}</span>
                </div>
                {product.priceUSD !== null && (
                  <div className="flex items-center justify-between gap-3 border-t border-slate-200/60 pt-2 text-[11px]">
                    <span className="text-slate-400 font-bold whitespace-nowrap">折合人民币:</span>
                    <span className="font-mono font-bold text-slate-800">{formatCnyFromUsd(product.priceUSD)} 起</span>
                  </div>
                )}
                <div className="flex items-center justify-between gap-3 border-t border-slate-200/60 pt-2 text-[11px]">
                  <span className="text-slate-400 font-bold whitespace-nowrap">硬件光学类型:</span>
                  <span className="font-bold text-slate-800">{hardwareType}</span>
                </div>
              </div>
            </div>

            {/* Specifications List */}
            <div className="md:col-span-7 flex flex-col">
              <div>
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">底层硬件技术规格</h4>
                <div className="grid grid-cols-2 gap-2.5 text-xs">
                  <div className="p-3 bg-slate-50 rounded-lg border border-slate-100 space-y-1">
                    <span className="text-[10px] text-slate-400 font-bold">处理器芯片:</span>
                    <p className="text-slate-700 font-semibold leading-snug break-keep" title={product.techSpecs.chip}>{product.techSpecs.chip}</p>
                  </div>
                  <div className="p-3 bg-slate-50 rounded-lg border border-slate-100 space-y-1">
                    <span className="text-[10px] text-slate-400 font-bold">第一视角相机:</span>
                    <p className="text-slate-700 font-semibold leading-snug break-keep" title={product.techSpecs.camera}>{product.techSpecs.camera}</p>
                  </div>
                  <div className="p-3 bg-slate-50 rounded-lg border border-slate-100 space-y-1">
                    <span className="text-[10px] text-slate-400 font-bold">整机净重量:</span>
                    <p className="text-slate-700 font-semibold leading-snug break-keep">{product.techSpecs.weight}</p>
                  </div>
                  <div className="p-3 bg-slate-50 rounded-lg border border-slate-100 space-y-1">
                    <span className="text-[10px] text-slate-400 font-bold">续航指标:</span>
                    <p className="text-slate-700 font-semibold leading-snug break-keep" title={product.techSpecs.battery}>{product.techSpecs.battery}</p>
                  </div>
                  <div className="p-3 bg-slate-50 rounded-lg border border-slate-100 space-y-1">
                    <span className="text-[10px] text-slate-400 font-bold">光学模组规格:</span>
                    <p className="text-slate-700 font-semibold leading-snug break-keep" title={product.techSpecs.display}>{product.techSpecs.display}</p>
                  </div>
                  <div className="p-3 bg-slate-50 rounded-lg border border-slate-100 space-y-1">
                    <span className="text-[10px] text-slate-400 font-bold">防护防尘级:</span>
                    <p className="text-slate-700 font-semibold leading-snug break-keep">{product.techSpecs.protection}</p>
                  </div>
                  <div className="p-3 bg-slate-50 rounded-lg border border-slate-100 space-y-1">
                    <span className="text-[10px] text-slate-400 font-bold">音频/传感:</span>
                    <p className="text-slate-700 font-semibold leading-snug break-keep" title={product.techSpecs.sensors}>{product.techSpecs.sensors}</p>
                  </div>
                  <div className="p-3 bg-slate-50 rounded-lg border border-slate-100 space-y-1">
                    <span className="text-[10px] text-slate-400 font-bold">连接/联网:</span>
                    <p className="text-slate-700 font-semibold leading-snug break-keep" title={product.techSpecs.connectivity}>{product.techSpecs.connectivity}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Features and variant structure */}
          <div className="border-t border-slate-100 pt-6">
            {product.variantDetails?.length ? (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                <div className={variantLayout.featureCol}>
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">核心产品特性亮点</h4>
                  <div className="bg-slate-50 rounded-xl border border-slate-100 p-4">
                    <ul className="list-disc pl-4 space-y-2 text-xs text-slate-600 leading-relaxed break-keep">
                      {product.keyFeatures.map((f, i) => (
                        <li key={i}>{f}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className={variantLayout.tableCol}>
                  <div className="p-3 bg-indigo-50/40 rounded-xl border border-indigo-100/70 space-y-2">
                    <h4 className="text-xs font-bold text-indigo-700 flex items-center gap-1">
                      <ListChecks className="w-3.5 h-3.5" /> 款式差异与适配人群
                    </h4>
                    <div className="overflow-x-auto rounded-lg border border-indigo-100 bg-white">
                      <table className="w-full table-fixed text-[11px] border-collapse">
                        <colgroup>
                          <col className={variantLayout.colWidths[0]} />
                          <col className={variantLayout.colWidths[1]} />
                          <col className={variantLayout.colWidths[2]} />
                          <col className={variantLayout.colWidths[3]} />
                        </colgroup>
                        <thead className="bg-indigo-50/70 text-indigo-900">
                          <tr>
                            <th className="p-2.5 text-left font-bold border-b border-indigo-100">款式</th>
                            <th className="p-2.5 text-left font-bold border-b border-indigo-100">价格参考</th>
                            <th className="p-2.5 text-left font-bold border-b border-indigo-100">核心区别</th>
                            <th className="p-2.5 text-left font-bold border-b border-indigo-100">更适合谁</th>
                          </tr>
                        </thead>
                        <tbody>
                          {product.variantDetails.map((variant) => (
                            <tr key={variant.name} className="border-b border-slate-100 last:border-b-0 align-top">
                              <td className="p-2.5 font-bold text-slate-800 leading-snug break-keep">{renderVariantName(variant.name)}</td>
                              <td className={`p-2.5 text-indigo-700 font-mono font-bold leading-snug ${isMetaGlasses ? 'whitespace-nowrap' : 'break-keep'}`}>{renderVariantPrice(variant.price)}</td>
                              <td className={`p-2.5 text-slate-600 leading-relaxed ${isMetaGlasses ? '[text-wrap:pretty]' : 'break-keep'}`}>{variant.difference}</td>
                              <td className={`p-2.5 text-slate-600 leading-relaxed ${isMetaGlasses ? '[text-wrap:pretty]' : 'break-keep'}`}>{variant.targetUser}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                    {product.variantConfigNote && (
                      <div className="rounded-lg border border-indigo-100 bg-white/80 px-3 py-2 text-[11px] leading-relaxed text-slate-600 break-keep">
                        <span className="font-bold text-indigo-700">配置差异备注：</span>
                        {product.variantConfigNote}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ) : (
              <div className="rounded-xl border border-slate-100 bg-slate-50 p-4">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">定位与关键能力</h4>
                    <p className="text-[11px] text-slate-500 mt-1">产品定位、价格带和核心能力集中展示，减少独立短模块造成的错位。</p>
                  </div>
                  {product.variants?.length ? (
                    <span className="shrink-0 rounded-md bg-white px-2 py-1 text-[10px] font-bold text-indigo-700 border border-indigo-100">
                      {product.variants.length} 个关键标签
                    </span>
                  ) : null}
                </div>

                {product.variants?.length ? (
                  <div className="mt-3 flex flex-wrap gap-2">
                    {product.variants.map((variant) => (
                      <span key={variant} className="text-[10px] px-2.5 py-1.5 bg-white border border-indigo-100 rounded-lg text-slate-700 font-semibold whitespace-nowrap shadow-xs">
                        {variant}
                      </span>
                    ))}
                  </div>
                ) : null}

                <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-2.5">
                  {product.keyFeatures.map((feature, index) => (
                    <div key={feature} className="rounded-lg border border-slate-100 bg-white p-3 flex gap-2">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-indigo-50 text-[10px] font-bold text-indigo-700">
                        {index + 1}
                      </span>
                      <p className="text-xs leading-relaxed text-slate-600 break-keep">{feature}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {product.accessorySection && (
            <div className="border-t border-slate-100 pt-6">
              <div className="rounded-xl border border-indigo-100 bg-indigo-50/35 p-4">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3">
                  <div>
                    <h4 className="text-xs font-bold text-indigo-700 uppercase tracking-wider flex items-center gap-1">
                      <ListChecks className="w-3.5 h-3.5" /> {product.accessorySection.title}
                    </h4>
                    <p className="mt-1 text-[11px] font-semibold text-slate-700 break-keep">{product.accessorySection.subtitle}</p>
                  </div>
                  <span className="shrink-0 rounded-md border border-indigo-100 bg-white px-2.5 py-1 text-[10px] font-bold text-indigo-700">
                    独立配件模块
                  </span>
                </div>

                <div className="mt-3 grid grid-cols-1 md:grid-cols-12 gap-3 items-stretch">
                  <div className={product.accessorySection.image ? 'md:col-span-8' : 'md:col-span-12'}>
                    <p className="text-xs leading-relaxed text-slate-600 break-keep">
                      {product.accessorySection.description}
                    </p>
                    <div className="mt-4 grid grid-cols-2 md:grid-cols-3 gap-2.5">
                      {product.accessorySection.specs.map((spec) => (
                        <div key={spec.label} className="rounded-lg border border-indigo-100 bg-white p-3">
                          <span className="text-[10px] font-bold text-slate-400">{spec.label}:</span>
                          <p className="mt-0.5 text-xs font-semibold leading-snug text-slate-700 break-keep">{spec.value}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  {product.accessorySection.image && (
                    <div className="md:col-span-4 rounded-xl border border-indigo-100 bg-white flex items-center justify-center overflow-hidden min-h-[150px]">
                      <img
                        src={product.accessorySection.image}
                        alt={product.accessorySection.title}
                        className="max-h-40 w-full object-contain p-2"
                        onError={(e) => {
                          (e.currentTarget as HTMLImageElement).src = fallbackImage;
                        }}
                      />
                    </div>
                  )}
                </div>

                <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-2.5">
                  {product.accessorySection.highlights.map((item, index) => (
                    <div key={item} className="rounded-lg border border-indigo-100 bg-white/85 p-3 flex gap-2">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-indigo-100 text-[10px] font-bold text-indigo-700">
                        {index + 1}
                      </span>
                      <p className="text-[11px] leading-relaxed text-slate-600 break-keep">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Pros and Cons */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 border-t border-slate-100 pt-6">
            <div className="space-y-3">
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1">
                <ThumbsUp className="w-4 h-4 text-emerald-500" /> 核心竞争优势
              </h4>
              <ul className="space-y-1.5">
                {product.pros.map((p, i) => (
                  <li key={i} className="text-xs text-slate-600 leading-relaxed flex items-start gap-1.5">
                    <span className="text-emerald-500 font-bold">✓</span>
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-3">
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1">
                <ThumbsDown className="w-4 h-4 text-rose-500" /> 痛点/劣势聚类
              </h4>
              <ul className="space-y-1.5">
                {product.cons.map((c, i) => (
                  <li key={i} className="text-xs text-slate-600 leading-relaxed flex items-start gap-1.5">
                    <span className="text-rose-500 font-bold">✗</span>
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Sentiment semantic clustering */}
          <div className="border-t border-slate-100 pt-6 space-y-4">
            <div className="flex items-center justify-between flex-wrap gap-2">
              <div>
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1">
                  <MessageCircle className="w-4 h-4 text-indigo-500" /> 海外零售 / 媒体 / 社区反馈聚类
                </h4>
                <p className="text-[11px] text-slate-500 mt-0.5">基于公开零售页、媒体评测、社区讨论和品牌口碑入口做中文语义整理；不虚构销量。</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1 text-xs text-slate-500 bg-slate-50 px-2.5 py-1 rounded-md border border-slate-100">
                  <span className="font-bold text-slate-700">评分样本数:</span>
                  <span className="font-mono text-indigo-600 font-bold">{product.sentiment.reviewsCount}</span>
                </div>
                <div className="flex items-center gap-1 text-amber-500 bg-amber-50 border border-amber-200 px-2.5 py-1 rounded-md">
                  <Star className={`w-3.5 h-3.5 ${product.sentiment.rating === null ? '' : 'fill-amber-400'}`} />
                  <span className="text-xs font-bold font-mono">{product.sentiment.rating ?? '待核验'}</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              <div className="p-4 rounded-xl border border-emerald-100 bg-emerald-50/25 space-y-2">
                <span className="font-bold text-emerald-800 flex items-center gap-1">🟢 消费者好评聚类倾向：</span>
                <p className="text-slate-600 leading-relaxed">{product.sentiment.positiveSummary}</p>
                <div className="space-y-1.5 pt-2 border-t border-emerald-100/50">
                  <span className="text-[10px] text-emerald-700 font-bold">典型好评观点概括：</span>
                  {product.sentiment.typicalPositiveComments.map((comm, i) => (
                    <p key={i} className="text-[11px] text-slate-500 italic pl-2 border-l border-emerald-200">
                      {comm}
                    </p>
                  ))}
                </div>
              </div>

              <div className="p-4 rounded-xl border border-rose-100 bg-rose-50/25 space-y-2">
                <span className="font-bold text-rose-800 flex items-center gap-1">🔴 消费者差评聚类倾向：</span>
                <p className="text-slate-600 leading-relaxed">{product.sentiment.negativeSummary}</p>
                <div className="space-y-1.5 pt-2 border-t border-rose-100/50">
                  <span className="text-[10px] text-rose-700 font-bold">典型差评观点概括：</span>
                  {product.sentiment.typicalNegativeComments.map((comm, i) => (
                    <p key={i} className="text-[11px] text-slate-500 italic pl-2 border-l border-rose-200">
                      {comm}
                    </p>
                  ))}
                </div>
              </div>
            </div>

            <div className="p-3 bg-indigo-50/40 rounded-xl border border-indigo-100/50 flex items-center gap-2 text-xs text-indigo-900 leading-relaxed">
              <Flame className="w-4 h-4 text-orange-500 shrink-0" />
              <span>
                <strong>社群讨论热度趋势：</strong> {product.sentiment.redditTopicVolume}
              </span>
            </div>
          </div>

          {/* Verified Sourcing & Links */}
          <div className="border-t border-slate-100 pt-6 space-y-3">
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
              资料来源与可访问链接
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
              {product.retailLinks.map((link, idx) => (
                <a
                  key={idx}
                  href={link.url}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 rounded-xl border border-slate-150 hover:border-indigo-500 hover:bg-slate-50/50 flex flex-col justify-between transition-all group"
                >
                  <div className="flex items-center justify-between text-xs font-bold text-slate-800">
                    <span className="truncate">{link.platform}</span>
                    <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-indigo-600 transition-colors" />
                  </div>
                  <div className="flex items-center justify-between text-[11px] mt-2 text-slate-500">
                    <span className="font-mono text-indigo-600 font-semibold">{link.price}</span>
                    <span className={`px-1.5 py-0.2 rounded-md font-medium text-[9px] ${
                      link.status.includes('现货') ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-800'
                    }`}>
                      {link.status}
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
