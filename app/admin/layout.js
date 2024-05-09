import AdminSidebar from "./_components/AdminSidebar";
import "../globals.css";

export const metadata = {
  title: "Admin",
  description: "Admin  Dashboard and cms",
};

export default function AdminLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AdminSidebar>{children}</AdminSidebar>
      </body>
    </html>
  );
}
