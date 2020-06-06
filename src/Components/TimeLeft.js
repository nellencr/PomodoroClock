import React, {useState} from 'react'
import moment from 'moment';
import momentDurationFormatSetup from 'moment-duration-format'

momentDurationFormatSetup(moment)

const TimeLeft = ({ sessionLengthInSeconds }) => {
  const [timeLeft, setTimeLeft] = useState(sessionLengthInSeconds);
  const formattedTimeLeft = moment.duration(timeLeft, 's').format('mm:ss');
 
 return <p id="time-left">{formattedTimeLeft}</p>;
};




export default TimeLeft;



