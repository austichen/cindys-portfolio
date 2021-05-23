import React, { useState } from "react";
import PropTypes from "prop-types";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { SRLWrapper } from "simple-react-lightbox";

const PhotoCarousel = ({ images }) => {
  const [loadedImages, setLoadedImages] = useState({});
  const updateLoadedImages = (i) => {
    setLoadedImages({ ...loadedImages, [i]: true });
  };

  return (
    <SRLWrapper>
      <Splide
        options={{
          autoWidth: true,
          rewind: true,
          gap: "10px",
          pagination: false,
        }}
      >
        {images.map(({ image }, i) => (
          <SplideSlide>
            <a
              href={
                !!image.childImageSharp
                  ? image.childImageSharp.fluid.src
                  : image
              }
            >
              <img
                style={{
                  maxHeight: "70vh",
                  maxWidth: "100vw",
                  height: loadedImages[String(i)] ? "auto" : "70vh",
                  width: loadedImages[String(i)] ? "auto" : "680px",
                  visibility: loadedImages[String(i)] ? "visible" : "hidden",
                }}
                src={
                  !!image.childImageSharp
                    ? image.childImageSharp.fluid.src
                    : image
                }
                key={i}
                onLoad={() => updateLoadedImages(String(i))}
              />
            </a>
          </SplideSlide>
        ))}
      </Splide>
    </SRLWrapper>
  );
};

PhotoCarousel.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.object, PropTypes.string])
  ),
};

export default PhotoCarousel;
