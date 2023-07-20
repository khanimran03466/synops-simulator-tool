import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";

import "./App.css";
import "./styles/statics.scss";
import Home from "./components/Home";
import ReUseable from "./components/ReUseable";
import ImageContainer from "./components/ImageContainer"

// Images for ipad
import UpdateImage1 from "./images/ipad/iPadUpdate1.png";
import UpdateImage2 from "./images/ipad/iPadUpdate2.png";
import TaskImg from "./images/ipad/tasks.png";
import ipadHeader from "./images/ipad/iPad-header.png";
import overview from "./images/ipad/overview.png";
import documents from "./images/ipad/documents.png";
import issues from "./images/ipad/issues.png";
import iPadTime from "./images/ipad/time.png";
import iPadPeople from "./images/ipad/people.png";



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ipad" element={<ReUseable headerImage={ipadHeader} totalDoc="(86)" />}>
            <Route index element={<Navigate to="updates" replace />} />
            <Route path="updates" element={<ImageContainer images={[UpdateImage1, UpdateImage2]} />} />
            <Route path="tasks" element={<ImageContainer images={[TaskImg]} />} />
            <Route path="overview" element={<ImageContainer images={[overview]} />} />
            <Route path="documents" element={<ImageContainer images={[documents]} />} />
            <Route path="issue" element={<ImageContainer images={[issues]} />} />
            <Route path="hours" element={<ImageContainer images={[iPadTime]} />} />
            <Route path="people" element={<ImageContainer images={[iPadPeople]} />} />
          </Route>
          <Route path="/epublish" element={<ReUseable headerImage={ipadHeader} />}>
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
