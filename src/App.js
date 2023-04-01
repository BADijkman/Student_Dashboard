import React from "react";
import "./App.css"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Home from "./pages/Home";
import Students from "./pages/Students";
import Analytics from "./pages/Analytics";

import TopBar from "./components/Topbar";
import SideBar from "./components/Sidebar";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <div>
        <TopBar />
        <div class="maincontainer">
          <SideBar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Students" element={<Students />} />
            <Route path="/Analytics" element={<Analytics />} />
          </Routes>
        </div>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
