"use client";

import React, { useEffect, useMemo, useState } from "react";
import {
  Search,
  Copy,
  Check,
  Sparkles,
  Heart,
  ArrowRight,
  Star,
  BadgeCheck,
} from "lucide-react";

const CATEGORY_CONFIG = [
  {
    key: "heart",
    label: "愛心",
    icon: Heart,
    symbols: [
      "♥",
      "♡",
      "❤",
      "❥",
      "❣",
      "💕",
      "💗",
      "💖",
      "💘",
      "💝",
      "💞",
      "💓",
      "🩷",
      "🩵",
      "🩶",
      "🖤",
      "🤍",
      "🤎",
    ],
  },
  {
    key: "arrow",
    label: "箭頭",
    icon: ArrowRight,
    symbols: [
      "→",
      "←",
      "↑",
      "↓",
      "↔",
      "↕",
      "↗",
      "↘",
      "↙",
      "↖",
      "➜",
      "➝",
      "➤",
      "➥",
      "➔",
      "➞",
      "⇒",
      "⇢",
    ],
  },
  {
    key: "star",
    label: "星星",
    icon: Star,
    symbols: [
      "★",
      "☆",
      "✦",
      "✧",
      "✩",
      "✪",
      "✫",
      "✬",
      "✭",
      "✮",
      "✯",
      "✰",
      "⭐",
      "🌟",
      "✨",
      "⋆",
      "⭒",
      "⭑",
    ],
  },
  {
    key: "check",
    label: "勾勾",
    icon: BadgeCheck,
    symbols: [
      "✓",
      "✔",
      "☑",
      "✅",
      "🗸",
      "✗",
      "✘",
      "❌",
      "❎",
      "☓",
      "⊗",
      "⊕",
      "☒",
      "🟢",
      "🔘",
      "🟩",
    ],
  },
  {
    key: "decor",
    label: "裝飾",
    icon: Sparkles,
    symbols: [
      "✿",
      "❀",
      "❁",
      "❃",
      "❋",
      "✾",
      "❈",
      "❉",
      "✺",
      "✻",
      "✼",
      "༄",
      "༆",
      "ꕤ",
      "꧁",
      "꧂",
      "﹏",
      "𓆩𓆪",
    ],
  },
];

function dedupe(list: string[]) {
  return Array.from(new Set(list));
}

export default function SpecialCharactersClient() {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");
  const [copied, setCopied] = useState<string | null>(null);
  const [recent, setRecent] = useState<string[]>([]);

  const allItems = useMemo(() => {
    return CATEGORY_CONFIG.flatMap((category) =>
      category.symbols.map((symbol) => ({
        symbol,
        categoryKey: category.key,
        categoryLabel: category.label,
      }))
    );
  }, []);

  useEffect(() => {
    try {
      const saved = localStorage.getItem("recent-special-characters");
      if (saved) {
        setRecent(JSON.parse(saved));
      }
    } catch {}
  }, []);

  const filteredItems = useMemo(() => {
    const q = query.trim().toLowerCase();
    return allItems.filter((item) => {
      const matchCategory =
        activeCategory === "all" || item.categoryKey === activeCategory;
      const matchQuery =
        q === "" ||
        item.symbol.toLowerCase().includes(q) ||
        item.categoryLabel.toLowerCase().includes(q) ||
        item.categoryKey.toLowerCase().includes(q);
      return matchCategory && matchQuery;
    });
  }, [activeCategory, allItems, query]);

  const featuredSymbols = useMemo(
    () => dedupe(CATEGORY_CONFIG.flatMap((c) => c.symbols.slice(0, 5))),
    []
  );

  const copySymbol = async (symbol: string) => {
    try {
      await navigator.clipboard.writeText(symbol);
      setCopied(symbol);

      const nextRecent = [symbol, ...recent.filter((s) => s !== symbol)].slice(
        0,
        16
      );
      setRecent(nextRecent);
      localStorage.setItem(
        "recent-special-characters",
        JSON.stringify(nextRecent)
      );

      window.setTimeout(() => setCopied(null), 1200);
    } catch {
      window.prompt("請手動複製以下符號", symbol);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Step 1: SEO 內容區 */}
        <section className="mx-auto mb-8 max-w-4xl rounded-[28px] border border-slate-200 bg-white px-6 py-8 shadow-sm">
          <h1 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
            特殊符號大全 ❤️｜愛心、箭頭、星星、可愛符號一鍵複製
          </h1>

          <p className="mb-4 text-slate-600">
            這裡整理最完整的特殊符號，包括愛心符號（♥ ♡ ❤）、箭頭符號（→ ← ↑
            ↓）、星星符號（★ ☆ ✦）以及各種可愛裝飾符號。
          </p>

          <p className="mb-4 text-slate-600">
            適合用在 IG 自介、Threads、聊天訊息與筆記排版，點擊即可一鍵複製。
          </p>

          <h2 className="mb-2 mt-6 text-xl font-semibold">熱門符號分類</h2>

          <ul className="list-disc space-y-1 pl-5 text-slate-600">
            <li>愛心符號：♥ ♡ ❤ 💖 💗 💘</li>
            <li>箭頭符號：→ ← ↑ ↓ ↗ ↘</li>
            <li>星星符號：★ ☆ ✦ ✧ ✩</li>
            <li>勾勾符號：✓ ✔ ✅ ❌</li>
          </ul>
        </section>

        <header className="overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-sm">
          <div className="grid gap-8 p-6 md:grid-cols-[1.25fr_0.75fr] md:p-10">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-3 py-1 text-sm font-medium text-slate-700">
                <Sparkles className="h-4 w-4" />
                特殊符號網站 MVP
              </div>
              <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
                特殊符號大全
                <span className="block text-slate-500">
                  一鍵複製、快速搜尋、分類整理
                </span>
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600">
                幫你快速找到愛心、箭頭、星星、勾勾和可愛裝飾符號。適合 IG
                自介、Threads、貼文排版、筆記整理與聊天訊息。
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                {featuredSymbols.map((symbol) => (
                  <button
                    key={symbol}
                    onClick={() => copySymbol(symbol)}
                    className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-2xl transition hover:-translate-y-0.5 hover:bg-white"
                    title={`複製 ${symbol}`}
                  >
                    {symbol}
                  </button>
                ))}
              </div>
            </div>

            <div className="rounded-[24px] border border-slate-200 bg-slate-50 p-5">
              <h2 className="text-lg font-semibold">快速搜尋</h2>
              <p className="mt-2 text-sm text-slate-600">
                搜尋分類名稱或直接挑選最常用符號。
              </p>
              <div className="relative mt-4">
                <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                <input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="例如：heart / arrow / 愛心 / 星星"
                  className="w-full rounded-2xl border border-slate-200 bg-white py-3 pl-11 pr-4 text-sm outline-none transition focus:border-slate-400"
                />
              </div>
              <div className="mt-5 grid grid-cols-2 gap-3">
                {CATEGORY_CONFIG.map((category) => {
                  const Icon = category.icon;
                  return (
                    <button
                      key={category.key}
                      onClick={() => setActiveCategory(category.key)}
                      className="rounded-2xl border border-slate-200 bg-white p-4 text-left transition hover:-translate-y-0.5 hover:border-slate-300"
                    >
                      <div className="flex items-center gap-2 text-sm font-semibold">
                        <Icon className="h-4 w-4" />
                        {category.label}
                      </div>
                      <div className="mt-2 text-xs text-slate-500">
                        {category.symbols.slice(0, 4).join(" ")}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </header>

        {recent.length > 0 && (
          <section className="mt-8 rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm">
            <div className="mb-4">
              <h2 className="text-xl font-semibold">最近使用</h2>
              <p className="text-sm text-slate-500">資料保存在你的瀏覽器中。</p>
            </div>
            <div className="grid grid-cols-4 gap-3 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-12">
              {recent.map((symbol) => (
                <button
                  key={`recent-${symbol}`}
                  onClick={() => copySymbol(symbol)}
                  className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-2xl transition hover:-translate-y-0.5 hover:bg-white"
                >
                  {symbol}
                </button>
              ))}
            </div>
          </section>
        )}

        <section className="mt-8">
          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => setActiveCategory("all")}
              className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                activeCategory === "all"
                  ? "bg-slate-900 text-white"
                  : "border border-slate-200 bg-white text-slate-700 hover:bg-slate-100"
              }`}
            >
              全部
            </button>
            {CATEGORY_CONFIG.map((category) => (
              <button
                key={category.key}
                onClick={() => setActiveCategory(category.key)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                  activeCategory === category.key
                    ? "bg-slate-900 text-white"
                    : "border border-slate-200 bg-white text-slate-700 hover:bg-slate-100"
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </section>

        <section className="mt-6 rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm">
          <div className="mb-5 flex items-end justify-between gap-4">
            <div>
              <h2 className="text-xl font-semibold">可複製符號</h2>
              <p className="text-sm text-slate-500">點一下即可複製到剪貼簿。</p>
            </div>
            <div className="text-sm text-slate-500">共 {filteredItems.length} 個</div>
          </div>

          {filteredItems.length === 0 ? (
            <div className="rounded-2xl border border-dashed border-slate-300 px-4 py-14 text-center text-sm text-slate-500">
              找不到符合條件的符號，試試看其他關鍵字。
            </div>
          ) : (
            <div className="grid grid-cols-4 gap-3 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10">
              {filteredItems.map((item) => (
                <button
                  key={`${item.categoryKey}-${item.symbol}`}
                  onClick={() => copySymbol(item.symbol)}
                  className="group relative rounded-2xl border border-slate-200 bg-slate-50 px-3 py-5 transition hover:-translate-y-0.5 hover:border-slate-300 hover:bg-white"
                  title={`複製 ${item.symbol}`}
                >
                  <div className="flex items-center justify-center text-3xl leading-none">
                    {item.symbol}
                  </div>
                  <div className="mt-3 text-center text-[11px] text-slate-500">
                    {item.categoryLabel}
                  </div>
                  <div className="absolute right-2 top-2 rounded-full bg-white p-1 shadow-sm ring-1 ring-slate-200">
                    {copied === item.symbol ? (
                      <Check className="h-3.5 w-3.5" />
                    ) : (
                      <Copy className="h-3.5 w-3.5" />
                    )}
                  </div>
                  {copied === item.symbol && (
                    <div className="absolute inset-x-2 bottom-2 rounded-full bg-slate-900 px-2 py-1 text-[10px] font-medium text-white">
                      已複製
                    </div>
                  )}
                </button>
              ))}
            </div>
          )}
        </section>

        {/* Step 3: FAQ */}
        <section className="mx-auto mt-8 max-w-4xl rounded-[28px] border border-slate-200 bg-white px-6 py-8 shadow-sm">
          <h2 className="mb-4 text-xl font-semibold">常見問題</h2>

          <div className="space-y-4 text-sm text-slate-600">
            <div>
              <p className="font-medium text-slate-900">特殊符號可以用在哪裡？</p>
              <p>可以用在 IG 自介、Threads、LINE、Facebook 或筆記排版。</p>
            </div>

            <div>
              <p className="font-medium text-slate-900">為什麼點擊可以直接複製？</p>
              <p>本網站使用瀏覽器 clipboard API，點擊即可快速複製。</p>
            </div>

            <div>
              <p className="font-medium text-slate-900">手機也可以用嗎？</p>
              <p>可以，手機與電腦都支援一鍵複製功能。</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}