
import React, { useState } from "react";
import NoteCard from "../components/NoteCard";
import SkillCard from "../components/SkillCard";

const mockNotes = [
  { id: 1, title: "Thermodynamics Notes", author: "Akash G.", desc: "Handwritten + diagrams, Unit 1-4", price: 8, rating: 4.5, badges: ["High Quality"], },
  { id: 2, title: "Control Systems Summaries", author: "Priya M.", desc: "Easy formulas & charts", price: 4, rating: 5, badges: ["Recommended"], },
  { id: 3, title: "Microprocessor Notes", author: "Raj S.", desc: "Complete exam pack, 45 pages", price: 10, rating: 4.8, badges: ["Popular"] },
];

const mockSkills = [
  { id: 1, title: "Python Crash Session", tutor: "Simran K.", desc: "Crash 1:1 for absolute beginners", price: 12, rating: 4.7, badges: ["Live"], },
  { id: 2, title: "AutoCAD Project Help", tutor: "Surya T.", desc: "30-min screen-share, all levels", price: 15, rating: 5, badges: ["1-on-1"] },
];

function Exchange() {
  const [show, setShow] = useState("notes");
  return (
    <section>
      <div className="flex gap-4 mb-6">
        <button
          className={`px-4 py-2 rounded-full font-semibold ${show === "notes" ? "bg-slynk text-dark" : "bg-card text-slynk border border-slynk"}`}
          onClick={() => setShow("notes")}
        >
          Notes
        </button>
        <button
          className={`px-4 py-2 rounded-full font-semibold ${show === "skills" ? "bg-slynk text-dark" : "bg-card text-slynk border border-slynk"}`}
          onClick={() => setShow("skills")}
        >
          Skills / Sessions
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {show === "notes"
          ? mockNotes.map((note) => <NoteCard key={note.id} {...note} />)
          : mockSkills.map((skill) => <SkillCard key={skill.id} {...skill} />)
        }
      </div>
      <div className="mt-10 text-center text-muted">
        <span>Can’t find what you need? <a href="/ask-notes" className="text-slynk font-bold underline">Request Notes</a> or <a href="/study-rooms" className="text-slynk underline">join a Study Room</a>!</span>
      </div>
    </section>
  );
}

export default Exchange;
