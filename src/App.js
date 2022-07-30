import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Shared/Navbar";
import Suppliers from "./Components/Suppliers/Suppliers";
import Blog from "./Components/Blog/Blog";
import Register from "./Components/Entry/Register";
import Login from "./Components/Entry/Login";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/suppliers" element={<Suppliers></Suppliers>}></Route>
        <Route path="/blog" element={<Blog></Blog>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
      </Routes>
    </div>
  );
}

export default App;
