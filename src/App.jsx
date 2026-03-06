import { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./Routes/AppRoutes";
import useDarkMode from "./Hook/DarkMode";
import { AppProvider } from "./Context/AppContext";

function App() {
  const [isDark, setIsDark] = useDarkMode();
  return (
    <>
      <AppProvider>
        <Router>
          <AppRoutes isDark={isDark} setIsDark={setIsDark} />
        </Router>
      </AppProvider>
    </>
  );
}

export default App;
