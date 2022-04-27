import { useState, useEffect, useCallback, useRef } from "react";
import CurrentVideo from './CurrentVideo.js';
import { videoData } from './videoData.js';
import './Videos.scss';

const Content = () => {
    const [playerWidth, setPlayerWidth] = useState(null);
    const [playerHeight, setPlayerHeight] = useState(null);
    const [playerURL, setPlayerURL] = useState(videoData[0].url);
    const [currentVideo, setCurrentVideo] = useState(0);
    const playerRef = useRef();

    const handleThumbClick = index => {
        setPlayerURL(videoData[index].url);
        setCurrentVideo(index);
    };

    const renderThumbnails =
        videoData.map((video, index) => {
            if (index !== currentVideo) {
                return (
                    <button className="thumbnail" key={index} onClick={() => handleThumbClick(index)}>
                        <img alt="" src={require(`./assets/${video.thumbnail}.png`)} />
                        <div className="time">{video.length}</div>
                        <div className="title">{video.title}</div>
                    </button>
                );
            }

            return null;
        });

    const getPlayerWidth = useCallback(() => {
        if (playerRef.current) {
            setPlayerWidth(Math.round(playerRef.current.getBoundingClientRect().width) + 'px');
        }
    }, []);
    const getPlayerHeight = useCallback(() => {
        if (playerRef.current) {
            setPlayerHeight((Math.round(playerRef.current.getBoundingClientRect().width) * 9 / 16) + 'px');
        }
    }, []);

    useEffect(getPlayerWidth, [playerWidth, getPlayerWidth]);
    useEffect(getPlayerHeight, [playerHeight, getPlayerHeight]);

    useEffect(() => {
        window.addEventListener('resize', getPlayerWidth);

        return () => {
            window.removeEventListener('resize', getPlayerWidth);
        };
    }, [getPlayerWidth]);
    useEffect(() => {
        window.addEventListener('resize', getPlayerHeight);

        return () => {
            window.removeEventListener('resize', getPlayerHeight);
        };
    }, [getPlayerHeight]);

    return (
        <div className="videoLayout">
            <div className="playerWrapper">
                <div className="player" ref={playerRef}>
                    <CurrentVideo controls height={playerHeight} url={playerURL} width={playerWidth} />
                </div>
                <h2>{videoData[currentVideo].title}</h2>
                <div className="time">{videoData[currentVideo].length}</div>
            </div>
            <div className="thumbnails">
                {renderThumbnails}
            </div>
        </div>
    );
};

export default Content;
