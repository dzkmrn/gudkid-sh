import Head from 'next/head';

export default function SEOHead({ 
  title, 
  description, 
  keywords, 
  image, 
  url,
  type = 'website'
}) {
  const siteName = 'GUDKID - Software House Indonesia';
  const defaultTitle = 'GUDKID - Software House Indonesia | Jasa Pembuatan Aplikasi Web & Mobile';
  const defaultDescription = 'GUDKID adalah software house terpercaya di Indonesia yang menyediakan jasa pembuatan aplikasi web, mobile, dan solusi digital untuk bisnis Anda.';
  const defaultImage = '/logo_gudkid.png';
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://gudkid-sh.vercel.app';

  const pageTitle = title ? `${title} | ${siteName}` : defaultTitle;
  const pageDescription = description || defaultDescription;
  const pageImage = image || defaultImage;
  const pageUrl = url || siteUrl;

  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />
      <meta name="keywords" content={keywords || 'software house, jasa pembuatan aplikasi, web development, mobile app, digital solution, Indonesia, Jakarta'} />
      
      {/* Open Graph */}
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:image" content={`${siteUrl}${pageImage}`} />
      <meta property="og:url" content={pageUrl} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content="id_ID" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={pageDescription} />
      <meta name="twitter:image" content={`${siteUrl}${pageImage}`} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={pageUrl} />
      
      {/* Additional Meta Tags */}
      <meta name="robots" content="index, follow" />
      <meta name="author" content="GUDKID Team" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "GUDKID",
            "url": siteUrl,
            "logo": `${siteUrl}/logo_gudkid.png`,
            "description": pageDescription,
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "ID",
              "addressLocality": "Jakarta"
            },
            "contactPoint": {
              "@type": "ContactPoint",
              "contactType": "customer service",
              "availableLanguage": ["Indonesian", "English"]
            },
            "sameAs": [
              process.env.NEXT_PUBLIC_LINKEDIN_URL || "https://www.linkedin.com/company/gudkid",
              process.env.NEXT_PUBLIC_INSTAGRAM_URL || "https://www.instagram.com/gudkid"
            ]
          })
        }}
      />
    </Head>
  );
} 