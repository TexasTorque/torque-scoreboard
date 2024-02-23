import { useEffect, useState } from "react";
import useWindowSize from "../data/WindowSize";
import { Form, Image, InputGroup } from "react-bootstrap";
import scoring_img from "../img/scoring.png";
import IncrementableButton from "../components/IncrementableButton";
import CountableButton from "../components/CountableButton";
import { db, getBlueAlliance, getBlueScore, getRedAlliance, getRedScore, setBlueAlliance, setRedAlliance, sumScore } from "../firebase";
import { BlueAlliance, RedAlliance, Score } from "../data/Types";
import { doc, onSnapshot } from "firebase/firestore";

export default () => {
  const [bluealliance, setBluealliance] = useState<BlueAlliance>();
  const [redalliance, setRedalliance] = useState<RedAlliance>();
  const [bluescore, setBluescore] = useState<Score>();
  const [redscore, setRedscore] = useState<Score>();
  
  const [scale, setScale] = useState(window.innerWidth / 1920);
  const size = useWindowSize();

  useEffect(()  => {
    getBlueAlliance().then(bluealliance => setBluealliance(bluealliance));
    getRedAlliance().then(redalliance => setRedalliance(redalliance));
    getBlueScore().then(bluescore => setBluescore(bluescore));
    getRedScore().then(redscore => setRedscore(redscore));

    onSnapshot(doc(db, "scoreboard", "bluescore"), (doc) => {
      setBluescore(doc.data() as Score);
    });
    onSnapshot(doc(db, "scoreboard", "redscore"), (doc) => {
      setRedscore(doc.data() as Score);
    });
    onSnapshot(doc(db, "scoreboard", "bluealliance"), (doc) => {
      setBluealliance(doc.data() as BlueAlliance);
    });
    onSnapshot(doc(db, "scoreboard", "redalliance"), (doc) => {
      setRedalliance(doc.data() as RedAlliance);
    });
  }, []);

  useEffect(() => {
    setScale(size.width / 1920);
  }, [size.width]);

  const changeRedAlliance = (key: string, value: string) => {
    setRedalliance({...redalliance, [key]: value} as RedAlliance);
    setRedAlliance({...redalliance, [key]: value} as RedAlliance);
  }

  const changeBlueAlliance = (key: string, value: string) => {
    setBluealliance({...bluealliance, [key]: value} as BlueAlliance);
    setBlueAlliance({...bluealliance, [key]: value} as BlueAlliance);
  }

  return (
    <>
      <Image src={scoring_img} style={{width: size.width}}/>

      <IncrementableButton defaultValue={bluescore?.autospeaker ? bluescore.autospeaker : 0} label="Auto Speaker" increment={5} scale={scale} style={{position: "absolute", width: 200 * scale, top: 150 * scale, left: 100 * scale}} />
      <IncrementableButton defaultValue={bluescore?.leave ? bluescore.leave : 0} label="Leave" increment={2} scale={scale} style={{position: "absolute", width: 200 * scale, top: 150 * scale, left: 375 * scale}} />
      <IncrementableButton defaultValue={bluescore?.autoamp ? bluescore.autoamp : 0} label="Auto Amp" increment={2} scale={scale} style={{position: "absolute", width: 200 * scale, top: 150 * scale, left: 650 * scale}} />
    
      <IncrementableButton defaultValue={bluescore?.speaker ? bluescore.speaker : 0} label="Speaker" increment={2} scale={scale} style={{position: "absolute", width: 200 * scale, top: 460 * scale, left: 100 * scale}} />
      <IncrementableButton defaultValue={bluescore?.speakeramplified ? bluescore.speakeramplified : 0} label="Speaker (Amplified)" increment={1} scale={scale} style={{position: "absolute", width: 200 * scale, top: 460 * scale, left: 375 * scale}} />
      <IncrementableButton defaultValue={bluescore?.amp ? bluescore.amp : 0} label="Amp" increment={1} scale={scale} style={{position: "absolute", width: 200 * scale, top: 460 * scale, left: 650 * scale}} />

      <IncrementableButton defaultValue={bluescore?.stage ? bluescore.stage : 0} label="Stage Points" increment={1} scale={scale} style={{position: "absolute", width: 200 * scale, top: 700 * scale, left: 375 * scale}} />

      <IncrementableButton defaultValue={redscore?.autospeaker ? redscore.autospeaker : 0} label="Auto Speaker" increment={5} scale={scale} style={{position: "absolute", width: 200 * scale, top: 150 * scale, right: 100 * scale}} />
      <IncrementableButton defaultValue={redscore?.leave ? redscore.leave : 0} label="Leave" increment={2} scale={scale} style={{position: "absolute", width: 200 * scale, top: 150 * scale, right: 375 * scale}} />
      <IncrementableButton defaultValue={redscore?.autoamp ? redscore.autoamp : 0} label="Auto Amp" increment={2} scale={scale} style={{position: "absolute", width: 200 * scale, top: 150 * scale, right: 650 * scale}} />

      <IncrementableButton defaultValue={redscore?.speaker ? redscore.speaker : 0} label="Speaker" increment={2} scale={scale} style={{position: "absolute", width: 200 * scale, top: 460 * scale, right: 100 * scale}} />
      <IncrementableButton defaultValue={redscore?.speakeramplified ? redscore.speakeramplified : 0} label="Speaker (Amplified)" increment={1} scale={scale} style={{position: "absolute", width: 200 * scale, top: 460 * scale, right: 375 * scale}} />
      <IncrementableButton defaultValue={redscore?.amp ? redscore.amp : 0} label="Amp" increment={1} scale={scale} style={{position: "absolute", width: 200 * scale, top: 460 * scale, right: 650 * scale}} />

      <IncrementableButton defaultValue={redscore?.stage ? redscore.stage : 0} label="Stage Points" increment={1} scale={scale} style={{position: "absolute", width: 200 * scale, top: 700 * scale, right: 375 * scale}} />

      <InputGroup size="sm" style={{width: 150 * scale, position: "absolute", left: 460 * scale, top: 916 * scale}}>
        <Form.Control
          placeholder="Blue 1"
          value={bluealliance?.blue1}
          onChange={(e) => changeBlueAlliance("blue1", e.target.value)}
        />
      </InputGroup>
      <InputGroup size="sm" style={{width: 150 * scale, position: "absolute", left: 495 * scale, top: 955 * scale}}>
        <Form.Control
          placeholder="Blue 2"
          value={bluealliance?.blue2}
          onChange={(e) => changeBlueAlliance("blue2", e.target.value)}
        />
      </InputGroup>
      <InputGroup size="sm" style={{width: 150 * scale, position: "absolute", left: 530 * scale, top: 993 * scale}}>
        <Form.Control
          placeholder="Blue 3"
          value={bluealliance?.blue3}
          onChange={(e) => changeBlueAlliance("blue3", e.target.value)}
        />
      </InputGroup>
      
      <InputGroup size="sm" style={{width: 150 * scale, position: "absolute", right: 460 * scale, top: 916 * scale}}>
        <Form.Control
          placeholder="Red 1"
          value={redalliance?.red1}
          onChange={(e) => changeRedAlliance("red1", e.target.value)}
        />
      </InputGroup>
      <InputGroup size="sm" style={{width: 150 * scale, position: "absolute", right: 495 * scale, top: 955 * scale}}>
        <Form.Control
          placeholder="Red 2"
          value={redalliance?.red2}
          onChange={(e) => changeRedAlliance("red2", e.target.value)}
        />
      </InputGroup>
      <InputGroup size="sm" style={{width: 150 * scale, position: "absolute", right: 530 * scale, top: 993 * scale}}>
        <Form.Control
          placeholder="Red 3"
          value={redalliance?.red3}
          onChange={(e) => changeRedAlliance("red3", e.target.value)}
        />
      </InputGroup>

      <CountableButton startingCount={30} scale={scale} style={{
        position: "absolute",
        left: 860 * scale,
        top: 905 * scale,
        fontSize: 80 * scale,
        textAlign: "center",
        width: 200 * scale,
      }}/>

      <p className="score" style={{top: 905 * scale, left: 700 * scale, fontSize: 80 * scale, textAlign: "center"}}>{sumScore(bluescore)}</p>
      <p className="score" style={{top: 905 * scale, right: 730 * scale, fontSize: 80 * scale, textAlign: "center"}}>{sumScore(redscore)}</p>
    </>
  )
}