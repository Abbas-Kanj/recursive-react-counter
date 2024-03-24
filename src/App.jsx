import "./styles/utilities.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import RecursiveCounter from "./RecursiveCounter";
import { useEffect } from "react";

const App = () => {
  useEffect(() => {}, []);

  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<RecursiveCounter initial={1}/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
