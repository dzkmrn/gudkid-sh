import './globals.css'
import AnimatedBlob from '../components/AnimatedBlob';
import AnimatedWave from '../components/AnimatedWave';
import AnimatedParticles from '../components/AnimatedParticles';
import FacebookPixel from '../components/FacebookPixel';
import PerformanceMonitor from '../components/PerformanceMonitor';

export const metadata = {
  title: 'GUDKID - Software House Indonesia | Jasa Pembuatan Aplikasi Web & Mobile',
  description: 'GUDKID adalah software house terpercaya di Indonesia yang menyediakan jasa pembuatan aplikasi web, mobile, dan solusi digital untuk bisnis Anda. Konsultasi gratis tersedia.',
  keywords: 'software house, jasa pembuatan aplikasi, web development, mobile app, digital solution, Indonesia, Jakarta',
  authors: [{ name: 'GUDKID Team' }],
  creator: 'GUDKID',
  publisher: 'GUDKID',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: 'GUDKID - Software House Indonesia | Jasa Pembuatan Aplikasi Web & Mobile',
    description: 'GUDKID adalah software house terpercaya di Indonesia yang menyediakan jasa pembuatan aplikasi web, mobile, dan solusi digital untuk bisnis Anda.',
    url: 'https://gudkid-sh.vercel.app',
    siteName: 'GUDKID',
    images: [
      {
        url: '/logo_gudkid.png',
        width: 1200,
        height: 630,
        alt: 'GUDKID Software House',
      },
    ],
    locale: 'id_ID',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GUDKID - Software House Indonesia',
    description: 'Jasa pembuatan aplikasi web, mobile, dan solusi digital untuk bisnis Anda.',
    images: ['/logo_gudkid.png'],
  },
  alternates: {
    canonical: 'https://gudkid-sh.vercel.app',
  },
  verification: {
    google: 'google-site-verification=epzUB-XMdmKzvQh_tO05MdsvgATUU7owFSktItnWOp0', // Ganti dengan kode verifikasi Google Search Console
  },
}

export default function RootLayout({ children }) {
 return (
    <html lang="id">
      <head>
        <link rel="icon" href="/logo_gudkid.png" />
        <link rel="apple-touch-icon" href="/logo_gudkid.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="format-detection" content="telephone=no" />
        
        {/* Google Analytics */}
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || 'G-XXXXXXXXXX'}`}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || 'G-XXXXXXXXXX'}', {
                page_title: 'GUDKID - Software House Indonesia',
                page_location: window.location.href,
              });
            `,
          }}
        />
        
        {/* Schema.org structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "GUDKID",
              "url": "https://gudkid-sh.vercel.app",
              "logo": "https://gudkid-sh.vercel.app/logo_gudkid.png",
              "description": "Software house terpercaya di Indonesia yang menyediakan jasa pembuatan aplikasi web, mobile, dan solusi digital",
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
                "https://www.linkedin.com/company/gudkid",
                "https://www.instagram.com/gudkid"
              ]
            })
          }}
        />
      </head>
      <body style={{ position: 'relative', minHeight: '100vh', overflowX: 'hidden' }}>
        {/* Animated Blobs di background */}
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: 0, pointerEvents: 'none' }}>
          <AnimatedBlob />
          <AnimatedParticles />
        </div>
        {/* Main Content */}
        <div style={{ position: 'relative', zIndex: 2 }}>
          {children}
        </div>
        {/* Animated Wave di paling bawah */}
        <div style={{ position: 'fixed', bottom: 0, left: 0, width: '100vw', zIndex: 1, pointerEvents: 'none' }}>
          <AnimatedWave />
        </div>
        <FacebookPixel />
        <PerformanceMonitor />
      </body>
    </html>
  )
}
