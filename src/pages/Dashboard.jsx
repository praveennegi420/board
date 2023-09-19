import "./Dashboard.css";
import SideBar from "../components/SideBar";
import DashHeader from "../components/DashHeader";
import { useState } from "react";
import TopCard from "../components/TopCard";
import WeekChart from "../components/WeekChart";
import DemoPieChart from "../components/DemoPieChart";
import Profile from "../components/Profile";


const Dashboard = () => {
  
  return (
    <div className="dashb__container">
      <SideBar />

      <div className="main__dashboard__container">
        <DashHeader />
        <TopCard />
        <WeekChart />
        <div className="pie__profile__container">
          <DemoPieChart />
          <Profile />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
