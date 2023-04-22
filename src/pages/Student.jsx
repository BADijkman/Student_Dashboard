import React from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import "../CSS/student.css";
// import Brightness1Icon from "@mui/icons-material/Brightness1";
import {
  CalendarToday,
  LocationSearching,
  MailOutline,
  PermIdentity,
  PhoneAndroid,
} from "@mui/icons-material";

import { studentInfo } from "../studentInfo";
import studentsData from "../studentData.json";

// get studentDetails by ID
const getStudentByFirstName = (firstName) => {
  return studentInfo.find((student) => student.firstName === firstName);
};

const Student = () => {
  const params = useParams();
  let studentInfo = getStudentByFirstName(params.firstName);

  // if (! studentInfo) {
  //     return (console.log("not found"))
  // }

  return (
    <div className="student">
      <div className="studentTitleContainer">
        <h1 className="studentTitle">Student Info </h1>
      </div>

      <div className="studentContainer">
        <div className="studentProfile">
          <div className="studentProfileTop">
            <img
              src={studentInfo.avatar}
              alt=""
              className="studentProfileImg"
            />
            <span className="studentProfileUsername">
                {studentInfo.firstName} {studentInfo.lastName}
            </span>
            
          </div>
          <div className="studentProfileBottom">
            <span className="studentProfileTitle"> Account Details </span>

            <div className="studentProfileInfo">
              <PermIdentity className="studentProfileIcon" />
              <span className="studentProfileInfoTitle">
                
                Studentnumber: {studentInfo.id}
              </span>
            </div>

            <div className="studentProfileInfo">
              <CalendarToday className="studentProfileIcon" />
              <span className="studentProfileInfoTitle">
                
                {studentInfo.dateOfBirth}{" "}
              </span>
            </div>



            <div className="studentProfileInfo">
              <PhoneAndroid className="studentProfileIcon" />
              <span className="studentProfileInfoTitle">
                
                {studentInfo.phone}{" "}
              </span>
            </div>

            <div className="studentProfileInfo">
              <MailOutline className="studentProfileIcon" />
              <span className="studentProfileInfoTitle">
         
                {studentInfo.email}{" "}
              </span>
            </div>

            <div className="studentProfileInfo">
              <LocationSearching className="studentProfileIcon" />
              <span className="studentProfileInfoTitle">
              
                {studentInfo.location}{" "}
              </span>
            </div>

            
          </div>

          
        </div>
      </div>

      <Link to="/studentList">
              <button className="studentGoBackButton"> Back </button>
            </Link>
    </div>
  );
};

export default Student;
