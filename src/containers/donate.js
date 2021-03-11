import React from 'react';
import Donate from '../components/Donate/Donate';

class DonateContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
    }
    render() {
        return (
            <div><Donate /></div>
        )
    }
}

export default DonateContainer;