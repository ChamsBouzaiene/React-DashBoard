import React from "react";
const RouterContext = React.createContext({ path: "/" });

export default function DashboardRouter({ children }) {
  return (
    <>
      <RouterContext.Provider value={{ path: "/main", onClic: "func" }}>
        {children}
      </RouterContext.Provider>
    </>
  );
}

export const RouterConsumer = RouterContext;
