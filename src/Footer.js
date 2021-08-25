import React from "react";

const Footer = () => {
  return (
    <footer className="page-footer fixed-bottom font-small blue pt-4">
      <div className="footer-copyright text-center py-3 h5 font-weight-bold">
        © 2021 Copyright
      </div>
      <div className="container">
        <a className="btn" href="https://github.com/rkganeshan">
          <i className="fab fa-github h3"></i>
        </a>
        <a className="btn" href="https://www.linkedin.com/in/rkganeshan">
          <i className="fab fa-linkedin h3"></i>
        </a>
        <a className="btn" href="https://github.com/rkganeshan">
          <i className="fab fa-facebook h3"></i>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
