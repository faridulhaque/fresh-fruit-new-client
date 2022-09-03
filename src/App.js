import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Shared/Navbar";
import Suppliers from "./Components/Suppliers/Suppliers";
import Blog from "./Components/Blog/Blog";
import Register from "./Components/Entry/Register";
import Login from "./Components/Entry/Login";
import AddNewItem from "./Components/securedRoutes/AddNewItem";
import MyItems from "./Components/securedRoutes/MyItems";
import SingleItem from "./Components/securedRoutes/SingleItem";
import Footer from "./Components/Shared/Footer";
import AllItems from "./Components/securedRoutes/AllItems";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div>
      <ToastContainer></ToastContainer>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/suppliers" element={<Suppliers></Suppliers>}></Route>
        <Route path="/blog" element={<Blog></Blog>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/addNewItem" element={<AddNewItem></AddNewItem>}></Route>
        <Route path="/myItems" element={<MyItems></MyItems>}></Route>
        <Route path="/home/:id" element={<SingleItem></SingleItem>}></Route>
        <Route path="/allItems" element={<AllItems />}></Route>
      </Routes>
      <Footer></Footer>
      
    </div>
  );
}

export default App;
