"use client";

import React from "react";
import { 
  FileText, 
  Clock, 
  CheckCircle2, 
  Users, 
  TrendingUp, 
  MoreVertical,
  Gavel,
  AlertTriangle
} from "lucide-react";

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      {/* --- HEADER --- */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-800 dark:text-white">Dashboard Overview</h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm">
            Welcome back, Administrator. Here is what's happening today.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 text-xs font-medium bg-blue-50 text-blue-700 rounded-full border border-blue-100 dark:bg-blue-900 dark:text-blue-300 dark:border-blue-800">
            📅 {new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
          </span>
        </div>
      </div>

      {/* --- STATS CARDS GRID --- */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard 
          title="Total Blotters" 
          value="1,248" 
          trend="+12% this month"
          icon={FileText} 
          color="blue" 
        />
        <StatCard 
          title="Pending Cases" 
          value="42" 
          trend="Requires action"
          icon={Clock} 
          color="orange" 
        />
        <StatCard 
          title="Solved Cases" 
          value="895" 
          trend="+5% success rate"
          icon={CheckCircle2} 
          color="green" 
        />
        <StatCard 
          title="Scheduled Hearings" 
          value="8" 
          trend="For this week"
          icon={Gavel} 
          color="purple" 
        />
      </div>

      {/* --- MAIN CONTENT SPLIT --- */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* LEFT COLUMN: Recent Reports (Takes up 2 columns on large screens) */}
        <div className="lg:col-span-2 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm overflow-hidden">
          <div className="p-5 border-b border-slate-100 dark:border-slate-700 flex justify-between items-center">
            <h2 className="font-semibold text-slate-800 dark:text-white">Recent Blotter Reports</h2>
            <button className="text-sm text-blue-600 hover:underline dark:text-blue-400">View All</button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="text-xs text-slate-500 uppercase bg-slate-50 dark:bg-slate-700 dark:text-slate-400">
                <tr>
                  <th className="px-6 py-3">Case ID</th>
                  <th className="px-6 py-3">Complainant</th>
                  <th className="px-6 py-3">Type</th>
                  <th className="px-6 py-3">Status</th>
                  <th className="px-6 py-3">Date</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-700">
                {/* Dummy Data Row 1 */}
                <tr className="hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors">
                  <td className="px-6 py-4 font-medium text-slate-900 dark:text-white">BL-2025-001</td>
                  <td className="px-6 py-4">Juan Dela Cruz</td>
                  <td className="px-6 py-4">Theft</td>
                  <td className="px-6 py-4"><StatusBadge status="pending" /></td>
                  <td className="px-6 py-4 text-slate-500">Nov 10, 2025</td>
                </tr>
                {/* Dummy Data Row 2 */}
                <tr className="hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors">
                  <td className="px-6 py-4 font-medium text-slate-900 dark:text-white">BL-2025-002</td>
                  <td className="px-6 py-4">Maria Clara</td>
                  <td className="px-6 py-4">Noise Complaint</td>
                  <td className="px-6 py-4"><StatusBadge status="scheduled" /></td>
                  <td className="px-6 py-4 text-slate-500">Nov 09, 2025</td>
                </tr>
                {/* Dummy Data Row 3 */}
                <tr className="hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors">
                  <td className="px-6 py-4 font-medium text-slate-900 dark:text-white">BL-2025-003</td>
                  <td className="px-6 py-4">Pedro Penduko</td>
                  <td className="px-6 py-4">Physical Injury</td>
                  <td className="px-6 py-4"><StatusBadge status="resolved" /></td>
                  <td className="px-6 py-4 text-slate-500">Nov 08, 2025</td>
                </tr>
                {/* Dummy Data Row 4 */}
                <tr className="hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors">
                  <td className="px-6 py-4 font-medium text-slate-900 dark:text-white">BL-2025-004</td>
                  <td className="px-6 py-4">Jose Rizal</td>
                  <td className="px-6 py-4">Property Damage</td>
                  <td className="px-6 py-4"><StatusBadge status="pending" /></td>
                  <td className="px-6 py-4 text-slate-500">Nov 08, 2025</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* RIGHT COLUMN: Quick Actions & Alerts */}
        <div className="space-y-6">
          
          {/* Action Center */}
          <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm p-5">
            <h2 className="font-semibold text-slate-800 dark:text-white mb-4">Quick Actions</h2>
            <div className="grid grid-cols-2 gap-3">
              <button className="flex flex-col items-center justify-center p-4 rounded-lg border border-slate-100 bg-slate-50 hover:bg-blue-50 hover:border-blue-200 transition-all group dark:bg-slate-700 dark:border-slate-600 dark:hover:bg-slate-600">
                <FileText className="w-6 h-6 text-slate-500 group-hover:text-blue-600 mb-2" />
                <span className="text-xs font-medium text-slate-600 dark:text-slate-300">New Blotter</span>
              </button>
              <button className="flex flex-col items-center justify-center p-4 rounded-lg border border-slate-100 bg-slate-50 hover:bg-blue-50 hover:border-blue-200 transition-all group dark:bg-slate-700 dark:border-slate-600 dark:hover:bg-slate-600">
                <Users className="w-6 h-6 text-slate-500 group-hover:text-blue-600 mb-2" />
                <span className="text-xs font-medium text-slate-600 dark:text-slate-300">Add Resident</span>
              </button>
              <button className="flex flex-col items-center justify-center p-4 rounded-lg border border-slate-100 bg-slate-50 hover:bg-blue-50 hover:border-blue-200 transition-all group dark:bg-slate-700 dark:border-slate-600 dark:hover:bg-slate-600">
                <CheckCircle2 className="w-6 h-6 text-slate-500 group-hover:text-blue-600 mb-2" />
                <span className="text-xs font-medium text-slate-600 dark:text-slate-300">Clearance</span>
              </button>
              <button className="flex flex-col items-center justify-center p-4 rounded-lg border border-slate-100 bg-slate-50 hover:bg-blue-50 hover:border-blue-200 transition-all group dark:bg-slate-700 dark:border-slate-600 dark:hover:bg-slate-600">
                <MoreVertical className="w-6 h-6 text-slate-500 group-hover:text-blue-600 mb-2" />
                <span className="text-xs font-medium text-slate-600 dark:text-slate-300">More</span>
              </button>
            </div>
          </div>

          {/* Upcoming Hearings / Alerts */}
          <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm p-5">
            <h2 className="font-semibold text-slate-800 dark:text-white mb-4 flex items-center gap-2">
              <AlertTriangle size={18} className="text-amber-500" />
              Attention Required
            </h2>
            <div className="space-y-3">
              <div className="p-3 rounded-lg bg-amber-50 border border-amber-100 dark:bg-amber-900/20 dark:border-amber-800">
                <div className="flex justify-between items-start">
                  <p className="text-sm font-medium text-amber-800 dark:text-amber-200">Hearing: Case #2025-002</p>
                  <span className="text-xs text-amber-600 dark:text-amber-400">Today, 2PM</span>
                </div>
                <p className="text-xs text-amber-700 mt-1 dark:text-amber-300">Noise Complaint - Mediation</p>
              </div>
              <div className="p-3 rounded-lg bg-red-50 border border-red-100 dark:bg-red-900/20 dark:border-red-800">
                <div className="flex justify-between items-start">
                  <p className="text-sm font-medium text-red-800 dark:text-red-200">Unresolved 30 Days</p> 
                  <span className="text-xs text-red-600 dark:text-red-400">2 Cases</span>
                </div>
                <p className="text-xs text-red-700 mt-1 dark:text-red-300">Review pending cases immediately.</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

/* --- REUSABLE SUB-COMPONENTS --- */

// 1. Stats Card Component
function StatCard({ title, value, trend, icon: Icon, color }: any) {
  const colorStyles = {
    blue: "bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400",
    orange: "bg-orange-50 text-orange-600 dark:bg-orange-900/30 dark:text-orange-400",
    green: "bg-green-50 text-green-600 dark:bg-green-900/30 dark:text-green-400",
    purple: "bg-purple-50 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400",
  };

  // @ts-ignore - Dynamic indexing
  const activeColorClass = colorStyles[color] || colorStyles.blue;

  return (
    <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-5 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start">
        <div>
          <p className="text-slate-500 dark:text-slate-400 text-sm font-medium mb-1">{title}</p>
          <h3 className="text-2xl font-bold text-slate-800 dark:text-white">{value}</h3>
        </div>
        <div className={`p-2 rounded-lg ${activeColorClass}`}>
          <Icon size={20} />
        </div>
      </div>
      <div className="mt-4 flex items-center text-xs text-slate-500 dark:text-slate-400">
        <TrendingUp size={14} className="mr-1 text-green-500" />
        <span className="text-green-500 font-medium mr-1">{trend}</span>
      </div>
    </div>
  );
}

// 2. Status Badge Component
function StatusBadge({ status }: { status: string }) {
  const styles = {
    pending: "bg-amber-100 text-amber-800 border-amber-200",
    scheduled: "bg-blue-100 text-blue-800 border-blue-200",
    resolved: "bg-green-100 text-green-800 border-green-200",
  };

  // @ts-ignore
  const activeClass = styles[status] || styles.pending;

  return (
    <span className={`px-2.5 py-0.5 rounded-full text-xs font-medium border ${activeClass} capitalize`}>
      {status}
    </span>
  );
}