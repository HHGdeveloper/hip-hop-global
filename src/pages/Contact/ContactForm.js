import './Contact.scss';
import emailImg from './assets/email.png';
// import videoImg from './assets/video.png';

const ContactForm = () => {
    return (
        <div className="contactWrapper">
            <h2>Send us an email</h2>
            <div className="emailWrapper">
                <div className="flexItem">
                    <p>Drop us a line and tell us what you're thinking about. What's your favorite video? Have you been to a great hip hop event recently? Tell us where you live and what kinds of events you would like to see there.</p>
                    <p>You can email us at <a href="mailto:hiphopglobalcontact@gmail.com">HipHopGlobalContact@gmail.com</a>.</p>
                </div>
                <div className="imageWrapper">
                    <img alt="" src={emailImg} />
                </div>
            </div>
            {/*<h2>Submit a video</h2>
            <div className="videoWrapper">
                <div className="imageWrapper">
                    <img alt="" src={videoImg} />
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>*/}
        </div>
    );
};

export default ContactForm;
