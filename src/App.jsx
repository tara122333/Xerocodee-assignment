import { useState } from "react";
import Welcome from "./components/Welcome";
import Template from "./components/Tamplate";
import { Route, Routes } from "react-router-dom";
import HomePage from "./page/HomePage";
function App() {
  return (
    <div className="font-Nunito">
      {/* <Welcome /> */}
      
      <Routes>
        <Route path="/" exact element={<HomePage />} />
        <Route path="/home/:_id" exact element={<Welcome />} />
      </Routes>
    </div>
  );
}

export default App;
