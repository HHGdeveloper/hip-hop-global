import { useState, useEffect, useRef } from "react";
import ReactPlayer from 'react-player/lazy';
import './Videos.scss';

const Content = props => {
    const [width, setWidth] = useState(640);
    const [height, setHeight] = useState(360);
    const { url } = props;
    const ref = useRef(null);

    useEffect(() => {
        setWidth(ref.current.offsetWidth);
        setHeight(ref.current.offsetWidth * 9 / 16);
    }, []);

    return (
        <div className="center" ref={ref}>
            <ReactPlayer controls url={url} width={`${width}px`} height={`${height}px`} />
        </div>
    );
};

export default Content;
 