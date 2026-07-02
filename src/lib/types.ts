export interface Category {
  _id: string
  title: string
}

export interface Post {
  _id: string
  title: string
  slug: {
    current: string
  }
  publishedAt: string
  excerpt?: string
  categories?: Category[]
  body?: any[]
}