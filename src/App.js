/**
 * Author: Natalie Kappele-Miller
 * App: BLM Project
 * Date: January 4, 2021
 */
import React from 'react';
import {
	Route,
  BrowserRouter as Router,
} from 'react-router-dom';

import './App.css';

// Shared Components
import Header from './shared/Header/Header';
import Footer from './shared/Footer/Footer';

// Containers & Components
import MainContainer from './containers/main';
import BusinessesContainer from './containers/businesses';
import CommunityContainer from './containers/community';
import DonateContainer from './containers/donate';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <div className="App__Content">
          <div className="App_Header">
            <Header />
          </div>
        </div>
        <Router>
          <Route path="/" exact component={MainContainer} />
          <Route path="/businesses" exact component={BusinessesContainer} />
          <Route path="/community" exact component={CommunityContainer} />
          <Route path="/donate" exact component={DonateContainer} />
        </Router>
        <div className="App__Footer">
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
