export interface Post {
  _id: string;
  title: string;
  slug: string;
  publishedAt: string;
  body: any[];
  author?: string;
  mainImage?: string;
  categories?: string[];
}

export interface SanityPost {
  _id: string;
  title: string;
  slug: { current: string };
  publishedAt: string;
  body: any[];
  author?: { name: string };
  mainImage?: { asset: { url: string } };
  categories?: string[];
}

export function mapSanityPostToPost(sanityPost: SanityPost): Post {
  return {
    _id: sanityPost._id,
    title: sanityPost.title,
    slug: sanityPost.slug.current,
    publishedAt: sanityPost.publishedAt,
    body: sanityPost.body,
    author: sanityPost.author?.name,
    mainImage: sanityPost.mainImage?.asset.url,
    categories: sanityPost.categories,
  };
}