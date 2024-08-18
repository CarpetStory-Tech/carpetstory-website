import { useEffect, useState } from "react";
import ImageGallery from "../components/Gallery/ImageGallery";

function Gallery() {
  const [imageCollection, setImageCollection] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchImageCollection = async () => {
    try {
      setLoading(true);
      const response = await fetch(process.env.REACT_APP_GOOGLE_DRIVE_API_URL);
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
        data-background="img/gallery/classical-collection-bg.png"
      >
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-left caption mt-90">
              <h5>Images & Videos</h5>
              <h1>Our Gallery</h1>
            </div>
          </div>
        </div>
      </div>
      <ImageGallery images={imageCollection} loading={loading} />
    </div>
  );
}

export default Gallery;
