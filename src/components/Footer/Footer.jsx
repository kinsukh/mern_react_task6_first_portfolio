import "./footer.css";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container ">
        <h1 className="footer__title">Kinsukh</h1>
        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              About
            </a>
          </li>
          <li>
            <a href="#portfolio" className="footer__link">
              Projects
            </a>
          </li>
        </ul>

        <div className="footer__social">
          <a
            href="https://www.instagram.com/dragonkin03_?igsh=djI3ZHJoYnJ3ZXN4"
            className="footer__social-link"
            target="_blank"
            rel="noreferrer">
            <i className="bx bxl-instagram"></i>
          </a>
          <a
            href="https://twitter.com/KinsukhS"
            className="footer__social-link"
            target="_blank"
            rel="noreferrer">
            <i className="bx bxl-twitter"></i>
          </a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;