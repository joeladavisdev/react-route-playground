import React, { useState, useEffect } from "react";

export default function Clock() {
  const [date, setDate] = useState(new Date())

  useEffect(() => {
    let timerId = setInterval(tick, 1000)

    return () => clearInterval(timerId)
  })

  const tick = () => {
    setDate(new Date())
    console.log('tick')
  }

  return (
    <div>
      <h1>Clock</h1>
      <h2>It is {date.toLocaleTimeString()}.</h2>
    </div>
  );
}

