import { useEffect, useRef, useState } from "react";
import { Button } from "react-bootstrap";

type Timer = {
  current: NodeJS.Timeout | null;
};

const CountDown = () => {
  const [count, setCount] = useState<number>(3);
  const timer: Timer = useRef(null);

  useEffect(() => {
    if (count === 0) {
      alert("time up");
      return;
    }

    timer.current = setInterval(() => {
      setCount((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer.current as NodeJS.Timeout);
  }, [count]);

  //   const handleStart = () => {
  //     timer.current = setInterval(() => {
  //       setCount((prev) => prev - 1);
  //     }, 1000);
  //   };
  //   const handleStop = () => {
  //     clearInterval(timer.current as NodeJS.Timeout);
  //   };
  return (
    <>
      <h3>Time left: {count}</h3>
      <div>
        {/* <Button
          variant="secondary"
          onClick={() => handleStart()}
          className="me-2"
        >
          Start
        </Button>
        <Button variant="secondary" onClick={() => handleStop()}>
          Stop
        </Button> */}
      </div>
    </>
  );
};

export default CountDown;
