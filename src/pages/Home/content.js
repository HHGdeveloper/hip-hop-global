import './Home.scss';
import image1 from './assets/image1.png';
import image2 from './assets/image2.png';
import image3 from './assets/image3.png';
import image4 from './assets/image4.png';

export const content = (
    <>
        <img alt="" src={image1} />
        <p className="content">Hip-Hop Global is a company based in NYC creating a world-wide community of musicians, artists, designers, film makers, producers, and others who are making a supportive environment to promote hip-hop as a lifestyle—a culture—that transcends traditional borders, languages, and overcomes discrimination.</p>
        <img alt="" src={image2} />
        <p className="content">Through music, images, videos, and the internet, we hope to promote the independent artist and their events.</p>
        <p className="content">We are a channel representing the culture of todays hip-hop community—its music, art, food, fashion, films—the hip-hop lifestyle.</p>
        <img alt="" src={image3} />
        <h2 className="heading">Join us</h2>
        <p className="content"><a href="/videos">Watch the videos of</a> our musicians and artists and see some highlights from our events.</p>
        <p className="content"><a href="/artists">Read about the artists</a> we support and promote as they work towards making a career and building a community.</p>
        <p className="content">Support our global neighborhood of artists by <a href="/shop">shopping</a> at our exclusive hip-hop shop.</p>
        <p className="content"><a href="/contact">Tell us what you think</a> about hip-hop, about the music, the website, all of it. <a href="/contact">Upload a video</a> and maybe it will be featured on the site.</p>
        <img alt="" className="bottomImage" src={image4} />
    </>
);
