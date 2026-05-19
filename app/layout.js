import './globals.css';
import React from 'react';
import Header from '@/components/partials/Header';
import Footer from '@/components/partials/Footer';
import { Toaster } from 'react-hot-toast';
import WakeBackend from '@/components/wakeBackend';
import Script from 'next/script';

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="font-sans z-10">
      <body className="tracking-wider">
        <Header />

        <WakeBackend />

        <main>{children}</main>

        <Footer />

        <Toaster position="top-right" reverseOrder={false} />

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
  );
}
