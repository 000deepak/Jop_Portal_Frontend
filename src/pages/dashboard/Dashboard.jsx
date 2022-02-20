import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/footer";
import CandidatePage from "../../components/candidatePage/CandidagePage";
import RecruiterPage from "../../components/recruiterPage/RecruiterPage";
import service from "../../services/jobServices";
import CandidateDetails from "../../components/candidateDetails/CandidateDetails";
import { useNavigate } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

//css
import "./dashboard.scss";

export default function Dashboard(props) {
  let navigate = useNavigate();

  const [jobs, setJobs] = React.useState([]);
  const [details, setDetails] = React.useState(true);

  React.useEffect(() => {
    getCandidateDetail();
    getJob();
  }, []);

  const getJob = () => {
    service
      .getJobs()
      .then((res) => {
        console.log(res);

        setJobs(res.data.data);

        console.log(jobs, "set jobs");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const addCandidateDetails = (details) => {
    console.log(details);
    service
      .addCandidateDetails(details)
      .then((res) => {
        setDetails(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getCandidateDetail = () => {
    service
      .getCandidateDetails()
      .then((res) => {
        if (res.data.data.length > 0) setDetails(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const showPage = () => {
    let show = "";

    if (props.mode == "rec") {
      show = <RecruiterPage />;
    } else if (props.mode == "can") {
      show = (
        <div>
          {details ? (
            <CandidateDetails addCandidateDetails={addCandidateDetails} />
          ) : (
            <CandidatePage jobArr={jobs} getJobs={getJob} />
          )}
        </div>
      );
    } else {
      show = "Page Not found";
    }
    return show;
  };

  return (
    <div className="book-dashboard" style={{ minHeight: "100vh" }}>
      <div>
        <Header />
      </div>

      <div>{showPage()}</div>

      <div>
        <Footer />
      </div>
    </div>
  );
}
