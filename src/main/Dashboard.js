// Dashboard
import React from "react";
import Header from "../common/components/Header";
import SideBar from "../common/components/SideBar";
import MainLayout from "./MainLayout";

export default function Dashboard() {
  return (
    <div>
      <Header />
      <SideBar />
      <MainLayout />
    </div>
  );
}
