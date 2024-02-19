import "./style.css";
import "../Slides/style.css";

export const Switch = (props) => {
  return (
    <div className="parent-input">
      <p className="text-right">Replay</p>

      <label className="switch">
        <input type="checkbox" name="Replay" {...props} />
        <span className="slider round"></span>
      </label>
    </div>
  );
};
