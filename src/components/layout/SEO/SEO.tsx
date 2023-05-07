import Head from "next/head";

const WEBSITE_NAME = "Wagdy Samih | Portfolio";
const AUTHOR_NAME = "Wagdy Samih";
const WEBSITE_DESCRIPTION =
  "Wagdy Samih is software engineer, Working mostly with JavaScript frameworks, Having +3 year of Experience as MEAN | MERN stack developer";

const WEBSITE_IMAGE = "images/demo.png";
const WEBSITE_KEYWORDS =
  "Wagdy, Wagdy Samih, Wagdy Samih Software engineer, JavaScript Developer, Full Stack developer, MEARN Stack developer";

const SEO: React.FC = () => {
  return (
    <Head>
      <meta charSet="utf-8" />
      <title>{WEBSITE_NAME}</title>
      <meta name="description" content={WEBSITE_DESCRIPTION} />
      <meta itemProp="name" content={WEBSITE_NAME} />
      <meta itemProp="description" content={WEBSITE_DESCRIPTION} />
      <meta name="keywords" content={WEBSITE_KEYWORDS} />
      <meta name="author" content={AUTHOR_NAME} />
      <meta name="theme-color" content="#0a192f" />
      <link rel="preconnect" href="https://www.google-analytics.com"></link>
      <link rel=" dns-prefetch" href="https://www.google-analytics.com"></link>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta itemProp="image" content={WEBSITE_IMAGE} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={WEBSITE_NAME} />
      <meta property="og:image" content={WEBSITE_IMAGE} />
      <meta property="og:description" content={WEBSITE_DESCRIPTION} />
      <meta property="og:site_name" content={WEBSITE_NAME} />

      <meta name="twitter:title" content={WEBSITE_NAME} />
      <meta name="twitter:description" content={WEBSITE_DESCRIPTION} />
      <meta name="twitter:image" content={WEBSITE_IMAGE} />
      <meta
        name="google-site-verification"
        content="Wk8A0i8o745pE3he5ZdekszJShm0GoS8pPBBDCWr0uI"
      />
    </Head>
  );
};

export default SEO;
