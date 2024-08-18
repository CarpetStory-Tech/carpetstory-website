import React from "react";
import PropTypes from "prop-types";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

const ImageGallery = ({ images, loading, collection }) => {
  return (
    <section className="section-padding">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="section-subtitle">CarpetStory</div>
            <div className="section-title">{collection}</div>
          </div>
          {loading ? (
            <div className="col-md-12 text-center">Loading...</div>
          ) : null}
          {!loading &&
            images.map((image, index) => (
              <div key={index} className={"col-md-4 gallery-item"}>
                <Zoom
                  zoomImg={{
                    alt: image.alt || "Image could not be loaded",
                    src: image.src,
                  }}
                  zoomMargin={45}
                  classDialog="zoom-class"
                >
                  <img
                    src={image.src}
                    alt={image.alt || "Image could not be loaded"}
                    className="img-fluid mx-auto d-block rotate"
                  />
                </Zoom>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string.isRequired,
      title: PropTypes.string,
      alt: PropTypes.string,
    })
  ).isRequired,
  loading: PropTypes.bool.isRequired,
};

export default ImageGallery;
