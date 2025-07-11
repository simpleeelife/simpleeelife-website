import { getAllPosts } from '@/lib/api';
import Link from 'next/link';
import { Post } from '@/lib/types';

export default async function BlogPage() {
  const posts: Post[] = await getAllPosts();

  return (
    <section className="blog" id="blog">
      <div className="container">
        <h2 className="section-title">最新の記事</h2>
        <div className="blog-grid">
          {posts.map((post: Post) => (
            <article key={post._id} className="blog-card">
              <Link href={`/blog/${post.slug.current}`}>
                <div className="blog-image">記事サムネイル</div>
                <div className="blog-content">
                  <p className="blog-date">{new Date(post.publishedAt).toLocaleDateString()}</p>
                  <h3 className="blog-title">{post.title}</h3>
                  <p className="blog-excerpt">
                    {/* Sanity Portable Textを適切に表示するには別途コンポーネントが必要です */}
                    {post.body[0]?.children[0]?.text.substring(0, 100)}...
                  </p>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
