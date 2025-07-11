import { getPostBySlug, getAllPostSlugs } from '@/lib/api';
import { PortableText } from '@portabletext/react';
import { Post } from '@/lib/types';

export default async function PostPage({ params }: { params: { slug: string } }) {
  const post: Post = await getPostBySlug(params.slug);

  if (!post) {
    return <div>記事が見つかりませんでした。</div>;
  }

  return (
    <section className="blog-post">
      <div className="container">
        <h1 className="post-title">{post.title}</h1>
        <p className="post-meta">
          公開日: {new Date(post.publishedAt).toLocaleDateString()}
          {post.author && ` by ${post.author}`}
          {post.categories && post.categories.length > 0 && (
            <span>
              {' '}
              カテゴリー: {post.categories.join(', ')}
            </span>
          )}
        </p>
        <div className="post-body">
          <PortableText value={post.body} />
        </div>
      </div>
    </section>
  );
}

export async function generateStaticParams(): Promise<Array<{ slug: string }>> {
  const slugs: { slug: string }[] = await getAllPostSlugs();
  return slugs.map((s: { slug: string }) => ({
    slug: s.slug,
  }));
}
