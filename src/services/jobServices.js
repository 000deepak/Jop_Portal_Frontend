import service from "./axios";

let url = "http://localhost:4000/api/v1";

const header = {
  headers: {
    token: localStorage.getItem("token"),
  },
};

const jobService = {
  //------------------------------------recruiter

  //signup and signin
  recruiterSignup: (data) => {
    return service.postMethod(`${url}/recruiter/register`, data);
  },

  recruiterSignin: (data) => {
    return service.postMethod(`${url}/recruiter/login`, data);
  },

  //post jobs
  postJob: (data) => {
    return service.postMethod(`${url}/job/job`, data, header);
  },

  //get candidates
  getCandidates: (data) => {
    console.log(header,"in get candidates")

    return service.getMethod(`${url}/recruiter/candidates/${data}`, header);
  },

  //get posted jobs
  getPostedJobs: (data) => {
    console.log(header,"in get posted jobs")
    return service.getMethod(`${url}/recruiter/jobs`, header);
  },

  //------------------------------------candidate

  //signup and signin
  candidateSignup: (data) => {
    return service.postMethod(`${url}/candidate/register`, data);
  },

  candidateSignin: (data) => {
    return service.postMethod(`${url}/candidate/login`, data);
  },

  //add candidate details
  addCandidateDetails: (data) => {
    return service.postMethod(`${url}/candidate/detail`, data, header);
  },

  //get candidate details
  getCandidateDetails: () => {
    console.log("in get candidate details", header);

    return service.getMethod(`${url}/candidate/detail`, header);
  },

  //apply
  apply: (data) => {
    return service.postMethod(`${url}/candidate/apply/${data}`, data, header);
  },

  //------------------------------------get jobs
  getJobs: () => {
    return service.getMethod(`${url}/job/job`, header);
  },
};

export default jobService;
