import { useEffect, useRef } from "react";
import { Button } from "../Button";
import "./style.css";

export const AnimateScene = ({ clicked, setClicked }) => {
  // TODO change clicked funcionality to work only in one element

  const animateSceneRef = useRef(null);

  const clickTarget = (e) => {
    if (e.target !== animateSceneRef.current) {
      setClicked((prev) => !prev);
    } else setClicked(false);
  };

  useEffect(() => {
    animateSceneRef?.current.addEventListener("click", clickTarget);

    return () =>
      animateSceneRef?.current.removeEventListener("click", clickTarget);
  }, []);

  return (
    <div ref={animateSceneRef} className="animate_scene">
      <Button clicked={clicked} />
    </div>
  );
};
