import { useEffect, useState } from "react";
import useWindowSize from "../data/WindowSize";
import { Image } from "react-bootstrap";
import scoring_img from "../img/scoring.png";

export default () => {
  const [scale, setScale] = useState(window.innerWidth / 1920);
  const size = useWindowSize();

  useEffect(()=> {
    setScale(size.width / 1920);
  }, [size.width]);

  return (
    <>
      <Image src={scoring_img} style={{width: size.width}}/>
    </>
  )
}