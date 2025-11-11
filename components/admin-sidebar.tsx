"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, type ReactNode } from "react";
import { 
  LayoutDashboard, 
  FilePlus, 
  Files, 
  Users, 
  FileText, 
  ShieldAlert, 
  Settings, 
  Menu, 
  X, 
  ChevronDown, 
  LogOut,
  User
} from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

// Utility for cleaner tailwind class merging
function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface AdminLayoutProps {
  children: ReactNode;
}

// 1. Define your navigation items here to keep the render clean
const navItems = [
  { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { name: "New Blotter", href: "/dashboard/blotter/new", icon: FilePlus },
  { name: "Manage Blotters", href: "/dashboard/blotter", icon: Files },
  { name: "Residents", href: "/dashboard/residents", icon: Users },
  { name: "Reports", href: "/dashboard/reports", icon: FileText },
  { name: "User Management", href: "/dashboard/admin/users", icon: ShieldAlert },
  { name: "Settings", href: "/dashboard/settings", icon: Settings },
];

export default function AdminSidebar({ children }: AdminLayoutProps) {
  const pathname = usePathname();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* --- TOP NAVIGATION BAR --- */}
      <nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700 shadow-sm">
        <div className="px-3 py-3 lg:px-5 lg:pl-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-start rtl:justify-end">
              {/* Mobile Sidebar Toggle */}
              <button
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                type="button"
                className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              >
                <span className="sr-only">Open sidebar</span>
                {isSidebarOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>

              {/* Logo / Brand */}
              <Link href="/dashboard" className="flex ms-2 md:me-24 items-center gap-2">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold">
                   B
                </div>
                <span className="self-center text-xl font-bold sm:text-2xl whitespace-nowrap dark:text-white text-slate-800">
                  Blotter<span className="text-blue-600">System</span>
                </span>
              </Link>
            </div>

            {/* Right Side: User Menu */}
            <div className="flex items-center relative">
              <div>
                <button
                  type="button"
                  onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                  className="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                >
                  <span className="sr-only">Open user menu</span>
                  <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center text-slate-600">
                    <User size={18} />
                  </div>
                </button>
              </div>

              {/* Dropdown Menu */}
              {isUserMenuOpen && (
                <div className="absolute top-10 right-0 z-50 my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow-lg dark:bg-gray-700 dark:divide-gray-600 w-48 border border-gray-100">
                  <div className="px-4 py-3" role="none">
                    <p className="text-sm text-gray-900 dark:text-white font-semibold">
                      Admin User
                    </p>
                    <p className="text-sm font-medium text-gray-500 truncate dark:text-gray-300">
                      admin@barangay.gov.ph
                    </p>
                  </div>
                  <ul className="py-1">
                    <li>
                      <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white">
                        Dashboard
                      </a>
                    </li>
                    <li>
                      <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white">
                        Settings
                      </a>
                    </li>
                    <li>
                      <a href="#" className="flex items-center gap-2 px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:text-red-400 dark:hover:bg-gray-600 dark:hover:text-white">
                        <LogOut size={14} /> Sign out
                      </a>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* --- SIDEBAR --- */}
      <aside
        className={cn(
          "fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform bg-white border-r border-gray-200 dark:bg-gray-800 dark:border-gray-700",
          isSidebarOpen ? "translate-x-0" : "-translate-x-full sm:translate-x-0"
        )}
        aria-label="Sidebar"
      >
        <div className="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
          <ul className="space-y-2 font-medium">
            {/* Loop through navItems array */}
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className={cn(
                      "flex items-center p-2 rounded-lg group transition-colors duration-200",
                      isActive 
                        ? "bg-blue-50 text-blue-600 dark:bg-gray-700 dark:text-white" 
                        : "text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                    )}
                  >
                    <item.icon 
                      className={cn(
                        "w-5 h-5 transition duration-75",
                        isActive 
                          ? "text-blue-600 dark:text-white" 
                          : "text-gray-500 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                      )}
                    />
                    <span className="ms-3">{item.name}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
          
          {/* Optional: Sidebar Footer Area */}
          <div className="mt-10 pt-6 border-t border-gray-200 dark:border-gray-700">
             <div className="px-2 py-2 bg-blue-50 dark:bg-slate-700 rounded-lg">
                <p className="text-xs text-center text-blue-800 dark:text-blue-200 font-medium">
                   Barangay System v1.0
                </p>
             </div>
          </div>
        </div>
      </aside>

      {/* --- MAIN CONTENT AREA --- */}
<div className="sm:ml-64 pt-16 min-h-screen bg-gray-50 dark:bg-gray-900">
        
        {/* 3. We removed the dashed border and fixed height constraints */}
        {/* 4. We added 'p-6' here for a single, clean layer of breathing room */}
        <main className="p-6">
          {children}
        </main>
        
      </div>
    </div>
  );
}