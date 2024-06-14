import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer id="Footer" className="footer-container">
      <div className="container">
        <div className="d-flex justify-content-between">
          <div className="copyright">
            © Copyright <strong>Akeshya</strong>
          </div>

          <div>
            <ul className="d-flex list-unstyled">
              <li className="px-3">
                <a href="./Terms_and_conditions.pdf">Terms and conditions</a>
              </li>

              <li className="px-3">
                <a href="./Refund_policy.pdf">Refund policy</a>
              </li>

              <li className="px-3">
                <a href="./Terms_and_conditions.pdf">Privacy policy</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
