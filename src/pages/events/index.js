import React from "react";
import { graphql, StaticQuery } from "gatsby";
import GalleryPreview from "../../components/GalleryPreview";
import Layout from "../../components/Layout";

export default () => (
  <StaticQuery
    query={graphql`
      query EventsPageQuery {
        allMarkdownRemark(
          filter: {
            fileAbsolutePath: { regex: "/pages/events/" }
            frontmatter: { templateKey: { eq: "gallery-page" } }
          }
        ) {
          edges {
            node {
              excerpt(pruneLength: 400)
              id
              fields {
                slug
              }
              frontmatter {
                title
                previewImage {
                  childImageSharp {
                    fluid(maxWidth: 300, quality: 100) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={(data, count) => (
      <Layout>
        <GalleryPreview data={data} count={count} />
      </Layout>
    )}
  />
);
