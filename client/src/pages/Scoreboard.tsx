import { useState } from "react";
import template_img from "../img/template.png";
import { Image } from "react-bootstrap";

export default () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [scale, setScale] = useState(window.innerWidth / 1920);

  return (
    <>
      <Image src={template_img} style={{width: width}}/>

      <p className="qual-info" style={{fontSize: 50 * scale}}>Qualification 25 of 46</p>

      <p className="score" style={{top: width * .07, right: "50%", fontSize: 125 * scale, width: 240 / 1280 * width}}>44</p>
      <p className="score" style={{top: width * .07, left: "50%", fontSize: 125 * scale, width: 240 / 1280 * width}}>116</p>

    </>
  )
}