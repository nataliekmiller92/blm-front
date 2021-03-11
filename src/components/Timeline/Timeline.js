import React from 'react';

import TulsaImg from '../../assets/Tulsa_Race_Massacre_Oklahoma_1921.png';
import Arrow from '../../assets/timeline-control-arrow.png';

import './Timeline.css'

// const timelineData = [
//     {}
// ]

const Timeline = () => {
    return (
        <div className="Timeline__Wrapper">
            <div className="Timeline__Layout">
                <div className="Timeline__FocusImage">
                    <img src={TulsaImg} />
                </div>
                <div className="Timeline__TimelineWrapper">
                    {/* <div className="Timeline__Timeline">
                    </div> */}
                    <div className="Timeline__TimelineDates">
                        <div className="Timeline__PreviewDates">
                            <div className="Timeline__PreviewDate">
                                <div className="Timeline__TimelinePosition"></div>
                                <span>1600</span>
                            </div>
                            <div className="Timeline__PreviewDate">
                                <div className="Timeline__TimelinePosition"></div>
                                <span>1700</span>
                            </div>
                            <div className="Timeline__PreviewDate">
                                <div className="Timeline__TimelinePosition"></div>
                                <span>1800</span>
                            </div>
                        </div>
                        <div className="Timeline__FocusDates">
                            <div className="Timeline__FocusDate">
                                <div className="Timeline__TimelinePosition Timeline__TimelinePosition--active"></div>
                                <span>1921</span>
                            </div>
                            <div className="Timeline__FocusDate">
                                <div className="Timeline__TimelinePosition"></div>
                                <span>1935</span>
                            </div>
                            <div className="Timeline__FocusDate">
                            <div className="Timeline__TimelinePosition"></div>
                                <span>1943</span>
                            </div>
                        </div>
                        <div className="Timeline__PreviewDates">
                            <div className="Timeline__PreviewDate">1980</div>
                            <div className="Timeline__PreviewDate">1992</div>
                            <div className="Timeline__PreviewDate">2020</div>
                        </div>
                    </div>
                </div>
                <div className="Timeline__Content">
                    <div className="Timeline__Controls">
                        <img src={Arrow} className="Timeline__BackArrow" />
                        <div className="Timeline__EventTxt">
                        <div className="Timeline__EventTitle">Tulsa Race Riot</div>
                        <p className="Timeline__EventDesc">
                            The Tulsa, Oklahoma Race Riot was one of the 
                            worst urban racial conflicts in United States history.  
                            Two days of violence by whites against blacks left 
                            an estimated 50 people dead, hundreds injured, 
                            and more than 1,000 black-owned homes and 
                            businesses destroyed.
                        </p>

                        </div>
                        <img src={Arrow} className="Timeline__NextArrow" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Timeline;