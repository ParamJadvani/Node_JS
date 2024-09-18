import { Route, Routes, Navigate } from "react-router-dom";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Home from "./Home";

const App = () => {
  return (
    <div className="App">
      <Routes>
        {/* <Route path="/" element={user ? <Home /> : <Navigate to="/signup" />} /> */}
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
};

export default App;
