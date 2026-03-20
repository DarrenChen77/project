export const metadata = {
  title: "星星符號大全 ⭐｜可愛星星符號一鍵複製",
  description:
    "提供各種星星符號（★ ☆ ✦ ✧ ⭐ 🌟 ✨），適合 IG、Threads、自介與排版。",
};

export default function Page() {
  const symbols = [
    "★","☆","✦","✧","✩","✪","✫","✬","✭","✮","✯","✰",
    "⭐","🌟","✨","⋆","⭒","⭑"
  ];

  const copy = (s: string) => navigator.clipboard.writeText(s);

  return (
    <div style={{ padding: "20px" }}>
      <h1>⭐ 星星符號大全</h1>

      <p>
        這裡整理各種星星符號，包括空心星星、實心星星與閃亮星星，
        點擊即可快速複製。
      </p>

      <div style={{ fontSize: "30px", marginTop: "20px" }}>
        {symbols.map((s) => (
          <span
            key={s}
            onClick={() => copy(s)}
            style={{ margin: "10px", cursor: "pointer" }}
          >
            {s}
          </span>
        ))}
      </div>
    </div>
  );
}