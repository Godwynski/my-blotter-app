"use client";

import React from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { 
  ArrowLeft, 
  Mail, 
  Phone, 
  MapPin, 
  Calendar, 
  User, 
  Edit, 
  FileText,
  Clock,
  CheckCircle2,
  Gavel
} from "lucide-react";

// --- DUMMY DATA (In a real app, you'd fetch this using the `id`) ---
const residentData = {
  id: 101,
  name: "Maria Clara Santos",
  purok: "Purok 1",
  age: 28,
  gender: "Female",
  voterStatus: "Voter",
  dateRegistered: "2022-01-15",
  contact: "0917 123 4567",
  email: "maria.santos@email.com",
  address: "123 Rizal St., Purok 1, Barangay San Antonio",
};

const caseHistory = [
  { id: "BL-2025-001", caseType: "Theft", role: "Complainant", status: "Pending", dateFiled: "2025-11-10" },
  { id: "BL-2025-002", caseType: "Noise Complaint", role: "Respondent", status: "Scheduled", dateFiled: "2025-11-09" },
  { id: "BL-2025-004", caseType: "Property Damage", role: "Complainant", status: "Dismissed", dateFiled: "2025-10-12" },
];
// --- END DUMMY DATA ---

export default function ResidentProfilePage() {
  const params = useParams();
  const residentId = params.id;

  // In a real app, you would use `residentId` to fetch the data
  // e.g., const { data: resident, isLoading } = useQuery(...)

  return (
    <div className="space-y-6">
      
      {/* --- HEADER --- */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <Link 
            href="/dashboard/residents" 
            className="inline-flex items-center gap-2 text-sm text-blue-600 hover:underline dark:text-blue-400 mb-2"
          >
            <ArrowLeft size={16} />
            Back to Residents Directory
          </Link>
          <h1 className="text-2xl font-bold text-slate-800 dark:text-white">
            {residentData.name}
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm">
            Resident ID: {residentData.id}
          </p>
        </div>
        <div className="flex items-center gap-2">
          <button className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-slate-700 bg-white border border-slate-300 rounded-lg hover:bg-slate-50 dark:bg-slate-800 dark:text-slate-300 dark:border-slate-600 dark:hover:bg-slate-700">
            <Edit size={16} />
            Edit Profile
          </button>
          <button className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700">
            <FileText size={16} />
            Issue Clearance
          </button>
        </div>
      </div>

      {/* --- PROFILE GRID --- */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* LEFT COLUMN: Profile Card */}
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm p-6">
            <div className="flex flex-col items-center">
              <div className="w-24 h-24 rounded-full bg-slate-100 dark:bg-slate-700 flex items-center justify-center text-4xl font-bold text-slate-600 dark:text-slate-300 mb-4">
                MS
              </div>
              <h2 className="text-xl font-semibold text-slate-900 dark:text-white">{residentData.name}</h2>
              <p className="text-sm text-slate-500 dark:text-slate-400">{residentData.purok}</p>
            </div>
            
            <hr className="my-6 border-slate-100 dark:border-slate-700" />
            
            <div className="space-y-4">
              <h3 className="text-xs font-medium uppercase text-slate-400">Contact Information</h3>
              <div className="flex items-center gap-3">
                <Mail size={16} className="text-slate-400 shrink-0" />
                <span className="text-sm text-slate-700 dark:text-slate-300 truncate">{residentData.email}</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={16} className="text-slate-400 shrink-0" />
                <span className="text-sm text-slate-700 dark:text-slate-300">{residentData.contact}</span>
              </div>

              <h3 className="text-xs font-medium uppercase text-slate-400 pt-4">Address</h3>
              <div className="flex items-start gap-3">
                <MapPin size={16} className="text-slate-400 shrink-0 mt-0.5" />
                <span className="text-sm text-slate-700 dark:text-slate-300">{residentData.address}</span>
              </div>

              <h3 className="text-xs font-medium uppercase text-slate-400 pt-4">Basic Information</h3>
              <div className="flex items-center gap-3">
                <User size={16} className="text-slate-400 shrink-0" />
                <span className="text-sm text-slate-700 dark:text-slate-300">{residentData.age} years old ({residentData.gender})</span>
              </div>
              <div className="flex items-center gap-3">
                <Calendar size={16} className="text-slate-400 shrink-0" />
                <span className="text-sm text-slate-700 dark:text-slate-300">Registered: {residentData.dateRegistered}</span>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: Case History */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm overflow-hidden">
            <div className="p-6 border-b border-slate-100 dark:border-slate-700">
              <h2 className="text-lg font-semibold text-slate-800 dark:text-white">Blotter Case History</h2>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                All cases this resident has been involved in.
              </p>
            </div>
            
            <div className="overflow-x-auto">
              {caseHistory.length > 0 ? (
                <table className="w-full text-sm text-left">
                  <thead className="text-xs text-slate-500 uppercase bg-slate-50 dark:bg-slate-700 dark:text-slate-400">
                    <tr>
                      <th className="px-6 py-3">Case ID</th>
                      <th className="px-6 py-3">Incident Type</th>
                      <th className="px-6 py-3">Role</th>
                      <th className="px-6 py-3">Date Filed</th>
                      <th className="px-6 py-3">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 dark:divide-slate-700">
                    {caseHistory.map((caseItem) => (
                      <tr key={caseItem.id} className="hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors">
                        <td className="px-6 py-4 font-mono text-xs font-medium text-blue-600 hover:underline dark:text-blue-400">
                          <Link href={`/dashboard/blotter/${caseItem.id}`}>{caseItem.id}</Link>
                        </td>
                        <td className="px-6 py-4 text-slate-800 dark:text-slate-200">{caseItem.caseType}</td>
                        <td className="px-6 py-4">
                          <RoleBadge role={caseItem.role} />
                        </td>
                        <td className="px-6 py-4 text-slate-500">{caseItem.dateFiled}</td>
                        <td className="px-6 py-4">
                          <StatusBadge status={caseItem.status} />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              ) : (
                <div className="p-10 text-center">
                  <FileText className="mx-auto h-12 w-12 text-slate-300" />
                  <h3 className="mt-2 text-sm font-medium text-slate-900 dark:text-white">No Case History</h3>
                  <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">This resident has not been involved in any blotter cases.</p>
                </div>
              )}
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
}

/* --- HELPER BADGES --- */

function RoleBadge({ role }: { role: string }) {
  const isComplainant = role === "Complainant";
  return (
    <span className={`px-2.5 py-0.5 rounded-full text-xs font-medium border ${
      isComplainant 
        ? "bg-blue-100 text-blue-800 border-blue-200" 
        : "bg-amber-100 text-amber-800 border-amber-200"
    }`}>
      {role}
    </span>
  );
}

function StatusBadge({ status }: { status: string }) {
  const styles: Record<string, string> = {
    Pending: "bg-amber-100 text-amber-800 border-amber-200",
    Scheduled: "bg-blue-100 text-blue-800 border-blue-200",
    Resolved: "bg-green-100 text-green-800 border-green-200",
    Dismissed: "bg-slate-100 text-slate-700 border-slate-200",
  };
  const icons: Record<string, any> = {
    Pending: Clock,
    Scheduled: Gavel,
    Resolved: CheckCircle2,
  };
  const Icon = icons[status] || FileText;
  const style = styles[status] || styles.Dismissed;

  return (
    <span className={`inline-flex items-center gap-1.5 py-1 px-2 rounded-full text-xs font-medium border ${style} capitalize`}>
      <Icon size={12} />
      {status}
    </span>
  );
}