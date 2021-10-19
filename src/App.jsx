import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Link , useLocation} from 'react-router-dom';

import Header from './Header.jsx';
import Footer from './Footer.jsx'
import ActivityFeed from './components/ActivityFeed.jsx';
import CallHistory from './CallHistory.jsx';
import Archive from './Archive.jsx';


const App = () => {
  
  return (
    <Router >
    <div className='container'>
      <Header />
      <Switch >
        <Route exact path="/history" >
          <CallHistory />
        </Route>
        <Route exact path="/archive">
          <Archive />
        </Route>
      </Switch>
      <Footer />
    </div>
</Router>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <App />

  </React.StrictMode>
  , document.getElementById('app'));

export default App;
