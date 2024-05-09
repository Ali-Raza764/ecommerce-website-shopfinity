import React from "react";
import AdminNavbar from "./AdminNavbar";

const AdminSidebar = ({ children }) => {
  return (
    <div className="flex h-screen flex-1">
      <AdminNavbar />
      <div className="flex-1 flex h-screen overflow-y-auto py-4 md:p-6 px-3">{children}</div>
    </div>
  );
};

export default AdminSidebar;
