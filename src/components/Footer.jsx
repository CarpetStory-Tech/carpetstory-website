function Footer() {
  return (
    <>
      {/* Footer */}
      <footer className="footer">
        <div className="footer-top">
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <div className="footer-column footer-about">
                  <h3 className="footer-title">About Hotel</h3>
                  <p className="footer-about-text">
                    Welcome to the best five-star deluxe hotel in New York.
                    Hotel elementum sesue the aucan vestibulum aliquam justo in
                    sapien rutrum volutpat.
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
                      <option value="#0">German</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="col-md-3 offset-md-1">
                <div className="footer-column footer-explore clearfix">
                  <h3 className="footer-title">Explore</h3>
                  <ul className="footer-explore-list list-unstyled">
                    <li>
                      <a href="index.html">Home</a>
                    </li>
                    <li>
                      <a href="rooms.html">Rooms & Suites</a>
                    </li>
                    <li>
                      <a href="restaurant.html">Restaurant</a>
                    </li>
                    <li>
                      <a href="spa-wellness.html">Spa & Wellness</a>
                    </li>
                    <li>
                      <a href="about.html">About Hotel</a>
                    </li>
                    <li>
                      <a href="contact.html">Contact</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-4">
                <div className="footer-column footer-contact">
                  <h3 className="footer-title">Contact</h3>
                  <p className="footer-contact-text">
                    1616 Broadway NY, New York 10001
                    <br />
                    United States of America
                  </p>
                  <div className="footer-contact-info">
                    <p className="footer-contact-phone">
                      <span className="flaticon-call"></span> 855 100 4444
                    </p>
                    <p className="footer-contact-mail">info@luxuryhotel.com</p>
                  </div>
                  <div className="footer-about-social-list">
                    <a href="/">
                      <i className="ti-instagram"></i>
                    </a>
                    <a href="/">
                      <i className="ti-twitter"></i>
                    </a>
                    <a href="/">
                      <i className="ti-youtube"></i>
                    </a>
                    <a href="/">
                      <i className="ti-facebook"></i>
                    </a>
                    <a href="/">
                      <i className="ti-pinterest"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="footer-bottom-inner">
                  <p className="footer-bottom-copy-right">
                    © Copyright 2022 by <a href="/">DuruThemes.com</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
