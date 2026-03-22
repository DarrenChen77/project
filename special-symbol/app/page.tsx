
import SpecialCharactersClient from "./SpecialCharactersClient";

export const metadata = {
  title: "特殊符號大全｜愛心、箭頭、星星一鍵複製",
  description:
    "免費特殊符號工具，包含愛心符號、箭頭符號、星星符號、可愛顏文字，一鍵複製，適用 IG、Threads、LINE、Facebook。",
  verification: {
    google: "ehU1T8h_XzRdwyu3jiF31o0fGsbffh8jN2srktJihBc",
  }
};
export default function Page() {
  return (
    <main>
      <SpecialCharactersClient />
    </main>
  );
}