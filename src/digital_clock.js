import React, { useEffect, useState } from "react";
function Digital_Clock() {
  const currTime = new Date().toLocaleTimeString();
  const currDate = new Date().toLocaleDateString();
  const [time, settime] = useState(currTime);

  setInterval(() => {
    const currTime = new Date().toLocaleTimeString();
    settime(currTime);
  }, 1000);
  return (
    <>
      <div className="time">
        <h1 id="Time">
          <span id="text">Digital_Clock:</span>
        <br/>{time}</h1>
        <h1 id="date">{currDate}</h1>
      </div>
    </>
  );
}
export default Digital_Clock;
