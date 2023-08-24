import Welcome from "./components/Welcome";
import { Route, Routes } from "react-router-dom";
import HomePage from "./page/HomePage";
import Google from "./page/Google";
import axios from "axios";
import Github from "./page/Github";

function App() {

  // if (localStorage.xerocodeeToken) {
  //   const { token } = JSON.parse(localStorage.zomatoUser);
  //   axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  // }

  return (
    <div className="font-Nunito">
      <Routes>
        <Route path="/" exact element={<HomePage />} />
        <Route path="/home/:_id" exact element={<Welcome />} />
        <Route path="/google/:_id" exact element={<Google />} />
        <Route path="/github/:_id" exact element={<Github />} />
      </Routes>
    </div>
  );
}

export default App;
