import { useState, useEffect, useCallback, useRef } from "react";
import CurrentVideo from './CurrentVideo.js';
import { defaultData, oldestToNewestData, titleData, shortToLongData, longToShortData, sortButtons } from './videoData.js';
import './Videos.scss';

const msg = ['', 'No videos match your search criteria'];

const Content = () => {
    const [currentData, setCurrentData] = useState(defaultData);
    const [playerWidth, setPlayerWidth] = useState(null);
    const [playerHeight, setPlayerHeight] = useState(null);
    const [playerURL, setPlayerURL] = useState(currentData[0].url);
    const [currentVideo, setCurrentVideo] = useState(0);
    const [keywordsValue, setKeywordsValue] = useState('');
    const [active, setActive] = useState(0);
    const [message, setMessage] = useState(msg[0]);
    const playerRef = useRef();

    const handleThumbClick = index => {
        setPlayerURL(currentData[index].url);
        setCurrentVideo(index);
        setMessage(msg[0]);
    };
    const handleSort = (data, isActive, e) => {
        if (e.target.classList.contains('active')) {
            return null;
        }

        setKeywordsValue('')
        setMessage(msg[0]);
        setActive(isActive);
        setCurrentData(data);
        data.map((video, index) => {
            if (video.url === playerURL) {
                setCurrentVideo(index);
            }
        });
    };
    const handleKeywords = e => setKeywordsValue(e.target.value);

    const filterVideos = () => {
        const keywordFilter = 'keywords';
        const titleFilter = 'title';
        const keyword = keywordsValue.toLowerCase();
        const keywordData = [];
        const titleData = [];

        setMessage(msg[0]);

        currentData.map((data, index) => (
            data.keywords.map(key => {
                if (key === keyword) {
                    keywordData.push(currentData[index]);
                }
            })
        ));

        currentData.map((data, index) => (
            data.title.toLowerCase().split(' ').map(key => {
                if (key === keyword) {
                    titleData.push(currentData[index]);
                }
            })
        ));

        if (!keywordData.length && !titleData.length) {
            setMessage(msg[1]);
        }

        if (!keywordData.length && titleData.length) {
            setCurrentData(titleData);
        }

        if (!titleData.length && keywordData.length) {
            setCurrentData(keywordData);
        }

        if (keywordData.length && titleData.length) {
            const newData = keywordData.concat(titleData);

            for (let i = 0; i < newData.length; ++i) {
                for (let j = (i + 1); j < newData.length; ++j) {
                    if(newData[i] === newData[j]) {
                        newData.splice(j--, 1);
                    }
                
                }
            }

            setCurrentData(newData);
        }
    }

    const renderThumbnails =
        currentData.map((video, index) => {
            const displayLength = video.length.toString().replace('.', ':');

            if (index !== currentVideo) {
                return (
                    <button className="thumbnail" key={index} onClick={() => handleThumbClick(index)}>
                        <img alt="" src={require(`./thumbnails/${video.thumbnail}.png`)} />
                        <div className="time">{displayLength}</div>
                        <div className="title">{video.title}</div>
                    </button>
                );
            }

            return null;
        });

    const renderSortButtons =
        sortButtons.map((button, index) => {
            const cls = index === active ? 'btnSort active' : 'btnSort';

            return <button className={cls} key={index} onClick={(e) => handleSort(button.data, index, e)}>{button.text}</button>
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
        <>
            <div className="sortButtons">
                {renderSortButtons}
                <div className="keywordsWrapper">
                    <div className="message">{message}</div>
                    <label htmlFor="keywords" id="label-keywords">Keywords</label>
                    <input id="keywords" type="text" value={keywordsValue} onChange={handleKeywords} />
                    <button className="btnSort active" onClick={filterVideos}>Find videos</button>
                </div>
            </div>
            <div className="videoLayout">
                <div className="playerWrapper">
                    <div className="player" ref={playerRef}>
                        <CurrentVideo controls height={playerHeight} url={playerURL} width={playerWidth} />
                    </div>
                    <h2>{currentData[currentVideo].title}</h2>
                    <div className="time">{currentData[currentVideo].length.toString().replace('.', ':')}</div>
                </div>
                <div className="thumbnails">
                    {renderThumbnails}
                </div>
            </div>
        </>
    );
};

export default Content;
