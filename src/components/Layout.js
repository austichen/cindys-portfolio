import React from "react";
import { Helmet } from "react-helmet";
import Navbar from "../components/Navbar";
import "./all.sass";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import useSiteMetadata from "./SiteMetadata";
import { withPrefix } from "gatsby";
import SimpleReactLightbox from "simple-react-lightbox";

const TemplateWrapper = ({ children }) => {
  const { title, description } = useSiteMetadata();
  return (
    <div>
      <SimpleReactLightbox>
        <Helmet>
          <html lang="en" />
          <title>{title}</title>
          <meta name="description" content={description} />

          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href={`${withPrefix("/")}img/apple-touch-icon.png`}
          />
          <link
            rel="icon"
            type="image/png"
            href={`${withPrefix("/")}img/favicon-32x32.png`}
            sizes="32x32"
          />
          <link
            rel="icon"
            type="image/png"
            href={`${withPrefix("/")}img/favicon-16x16.png`}
            sizes="16x16"
          />

          <link
            rel="mask-icon"
            href={`${withPrefix("/")}img/safari-pinned-tab.svg`}
            color="#ff4400"
          />
          <meta name="theme-color" content="#fff" />

          <meta property="og:type" content="website" />
          <meta property="og:title" content={title} />
          <meta property="og:description" content={description} />
          <meta property="og:url" content="/" />
          <meta
            property="og:image"
            content={`${withPrefix("/")}img/untitled-81.jpg`}
          />
        </Helmet>
        <Navbar />
        <div>{children}</div>
      </SimpleReactLightbox>
    </div>
  );
};

export default TemplateWrapper;
