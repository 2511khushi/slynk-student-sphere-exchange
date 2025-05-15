
import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Home from "./pages/Home";
import Exchange from "./pages/Exchange";
import StudyRooms from "./pages/StudyRooms";
import AskNotes from "./pages/AskNotes";
import Messaging from "./pages/Messaging";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <div className="flex min-h-screen bg-dark">
        <Sidebar />
        <div className="flex-1 flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow p-4 bg-dark">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/exchange" element={<Exchange />} />
              <Route path="/study-rooms" element={<StudyRooms />} />
              <Route path="/ask-notes" element={<AskNotes />} />
              <Route path="/messaging" element={<Messaging />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
