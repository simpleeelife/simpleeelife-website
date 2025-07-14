import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import "@/styles/styles.css";
import Script from 'next/script';
import Header from '@/components/Header'; // 新しいヘッダーをインポート

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "600"],
  variable: "--font-noto-sans-jp",
});

export const metadata: Metadata = {
  title: "SIMPLEEELIFE | こんがらがった人生をシンプルな線にする知のレシピ",
  description: "無意識の領域に眠る本質的な答えを探求し、あなたの人生をよりシンプルで美しい形へと導くお手伝いをします。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={notoSansJP.className}>
        {/* スターフィールド（ブログページでは非表示にするなどの工夫が必要かも） */}
        <div className="stars" id="stars"></div>
        
        <Header /> {/* 新しいヘッダーコンポーネントを使用 */}

        <main>{children}</main>

        {/* フッターはここに移動またはコンポーネント化するのが望ましい */}
        {/* <Footer /> */}

        <Script src="/js/main.js" strategy="lazyOnload" />
      </body>
    </html>
  );
}
