import React from 'react';

import Header from './Header.jsx';
import Footer from './Footer.jsx'
import ActivityFeed from './components/ActivityFeed.jsx';

import useAppData from './hooks/useAppData.js';

const CallHistory = () => {
  const { activities, archiveCall} = useAppData();
  return (
    <div className="container-view">
      <div className="container-view-heading"> Call History </div>
        <ActivityFeed type="unarchived" activities={activities} archiveCall={archiveCall}/>
      </div>
  );
};


export default CallHistory;
