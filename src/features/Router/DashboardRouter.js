import React, { useState } from "react";
const RouterContext = React.createContext({ path: "/" });

export default function DashboardRouter({ children }) {
  const [path, setPath] = useState("/");
  return (
    <>
      <RouterContext.Provider value={{ path: path, Redirect: setPath }}>
        {children}
      </RouterContext.Provider>
    </>
  );
}

export const RouterConsumer = RouterContext;
