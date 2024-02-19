import "./style.css";

export const Navbar = ({ animate }) => {
  return (
    <nav>
      <img
        width="32"
        height="32"
        src={require("../../assets/icons/Logo.png")}
        alt="logo"
      />
      <button onClick={animate}>Preview</button>
    </nav>
  );
};
