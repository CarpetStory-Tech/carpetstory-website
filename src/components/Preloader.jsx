import React, { useState, useEffect } from "react";

const Preloader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time and fade out preloader
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); // Matches the fade out duration

    // Cleanup the timer
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading && (
        <>
          <div className="preloader-bg"></div>
          <div id="preloader">
            <div id="preloader-status">
              <div className="preloader-position loader">
                <span></span>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Preloader;
