import React, { useState } from "react";
import { Link } from "react-router-dom";
import { DataGrid } from "@mui/x-data-grid";
import { studentInfo } from "../studentInfo";
import "../CSS/studentList.css";

const StudentList = () => {
  const [data, setData] = useState(studentInfo);

  const columns = [
    { field: "id", headerName: "", width: 20 },
    {
      field: "student",
      headerName: "",
      width: 70,
      renderCell: (params) => {
        return (
          <div className="studentListStudent">
            <img className="studentImg" src={params.row.avatar} alt="avatar" />
          </div>
        );
      },
    },
    { field: "firstName", headerName: "First Name", width: 100 },
    { field: "lastName", headerName: "Last Name", width: 150 },
    { field: "gender", headerName: "Gender", width: 200 },
    {
      field: "info",
      headerName: "",
      width: 80,
      renderCell: (params) => {
        return (
          <>
            <Link to={`/students/${params.row.firstName}`}>
              <button className="studentDetailsBtn"> Info </button>
            </Link>
          </>
        );
      },
    },
  ];

  return (
    <div className="studentContainer">
      <div className="studentTitleContainer">
        <h1 className="studentTitle">Students</h1>
      </div>

      <div>
        <div className="student" style={{ height: 600, width: "97%" }}>
          <DataGrid
            getRowId={(row) => data.indexOf(row)}
            rows={data}
            disableSelectionOnClick
            columns={columns}
            pageSize={[]}
            rowsPerPageOptions={[]}
            autoHeight
          />
        </div>
      </div>
    </div>
  );
};

export default StudentList;
