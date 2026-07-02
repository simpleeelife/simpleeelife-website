import { createClient } from 'next-sanity'

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: '2024-02-16',
  useCdn: false,
})

export const postsQuery = `
*[_type == "post" && defined(slug.current)] | order(publishedAt desc) {
  _id,
  _type,
  title,
  "slug": slug.current,
  publishedAt,
  mainImage,
  "excerpt": pt::text(body[0])
}`

export type Post = {
  _id: string
  _type: string
  title: string
  slug: string
  publishedAt: string
  mainImage?: {
    _type: 'image'
    asset: {
      _ref: string
      _type: 'reference'
    }
  }
  excerpt?: string
}

export async function getPosts(): Promise<Post[]> {
  try {
    return await client.fetch(postsQuery)
  } catch (error) {
    console.error('Error fetching posts:', error)
    return []
  }
}