import { Navigate, useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, Tag } from 'lucide-react';
import SEO from '@/components/SEO';
import LazyImage from '@/components/LazyImage';
import InternalLinkSection from '@/components/InternalLinkSection';
import { buildCanonicalUrl } from '@/data/siteMetadata';
import { getPostBySlug, getPostsByService } from '@/data/blogPosts';
import { services } from '@/data/servicesData';
import { cdnImage } from '@/utils/image';
import { buildBreadcrumbSchema } from '@/utils/structuredData';

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();

  if (!slug) {
    return <Navigate to="/blog" replace />;
  }

  const post = getPostBySlug(slug);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const relatedServices = services.filter((service) =>
    post.serviceIds.includes(service.id)
  );

  const relatedPosts = post.serviceIds.flatMap((serviceId) =>
    getPostsByService(serviceId)
  ).filter((item) => item.slug !== post.slug);

  const structuredData = [
    {
      '@context': 'https://schema.org',
      '@type': 'BlogPosting',
      mainEntityOfPage: buildCanonicalUrl(`/blog/${post.slug}`),
      headline: post.title,
      image: cdnImage(post.heroImage, { width: 1280, quality: 70, fit: 'cover' }),
      datePublished: post.publishedAt,
      dateModified: post.publishedAt,
      author: {
        '@type': 'Organization',
        name: 'Artic Pulizie'
      },
      publisher: {
        '@type': 'Organization',
        name: 'Artic Pulizie',
        logo: {
          '@type': 'ImageObject',
          url: buildCanonicalUrl('/assets/logo.svg')
        }
      },
      description: post.metaDescription
    },
    buildBreadcrumbSchema([
      { name: 'Blog', path: '/blog' },
      { name: post.title, path: `/blog/${post.slug}` }
    ])
  ].filter(Boolean) as Record<string, unknown>[];

  return (
    <main className="pt-24 pb-20 bg-white">
      <SEO
        title={`${post.title} | Artic Pulizie Blog`}
        description={post.metaDescription}
        canonical={buildCanonicalUrl(`/blog/${post.slug}`)}
        keywords={post.keywords.join(', ')}
        structuredData={structuredData}
      />

      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          to="/blog"
          className="inline-flex items-center space-x-2 text-sky-600 font-semibold hover:text-sky-700 transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Torna al blog</span>
        </Link>

        <header className="mb-10">
          <p className="inline-flex items-center px-3 py-1 text-sm font-semibold bg-sky-100 text-sky-600 rounded-full">
            Artic Pulizie Brescia
          </p>
          <h1 className="mt-6 text-4xl font-bold text-slate-900 leading-tight">
            {post.title}
          </h1>
          <div className="mt-4 flex items-center gap-4 text-sm text-slate-500">
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
              <span>{post.readingTimeMinutes} minuti</span>
            </span>
          </div>
        </header>

        <div className="mb-10">
          <LazyImage
            src={cdnImage(post.heroImage, { width: 1280, quality: 70, fit: 'cover' })}
            fallbackSrc={post.heroImage}
            alt={`${post.title} - Artic Pulizie Brescia`}
            className="w-full h-80 object-cover rounded-3xl shadow-lg"
            width={1280}
            height={640}
          />
        </div>

        <div className="prose prose-lg prose-slate max-w-none">
          {post.content.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>

        {relatedServices.length > 0 && (
          <section className="mt-12 bg-slate-50 rounded-3xl p-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">
              Servizi correlati a questo approfondimento
            </h2>
            <div className="flex flex-wrap gap-3">
              {relatedServices.map((service) => (
                <Link
                  key={service.id}
                  to={`/servizi/${service.slug}`}
                  className="inline-flex items-center space-x-2 bg-white border border-slate-200 hover:border-sky-300 hover:text-sky-600 px-4 py-2 rounded-full font-medium transition-all duration-200"
                >
                  <Tag className="w-4 h-4" />
                  <span>{service.name}</span>
                </Link>
              ))}
            </div>
          </section>
        )}

        {relatedPosts.length > 0 && (
          <section className="mt-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">
              Altri articoli che potrebbero interessarti
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              {relatedPosts.slice(0, 2).map((relatedPost) => (
                <Link
                  key={relatedPost.slug}
                  to={`/blog/${relatedPost.slug}`}
                  className="group block bg-slate-50 rounded-2xl p-6 hover:bg-sky-50 transition-colors duration-300 border border-transparent hover:border-sky-200"
                >
                  <h3 className="text-lg font-semibold text-slate-900 group-hover:text-sky-600 transition-colors">
                    {relatedPost.title}
                  </h3>
                  <p className="mt-2 text-slate-600 text-sm leading-relaxed">
                    {relatedPost.excerpt}
                  </p>
                  <div className="mt-4 text-sm text-slate-500">
                    {new Intl.DateTimeFormat('it-IT', {
                      day: '2-digit',
                      month: 'short',
                      year: 'numeric'
                    }).format(new Date(relatedPost.publishedAt))}
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}

        <InternalLinkSection
          title="Approfondisci con i nostri servizi e risorse"
          intro="Consulta le pagine principali di Artic Pulizie per scoprire i servizi dedicati a uffici, condomini e industrie, le zone servite, le recensioni dei clienti e come richiedere un preventivo."
          className="mt-16"
        />
      </article>
    </main>
  );
};

export default BlogPost;
