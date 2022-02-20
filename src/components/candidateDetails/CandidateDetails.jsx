import React from "react";
import Button from "@mui/material/Button";
import service from "../../services/jobServices";
import TextField from "@mui/material/TextField";
import "./candidateDetails.scss";

export default function CandidateDetails(props) {
  const [field, setField] = React.useState({
    gender: "",
    education: "",
    experience: "",
    expectedCTC: "",
    skills: "",

    genderError: false,
    educationError: false,
    experienceError: false,
    expectedCTCError: false,
    skillsError: false,
  });

  const changeField = (e) => {
    setField((previousvalues) => {
      return { ...previousvalues, [e.target.name]: e.target.value };
    });
  };

  const validation = () => {
    let isError = false;

    let genderError = field.gender === "" ? true : false;
    let educationError = field.education === "" ? true : false;
    let experienceError = field.experience === "" ? true : false;
    let expectedCTCError = field.expectedCTC === "" ? true : false;
    let skillsError = field.skills === "" ? true : false;

    setField((previousvalues) => {
      return {
        ...previousvalues,

        genderError: genderError,

        educationError: educationError,
        experienceError: experienceError,
        expectedCTCError: expectedCTCError,
        skillsErrorr: skillsError,
      };
    });
    return (isError =
      field.genderError ||
      field.educationError ||
      field.experienceError ||
      field.skillsError ||
      field.expectedCTCError);
  };

  const next = () => {
    let validated = validation();
    if (!validated) {
      let data = {
        firstName: localStorage.getItem("firstName"),
        lastName: localStorage.getItem("lastName"),
        email: localStorage.getItem("email"),
        gender: field.gender,
        education: field.education,
        experience: field.experience,
        skills: field.skills,
        expectedCTC: field.expectedCTC,
      };

      console.log(data);

      // addCandidateDetails api
      props.addCandidateDetails(data);
    }
  };

  return (
    <div className="customer-details">
      <form className="customer-form">
        <div>Cadidate Details</div>
        <br></br>

        <br></br>
        <div className="name" style={{ display: "flex", justifyContent: "space-between" }}>
          <TextField
            style={{ width: "45%" }}
            id="outlined-basic"
            name="education"
            label="education"
            variant="outlined"
            size="small"
            className=" "
            fullWidth
            helperText={field.educationError ? " education is required" : " "}
            error={field.educationError}
            onChange={(e) => {
              changeField(e);
            }}
          ></TextField>
          <TextField
            style={{ width: "45%" }}
            id="outlined-basic"
            name="gender"
            label="gender"
            variant="outlined"
            size="small"
            className="form-detail"
            helperText={field.genderError ? " gender is required" : " "}
            error={field.genderError}
            onChange={(e) => {
              changeField(e);
            }}
          ></TextField>
        </div>
        <br></br>

        <br></br>
        <div className="name" style={{ display: "flex", justifyContent: "space-between" }}>
          <TextField
            style={{ width: "45%" }}
            id="outlined-basic"
            name="experience"
            label="experience"
            variant="outlined"
            size="small"
            className="form-detail"
            helperText={field.experienceError ? " experience is required" : " "}
            error={field.experienceError}
            onChange={(e) => {
              changeField(e);
            }}
          ></TextField>
          <TextField
            style={{ width: "45%" }}
            id="outlined-basic"
            name="expectedCTC"
            label="expectedCTC"
            variant="outlined"
            size="small"
            className="form-detail"
            helperText={field.expectedCTCError ? " expectedCTC is required" : " "}
            error={field.expectedCTCError}
            onChange={(e) => {
              changeField(e);
            }}
          ></TextField>
        </div>
        <br></br>
        <TextField
          style={{ width: "100%" }}
          id="outlined-basic"
          name="skills"
          label="skills"
          variant="outlined"
          size="small"
          className="form-detail"
          onChange={(e) => {
            changeField(e);
          }}
        ></TextField>

        <br></br>

        <Button onClick={next} style={{ backgroundColor: "#3371B5", color: "white" }}>
          Continue
        </Button>
      </form>
    </div>
  );
}
