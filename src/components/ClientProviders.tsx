'use client';

import { ErrorBoundary, FallbackProps } from 'react-error-boundary';
import { Toaster } from 'react-hot-toast';

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

export default function ClientProviders({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      {children}
      <Toaster position="bottom-right" />
    </ErrorBoundary>
  );
}
