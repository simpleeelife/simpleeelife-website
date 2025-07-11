export interface Post {
  _id: string;
  title: string;
  slug: { current: string };
  publishedAt: string;
  body: any; // eslint-disable-line @typescript-eslint/no-explicit-any
  author: string;
  categories: string[];
}
