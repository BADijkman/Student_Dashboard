import React, { useEffect, useState } from "react";
import "../CSS/analytics.css";
import Brightness1Icon from "@mui/icons-material/Brightness1";
import studentsData from "../studentData.json";
import Chart from "../components/Chart";
import StudentChart from "../components/Studentchart";

const groupDataByKey = (key, data) => {
  return data.reduce((group, data) => {
    const dataKey = data[key];
    group[dataKey] = group[data.project] ?? [];
    group[dataKey].push({
      name: data.name,
      project: data.project,
      difficulty: data.difficulty,
      enjoyability: data.enjoyability,
    });
    return group;
  }, {});
};

const getAveragesForGroup = (data) => {
  return Object.keys(data).map((key) => {
    const totalAmount = data[key].length;

    const averageEnjoyability =
      data[key].reduce((a, b) => a + b.enjoyability, 0) / totalAmount;
    const averageDifficulty =
      data[key].reduce((a, b) => a + b.difficulty, 0) / totalAmount;

    return {
      project: key,
      difficulty: averageDifficulty,
      enjoyability: averageEnjoyability,
    };
  });
};

const mainProjectAverages = (projectAverages) => {
  return projectAverages.reduce((group, data) => {
    const mainKey = data.project.split("-")[0].trim();
    group[mainKey] = group[mainKey] ?? [];

    group[mainKey].push({
      project: data.project,
      difficulty: data.difficulty,
      enjoyability: data.enjoyability,
    });

    return group;
  }, {});
};

const Analytics = () => {
  const [groupProjects, setGroupProjects] = useState();
  const [chartData, setChartData] = useState();

  const [dataKeys] = useState({
    difficulty: {
      color: "#6BCF93",
      enabled: true,
    },
    enjoyability: {
      color: "#4B9167",
      enabled: true,
    },
  });

  const studentDataPerProject = groupDataByKey("project", studentsData);
  const studentDataPerName = groupDataByKey("name", studentsData);

  const averagesPerProject = getAveragesForGroup(studentDataPerProject);
  const averagesPerMainProject = getAveragesForGroup(
    mainProjectAverages(averagesPerProject)
  );

  const averagesPerStudent = getAveragesForGroup(studentDataPerName);

  useEffect(() => {
    if (groupProjects) {
      setChartData(averagesPerMainProject);
    } else {
      setChartData(averagesPerProject);
    }
  }, [groupProjects]);

  return (
    <div className="analytics">
      <h1 className="analyticsTitle"> Student Analytics </h1>

      <div className="analyticsChartContainer">
        <Chart
          data={chartData}
          title="Student Analytics Overview"
          grid
          dataKeys={dataKeys}
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

      <div className="analyticsChartContainer">
        <StudentChart
          data={averagesPerStudent}
          title="Student Analytics Enjoyability and Difficulty per Student"
          grid
        />
      </div>
    </div>
  );
};

export default Analytics;
