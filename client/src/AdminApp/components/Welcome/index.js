import React, { Component } from 'react';
import {
  Button,
  Tooltip,
} from 'react-toolbox';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip as T,
  Legend
} from 'recharts';
import './Welcome.scss';

const data = [
  {name: 'Page A', uv: 4000, pv: 2400, amt: 2400},
  {name: 'Page B', uv: 3000, pv: 1398, amt: 2210},
  {name: 'Page C', uv: 2000, pv: 9800, amt: 2290},
  {name: 'Page D', uv: 2780, pv: 3908, amt: 2000},
  {name: 'Page E', uv: 1890, pv: 4800, amt: 2181},
  {name: 'Page F', uv: 2390, pv: 3800, amt: 2500},
  {name: 'Page G', uv: 3490, pv: 4300, amt: 2100},
];

const TooltipButton = Tooltip(Button);

const Welcome = ({
  statsData,
  goToCreateTest
}) => {
  return (
    <div className="row">
      <LineChart
        width={600} height={300} data={statsData}
        margin={{top: 25, right: 30, left: 20, bottom: 5}}
      >
        <XAxis dataKey="name"/>
        <YAxis/>
        <CartesianGrid strokeDasharray="3 3"/>
        <T/>
        <Legend />
        <Line type="monotone" dataKey="2017" stroke="#fb3425" activeDot={{r: 8}}/>
        <Line type="monotone" dataKey="2016" stroke="#82ca9d" />
        <Line type="monotone" dataKey="2015" stroke="#8884d8" />
      </LineChart>
      <TooltipButton
        className="addTest-btn"
        onClick={goToCreateTest}
        icon='add'
        floating
        primary
        tooltip='Create new test'
      />
    </div>
  );
};

export default Welcome;
