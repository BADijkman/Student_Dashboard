import React from "react";
import "../CSS/footer.css";

const footer = () => {
  return (
    <div className="footer">
      <div className="footerWrapper">
        <span className="footerText">
        Front-end Development Winc Academy copyright DykeyDesign © {new Date().getFullYear()}
        </span>
      </div>
    </div>
  );
};

export default footer;
