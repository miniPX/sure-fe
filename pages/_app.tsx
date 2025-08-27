import type { AppProps } from "next/app";
import { Global } from "@emotion/react";

const Site = ({ Component, pageProps }: AppProps) => (
  <>
    <Global
      styles={{
        body: {
          margin: 0,
          display: "flex",
          maxWidth: "100vw",
          overflowX: "hidden",
        },
      }}
    />
    <Component {...pageProps} />
  </>
);

export default Site;
