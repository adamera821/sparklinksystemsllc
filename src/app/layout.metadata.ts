import { Metadata, Viewport } from 'next';

export const metadata: Metadata = {
  title: 'SparkLink Systems',
  description: 'Leading IT staffing agency connecting top tech talent with innovative companies',
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
};

export const viewport: Viewport = {
  themeColor: '#60A5FA',
};
