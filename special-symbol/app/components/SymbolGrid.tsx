"use client";

import { useState } from "react";
import { Copy, Check } from "lucide-react";

type SymbolGridProps = {
  symbols: string[];
};

export default function SymbolGrid({ symbols }: SymbolGridProps) {
  const [copied, setCopied] = useState<string | null>(null);
  const uniqueSymbols = Array.from(new Set(symbols));

  const copy = async (s: string) => {
    try {
      await navigator.clipboard.writeText(s);
      setCopied(s);
      window.setTimeout(() => setCopied(null), 1200);
    } catch {
      window.prompt("請手動複製以下符號", s);
    }
  };

  return (
    <div className="mt-8 grid grid-cols-4 gap-3 sm:grid-cols-5 md:grid-cols-8 lg:grid-cols-10">
      {uniqueSymbols.map((s) => (
        <button
          key={s}
          onClick={() => copy(s)}
          className="group relative rounded-[20px] border border-slate-200 bg-slate-50 px-3 py-6 transition hover:-translate-y-0.5 hover:border-slate-300 hover:bg-white hover:shadow-sm"
          title={`複製 ${s}`}
        >
          <div className="flex items-center justify-center text-4xl leading-none text-slate-800">
            {s}
          </div>
          <div className="absolute right-2 top-2 rounded-full bg-white p-1 text-slate-400 shadow-sm ring-1 ring-slate-200 group-hover:text-slate-600">
            {copied === s ? (
              <Check className="h-3.5 w-3.5 text-emerald-500" />
            ) : (
              <Copy className="h-3.5 w-3.5" />
            )}
          </div>
          {copied === s && (
            <div className="absolute inset-x-2 bottom-2 rounded-full bg-slate-900 px-2 py-1 text-center text-[10px] font-medium text-white">
              已複製
            </div>
          )}
        </button>
      ))}
    </div>
  );
}