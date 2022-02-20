import "./App.css";
import User from "../src/pages/user/User";
import Dashboard from "./pages/dashboard/Dashboard";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<User />} />
        <Route path="/candidate" element={<Dashboard mode="can" />}></Route>
        <Route path="/recruiter" element={<Dashboard mode="rec" />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
