export const metadata = {
  title: "箭頭符號大全 →｜各種箭頭符號一鍵複製",
  description:
    "提供左右上下箭頭、斜箭頭與特殊箭頭符號（→ ← ↑ ↓ ↗ ↘），點擊即可複製。",
};

export default function Page() {
  const symbols = [
    "→","←","↑","↓","↔","↕",
    "↗","↘","↙","↖",
    "➜","➝","➤","➥","➔","➞","⇒","⇢"
  ];

  const copy = (s: string) => navigator.clipboard.writeText(s);

  return (
    <div style={{ padding: "20px" }}>
      <h1>➡️ 箭頭符號大全</h1>

      <p>
        提供各種箭頭符號，包含左右、上下、斜箭頭與特殊箭頭，
        適合用於筆記、IG、聊天或排版。
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