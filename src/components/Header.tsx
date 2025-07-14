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
    <nav className={isBlogPage ? 'blog-nav-theme' : ''}>
      <div className="nav-container">
        <Link href="/"><div className="logo">SIMPLEEELIFE</div></Link>
        <ul className="nav-links">
          <li><Link href="/#profile">プロフィール</Link></li>
          <li><Link href="/blog">ブログ</Link></li>
          <li><Link href="/#community">コミュニティ</Link></li>
          <li><Link href="/#special" className="special-btn">特典動画</Link></li>
        </ul>
        <div className="hamburger" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      {/* モバイルメニュー */}
      <div className={`mobile-menu ${menuOpen ? 'open' : ''} ${isBlogPage ? 'blog-mobile-menu-theme' : ''}`}>
        <ul className="mobile-nav-links">
          <li><Link href="/#profile" onClick={toggleMenu}>プロフィール</Link></li>
          <li><Link href="/blog" onClick={toggleMenu}>ブログ</Link></li>
          <li><Link href="/#community" onClick={toggleMenu}>コミュニティ</Link></li>
          <li><Link href="/#special" className="special-btn" onClick={toggleMenu}>特典動画</Link></li>
        </ul>
      </div>
    </nav>
  );
}