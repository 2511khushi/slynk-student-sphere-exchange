
import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
      <h1 className="text-5xl font-bold text-slynk mb-4">404</h1>
      <p className="mb-4 text-lg text-muted">Oops! The page you’re looking for doesn’t exist.</p>
      <Link to="/" className="bg-slynk text-dark px-6 py-2 rounded-full font-semibold mt-3">Return Home</Link>
    </div>
  );
}

export default NotFound;
