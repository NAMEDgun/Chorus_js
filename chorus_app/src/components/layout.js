import Head from "next/head";
import Link from "next/link";

const Layout = ({ children }) => (
  <div>
    <Head>
      <title>Next.js 게시판</title>
    </Head>
    <header>
      <nav>
        <ul>
          <li>
            <Link href="/">
              <a>홈</a>
            </Link>
          </li>
          <li>
            <Link href="/new">
              <a>새로운 게시물 작성</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
    <main>{children}</main>
  </div>
);

export default Layout;
