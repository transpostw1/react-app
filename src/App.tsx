import KycModal from "new_component/KycInfo/KycModal";
import React, { useEffect, useState } from "react";
import MyRouter from "routers/index";
import { QuoteListProvider } from "utils/contexts/quoteListContext";
import { UserDetailsProvider } from "utils/contexts/userDetailsContext";

function App() {
  return (
    <QuoteListProvider>
      <UserDetailsProvider>
        <div className="bg-white text-base dark:bg-neutral-900 text-neutral-900 dark:text-neutral-200">
          <MyRouter />
        </div>
      </UserDetailsProvider>
    </QuoteListProvider>
  );
}

export default App;
