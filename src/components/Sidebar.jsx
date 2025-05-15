
import React from "react";
import { Link, useLocation } from "react-router-dom";

const navItems = [
  { name: "Home", path: "/", icon: "home" },
  { name: "Exchange", path: "/exchange", icon: "link" },
  { name: "Study Rooms", path: "/study-rooms", icon: "users" },
  { name: "Ask for Notes", path: "/ask-notes", icon: "edit" },
  { name: "Messaging", path: "/messaging", icon: "message-circle" },
  { name: "Profile", path: "/profile", icon: "user" }
];

function Icon({ name, className }) {
  // Simple icons: you can edit this easily to add SVGs
  const icons = {
    home: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.2} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M3 12L12 5l9 7"/><path strokeLinecap="round" strokeLinejoin="round" d="M9 21V9h6v12"/></svg>
    ),
    link: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2.2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M10 13a5 5 0 0 1 7.07 0l1.42 1.42a5 5 0 0 1-7.07 7.07l-3-3A5 5 0 0 1 10 13z"/><path strokeLinecap="round" strokeLinejoin="round" d="M14 11a5 5 0 0 0-7.07 0l-1.42 1.42a5 5 0 0 0 7.07 7.07l3-3A5 5 0 0 0 14 11z"/></svg>
    ),
    users: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2.2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 21v-2a4 4 0 0 0-3.6-3.98"/><path strokeLinecap="round" strokeLinejoin="round" d="M7 21v-2a4 4 0 0 1 3.6-3.98"/><circle cx="12" cy="7" r="4"/><circle cx="5" cy="17" r="4"/><circle cx="19" cy="17" r="4"/></svg>
    ),
    edit: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2.2} viewBox="0 0 24 24"><path d="M12 20h9" strokeLinecap="round"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3l-11 11a2 2 0 0 1-.878.513l-4 1a1 1 0 0 1-1.212-1.212l1-4a2 2 0 0 1 .513-.878l11-11z"/></svg>
    ),
    "message-circle": (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2.2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M21 11.5A8.38 8.38 0 0 1 12 20a8.38 8.38 0 0 1-7.39-4.06A8.38 8.38 0 0 1 3 11.5C3 7.36 7.03 4 12 4s9 3.36 9 7.5z"/><path strokeLinecap="round" strokeLinejoin="round" d="M8 16v2a4 4 0 0 0 8 0v-2"/></svg>
    ),
    user: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2.2} viewBox="0 0 24 24"><circle cx="12" cy="7" r="4"/><path strokeLinecap="round" strokeLinejoin="round" d="M5.5 21a7.5 7.5 0 0 1 13 0"/></svg>
    ),
  };
  return <span className={className}>{icons[name]}</span>;
}

function Sidebar() {
  const { pathname } = useLocation();
  return (
    <aside className="w-64 bg-sidebar py-6 px-4 flex flex-col justify-between min-h-screen shadow-xl">
      <div>
        <Link to="/" className="flex items-center mb-10">
          <img
            src="/lovable-uploads/509d7044-2444-4700-b844-fab3083dfdff.png"
            alt="Slynk Logo"
            className="w-10 h-10 mr-2"
          />
          <span className="font-bold text-2xl text-white">Slynk</span>
        </Link>
        <nav className="flex flex-col gap-2">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`flex items-center gap-3 px-3 py-2 rounded-lg text-base font-medium transition-colors 
                ${pathname === item.path ? "bg-slynk text-dark font-semibold" : "hover:bg-slynk hover:text-dark text-white"}
              `}
            >
              <Icon name={item.icon} />
              {item.name}
            </Link>
          ))}
        </nav>
      </div>
      {/* User mini-profile - could be expanded later */}
      <div className="mt-16 flex flex-col items-center">
        <span className="mb-1 text-muted text-xs">Welcome, Student</span>
        <div className="rounded-full w-10 h-10 bg-slynk flex items-center justify-center font-bold text-dark">
          S
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
