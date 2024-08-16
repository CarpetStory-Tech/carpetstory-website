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
        data-background="img/slider/3.jpg"
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

      {/* Video Gallery */}
      <section className="section-padding bg-cream">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="section-subtitle">Videos</div>
              <div className="section-title">Video Gallery</div>
            </div>
            {/* 2 columns */}
            <div className="col-md-6">
              <div className="vid-area mb-30">
                <div className="vid-icon">
                  {" "}
                  <img src="img/slider/2.jpg" alt="YouTube" />
                  <a
                    className="video-gallery-button vid"
                    href="https://youtu.be/xh4GnTKFQso"
                  >
                    {" "}
                    <span className="video-gallery-polygon">
                      <i className="ti-control-play"></i>
                    </span>{" "}
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="vid-area mb-30">
                <div className="vid-icon">
                  {" "}
                  <img src="img/slider/3.jpg" alt="Vimeo" />
                  <a
                    className="video-gallery-button vid"
                    href="https://youtu.be/xh4GnTKFQso"
                  >
                    {" "}
                    <span className="video-gallery-polygon">
                      <i className="ti-control-play"></i>
                    </span>{" "}
                  </a>
                </div>
              </div>
            </div>
            {/* 3 columns */}
            <div className="col-md-4">
              <div className="vid-area mb-30">
                <div className="vid-icon">
                  {" "}
                  <img src="img/slider/4.jpg" alt="YouTube" />
                  <a
                    className="video-gallery-button vid"
                    href="https://youtu.be/xh4GnTKFQso"
                  >
                    {" "}
                    <span className="video-gallery-polygon">
                      <i className="ti-control-play"></i>
                    </span>{" "}
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="vid-area mb-30">
                <div className="vid-icon">
                  {" "}
                  <img src="img/slider/7.jpg" alt="YouTube" />
                  <a
                    className="video-gallery-button vid"
                    href="https://youtu.be/xh4GnTKFQso"
                  >
                    {" "}
                    <span className="video-gallery-polygon">
                      <i className="ti-control-play"></i>
                    </span>{" "}
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="vid-area mb-30">
                <div className="vid-icon">
                  {" "}
                  <img src="img/slider/1.jpg" alt="YouTube" />
                  <a
                    className="video-gallery-button vid"
                    href="https://youtu.be/xh4GnTKFQso"
                  >
                    {" "}
                    <span className="video-gallery-polygon">
                      <i className="ti-control-play"></i>
                    </span>{" "}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Clients */}
      <section className="clients">
        <div className="container">
          <div className="row">
            <div className="col-md-7">
              <div className="owl-carousel owl-theme">
                <div className="clients-logo">
                  <a href="#0">
                    <img src="img/clients/1.png" alt="" />
                  </a>
                </div>
                <div className="clients-logo">
                  <a href="#0">
                    <img src="img/clients/2.png" alt="" />
                  </a>
                </div>
                <div className="clients-logo">
                  <a href="#0">
                    <img src="img/clients/3.png" alt="" />
                  </a>
                </div>
                <div className="clients-logo">
                  <a href="#0">
                    <img src="img/clients/4.png" alt="" />
                  </a>
                </div>
                <div className="clients-logo">
                  <a href="#0">
                    <img src="img/clients/5.png" alt="" />
                  </a>
                </div>
                <div className="clients-logo">
                  <a href="#0">
                    <img src="img/clients/6.png" alt="" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Gallery;
