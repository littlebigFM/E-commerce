import { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./Routes/AppRoutes";
import useDarkMode from "./Hook/DarkMode";

function App() {
  const [isDark, setIsDark] = useDarkMode();
  return (
    <>
      <Router>
        <AppRoutes isDark={isDark} setIsDark={setIsDark} />
      </Router>
    </>
  );
}

export default App;
