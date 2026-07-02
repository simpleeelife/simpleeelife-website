import { createClient } from '@sanity/client'
import { Post } from './types'

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: '2024-02-16',
  useCdn: false,
})

export async function getAllPosts(): Promise<Post[]> {
  try {
    const query = `*[_type == "post" && defined(slug.current)] | order(publishedAt desc) {
      _id,
      title,
      "slug": slug.current,
      publishedAt,
      "excerpt": pt::text(body[0]),
      "categories": categories[]->{ _id, title }
    }`

    const posts = await client.fetch(query)
    console.log('Posts fetched:', posts.length)
    return posts
  } catch (error) {
    console.error('Error fetching posts:', error)
    return []
  }
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  try {
    const query = `*[_type == "post" && slug.current == $slug][0] {
      _id,
      title,
      "slug": slug.current,
      publishedAt,
      "excerpt": pt::text(body[0]),
      "categories": categories[]->{ _id, title },
      body
    }`

    return await client.fetch(query, { slug })
  } catch (error) {
    console.error('Error fetching post by slug:', error)
    return null
  }
}