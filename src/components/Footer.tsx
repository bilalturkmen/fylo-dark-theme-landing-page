import Attribution from "./Attribution";

const FooterComp = () => {
  return (
    <div id="footer" className="footer">
      <div className="footer--logo">
        <a href="#" className="notLink">
          <img src="./images/logo.svg" alt="fylo logo" />
        </a>
      </div>
      <div className="footer--nav">
        <div className="address">
          <img src="./images/icon-location.svg" alt="" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua
          </p>
        </div>
        <div className="contact">
          <ul>
            <li>
              <img src="./images/icon-phone.svg" alt="" />
              <a href="#" aria-label="call us">
                +1-543-123-4567
              </a>
            </li>
            <li>
              <img src="./images/icon-email.svg" alt="email us" />
              <a href="#" aria-label="send email">
                example@fylo.com
              </a>
            </li>
          </ul>
        </div>
        <div className="submenu">
          <ul>
            <li>About Us</li>
            <li>Jobs</li>
            <li>Press</li>
            <li>Blog</li>
            <li>Contact Us</li>
            <li>Terms</li>
            <li>Privacy</li>
          </ul>
        </div>
        <div className="social">
          <a href="#" aria-label="follow us on facebook">
            <i aria-hidden="true" className="fab fa-facebook-f"></i>
          </a>
          <a href="#" aria-label="follow us on twitter">
            <i aria-hidden="true" className="fab fa-twitter"></i>
          </a>
          <a href="#" aria-label="follow us on instagram">
            <i aria-hidden="true" className="fab fa-instagram"></i>
          </a>
        </div>
      </div>

      <Attribution />
    </div>
  );
};

export default FooterComp;
