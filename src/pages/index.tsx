import Head from "next/head";

import { Layout, Hero, About, OtherProjects, Contact } from "@components";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <div className={styles.main}>
          <Hero />
          <About />
          <OtherProjects />
          <Contact />
        </div>
      </Layout>
    </>
  );
}
