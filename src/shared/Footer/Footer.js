import React from 'react';

import './Footer.css';

import Fb from '../../assets/fb-icon.svg';
import Ig from '../../assets/ig-icon.svg';
import Twt from '../../assets/twitter-icon.svg';
import Yt from '../../assets/yt-icon.svg';

const Footer = () => {
    return (
        <div className="Footer__Background">
            <div className="Footer__Wrapper">
                <div className="Footer__Row">
                    <div className="Footer__Group">
                        <div className="Footer__Col">
                            <ul className="Footer__Links">
                                <li>Logo</li>
                            </ul>
                        </div>
                        <div className="Footer__Col">
                            <ul className="Footer__Links">
                                <li>Mission</li>
                                <li>How to Help</li>
                                <li>Businesses</li>
                                <li>Community</li>
                            </ul>
                        </div>
                        <div className="Footer__Col">
                            <ul className="Footer__Links">
                                <li>Timeline</li>
                                <li>Resources</li>
                            </ul>
                        </div>
                    </div>
                    <div className="Footer__Social">
                        <img src={Fb} alt="Facebook" className="Footer__SocialIcon" />
                        <img src={Ig} alt="Instagram" className="Footer__SocialIcon" />
                        <img src={Twt} alt="Twitter" className="Footer__SocialIcon" />
                        <img src={Yt} alt="YouTube" className="Footer__SocialIcon" />
                    </div>
                </div>
                <div className="Footer__Copyright">
                    &copy; Copyright 2020 All rights reserved
                </div>
            </div>
        </div>
    )
}

export default Footer;