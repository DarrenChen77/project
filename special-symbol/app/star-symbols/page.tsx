import SymbolGrid from "../components/SymbolGrid";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata = {
  title: "星星符號大全 ⭐｜可愛星星符號一鍵複製",
  description:
    "提供各種星星符號（★ ☆ ✦ ✧ ⭐ 🌟 ✨），適合 IG、Threads、自介與排版。",
};

export default function Page() {
  const symbols = [
    "★", "☆", "✦", "✧", "✩", "✪", "✫", "✬", "✭", "✮", "✯", "✰", "⭐", "🌟",
    "✨", "⋆", "⭒", "⭑", "✵", "✶", "✷", "✸", "✹", "✺", "✻", "✼", "✽", "✾", "✿", "❀"
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 pb-12">
      <div className="mx-auto max-w-5xl px-4 pt-8 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-slate-500 transition hover:text-slate-900"
        >
          <ArrowLeft className="h-4 w-4" /> 返回首頁
        </Link>
        <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm md:p-10">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            ⭐ 星星符號大全
          </h1>
          <p className="mt-4 max-w-2xl text-slate-600">
            這裡整理各種星星符號，包括空心星星、實心星星與閃亮星星，點選即可快速複製，為你的文字增添亮點！
          </p>

          <SymbolGrid symbols={symbols} />
        </div>
      </div>
    </div>
  );
}