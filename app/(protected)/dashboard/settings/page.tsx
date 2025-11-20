"use client";

import React, { useState } from "react";
import { 
  Save, 
  Globe, 
  Lock, 
  Database, 
  Bell, 
  UploadCloud, 
  DownloadCloud,
  ShieldCheck,
  Moon,
  Sun
} from "lucide-react";

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState("general");
  const [isLoading, setIsLoading] = useState(false);

  // Simulation of saving data
  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      alert("Settings saved successfully!");
    }, 1000);
  };

  return (
    <div className="space-y-6">
      {/* --- HEADER --- */}
      <div>
        <h1 className="text-2xl font-bold text-slate-800 dark:text-white">Settings</h1>
        <p className="text-slate-500 dark:text-slate-400 text-sm">
          Manage your barangay profile, system preferences, and security.
        </p>
      </div>

      {/* --- SETTINGS LAYOUT --- */}
      <div className="flex flex-col lg:flex-row gap-6">
        
        {/* LEFT: Navigation Sidebar */}
        <div className="w-full lg:w-64 shrink-0">
          <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm overflow-hidden">
            <nav className="flex flex-col p-2 space-y-1">
              <TabButton 
                id="general" 
                label="General Information" 
                icon={Globe} 
                activeTab={activeTab} 
                onClick={setActiveTab} 
              />
              <TabButton 
                id="security" 
                label="Security & Login" 
                icon={Lock} 
                activeTab={activeTab} 
                onClick={setActiveTab} 
              />
              <TabButton 
                id="system" 
                label="System & Backup" 
                icon={Database} 
                activeTab={activeTab} 
                onClick={setActiveTab} 
              />
              <TabButton 
                id="notifications" 
                label="Notifications" 
                icon={Bell} 
                activeTab={activeTab} 
                onClick={setActiveTab} 
              />
            </nav>
          </div>
        </div>

        {/* RIGHT: Content Area */}
        <div className="flex-1">
          <form onSubmit={handleSave} className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm p-6">
            
            {/* CONTENT: General Tab */}
            {activeTab === "general" && (
              <div className="space-y-6">
                <div className="border-b border-slate-200 dark:border-slate-700 pb-4">
                  <h2 className="text-lg font-medium text-slate-900 dark:text-white">Barangay Profile</h2>
                  <p className="text-sm text-slate-500 dark:text-slate-400">Update official barangay details used in reports.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Barangay Name</label>
                    <input type="text" defaultValue="Barangay San Antonio" className="input-field" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700 dark:text-slate-300">City / Municipality</label>
                    <input type="text" defaultValue="Parañaque City" className="input-field" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Province / Region</label>
                    <input type="text" defaultValue="Metro Manila" className="input-field" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Zip Code</label>
                    <input type="text" defaultValue="1700" className="input-field" />
                  </div>
                  <div className="col-span-full space-y-2">
                    <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Barangay Captain / Chairman</label>
                    <div className="relative">
                       <ShieldCheck className="absolute left-3 top-2.5 text-slate-400" size={18} />
                       <input type="text" defaultValue="Hon. Juan Dela Cruz" className="input-field pl-10" />
                    </div>
                  </div>
                </div>

                <div className="pt-4">
                   <label className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-2 block">Official Logo</label>
                   <div className="flex items-center gap-4">
                      <div className="w-16 h-16 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-400">
                        Logo
                      </div>
                      <button type="button" className="text-sm text-blue-600 font-medium hover:underline">Change Logo</button>
                   </div>
                </div>
              </div>
            )}

            {/* CONTENT: Security Tab */}
            {activeTab === "security" && (
              <div className="space-y-6">
                <div className="border-b border-slate-200 dark:border-slate-700 pb-4">
                  <h2 className="text-lg font-medium text-slate-900 dark:text-white">Security Settings</h2>
                  <p className="text-sm text-slate-500 dark:text-slate-400">Manage your password and account security.</p>
                </div>

                <div className="max-w-md space-y-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Current Password</label>
                    <input type="password" placeholder="••••••••" className="input-field" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700 dark:text-slate-300">New Password</label>
                    <input type="password" placeholder="••••••••" className="input-field" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Confirm New Password</label>
                    <input type="password" placeholder="••••••••" className="input-field" />
                  </div>
                </div>
                
                <div className="pt-4 border-t border-slate-200 dark:border-slate-700">
                  <h3 className="text-sm font-medium text-slate-900 dark:text-white mb-3">Two-Factor Authentication</h3>
                  <div className="flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-700/50 rounded-lg border border-slate-100 dark:border-slate-600">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-white dark:bg-slate-800 rounded-md shadow-sm">
                        <ShieldCheck className="text-green-500" size={20} />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-slate-900 dark:text-white">Secure your account</p>
                        <p className="text-xs text-slate-500 dark:text-slate-400">Add an extra layer of security.</p>
                      </div>
                    </div>
                    <button type="button" className="text-sm text-blue-600 font-medium hover:underline">Enable</button>
                  </div>
                </div>
              </div>
            )}

            {/* CONTENT: System Tab (Crucial for XAMPP) */}
            {activeTab === "system" && (
              <div className="space-y-6">
                <div className="border-b border-slate-200 dark:border-slate-700 pb-4">
                  <h2 className="text-lg font-medium text-slate-900 dark:text-white">System & Backup</h2>
                  <p className="text-sm text-slate-500 dark:text-slate-400">Manage database backups and system theme.</p>
                </div>

                {/* Theme Toggle */}
                <div className="flex items-center justify-between">
                  <div>
                     <p className="text-sm font-medium text-slate-900 dark:text-white">Appearance</p>
                     <p className="text-xs text-slate-500 dark:text-slate-400">Toggle between light and dark mode.</p>
                  </div>
                  <div className="flex items-center bg-slate-100 dark:bg-slate-700 rounded-lg p-1">
                    <button type="button" className="p-2 rounded-md bg-white shadow-sm dark:bg-transparent dark:shadow-none text-slate-800 dark:text-slate-400">
                      <Sun size={18} />
                    </button>
                    <button type="button" className="p-2 rounded-md dark:bg-slate-600 dark:text-white text-slate-400">
                      <Moon size={18} />
                    </button>
                  </div>
                </div>

                <hr className="border-slate-200 dark:border-slate-700" />

                {/* Database Management */}
                <div>
                   <p className="text-sm font-medium text-slate-900 dark:text-white mb-4">Database Management (SQL)</p>
                   <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <button type="button" className="flex flex-col items-center justify-center p-6 border-2 border-dashed border-slate-300 rounded-xl hover:border-blue-500 hover:bg-blue-50 transition-all group dark:border-slate-600 dark:hover:border-blue-400 dark:hover:bg-slate-700">
                        <DownloadCloud className="mb-3 text-slate-400 group-hover:text-blue-600" size={32} />
                        <span className="text-sm font-medium text-slate-700 group-hover:text-blue-700 dark:text-slate-300">Export Database</span>
                        <span className="text-xs text-slate-500 mt-1">Download .sql file</span>
                      </button>

                      <button type="button" className="flex flex-col items-center justify-center p-6 border-2 border-dashed border-slate-300 rounded-xl hover:border-blue-500 hover:bg-blue-50 transition-all group dark:border-slate-600 dark:hover:border-blue-400 dark:hover:bg-slate-700">
                        <UploadCloud className="mb-3 text-slate-400 group-hover:text-blue-600" size={32} />
                        <span className="text-sm font-medium text-slate-700 group-hover:text-blue-700 dark:text-slate-300">Restore Database</span>
                        <span className="text-xs text-slate-500 mt-1">Upload .sql file</span>
                      </button>
                   </div>
                </div>
              </div>
            )}
            
            {/* CONTENT: Notifications Tab (Placeholder) */}
            {activeTab === "notifications" && (
              <div className="text-center py-10">
                <Bell className="mx-auto h-12 w-12 text-slate-300" />
                <h3 className="mt-2 text-sm font-medium text-slate-900 dark:text-white">No notifications yet</h3>
                <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">We will update this section in the next version.</p>
              </div>
            )}

            {/* FORM ACTIONS */}
            <div className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-700 flex justify-end">
              <button 
                type="submit" 
                disabled={isLoading}
                className="inline-flex items-center gap-2 px-6 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800 transition-colors disabled:opacity-70"
              >
                {isLoading ? (
                  <>Processing...</>
                ) : (
                  <>
                    <Save size={18} /> Save Changes
                  </>
                )}
              </button>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

// --- HELPER COMPONENT ---

function TabButton({ id, label, icon: Icon, activeTab, onClick }: any) {
  const isActive = activeTab === id;
  return (
    <button
      type="button"
      onClick={() => onClick(id)}
      className={`flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-lg transition-colors text-left ${
        isActive
          ? "bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400"
          : "text-slate-600 hover:bg-slate-50 dark:text-slate-400 dark:hover:bg-slate-700/50"
      }`}
    >
      <Icon size={18} className={isActive ? "text-blue-600" : "text-slate-400"} />
      {label}
    </button>
  );
}