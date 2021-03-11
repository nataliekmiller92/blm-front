import React from 'react';

import './BusinessFeatured.css';

import busImg1 from '../../assets/fred-benj-products.png';
import ownerIcon from '../../assets/owner-icon.svg';
import beauty from '../../assets/beauty-icon.svg';
import busImg2 from '../../assets/love-biz.png';
import household from '../../assets/household-icon.svg';
import food from '../../assets/food-icon.svg';
import busImg3 from '../../assets/pipcorn-biz.png';


const data = [
    {
        name: 'Frederick Benjamin',
        description: 'For years, Michael James watched Black men lose hope in the grooming department. They felt powerless fighting their dry scalps, unsightly razor bumps, and held on to the belief that harmful, ineffective chemicals were their only option. So, Michael set out to find a better way.',
        owner: 'Michael James',
        busImg: busImg1,
        category: 'Beauty',
        categoryIcon: beauty,
    },
    {
        name: 'Love Notes',
        description: 'Brooklyn’s own founder, Nya Kam has created her very own hand-poured candles that will allow you to take this experience home.  Each candle was made with integrity-containing an all natural soy wax, cotton based (lead free)wicks, and unique custom blended fragrances that will contribute to your aroma therapeutic needs.',
        owner: 'Nya Kim',
        busImg: busImg2,
        category: 'Household',
        categoryIcon: household,
    },
    {
        name: 'Pipcorn',
        description: 'Pipcorn was born in 2012, when Jeff Martin was helping his sister, Jen move apartments. With everything packed up except a bag of tiny heirloom popcorn kernels that Jen found in the Chicago health food store where she worked, they popped batch after batch of the most delicious popcorn they’d ever had!',
        owner: 'Jeff & Teresa Martin',
        busImg: busImg3,
        category: 'Food & Drink',
        categoryIcon: food,
    },
]

const Business = (props) => {
    const { name, description, owner, busImg, category, categoryIcon } = props;
    return (
        <div className="Business__BusinessPreview">
            <img alt={`${name}`} src={busImg} className="Business__BusinessImg" />
            <div className="Business__BusinessContent">
                <h1>{name}</h1>
                <div className="Business__BusinessAttrs">
                    <div className="Business__BusinessAttr">
                        <img alt="bus icon" src={ownerIcon} className="Business__BusinessIcon" />
                        <p>{owner}</p>
                    </div>
                    <div className="Business__BusinessAttr">
                        <img alt={`${category} icon`} src={categoryIcon} className="Business__BusinessIcon" />
                        <p>{category}</p>
                    </div>
                </div>
                <p>{description}</p>
            </div>
        </div>
    )
}

const BusinessFeatured = () => {
    return (
        <div className="BusinessFeatured__Wrapper">
            {data.map((business) => {
                const { name, description, busImg, owner, ownerImg, category, categoryIcon } = business;
                return <Business 
                            name={name}
                            description={description}
                            busImg={busImg}
                            owner={owner}
                            ownerImg={ownerImg}
                            category={category}
                            categoryIcon={categoryIcon}
                        />
            })}
        </div>
    )
}

export default BusinessFeatured;