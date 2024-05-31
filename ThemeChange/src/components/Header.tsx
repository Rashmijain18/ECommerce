import "../styles/main.scss";
import logo from "../assets/main_logo.svg";
import { useState } from "react";
import Theme from "./Theme";

const Header = () => {
  const [openThemeDialog, SetOpenThemeDialog] = useState<boolean>(false);

  return (
    <>
      <nav className="header">
        <div className="container">
          <div className="navbar-brand">
            <img src={logo}></img>
          </div>
          <ul className="navbar-options">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Shop</a>
            </li>
            <li>
              <a href="#">Featured</a>
            </li>
            <li>
              <a href="#">Recommended</a>
            </li>
            <li onClick={() => SetOpenThemeDialog(!openThemeDialog)}>
              Change Theme
            </li>
          </ul>
        </div>
      </nav>
      <Theme
        showDialog={openThemeDialog}
        closeDialog={() => SetOpenThemeDialog(false)}
      />
    </>
  );
};

export default Header;
