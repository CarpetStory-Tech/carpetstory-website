function Home() {
  return (
    <div>
      {/* Progress scroll totop */}
      <div className="progress-wrap cursor-pointer">
        <svg
          className="progress-circle svg-content"
          width="100%"
          height="100%"
          viewBox="-1 -1 102 102"
        >
          <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
        </svg>
      </div>
      {/* Navbar */}
      <nav className="navbar navbar-expand-md">
        <div className="container">
          {/* Logo */}
          <div className="logo-wrapper navbar-brand valign">
            <a href="index.html">
              <div className="logo">
                <img src="img/logo.png" className="logo-img" alt="" />
              </div>
            </a>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbar"
            aria-controls="navbar"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            {" "}
            <span className="navbar-toggler-icon">
              <i className="ti-menu"></i>
            </span>{" "}
          </button>
          {/* Navbar links */}
          <div className="collapse navbar-collapse" id="navbar">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link" href="/about" data-scroll-nav="1">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/" data-scroll-nav="2">
                  Collections
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/contact" data-scroll-nav="3">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* Slider */}
      <header className="header slider-fade">
        <div className="owl-carousel owl-theme">
          {/* The opacity on the image is made with "data-overlay-dark="number". You can change it using the numbers 0-9. */}
          <div
            className="text-center item bg-img"
            data-overlay-dark="2"
            data-background="img/slider/10.png"
          >
            <div className="v-middle caption">
              <div className="container">
                <div className="row">
                  <div className="col-md-10 offset-md-1">
                    <h4>Crafting Luxury</h4>
                    <h1>Weaving Dreams</h1>
                    <div className="butn-light mt-30 mb-30">
                      {" "}
                      <a href="/collections" data-scroll-nav="2">
                        <span>Collections</span>
                      </a>{" "}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="text-center item bg-img"
            data-overlay-dark="2"
            data-background="img/slider/11.png"
          >
            <div className="v-middle caption">
              <div className="container">
                <div className="row">
                  <div className="col-md-10 offset-md-1">
                    <h4>Where Tradition Meets</h4>
                    <h1>Modern Sophistication</h1>
                    <div className="butn-light mt-30 mb-30">
                      {" "}
                      <a href="/collections" data-scroll-nav="2">
                        <span>Collections</span>
                      </a>{" "}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="text-center item bg-img"
            data-overlay-dark="3"
            data-background="img/slider/12.jpeg"
          >
            <div className="v-middle caption">
              <div className="container">
                <div className="row">
                  <div className="col-md-10 offset-md-1">
                    <h4>Experience</h4>
                    <h1>The Art of Fine Living</h1>
                    <div className="butn-light mt-30 mb-30">
                      {" "}
                      <a href="/collections" data-scroll-nav="2">
                        <span>Collections</span>
                      </a>{" "}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* slider reservation */}
        <div className="reservation">
          <a href="tel:6138831801">
            <div className="icon d-flex justify-content-center align-items-center">
              <i className="flaticon-call"></i>
            </div>
            <div className="call">
              <span>+1 (613) 883-1801</span> <br />
              Free Consultation
            </div>
          </a>
        </div>
      </header>
      {/* About */}
      <section className="about section-padding" data-scroll-index="1">
        <div className="container">
          <div className="row">
            <div
              className="col-md-6 mb-30 animate-box"
              data-animate-effect="fadeInUp"
            >
              <div className="section-subtitle">CarpetStory</div>
              <div className="section-title">Luxury Handmade Rugs</div>
              <p>
                We weave more than just carpets; we create handcrafted heirlooms
                that carry the essence of heritage and tradition. Founded on the
                principles of quality craftsmanship and timeless design, our
                journey began with a simple vision: to transform homes into
                sanctuaries of beauty and comfort.
              </p>
              <p>
                Choosing Carpet Story means investing in a piece of heritage, a
                symbol of quality and tradition. Join us in celebrating the art
                of handcrafted elegance. Discover the beauty, history, and
                craftsmanship woven into every carpet, and bring home a piece of
                our legacy.
              </p>
              {/* call */}
              <div className="reservations">
                <div className="icon">
                  <span className="flaticon-call"></span>
                </div>
                <div className="text">
                  <div className="call">
                    <span>+1 (613) 883-1801</span> <br />
                    Free Consultation
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col col-md-3 animate-box"
              data-animate-effect="fadeInUp"
            >
              <img src="img/weaving/1.png" alt="" className="mt-90 mb-30" />
            </div>
            <div
              className="col col-md-3 animate-box"
              data-animate-effect="fadeInUp"
            >
              <img src="img/weaving/2.png" alt="" />
            </div>
          </div>
        </div>
      </section>
      {/* Promo Video */}
      <section
        className="video-wrapper video section-padding bg-img bg-fixed"
        data-overlay-dark="3"
        data-background="img/slider/14.png"
      >
        <div className="container">
          <div className="row">
            <div className="col-md-8 offset-md-2 text-center">
              <div className="section-subtitle">
                <span>CarpetStory</span>
              </div>
              <div className="section-title">
                <span>Exhibition Coverage</span>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="text-center col-md-12">
              <a className="vid" href="https://youtu.be/WI80G3OpDrA">
                <div className="vid-butn">
                  <span className="icon">
                    <i className="ti-control-play"></i>
                  </span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* Collections */}
      <section className="section-padding" data-scroll-index="2">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="section-subtitle">CarpetStory</div>
              <div className="section-title">Collections</div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div
                className="rooms2 mb-90 animate-box"
                data-animate-effect="fadeInUp"
              >
                <figure>
                  <img src="img/carpets/1.png" alt="" className="img-fluid" />
                </figure>
                <div className="caption">
                  <h3>
                    24 <span>Designs</span>
                  </h3>
                  <h4>
                    <a href="room-details.html">Classical</a>
                  </h4>
                  <p>
                    An exquisite anthology of timeless patterns and rich
                    craftsmanship. Creating timeless heirlooms for the
                    discerning connoisseur.
                  </p>
                  <hr className="border-2" />
                  <div className="info-wrapper">
                    <div className="more">
                      <a href="/" className="link-btn" tabIndex="0">
                        Explore <i className="ti-arrow-right"></i>
                      </a>
                    </div>
                    <div className="butn-dark">
                      {" "}
                      <a href="/gallery">
                        <span>View All</span>
                      </a>{" "}
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="rooms2 mb-90 left animate-box"
                data-animate-effect="fadeInUp"
              >
                <figure>
                  <img src="img/carpets/2.png" alt="" className="img-fluid" />
                </figure>
                <div className="caption">
                  <h3>
                    11 <span>Design</span>
                  </h3>
                  <h4>
                    <a href="room-details.html">Modern</a>
                  </h4>
                  <p>
                    A visionary blend of sleek lines and vibrant creativity,
                    transforming modern living into a work of art.
                  </p>
                  <hr className="border-2" />
                  <div className="info-wrapper">
                    <div className="more">
                      <a href="/" className="link-btn" tabIndex="0">
                        Explore <i className="ti-arrow-right"></i>
                      </a>
                    </div>
                    <div className="butn-dark">
                      {" "}
                      <a href="/gallery">
                        <span>View All</span>
                      </a>{" "}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Testiominals */}
      <section className="testimonials">
        <div
          className="background bg-img bg-fixed section-padding pb-0"
          data-background="img/slider/12.JPG"
          data-overlay-dark="3"
        >
          <div className="container">
            <div className="row">
              <div className="col-md-8 offset-md-2">
                <div className="testimonials-box">
                  <div className="head-box">
                    <h6>Testimonials</h6>
                    <h4>What Client's Say?</h4>
                    <div className="line"></div>
                  </div>
                  <div className="owl-carousel owl-theme">
                    <div className="item">
                      <span className="quote">
                        <img src="img/quot.png" alt="" />
                      </span>
                      <p>
                        I can’t stop admiring my new carpet! The design is
                        exquisite, and it has brought a whole new level of
                        sophistication to my dining room. I’m already
                        considering another purchase for my bedroom. Truly a
                        stunning addition!
                      </p>
                      <div className="info">
                        <div className="author-img">
                          {" "}
                          <img src="img/team/4.jpg" alt="" />{" "}
                        </div>
                        <div className="cont">
                          {" "}
                          <span>
                            <i className="star-rating"></i>
                            <i className="star-rating"></i>
                            <i className="star-rating"></i>
                            <i className="star-rating"></i>
                            <i className="star-rating"></i>
                          </span>
                          <h6>Emily Brown</h6> <span>Guest review</span>
                        </div>
                      </div>
                    </div>
                    <div className="item">
                      <span className="quote">
                        <img src="img/quot.png" alt="" />
                      </span>
                      <p>
                        I was searching for a unique, high-quality carpet and
                        Carpet Story delivered beyond my expectations. The
                        colors are rich and the pattern is stunning. It’s clear
                        that great care and skill went into making this carpet.
                        Highly recommend!
                      </p>
                      <div className="info">
                        <div className="author-img">
                          {" "}
                          <img src="img/team/1.jpg" alt="" />{" "}
                        </div>
                        <div className="cont">
                          {" "}
                          <span>
                            <i className="star-rating"></i>
                            <i className="star-rating"></i>
                            <i className="star-rating"></i>
                            <i className="star-rating"></i>
                            <i className="star-rating"></i>
                          </span>
                          <h6>Nolan White</h6> <span>Guest review</span>
                        </div>
                      </div>
                    </div>
                    <div className="item">
                      <span className="quote">
                        <img src="img/quot.png" alt="" />
                      </span>
                      <p>
                        Finding a carpet that combines quality, beauty, and
                        value can be tough, but Carpet Story nailed it. The
                        material feels durable yet soft underfoot, and the
                        design is just gorgeous. It has elevated the entire look
                        of my home.
                      </p>
                      <div className="info">
                        <div className="author-img">
                          {" "}
                          <img src="img/team/5.jpg" alt="" />{" "}
                        </div>
                        <div className="cont">
                          {" "}
                          <span>
                            <i className="star-rating"></i>
                            <i className="star-rating"></i>
                            <i className="star-rating"></i>
                            <i className="star-rating"></i>
                            <i className="star-rating"></i>
                          </span>
                          <h6>Olivia Martin</h6> <span>Guest review</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Contact */}
      <section className="contact section-padding" data-scroll-index="3">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h3>CarpetStory</h3>
              <p>Wall the path of richness...</p>
              <div className="reservations mb-30">
                <div className="icon">
                  <span className="flaticon-call"></span>
                </div>
                <div className="text">
                  <p>Free Consultation</p>{" "}
                  <a href="tel:855-100-4444">+1 (613) 883-1801</a>
                </div>
              </div>
              <div className="reservations mb-30">
                <div className="icon">
                  <span className="flaticon-envelope"></span>
                </div>
                <div className="text">
                  <p>Email Info</p>{" "}
                  <a href="mailto:info@carpetstory.co">info@carpetstory.co</a>
                </div>
              </div>
              <div className="reservations">
                <div className="icon">
                  <span className="flaticon-location-pin"></span>
                </div>
                <div className="text">
                  <p>Address</p> Excusive Store Coming Soon
                  <br />
                  Canada
                </div>
              </div>
            </div>
            <div className="col-md-5 mb-30 offset-md-1">
              <h3>Get in touch</h3>
              <form
                method="post"
                className="contact__form"
                action="https://duruthemes.com/demo/html/cappa/demo2-light/mail.php"
              >
                {/* form message */}
                <div className="row">
                  <div className="col-12">
                    <div
                      className="alert alert-success contact__msg"
                      style={{ display: "none" }}
                      role="alert"
                    >
                      {" "}
                      Your message was sent successfully.{" "}
                    </div>
                  </div>
                </div>
                {/* form elements */}
                <div className="row">
                  <div className="col-md-6 form-group">
                    <input
                      name="name"
                      type="text"
                      placeholder="Your Name *"
                      required
                    />
                  </div>
                  <div className="col-md-6 form-group">
                    <input
                      name="email"
                      type="email"
                      placeholder="Your Email *"
                      required
                    />
                  </div>
                  <div className="col-md-6 form-group">
                    <input
                      name="phone"
                      type="text"
                      placeholder="Your Number *"
                      required
                    />
                  </div>
                  <div className="col-md-6 form-group">
                    <input
                      name="subject"
                      type="text"
                      placeholder="Subject *"
                      required
                    />
                  </div>
                  <div className="col-md-12 form-group">
                    <textarea
                      name="message"
                      id="message"
                      cols="30"
                      rows="4"
                      placeholder="Message *"
                      required
                    ></textarea>
                  </div>
                  <div className="col-md-12">
                    <button type="submit" className="butn-dark2">
                      <span>Send Message</span>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer className="footer">
        <div className="footer-top">
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <div className="footer-column footer-about">
                  <h3 className="footer-title">CarpetStory</h3>
                  <p className="footer-about-text">
                    Weaving stories of craftsmanship and heritage since 2005.
                  </p>

                  <div className="footer-language">
                    {" "}
                    <i className="lni ti-world"></i>
                    <select
                      onChange={(e) => {
                        window.location.href = e.target.value;
                      }}
                    >
                      <option value="#0">English</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="col-md-3 offset-md-1">
                <div className="footer-column footer-explore clearfix">
                  <h3 className="footer-title">Explore</h3>
                  <ul className="footer-explore-list list-unstyled">
                    <li>
                      <a href="/">Home</a>
                    </li>
                    <li>
                      <a href="/collections" data-scroll-nav="1">
                        Collections
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-4">
                <div className="footer-column footer-contact">
                  <h3 className="footer-title">Contact</h3>
                  <p className="footer-contact-text">
                    Exclusive Store Coming Soon
                    <br />
                    Canada
                  </p>
                  <div className="footer-contact-info">
                    <p className="footer-contact-phone">
                      <span className="flaticon-call"></span>+1 (613) 883-1801
                    </p>
                    <p className="footer-contact-mail">info@carpetstory.co</p>
                  </div>
                  <div className="footer-about-social-list">
                    <a href="https://www.instagram.com/carpetstory/">
                      <i className="ti-instagram"></i>
                    </a>
                    {/* <a href="/"><i className="ti-facebook"></i></a>
                                <a href="/"><i className="ti-pinterest"></i></a> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;
