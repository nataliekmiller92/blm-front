import React from 'react';
import Community from '../components/Community/Community';

class CommunityContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
    }
    render() {
        return (
            <div><Community /></div>
        )
    }
}

export default CommunityContainer;