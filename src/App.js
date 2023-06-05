import Home from "./pages/home/Home";
import { Routes, Route } from "react-router-dom";
import Profile from "./pages/profile/Profile.jsx";
import Login from "./components/login/Login.jsx";
import Register from "./components/register/Register.jsx";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/profile/:username" element={<Profile />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
  // return <Profile />;
  // return <Login />;
  // return <Register />;
}

export default App;
