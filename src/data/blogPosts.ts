import posts from '../../content/blog/posts.json';

export interface BlogPost {
  title: string;
  slug: string;
  excerpt: string;
  metaDescription: string;
  heroImage: string;
  publishedAt: string;
  readingTimeMinutes: number;
  serviceIds: string[];
  keywords: string[];
  content: string[];
}

export const blogPosts: BlogPost[] = posts.map((post) => ({
  ...post,
  publishedAt: post.publishedAt
}));

export const getPostBySlug = (slug: string) =>
  blogPosts.find((post) => post.slug === slug);

export const getPostsByService = (serviceId: string, limit = 3) =>
  blogPosts
    .filter((post) => post.serviceIds.includes(serviceId))
    .slice(0, limit);

export const getRecentPosts = (limit = 3) =>
  [...blogPosts]
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
    .slice(0, limit);
