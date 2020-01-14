// Dashboard
import React from "react";
import Header from "../common/components/Header";
import SideBar from "../common/components/SideBar";
import MainBlock from "./MainBlock";
import "./style.css";

export default function Dashboard() {
  return (
    <div className="dashboard">
      <Header />
      <SideBar />
      <MainBlock />
    </div>
  );
}
