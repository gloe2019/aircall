import React from 'react'
import Activity from './Activity.jsx'
const ActivityFeed = (props) => {
  // console.log(props)

  const { activities, type, archiveCall } = props
  console.log(activities)
  const unarchivedActivity = activities.filter(activity => (activity.is_archived === false ))
  const unarchivedList = unarchivedActivity.map((activity) => {
    return (<Activity key={activity.id} {...activity} archiveCall={archiveCall}></Activity>)
  })
  const archivedActivity= activities.filter(activity => (activity.is_archived === true))
  
  const archivedList = archivedActivity.map(activity => {
    return (<Activity key={activity.id} {...activity} archiveCall={archiveCall}></Activity>)
  })
  console.log('..archived', archivedList)
  console.log('..unarchived', unarchivedList)
  return (
    <div>
      {type === 'unarchived' && unarchivedList}
      {type === 'archived' && archivedList}
    </div>)
}

export default ActivityFeed;