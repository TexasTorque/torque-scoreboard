import { useEffect, useState } from "react";
import template_img from "../img/template.png";
import winner_img from "../img/winner.png";
import { Image } from "react-bootstrap";
import useWindowSize from "../data/WindowSize";

export default () => {
  const [scale, setScale] = useState(window.innerWidth / 1920);
  const size = useWindowSize();

  useEffect(()=> {
    setScale(size.width / 1920);
  }, [size.width]);

  return (
    <>
      <Image src={template_img} style={{width: size.width}}/>

      <Image src={winner_img} style={{position: "absolute", right: 0, width: size.width / 3.2, top: size.width / 20}}/>

      <p className="qual-info" style={{fontSize: 50 * scale}}>Qualification 25 of 46</p>

      <p className="score" style={{top: size.width * .07, right: "50%", fontSize: 125 * scale, width: 240 / 1280 * size.width}}>44</p>
      <p className="score" style={{top: size.width * .07, left: "50%", fontSize: 125 * scale, width: 240 / 1280 * size.width}}>116</p>

      <p className="team-number" style={{left: size.width * .05, fontSize: 35 * scale, top: size.width * .241}}>1477</p>
      <p className="team-number" style={{left: size.width * .05, fontSize: 35 * scale, top: size.width * .284}}>2468</p>
      <p className="team-number" style={{left: size.width * .05, fontSize: 35 * scale, top: size.width * .3265}}>7492</p>

      <p className="team-number" style={{right: size.width * .22, fontSize: 35 * scale, top: size.width * .241}}>1477</p>
      <p className="team-number" style={{right: size.width * .22, fontSize: 35 * scale, top: size.width * .284}}>2468</p>
      <p className="team-number" style={{right: size.width * .22, fontSize: 35 * scale, top: size.width * .3265}}>7492</p>

      <p className="stat" style={{right: size.width / 2 + 255 * scale, fontSize: 35 * scale, top: size.width * .171, width: 104 * scale}}>2</p>
      <p className="stat" style={{right: size.width / 2 + 255 * scale, fontSize: 35 * scale, top: size.width * .2095, width: 104 * scale}}>26</p>
      <p className="stat" style={{right: size.width / 2 + 255 * scale, fontSize: 35 * scale, top: size.width * .248, width: 104 * scale}}>4</p>
      <p className="stat" style={{right: size.width / 2 + 255 * scale, fontSize: 35 * scale, top: size.width * .2875, width: 104 * scale}}>2</p>
      <p className="stat" style={{right: size.width / 2 + 255 * scale, fontSize: 35 * scale, top: size.width * .3265, width: 104 * scale}}>10</p>

      <p className="stat" style={{left: size.width / 2 + 255 * scale, fontSize: 35 * scale, top: size.width * .171, width: 104 * scale}}>4</p>
      <p className="stat" style={{left: size.width / 2 + 255 * scale, fontSize: 35 * scale, top: size.width * .2095, width: 104 * scale}}>101</p>
      <p className="stat" style={{left: size.width / 2 + 255 * scale, fontSize: 35 * scale, top: size.width * .248, width: 104 * scale}}>5</p>
      <p className="stat" style={{left: size.width / 2 + 255 * scale, fontSize: 35 * scale, top: size.width * .2875, width: 104 * scale}}>6</p>
      <p className="stat" style={{left: size.width / 2 + 255 * scale, fontSize: 35 * scale, top: size.width * .3265, width: 104 * scale}}>0</p>
    </>
  )
}