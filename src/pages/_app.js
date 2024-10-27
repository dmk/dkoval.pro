import "@/styles/globals.css";

import { useEffect } from "react";
import { useRouter } from 'next/router';

import Box from '@mui/material/Box';

import GoogleAnalytics from "@/components/GoogleAnalytics";
import Navigation from "@/components/Navigation";
import { useMediaQuery } from "@mui/material";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const isMobile = useMediaQuery('(max-width:768px)');

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
      <div className={`${isMobile ? 'mb-12 ml-0' : 'mb-0 ml-12'}`}>
        <Component {...pageProps} />
      </div>

      <Navigation />

      <GoogleAnalytics />
    </>
  );
}
