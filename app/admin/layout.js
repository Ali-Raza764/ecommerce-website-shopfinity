import AdminSidebar from "./_components/AdminSidebar";
import checkRole from "@/utils/checkRole";
import { redirect } from "next/navigation";
export const metadata = {
  title: "Admin",
  description: "Admin  Dashboard and cms",
};

export default function AdminLayout({ children }) {
  if (!checkRole("admin")) {
    redirect("/");
  }
  return <AdminSidebar>{children}</AdminSidebar>;
}
