import { getPostBySlug, getAllPosts } from '@/lib/api'
import PortableTextRenderer from '@/components/PortableTextRenderer'
import { Post } from '@/lib/types'

export default async function PostPage({ params }: { params: { slug: string } }) {
  const post: Post | null = await getPostBySlug(params.slug)

  if (!post) {
    return (
      <div className="article-container">
        <div className="text-center py-12">
          <p>記事が見つかりませんでした。</p>
        </div>
      </div>
    )
  }

  return (
    <div className="article-container">
      <header className="article-header">
        <h1 className="article-title">{post.title}</h1>
        <p className="article-meta">
          <span>投稿日: {new Date(post.publishedAt).toLocaleDateString()}</span>
          {post.author && <span>ライター: {post.author}</span>}
          {/* プレースホルダー: ビュー数 */}
          <span>View: 0</span>
        </p>
        
        <div className="like-section">
          <button className="like-button">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
            </svg>
            <span>いいね！</span>
          </button>
          <p className="like-count">0</p>
        </div>
      </header>

      <main className="article-body">
        <PortableTextRenderer value={post.body} />
      </main>

      <link rel="stylesheet" href="/blog/styles.css" />
    </div>
  )
}

export async function generateStaticParams() {
  try {
    const posts = await getAllPosts()
    return posts.map((post) => ({
      slug: post.slug.current
    }))
  } catch (error) {
    console.error('Error generating static params:', error)
    return []
  }
}