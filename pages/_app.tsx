import React from "react";
import "../styles/globals.css";

interface MyAppProps {
  Component: React.ComponentType<any>;
  pageProps: any;
}

const MyApp: React.FC<MyAppProps> = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default MyApp;
