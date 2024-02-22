import { useState } from "react";
import { Button } from "react-bootstrap";

interface ToggleableButtonProps {
  label: string;
  style?: React.CSSProperties;
}

export default (props: ToggleableButtonProps) => {
  const [toggled, setToggled] = useState<boolean>(false);

  return (
    <>
      <Button variant={toggled ? "success": "danger"} style={props.style} onClick={() => setToggled(!toggled)}>{props.label}</Button>
    </>
  )
}