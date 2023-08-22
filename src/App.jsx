import Welcome from "./components/Welcome";
import { Route, Routes } from "react-router-dom";
import HomePage from "./page/HomePage";
function App() {
  return (
    <div className="font-Nunito">
      <Routes>
        <Route path="/" exact element={<HomePage />} />
        <Route path="/home/:_id" exact element={<Welcome />} />
      </Routes>
    </div>
  );
}

export default App;
