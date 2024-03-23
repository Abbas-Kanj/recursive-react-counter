import "./styles/utilities.css";
import "./styles/colors.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import RecursiveCounter from "./RecursiveCounter";
import { useEffect } from "react";

const App = () => {
  useEffect(() => {}, []);

  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<RecursiveCounter />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
