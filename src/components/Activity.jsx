import React from 'react'

// import { Call } from '@mui/icons-material/Call'
import Call  from '@material-ui/icons/Call'
import PhoneMissedRoundedIcon from '@material-ui/icons/PhoneMissedRounded'
import  PhoneCallback  from '@material-ui/icons/PhoneCallback'
//Make onClick function that displays call details!!!
const Activity = (props) => {
  console.log('...', props)
  const { call_type, created_at, direction, duration, from, is_archived, to, via } = props
  return (
    <div>
      <div>
        <Call />
        <span>Type: {call_type}</span>
      <span>Direction: {direction}</span>
      </div>
      <PhoneMissedRoundedIcon />
      <PhoneCallback />
      <div>
      <p>From: {from}</p>
      <p>To: {to}</p>
      </div>
    </div>
  )
}

export default Activity