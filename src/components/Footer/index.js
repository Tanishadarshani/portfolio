import Link from 'components/Link';
import './index.css';

const Footer = () => (
  <footer className="footer">
    <span className="footer__date">{`© 2017-${new Date().getFullYear()} `}</span>
    <Link
      secondary
      className="footer__link"
      href="https://instagram.com/tanishaadarshani_?igshid=1i6wxi2m0ij4h"
    >
      Tanisha Darshani
    </Link>
  </footer>
);

export default Footer;
