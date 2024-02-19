import { useRef } from "react";
import { setWidth } from "../../utils/slide";
import "./style.css";

export const Slide = ({ property, ...props }) => {
  const ref = useRef();
  if (property !== 'X' || property !== 'Y') {
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
