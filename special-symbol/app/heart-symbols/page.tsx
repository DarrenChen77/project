import SymbolGrid from "../components/SymbolGrid";

export const metadata = {
  title: "愛心符號大全 ❤️｜可愛愛心符號一鍵複製",
  description:
    "提供各種愛心符號（❤️ 🧡 💛 💚 💙 💜 🖤 🤍 🤎），適合 IG、Threads、LINE 使用，一鍵點擊即可複製。",
};

export default function Page() {
  const symbols = [
    "❤️", "🧡", "💛", "💚", "💙", "💜", "🖤", "🤍", "🤎",
    "♥", "♡", "❤", "❥", "❣", "💕", "💗", "💖", "💘", "💝", "💞", "💓",
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h1>❤️ 愛心符號大全</h1>

      <p>
        這裡提供最完整的愛心符號，包含實心愛心、空心愛心與可愛裝飾愛心，
        點擊即可一鍵複製，適合 IG 自介、Threads、LINE。
      </p>

      <SymbolGrid symbols={symbols} />
    </div>
  );
}