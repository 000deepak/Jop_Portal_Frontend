import React from "react";
import Button from "@mui/material/Button";
import service from "../../services/jobServices";
import TextField from "@mui/material/TextField";
import "./jobDetails.scss";

export default function CandidateDetails(props) {
  const [field, setField] = React.useState({
    companyName: "",
    postName: "",
    location: "",
    gender: "",
    education: "",
    experience: "",
    salary: "",
    skills: "",

    companyNameError: false,
    postNameError: false,
    locationError: false,
    genderError: false,
    educationError: false,
    experienceError: false,
    salaryError: false,
    skillsError: false,
  });

  const changeField = (e) => {
    setField((previousvalues) => {
      return { ...previousvalues, [e.target.name]: e.target.value };
    });
  };

  const validation = () => {
    let isError = false;
    let companyNameError = field.companyName === "" ? true : false;
    let postNameError = field.postName === "" ? true : false;
    let locationError = field.location === "" ? true : false;
    let genderError = field.gender === "" ? true : false;

    let educationError = field.education === "" ? true : false;
    let experienceError = field.experience === "" ? true : false;
    let salaryError = field.salary === "" ? true : false;
    let skillsError = field.skills === "" ? true : false;

    setField((previousvalues) => {
      return {
        ...previousvalues,
        companyNameError: companyNameError,
        postNameError: postNameError,
        locationError: locationError,
        genderError: genderError,

        educationError: educationError,
        experienceError: experienceError,
        salaryError: salaryError,
        skillsErrorr: skillsError,
      };
    });
    return (isError =
      field.locationError ||
      field.genderError ||
      field.companyNameError ||
      field.postNameError ||
      field.educationError ||
      field.experienceError ||
      field.skillsError ||
      field.salaryError);
  };

  const next = () => {
    let validated = validation();
    if (!validated) {
      let data = {
        companyName: field.companyName,
        postName: field.postName,
        location: field.location,
        gender: field.gender,
        education: field.education,
        experience: field.experience,
        skills: field.skills,
        salary: field.salary,
      };

      // addCandidateDetails api
      props.handlePost(data);
    }
  };

  const handelCancel = () => {
    props.handlejobDetails();
  };

  return (
    <div className="customer-details">
      <form className="customer-form">
        <div>Job Details</div>
        <br></br>
        <div className="name" style={{ display: "flex", justifyContent: "space-between" }}>
          <TextField
            style={{ width: "45%" }}
            id="outlined-basic"
            name="companyName"
            label="companyName"
            variant="outlined"
            size="small"
            className="form-detail"
            autoFocus
            helperText={field.companyNameError ? "companyName is required" : " "}
            error={field.companyNameError}
            onChange={(e) => {
              changeField(e);
            }}
          ></TextField>
          <TextField
            style={{ width: "45%" }}
            id="outlined-basic"
            name="postName"
            label="postName"
            variant="outlined"
            size="small"
            className="form-detail"
            helperText={field.postNameError ? "postName is required" : " "}
            error={field.postNameError}
            onChange={(e) => {
              changeField(e);
            }}
          ></TextField>
        </div>
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
        <div>
          <TextField
            style={{ width: "100%" }}
            id="outlined-basic"
            name="location"
            label="location"
            variant="outlined"
            size="small"
            className="form-detail"
            helperText={field.locationError ? "location is required" : " "}
            error={field.locationError}
            onChange={(e) => {
              changeField(e);
            }}
          ></TextField>
        </div>
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
            name="salary"
            label="salary"
            variant="outlined"
            size="small"
            className="form-detail"
            helperText={field.salaryError ? " salary is required" : " "}
            error={field.salaryError}
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
        <Button onClick={handelCancel} style={{ backgroundColor: "white", color: "grey" }}>
          Cancel
        </Button>
      </form>
    </div>
  );
}
