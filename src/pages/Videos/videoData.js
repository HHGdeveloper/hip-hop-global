import _ from 'lodash';

const videoData = [
    {
        url: 'https://player.vimeo.com/video/684347399',
        thumbnail: 'RBEGlobalProducersDen',
        title: 'RBE Global Producers Den',
        date: '2022.04.01',
        length: 0.42,
        description: 'This is some kind of description for the Producer Den with the "I gotta bag on it" song',
        keywords: ['urban', 'movie', 'productions']
    }, {
        url: 'https://player.vimeo.com/video/688016509',
        thumbnail: 'HipHopAsia',
        title: 'Hip Hop Asia',
        date: '2022.03.01',
        length: 8.39,
        description: 'Hip-Hop Asia is something like what countries are we talking about here? Korea? India? Where is the hip hop culture?',
        keywords: ['asia', 'music', 'other']
    }, {
        url: 'https://player.vimeo.com/video/687289852',
        thumbnail: 'BREADTVPromo',
        title: 'B.R.E.A.D TV Promo',
        date: '2022.02.01',
        length: 35.02,
        description: 'This is a full half-hour TV show that needs a real description',
        keywords: ['TV', 'show', 'breadxpress']
    }, {
        url: 'https://player.vimeo.com/video/687959396',
        thumbnail: 'Gee-BeeProductionsDemoReel',
        title: 'Gee-Bee Productions Demo Reel',
        date: '2022.01.01',
        length: 4.14,
        description: 'Demo reel for Gee-Bee Productions, a production company by creative director Gerald K. Barclay',
        keywords: ['film', 'music videos', 'video production', 'demo reel', 'movie', 'productions']
    }
    //     url: 'https://player.vimeo.com/video/681017280', NOT WORKING
    //     thumbnail: './assets/HipHopAfrica.png',
];

const defaultData = _.orderBy(videoData, ['date'], ['desc']);
const oldestToNewestData = _.orderBy(videoData, ['date'], ['asc']);
const titleData = _.orderBy(videoData, ['title'], ['asc']);
const shortToLongData = _.orderBy(videoData, ['length'], ['asc']);
const longToShortData = _.orderBy(videoData, ['length'], ['desc']);

export { defaultData, oldestToNewestData, titleData, shortToLongData, longToShortData };
