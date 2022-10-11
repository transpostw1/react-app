import React, { useState, useEffect } from "react";
import { Route, Redirect, useLocation } from "react-router-dom";
import Loading from "new_component/Loading";
import { useUserAuth } from "utils/contexts/userContext";

export interface RouteProps {
  path: string;
  component: React.FC;
}

const PrivateRoute = (props: RouteProps) => {
  const location = useLocation();

  const { isLogin } = useUserAuth();

  return isLogin ? (
    <Route {...props} />
  ) : (
    <Redirect
      to={{
        pathname: "/login",
        state: { from: location },
      }}
    />
  );
};

export default PrivateRoute;
