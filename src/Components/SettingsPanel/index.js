import { memo } from "react";
import { Slide } from "../Slides/Slide";
import { SlideXY } from "../Slides/SlideXY";
import "./style.css";
import { Select } from "../Select";
import { Switch } from "../Switch";

export const SettingsPanel = memo(({ onChange, animateParams, clicked }) => {
  const disabled = !clicked;
  console.log(animateParams);
  return (
    <aside className="settings_panel">
      <SlideXY
        value={animateParams.X}
        property="X"
        handleChange={onChange}
        name="X"
        min="-100"
        max="100"
        disabled={disabled}
      />
      <SlideXY
        value={animateParams.Y}
        property="Y"
        handleChange={onChange}
        name="Y"
        min="-100"
        max="100"
        disabled={disabled}
      />
      <Slide
        property={"Opacity"}
        min="0"
        value={animateParams.Opacity}
        max="100"
        onChange={onChange}
        name="Opacity"
        transform={(value) => `${value}%`}
        disabled={disabled}
      />
      <Slide
        value={animateParams.Scale}
        property="Scale"
        onChange={onChange}
        name="Scale"
        min="0.1"
        step="0.1"
        max="5"
        disabled={disabled}
      />
      <Slide
        property={"Blur"}
        min="0"
        value={animateParams.Blur}
        max="10"
        onChange={onChange}
        name="Blur"
        disabled={disabled}
      />
      <Slide
        property={"Speed"}
        min="0"
        value={animateParams.Speed}
        step="0.1"
        max="20"
        onChange={onChange}
        name="Speed"
        transform={(value) => `${value}s`}
        disabled={disabled}
      />
      <Slide
        property={"Delay"}
        min="0"
        value={animateParams.Delay}
        max="20"
        onChange={onChange}
        name="Delay"
        transform={(value) => `${value}s`}
        disabled={disabled}
      />
      <Select
        disabled={disabled}
        value={animateParams.Easing}
        onChange={onChange}
        name="Easing"
      />
      <Switch
        disabled={disabled}
        checked={animateParams.Replay}
        onChange={onChange}
        name="Replay"
      />
    </aside>
  );
});
