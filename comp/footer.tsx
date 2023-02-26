import React from "react";

function Footer() {
  return (
    <footer className="footer bg-light">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h4>About Us</h4>
            <p>We are a company dedicated to providing high-quality products and services to our customers.</p>
          </div>
          <div className="col-md-6">
            <h4>Contact Us</h4>
            <ul className="list-unstyled">
              <li>123 Main St</li>
              <li>Anytown, USA 12345</li>
              <li>Phone: (123) 456-7890</li>
              <li>Email: info@example.com</li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <hr />
            <p className="text-center">Copyright © 2023 ChatGPT.
              All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
