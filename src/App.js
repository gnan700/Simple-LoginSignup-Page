import Homepage from "./components/HomePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignupPage from "./components/SignupPage";
import UserPage from "./components/UserPage";
import LoginPage from "./components/LoginPage";

function App() {

  return (
    <div>
       <Router>
        <Routes>
          <Route path="/" element={< Homepage />}></Route>
          <Route path="/SignupPage" element={< SignupPage />}></Route>
          <Route path="/UserPage" element={< UserPage />}></Route>
          <Route path="LoginPage" element={< LoginPage />}></Route>
        </Routes>
      </Router> 
         
    </div>
  );
}

export default App;
