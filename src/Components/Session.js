import moment from "moment";
import React from "react";

const Session = ({
  sessionLengthInSeconds, // this is where we accept the props
  incrementSessionLengthByOneMinute,
  decrementSessionLengthByOneMinute,
}) => {
  const sessionLengthInMinutes = moment
    .duration(sessionLengthInSeconds, "s")
    .minutes();
  return (
    <div>
      <p id="session-label">Session Length</p>
      <p id="session-length">{sessionLengthInMinutes}</p>
      <button
        id="session-increment"
        onClick={incrementSessionLengthByOneMinute}
      >
        +
      </button>
      <button
        id="session-decrement"
        onClick={decrementSessionLengthByOneMinute}
      >
        -
      </button>
    </div>
  );
};

export default Session;
