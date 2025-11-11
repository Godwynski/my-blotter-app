"use client";

import React, { useState } from "react";
import { 
  Search, 
  Plus, 
  Filter, 
  Eye, 
  Edit2, 
  Printer, 
  Clock, 
  Gavel, 
  CheckCircle2, 
  XCircle,
  FileText
} from "lucide-react";

// --- DUMMY DATA ---
const INITIAL_BLOTTERS = [
  { id: "BL-2025-001", caseType: "Theft", complainant: "Maria Clara", respondent: "Juan Crisostomo", status: "Pending", dateFiled: "2025-11-10" },
  { id: "BL-2025-002", caseType: "Noise Complaint", complainant: "Kapitan Tiago", respondent: "Padre Damaso", status: "Scheduled", dateFiled: "2025-11-09" },
  { id: "BL-2025-003", caseType: "Physical Injury", complainant: "Basilio", respondent: "Crispin", status: "Resolved", dateFiled: "2025-10-15" },
  { id: "BL-2025-004", caseType: "Property Damage", complainant: "Sisa", respondent: "Pedro Penduko", status: "Dismissed", dateFiled: "2025-10-12" },
  { id: "BL-2025-005", caseType: "Lost Item", complainant: "Jose Rizal", respondent: "N/A", status: "Pending", dateFiled: new Date().toISOString().split('T')[0] }, // Today
];

// --- DATE HELPER FUNCTIONS ---
const isSameDay = (d1: Date, d2: Date) => d1.getFullYear() === d2.getFullYear() && d1.getMonth() === d2.getMonth() && d1.getDate() === d2.getDate();
const isSameWeek = (d1: Date, d2: Date) => {
  const diff = Math.abs(d1.getTime() - d2.getTime());
  const days = diff / (1000 * 60 * 60 * 24);
  return days < 7 && d1.getDay() >= d2.getDay();
};
const isSameMonth = (d1: Date, d2: Date) => d1.getFullYear() === d2.getFullYear() && d1.getMonth() === d2.getMonth();

export default function ManageBlotterPage() {
  const [blotters, setBlotters] = useState(INITIAL_BLOTTERS);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [dateFilter, setDateFilter] = useState("All");

  // --- FILTERING LOGIC ---
  const filteredBlotters = blotters.filter((blotter) => {
    const searchLower = searchTerm.toLowerCase();
    
    // 1. Search Filter
    const matchesSearch = 
      blotter.id.toLowerCase().includes(searchLower) ||
      blotter.caseType.toLowerCase().includes(searchLower) ||
      blotter.complainant.toLowerCase().includes(searchLower) ||
      blotter.respondent.toLowerCase().includes(searchLower);

    // 2. Status Filter
    const matchesStatus = statusFilter === "All" || blotter.status === statusFilter;

    // 3. Date Filter
    const now = new Date();
    const blotterDate = new Date(blotter.dateFiled);
    let matchesDate = false;
    if (dateFilter === "All") {
      matchesDate = true;
    } else if (dateFilter === "Today") {
      matchesDate = isSameDay(blotterDate, now);
    } else if (dateFilter === "This Week") {
      matchesDate = isSameWeek(blotterDate, now);
    } else if (dateFilter === "This Month") {
      matchesDate = isSameMonth(blotterDate, now);
    }

    return matchesSearch && matchesStatus && matchesDate;
  });

  return (
    <div className="space-y-6">
      
      {/* --- HEADER SECTION --- */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-800 dark:text-white">Manage Blotter Reports</h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm">
            Review, update, and resolve all registered cases.
          </p>
        </div>
        <a 
          href="/dashboard/blotter/new"
          className="inline-flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800 transition-colors"
        >
          <Plus size={18} />
          Create New Report
        </a>
      </div>

      {/* --- FILTERS & SEARCH --- */}
      <div className="bg-white dark:bg-slate-800 p-4 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm flex flex-col md:flex-row gap-4 justify-between">
        
        {/* Search Input */}
        <div className="relative w-full md:w-80">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <Search className="w-5 h-5 text-slate-400" />
          </div>
          <input
            type="text"
            placeholder="Search by Case ID, Name, Type..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="block w-full p-2.5 pl-10 text-sm text-slate-900 border border-slate-300 rounded-lg bg-slate-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-slate-700 dark:border-slate-600 dark:placeholder-slate-400 dark:text-white"
          />
        </div>

        {/* Filter Dropdowns */}
        <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <Filter size={18} className="text-slate-500 dark:text-slate-400 shrink-0" />
            <select 
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="bg-slate-50 border border-slate-300 text-slate-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-slate-700 dark:border-slate-600 dark:text-white"
            >
              <option value="All">All Statuses</option>
              <option value="Pending">Pending</option>
              <option value="Scheduled">Scheduled</option>
              <option value="Resolved">Resolved</option>
              <option value="Dismissed">Dismissed</option>
            </select>
          </div>
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <select 
              value={dateFilter}
              onChange={(e) => setDateFilter(e.target.value)}
              className="bg-slate-50 border border-slate-300 text-slate-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-slate-700 dark:border-slate-600 dark:text-white"
            >
              <option value="All">All Time</option>
              <option value="Today">Today</option>
              <option value="This Week">This Week</option>
              <option value="This Month">This Month</option>
            </select>
          </div>
        </div>
      </div>

      {/* --- BLOTTER TABLE --- */}
      <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left text-slate-500 dark:text-slate-400">
            <thead className="text-xs text-slate-700 uppercase bg-slate-50 dark:bg-slate-700 dark:text-slate-300">
              <tr>
                <th scope="col" className="px-6 py-3">Case ID</th>
                <th scope="col" className="px-6 py-3">Case Type</th>
                <th scope="col" className="px-6 py-3">Complainant</th>
                <th scope="col" className="px-6 py-3">Respondent</th>
                <th scope="col" className="px-6 py-3">Status</th>
                <th scope="col" className="px-6 py-3">Date Filed</th>
                <th scope="col" className="px-6 py-3 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
              {filteredBlotters.length > 0 ? (
                filteredBlotters.map((blotter) => (
                  <tr key={blotter.id} className="bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors">
                    
                    <td className="px-6 py-4 font-mono text-xs font-medium text-slate-900 dark:text-white">{blotter.id}</td>
                    
                    <td className="px-6 py-4 whitespace-nowrap text-slate-700 dark:text-slate-300">{blotter.caseType}</td>
                    
                    <td className="px-6 py-4 whitespace-nowrap font-medium text-slate-900 dark:text-white">{blotter.complainant}</td>
                    
                    <td className="px-6 py-4 whitespace-nowrap font-medium text-slate-600 dark:text-slate-300">{blotter.respondent}</td>
                    
                    <td className="px-6 py-4 whitespace-nowrap">
                      <StatusBadge status={blotter.status} />
                    </td>

                    <td className="px-6 py-4 whitespace-nowrap text-slate-500 dark:text-slate-400">
                      {blotter.dateFiled}
                    </td>

                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <div className="flex items-center justify-end gap-1">
                        <button className="p-2 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors dark:hover:bg-slate-700 dark:hover:text-blue-400" title="View Details">
                          <Eye size={16} />
                        </button>
                        <button className="p-2 text-slate-400 hover:text-amber-600 hover:bg-amber-50 rounded-lg transition-colors dark:hover:bg-slate-700 dark:hover:text-amber-400" title="Edit Record">
                          <Edit2 size={16} />
                        </button>
                        <button className="p-2 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors dark:hover:bg-slate-700 dark:hover:text-red-400" title="Print Report">
                          <Printer size={16} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                /* Empty State */
                <tr>
                  <td colSpan={7} className="px-6 py-10 text-center text-slate-500 dark:text-slate-400">
                    <div className="flex flex-col items-center justify-center">
                      <div className="p-4 bg-slate-50 rounded-full dark:bg-slate-700 mb-3">
                        <FileText className="w-6 h-6 text-slate-400" />
                      </div>
                      <p className="text-base font-medium text-slate-900 dark:text-white">No blotter reports found</p>
                      <p className="text-sm mt-1">Try adjusting your search or filters.</p>
                    </div>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        
        {/* Pagination */}
        <div className="flex items-center justify-between p-4 border-t border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50">
          <span className="text-sm text-slate-500 dark:text-slate-400">
            Showing <span className="font-semibold text-slate-900 dark:text-white">1-{filteredBlotters.length}</span> of <span className="font-semibold text-slate-900 dark:text-white">{blotters.length}</span>
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

/* --- HELPER BADGE COMPONENT --- */

function StatusBadge({ status }: { status: string }) {
  const styles: Record<string, string> = {
    Pending: "bg-amber-100 text-amber-800 border-amber-200 dark:bg-amber-900/30 dark:text-amber-400",
    Scheduled: "bg-blue-100 text-blue-800 border-blue-200 dark:bg-blue-900/30 dark:text-blue-400",
    Resolved: "bg-green-100 text-green-800 border-green-200 dark:bg-green-900/30 dark:text-green-400",
    Dismissed: "bg-slate-100 text-slate-700 border-slate-200 dark:bg-slate-700 dark:text-slate-400",
  };

  const icons: Record<string, any> = {
    Pending: Clock,
    Scheduled: Gavel,
    Resolved: CheckCircle2,
    Dismissed: XCircle,
  };

  const Icon = icons[status] || Clock;
  const style = styles[status] || styles.Pending;

  return (
    <span className={`inline-flex items-center gap-1.5 py-1 px-2.5 rounded-full text-xs font-medium border ${style} capitalize`}>
      <Icon size={12} />
      {status}
    </span>
  );
}