"use client";

import React, { useState } from "react";
import { 
  Search, 
  Plus, 
  Filter, 
  MoreVertical, 
  Trash2, 
  Edit2, 
  Users,
  MapPin,
  CheckCircle2,
  XCircle,
  Eye
} from "lucide-react";

// --- DUMMY DATA ---
// This would come from your database
const INITIAL_RESIDENTS = [
  { id: 101, name: "Maria Clara Santos", purok: "Purok 1", age: 28, gender: "Female", voterStatus: "Voter", dateRegistered: "2022-01-15" },
  { id: 102, name: "Crisostomo Ibarra Lopez", purok: "Purok 2", age: 30, gender: "Male", voterStatus: "Voter", dateRegistered: "2022-02-20" },
  { id: 103, name: "Padre Damaso Verdolagas", purok: "Purok 1", age: 55, gender: "Male", voterStatus: "Non-Voter", dateRegistered: "2023-05-10" },
  { id: 104, name: "Sisa", purok: "Purok 3", age: 42, gender: "Female", voterStatus: "Voter", dateRegistered: "2022-03-05" },
  { id: 105, name: "Basilio", purok: "Purok 3", age: 15, gender: "Male", voterStatus: "Non-Voter", dateRegistered: "2022-03-05" },
  { id: 106, name: "Kapitan Tiago", purok: "Purok 2", age: 48, gender: "Male", voterStatus: "Voter", dateRegistered: "2021-11-30" },
];

export default function ResidentsPage() {
  const [residents, setResidents] = useState(INITIAL_RESIDENTS);
  const [searchTerm, setSearchTerm] = useState("");
  const [purokFilter, setPurokFilter] = useState("All");

  // Filter logic
  const filteredResidents = residents.filter((res) => {
    const matchesSearch = res.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesPurok = purokFilter === "All" || res.purok === purokFilter;
    return matchesSearch && matchesPurok;
  });

  // Delete handler (Simulation)
  const handleDelete = (id: number) => {
    // In a real app, use a custom modal, not window.confirm
    if (window.confirm("Are you sure you want to delete this resident's record? This action cannot be undone.")) {
      setResidents(residents.filter(r => r.id !== id));
    }
  };

  return (
    <div className="space-y-6">
      
      {/* --- HEADER SECTION --- */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-800 dark:text-white">Residents Directory</h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm">
            Manage all registered residents in the barangay.
          </p>
        </div>
        <button className="inline-flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800 transition-colors">
          <Plus size={18} />
          Add New Resident
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
            placeholder="Search by resident name..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="block w-full p-2.5 pl-10 text-sm text-slate-900 border border-slate-300 rounded-lg bg-slate-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-slate-700 dark:border-slate-600 dark:placeholder-slate-400 dark:text-white"
          />
        </div>

        {/* Purok Filter Dropdown */}
        <div className="flex items-center gap-2 w-full sm:w-auto">
          <Filter size={18} className="text-slate-500 dark:text-slate-400" />
          <select 
            value={purokFilter}
            onChange={(e) => setPurokFilter(e.target.value)}
            className="bg-slate-50 border border-slate-300 text-slate-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-slate-700 dark:border-slate-600 dark:text-white"
          >
            <option value="All">All Puroks</option>
            <option value="Purok 1">Purok 1</option>
            <option value="Purok 2">Purok 2</option>
            <option value="Purok 3">Purok 3</option>
            <option value="Purok 4">Purok 4</option>
            {/* Add more puroks as needed */}
          </select>
        </div>
      </div>

      {/* --- RESIDENTS TABLE --- */}
      <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left text-slate-500 dark:text-slate-400">
            <thead className="text-xs text-slate-700 uppercase bg-slate-50 dark:bg-slate-700 dark:text-slate-300">
              <tr>
                <th scope="col" className="px-6 py-3">Name</th>
                <th scope="col" className="px-6 py-3">Address (Purok)</th>
                <th scope="col" className="px-6 py-3">Age / Gender</th>
                <th scope="col" className="px-6 py-3">Voter Status</th>
                <th scope="col" className="px-6 py-3">Date Registered</th>
                <th scope="col" className="px-6 py-3 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
              {filteredResidents.length > 0 ? (
                filteredResidents.map((resident) => (
                  <tr key={resident.id} className="bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors">
                    
                    {/* Name Column */}
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className=" w-10 h-10 bg-slate-100 text-slate-600 rounded-full flex items-center justify-center font-bold dark:bg-slate-700 dark:text-slate-300">
                          {getInitials(resident.name)}
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-slate-900 dark:text-white">{resident.name}</div>
                        </div>
                      </div>
                    </td>

                    {/* Address Column */}
                    <td className="px-6 py-4 whitespace-nowrap">
                      <PurokBadge purok={resident.purok} />
                    </td>

                    {/* Age / Gender Column */}
                    <td className="px-6 py-4 whitespace-nowrap text-slate-500 dark:text-slate-400">
                      {resident.age} / {resident.gender}
                    </td>

                    {/* Voter Status Column */}
                    <td className="px-6 py-4 whitespace-nowrap">
                      <VoterStatusBadge status={resident.voterStatus} />
                    </td>

                    {/* Date Registered */}
                    <td className="px-6 py-4 whitespace-nowrap text-slate-500 dark:text-slate-400">
                      {resident.dateRegistered}
                    </td>

                    {/* Actions */}
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <div className="flex items-center justify-end gap-1">
                        <button className="p-2 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors dark:hover:bg-slate-700 dark:hover:text-blue-400" title="View Details">
                          <Eye size={16} />
                        </button>
                        <button className="p-2 text-slate-400 hover:text-amber-600 hover:bg-amber-50 rounded-lg transition-colors dark:hover:bg-slate-700 dark:hover:text-amber-400" title="Edit Record">
                          <Edit2 size={16} />
                        </button>
                        <button 
                          onClick={() => handleDelete(resident.id)}
                          className="p-2 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors dark:hover:bg-slate-700 dark:hover:text-red-400"
                          title="Delete Record"
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
                  <td colSpan={6} className="px-6 py-10 text-center text-slate-500 dark:text-slate-400">
                    <div className="flex flex-col items-center justify-center">
                      <div className="p-4 bg-slate-50 rounded-full dark:bg-slate-700 mb-3">
                        <Users className="w-6 h-6 text-slate-400" />
                      </div>
                      <p className="text-base font-medium text-slate-900 dark:text-white">No residents found</p>
                      <p className="text-sm mt-1">Try adjusting your search or "Purok" filter.</p>
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
            Showing <span className="font-semibold text-slate-900 dark:text-white">1-{filteredResidents.length}</span> of <span className="font-semibold text-slate-900 dark:text-white">{residents.length}</span>
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

function PurokBadge({ purok }: { purok: string }) {
  return (
    <span className="inline-flex items-center gap-1.5 py-1 px-2.5 rounded-md text-xs font-medium bg-slate-100 text-slate-700 border border-slate-200 dark:bg-slate-700 dark:text-slate-300">
      <MapPin size={12} />
      {purok}
    </span>
  );
}

function VoterStatusBadge({ status }: { status: string }) {
  if (status === "Voter") {
    return (
      <span className="inline-flex items-center gap-1.5 py-1 px-2.5 rounded-full text-xs font-medium bg-green-100 text-green-800 border border-green-200 dark:bg-green-900/30 dark:text-green-400">
        <CheckCircle2 size={12} />
        Voter
      </span>
    );
  }

  return (
    <span className="inline-flex items-center gap-1.5 py-1 px-2.5 rounded-full text-xs font-medium bg-slate-100 text-slate-700 border border-slate-200 dark:bg-slate-700/50 dark:text-slate-400">
      <XCircle size={12} />
      Non-Voter
    </span>
  );
}