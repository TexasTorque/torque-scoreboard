import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./index.css";
import Scoreboard from "./pages/Scoreboard";
import Scoring from "./pages/Scoring";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <Router>
    <Routes>
      <Route path="/" element={<Scoreboard />} />
      <Route path="/score" element={<Scoring />} />
    </Routes>
  </Router>
);