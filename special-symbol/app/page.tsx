
import SpecialCharactersClient from "./SpecialCharactersClient";

export const metadata = {
  title: "特殊符號大全｜愛心、箭頭、星星一鍵複製",
  description:
    "免費特殊符號工具，包含愛心符號、箭頭符號、星星符號、可愛顏文字，一鍵複製，適用 IG、Threads、LINE、Facebook。",
  verification: {
    google: ehU1T8h_XzRdwyu3jiF31o0fGsbffh8jN2srktJihBc/>
  },
}
export default function Page() {
  return (
    <div>
      <div style={{ padding: "20px" }}>
        <h1 style={{ fontSize: "28px", fontWeight: "bold" }}>
          特殊符號大全｜一鍵複製
        </h1>

        <p style={{ marginTop: "10px", color: "#666" }}>
          提供各種特殊符號，包括愛心、箭頭、星星、可愛顏文字等，
          點擊即可複製，適用於 IG、Threads、LINE、Facebook。
        </p>

        <h2 style={{ marginTop: "40px" }}>熱門分類</h2>

        <ul>
          <li><a href="/heart-symbols">❤️ 愛心符號</a></li>
          <li><a href="/arrow-symbols">➡️ 箭頭符號</a></li>
          <li><a href="/star-symbols">⭐ 星星符號</a></li>
        </ul>
      </div>

      <SpecialCharactersClient />
    </div>
  );
}