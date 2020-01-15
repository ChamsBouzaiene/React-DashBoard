// Dashboard
import React from "react";
import Header from "../common/components/Header";
import SideBar from "../common/components/SideBar";
import MainBlock from "./MainBlock";
import { DashboardRouter } from "../features/Router";
import "./style.css";

export default function Dashboard() {
  return (
    <div className="dashboard">
      <DashboardRouter>
        <Header />
        <SideBar />
        <MainBlock />
      </DashboardRouter>
    </div>
  );
}
