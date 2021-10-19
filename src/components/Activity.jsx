import React from 'react'
import moment from 'moment'

import blue from '@material-ui/core/colors/blue'
import red from '@material-ui/core/colors/red'
import yellow from '@material-ui/core/colors/yellow'
import CallRounded  from '@material-ui/icons/CallRounded'
import PhoneMissedRoundedIcon from '@material-ui/icons/PhoneMissedRounded'
import Voicemail from '@material-ui/icons/VoicemailRounded'
import InfoTwoTone  from '@material-ui/icons/InfoTwoTone'
import ArchiveTwoTone from '@material-ui/icons/ArchiveTwoTone'
import UnarchiveTwoTone from '@material-ui/icons/UnarchiveTwoTone';
import Grid from '@material-ui/core/Grid'
import Collapse  from '@material-ui/core/Collapse'
import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  grid: {
    textAlign: 'center'
  }
}))




//Make onClick function that displays call details!!!
const Activity = (props) => {
  console.log('...', props)
  const { archiveCall, id, call_type, created_at, direction, duration, from, is_archived, to, via } = props
  const classes = useStyles();
  const handleClick = () => {
    console.log('ID', id)
  }
  const formattedDate = moment(created_at).format('MMM DD YYYY')
  const callTime = moment(created_at).format('LT')
  console.log('...call time', callTime)
  return (
    <Grid onClick={handleClick}
      container
      justifyContent="center"
      alignItems="center"
      spacing={2}>
      <Grid item
        className={classes.grid}
        xs={2}>
        { call_type === 'answered' && <CallRounded style={{ color: blue[500]}} />}
        { call_type === 'missed' && <PhoneMissedRoundedIcon style={{ color: red[500]}} /> }
        {call_type === 'voicemail' && <Voicemail style={{color: yellow[500]}}/> }
      <span>{direction}</span>
      </Grid>
      <Grid item className={classes.grid} xs={8}>
        {direction === 'outbound' ? <p>{to}</p> : <p>{from}</p>}
        <p>{callTime}</p>
      </Grid>
      {is_archived === false && 
      <Grid item className={classes.grid} xs={2}>
        <ArchiveTwoTone onClick={() => archiveCall(id)} />
        <InfoTwoTone/>
        </Grid>}
        {is_archived === true && 
      <Grid item className={classes.grid} xs={2}>
        <UnarchiveTwoTone onClick={() => archiveCall(id)} />
        <InfoTwoTone/>
      </Grid>}
    </Grid>
  )
}

export default Activity