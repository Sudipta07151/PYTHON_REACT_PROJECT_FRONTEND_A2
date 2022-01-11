import "./App.css";
import { Route, Routes,Navigate  } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import AddNew from "./pages/AddNew";
import SignIn from "./pages/SignIn";
import Register from "./pages/Register";
import About from "./pages/About";
import ModelDetail from "./pages/ModelDetail";
import Profile from "./pages/Profile";
import Mymlblogs from "./pages/Mymlblogs";
import Search from "./pages/Search";
import Alert from "./components/Alert";

import { useAuthContext } from "./hooks/useAuthContext";

function App() {
  const {user}=useAuthContext();

  return (
    <div className="App">
      <Navbar />
      {!user&&<Alert/>}
      <Routes>
        <Route path="/" element={<Home />} />{" "}
        <Route path="/home" element={<Navigate replace to="/" />} />
        <Route path="/add" element={<AddNew />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/register" element={<Register />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/myarticles" element={<Mymlblogs />} />
        <Route path="/search" element={<Search/>}/>
        <Route path="/model/:id" element={<ModelDetail />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
