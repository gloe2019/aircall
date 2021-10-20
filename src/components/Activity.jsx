import React from 'react'
import moment from 'moment'
import blue from '@material-ui/core/colors/blue'
import red from '@material-ui/core/colors/red'
import yellow from '@material-ui/core/colors/yellow'
import CallRounded  from '@material-ui/icons/CallRounded'
import PhoneMissedRoundedIcon from '@material-ui/icons/PhoneMissedRounded'
import Voicemail from '@material-ui/icons/VoicemailRounded'
import InfoOutlined  from '@material-ui/icons/InfoOutlined'
import ArchiveTwoTone from '@material-ui/icons/ArchiveTwoTone'
import UnarchiveTwoTone from '@material-ui/icons/UnarchiveTwoTone';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: '100%',
  },
  grid: {
    textAlign: 'center'
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
}))

//Make onClick function that displays call details!!!
const Activity = (props) => {
  console.log('...', props)
  const { archiveCall, id, call_type, created_at, direction, duration, from, is_archived, to, via } = props
  const classes = useStyles();
  const [ expanded, setExpanded ] = React.useState(false);
  
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const formattedDate = moment(created_at).format('MMM DD YYYY')
  const callTime = moment(created_at).format('LT')
  

  return (
    <Card className={classes.root}>
      <CardActions>
      <IconButton aria-label="call icon" disabled={true}>
      { call_type === 'answered' && <CallRounded style={{ color: blue[500]}} />}
        { call_type === 'missed' && <PhoneMissedRoundedIcon style={{ color: red[500]}} /> }
        {call_type === 'voicemail' && <Voicemail style={{color: yellow[500]}}/> }
        </IconButton>
        <Typography>{direction === 'outbound' ? <p>{to}</p> : <p>{from}</p>}</Typography>
        <Typography>{callTime}</Typography>
        <IconButton disableRipple={true}>
          {is_archived === false && <ArchiveTwoTone onClick={() => archiveCall(id)}/>}
          {is_archived === true && <UnarchiveTwoTone onClick={() => archiveCall(id)}/>}
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="call details"
        >
          <InfoOutlined />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography >Date: {formattedDate}
          </Typography>
          <Typography >Direction: {direction}</Typography>
          <Typography >Duration: {duration}s</Typography>
        </CardContent>
      </Collapse>
    </Card>
  )
}

export default Activity