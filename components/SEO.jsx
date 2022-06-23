import Head from "next/head";
import React from "react";

const SEO = ({ title, description, keywords, image, url, author }) => {
  const _title = title || "Md Shahriyar Alam - Full-Stack Web Developer";
  const _description =
    description ||
    "Full-Stack Web Developer with knowledge of JavaScript and Python. Currently living in Bangladesh and open for jobs.";
  const _image = image || "/images/meta.png";
  const _keywords =
    keywords ||
    "md shahriyar alam, shahriyar, shahriyar alam, full-stack web developer, bangladeshi web developer, bangladeshi fullstack web developer, bangladeshi react developer, bangladeshi python developer";
  const _author = author || "Md Shahriyar Alam";
  return (
    <Head>
      <title>{_title}</title>
      <meta name="title" content={_title} />
      <meta name="description" content={_description} />
      <meta name="author" content={_author} />
      <meta name="keywords" content={_keywords} />

      <meta property="og:type" content="website" />
      <meta property="og:title" content={_title} />
      <meta property="og:description" content={_description} />
      <meta property="og:image" content={_image} />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:title" content={_title} />
      <meta property="twitter:description" content={_description} />
      <meta property="twitter:image" content={_image} />
    </Head>
  );
};

export default SEO;
