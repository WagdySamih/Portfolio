import React, { PropsWithChildren } from "react";
import Head from "next/head";

type SEOProps = {
  description?: string;
  title?: string;
  image?: string;
  keywords?: string;
  url?: string;
};

const WEBSITE_NAME = "Wagdy Samih | Portfolio";

const WEBSITE_DESCRIPTION =
  "Wagdy Samih is software engineer, Working mostly with JavaScript frameworks I have more than two year of Experience as MEAN | MERN stack developer";

const WEBSITE_IMAGE = "images/demo.webp";
const WEBSITE_KEYWORDS =
  "Wagdy, Wagdy Samih, Wagdy Samih Software engineer, JavaScript Developer";

const SEO: React.FC<SEOProps> = ({
  title = WEBSITE_NAME,
  description = WEBSITE_DESCRIPTION,
  keywords = WEBSITE_KEYWORDS,
  image = WEBSITE_IMAGE,
}) => {
  return (
    <Head>
      <meta charSet="utf-8" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta itemProp="name" content={title} />
      <meta itemProp="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="theme-color" content="#0a192f" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      {image && <meta itemProp="image" content={image} />}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      {image && <meta property="og:image" content={image} />}
      <meta property="og:description" content={description} />
      <meta property="og:site_name" content={WEBSITE_NAME} />

      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta
        name="google-site-verification"
        content="Wk8A0i8o745pE3he5ZdekszJShm0GoS8pPBBDCWr0uI"
      />
    </Head>
  );
};

export default SEO;
