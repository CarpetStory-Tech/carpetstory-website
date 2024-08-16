function Header() {
  return (
    <>
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
            <a href="/">
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
                <a className="nav-link" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/about">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/gallery">
                  Gallery
                </a>
              </li>
              {/* <li className="nav-item dropdown">
                {" "}
                <span className="nav-link">
                  {" "}
                  Rooms & Suites <i className="ti-angle-down"></i>
                </span>
                <ul className="dropdown-menu last">
                  <li className="dropdown-item">
                    <a href="rooms.html">Rooms 1</a>
                  </li>
                  <li className="dropdown-item">
                    <a href="rooms2.html">Rooms 2</a>
                  </li>
                  <li className="dropdown-item">
                    <a href="rooms3.html">Rooms 3</a>
                  </li>
                  <li className="dropdown-item">
                    <a href="room-details.html">Room Details</a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="restaurant.html">
                  Restaurant
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="spa-wellness.html">
                  Spa
                </a>
              </li>
              <li className="nav-item dropdown">
                {" "}
                <span className="nav-link active">
                  {" "}
                  Pages <i className="ti-angle-down"></i>
                </span>
                <ul className="dropdown-menu last">
                  <li className="dropdown-item">
                    <a href="services.html">Services</a>
                  </li>
                  <li className="dropdown-item">
                    <a href="facilities.html">Facilites</a>
                  </li>
                  <li className="dropdown-item active">
                    <a href="gallery.html">Gallery</a>
                  </li>
                  <li className="dropdown-item">
                    <a href="team.html">Team</a>
                  </li>
                  <li className="dropdown-item">
                    <a href="pricing.html">Pricing</a>
                  </li>
                  <li className="dropdown-item">
                    <a href="careers.html">Careers</a>
                  </li>
                  <li className="dropdown-item">
                    <a href="faq.html">F.A.Qs</a>
                  </li>
                  <li className="dropdown-item">
                    <a href="404.html">404</a>
                  </li>
                  <li className="dropdown-item">
                    <a href="coming-soon.html">Coming Soon</a>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                {" "}
                <span className="nav-link">
                  {" "}
                  News <i className="ti-angle-down"></i>
                </span>
                <ul className="dropdown-menu last">
                  <li className="dropdown-item">
                    <a href="news.html">News 1</a>
                  </li>
                  <li className="dropdown-item">
                    <a href="news2.html">News 2</a>
                  </li>
                  <li className="dropdown-item">
                    <a href="post.html">Single Post</a>
                  </li>
                </ul>
              </li> */}
              <li className="nav-item">
                <a className="nav-link" href="/contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
