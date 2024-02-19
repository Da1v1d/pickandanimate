import { useState } from "react";
import "./App.css";
import { AnimateScene } from "./Components/AnimateScene";
import { SettingsPanel } from "./Components/SettingsPanel";
import { useAnimateParams } from "./hooks/useAnimateParams";

function App() {
  const [clicked, setClicked] = useState(false);

  //? How to optimize state  to reduce components re-render inside this component

  const { animateParams, setAnimateParams, onChange } = useAnimateParams();
  return (
    <div className="App">
      <AnimateScene clicked={clicked} setClicked={setClicked} />
      <SettingsPanel
        animateParams={animateParams}
        onChange={onChange}
        clicked={clicked}
      />
    </div>
  );
}

export default App;
