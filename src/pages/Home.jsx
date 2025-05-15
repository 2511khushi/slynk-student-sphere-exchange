
import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <section className="flex flex-col items-center justify-center min-h-[75vh]">
      <img src="/lovable-uploads/509d7044-2444-4700-b844-fab3083dfdff.png" alt="Slynk Logo" className="w-24 h-24 mb-3" />
      <h1 className="text-4xl font-bold mb-2 text-slynk tracking-tight">Slynk</h1>
      <p className="text-xl mb-6 text-muted max-w-2xl text-center">
        A peer-to-peer marketplace where students exchange their notes, skills, and knowledge. No instructors. 100% made for campus communities.<br />
        <span className="text-slynk font-bold">Share, learn, and earn Slynk Coins!</span>
      </p>
      <div className="flex gap-4 mb-10">
        <Link to="/exchange" className="bg-slynk text-dark font-bold rounded-full px-6 py-3 text-lg shadow transition hover:bg-slynk/80">Start Exploring</Link>
        <Link to="/ask-notes" className="border border-slynk text-slynk px-6 py-3 rounded-full bg-transparent font-semibold hover:bg-slynk/10 transition">Request Notes</Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6 max-w-7xl w-full">
        <FeatureCard
          title="Exchange Notes & Skills"
          desc="Buy or sell your study notes or unique skills, direct student-to-student."
        />
        <FeatureCard
          title="Live & Recorded Sessions"
          desc="Host or attend peer video sessions to learn together or get help."
        />
        <FeatureCard
          title="Earn & Spend Slynk Coins"
          desc="Contribute, help others, and earn digital credits for in-app use."
        />
        <FeatureCard
          title="Student-Only Ecosystem"
          desc="Verified college email or ID required for extra trust and safety."
        />
      </div>
    </section>
  );
}

function FeatureCard({ title, desc }) {
  return (
    <div className="bg-card rounded-lg shadow-card p-5 flex flex-col gap-2 border border-white/5">
      <span className="font-bold text-lg text-slynk">{title}</span>
      <span className="text-muted text-sm">{desc}</span>
    </div>
  );
}

export default Home;
