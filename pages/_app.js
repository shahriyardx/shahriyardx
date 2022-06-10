import "../styles/globals.css";
import { SessionProvider } from "next-auth/react";
import AuthWrapper from "@/components/Auth/AuthWrapper";
import { wrapper } from "@/redux/store";
import { useDispatch } from "react-redux";
import { setPosts } from "@/redux/posts";
import { useEffect } from "react";
import { API_BASE } from "@/utils/api";
import NextNProgress from "nextjs-progressbar";
import Script from "next/script";
import { Toaster } from "react-hot-toast";

function MyApp({ Component, pageProps }) {
  const dispatch = useDispatch();

  useEffect(() => {
    fetch(`${API_BASE}/posts`)
      .then((response) => response.json())
      .then((data) => {
        dispatch(setPosts(data));
      });
  }, [dispatch]);

  return (
    <SessionProvider session={pageProps.session}>
      <>
        <NextNProgress />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-V0VJLSW7JB"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){
              dataLayer.push(arguments);
            }

            gtag('js', new Date());
            gtag('config', 'G-V0VJLSW7JB');
          `}
        </Script>
        {Component.requireAuth ? (
          <AuthWrapper>
            <Component {...pageProps} />
          </AuthWrapper>
        ) : (
          <Component {...pageProps} />
        )}
        <Toaster />
      </>
    </SessionProvider>
  );
}

export default wrapper.withRedux(MyApp);
