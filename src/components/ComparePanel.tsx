import React, { useState } from 'react';
import { assetUrl } from '../assets';
import { PRODUCTS, COMPARISON_DATA, COMPARISON_DIMENSIONS } from '../data';
import { Product } from '../types';
import { Scale, Check, X, ShieldAlert, Sparkles, RefreshCw, Trash2, HelpCircle } from 'lucide-react';

interface ComparePanelProps {
  selectedProducts: Product[];
  onRemoveFromCompare: (productId: string) => void;
  onClearCompare: () => void;
  onAddToCompare: (product: Product) => void;
}

export default function ComparePanel({ selectedProducts, onRemoveFromCompare, onClearCompare, onAddToCompare }: ComparePanelProps) {
  const [highlightDiff, setHighlightDiff] = useState<boolean>(false);
  const fallbackImage = assetUrl('product_placeholder.svg');

  // Suggested products to add when less than 2 are selected
  const availableToSuggest = PRODUCTS.filter(p => !selectedProducts.some(sp => sp.id === p.id));

  const renderValue = (productId: string, dimensionId: string) => {
    const pData = COMPARISON_DATA[productId];
    if (!pData) return <span className="text-slate-400 font-mono">-</span>;
    const value = pData[dimensionId];

    if (typeof value === 'boolean') {
      return value ? (
        <Check className="w-5 h-5 text-emerald-500 mx-auto" />
      ) : (
        <X className="w-5 h-5 text-rose-500 mx-auto" />
      );
    }

    // Format new lines for pros/cons or details
    if (typeof value === 'string' && value.includes('\n')) {
      return (
        <div className="text-left text-xs space-y-1 whitespace-pre-line text-slate-600">
          {value.split('\n').map((line, idx) => {
            if (line.startsWith('👍')) {
              return <div key={idx} className="text-emerald-700 font-medium">{line}</div>;
            }
            if (line.startsWith('👎')) {
              return <div key={idx} className="text-rose-700 font-medium">{line}</div>;
            }
            return <div key={idx}>{line}</div>;
          })}
        </div>
      );
    }

    return <span className="text-slate-700 text-xs font-medium leading-relaxed">{value}</span>;
  };

  // Check if a dimension has different values across compared products
  const hasDifference = (dimensionId: string) => {
    if (selectedProducts.length <= 1) return false;
    const firstVal = COMPARISON_DATA[selectedProducts[0].id]?.[dimensionId];
    return selectedProducts.some(p => COMPARISON_DATA[p.id]?.[dimensionId] !== firstVal);
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6 space-y-6" id="compare-section">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-4">
        <div>
          <h3 className="text-lg font-bold text-slate-800 flex items-center gap-2">
            <Scale className="w-5 h-5 text-amber-500" />
            AI 眼镜多维矩阵对比
          </h3>
          <p className="text-xs text-slate-500 mt-1">
            横向对比主流AI眼镜的硬件规格、AI模型能力、隐私安全度与真实市场反馈
          </p>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          {selectedProducts.length > 1 && (
            <button
              onClick={() => setHighlightDiff(!highlightDiff)}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors border ${
                highlightDiff
                  ? 'bg-indigo-50 border-indigo-300 text-indigo-700'
                  : 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100'
              }`}
            >
              🔍 {highlightDiff ? '取消高亮差异' : '高亮参数差异'}
            </button>
          )}
          {selectedProducts.length > 0 && (
            <button
              onClick={onClearCompare}
              className="px-3 py-1.5 text-xs font-semibold text-rose-600 hover:bg-rose-50 rounded-lg transition-colors border border-rose-200"
            >
              清空对比
            </button>
          )}
        </div>
      </div>

      {selectedProducts.length === 0 ? (
        <div className="text-center py-12 space-y-4">
          <div className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center mx-auto text-slate-400">
            <Scale className="w-6 h-6" />
          </div>
          <div className="max-w-md mx-auto space-y-1">
            <h4 className="text-sm font-bold text-slate-700">尚未选择任何产品进行对比</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              请在“产品大观”中选择任意 2-4 款眼镜加入对比，或从下方推荐竞品直接添加：
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-2 max-w-xl mx-auto pt-2">
            {availableToSuggest.slice(0, 4).map(p => (
              <button
                key={p.id}
                onClick={() => onAddToCompare(p)}
                className="inline-flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-lg border border-slate-200 hover:border-indigo-500 hover:bg-indigo-50/20 text-slate-600 transition-all font-medium"
              >
                <span>➕</span> {p.name}
              </button>
            ))}
          </div>
        </div>
      ) : (
        <div className="space-y-4">
          {selectedProducts.length === 1 && (
            <div className="p-3 bg-amber-50 rounded-xl border border-amber-200 text-xs text-amber-800 flex items-center gap-2">
              <ShieldAlert className="w-4 h-4 shrink-0" />
              <span>当前仅选择了 1 款眼镜，请再添加至少 1 款进行多维参数对比。</span>
            </div>
          )}

          {/* Table Container */}
          <div className="overflow-x-auto rounded-xl border border-slate-100">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-slate-50/50">
                  <th className="p-4 text-left text-xs font-bold text-slate-500 uppercase border-b border-slate-100 w-48 shrink-0">
                    对比维度
                  </th>
                  {selectedProducts.map(p => (
                    <th key={p.id} className="p-4 border-b border-slate-100 min-w-64 text-center relative group">
                      <div className="flex flex-col items-center space-y-2">
                        {/* Remove Button */}
                        <button
                          onClick={() => onRemoveFromCompare(p.id)}
                          className="absolute top-2 right-2 p-1 text-slate-350 hover:text-rose-600 hover:bg-rose-50 rounded-full transition-all"
                          title="移出对比"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>

                        <div className="w-16 h-12 bg-slate-50 rounded-md overflow-hidden flex items-center justify-center border border-slate-100">
                          <img
                            src={p.image}
                            alt={p.name}
                            className="max-w-full max-h-full object-contain"
                            onError={(e) => {
                              if ((e.currentTarget as HTMLImageElement).src.endsWith('product_placeholder.svg')) return;
                              (e.currentTarget as HTMLImageElement).src = fallbackImage;
                            }}
                          />
                        </div>
                        <span className="font-bold text-slate-800 text-xs leading-tight line-clamp-1">
                          {p.name}
                        </span>
                        <span className="text-[10px] px-2 py-0.2 rounded-full font-bold bg-indigo-50 text-indigo-700 border border-indigo-100">
                          {p.line.split('(')[0]}
                        </span>
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {COMPARISON_DIMENSIONS.map((dim, idx) => {
                  const isDiff = highlightDiff && hasDifference(dim.id);
                  return (
                    <tr
                      key={dim.id}
                      className={`border-b border-slate-100 transition-colors ${
                        isDiff ? 'bg-amber-50/40 hover:bg-amber-50/60' : 'hover:bg-slate-50/30'
                      }`}
                    >
                      <td className="p-4 text-xs font-bold text-slate-600 border-r border-slate-50 font-sans">
                        <div className="flex flex-col">
                          <span className="text-slate-800">{dim.label}</span>
                          <span className="text-[9px] text-slate-400 font-medium tracking-wider mt-0.5">
                            {dim.group}
                          </span>
                        </div>
                      </td>
                      {selectedProducts.map(p => (
                        <td
                          key={p.id}
                          className={`p-4 text-center border-r border-slate-50 last:border-r-0 ${
                            isDiff ? 'font-semibold' : ''
                          }`}
                        >
                          {renderValue(p.id, dim.id)}
                        </td>
                      ))}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          {/* Quick Addition Suggestion Bar */}
          {availableToSuggest.length > 0 && selectedProducts.length < 4 && (
            <div className="flex items-center gap-3 pt-4 border-t border-slate-100 text-xs text-slate-500">
              <span className="font-semibold shrink-0">➕ 继续添加竞品:</span>
              <div className="flex items-center gap-1.5 overflow-x-auto pb-1 no-scrollbar">
                {availableToSuggest.slice(0, 3).map(p => (
                  <button
                    key={p.id}
                    onClick={() => onAddToCompare(p)}
                    className="px-2.5 py-1 rounded-lg bg-slate-50 hover:bg-slate-100 hover:text-indigo-600 transition-colors border border-slate-200 shrink-0 font-medium"
                  >
                    {p.name.split(' ')[0]} {p.name.split(' ')[1] || ''}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
