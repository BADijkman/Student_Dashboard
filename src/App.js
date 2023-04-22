import React from "react";
import "./App.css"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Home from "./pages/Home";
import StudentList from "./pages/StudentList";
import Analytics from "./pages/Analytics";
import Student from"./pages/Student";

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
            <Route path="/StudentList" element={<StudentList />} />
            <Route path="/Analytics" element={<Analytics />} />
            <Route path="/students/:firstName" element={<Student />} />
          </Routes>
        </div>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
