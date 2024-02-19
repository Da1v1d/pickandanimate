import { useRef, useState } from "react";
import "./App.css";
import { AnimateScene } from "./Components/AnimateScene";
import { SettingsPanel } from "./Components/SettingsPanel";
import { useAnimateParams } from "./hooks/useAnimateParams";
import { useAnimate } from "./hooks/useAnimate";
import { Navbar } from "./Components/Navbar";

function App() {
  const [clicked, setClicked] = useState(false);
  const animateElement = useRef(null);

  //? How to optimize state  to reduce components re-render inside this component
  const { animateParams, onChange } = useAnimateParams();
  const { animate } = useAnimate(animateParams, animateElement);

  return (
    <>
      <Navbar animate={animate} />
      <div className="App">
        <AnimateScene
          ref={animateElement}
          clicked={clicked}
          setClicked={setClicked}
        />
        <SettingsPanel
          animateParams={animateParams}
          onChange={onChange}
          clicked={clicked}
        />
      </div>
    </>
  );
}

export default App;
