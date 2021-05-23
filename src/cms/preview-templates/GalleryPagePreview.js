import React from "react";
import PropTypes from "prop-types";
import { GalleryPageTemplate } from "../../templates/gallery-page";

const GalleryPagePreview = ({ entry }) => {
  const entryImages = entry.getIn(["data", "images"]);
  const images = entryImages ? entryImages.toJS() : [];
  return (
    <GalleryPageTemplate
      images={images}
      title={entry.getIn(["data", "title"])}
    />
  );
};

GalleryPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
};

export default GalleryPagePreview;
