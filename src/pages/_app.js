import "@/styles/globals.css";

import { useEffect } from "react";
import { useRouter } from 'next/router';

import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import theme from '@/theme';
import GoogleAnalytics from "@/components/GoogleAnalytics";
import PageTransition from "@/components/PageTransition";

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
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <PageTransition>
        <Component {...pageProps} />
      </PageTransition>

      <GoogleAnalytics />
    </ThemeProvider>
  );
}
