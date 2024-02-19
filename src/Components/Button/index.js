import { ClickedElement } from "../ClickedElement";
import "./style.css";

export const Button = ({ children, clicked, ...props }) => {
  return (
    <ClickedElement clicked={clicked}>
      <button type="button" {...props}>
        Button
      </button>
    </ClickedElement>
  );
};
