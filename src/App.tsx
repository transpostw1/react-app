import React, { useEffect, useState } from "react";
import MyRouter from "routers/index";
// import { checkUserSession } from "redux/user/userAction";
import {
  onAuthStateChangedListener,
  createUserDocumentFromAuth,
} from "./utils/firebase/firebase-config";

function App() {
  return (
    <div className="bg-white text-base dark:bg-neutral-900 text-neutral-900 dark:text-neutral-200">
      <MyRouter />
    </div>
  );
}

export default App;
