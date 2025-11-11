import AdminSidebar from "@/components/admin-sidebar";
import type { ReactNode } from "react";


interface AdminLayoutProps {
  children: ReactNode;
}

export default function AdminLayout({ children }: AdminLayoutProps) {
  return (
    <div className="min-h-screen flex">
      <AdminSidebar>{children}</AdminSidebar>
    </div>
  );
}
