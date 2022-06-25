import PropTypes from 'prop-types';
import Footer from '../Footer';
import './PageContent.scss';

const ComponentProps = {
    content: PropTypes.node,
    noBackground: PropTypes.bool,
    subHeading: PropTypes.string,
    title: PropTypes.string
};

const PageContent = props => {
    const { content, noBackground, subHeading, title } = props;

    const mainClass = noBackground ? null : 'main';

    return (
        <div className="container">
            <header className="header">
                <h1>{title}</h1>
                {subHeading && <h2>{subHeading}</h2>}
            </header>
            <main className={mainClass}>{content}</main>
            <footer className="footer">
                <Footer />
            </footer>
        </div>
    );
};

PageContent.propTypes = ComponentProps;

export default PageContent;
