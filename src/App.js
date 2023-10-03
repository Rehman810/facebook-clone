import "./App.css";
import Home from "./components/Home";
import Login from "./components/LoginOrSignUp/Login";
import SignUp from "./components/LoginOrSignUp/SignUp";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Login />
      {/* <BrowserRouter>
        <Routes>
          <>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/login" element={<SignUp />} />
          </>
        </Routes>
      </BrowserRouter> */}
    </div>
  );
}

export default App;
