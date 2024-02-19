import "../Slides/style.css";
import "./style.css";

export const Select = (props) => {
  return (
    <div className="parent-input">
      <p className="text-right">Easing</p>
      <div className="parent-select">
        <select name="Easing" {...props}>
          <option value="ease">ease</option>
          <option value="ease-in">ease-in</option>
          <option value="ease-out">ease-out</option>
          <option value="ease-in-out">ease-in-out</option>
          <option value="linear">linear</option>
          <option value="step-start">step-start</option>
          <option value="step-end">step-end</option>
        </select>
      </div>
    </div>
  );
};
