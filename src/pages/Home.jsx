import React from "react";
import Textblock from "../components/Textblock"
import Widget from"../components/Widget";
import "../CSS/home.css";

const Home = () => {
  return (
    <div className="home">
      <div className="homeTextblock__head">
        <div className="homeTextblock">
         <Textblock/>
         <Textblock/>
         <Textblock/>
        </div>
      </div>
      <div className="homeWidgets">
        <Widget />
      </div>
      <div><Textblock/></div>

    </div>
  );
};

export default Home;
