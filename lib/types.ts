export interface Post {
  _id: string;
  title: string;
  slug: { current: string };
  publishedAt: string;
  body: any; // PortableTextの型は複雑なので、ここではanyで一時的に対応
  author: string;
  categories: string[];
}
