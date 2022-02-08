//--------------IMPORTS---------------------------
import React from "react";
import './styles/App.css'
//dependencies
  import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//components
  import { Home, Checkout, Login, ProductView, Search, Departments, Department, SubDepartments } from "./pages/index";

//--------------END_IMPORTS--------------------------



//-------------COMPONENT-------------------------
export default function App() {

return (
  <>
    <Router>
      <Routes>
        
        <Route path="/product-view" element={<ProductView />} />
        <Route path="/login" element={<Login />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/search" element={<Search />} />
        <Route path="/departments" element={<Departments />} />
        <Route path="/sub-departments" element={<SubDepartments />} />
        <Route path="/department" element={<Department />} />
        <Route path="/" element={<Home />} />
 
      </Routes>
    </Router>
    
  </>
);
}
