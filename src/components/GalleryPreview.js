import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import PreviewCompatibleImage from "./PreviewCompatibleImage";

const GalleryPreview = ({ data }) => {
  const { edges: posts } = data.allMarkdownRemark;

  return (
    <div className="section">
      <div className="container">
        <div className="columns is-multiline">
          {posts &&
            posts.map(({ node: post }) => (
              <div
                className="is-parent column is-one-third-tablet is-one-third-desktop is-one-quarter-widescreen is-one-quarter-fullhd"
                key={post.id}
              >
                <div className="card">
                  <Link to={post.fields.slug}>
                    <div className="card-image">
                      {post.frontmatter.previewImage ? (
                        <div className="featured-thumbnail">
                          <PreviewCompatibleImage
                            imageInfo={{
                              image: post.frontmatter.previewImage,
                              alt: `featured image thumbnail for post ${post.frontmatter.title}`,
                            }}
                          />
                        </div>
                      ) : null}
                    </div>
                    <div className="card-content">
                      <p className="title is-4">
                        {post.frontmatter.title.toUpperCase()}
                      </p>
                    </div>
                  </Link>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

GalleryPreview.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
};

export default GalleryPreview;
