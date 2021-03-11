import React from 'react';
import Businesses from '../components/Business/Businesses';

class BusinessesContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
    }
    render() {
        return (
            <div><Businesses /></div>
        )
    }
}

export default BusinessesContainer;