'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

export default function Header() {
  const pathname = usePathname();
  const isBlogPage = pathname.startsWith('/blog');
  const [menuOpen, setMenuOpen] = useState(false);

  // ハンバーガーメニューのトグル
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // 画面サイズが変わった時にメニューを閉じる
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <nav className={isBlogPage ? 'blog-nav-theme' : ''}>
        {/* 通常のナビゲーション */}
        <div className="nav-container">
          <Link href="/"><div className="logo">SIMPLEEELIFE</div></Link>
          <ul className="nav-links">
            <li><Link href="/newsletter">メルマガ</Link></li>
            <li><a href="https://note.com/matrix2021" target="_blank" rel="noopener noreferrer">ブログ</a></li>
            <li><Link href="/community">コミュニティ</Link></li>
            <li><Link href="/special-video" className="special-btn">特典動画</Link></li>
          </ul>
          <div className="hamburger" onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </nav>

      {/* モバイルメニュー（オーバーレイとコンテンツを統合） */}
      {menuOpen && (
        <>
          {/* 画面全体のオーバーレイ */}
          <div 
            className="fixed inset-0 z-40 bg-black bg-opacity-80"
            onClick={() => setMenuOpen(false)}
          />
          
          {/* メニュー本体 */}
          <div className="fixed right-0 top-0 h-full w-64 z-50 bg-gray-900">
            {/* メニューヘッダー */}
            <div className="flex h-20 items-center justify-between border-b border-gray-800 px-6">
              <div className="text-lg font-bold text-white">メニュー</div>
              <button onClick={toggleMenu} className="text-2xl text-white hover:text-gray-300">
                ✕
              </button>
            </div>

            {/* メニューリスト */}
            <ul className="space-y-1 px-2 pt-4">
              <li>
                <Link
                  href="/newsletter"
                  onClick={toggleMenu}
                  className="block rounded-lg px-4 py-3 text-lg font-medium text-white hover:bg-gray-800"
                >
                  メルマガ
                </Link>
              </li>
              <li>
                <a
                  href="https://note.com/matrix2021"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={toggleMenu}
                  className="block rounded-lg px-4 py-3 text-lg font-medium text-white hover:bg-gray-800"
                >
                  ブログ
                </a>
              </li>
              <li>
                <Link
                  href="/community"
                  onClick={toggleMenu}
                  className="block rounded-lg px-4 py-3 text-lg font-medium text-white hover:bg-gray-800"
                >
                  コミュニティ
                </Link>
              </li>
              <li className="px-4 pt-4">
                <Link
                  href="/special-video"
                  onClick={toggleMenu}
                  className="block rounded-lg bg-blue-600 px-4 py-3 text-center text-lg font-medium text-white hover:bg-blue-700"
                >
                  特典動画
                </Link>
              </li>
            </ul>
          </div>
        </>
      )}
    </>
  );
}