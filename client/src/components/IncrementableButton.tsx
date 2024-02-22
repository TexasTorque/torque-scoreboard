import { useState } from "react";
import { Button } from "react-bootstrap";

interface IncrementableButtonProps {
  label: string;
  increment: number;
  scale: number;
  style: React.CSSProperties;
}

export default (props: IncrementableButtonProps) => {
  const [count, setCount] = useState<number>(0);

  return (
    <>
      <div style={{...props.style, display: "flex", flexDirection: "column", justifyContent: "space-around"}}>
        <div style={{display: "flex", flexDirection: "row", justifyContent: "space-around"}}>
          <Button variant="danger" onClick={() => setCount(count - props.increment)} style={{fontSize: 22 * props.scale, width: props.scale * 50, height: props.scale * 50}}>-</Button>
          <Button disabled style={{fontSize: 22 * props.scale, width: props.scale * 70, height: props.scale * 50}}>{count}</Button>
          <Button variant="success" onClick={() => setCount(count + props.increment)} style={{fontSize: 22 * props.scale, width: props.scale * 50, height: props.scale * 50}}>+</Button>
        </div>
        <div>
          <p style={{textAlign: "center", color: "white", fontSize: 22 * props.scale}}>{props.label}</p>
        </div>
      </div>
    </>
  )
}