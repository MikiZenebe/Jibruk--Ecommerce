/* eslint-disable @next/next/no-img-element */
import "../styles/globals.css";
import Layout from "../components/Layout";
import { StateContext } from "../context/StateContext";
import { Toaster } from "react-hot-toast";
import Router from "next/router";
import { useState } from "react";
import Loading from "../animation/Loading";
import { UserProvider } from "@auth0/nextjs-auth0/client";

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(false);

  Router.events.on("routeChangeStart", (url) => {
    setLoading(true);
  });

  Router.events.on("routeChangeComplete", (url) => {
    setLoading(false);
  });
  return (
    <>
      <UserProvider>
        <StateContext>
          {loading ? (
            loading && <Loading />
          ) : (
            <Layout>
              <Toaster />
              <Component {...pageProps} />
            </Layout>
          )}
        </StateContext>
      </UserProvider>
    </>
  );
}

export default MyApp;
