
import React from "react";

function Profile() {
  return (
    <section>
      <h2 className="text-2xl font-bold mb-4">My Profile</h2>
      <div className="bg-card rounded-lg p-6 mb-6 shadow-card border border-slynk/10 flex flex-col md:flex-row gap-6 items-start md:items-center">
        <div className="rounded-full h-20 w-20 bg-slynk flex items-center justify-center font-bold text-3xl text-dark">
          S
        </div>
        <div className="flex-1">
          <div className="text-lg font-semibold">Student (demo user)</div>
          <div className="flex items-center gap-3 mt-2">
            <Badge text="Verified" color="bg-slynk" />
            <Badge text="Top Contributor" color="bg-green-500" />
            <Badge text="Trusted" color="bg-blue-500" />
          </div>
          <div className="mt-3 text-slynk font-semibold">168 Slynk Coins</div>
        </div>
      </div>
      <div className="bg-dark p-4 rounded-lg text-muted border border-slynk/10">
        <ul className="mb-2">
          <li>⭐ You’ve uploaded 7 sets of notes</li>
          <li>⭐ You’ve attended 5 skill sessions</li>
          <li>✅ Student verification complete</li>
        </ul>
        <p>
          <b>Tip:</b> Increase your reputation by sharing quality notes or helping peers in study rooms!
        </p>
      </div>
    </section>
  );
}

function Badge({ text, color }) {
  return (
    <span className={`${color} px-3 py-1 rounded-full text-xs font-bold text-dark bg-opacity-90`}>{text}</span>
  );
}

export default Profile;
