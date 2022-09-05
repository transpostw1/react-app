import React, { useState, useEffect } from "react";
import { Route, Redirect, useLocation } from "react-router-dom";
import { onAuthStateChangedListener } from "utils/firebase/firebase-config";
import { User } from "firebase/auth";
import Loading from "new_component/Loading";

export interface RouteProps {
  path: string;
  component: React.FC;
}

const PrivateRoute = (props: RouteProps) => {
  const location = useLocation();
  const [isLogin, setIsLogin] = useState(true);
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user: User) => {
      if (user) {
        setIsLogin(true);
        setCurrentUser(user);
      } else {
        setIsLogin(false);
      }
    });

    return unsubscribe;
  }, [currentUser]);

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
