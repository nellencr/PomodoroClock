import React, {useState} from "react";
import "./App.css";
import Break from "./Components/Break";
import Session from "./Components/Session";
import TimeLeft from "./Components/TimeLeft";
import FolkMe from './Components/Folkme';


function App() {
  const [sessionLengthInSeconds, setSessionLengthInSeconds] = useState(60 * 25);
  const [breakLengthInSeconds, setBreakLengthInSeconds] = useState(300);

  const decrementSessionLengthByOneMinute = () => {
    const newSessionLengthInSeconds = sessionLengthInSeconds - 60;
    if (newSessionLengthInSeconds < 0) {
      setSessionLengthInSeconds(0);
    } else {
      setSessionLengthInSeconds(newSessionLengthInSeconds);
    }
  };
  const incrementSessionLengthByOneMinute = () =>
    setSessionLengthInSeconds(sessionLengthInSeconds + 60);

    

    const decrementBreakLengthByOneMinute = () => {
      const newBreakLengthInSeconds = breakLengthInSeconds - 60;
      if (newBreakLengthInSeconds < 0) {
        setBreakLengthInSeconds(0);
      } else {
        setBreakLengthInSeconds(newBreakLengthInSeconds);
      }
    };
    const incrementBreakLengthByOneMinute = () =>
      setBreakLengthInSeconds(breakLengthInSeconds + 60);

  return (
    <div className="App">
      <h1>Pomodoro Clock</h1>
      <Break
        breakLengthInSeconds={breakLengthInSeconds}
        incrementBreakLengthByOneMinute={incrementBreakLengthByOneMinute}
        decrementBreakLengthByOneMinute={decrementBreakLengthByOneMinute}
      />
      <TimeLeft sessionLengthInSeconds={sessionLengthInSeconds} />
      <Session
        sessionLengthInSeconds={sessionLengthInSeconds}
        incrementSessionLengthByOneMinute={incrementSessionLengthByOneMinute}
        decrementSessionLengthByOneMinute={decrementSessionLengthByOneMinute}
      />
       <FolkMe
          targetURL = "https://github.com/nellencr/DrumMachine"
          color="#fff"
          backgroundColor="#35cac5"
          position="right"
          size="100px"
          ariaLabel="View source on Github"
        />
    </div>
  );
}

export default App;

