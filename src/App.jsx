import React from 'react';
import ReactDOM from 'react-dom';

import Header from './Header.jsx';
import Footer from './Footer.jsx'
import ActivityFeed from './components/ActivityFeed.jsx';

import useAppData from './hooks/useAppData.js';

const App = () => {
  const { activities, archiveCall} = useAppData();
  return (
    <div className='container'>
      <Header/>
      <div className="container-view">
        <ActivityFeed activities={activities} archiveCall={archiveCall}/>
      </div>
      <Footer />
    </div>
  );
};

ReactDOM.render(<App/>, document.getElementById('app'));

export default App;
