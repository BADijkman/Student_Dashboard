import React from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import "../CSS/student.css";
import Brightness1Icon from "@mui/icons-material/Brightness1";
import {
  CalendarToday,
  LocationSearching,
  MailOutline,
  PermIdentity,
  PhoneAndroid,
} from "@mui/icons-material";

import { studentInfo } from "../studentInfo";
import studentsData from "../studentData.json";
import Chart from "../components/Chart";


// get studentDetails by ID
const getStudentByFirstName = (firstName) => {
  return studentInfo.find((student) => student.firstName === firstName);
};

// group data
const dataPerStudent = studentsData.reduce((group, data) => {
  group[data.name] = group[data.name] ?? [];

  group[data.name].push({
    project: data.project,
    difficulty: data.difficulty,
    enjoyability: data.enjoyability,
  });

  return group;
}, {});






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



      <div className="studentChartContainer">
          <Chart
            data={dataPerStudent[studentInfo.firstName]}
            title={`Student Projects Chart of ${studentInfo.firstName} ${studentInfo.lastName}`}
            grid
            dataKeys={{
              difficulty: {
                color: "#6BCF93",
                enabled: true,
              },
              enjoyability: {
                color: "#4B9167",
                enabled: true,
              },
            }}
          />

          <ul className="analyticsChartLegend">
            <li className="legendListItem">
              {" "}
              <Brightness1Icon
                fontSize="Medium"
                className="legendDifficultyIcon"
              />{" "}
              Difficulty{" "}
            </li>
            <li className="legendListItem">
              {" "}
              <Brightness1Icon
                fontSize="Medium"
                className="legendEnjoyabilityIcon"
              />{" "}
              Enjoyability
            </li>
          </ul>
        </div>



     




      <Link to="/studentList">
              <button className="studentGoBackButton"> Back </button>
      </Link>

   











    </div>
  );
};

export default Student;
