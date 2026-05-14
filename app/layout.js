'use client';

import './globals.css';
import React from 'react';
import Header from '@/components/partials/Header';
import { Lato } from 'next/font/google';
import Script from 'next/script';
import Footer from '@/components/partials/Footer';
import { Toaster } from 'react-hot-toast';

export default function RootLayout({ children }) {
  const [isOpen, setIsOpen] = React.useState(true);

  return (
    <>
      <html lang="en" className={`font-sans z-10`}>
        <body className="tracking-wider">
          <main>
            <Header />
            {children}
            <Footer />
            <Toaster position="top-right" reverseOrder={false} />
          </main>
          <Script
            src="/assets/scripts/lang-config.js"
            strategy="beforeInteractive"
          />
          <Script
            src="/assets/scripts/translation.js"
            strategy="beforeInteractive"
          />
          <Script
            src="//translate.google.com/translate_a/element.js?cb=TranslateInit"
            strategy="afterInteractive"
          />
        </body>
      </html>
    </>
  );
}
