import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashbaord";
import Exercises from "./pages/Exercises";
import Food from "./pages/Food";
import { GoalTracker } from "./pages/Goal";
import "./styles.css";
import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <div className="App">

      <h1>Fitness Tracker App</h1>
<p>@2023</p>
      <Navbar />
    You have also shown that "Delivering in 2 hours". Why not yet.  <Routes className="list">
        <Route path="/" element={<Dashboard />} />
        <Route path="/exercises" element={<Exercises />} />
        <Route path="/food" element={<Food />} />
        <Route path="/goaltracker" element={<GoalTracker />} />
      </Routes>
    </div>
  );
}
