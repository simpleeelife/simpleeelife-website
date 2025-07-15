import { createClient } from 'next-sanity';
import { Post } from './types';

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: '2023-05-03',
  useCdn: false,
});

export async function getAllPosts(): Promise<Post[]> {
  const query = `*[_type == "post"] | order(publishedAt desc) {
    _id,
    title,
    "slug": slug.current,
    publishedAt,
    body,
    "author": author->name,
    "mainImage": mainImage.asset->url,
    "categories": categories[]->title
  }`;
  return await client.fetch(query);
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  const query = `*[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    "slug": slug.current,
    publishedAt,
    body,
    "author": author->name,
    "mainImage": mainImage.asset->url,
    "categories": categories[]->title
  }`;
  return await client.fetch(query, { slug });
}