
import React from "react";

function StudyRooms() {
  return (
    <section>
      <h2 className="text-2xl font-bold mb-4">Study Rooms</h2>
      <div className="bg-card rounded-lg p-6 mb-4 shadow-card border border-slynk/10">
        <p className="mb-4">Join or create a real-time whiteboard/video session with other students! (Demo only)</p>
        <button className="bg-slynk text-dark font-bold px-5 py-3 rounded-full hover:bg-slynk/90 transition">Launch Study Room (Demo)</button>
      </div>
      <span className="text-muted text-sm block mt-8">Coming soon: collaborative editor, breakout rooms, and whiteboards.</span>
    </section>
  );
}

export default StudyRooms;
