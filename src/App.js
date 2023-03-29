import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// import Home from "./pages/Home";
// import PageNotFound from "./pages/PageNotFound";

import TopBar from "./components/Topbar";
import SideBar from "./components/Sidebar";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <TopBar />
      <SideBar />
      <Footer />
    </div>
  );
}

export default App;
