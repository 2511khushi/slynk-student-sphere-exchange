
import React from "react";

function Header() {
  return (
    <div className="h-16 flex items-center px-6 bg-[#16181A] border-b border-slynk/10 shadow-lg">
      <span className="text-lg font-semibold">Welcome to Slynk!</span>
      <span className="ml-auto bg-slynk/80 text-white rounded-full px-3 py-1 text-xs font-medium">
        Peer-to-peer student exchange only – no instructors!
      </span>
    </div>
  );
}

export default Header;
