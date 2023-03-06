import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MainNews from "./Components/MainNews";
import MainProfile from "./Components/MainProfile";
import JobPage from "./Components/JobsPage";
import CustomNavbar from "./Components/CustomNavbar";
import CustomeFooter from "./Components/CustomFooter";

// import Aside from "./Components/Aside";

function App() {
  return (
    <>
      <BrowserRouter>
        <CustomNavbar />
        <Routes>
          <Route path="/" element={<MainNews />}></Route>
          {/*  <Route path="/profile" element={<MainProfile />}></Route> */}
          <Route path="/profile/:id" element={<MainProfile />}></Route>
          <Route path="/jobd" element={<JobPage />} />
        </Routes>
        <CustomeFooter />
      </BrowserRouter>
    </>
  );
}

export default App;
