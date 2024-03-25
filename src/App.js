import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import SignIn from './pages/SignIn';
import SignUp from "./pages/SignUp";
import Header from "./components/Header";
import FindJobs from "./pages/FindJobs";
import UploadJob from "./pages/UploadJob";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/find-jobs" element={<FindJobs />} />
          <Route path="/upload-job" element={<UploadJob />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
