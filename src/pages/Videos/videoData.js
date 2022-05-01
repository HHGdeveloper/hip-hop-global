import _ from 'lodash';

const videoData = [
    {
        url: 'https://player.vimeo.com/video/684347399',
        thumbnail: 'RBEGlobalProducersDen',
        title: 'RBE Global Producers Den',
        date: '2022.04.01',
        length: 0.42,
        description: '',
        keywords: ['urban', 'movie', 'productions']
    }, {
        url: 'https://player.vimeo.com/video/688016509',
        thumbnail: 'HipHopAsia',
        title: 'Hip Hop Asia',
        date: '2022.03.01',
        length: 8.39,
        description: '',
        keywords: ['Asia', 'music', 'other']
    }, {
        url: 'https://player.vimeo.com/video/687289852',
        thumbnail: 'BREADTVPromo',
        title: 'B.R.E.A.D TV Promo',
        date: '2022.02.01',
        length: 35.02,
        description: '',
        keywords: ['TV', 'show', 'breadxpress']
    }, {
        url: 'https://player.vimeo.com/video/687959396',
        thumbnail: 'Gee-BeeProductionsDemoReel',
        title: 'Gee-Bee Productions Demo Reel',
        date: '2022.01.01',
        length: 4.14,
        description: '',
        keywords: ['film', 'music videos', 'video production', 'demo reel', 'movie', 'productions']
    }
    // , {
    //     url: 'https://player.vimeo.com/video/681017280',
    //     thumbnail: './assets/HipHopAfrica.png',
    //     title: 'Hip Hop Africa',
    //     date: '',
    //     length: '',
    //     description: '',
    //     keywords: ['', '', '']
    // }
];

const defaultData = _.orderBy(videoData, ['date'], ['desc']);
const oldestToNewestData = _.orderBy(videoData, ['date'], ['asc']);
const titleData = _.orderBy(videoData, ['title'], ['asc']);
const shortToLongData = _.orderBy(videoData, ['length'], ['asc']);
const longToShortData = _.orderBy(videoData, ['length'], ['desc']);

// console.log(longToShortData);

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

export { defaultData, oldestToNewestData, titleData, shortToLongData, longToShortData, sortButtons };
