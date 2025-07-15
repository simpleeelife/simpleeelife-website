import { createClient } from 'next-sanity';
import { Post, SanityPost, mapSanityPostToPost } from './types';

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: '2023-05-03',
  useCdn: false,
  token: process.env.SANITY_READ_TOKEN, // 読み取り専用トークンを追加
});

export async function getAllPosts(): Promise<Post[]> {
  const query = `*[_type == "post" && publishedAt <= now()] | order(publishedAt desc) {
    _id,
    title,
    slug,
    publishedAt,
    body,
    "author": author->{name},
    "mainImage": mainImage.asset->url,
    "categories": categories[]->title
  }`;
  const sanityPosts: SanityPost[] = await client.fetch(query);
  return sanityPosts.map(mapSanityPostToPost);
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  try {
    const query = `*[_type == "post" && slug.current == $slug][0] {
      _id,
      title,
      slug,
      publishedAt,
      body,
      "author": author->{name},
      "mainImage": mainImage.asset->url,
      "categories": categories[]->title
    }`;
    const sanityPost: SanityPost | null = await client.fetch(query, { slug });
    
    if (!sanityPost) {
      console.error(`No post found with slug: ${slug}`);
      return null;
    }
    
    return mapSanityPostToPost(sanityPost);
  } catch (error) {
    console.error('Error fetching post:', error);
    throw error;
  }
}