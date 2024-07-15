import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./components/HomePage";
import PublicNavbar from "./components/PublicNavbar";
import PrivateNavbar from "./components/PrivateNavbar";
import Login from "./components/Login";
import { useSelector } from "react-redux";
import Register from "./components/Register";
import Profile from "./components/UserProfile";

function App() {
  const userData = useSelector((state) => state?.auth?.user);

  return (
    <BrowserRouter>
      {userData ? <PrivateNavbar /> : <PublicNavbar />}
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
