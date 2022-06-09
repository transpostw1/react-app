import React from "react";
import DbNavbar from "./dbNavbar/DbNavbar";

const Dashboard = () => {
  return (
    <div>
      {/* isTop puts the nav bar on the top */}
      {/* <MainNav2 isTop={true} /> */}
      <DbNavbar />
    </div>
  );
};

export default Dashboard;
