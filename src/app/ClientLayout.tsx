'use client';

import { type ReactNode } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ClientWrapper from '@/components/ClientWrapper';

export default function ClientLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <ClientWrapper>
      <Navbar />
      <main className="min-h-screen">
        {children}
      </main>
      <Footer />
    </ClientWrapper>
  );
}
