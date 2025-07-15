export interface Post {
  _id: string;
  title: string;
  slug: { current: string };
  publishedAt: string;
  body: any[];
  author?: { name: string };
  mainImage?: { asset: { url: string } };
  categories?: string[];
}