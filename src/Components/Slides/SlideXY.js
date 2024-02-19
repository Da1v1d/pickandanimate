import "./style.css";
import { Slide } from "./Slide";
import { styleRange } from "../../utils/slide";

export const SlideXY = ({ property, value, handleChange, name, ...props }) => {
  const onChange = (e) => {
    handleChange(e);
    styleRange(e.target);
  };

  return (
    <Slide
      name={name}
      property={property}
      value={value}
      onChange={onChange}
      {...props}
    />
  );
};
