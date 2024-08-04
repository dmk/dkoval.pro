import "@/styles/globals.css";

import { useEffect } from "react";
import { useRouter } from 'next/router';

import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import theme from '@/theme';
import GoogleAnalytics from "@/components/GoogleAnalytics";
import PageTransition from "@/components/PageTransition";
import Navigation from "@/components/Navigation";
import { useMediaQuery } from "@mui/material";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const isMobile = useMediaQuery('(max-width:600px)');
  const { transitionDirection } = pageProps;

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

      <PageTransition direction={transitionDirection}>
        <Component {...pageProps} />
      </PageTransition>

      <Navigation />

      <GoogleAnalytics />
    </ThemeProvider>
  );
}
