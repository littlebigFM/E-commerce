import { useEffect, useState } from "react";

const useDarkMode = () => {
  const [isDark, setIsDark] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    const root = document.documentElement;

    if (isDark) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  return [isDark, setIsDark];
};

export default useDarkMode;

// import { useEffect, useState } from "react";

// const useDarkMode = () => {
//   const [isDark, setIsDark] = useState(() => {
//     return localStorage.getItem("theme") === "dark";
//   });

//   useEffect(() => {
//     const root = document.documentElement; // <html>

//     if (isDark) {
//       root.classList.add("dark");
//     } else {
//       root.classList.remove("dark");
//     }

//     localStorage.setItem("theme", isDark ? "dark" : "light");
//   }, [isDark]);

//   return [isDark, setIsDark];
// };

// export default useDarkMode;
