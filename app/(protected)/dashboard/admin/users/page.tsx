"use client";

import React, { useState } from "react";
import { 
  Search, 
  Plus, 
  Filter, 
  MoreVertical, 
  Trash2, 
  Edit2, 
  Shield, 
  User, 
  Mail,
  CheckCircle2,
  XCircle
} from "lucide-react";

// --- DUMMY DATA ---
// In a real app, you would fetch this from your API/Database
const INITIAL_USERS = [
  { id: 1, name: "Juan Dela Cruz", email: "juan.admin@barangay.gov.ph", role: "Admin", status: "Active", lastActive: "2 mins ago" },
  { id: 2, name: "Maria Santos", email: "maria.sec@barangay.gov.ph", role: "Secretary", status: "Active", lastActive: "1 hour ago" },
  { id: 3, name: "Pedro Penduko", email: "pedro.tanod@barangay.gov.ph", role: "Tanod", status: "Inactive", lastActive: "2 days ago" },
  { id: 4, name: "Jose Rizal", email: "jose.official@barangay.gov.ph", role: "Official", status: "Active", lastActive: "5 hours ago" },
  { id: 5, name: "Andres Bonifacio", email: "andres.tanod@barangay.gov.ph", role: "Tanod", status: "Active", lastActive: "10 mins ago" },
];

export default function UserManagementPage() {
  const [users, setUsers] = useState(INITIAL_USERS);
  const [searchTerm, setSearchTerm] = useState("");
  const [roleFilter, setRoleFilter] = useState("All");

  // Filter logic
  const filteredUsers = users.filter((user) => {
    const matchesSearch = user.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          user.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRole = roleFilter === "All" || user.role === roleFilter;
    return matchesSearch && matchesRole;
  });

  // Delete handler (Simulation)
  const handleDelete = (id: number) => {
    if (confirm("Are you sure you want to remove this user?")) {
      setUsers(users.filter(u => u.id !== id));
    }
  };

  return (
    <div className="space-y-6">
      
      {/* --- HEADER SECTION --- */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-800 dark:text-white">User Management</h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm">
            Manage system access, roles, and permissions.
          </p>
        </div>
        <button className="inline-flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800 transition-colors">
          <Plus size={18} />
          Add New User
        </button>
      </div>

      {/* --- FILTERS & SEARCH --- */}
      <div className="bg-white dark:bg-slate-800 p-4 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm flex flex-col sm:flex-row gap-4 justify-between items-center">
        
        {/* Search Input */}
        <div className="relative w-full sm:w-96">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <Search className="w-5 h-5 text-slate-400" />
          </div>
          <input
            type="text"
            placeholder="Search by name or email..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="block w-full p-2.5 pl-10 text-sm text-slate-900 border border-slate-300 rounded-lg bg-slate-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-slate-700 dark:border-slate-600 dark:placeholder-slate-400 dark:text-white"
          />
        </div>

        {/* Role Dropdown */}
        <div className="flex items-center gap-2 w-full sm:w-auto">
          <Filter size={18} className="text-slate-500 dark:text-slate-400" />
          <select 
            value={roleFilter}
            onChange={(e) => setRoleFilter(e.target.value)}
            className="bg-slate-50 border border-slate-300 text-slate-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-slate-700 dark:border-slate-600 dark:text-white"
          >
            <option value="All">All Roles</option>
            <option value="Admin">Admin</option>
            <option value="Secretary">Secretary</option>
            <option value="Official">Official</option>
            <option value="Tanod">Tanod</option>
          </select>
        </div>
      </div>

      {/* --- TABLE SECTION --- */}
      <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left text-slate-500 dark:text-slate-400">
            <thead className="text-xs text-slate-700 uppercase bg-slate-50 dark:bg-slate-700 dark:text-slate-300">
              <tr>
                <th scope="col" className="px-6 py-3">Name / Email</th>
                <th scope="col" className="px-6 py-3">Role</th>
                <th scope="col" className="px-6 py-3">Status</th>
                <th scope="col" className="px-6 py-3">Last Active</th>
                <th scope="col" className="px-6 py-3 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
              {filteredUsers.length > 0 ? (
                filteredUsers.map((user) => (
                  <tr key={user.id} className="bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors">
                    
                    {/* Name & Email Column */}
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 w-10 h-10 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold dark:bg-blue-900 dark:text-blue-300">
                          {getInitials(user.name)}
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-slate-900 dark:text-white">{user.name}</div>
                          <div className="text-sm text-slate-500 dark:text-slate-400 flex items-center gap-1">
                            <Mail size={12} /> {user.email}
                          </div>
                        </div>
                      </div>
                    </td>

                    {/* Role Column */}
                    <td className="px-6 py-4 whitespace-nowrap">
                      <RoleBadge role={user.role} />
                    </td>

                    {/* Status Column */}
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        {user.status === "Active" ? (
                           <span className="inline-flex items-center gap-1.5 py-1 px-2 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400">
                             <span className="w-1.5 h-1.5 rounded-full bg-green-600"></span>
                             Active
                           </span>
                        ) : (
                          <span className="inline-flex items-center gap-1.5 py-1 px-2 rounded-full text-xs font-medium bg-slate-100 text-slate-800 dark:bg-slate-700 dark:text-slate-400">
                            <span className="w-1.5 h-1.5 rounded-full bg-slate-500"></span>
                            Inactive
                          </span>
                        )}
                      </div>
                    </td>

                    {/* Last Active */}
                    <td className="px-6 py-4 whitespace-nowrap text-slate-500 dark:text-slate-400">
                      {user.lastActive}
                    </td>

                    {/* Actions */}
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <div className="flex items-center justify-end gap-2">
                        <button className="p-2 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors dark:hover:bg-slate-700 dark:hover:text-blue-400">
                          <Edit2 size={16} />
                        </button>
                        <button 
                          onClick={() => handleDelete(user.id)}
                          className="p-2 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors dark:hover:bg-slate-700 dark:hover:text-red-400"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                /* Empty State */
                <tr>
                  <td colSpan={5} className="px-6 py-10 text-center text-slate-500 dark:text-slate-400">
                    <div className="flex flex-col items-center justify-center">
                      <div className="p-4 bg-slate-50 rounded-full dark:bg-slate-700 mb-3">
                        <Search className="w-6 h-6 text-slate-400" />
                      </div>
                      <p className="text-base font-medium text-slate-900 dark:text-white">No users found</p>
                      <p className="text-sm mt-1">Try adjusting your search or filter to find what you're looking for.</p>
                    </div>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        
        {/* Simple Pagination */}
        <div className="flex items-center justify-between p-4 border-t border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50">
          <span className="text-sm text-slate-500 dark:text-slate-400">
            Showing <span className="font-semibold text-slate-900 dark:text-white">1-5</span> of <span className="font-semibold text-slate-900 dark:text-white">5</span>
          </span>
          <div className="inline-flex gap-2">
            <button className="px-3 py-1 text-sm font-medium text-slate-500 bg-white border border-slate-300 rounded-lg hover:bg-slate-100 hover:text-slate-700 dark:bg-slate-800 dark:border-slate-700 dark:text-slate-400 dark:hover:bg-slate-700 dark:hover:text-white disabled:opacity-50 disabled:cursor-not-allowed" disabled>
              Previous
            </button>
            <button className="px-3 py-1 text-sm font-medium text-slate-500 bg-white border border-slate-300 rounded-lg hover:bg-slate-100 hover:text-slate-700 dark:bg-slate-800 dark:border-slate-700 dark:text-slate-400 dark:hover:bg-slate-700 dark:hover:text-white disabled:opacity-50 disabled:cursor-not-allowed" disabled>
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

/* --- HELPERS --- */

function getInitials(name: string) {
  return name
    .split(" ")
    .map((n) => n[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

function RoleBadge({ role }: { role: string }) {
  const styles: Record<string, string> = {
    Admin: "bg-purple-100 text-purple-700 border-purple-200 dark:bg-purple-900/30 dark:text-purple-300",
    Secretary: "bg-blue-100 text-blue-700 border-blue-200 dark:bg-blue-900/30 dark:text-blue-300",
    Official: "bg-amber-100 text-amber-700 border-amber-200 dark:bg-amber-900/30 dark:text-amber-300",
    Tanod: "bg-slate-100 text-slate-700 border-slate-200 dark:bg-slate-700 dark:text-slate-300",
  };

  const icon: Record<string, any> = {
    Admin: Shield,
    Secretary: Edit2,
    Official: User,
    Tanod: User,
  };

  const Icon = icon[role] || User;

  return (
    <span className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md text-xs font-medium border ${styles[role] || styles.Tanod}`}>
      <Icon size={12} />
      {role}
    </span>
  );
}