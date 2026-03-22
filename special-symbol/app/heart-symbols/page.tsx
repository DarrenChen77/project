import SymbolGrid from "../components/SymbolGrid";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata = {
  title: "愛心符號大全 ❤️｜可愛愛心符號一鍵複製",
  description:
    "提供各種愛心符號（❤️ 🧡 💛 💚 💙 💜 🖤 🤍 🤎），適合 IG、Threads、LINE 使用，一鍵點擊即可複製。",
};

export default function Page() {
  const symbols = [
    "♥", "♡", "❤", "❥", "❣", "💕", "💗", "💖", "💘", "💝", "💞", "💓",
    "🩷", "🩵", "🩶", "🖤", "🤍", "🤎", "❤️", "🧡", "💛", "💚", "💙", "💜",
    "❤️‍🔥", "❤️‍🩹", "🥰", "😍", "😻", "💌"
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
            ❤️ 愛心符號大全
          </h1>
          <p className="mt-4 max-w-2xl text-slate-600">
            這裡提供最完整的愛心符號，包含實心愛心、空心愛心與可愛裝飾愛心，點擊即可一鍵複製，適合 IG 自介、Threads、LINE、Facebook 貼文排版。
          </p>

          <SymbolGrid symbols={symbols} />
        </div>
      </div>
    </div>
  );
}