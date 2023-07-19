import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";

import "./App.css";
import "./styles/statics.scss";
import Home from "./components/Home";
import IpadUpdate from "./components/iPad/IpadUpdate";
import ImageContainer from "./components/ImageContainer"
import UpdateImage1 from "./images/ipad/iPadUpdate1.png";
import UpdateImage2 from "./images/ipad/iPadUpdate2.png";
import TaskImg from "./images/ipad/tasks.png";
import ipadHeader from "./images/ipad/iPad-header.png";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ipad" element={<IpadUpdate headerImage={ipadHeader} />}>
            <Route index element={<Navigate to="updates" replace />} />
            <Route path="updates" element={<ImageContainer images={[UpdateImage1, UpdateImage2]} />} />
            <Route path="tasks" element={<ImageContainer images={[TaskImg]} />} />
          </Route>
          <Route path="/epublish" element={<IpadUpdate headerImage={ipadHeader} />}>
            <Route index element={<Navigate to="updates" replace />} />
            <Route path="updates" element={<ImageContainer images={[UpdateImage1, UpdateImage2]} />} />
            <Route path="tasks" element={<ImageContainer images={[TaskImg]} />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
