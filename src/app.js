import { Route, Routes } from "react-router-dom";
import Layout from "./components/layout";
import { Game } from "./pages/game/game";
import { HomePage } from "./pages/homepage/homepage";
import { NavBar } from "./components/navbar"
import './index.css';

export default function App() {
  return (
    <div>
    <NavBar />
      <Routes>
        <Route path="/" element={<Layout />}>
        <Route path="" element={<HomePage />} />
        <Route path="game" element={<Game />} />
        </Route>
      </Routes>
    </div>
  );
}