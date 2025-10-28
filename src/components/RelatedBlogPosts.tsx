import { Link } from 'react-router-dom';
import { Calendar, ArrowRight } from 'lucide-react';
import LazyImage from '@/components/LazyImage';
import { getPostsByService } from '@/data/blogPosts';
import { cdnImage } from '@/utils/image';

interface RelatedBlogPostsProps {
  serviceIds: string[];
  currentSlug?: string;
  title?: string;
  limit?: number;
}

const RelatedBlogPosts = ({
  serviceIds,
  currentSlug,
  title = 'Approfondimenti dal blog',
  limit = 3
}: RelatedBlogPostsProps) => {
  const posts = serviceIds
    .flatMap((serviceId) => getPostsByService(serviceId, limit))
    .filter((post, index, self) => self.findIndex((p) => p.slug === post.slug) === index)
    .filter((post) => post.slug !== currentSlug)
    .slice(0, limit);

  if (!posts.length) {
    return null;
  }

  return (
    <section className="py-16 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold text-slate-900">{title}</h2>
          <Link
            to="/blog"
            className="inline-flex items-center space-x-2 text-sky-600 font-semibold hover:text-sky-700 transition-colors"
          >
            <span>Vai al blog</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <Link
              key={post.slug}
              to={`/blog/${post.slug}`}
              className="group bg-white rounded-2xl border border-slate-200 hover:border-sky-300 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden"
            >
              <LazyImage
                src={cdnImage(post.heroImage, { width: 900, quality: 70, fit: 'cover' })}
                fallbackSrc={post.heroImage}
                alt={`${post.title} - Artic Pulizie Brescia`}
                className="w-full h-40 object-cover"
                width={900}
                height={360}
              />
              <div className="p-6">
                <div className="flex items-center text-xs text-slate-500 space-x-2 mb-3">
                  <Calendar className="w-3 h-3" />
                  <span>
                    {new Intl.DateTimeFormat('it-IT', {
                      day: '2-digit',
                      month: 'short',
                      year: 'numeric'
                    }).format(new Date(post.publishedAt))}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-slate-900 group-hover:text-sky-600 transition-colors">
                  {post.title}
                </h3>
                <p className="mt-3 text-sm text-slate-600 leading-relaxed">{post.excerpt}</p>
                <div className="mt-5 inline-flex items-center space-x-2 text-sm font-semibold text-sky-600 group-hover:text-sky-700">
                  <span>Leggi l&apos;articolo</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RelatedBlogPosts;
