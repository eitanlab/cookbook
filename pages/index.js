import { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import Layout from "../components/layout";
import {useGetDocuments} from '../hooks/firebaseCustomHook';

export default function Home({categories}) {
	// const [loading, setLoading] = useState(true);
	// const [categories, setCategories] = useState([]);

  // useEffect(() => {
  //   useGetDocuments({ collectionName: "categories" }).then((categories) => {
  //     setCategories(categories);
  //     setLoading(false);
  //   });
  // }, []);

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
				{categories &&
					<nav>
						{categories.map(({name, slug, id}) => 
							<Link 
								key={id}
								as={`/category/${encodeURIComponent(slug)}`}
								href={'/category/[slug]'} >
								<a>{name}</a>
							</Link>
							)}
					</nav>
				}
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

Home.getInitialProps = async (context) => {
  const categories = await useGetDocuments({ collectionName: "categories" });
  return { categories: categories }
}
