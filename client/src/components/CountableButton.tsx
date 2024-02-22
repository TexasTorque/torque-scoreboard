import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";

interface CountableButtonProps {
  startingCount: number;
  scale: number;
  style: React.CSSProperties;
}

enum State {
    NOT_STARTED,
    COUNTING,
}

export default (props: CountableButtonProps) => {
  const [count, setCount] = useState<number>(props.startingCount);
  const [state, setState] = useState<State>(State.NOT_STARTED);
  const [id, setID] = useState<any>(undefined);

  useEffect(() => {
    if (state === State.COUNTING) {
      if (id !== undefined) {
        return;
      }
      let temp = setInterval(() => {
        if (state === State.COUNTING) {
          setCount(c => c - 1);
        }
      }, 1 * 1000);
      setID(temp);
    }
  }, [state]);

  useEffect(() => {
    if (count <= 0) {
      clearInterval(id);
      setCount(props.startingCount);
      setState(State.NOT_STARTED);
      setID(undefined);
    }
  }, [count]);

  return (
    <>
      <div style={props.style}>
        { state === State.NOT_STARTED &&
          <>
            <Button onClick={() => setState(State.COUNTING)}>Start Match</Button>
          </>
        }
        { state === State.COUNTING &&
          <>
            <p style={{margin: "0px"}} onClick={() => {
              clearInterval(id);
              setCount(props.startingCount);
              setState(State.NOT_STARTED);
              setID(undefined);
            }}>{count}</p>
          </>
        }
      </div>
    </>
  )
}