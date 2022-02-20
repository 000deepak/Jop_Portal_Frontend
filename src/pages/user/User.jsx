import React, { useState } from "react";
import logo from "../../assets/domaincer.png";
import Signin from "../../components/signin/Signin";
import Signup from "../../components/signup/Signup";

import "./user.scss";

function User() {
  const [login, setLogin] = useState(true);

  let handleSwitch = () => {
    setLogin(!login);
  };

  return (
    <div>
      <div className="mainpage">
        <div className="content">
          <div className="image">
            <img
              className="mainLogo"
              src={logo}
              alt="this is logo"
              style={{ width: "245px", height: "245px" }}
            ></img>
            <h3 style={{ paddingLeft: "6rem", paddingTop: "0rem" }}>Domaincer Jobs</h3>
          </div>

          <div className="formContainer">
            <div className="switch">
              <h5 className="sign" onClick={handleSwitch} style={{ fontSize: "25px" }}>
                Signin
              </h5>
              <h5 className="sign" onClick={handleSwitch} style={{ fontSize: "25px" }}>
                Signup
              </h5>
            </div>
            <div className="include-form">{login ? <Signin /> : <Signup />}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default User;
