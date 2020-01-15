import React, { useContext } from "react";
import { RouterConsumer } from "./DashboardRouter";

export default function Link({ to, children }) {
  const { Redirect } = useContext(RouterConsumer);
  return <span onClick={() => Redirect(to)}>{children}</span>;
}
