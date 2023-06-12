import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { HomePage } from "./presentation/screens/home";
import { ForgotPassword } from "./presentation/screens/forgotPassword";
import { Dashboard } from "./presentation/screens/dashboard";
// import { AuditoriumPage } from "./presentation/screens/auditorium";
// import { MeetingRoomPage } from "./presentation/screens/meetingRoom";
// import { ClassroomPage } from "./presentation/screens/classroom";
// import { LaboratoryPage } from "./presentation/screens/laboratory";

export default function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/forgotPassword" element={<ForgotPassword />} />
          <Route path="/dashboard" element={<Dashboard />} />
          {/* 
          <Route path="/auditorium" element={<AuditoriumPage />} />
          <Route path="/meetingRoom" element={<MeetingRoomPage />} />
          <Route path="/classroom" element={<ClassroomPage />} />
          <Route path="/laboratory" element={<LaboratoryPage />} /> */}
        </Routes>
      </Router>
    </>
  );
}
