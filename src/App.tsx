import React, { useEffect, useState } from "react";
import MyRouter from "routers/index";
import { QuoteListProvider } from "utils/contexts/quoteListContext";

function App() {
  return (
    <QuoteListProvider>
      <div className="bg-white text-base dark:bg-neutral-900 text-neutral-900 dark:text-neutral-200">
        <MyRouter />
      </div>
    </QuoteListProvider>
  );
}

export default App;
