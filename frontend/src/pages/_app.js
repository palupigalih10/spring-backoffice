// import "@/styles/globals.css";
import { useState, useEffect } from "react";
import { useReportWebVitals } from "next/web-vitals";

export default function App({ Component, pageProps }) {
  useReportWebVitals((metric) => {
    console.log(metric);
  });

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  const getLayout = Component.getLayout ?? ((page) => page);

  return getLayout(<Component {...pageProps} />);
}
