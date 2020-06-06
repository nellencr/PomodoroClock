import moment from "moment";
import React from "react";

const Break = ({
  breakLengthInSeconds,
  incrementBreakLengthByOneMinute,
  decrementBreakLengthByOneMinute,
}) => {
  const breakLengthInMinutes = moment
    .duration(breakLengthInSeconds, "s")
    .minutes(); // the seconds to minutes conversion is HERE!
  return (
    <div>
      <p id="break-label">Break Length</p>
      {/* Note the variable change below */}
      <p id="break-length">{breakLengthInMinutes}</p>
      <button id="break-increment" onClick={incrementBreakLengthByOneMinute}>
        +
      </button>
      <button id="break-decrement" onClick={decrementBreakLengthByOneMinute}>
        -
      </button>
    </div>
  );
};

export default Break;
