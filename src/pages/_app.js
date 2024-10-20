import "@/styles/globals.css";

import { useEffect } from "react";
import { useRouter } from 'next/router';

import { ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';

import theme from '@/theme';
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
      <Box sx={{
        mb: isMobile ? 12 : 0,
        ml: isMobile ? 0 : 12,
      }}>
        <Component {...pageProps} />
      </Box>

      <Navigation />

      <GoogleAnalytics />
    </>
  );
}
