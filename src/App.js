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

// Images for Email 

import emailHeader from "./images/email/mail-header.png";
import emailUpdate from "./images/email/email-update.png";
import emailTasks from "./images/email/email-tasks.png";
import emailOverview from "./images/email/email-overview.png";
import emailDocuments from "./images/email/mail-documets.png";
import emailIssue from "./images/email/mail-issue.png";
import emailHours from "./images/email/email-hours.png";
import emailPeople from "./images/email/email-people.png";



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
          <Route path="/email" element={<ReUseable headerImage={emailHeader} totalDoc="(17)" />}>
            <Route index element={<Navigate to="updates" replace />} />
            <Route path="updates" element={<ImageContainer images={[emailUpdate]} />} />
            <Route path="tasks" element={<ImageContainer images={[emailTasks]} />} />
            <Route path="overview" element={<ImageContainer images={[emailOverview]} />} />
            <Route path="documents" element={<ImageContainer images={[emailDocuments]} />} />
            <Route path="issue" element={<ImageContainer images={[emailIssue]} />} />
            <Route path="hours" element={<ImageContainer images={[emailHours]} />} />
            <Route path="people" element={<ImageContainer images={[emailPeople]} />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
