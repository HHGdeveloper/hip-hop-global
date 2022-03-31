import PropTypes from 'prop-types';
import Footer from '../Footer';
import './PageContent.scss';

const ComponentProps = {
    content: PropTypes.node,
    title: PropTypes.string
};

const PageContent = props => {
    const { content, title } = props;

    return (
        <div className="container">
            <header className="header">
                <h1>{title}</h1>
            </header>
            <main className="main">{content}</main>
            <footer className="footer">
                <Footer />
            </footer>
        </div>
    );
};

PageContent.propTypes = ComponentProps;

export default PageContent;
