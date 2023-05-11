import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const StudentChart = ({ title, data, grid }) => {
  return (
    <div className="studentHomepageChart">
      <h3 className="studentHomepageChartTitle"> {title} </h3>
      <ResponsiveContainer width="100%" aspect={3 / 1}>
        <BarChart data={data}>
          <XAxis xAxisId="0" dataKey="name" />
          <XAxis
            xAxisId="1"
            dataKey="project"
            allowDuplicatedCategory={false}
          />
          <YAxis />
          <Tooltip />
          <Legend />
          {grid && <CartesianGrid stroke="#CCCCCC" strokeDasharray="4 4" />}
          <Bar dataKey="difficulty" fill="#6BCF93" />
          <Bar dataKey="enjoyability" fill="#4B9167" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default StudentChart;
