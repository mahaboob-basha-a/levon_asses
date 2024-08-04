import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, BarChart, Bar, PieChart, Pie, Cell, Legend } from 'recharts';
import './index.css';
import { InitialContext } from '../../context';

const Dashboard = () => {
  const [financialData, setFinancialData] = useState([]);
  const {darkMode} = useContext(InitialContext)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://my.api.mockaroo.com/financial_data.json?key=fde71740');
        setFinancialData(response.data);
      } catch (error) {
        console.error('Error fetching data from Mockaroo:', error);
      }
    };

    fetchData();
  }, []);

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

  const renderLineChart = (
    <LineChart width={400} height={200} data={financialData} className="chart">
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="date" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="earnings" stroke="#8884d8" />
      <Line type="monotone" dataKey="spend" stroke="#82ca9d" />
    </LineChart>
  );

  const renderBarChart = (
    <BarChart width={400} height={200} data={financialData} className="chart">
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="date" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="revenue" fill="#8884d8" />
      <Bar dataKey="loss" fill="#82ca9d" />
    </BarChart>
  );

  const renderPieChart = (
    <PieChart width={400} height={400} className="chart">
      <Pie
        data={financialData}
        dataKey="revenue"
        nameKey="name"
        cx="50%"
        cy="50%"
        outerRadius={40}
        fill="#8884d8"
        label
      >
        {
          financialData.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)
        }
      </Pie>
      <Pie
        data={financialData}
        dataKey="loss"
        nameKey="name"
        cx="50%"
        cy="50%"
        innerRadius={40}
        outerRadius={60}
        fill="#82ca9d"
        label
      >
        {
          financialData.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)
        }
      </Pie>
      <Tooltip />
    </PieChart>
  );

  return (
    <div className={darkMode ? 'dashboard-page-dark' : 'dashboard-page-light' }>
      <h1>Financial Dashboard</h1>
      <div className="dashboard-cards-dark">
        <div className="card">Earnings: ${financialData.reduce((acc, curr) => acc + curr.earnings, 0)}</div>
        <div className="card">Spend this Month: ${financialData.reduce((acc, curr) => acc + curr.spend, 0)}</div>
        <div className="card">Sales: {financialData.reduce((acc, curr) => acc + curr.sales, 0)}</div>
        <div className="card">Your Balance: ${financialData.reduce((acc, curr) => acc + curr.balance, 0)}</div>
        <div className="card">Total Projects: {financialData.reduce((acc, curr) => acc + curr.projects, 0)}</div>
      </div>
      <div className='all-charts'>
        <div className="chart-container">
          <h4>Monthly Data</h4>
          {renderLineChart}
        </div>
        <div className="chart-container">
          <h4>Weekly Revenue</h4>
          {renderBarChart}
        </div>
        <div className="chart-container">
          <h4>Revenue vs Loss</h4>
          {renderPieChart}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
