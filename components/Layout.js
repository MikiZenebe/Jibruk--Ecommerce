import Head from "next/head";
import Link from "next/link";
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

      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default Layout;
