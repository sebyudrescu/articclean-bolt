import { Link } from 'react-router-dom';
import { Calendar, Clock, ArrowRight, Tag } from 'lucide-react';
import SEO from '@/components/SEO';
import LazyImage from '@/components/LazyImage';
import { buildCanonicalUrl } from '@/data/siteMetadata';
import { blogPosts } from '@/data/blogPosts';
import { services } from '@/data/servicesData';
import { cdnImage } from '@/utils/image';
import { buildBreadcrumbSchema } from '@/utils/structuredData';

const Blog = () => {
  const posts = [...blogPosts].sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );

  const structuredData = [
    {
      '@context': 'https://schema.org',
      '@type': 'Blog',
      name: 'Blog Artic Pulizie Brescia',
      description: 'Consigli pratici e strategie SEO per le pulizie professionali a Brescia.',
      url: buildCanonicalUrl('/blog'),
      blogPost: posts.map((post) => ({
        '@type': 'BlogPosting',
        headline: post.title,
        datePublished: post.publishedAt,
        url: buildCanonicalUrl(`/blog/${post.slug}`)
      }))
    },
    buildBreadcrumbSchema([{ name: 'Blog', path: '/blog' }])
  ].filter(Boolean) as Record<string, unknown>[];

  return (
    <main className="pt-24 pb-20 bg-slate-50 min-h-screen">
      <SEO
        title="Blog Artic Pulizie Brescia - Consigli per Pulizie Professionali"
        description="Guide operative, checklist e consigli SEO per pulizie professionali a Brescia. Scopri gli approfondimenti di Artic Pulizie su uffici, condomini e sanificazioni."
        canonical={buildCanonicalUrl('/blog')}
        keywords="blog pulizie brescia, consigli pulizie professionali, sanificazione uffici brescia"
        structuredData={structuredData}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-16">
          <p className="inline-flex items-center px-3 py-1 text-sm font-semibold bg-sky-100 text-sky-600 rounded-full">
            Blog Artic Pulizie
          </p>
          <h1 className="mt-6 text-4xl lg:text-5xl font-bold text-slate-900">
            Strategie e guide per la pulizia professionale a Brescia
          </h1>
          <p className="mt-4 text-lg text-slate-600 max-w-3xl mx-auto">
            Approfondimenti pratici dedicati a facility manager, amministratori di condominio e
            responsabili di stabilimento. Suggerimenti basati sull’esperienza di Artic Pulizie.
          </p>
        </header>

        <div className="grid gap-8 md:grid-cols-2">
          {posts.map((post) => {
            const relatedServices = services.filter((service) =>
              post.serviceIds.includes(service.id)
            );

            return (
              <article
                key={post.slug}
                className="bg-white rounded-3xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-slate-100 overflow-hidden flex flex-col"
              >
                <Link to={`/blog/${post.slug}`} className="block">
                  <LazyImage
                    src={cdnImage(post.heroImage, { width: 1200, quality: 70, fit: 'cover' })}
                    fallbackSrc={post.heroImage}
                    alt={`${post.title} - Artic Pulizie Brescia`}
                    className="w-full h-56 object-cover"
                    width={1200}
                    height={560}
                  />
                </Link>

                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center text-sm text-slate-500 space-x-4 mb-4">
                    <span className="inline-flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>
                        {new Intl.DateTimeFormat('it-IT', {
                          day: '2-digit',
                          month: 'long',
                          year: 'numeric'
                        }).format(new Date(post.publishedAt))}
                      </span>
                    </span>
                    <span className="inline-flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{post.readingTimeMinutes} min</span>
                    </span>
                  </div>

                  <Link to={`/blog/${post.slug}`}>
                    <h2 className="text-2xl font-semibold text-slate-900 hover:text-sky-600 transition-colors">
                      {post.title}
                    </h2>
                  </Link>

                  <p className="mt-4 text-slate-600 leading-relaxed flex-1">{post.excerpt}</p>

                  {relatedServices.length > 0 && (
                    <div className="mt-6 flex flex-wrap gap-2">
                      {relatedServices.map((service) => (
                        <Link
                          key={service.id}
                          to={`/servizi/${service.slug}`}
                          className="inline-flex items-center space-x-1 text-sm font-medium text-sky-600 bg-sky-50 hover:bg-sky-100 px-3 py-1 rounded-full transition-colors"
                        >
                          <Tag className="w-3 h-3" />
                          <span>{service.name}</span>
                        </Link>
                      ))}
                    </div>
                  )}

                  <Link
                    to={`/blog/${post.slug}`}
                    className="mt-6 inline-flex items-center space-x-2 text-sky-600 font-semibold hover:text-sky-700 transition-colors"
                  >
                    <span>Leggi l&apos;articolo</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </main>
  );
};

export default Blog;
