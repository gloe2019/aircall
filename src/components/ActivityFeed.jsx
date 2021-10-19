import React from 'react'

import Activity from './Activity.jsx'
const ActivityFeed = (props) => {
  console.log(props)
  const {activities} = props
  const activityList = activities.map(activity => {
    return (<Activity key={activity.id} {...activity}></Activity>)
  })
  return (
    <div>
      Feed Me!
      {activityList}
    </div>)
}

export default ActivityFeed;