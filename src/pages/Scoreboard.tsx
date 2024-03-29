import { useEffect, useState } from "react";
import template_img from "../img/template.png";
import winner_img from "../img/winner.png";
import { Image } from "react-bootstrap";
import useWindowSize from "../data/WindowSize";
import { BlueAlliance, RedAlliance, Score } from "../data/Types";
import { db, getBlueAlliance, getBlueScore, getRedAlliance, getRedScore, sumScore } from "../firebase";
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

  return (
    <>
      <Image src={template_img} style={{width: size.width}}/>

      {/* <Image src={winner_img} style={{position: "absolute", right: 0, width: size.width / 3.2, top: size.width / 20}}/> */}

      <p className="qual-info" style={{fontSize: 50 * scale}}>Week 0</p>

      <p className="score" style={{top: size.width * .07, right: "50%", fontSize: 125 * scale, width: 240 / 1280 * size.width}}>{sumScore(redscore)}</p>
      <p className="score" style={{top: size.width * .07, left: "50%", fontSize: 125 * scale, width: 240 / 1280 * size.width}}>{sumScore(bluescore)}</p>

      <p className="team-number" style={{left: size.width * .05, fontSize: 35 * scale, top: size.width * .241}}>{redalliance?.red1}</p>
      <p className="team-number" style={{left: size.width * .05, fontSize: 35 * scale, top: size.width * .284}}>{redalliance?.red2}</p>
      <p className="team-number" style={{left: size.width * .05, fontSize: 35 * scale, top: size.width * .3265}}>{redalliance?.red3}</p>

      <p className="team-number" style={{right: size.width * .22, fontSize: 35 * scale, top: size.width * .241}}>{bluealliance?.blue1}</p>
      <p className="team-number" style={{right: size.width * .22, fontSize: 35 * scale, top: size.width * .284}}>{bluealliance?.blue2}</p>
      <p className="team-number" style={{right: size.width * .22, fontSize: 35 * scale, top: size.width * .3265}}>{bluealliance?.blue3}</p>

      <p className="stat" style={{right: size.width / 2 + 255 * scale, fontSize: 35 * scale, top: size.width * .171, width: 104 * scale}}>{redscore?.leave}</p>
      <p className="stat" style={{right: size.width / 2 + 255 * scale, fontSize: 35 * scale, top: size.width * .2095, width: 104 * scale}}>{(redscore?.speaker ? redscore.speaker : 0) + (redscore?.autospeaker ? redscore.autospeaker : 0) + (redscore?.speakeramplified ? redscore.speakeramplified : 0)}</p>
      <p className="stat" style={{right: size.width / 2 + 255 * scale, fontSize: 35 * scale, top: size.width * .248, width: 104 * scale}}>{(redscore?.amp ? redscore.amp : 0) + (redscore?.autoamp ? redscore.autoamp : 0)}</p>
      <p className="stat" style={{right: size.width / 2 + 255 * scale, fontSize: 35 * scale, top: size.width * .2875, width: 104 * scale}}>{redscore?.stage}</p>
      <p className="stat" style={{right: size.width / 2 + 255 * scale, fontSize: 35 * scale, top: size.width * .3265, width: 104 * scale}}>0</p>

      <p className="stat" style={{left: size.width / 2 + 255 * scale, fontSize: 35 * scale, top: size.width * .171, width: 104 * scale}}>{bluescore?.leave}</p>
      <p className="stat" style={{left: size.width / 2 + 255 * scale, fontSize: 35 * scale, top: size.width * .2095, width: 104 * scale}}>{(bluescore?.speaker ? bluescore.speaker : 0) + (bluescore?.autospeaker ? bluescore.autospeaker : 0) + (bluescore?.speakeramplified ? bluescore.speakeramplified : 0)}</p>
      <p className="stat" style={{left: size.width / 2 + 255 * scale, fontSize: 35 * scale, top: size.width * .248, width: 104 * scale}}>{(bluescore?.amp ? bluescore.amp : 0) + (bluescore?.autoamp ? bluescore.autoamp : 0)}</p>
      <p className="stat" style={{left: size.width / 2 + 255 * scale, fontSize: 35 * scale, top: size.width * .2875, width: 104 * scale}}>{bluescore?.stage}</p>
      <p className="stat" style={{left: size.width / 2 + 255 * scale, fontSize: 35 * scale, top: size.width * .3265, width: 104 * scale}}>0</p>
    </>
  )
}