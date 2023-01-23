import Head from "next/head";

import {
  Layout,
  Hero,
  About,
  OtherProjects,
  Contact,
  Experience,
  Projects,
} from "@components";

import {
  pageView as gaPageView,
  useEndPreloader,
  useSectionsAnimate,
} from "@libs";

export default function Home() {
  useEndPreloader();
  useSectionsAnimate();
  gaPageView();

  return (
    <>
      <Layout>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <OtherProjects />
        <Contact />
      </Layout>
    </>
  );
}
