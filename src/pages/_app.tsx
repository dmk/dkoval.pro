import '@/styles/globals.css';

import { useRouter } from 'next/router';
import React, { useEffect } from 'react';

import GoogleAnalytics from '@/components/GoogleAnalytics';
import Navigation from '@/components/Navigation';

declare const window: any;

export default function App({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      window.gtag('config', 'G-5GSCK77959', {
        page_path: url,
      });
    };
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      <div className='mb-16 ml-0 md:mb-0 md:ml-16'>
        <Component {...pageProps} />
      </div>

      <Navigation />

      <GoogleAnalytics />
    </>
  );
}
