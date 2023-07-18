import { Routes, Route, BrowserRouter } from "react-router-dom";

import "./App.css";
import "./styles/statics.scss";
import Home from "./components/Home";
import IpadUpdate from "./components/iPad/IpadUpdate";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ipad" element={<IpadUpdate />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
