import Script from 'next/script';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      {/* ヒーローセクション */}
      <section className="hero" id="home">
        <div className="hero-content">
          <p className="hero-logo">SIMPLEEELIFE</p>
          <h1>こんがらがった人生を<br />シンプルな線にする知のレシピ</h1>
          <p className="hero-subtitle">意識の深淵から、あなたの本質へ</p>
          <a href="/blog" className="hero-btn">ブログを読む</a>
        </div>
      </section>

      {/* プロフィールセクション */}
      <section className="profile" id="profile">
        <div className="container">
          <h2 className="section-title">シンプリィライフについて</h2>
          <div className="profile-content">
            <div className="profile-image">
              <Image src="/images/アイコン.JPG" alt="シンプリィライフのアイコン" width={300} height={300} className="rounded-full" />
            </div>
            <div className="profile-text">
              <h3>あなたの「人生をより良くしたい」という<br />根源的な欲求に応える</h3>
              <p>
                複雑に絡み合った現代社会の中で、私たちは本来の自分を見失いがちです。
                シンプリィライフは、無意識の領域に眠る本質的な答えを探求し、
                あなたの人生をよりシンプルで美しい形へと導くお手伝いをします。
              </p>
              <p>
                科学と哲学、そして日常の知恵を融合させながら、
                誰もが実践できる「生きる技術」をお届けします。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 著書紹介セクション */}
      <section className="book" id="book">
        <div className="container">
          <h2 className="section-title">著書のご案内</h2>
          <div className="book-content">
            <div className="book-image">
              <Image src="/images/書影.png" alt="ぜんぶ無意識のせい。書影" width={350} height={500} />
            </div>
            <div className="book-info">
              <h3><span style={{ fontSize: '2.5rem', fontWeight: 'bold' }}>ぜんぶ無意識のせい。</span><br /><span style={{ fontSize: '1.5rem' }}>こんがらがった人生をシンプルにする知のレシピ</span></h3>
              <p className="book-description">
                私たちの行動の95%は無意識によって支配されています。
                本書では、最新の脳科学と心理学の知見をもとに、
                無意識のメカニズムを解き明かし、人生をシンプルに生きるための
                実践的な方法をお伝えします。
              </p>
              <div className="book-recommend">
                <h4>こんな方におすすめです</h4>
                <ul>
                  <li>人生の複雑さに疲れを感じている方</li>
                  <li>自分の本当の望みがわからない方</li>
                  <li>シンプルで充実した生活を送りたい方</li>
                  <li>無意識の力を味方につけたい方</li>
                </ul>
              </div>
              <div className="book-buttons">
                <a href="https://www.amazon.co.jp/dp/4046074027" className="btn">Amazonで購入</a>
                <a href="https://books.rakuten.co.jp/rb/18134844/" className="btn">楽天ブックスで購入</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* メルマガ登録セクション */}
      <section className="newsletter" id="newsletter">
        <div className="container">
          <h2 className="section-title">シンプリィライフの積み上げメルマガ</h2>
          <div className="newsletter-form">
            <p className="newsletter-description">
              限定情報や動画の裏話など、<br />
              あなたの日常に本質的な気づきをお届けします
            </p>
            <form>
              <div className="form-group">
                <input type="email" className="form-input" placeholder="メールアドレスを入力" />
                <button type="submit" className="btn">登録する</button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* オンラインコミュニティセクション */}
      <section className="community" id="community">
        <div className="container">
          <h2 className="section-title">「ひとり旅を一緒にする」オンラインコミュニティ</h2>
          <p style={{ textAlign: 'center', fontSize: '1.2rem', color: 'var(--text-muted)', marginBottom: '40px' }}>
            ただ学ぶだけでなく、仲間との対話を通じて人生の変革を実践する場所
          </p>
          <div className="community-grid">
            <div className="community-card">
              <div className="community-icon">🌌</div>
              <h3>深い対話</h3>
              <p>同じ志を持つ仲間との意味のある対話を通じて、新たな気づきを得る</p>
            </div>
            <div className="community-card">
              <div className="community-icon">🧭</div>
              <h3>実践の場</h3>
              <p>学んだことを日常で実践し、その経験を共有しながら成長する</p>
            </div>
            <div className="community-card">
              <div className="community-icon">💫</div>
              <h3>限定コンテンツ</h3>
              <p>メンバー限定の深い洞察や実践的なワークショップへのアクセス</p>
            </div>
          </div>
          <div style={{ textAlign: 'center', marginTop: '60px' }}>
            <a href="#" className="btn">コミュニティの詳細を見る</a>
          </div>
        </div>
      </section>

      {/* ブログセクション */}
      <section className="blog" id="blog">
        <div className="container">
          <h2 className="section-title">最新の記事</h2>
          <div className="blog-grid">
            <article className="blog-card">
              <div className="blog-image">記事サムネイル</div>
              <div className="blog-content">
                <p className="blog-date">2025.01.15</p>
                <h3 className="blog-title">無意識のパターンを書き換える3つの方法</h3>
                <p className="blog-excerpt">
                  私たちの日常的な行動の多くは、無意識のパターンによって支配されています。
                  今回は、そのパターンを意識的に...
                </p>
              </div>
            </article>
            <article className="blog-card">
              <div className="blog-image">記事サムネイル</div>
              <div className="blog-content">
                <p className="blog-date">2025.01.10</p>
                <h3 className="blog-title">シンプルに生きるための断捨離の極意</h3>
                <p className="blog-excerpt">
                  物理的な空間の整理は、心の整理にもつながります。
                  本当に必要なものだけを残すことで...
                </p>
              </div>
            </article>
            <article className="blog-card">
              <div className="blog-image">記事サムネイル</div>
              <div className="blog-content">
                <p className="blog-date">2025.01.05</p>
                <h3 className="blog-title">瞑想がもたらす意識の変容について</h3>
                <p className="blog-excerpt">
                  瞑想は単なるリラクゼーションではありません。
                  継続的な実践により、意識の深い変容が...
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* フッター */}
      <footer>
        <div className="footer-content">
          <div className="footer-links">
            <a href="#">プライバシーポリシー</a>
            <a href="#">利用規約</a>
            <a href="#">お問い合わせ</a>
            <a href="#">運営者情報</a>
          </div>
          <p className="copyright">© 2025 Simply Life. All rights reserved.</p>
        </div>
      </footer>

      <Script src="/js/main.js" strategy="lazyOnload" />
    </>
  );
}