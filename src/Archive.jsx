import React from 'react';
import useAppData from './hooks/useAppData.js';
import ActivityFeed from './components/ActivityFeed.jsx';

const Archive = () => {
  const { activities, archiveCall} = useAppData();
  return (
    <div className="container-view">
      <div className="container-view-heading"> Archive</div>
        <ActivityFeed type="archived" activities={activities} archiveCall={archiveCall}/>
    </div>
  )
}

export default Archive