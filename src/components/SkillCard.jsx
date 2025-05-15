
import React from "react";

function RatingStars({ rating }) {
  const rounded = Math.round(rating * 2) / 2;
  return (
    <span>
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} className={i + 1 <= rounded ? "text-orange-400" : i + 0.5 === rounded ? "text-orange-300" : "text-gray-500"}>
          {i + 0.5 === rounded ? "★" : "★"}
        </span>
      ))}
      <span className="ml-1 text-xs text-muted">{rating}</span>
    </span>
  );
}

function SkillCard({ title, tutor, desc, price, rating, badges }) {
  return (
    <div className="bg-card rounded-xl p-5 shadow-card border border-slynk/10 flex flex-col gap-2">
      <div className="flex items-center gap-2">
        <span className="bg-slynk/20 text-slynk font-bold text-xs uppercase tracking-wide rounded px-2 py-1">{badges[0]}</span>
        <RatingStars rating={rating} />
      </div>
      <h3 className="text-lg font-bold">{title}</h3>
      <span className="text-sm text-muted">{desc}</span>
      <div className="flex justify-between items-center mt-2">
        <span className="text-xs text-muted">By {tutor}</span>
        <span className="font-bold text-slynk">{price} coins</span>
      </div>
      <button className="mt-3 bg-slynk text-dark font-bold py-2 px-4 rounded-full hover:bg-slynk/90 transition shadow">
        Book Session
      </button>
    </div>
  );
}

export default SkillCard;
