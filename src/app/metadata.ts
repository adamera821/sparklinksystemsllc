import { Metadata, Viewport } from 'next';

const defaultMetadata: Metadata = {
  metadataBase: new URL('https://sparklinksystemsllc-rijdu5kc1-adamera821s-projects.vercel.app'),
  title: 'SparkLink Systems - IT Staffing Solutions',
  description: 'Leading IT staffing agency connecting top tech talent with innovative companies. Specializing in permanent placement, contract-to-hire, and project-based staffing.',
  manifest: '/manifest.json',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '48x48' },
      { url: '/favicon.svg', sizes: '32x32 48x48 72x72 96x96 128x128 256x256', type: 'image/svg+xml' }
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }
    ],
  },
  keywords: [
    'IT staffing',
    'tech recruitment',
    'software engineers',
    'IT jobs',
    'tech talent',
    'technology recruitment',
    'IT careers',
    'tech staffing',
    'IT recruitment agency',
    'tech hiring',
  ],
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
    title: 'SparkLink Systems - IT Staffing Solutions',
    description: 'Leading IT staffing agency connecting top tech talent with innovative companies.',
    url: 'https://sparklinksystemsllc-rijdu5kc1-adamera821s-projects.vercel.app',
    siteName: 'SparkLink Systems',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SparkLink Systems - IT Staffing Solutions',
    description: 'Leading IT staffing agency connecting top tech talent with innovative companies.',
  },
  verification: {
    google: 'verify-code', // You'll need to replace this with your actual Google Search Console verification code
  },
};

export const metadata: { [key: string]: Metadata } = {
  home: {
    ...defaultMetadata,
  },
  employers: {
    ...defaultMetadata,
    title: 'Hire Top Tech Talent | SparkLink Systems',
    description: 'Find exceptional IT professionals for your team. Our specialized recruitment process ensures the perfect match for your technical requirements and company culture.',
  },
  jobSeekers: {
    ...defaultMetadata,
    title: 'IT Career Opportunities | SparkLink Systems',
    description: 'Discover exciting tech career opportunities with leading companies. We connect IT professionals with roles that match their skills and career aspirations.',
  },
  about: {
    ...defaultMetadata,
    title: 'About SparkLink Systems | IT Staffing Excellence',
    description: 'Learn about our mission to transform IT staffing. We combine industry expertise with personalized service to create lasting partnerships.',
  },
  contact: {
    ...defaultMetadata,
    title: 'Contact SparkLink Systems | IT Staffing Solutions',
    description: 'Get in touch with our IT staffing experts. Whether you\'re hiring or seeking opportunities, we\'re here to help you succeed.',
  },
  industries: {
    ...defaultMetadata,
    title: 'Industries We Serve | SparkLink Systems',
    description: 'We provide specialized IT staffing solutions across various industries including technology, healthcare, finance, and more.',
  },
  services: {
    ...defaultMetadata,
    title: 'IT Staffing Services | SparkLink Systems',
    description: 'Comprehensive IT staffing services including permanent placement, contract-to-hire, and project-based staffing solutions.',
  },
};
