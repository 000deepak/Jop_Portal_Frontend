import React from "react";
import Button from "@mui/material/Button";
import service from "../../services/jobServices";
import bookImage from "../../assets/Image 11.png";
import JobDetails from "../jobDetails/JobDetails";

import "./recruiterPage.scss";

export default function RecruiterPage(props) {
  const [postedJobs, setPostedJobs] = React.useState([]);
  const [getCan, setGetCan] = React.useState(false);
  const [jobDetails, setjobDetails] = React.useState(false);
  const [candidates, setCandidates] = React.useState([]);

  React.useEffect(() => {
    getPostedJob();
  }, []);

  const getPostedJob = () => {
    service
      .getPostedJobs()
      .then((res) => {
        console.log(res.data, "posted jobs api");
        setPostedJobs(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handlejobDetails = () => {
    setjobDetails(!jobDetails);
  };

  const handlePost = (data) => {
    service
      .postJob(data)
      .then((res) => {
        console.log(res);
        setjobDetails(!jobDetails);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleGetCandidates = (item) => {
    const jobId = item._id;
    service
      .getCandidates(jobId)
      .then((res) => {
        console.log(res);
        setCandidates(res.data.data);
        setGetCan(!getCan);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleBack = () => {
    setGetCan(!getCan);
  };

  return (
    <div className="main-job">
      <div className="job-area">
        <div className="job-main">
          <div className="post-jobs">
            <div>
              {jobDetails ? (
                <h3 className="my-job" style={{ fontSize: "20px", fontWeight: "800px" }}>
                  Please Enter The Details Of The Job You Want To Post
                </h3>
              ) : (
                <div>
                  {getCan ? (
                    <h3 className="my-job" style={{ fontSize: "20px", fontWeight: "800px" }}>
                      Candidates Who Applied For Given Job({candidates.length})
                    </h3>
                  ) : (
                    <h3 className="my-job" style={{ fontSize: "20px", fontWeight: "800px" }}>
                      Jobs Posted By You({postedJobs.length})
                    </h3>
                  )}
                </div>
              )}
            </div>
            <div>
              {jobDetails ? (
                <JobDetails handlePost={handlePost} handlejobDetails={handlejobDetails} />
              ) : (
                <Button
                  className="postjobsButton"
                  onClick={handlejobDetails}
                  style={{ backgroundColor: "#3371B5", color: "white" }}
                >
                  Post Jobs
                </Button>
              )}
            </div>
          </div>
          {getCan ? (
            <div>
              {/* candidate items */}
              {candidates.map((item) => (
                <div className="job-border">
                  <div className="company-logo" style={{ padding: "2rem" }}>
                    <img src={bookImage}></img>
                  </div>
                  <div className="job-items">
                    <div>
                      <div className="price" style={{ fontSize: "bold" }}>
                        First Name: {item.firstName}
                      </div>
                      <div className="price" style={{ fontSize: "bold" }}>
                        Last Name: {item.lastName}
                      </div>
                      <div className="price" style={{ fontSize: "bold" }}>
                        Email: {item.email}
                      </div>
                      <div className="price" style={{ fontSize: "bold" }}>
                        Gender: {item.gender}
                      </div>
                    </div>
                    <div>
                      <div className="price" style={{ fontSize: "bold" }}>
                        Education: {item.education}
                      </div>
                      <div className="price" style={{ fontSize: "bold" }}>
                        Experience: {item.experience} Years
                      </div>
                      <div className="price" style={{ fontSize: "bold" }}>
                        Expected CTC: {item.salary} lpa
                      </div>
                      <div className="price" style={{ fontSize: "bold" }}>
                        Skills: {item.skills}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              <div className="get-candidate" style={{ padding: "1rem" }}>
                <Button onClick={handleBack} style={{ backgroundColor: "#3371B5", color: "white" }}>
                  Go Back
                </Button>
              </div>
            </div>
          ) : (
            <div>
              {/* posted job items */}
              {postedJobs.map((item) => (
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
                  {/* button */}
                  <div>
                    {postedJobs.length > 0 ? (
                      <div className="get-candidate" style={{ padding: "1rem" }}>
                        <Button
                          onClick={() => handleGetCandidates(item)}
                          style={{ backgroundColor: "#3371B5", color: "white" }}
                        >
                          Get Candidates
                        </Button>
                      </div>
                    ) : null}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
