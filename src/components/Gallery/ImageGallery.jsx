import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

// const getColumnClass = (index) => {
//   const rowPattern = [3, 2]; // Pattern for alternating rows
//   let currentRow = 0;
//   let imagesInCurrentRow = 0;

//   // Determine which row we're in based on the index
//   for (let i = 0; i <= index; i++) {
//     if (imagesInCurrentRow < rowPattern[currentRow]) {
//       imagesInCurrentRow++;
//     } else {
//       currentRow = (currentRow + 1) % rowPattern.length;
//       imagesInCurrentRow = 1;
//     }
//   }

//   // First row: 3 images, normal size
//   if (currentRow === 0) {
//     return "col-md-4"; // 3 columns
//   }

//   // Second row: 2 images, larger size
//   if (currentRow === 1) {
//     return "col-md-6"; // 2 columns, larger size
//   }

//   // Fallback (shouldn't really be needed)
//   return "col-md-4";
// };

const ImageGallery = ({ images, loading }) => {
  const getColumnClass = (index) => {
    // if (index % 3 === 0) return "col-md-4"; // 3 columns
    // if (index % 2 === 0) return "col-md-6"; // 2 columns
    return "col-md-4"; // fallback
  };

  return (
    <section className="section-padding">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="section-subtitle">Images</div>
            <div className="section-title">Image Gallery</div>
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
