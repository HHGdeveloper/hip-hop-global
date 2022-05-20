import { useState, useEffect, useCallback, useRef } from "react";
import CurrentVideo from './CurrentVideo.js';
import { defaultData, oldestToNewestData, titleData, shortToLongData, longToShortData } from './videoData.js';
import './Videos.scss';

const msg = ['', 'No videos match your search criteria'];
const sortButtons = [
    {
        text: 'Most recent',
        data: defaultData
    }, {
        text: 'Oldest to newest',
        data: oldestToNewestData
    }, {
        text: 'Alphabetical by title',
        data: titleData
    }, {
        text: 'Shortest to longest',
        data: shortToLongData
    }, {
        text: 'Longest to shortest',
        data: longToShortData
    }
];

const Content = () => {
    const [currentData, setCurrentData] = useState(defaultData);
    const [currentVideo, setCurrentVideo] = useState(0);
    const [playerWidth, setPlayerWidth] = useState(null);
    const [playerHeight, setPlayerHeight] = useState(null);
    const [keywordsValue, setKeywordsValue] = useState('');
    const [active, setActive] = useState(0);
    const [message, setMessage] = useState(msg[0]);
    const playerRef = useRef();

    const getCurrentVideo = data =>
        data.map((video, index) => {
            if (video.url === currentData[currentVideo].url) {
                return index;
            }

            return 0;
        });

    const handleThumbClick = index => {
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
        setCurrentVideo(getCurrentVideo(data)[0]);
    };
    const handleKeywords = e => setKeywordsValue(e.target.value.toUpperCase());

    const filterVideos = () => {
        const keyword = keywordsValue.toUpperCase();
        const keywordData = [];
        const titleData = [];

        setMessage(msg[0]);
        setActive(-1);

        defaultData.map((data, index) => (
            data.keywords.map(key => {
                if (key === keyword) {
                    keywordData.push(defaultData[index]);
                }

                return null;
            })
        ));

        defaultData.map((data, index) => (
            data.title.toUpperCase().split(' ').map(key => {
                if (key === keyword) {
                    titleData.push(defaultData[index]);
                }

                return null;
            })
        ));

        if (!keywordData.length && !titleData.length) {
            setMessage(`${msg[1]} "${keyword}"`);

            return null;
        }

        const newData = keywordData.concat(titleData);

        for (let i = 0; i < newData.length; ++i) {
            for (let j = (i + 1); j < newData.length; ++j) {
                if(newData[i] === newData[j]) {
                    newData.splice(j--, 1);
                }
            
            }
        }

        setCurrentData(newData);
        setCurrentVideo(getCurrentVideo(newData)[0]);
        setKeywordsValue('');
    };

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
        <div className="videosWrapper">
            <div className="sortButtons">
                <div className="message">{message}</div>
                {renderSortButtons}
                <div className="keywordsWrapper">
                    <label htmlFor="keywords" id="label-keywords">Keywords</label>
                    <input id="keywords" type="text" value={keywordsValue} onChange={handleKeywords} />
                    <button className="btnSort active" onClick={filterVideos}>Find videos</button>
                </div>
            </div>
            <div className="videoLayout">
                <div className="playerWrapper">
                    <div className="player" ref={playerRef}>
                        <CurrentVideo controls height={playerHeight} url={currentData[currentVideo].url} width={playerWidth} />
                    </div>
                    <div className="titleWrapper">
                        <h2>{currentData[currentVideo].title}</h2>
                        <div className="time">{currentData[currentVideo].length.toString().replace('.', ':')}</div>
                    </div>
                    <div className="description">{currentData[currentVideo].description}</div>
                </div>
                <div className="thumbnails">
                    {renderThumbnails}
                </div>
            </div>
        </div>
    );
};

export default Content;
