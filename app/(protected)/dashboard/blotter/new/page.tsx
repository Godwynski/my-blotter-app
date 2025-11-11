"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  Save, 
  X, 
  User, 
  MapPin, 
  Calendar, 
  FileText, 
  AlertCircle,
  Phone,
  Users
} from "lucide-react";

export default function NewBlotterPage() {
  const [isLoading, setIsLoading] = useState(false);

  // Simulation of form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate network request
    setTimeout(() => {
      setIsLoading(false);
      alert("Blotter report created successfully!");
      // In a real app, you would redirect here: router.push('/dashboard/blotter')
    }, 1500);
  };

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      
      {/* --- HEADER --- */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400 mb-1">
            <Link href="/dashboard/blotter" className="hover:text-blue-600 hover:underline">Blotter Records</Link>
            <span>/</span>
            <span className="text-slate-800 dark:text-white font-medium">New Entry</span>
          </div>
          <h1 className="text-2xl font-bold text-slate-800 dark:text-white">Create New Blotter Report</h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm">
            Fill in the details below to file a new official complaint.
          </p>
        </div>
        
        {/* Header Actions */}
        <div className="flex items-center gap-3">
          <Link 
            href="/dashboard/blotter"
            className="px-4 py-2 text-sm font-medium text-slate-700 bg-white border border-slate-300 rounded-lg hover:bg-slate-50 dark:bg-slate-800 dark:text-slate-300 dark:border-slate-600 dark:hover:bg-slate-700"
          >
            Cancel
          </Link>
          <button 
            onClick={handleSubmit}
            disabled={isLoading}
            className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800 transition-colors disabled:opacity-70"
          >
            {isLoading ? "Saving..." : (
              <>
                <Save size={18} /> Save Record
              </>
            )}
          </button>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* --- LEFT COLUMN: PARTIES INVOLVED (2/3 Width) --- */}
        <div className="lg:col-span-2 space-y-6">
          
          {/* SECTION 1: COMPLAINANT INFO */}
          <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm p-6">
            <div className="flex items-center gap-3 mb-6 border-b border-slate-100 dark:border-slate-700 pb-4">
              <div className="p-2 bg-blue-50 text-blue-600 rounded-lg dark:bg-blue-900/30 dark:text-blue-400">
                <User size={20} />
              </div>
              <h2 className="text-lg font-semibold text-slate-800 dark:text-white">Complainant Details</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="col-span-full sm:col-span-2">
                <label className="block mb-2 text-sm font-medium text-slate-900 dark:text-white">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input type="text" required placeholder="First M. Last" className="form-input" />
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium text-slate-900 dark:text-white">
                  Contact Number
                </label>
                <div className="relative">
                  <Phone className="absolute left-3 top-2.5 text-slate-400" size={16} />
                  <input type="tel" placeholder="0912 345 6789" className="form-input pl-10" />
                </div>
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium text-slate-900 dark:text-white">
                  ID Presented (Optional)
                </label>
                <input type="text" placeholder="e.g., Voter's ID, Driver's Lic." className="form-input" />
              </div>

              <div className="col-span-full">
                <label className="block mb-2 text-sm font-medium text-slate-900 dark:text-white">
                  Complete Address
                </label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-2.5 text-slate-400" size={16} />
                  <input type="text" placeholder="House No., Street, Purok, Barangay" className="form-input pl-10" />
                </div>
              </div>
            </div>
          </div>

          {/* SECTION 2: RESPONDENT INFO */}
          <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm p-6">
            <div className="flex items-center gap-3 mb-6 border-b border-slate-100 dark:border-slate-700 pb-4">
              <div className="p-2 bg-amber-50 text-amber-600 rounded-lg dark:bg-amber-900/30 dark:text-amber-400">
                <Users size={20} />
              </div>
              <h2 className="text-lg font-semibold text-slate-800 dark:text-white">Respondent Details <span className="text-sm font-normal text-slate-500 ml-2">(The person being complained about)</span></h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="col-span-full sm:col-span-2">
                <label className="block mb-2 text-sm font-medium text-slate-900 dark:text-white">
                  Respondent Name(s) <span className="text-red-500">*</span>
                </label>
                <input type="text" required placeholder="Name of the person(s) involved" className="form-input" />
              </div>

              <div className="col-span-full">
                <label className="block mb-2 text-sm font-medium text-slate-900 dark:text-white">
                  Address / Location
                </label>
                <input type="text" placeholder="Where does this person reside? (if known)" className="form-input" />
              </div>
            </div>
          </div>

        </div>

        {/* --- RIGHT COLUMN: INCIDENT DETAILS (1/3 Width) --- */}
        <div className="lg:col-span-1 space-y-6">
          
          {/* SECTION 3: CASE INFO */}
          <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm p-6 h-full">
            <div className="flex items-center gap-3 mb-6 border-b border-slate-100 dark:border-slate-700 pb-4">
              <div className="p-2 bg-red-50 text-red-600 rounded-lg dark:bg-red-900/30 dark:text-red-400">
                <AlertCircle size={20} />
              </div>
              <h2 className="text-lg font-semibold text-slate-800 dark:text-white">Incident Data</h2>
            </div>

            <div className="space-y-6">
              <div>
                <label className="block mb-2 text-sm font-medium text-slate-900 dark:text-white">
                  Incident Type <span className="text-red-500">*</span>
                </label>
                <select required className="form-input">
                  <option value="">Select Case Type...</option>
                  <option value="Theft">Theft / Robbery</option>
                  <option value="Physical Injury">Physical Injury</option>
                  <option value="Noise Complaint">Noise Complaint / Disturbance</option>
                  <option value="Property Damage">Property Damage</option>
                  <option value="Gossip">Gossip / Oral Defamation</option>
                  <option value="Threats">Threats / Intimidation</option>
                  <option value="Others">Others</option>
                </select>
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium text-slate-900 dark:text-white">
                  Date & Time of Incident
                </label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-2.5 text-slate-400" size={16} />
                  <input type="datetime-local" className="form-input pl-10" />
                </div>
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium text-slate-900 dark:text-white">
                  Place of Incident
                </label>
                <input type="text" placeholder="Specific location (e.g. Store, Street)" className="form-input" />
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium text-slate-900 dark:text-white">
                  Status
                </label>
                <select className="form-input">
                  <option value="Pending">Pending</option>
                  <option value="Scheduled">For Hearing</option>
                  <option value="Resolved">Resolved (Amicable Settlement)</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* --- BOTTOM ROW: NARRATIVE (Full Width) --- */}
        <div className="col-span-full bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm p-6">
          <div className="flex items-center gap-3 mb-4">
             <div className="p-2 bg-slate-100 text-slate-600 rounded-lg dark:bg-slate-700 dark:text-slate-300">
                <FileText size={20} />
             </div>
             <h2 className="text-lg font-semibold text-slate-800 dark:text-white">Narrative of Incident</h2>
          </div>
          <p className="text-sm text-slate-500 mb-3">
            Please provide a detailed, chronological account of what happened. This will serve as the official record.
          </p>
          <textarea 
            rows={8}
            className="block w-full p-4 text-sm text-slate-900 bg-slate-50 rounded-lg border border-slate-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-slate-700 dark:border-slate-600 dark:placeholder-slate-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="On [Date/Time], the complainant stated that..."
          ></textarea>
        </div>

      </form>
    </div>
  );
}