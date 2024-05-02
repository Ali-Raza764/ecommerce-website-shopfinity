import React from "react";
import AdminNavbar from "./AdminNavbar";

const AdminSidebar = ({ children }) => {
  return (
    <div className="flex h-screen flex-1">
      <AdminNavbar />
      <div className="flex-1 flex h-screen overflow-y-auto">{children}</div>
    </div>
  );
};

export default AdminSidebar;
