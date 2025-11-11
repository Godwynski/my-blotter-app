"use client";

import React, { useState } from "react";
import { 
  ShieldCheck, 
  Mail, 
  Lock, 
  LogIn, 
  FileText, 
  Users, 
  Search, 
  Gavel, 
  Printer,
  CircleCheck, // Fixed: Replaced CheckCircle2
  CloudUpload  // Fixed: Replaced UploadCloud
} from "lucide-react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    // --- SIMULATION ---
    // In a real app, you would make an API call here.
    // For this demo, we'll just check for a hardcoded user.
    setTimeout(() => {
      if (email.toLowerCase() === "admin@barangay.gov.ph" && password === "admin123") {
        // Successful login
        // In a real Next.js app, you'd use: router.push('/dashboard')
        window.location.href = "/dashboard"; 
      } else {
        // Failed login
        setError("Invalid email or password. Please try again.");
      }
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-slate-200">
      
      {/* --- Header --- */}
      <nav className="border-b border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold">
              B
            </div>
            <span className="text-xl font-bold text-slate-900 dark:text-white">
              Blotter<span className="text-blue-600">System</span>
            </span>
          </div>
          <span className="text-sm font-medium text-slate-600 dark:text-slate-400">
            Official Use Only
          </span>
        </div>
      </nav>

      {/* --- Hero & Login Section --- */}
      <main className="max-w-7xl mx-auto px-6 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: Introduction */}
          <div>
            <span className="inline-flex items-center gap-2 px-3 py-1 text-sm font-medium text-blue-700 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">
              <ShieldCheck size={16} />
              Barangay San Antonio
            </span>
            <h1 className="mt-6 text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white leading-tight">
              Official Blotter & Case Management System
            </h1>
            <p className="mt-6 text-lg text-slate-600 dark:text-slate-400">
              This is a restricted-access system for authorized barangay personnel (Admins and Staff). Please log in to manage cases and resident records.
            </p>
          </div>

          {/* Right: Login Form */}
          <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 shadow-xl p-8">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
              System Login
            </h2>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
              Enter your official credentials.
            </p>

            <form onSubmit={handleSubmit} className="mt-8 space-y-6">
              {/* Error Message */}
              {error && (
                <div className="p-3 text-sm text-red-700 bg-red-100 rounded-lg border border-red-200 dark:bg-red-900/30 dark:text-red-300">
                  {error}
                </div>
              )}

              {/* Email Field */}
              <div>
                <label className="block mb-2 text-sm font-medium text-slate-900 dark:text-white">
                  Email Address
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <Mail className="w-5 h-5 text-slate-400" />
                  </div>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="block w-full p-3 pl-10 text-sm text-slate-900 border border-slate-300 rounded-lg bg-slate-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-slate-700 dark:border-slate-600 dark:placeholder-slate-400 dark:text-white"
                    placeholder="admin@barangay.gov.ph"
                  />
                </div>
              </div>

              {/* Password Field */}
              <div>
                <label className="block mb-2 text-sm font-medium text-slate-900 dark:text-white">
                  Password
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <Lock className="w-5 h-5 text-slate-400" />
                  </div>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="block w-full p-3 pl-10 text-sm text-slate-900 border border-slate-300 rounded-lg bg-slate-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-slate-700 dark:border-slate-600 dark:placeholder-slate-400 dark:text-white"
                    placeholder="admin123"
                  />
                </div>
              </div>

              {/* Login Button */}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full inline-flex justify-center items-center gap-2 px-5 py-3 text-base font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 disabled:opacity-70 disabled:cursor-not-allowed transition-colors"
              >
                {isLoading ? (
                  "Signing In..."
                ) : (
                  <>
                    <LogIn size={18} />
                    Secure Login
                  </>
                )}
              </button>
            </form>
          </div>
        </div>

        {/* --- How It Works Section (For Staff) --- */}
        <section className="mt-24 lg:mt-32 py-12 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 shadow-lg">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="text-2xl font-bold text-center text-slate-900 dark:text-white">
              System Process (For Staff)
            </h2>
            <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-12">
              {/* Step 1 */}
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-xl bg-blue-100 dark:bg-blue-900 flex items-center justify-center text-blue-600 dark:text-blue-400">
                  <FileText size={24} />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-slate-900 dark:text-white">1. Record Incident</h3>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                  Use 'New Blotter' to log details and evidence.
                </p>
              </div>
              {/* Step 2 */}
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-xl bg-blue-100 dark:bg-blue-900 flex items-center justify-center text-blue-600 dark:text-blue-400">
                  <Gavel size={24} />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-slate-900 dark:text-white">2. Manage Case</h3>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                  Track status, add notes, and schedule hearings.
                </p>
              </div>
              {/* Step 3 */}
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-xl bg-blue-100 dark:bg-blue-900 flex items-center justify-center text-blue-600 dark:text-blue-400">
                  <Printer size={24} />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-slate-900 dark:text-white">3. Resolve & Report</h3>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                  Print summons and finalize case reports.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* --- CITIZEN'S GUIDE SECTION --- */}
      <section className="py-16 bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-700">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="inline-block py-1 px-3 rounded-full bg-amber-100 text-amber-800 text-xs font-semibold tracking-wider mb-2 dark:bg-amber-900/30 dark:text-amber-300">
              FOR RESIDENTS
            </span>
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
              How to File a Blotter / Complaint
            </h2>
            <p className="mt-4 text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Residents cannot register accounts in this system. To file an official complaint, please follow the standard barangay procedure below.
            </p>
          </div>

          <div className="relative">
            {/* Connecting Line (Desktop Only) */}
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-slate-200 dark:bg-slate-700 -translate-y-1/2 z-0"></div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
              
              {/* STEP 1 */}
              <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-200 dark:border-slate-700 shadow-md flex flex-col items-center text-center group hover:-translate-y-1 transition-transform duration-300">
                <div className="w-14 h-14 rounded-full bg-blue-600 text-white flex items-center justify-center text-xl font-bold mb-4 shadow-lg shadow-blue-600/20">
                  1
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Visit Us</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Go to the Barangay Hall in person. Proceed to the <strong>Desk Officer</strong>.
                </p>
              </div>

              {/* STEP 2 */}
              <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-200 dark:border-slate-700 shadow-md flex flex-col items-center text-center group hover:-translate-y-1 transition-transform duration-300">
                <div className="w-14 h-14 rounded-full bg-blue-600 text-white flex items-center justify-center text-xl font-bold mb-4 shadow-lg shadow-blue-600/20">
                  2
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Interview</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  The Officer will interview you. They will use <strong>this system</strong> to record details.
                </p>
              </div>

              {/* STEP 3 */}
              <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-200 dark:border-slate-700 shadow-md flex flex-col items-center text-center group hover:-translate-y-1 transition-transform duration-300">
                <div className="w-14 h-14 rounded-full bg-blue-600 text-white flex items-center justify-center text-xl font-bold mb-4 shadow-lg shadow-blue-600/20">
                  3
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Case ID</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  You will receive a printed <strong>Case ID</strong>. Keep this safe!
                </p>
              </div>

              {/* STEP 4 */}
              <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-200 dark:border-slate-700 shadow-md flex flex-col items-center text-center group hover:-translate-y-1 transition-transform duration-300">
                <div className="w-14 h-14 rounded-full bg-blue-600 text-white flex items-center justify-center text-xl font-bold mb-4 shadow-lg shadow-blue-600/20">
                  4
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Hearing</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Wait for your scheduled hearing (Summons).
                </p>
              </div>

            </div>
          </div>

          {/* --- Digital Evidence Feature Highlight --- */}
          <div className="mt-16 bg-blue-50 dark:bg-blue-900/20 rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-8 border border-blue-100 dark:border-blue-800">
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                Have evidence to submit later?
              </h3>
              <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                You don't need to print photos or transfer files at the hall. If you have digital evidence (videos, screenshots, or photos) on your phone:
              </p>
              <ul className="space-y-3 text-slate-700 dark:text-slate-300">
                <li className="flex items-start gap-3">
                  <div className="mt-1 text-green-500"><CircleCheck size={20} /></div>
                  <span>Ask the Desk Officer for a <strong>Secure Upload Link</strong>.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 text-green-500"><CircleCheck size={20} /></div>
                  <span>We will send a specialized link to your mobile number or email.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 text-green-500"><CircleCheck size={20} /></div>
                  <span>Upload files securely from home—no login required.</span>
                </li>
              </ul>
            </div>
            <div className="shrink-0 bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg border border-slate-200 dark:border-slate-700 max-w-sm rotate-2">
              <div className="flex items-center gap-3 mb-4 border-b border-slate-100 dark:border-slate-700 pb-3">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                  <ShieldCheck size={16} />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-500 uppercase">Barangay System</p>
                  <p className="text-sm font-bold text-slate-900 dark:text-white">Secure Evidence Portal</p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="h-32 bg-slate-100 dark:bg-slate-700 rounded-lg border-2 border-dashed border-slate-300 dark:border-slate-600 flex flex-col items-center justify-center text-slate-400">
                  <CloudUpload size={32} />
                  <span className="text-xs mt-2">Upload Evidence Here</span>
                </div>
                <button className="w-full py-2 bg-blue-600 text-white text-xs font-bold rounded-lg">
                  Submit Files for Case #2025-001
                </button>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* --- Footer --- */}
      <footer className="mt-16 border-t border-slate-200 dark:border-slate-700">
        <div className="max-w-7xl mx-auto px-6 py-8 text-center">
          <p className="text-sm text-slate-500 dark:text-slate-400">
            © {new Date().getFullYear()} Barangay San Antonio, Parañaque City. All rights reserved.
            This system is for official and authorized use only.
          </p>
        </div>
      </footer>
    </div>
  );
}