import './Artists.scss';
import cooperLogo from './assets/coopersholding-logo.jpg';
import rcooper from './assets/richardcooper.jpg';
import breadLogo from './assets/bread-logo.jpg';
import luxcash1 from './assets/luxcash1.png';
import luxcash2 from './assets/luxcash2.jpg';
import luxcash3 from './assets/luxcash3.jpg';


const Content = () => (
    <>
        <div className="artistsWrapper">
            <h2 className="heading h2">Richard Cooper</h2>
            <div className="intro">
                <p>Richard Cooper is the Founder & CEO of <a href="https://www.coopersholding.com" rel="noreferrer" target="_blank">CoopersHolding, LLC</a>.</p>
                <div><img alt="" src={cooperLogo} /></div>
            </div>
            <div className="imageWrapper">
                <img alt="" src={rcooper} />
                <p>Born in Detroit, MI but raised in Nashville, TN—Richard is able see culture differently, acting as a liaison between the many worlds of the industry.  He is constantly evolving to be as great as he can, often utilizing his experiences and relationships to maximize his potential.</p>
                <p>Richard is a jack-of-all-trades, but especially passionate about film and creative video. He sees things in ways that most don’t immediately recognize and applies it in his practice as a Director of Photography. Richard has worked with many companies including; The National Museum of African American Music, DJI , Superama, Amazon, and more. He owns a production company, Coopers Media Group, which provides commercials, music videos, photography and other creative media.</p>
            </div>
        </div>

        <div className="artistsWrapper">
            <h2 className="heading h2">Lux Cash</h2>
            <div className="intro">
                <p>Lux Cash is the founder and President of <a href="https://breadmultimedia.com" rel="noreferrer" target="_blank">B.R.E.A.D. Multi Media</a>.</p>
                <div><img alt="" src={breadLogo} /></div>
            </div>
            <div className="imageWrapper">
                <img alt="" src={luxcash1} />
                <p>Lux Cash, born Cameron Mitchell, is the founder and President of B.R.E.A.D. (Be Real Everyday And Deliver) Multi Media, home of B.R.E.A.D. Magazine and TV. He got his start in entertainment in the nineties when he started Black Love Entertainment, an independent record label where he and his partner Trivell “T-Dubb” Walker producer and developed various artists and groups.</p>
                <p>In 2001 Lux started working with long time music mentor Mark B. Spencer and Deja Johnson at Subliminal Entertainment. Subliminal Ent went on to sign a label deal with Virgin Records and released projects from artist Brooke Valentine and more.</p>
            </div>
            <div className="imageWrapperRight">
                <img alt="" src={luxcash2} />
                <p>A few years down the line, Lux linked up with Azim Lateef and started building as a manager and helped build Mics and Models. Lux helped manage various recording artists, models, actors, and reality stars. Some of the clients include Sereyah, Emily Mendoza (Millyanna), and Mookie Jones. Lux helped to produce events, music videos, tv shows, and movies.</p>
            </div>
            <div className="imageWrapper">
                <img alt="" src={luxcash3} />
                <p>Now Lux brings his talent, skills, and resources to Hip Hop Global Media, and looks forward to help building it into a great platform that will be around for a long time. Be real everyday and deliver.</p>
            </div>
            <div style={{ clear: 'both' }} />
        </div>
    </>
);

export default Content;
