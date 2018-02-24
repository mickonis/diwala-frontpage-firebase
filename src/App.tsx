import * as React from 'react';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import MainBox from './components/main_box/MainBox';
import NoMatch from './components/no_match/NoMatch';
import Team from './components/team/Team';
import Partners from './components/partners/Partners';
import './compiled_css/App.css';
import './compiled_css/fonts/font-faces.css';
import './compiled_css/menu-styles.css';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import { diwalaFrontpageApp } from './reducers/index';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import { slide as Menu } from 'react-burger-menu';

const store = createStore(diwalaFrontpageApp);

const App = () => (
  <Provider store={store}>
    <Router>
      <div className="App">
        <Menu right={true}>
          <a id="home" className="menu-item" href="/">Home</a>
          <a id="team" className="menu-item" href="/team">Team</a>
          <a id="partners" className="menu-item" href="/partners">Partners</a>
        </Menu>
        <Header />
        <Switch>
          <Route exact={true} path="/" component={MainBox}/>
          <Route exact={true} path="/team" component={Team}/>
          <Route exact={true} path="/partners" component={Partners}/>
          <Route component={NoMatch}/>
        </Switch>
        <Footer />

      </div>
    </Router>
  </Provider>
);

export default App;
