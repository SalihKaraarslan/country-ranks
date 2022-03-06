import { Container, Header } from "./style";
import Head from "next/head";
import Link from "next/link";

const Layout = ({ children, title = "Ülke Verileri" }) => {
  return (
    <Container>
      <Head>
        <title>{title}</title>
      </Head>

      <Header>
        <Link href="/">
          <h2>Ülke Verileri</h2>
        </Link>
      </Header>

      <main>{children}</main>
    </Container>
  );
};

export default Layout;
