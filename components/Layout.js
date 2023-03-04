import Head from "next/head";

import { Navbar, Footer } from "../components/index";

function Layout({ children }) {
  return (
    <div>
      <Head>
        <title>Jibruk E-Store</title>
      </Head>

      <header className="sticky top-0 z-50">
        <Navbar />
      </header>

      <main>{children}</main>

      <footer className="mt-auto bottom-0 z-50 w-full">
        <Footer />
      </footer>
    </div>
  );
}

export default Layout;
