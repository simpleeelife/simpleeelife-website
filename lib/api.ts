import { client } from './sanity';

export async function getAllPosts() {
  const posts = await client.fetch(
    `*[_type == "post"] | order(publishedAt desc) {
      _id,
      title,
      slug,
      publishedAt,
      body,
      'author': author->name,
      'categories': categories[]->title,
    }`
  );
  return posts;
}

export async function getAllPostSlugs() {
  const slugs = await client.fetch(
    `*[_type == "post"]{ 'slug': slug.current }`
  );
  return slugs;
}

export async function getPostBySlug(slug: string) {
  const post = await client.fetch(
    `*[_type == "post" && slug.current == $slug][0] {
      _id,
      title,
      slug,
      publishedAt,
      body,
      'author': author->name,
      'categories': categories[]->title,
    }`,
    { slug }
  );
  return post;
}
