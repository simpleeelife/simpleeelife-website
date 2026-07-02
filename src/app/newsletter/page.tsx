import { getAllPosts } from '@/lib/api'
import Link from 'next/link'
import { Post } from '@/lib/types'

export default async function NewsletterPage() {
  const posts = await getAllPosts()
  console.log('Posts fetched:', posts.length)

  return (
    <div className="blog-page-body pt-24">
      {/* Page Header */}
      <div className="blog-page-header">
        <div className="blog-page-container relative">
          <div className="blog-page-header-content">
            {/* PC表示用 */}
            <div className="hidden md:block">
              <div className="flex h-24 items-center">
                <div>
                  <h1 className="text-4xl font-bold tracking-wide">メルマガ</h1>
                  <p className="mt-2 text-lg text-gray-600">SIMPLEEELIFEのメールマガジン配信履歴</p>
                </div>
                <a
                  href="https://quickfunnelmaker.com/r/Y9IAYnl26PD1/register"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hero-btn absolute right-12"
                >
                  登録する
                </a>
              </div>
            </div>
            
            {/* SP表示用 */}
            <div className="flex w-full flex-col items-center justify-center md:hidden">
              <div className="text-center">
                <h1 className="text-2xl font-bold">メルマガ</h1>
                <p className="mt-2">SIMPLEEELIFEのメールマガジン配信履歴</p>
              </div>
              <div className="mt-8 flex w-full justify-center">
                <div className="flex w-64 justify-center">
                  <a
                    href="https://quickfunnelmaker.com/r/Y9IAYnl26PD1/register"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hero-btn relative flex h-[52px] w-full items-center justify-center"
                  >
                    <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                      登録する
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="blog-page-container">
        <div className="blog-page-main-grid">
          {/* Main Content - Articles */}
          <main className="blog-page-main-content">
            {posts.map((post: Post) => (
              <article key={post._id} className="blog-page-post-card">
                <Link href={`/blog/${post.slug.current}`}>
                  <div className="blog-page-post-card-content">
                    {/* カテゴリー */}
                    {post.categories && post.categories.length > 0 && (
                      <div className="mb-3 flex flex-wrap gap-2">
                        {post.categories.map(category => (
                          <span 
                            key={category._id}
                            className="rounded-full bg-blue-50 px-2.5 py-0.5 text-xs font-medium text-blue-600"
                          >
                            {category.title}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* 投稿日 */}
                    <p className="blog-page-post-card-date">
                      {new Date(post.publishedAt).toLocaleDateString('ja-JP', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </p>

                    {/* タイトル */}
                    <h2 className="blog-page-post-card-title">{post.title}</h2>

                    {/* 抜粋 */}
                    <p className="blog-page-post-card-excerpt">
                      {post.excerpt || '記事の内容がありません。'}
                    </p>
                  </div>
                </Link>
              </article>
            ))}
          </main>
        </div>
      </div>

      {/* デバッグ情報 */}
      <footer className="border-t border-gray-100 bg-white py-8">
        <div className="blog-page-container">
          <div className="rounded-lg bg-gray-50 p-4 text-sm text-gray-500">
            <h2 className="mb-2 font-semibold">デバッグ情報</h2>
            <p>記事数: {posts.length}</p>
            <p className="mt-2">
              Sanity Project ID: {process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '未設定'}
            </p>
            <p>
              Dataset: {process.env.NEXT_PUBLIC_SANITY_DATASET || '未設定'}
            </p>
            <p>
              最終更新: {new Date().toLocaleString('ja-JP')}
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}