import HeaderCartButton from "./HeaderCartButton";
import "./Header.css"

const Header = () => {
  return (
    <div className="header">
      <h1 className="logo">Medicine Store</h1>
      <HeaderCartButton />
    </div>
  );
};

export default Header;
