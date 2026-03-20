"use client";

type SymbolGridProps = {
  symbols: string[];
};

export default function SymbolGrid({ symbols }: SymbolGridProps) {
  const copy = async (s: string) => {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(s);
        alert(`已複製：${s}`);
        return;
      }

      const textArea = document.createElement("textarea");
      textArea.value = s;
      textArea.style.position = "fixed";
      textArea.style.left = "-9999px";
      textArea.style.top = "-9999px";
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();

      const successful = document.execCommand("copy");
      document.body.removeChild(textArea);

      if (successful) {
        alert(`已複製：${s}`);
      } else {
        window.prompt("請手動複製以下符號", s);
      }
    } catch {
      window.prompt("請手動複製以下符號", s);
    }
  };

  return (
    <div style={{ fontSize: "30px", marginTop: "20px" }}>
      {symbols.map((s) => (
        <button
          key={s}
          onClick={() => copy(s)}
          style={{
            margin: "10px",
            cursor: "pointer",
            border: "none",
            background: "transparent",
            fontSize: "30px",
          }}
        >
          {s}
        </button>
      ))}
    </div>
  );
}