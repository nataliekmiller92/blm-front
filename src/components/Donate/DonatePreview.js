import React from 'react';

import { Button, SecondaryButton } from '../../shared/Buttons/Buttons';

import equalJusticeTxt from '../../assets/equal-justice-text.png';
import equalJusticeImg from '../../assets/eji-image.png';
import mffText from '../../assets/minff-text.png';
import mffImg from '../../assets/george-floyd-protest.png';
import bailProjText from '../../assets/bail-proj-text.png';
import bailProjImg from '../../assets/bail-proj-img.png';

import './DonatePreview.css';

const data = [
    {
        name: 'Equal Justice Initiative',
        imgTxt: equalJusticeTxt,
        img: equalJusticeImg,
        donateLink: 'https://support.eji.org/give/153413/#!/donation/checkout'
    },
    {
        name: 'Minnesota Freedom Fund',
        imgTxt: mffText,
        img: mffImg,
        donateLink: 'https://www.givemn.org/organization/Minnesota-Freedom-Fund'
    },
    {
        name: 'The Bail Project',
        imgTxt: bailProjText,
        img: bailProjImg,
        donateLink: 'https://bailproject.org/?form=donate'
    }
];

const DonatePreview = ({name, imgTxt, img}) => {
    return (
        <>
        <div className="Main__DonateText">
            <img src={imgTxt} alt="Equal Justice Initiative" className="Main__DonateTextText" />
        </div>
        <div className="Main__DonateSection">
            <div className="Main__DonateContent">
                <div className="Main__DonateHeader">{name}</div>
                <div className="Main__DonateButtonGroup">
                    <div className="Main__DonateButtonMargin">
                        <Button text={`Donate Now`} />
                    </div>
                    <SecondaryButton text={`Find Out More`}/>
                </div>
            </div>
            <div className="Main__DonateImgSection">
                <img src={img} alt="Prisoners" className="Main__DonateImgImg" />
            </div>
        </div>
        </>
    )
}

const DonatePreviewSection = () => {
    return (
        <div>
            {data.map((donateCause) => {
                const { name, imgTxt, img } = donateCause;
                return (
                    <div className="DonatePreviewWrapper">
                        <DonatePreview name={name} imgTxt={imgTxt} img={img} />
                    </div>
                )
            })}
        </div>
    )
}

export default DonatePreviewSection;