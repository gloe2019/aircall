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
import ExpandMore  from '@material-ui/icons/ExpandMore'
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Box from '@material-ui/core/Box'
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles'
import CardHeader  from '@material-ui/core/CardHeader'
import Avatar  from '@material-ui/core/Avatar'
const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: '100%',
  },
  header: {
    textAlign: 'center',
    display: 'flex'
  },
  content: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center'
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

  const formattedDate = moment(created_at).format('MMM Do YYYY')
  const callTime = moment(created_at).format('LT')
  

  return (
    <Card className={classes.root} elevation={0}>
      <CardHeader className={classes.header}
        avatar={
         <IconButton aria-label="call icon" disabled={true}>
          { call_type === 'answered' && <CallRounded style={{ color: blue[500]}} />}
            { call_type === 'missed' && <PhoneMissedRoundedIcon style={{ color: red[500]}} /> }
            {call_type === 'voicemail' && <Voicemail style={{color: yellow[500]}}/> }
            </IconButton>
        }
        component='span'
        title={direction === 'outbound' ? <p>{to}</p> : <p>{from}</p>}
        subheader={callTime}
        action={
          <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="call details"
        >
          <ExpandMore />
        </IconButton>
        }
      >
      </CardHeader>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent className={classes.content}>
          <Box>
          <Typography >{call_type} on {formattedDate}, {duration}s</Typography>
          <Typography gutterBottom paragraph>Via: {via}</Typography>
          </Box>
          <IconButton>
          {is_archived === false && <ArchiveTwoTone onClick={() => archiveCall(id)}/>}
          {is_archived === true && <UnarchiveTwoTone onClick={() => archiveCall(id)}/>}
        </IconButton>
        </CardContent>
      </Collapse>
    </Card>
  )
}

export default Activity