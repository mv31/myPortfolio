import React, { useState,useEffect } from "react";
import { Link,useLocation } from "react-router-dom";
import "../styles/navbar.css";
import ReorderIcon from "@material-ui/icons/Reorder";
import Footer from "./Footer";
function Navbar() {
  const location = useLocation();
  const [expandNavBar, setExpandNavbar] = useState(false);
  useEffect(() => {
    setExpandNavbar(false)
  }, [location])
  
  return (
    <div className="navbar" id={expandNavBar ? "open" : "close"}>
      <div className="toggleButton">
        <button
          onClick={() => {
            setExpandNavbar((prev) => !prev);
          }}
        >
          {" "}
          {<ReorderIcon />}
        </button>
      </div>
      <div className="links">
        <Link to={"/"}>Home</Link>
        <Link to={"/projects"}>Projects</Link>
        <Link to={"/experience"}>Experience</Link>
      </div>
     
    </div>
  );
}

export default Navbar;
