import React from "react";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";

import SearchIcon from "@mui/icons-material/Search";
import PermIdentityTwoToneIcon from "@mui/icons-material/PermIdentityTwoTone";
import { useNavigate } from "react-router-dom";
import "./header.scss";

function Header() {
  const navigate = useNavigate();

  let user = localStorage.getItem("firstName");

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <div className="main-header">
      <div className="header">
        <div className="book-icon">
          <p style={{ color: "white" }}>Domaincer Jobs</p>
        </div>

        <div>
          <SearchIcon
            style={{
              display: "none",
              marginLeft: "2.5rem",
              paddingBottom: "2rem",
              position: "absolute",
            }}
            className="magicon"
          />
        </div>

        <div className="searchBar">
          <input className="search" type="text" placeholder="Search"></input>
        </div>

        <div style={{ color: "white" }}>
          <IconButton onClick={handleLogout}>
            <PermIdentityTwoToneIcon style={{ color: "white" }}></PermIdentityTwoToneIcon>
          </IconButton>
          <Button onClick={handleLogout} style={{ color: "white" }}>
            {" "}
            [{user}] Logout
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Header;
