import { getAllPosts } from '@/lib/api';
import Link from 'next/link';
import { Post } from '@/lib/types';

// Sidebar Widget Component
const SidebarWidget = ({ title, children, icon }: { title: string; children: React.ReactNode; icon?: string }) => (
  <div className="blog-page-widget">
    <h3 className="blog-page-widget-title">
      {icon && <span className="mr-2 text-xl">{icon}</span>}
      {title}
    </h3>
    <div className="blog-page-widget-content">{children}</div>
  </div>
);

export default async function BlogPage() {
  const posts: Post[] = await getAllPosts();

  return (
    <div className="blog-page-body pt-24">
      {/* Blog Page Header */}
      <div className="blog-page-header">
        <div className="blog-page-container">
          <div className="blog-page-header-content">
            <div className="blog-page-header-icon">💡</div>
            <div className="blog-page-header-title">
              <h1>SIMPLEEELIFE BLOG</h1>
              <p>こんがらがった人生をシンプルな線にする知のレシピ</p>
            </div>
          </div>
        </div>
      </div>

      <div className="blog-page-container">
        <div className="blog-page-main-grid">
          {/* Main Content - Articles */}
          <main className="blog-page-main-content">
            {posts.slice(0, 3).map((post: Post) => (
              <article key={post._id} className="blog-page-post-card">
                <Link href={`/blog/${post.slug.current}`}>
                  {/* Image Placeholder */}
                  <div className="blog-page-post-card-image" style={{ background: 'linear-gradient(45deg, #007bff, #00d2ff)' }}>
                    アイキャッチ画像
                  </div>
                  <div className="blog-page-post-card-content">
                    <p className="blog-page-post-card-date">{new Date(post.publishedAt).toLocaleDateString()}</p>
                    <h2 className="blog-page-post-card-title">{post.title}</h2>
                    <p className="blog-page-post-card-excerpt">
                      {post.body[0]?.children[0]?.text || ''}
                    </p>
                  </div>
                </Link>
              </article>
            ))}

            {/* 仮の記事カード 1 */}
            <article className="blog-page-post-card">
              <Link href="#">
                <div className="blog-page-post-card-image" style={{ background: 'linear-gradient(45deg, #ffc107, #ffeb3b)' }}>
                  仮のアイキャッチ
                </div>
                <div className="blog-page-post-card-content">
                  <p className="blog-page-post-card-date">2025年7月10日</p>
                  <h2 className="blog-page-post-card-title">仮の記事タイトル1</h2>
                  <p className="blog-page-post-card-excerpt">
                    これは仮の記事の概要文です。ダミーテキストとして表示されます。
                  </p>
                </div>
              </Link>
            </article>

            {/* 仮の記事カード 2 */}
            <article className="blog-page-post-card">
              <Link href="#">
                <div className="blog-page-post-card-image" style={{ background: 'linear-gradient(45deg, #4caf50, #8bc34a)' }}>
                  仮のアイキャッチ
                </div>
                <div className="blog-page-post-card-content">
                  <p className="blog-page-post-card-date">2025年7月9日</p>
                  <h2 className="blog-page-post-card-title">仮の記事タイトル2</h2>
                  <p className="blog-page-post-card-excerpt">
                    もう一つの仮の記事の概要文です。レイアウト確認用です。
                  </p>
                </div>
              </Link>
            </article>

            {/* 仮の記事カード 3 */}
            <article className="blog-page-post-card">
              <Link href="#">
                <div className="blog-page-post-card-image" style={{ background: 'linear-gradient(45deg, #9c27b0, #e040fb)' }}>
                  仮のアイキャッチ
                </div>
                <div className="blog-page-post-card-content">
                  <p className="blog-page-post-card-date">2025年7月8日</p>
                  <h2 className="blog-page-post-card-title">仮の記事タイトル3</h2>
                  <p className="blog-page-post-card-excerpt">
                    最後の仮の記事の概要文です。コンテンツの量を調整しています。
                  </p>
                </div>
              </Link>
            </article>
          </main>

          {/* Sidebar */}
          <aside className="blog-page-sidebar">
            <SidebarWidget icon="👤" title="プロフィール">
              <p className="text-gray-700 mb-3">Akiyoshi Ohno. 著者。思考とライフスタイルを探求しています。詳しいプロフィールはこちら。</p>
              {/* Placeholder for image */}
              <div className="w-full h-32 bg-gray-200 rounded-md flex items-center justify-center text-gray-500">プロフィール画像</div>
            </SidebarWidget>

            <SidebarWidget icon="📚" title="カテゴリー">
              <ul className="list-none p-0 m-0">
                <li className="py-2 border-b border-gray-100 last:border-b-0"><Link href="#" className="text-blue-600 hover:underline">ライフハック</Link></li>
                <li className="py-2 border-b border-gray-100 last:border-b-0"><Link href="#" className="text-blue-600 hover:underline">読書術</Link></li>
                <li className="py-2 border-b border-gray-100 last:border-b-0"><Link href="#" className="text-blue-600 hover:underline">思考法</Link></li>
                <li className="py-2 border-b border-gray-100 last:border-b-0"><Link href="#" className="text-blue-600 hover:underline">テクノロジー</Link></li>
              </ul>
            </SidebarWidget>
            
            <SidebarWidget icon="📖" title="著書紹介">
              <p className="text-gray-700 mb-3">『ぜんぶ無意識のせい。』好評発売中！</p>
              {/* Placeholder for image */}
              <div className="w-full h-48 bg-gray-200 rounded-md flex items-center justify-center text-gray-500">著書画像</div>
            </SidebarWidget>
          </aside>
        </div>
      </div>
    </div>
  );
}
