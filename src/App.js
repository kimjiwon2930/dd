// import logo from "./logo.svg";
import { useState } from "react";
import "./App.css";

import Shopping from "./pages";
import { Themecontext } from "./context/Themecontext";
// import { ThemeContext } from "styled-components";

function App() {
  const [isdark, setisdark] = useState(false);

  return (
    <Themecontext.Provider value={{ isdark, setisdark }}>
      <Shopping />
    </Themecontext.Provider>
  );
}

export default App;
