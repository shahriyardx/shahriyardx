import type { AppType } from "next/app";
import { Toaster } from "react-hot-toast";

import "../styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <>
      <Component {...pageProps} />
      <Toaster />
    </>
  );
};

export default MyApp;
