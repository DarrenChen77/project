import SymbolGrid from "../components/SymbolGrid";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata = {
  title: "箭頭符號大全 →｜各種箭頭符號一鍵複製",
  description:
    "提供左右上下箭頭、斜箭頭與特殊箭頭符號（→ ← ↑ ↓ ↗ ↘），點擊即可複製。",
};

export default function Page() {
  const symbols = [
    "→", "←", "↑", "↓", "↔", "↕", "↗", "↘", "↙", "↖", "➜", "➝", "➤", "➥",
    "➔", "➞", "⇒", "⇢", "⇨", "⇦", "⇧", "⇩", "⇔", "⇕", "⇗", "⇘", "⇙", "⇖",
    "↻", "↺", "↵", "↴", "↶", "↷", "↸", "↹", "⇄", "⇅", "⇆", "⇇", "⇈", "⇉", "⇊"
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
            ➡️ 箭頭符號大全
          </h1>
          <p className="mt-4 max-w-2xl text-slate-600">
            提供各種箭頭符號，包含左右、上下、斜箭頭與特殊箭頭，適合用於筆記整理、IG、聊天交談或精緻排版，點擊即可複製。
          </p>

          <SymbolGrid symbols={symbols} />
        </div>
      </div>
    </div>
  );
}