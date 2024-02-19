import { forwardRef, useEffect, useRef } from "react";
import { Button } from "../Button";
import "./style.css";

export const AnimateScene = forwardRef(({ clicked, setClicked }, ref) => {
  // TODO change clicked funcionality to work only in one element

  const animateSceneRef = useRef(null);

  const clickTarget = (e) => {
    if (e.target !== animateSceneRef.current) {
      // this ref is the current element which is clicket
      ref.current = e.target;
      setClicked((prev) => !prev);
    } else {
      ref.current = null;
      setClicked(false);
    }
  };

  useEffect(() => {
    const elem = animateSceneRef?.current;
    elem.addEventListener("click", clickTarget);

    return () => elem.removeEventListener("click", clickTarget);
    // eslint-disable-next-line
  }, []);

  return (
    <div ref={animateSceneRef} className="animate_scene">
      <Button clicked={clicked} />
    </div>
  );
});
