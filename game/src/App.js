import "./App.css";
import { Routes, Route } from "react-router-dom";
import Tictactoe from "./components/tictactoe/Tictactoe";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Tictactoe />} />
      </Routes>
    </div>
  );
}

export default App;
