'use client';

import { Inter } from 'next/font/google';
import { Toaster } from 'react-hot-toast';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { metadata } from './metadata';
import './globals.css';
import { ErrorBoundary, FallbackProps } from 'react-error-boundary';

const inter = Inter({ subsets: ['latin'] });

function ErrorFallback({ error, resetErrorBoundary }: FallbackProps) {
  return (
    <div className="min-h-screen bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-base font-semibold text-blue-600">There was an error</p>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          Something went wrong
        </h1>
        <p className="mt-6 text-base leading-7 text-gray-600">{error.message}</p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <button
            onClick={resetErrorBoundary}
            className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
          >
            Try again
          </button>
          <a href="/" className="text-sm font-semibold text-gray-900">
            Go back home <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const description = metadata.home.description as string | undefined;

  return (
    <html lang="en" className="h-full scroll-smooth">
      <head>
        <title>SparkLink Systems - IT Staffing Solutions</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#2563eb" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`${inter.className} h-full`}>
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-grow">{children}</main>
            <Footer />
          </div>
          <Toaster position="bottom-right" />
        </ErrorBoundary>
      </body>
    </html>
  );
}
