import { auth } from "@/auth";
import AdminSidebar from "./_components/AdminSidebar";
import { redirect } from "next/navigation";
export const metadata = {
  title: "Admin",
  description: "Admin  Dashboard and cms",
};

export default async function AdminLayout({ children }) {
  const session = await auth();
  if (!session || process.env.NEXT_ADMIN_EMAIL !== session.user.email) {
    redirect("/");
  }
  return <AdminSidebar>{children}</AdminSidebar>;
}
