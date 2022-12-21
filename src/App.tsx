import KycModal from "new_component/KycInfo/KycModal";
import React, { useEffect, useState } from "react";
import MyRouter from "routers/index";
import { QuoteListProvider } from "utils/contexts/quoteListContext";
import { UserDetailsProvider } from "utils/contexts/userDetailsContext";
import {CargoDetailsProvider} from "utils/contexts/cargoContext"

function App() {
  return (
    <QuoteListProvider>
      <UserDetailsProvider>
        <CargoDetailsProvider>

        <div className="bg-white text-base dark:bg-neutral-900 text-neutral-900 dark:text-neutral-200">
          <MyRouter />
        </div>
        </CargoDetailsProvider>
      </UserDetailsProvider>
    </QuoteListProvider>
  );
}

export default App;
