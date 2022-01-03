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

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />{" "}
        <Route path="/home" element={<Navigate replace to="/" />} />
        <Route path="/add" element={<AddNew />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/register" element={<Register />} />
        <Route path="/about" element={<About />} />
        <Route path="/model/:id" element={<ModelDetail />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
