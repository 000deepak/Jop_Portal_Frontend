import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import service from "../../services/jobServices";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

import "./signin.scss";

function Signin() {
  //------------------------------------------radio
  const [value, setValue] = React.useState("Candidate");

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  //------------------------------------------radio

  const navigate = useNavigate();
  const [field, setField] = useState({
    email: "",
    password: "",
    emailError: false,
    passwordError: false,
  });

  const changeField = (e) => {
    setField((previousvalues) => {
      return { ...previousvalues, [e.target.name]: e.target.value };
    });
  };

  const validation = () => {
    let isError = false;
    let emailError = field.email === "" ? true : false;
    let passwordError = field.password === "" ? true : false;

    setField((previousvalues) => {
      return { ...previousvalues, emailError: emailError, passwordError: passwordError };
    });
    return (isError = field.emailError || field.passwordError);
  };

  const next = () => {
    let validated = validation();
    if (!validated) {
      let data = {
        email: field.email,
        password: field.password,
      };

      if (value == "Candidate") {
        service
          // .recruiterSignin(data)
          .candidateSignin(data)
          .then((res) => {
            console.log(res);
            localStorage.setItem("firstName", res.data.data.firstName);
            localStorage.setItem("lastName", res.data.data.lastName);
            localStorage.setItem("email", res.data.data.email);
            localStorage.setItem("token", res.data.data.token);
            localStorage.setItem("candidateId", res.data.data.candidateId);

            navigate("/candidate");
          })
          .catch((res) => {});
      } else if (value == "Recruiter") {
        service
          .recruiterSignin(data)
          .then((res) => {
            console.log(res);
            localStorage.setItem("firstName", res.data.data.firstName);
            localStorage.setItem("lastName", res.data.data.lastName);
            localStorage.setItem("email", res.data.data.email);
            localStorage.setItem("token", res.data.data.token);
            localStorage.setItem("recruiterId", res.data.data.recruiterId);

            navigate("/recruiter");
          })
          .catch((res) => {});
      } else {
        alert("Tell Us Who You Are");
      }
    }
  };

  return (
    <div className="login-form">
      <FormControl>
        <FormLabel id="demo-controlled-radio-buttons-group">Can We Know Who You Are?</FormLabel>
        <RadioGroup
          row
          aria-labelledby="demo-controlled-radio-buttons-group"
          name="controlled-radio-buttons-group"
          value={value}
          onChange={handleChange}
        >
          <FormControlLabel value="Candidate" control={<Radio />} label="Candidate" />
          <FormControlLabel value="Recruiter" control={<Radio />} label="Recruiter" />
        </RadioGroup>
      </FormControl>
      <div>
        <TextField
          id="outlined-basic"
          name="email"
          label="Email"
          variant="outlined"
          size="medium"
          className="email"
          fullWidth
          autoFocus="true"
          helperText={
            field.emailError ? "email is required" : " You can use letters,numbers & periods"
          }
          error={field.emailError}
          onChange={(e) => {
            changeField(e);
          }}
        />
      </div>
      <div>
        <TextField
          id="outlined-basic"
          name="password"
          label="password"
          variant="outlined"
          size="medium"
          className="email"
          fullWidth
          type="password"
          helperText={field.passwordError ? "Password is required" : " "}
          error={field.passwordError}
          onChange={(e) => {
            changeField(e);
          }}
        />
      </div>
      <div className="forgot" style={{ paddingLeft: "2rem", paddingBottom: "1rem" }}>
        Forgot Password?
      </div>
      <div className="loginButton" onClick={next}>
        <Button
          variant="contained"
          size="small"
          style={{ backgroundColor: "#C03A2B", width: "100%" }}
        >
          Login
        </Button>
      </div>
   

    </div>
  );
}

export default Signin;
