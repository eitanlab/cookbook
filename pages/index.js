import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import Layout from "../components/layout";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Cookbook</title>
        <meta name="description" content="Cookbook" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="#">Cookbook!</a>
        </h1>
        <nav>
          <Link href="/category"><a>Bakery</a></Link>
        </nav>
      </section>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </Layout>
  );
}
