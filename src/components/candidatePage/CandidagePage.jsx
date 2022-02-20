import React from "react";
import Button from "@mui/material/Button";
import service from "../../services/jobServices";
import bookImage from "../../assets/Image 11.png";
import Snackbar from "@mui/material/Snackbar";
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";

import "./candidatePage.scss";

export default function Jobs(props) {
  const [snackBar, setsnackBar] = React.useState(false);

  const handleClosesnackBar = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setsnackBar(false);
  };

  const action = (
    <React.Fragment>
      <IconButton size="small" aria-label="close" color="inherit" onClick={handleClosesnackBar}>
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

  React.useEffect(() => {
    props.getJobs();
  }, []);

  const handleApply = (item) => {
    let jobId = item._id;
    // console.log(item, jobId);
    service
      .apply(jobId)
      .then((res) => {
        console.log(res);
        setsnackBar(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="main-job">
      <div className="job-area">
        <div className="job-main">
          <h3 className="my-job" style={{ fontSize: "20px", fontWeight: "800px" }}>
            {" "}
            Available Jobs ({props.jobArr.length})
          </h3>
          {/* job items */}
          {props.jobArr.map((item) => (
            <div className="job-border">
              <div className="company-logo" style={{ padding: "2rem" }}>
                <img src={bookImage}></img>
              </div>
              <div className="job-items">
                <div>
                  <div className="price" style={{ fontSize: "bold" }}>
                    Company: {item.companyName}
                  </div>
                  <div className="price" style={{ fontSize: "bold" }}>
                    Post: {item.postName}
                  </div>
                  <div className="price" style={{ fontSize: "bold" }}>
                    Location: {item.location}
                  </div>
                  <div className="price" style={{ fontSize: "bold" }}>
                    type: {item.type}
                  </div>
                </div>
                <div>
                  <div className="price" style={{ fontSize: "bold" }}>
                    Required Experience: {item.experience} Years
                  </div>
                  <div className="price" style={{ fontSize: "bold" }}>
                    Package: {item.salary} lpa
                  </div>
                  <div className="price" style={{ fontSize: "bold" }}>
                    Required Skills: {item.skills}
                  </div>
                  <div className="price" style={{ fontSize: "bold" }}>
                    HR Email: {item.hrEmail}
                  </div>
                </div>
              </div>
              <div>
                {/*showButton */}
                <div style={{ padding: "1rem" }}>
                  <Snackbar
                    open={snackBar}
                    autoHideDuration={3000}
                    onClose={handleClosesnackBar}
                    message="Applied To Job Successfully"
                    action={action}
                  />
                  <Button
                    onClick={() => handleApply(item)}
                    style={{ backgroundColor: "#3371B5", color: "white" }}
                  >
                    Apply
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
