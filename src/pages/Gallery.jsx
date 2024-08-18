import { useEffect, useState } from "react";
import ImageGallery from "../components/Gallery/ImageGallery";
import { GalleryCollections } from "../components/Gallery/util";
import { useLocation } from "react-router-dom";

function Gallery() {
  const [imageCollection, setImageCollection] = useState([]);
  const [loading, setLoading] = useState(false);

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const collectionType = queryParams.get("collection");

  const isModernCollection = GalleryCollections.Modern === collectionType;
  console.log(collectionType);

  const fetchImageCollection = async () => {
    try {
      setLoading(true);
      const url = isModernCollection
        ? process.env.REACT_APP_GOOGLE_DRIVE_API_MODERN_URL
        : process.env.REACT_APP_GOOGLE_DRIVE_API_CLASSICAL_URL;
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();

      const imageCollection = data.map((item, index) => {
        const imageNumber = index + 1;
        return {
          src: item.url,
          title: `Image ${imageNumber}`,
          alt: `work-img-${imageNumber}`,
        };
      });

      return imageCollection;
    } catch (error) {
      console.error("Failed to fetch image collection:", error);
      return [];
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchImageCollection().then((imageCollection) => {
      console.log("imageCollection", imageCollection);
      setImageCollection(imageCollection);
    });
  }, []);

  return (
    <div>
      {/* Header Banner */}
      <div
        className="banner-header section-padding valign bg-img bg-fixed"
        data-overlay-dark="4"
        data-background={
          isModernCollection
            ? "img/gallery/modern-gallery-bg.jpg"
            : "img/gallery/classical-collection-bg.png"
        }
      >
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-left caption mt-90">
              <h5>Images</h5>
              <h1>Our Gallery</h1>
            </div>
          </div>
        </div>
      </div>
      <ImageGallery
        images={imageCollection}
        loading={loading}
        collection={
          isModernCollection ? "Modern Collection" : "Classical Collection"
        }
      />
    </div>
  );
}

export default Gallery;
