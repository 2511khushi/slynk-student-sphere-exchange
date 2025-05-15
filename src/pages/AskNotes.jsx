
import React, { useState } from "react";

function AskNotes() {
  const [request, setRequest] = useState("");
  const [posted, setPosted] = useState(false);

  return (
    <section>
      <h2 className="text-2xl font-bold mb-4">Request Notes / Materials</h2>
      <form className="bg-card rounded-lg p-6 shadow-card border border-slynk/10 mb-4"
        onSubmit={e => { e.preventDefault(); setPosted(true); setRequest(""); }}>
        <label htmlFor="request" className="block text-sm font-semibold mb-2">Describe what you need:</label>
        <textarea
          id="request"
          className="w-full rounded border border-slynk/20 bg-dark p-2 text-white"
          placeholder="E.g., Need Unit 3 handwritten notes for Digital Electronics"
          rows={3}
          value={request}
          onChange={e => setRequest(e.target.value)}
        ></textarea>
        <button type="submit" className="mt-3 bg-slynk text-dark font-bold py-2 px-4 rounded-full hover:bg-slynk/90 transition shadow">
          Post Request
        </button>
      </form>
      {posted && <div className="bg-slynk/10 border border-slynk/40 text-slynk rounded p-4 text-center font-semibold">Your request has been posted!</div>}
      <div className="mt-8">
        <h3 className="font-bold text-lg mb-3">Recent Requests (demo)</h3>
        <ul className="divide-y divide-slynk/10">
          <li className="py-3"><b>Unit 2 Transducer notes needed</b> – S. Meher</li>
          <li className="py-3"><b>Control System previous year solutions?</b> – A. Rao</li>
        </ul>
      </div>
    </section>
  );
}

export default AskNotes;
