import PropTypes from 'prop-types';
import ReactPlayer from 'react-player/lazy';

const ComponentProps = {
    height: PropTypes.string,
    width: PropTypes.string,
    url: PropTypes.string
};


const CurrentVideo = props => <ReactPlayer controls height={props.height} url={props.url} width={props.width} />;

CurrentVideo.propTypes = ComponentProps;

export default CurrentVideo;
