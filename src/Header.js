import React, { useState } from "react";
import { Link } from 'react-router-dom';
import Logo from "./background-image/icon.png";
import ReorderIcon from "@mui/icons-material/DensitySmall";
import './Header.css';

function Header() {
  const [openLinks, setOpenLinks] = useState(false);

  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };
  return (
    <div className="navbar">
      <div className="leftSide" id={openLinks ? "open" : "close"}>
        <img src={Logo} alt="varicose veins classifier"/>
        <div className="hiddenLinks">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
        </div>
      </div>
      <div className="rightSide">
        <Link to="/"> Home </Link>
        <Link to="/about">About</Link>
        <button onClick={toggleNavbar}>
          <ReorderIcon />
        </button>
      </div>
    </div>
  );
}
export default Header;
