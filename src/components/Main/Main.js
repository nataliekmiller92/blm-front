import React from 'react';

import Timeline from '../Timeline/Timeline';

import './Main.css';

import bannerImgLg from '../../assets/civil-rights-march.png';
import bannerImgSm from '../../assets/blm-protest-mother-son.png';
import police from '../../assets/police-brutality-grp.png';
import justice from '../../assets/justice-grp.png';
import graph from '../../assets/encarcerations-graph.png';

import BusinessFeatured from '../Business/BusinessFeatured';
import DonatePreview from '../Donate/DonatePreview';

const Main = () => {
    return (
        <div className="Main">
            <div className="Main__Header">
                <div className="Main__HeaderLg">
                    Matter
                </div>
                <div className="Main__HeaderSm"><div>is</div><div>the</div></div>
                <div className="Main__HeaderLg Main__HeaderLg--red">
                    Minimum
                </div>
            </div>
            <div className="Main__BannerImages">
                <div className="Main__BannerImgWrapper">
                    <img alt="Civil rights march on Washington, D.C. Film negative by photographer Warren K. Leffler, 1963. From the U.S. News &amp; World Report Collection. Library of Congress Prints &amp; Photographs Division." src={bannerImgLg} className="Main__BannerImgLg" />
                    <div className="Main__BannerText">
                        Civil rights march on Washington, D.C. Film negative by photographer Warren K. Leffler, 1963. From the U.S. News &amp; World Report Collection. Library of Congress Prints &amp; Photographs Division.
                    </div>
                </div>
                <img alt="Black Lives Matter peaceful protest" src={bannerImgSm} className="Main__BannerImgSm" />
            </div>
            <div className="Main__CalloutWrapper">
                <div className="Main__CalloutText">
                    To the end of <span className="Main__CalloutText Main__CalloutText--red">400+</span> years of systemic racism
                </div>
            </div>
            <Timeline />
            <div className="Main__FocusWrapper">
                <div className="Main__FocusPoint">
                    <div className="Main__FocusContent">
                        <div className="Main__FocusPointHeader">Police</div>
                        <h3>End brutality, increase accountability</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                    <img src={police} alt="Police brutality" className="Main__FocusImg" />
                </div>
                <div className="Main__FocusPoint">
                <img src={justice} alt="Victims" className="Main__FocusImg" />
                    <div className="Main__FocusContent">
                        <div className="Main__FocusPointHeader">Justice</div>
                        <h3>Demand legal justice</h3>
                        <p>On March 13th, in the middle of the night, Breonna Taylor was killed by Louisville police as they illegally executed a drug raid at the wrong address for a person they had already arrested earlier that day. No charges have been brought and no arrests have been made.</p>
                    </div>
                </div>
                <div className="Main__FocusPoint">
                    <div className="Main__FocusContent">
                        <div className="Main__FocusPointHeader">Freedom</div>
                        <h3>End discriminatory jailing</h3>
                        <p>We stand against cash bail as unjust and identify wealth-based discrimination as a vehicle for the criminal justice system to target populations for structural violence.
    (The Minnesota Freedom Fund)</p>
                    </div>
                    <div className="Main__FocusGraphWrapper">
                        <p className="Main__FocusGraphLabel">Number of people incarcerated in local jails by conviction status, 1978-2013</p>
                        <img src={graph} alt="Graph of incarcerations in local jails by conviction status" className="Main__FocusImg" />
                        <div className="Main__FocusGraphCitationWrapper">
                            <p className="Main__FocusGraphCitation">
                                Jail populations were adjusted to remove people being
                                held for federal and state authorities. 
                            </p>
                            <p className="Main__FocusGraphCitation">
                                Our Bureau of Justice Statistics data sources are described at www.prisonpolicy.org/reports/jailsovertime.html#methodology 
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="Main__BusinessesWrapper">
                <div className="Main__BusinessesHeader">Support Black Businesses</div>
                <BusinessFeatured />
            </div>
            <div className="Main__DonateWrapper">
            <div className="Main__DonateHeaderMain">Donate</div>
            <p className="Main__DonateCaption">
                We believe these organizations best align with the goals of the Black Lives Matter Movement.
            </p>
        </div>
            <DonatePreview />
            {/* <div className="Main__DonateSection">
                <div className="Main__DonateContent">
                    <div className="Main__DonateHeader">Equal Justice Initiative</div>
                    <div className="Main__DonateButtonGroup">
                        <div className="Main__DonateButtonMargin">
                            <Button text={`Donate Now`} />
                        </div>
                        <SecondaryButton text={`Find Out More`}/>
                    </div>
                </div>
                <div className="Main__DonateImgSection">
                    <img src={equalJusticeImg} alt="Prisoners" className="Main__DonateImgImg" />
                </div>
            </div> */}
        </div>
    )
}

export default Main;