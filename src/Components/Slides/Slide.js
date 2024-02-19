import { memo, useRef } from "react";
import { setWidth } from "../../utils/slide";
import "./style.css";

const properties = ["X", "Y"];

export const Slide = ({ property, ...props }) => {
  const ref = useRef();
  if (!properties.includes(property)) {
    setWidth(ref.current);
  }
  return (
    <div className="parent-input">
      <p className="text-right">{property}</p>
      <input ref={ref} type="range" {...props} />
      <p className="text-left">
        {props.transform ? props.transform(props.value) : props.value}
      </p>
    </div>
  );
};
