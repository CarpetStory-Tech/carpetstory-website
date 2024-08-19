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
                      <a href="/collections" data-scroll-nav="2">
                        {/* todo-sagar */}
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
                    <p className="footer-contact-mail"><a href="mailto:info@carpetstory.co">info@carpetstory.co</a></p>
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
    </>
  );
}

export default Footer;
