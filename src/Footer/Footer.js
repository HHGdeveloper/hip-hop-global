import './Footer.scss';

const year = new Date().getFullYear();

const Footer = () => (
    <footer className="footer">
        &copy;{year} Hip-Hop Global, LLC. All rights reserved.
    </footer>
);

export default Footer;
