import { useEffect, useState } from "react";
import useWindowSize from "../data/WindowSize";
import { Button, Form, Image, InputGroup } from "react-bootstrap";
import scoring_img from "../img/scoring.png";
import IncrementableButton from "../components/IncrementableButton";
import ToggleableButton from "../components/ToggleableButton";
import CountableButton from "../components/CountableButton";

export default () => {
  const [scale, setScale] = useState(window.innerWidth / 1920);
  const size = useWindowSize();

  useEffect(()=> {
    setScale(size.width / 1920);
  }, [size.width]);

  return (
    <>
      <Image src={scoring_img} style={{width: size.width}}/>

      <IncrementableButton label="Auto Speaker" increment={1} scale={scale} style={{position: "absolute", width: 200 * scale, top: 150 * scale, left: 100 * scale}} />
      <IncrementableButton label="Auto Amp" increment={1} scale={scale} style={{position: "absolute", width: 200 * scale, top: 150 * scale, left: 650 * scale}} />

      <ToggleableButton label="Coopertition" style={{position: "absolute", top: 150 * scale, left: 400 * scale, width: 150 * scale, fontSize: 20 * scale, height: 50 * scale}}/>
    
      <IncrementableButton label="Speaker" increment={1} scale={scale} style={{position: "absolute", width: 200 * scale, top: 460 * scale, left: 225 * scale}} />
      <IncrementableButton label="Amp" increment={1} scale={scale} style={{position: "absolute", width: 200 * scale, top: 460 * scale, left: 533 * scale}} />

      <InputGroup style={{width: 210 * scale, position: "absolute", left: 375 * scale, top: 700 * scale}}>
        <Form.Control
          placeholder="Stage points"
        />
      </InputGroup>

      <IncrementableButton label="Auto Speaker" increment={1} scale={scale} style={{position: "absolute", width: 200 * scale, top: 150 * scale, right: 100 * scale}} />
      <IncrementableButton label="Auto Amp" increment={1} scale={scale} style={{position: "absolute", width: 200 * scale, top: 150 * scale, right: 650 * scale}} />

      <ToggleableButton label="Coopertition" style={{position: "absolute", top: 150 * scale, right: 400 * scale, width: 150 * scale, fontSize: 20 * scale, height: 50 * scale}}/>
    
      <IncrementableButton label="Speaker" increment={1} scale={scale} style={{position: "absolute", width: 200 * scale, top: 460 * scale, right: 225 * scale}} />
      <IncrementableButton label="Amp" increment={1} scale={scale} style={{position: "absolute", width: 200 * scale, top: 460 * scale, right: 533 * scale}} />

      <InputGroup style={{width: 210 * scale, position: "absolute", right: 375 * scale, top: 700 * scale}}>
        <Form.Control
          placeholder="Stage points"
        />
      </InputGroup>

      <InputGroup size="sm" style={{width: 150 * scale, position: "absolute", left: 460 * scale, top: 916 * scale}}>
        <Form.Control
          placeholder="Blue 1"
        />
      </InputGroup>
      <InputGroup size="sm" style={{width: 150 * scale, position: "absolute", left: 495 * scale, top: 955 * scale}}>
        <Form.Control
          placeholder="Blue 2"
        />
      </InputGroup>
      <InputGroup size="sm" style={{width: 150 * scale, position: "absolute", left: 530 * scale, top: 993 * scale}}>
        <Form.Control
          placeholder="Blue 3"
        />
      </InputGroup>
      
      <InputGroup size="sm" style={{width: 150 * scale, position: "absolute", right: 460 * scale, top: 916 * scale}}>
        <Form.Control
          placeholder="Red 1"
        />
      </InputGroup>
      <InputGroup size="sm" style={{width: 150 * scale, position: "absolute", right: 495 * scale, top: 955 * scale}}>
        <Form.Control
          placeholder="Red 2"
        />
      </InputGroup>
      <InputGroup size="sm" style={{width: 150 * scale, position: "absolute", right: 530 * scale, top: 993 * scale}}>
        <Form.Control
          placeholder="Red 3"
        />
      </InputGroup>

      <CountableButton startingCount={30} scale={scale} style={{position: "absolute", left: 860 * scale, top: 905 * scale, fontSize: 80 * scale, textAlign: "center", width: 200 * scale}}/>
    </>
  )
}