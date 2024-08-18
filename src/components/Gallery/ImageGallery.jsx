import React from "react";
import PropTypes from "prop-types";

const ImageGallery = ({ images, loading }) => {
  const getColumnClass = (index) => {
    return "col-md-4";
  };

  return (
    <section className="section-padding">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="section-subtitle">Images</div>
            <div className="section-title">Classical Collection</div>
          </div>
          {loading ? (
            <div className="col-md-12 text-center">Loading...</div>
          ) : null}
          {!loading &&
            images.map((image, index) => (
              <div
                key={index}
                className={`${getColumnClass(index)} gallery-item`}
              >
                <a
                  href={image.src}
                  title={image.title || "Image"}
                  className="img-zoom"
                >
                  <div className="gallery-box">
                    <div className="gallery-img">
                      <img
                        src={image.src}
                        alt={image.alt || "Image could not be loaded"}
                        className="img-fluid mx-auto d-block rotate"
                      />
                    </div>
                  </div>
                </a>
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
