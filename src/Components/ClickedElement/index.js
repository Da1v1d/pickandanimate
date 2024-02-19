import { Rectangles } from "./Rectangles";
import "./style.css";

export const ClickedElement = ({ children, clicked }) => {
  return (
    <div className={clicked ? "clicked-element" : null}>
      {children}
      {clicked && <Rectangles />}
    </div>
  );
};
