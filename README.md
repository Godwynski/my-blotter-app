🛡️ Barangay Blotter & Case Management SystemA modern, secure, and efficient web application designed to digitize and manage barangay-level incident reports, resident records, and case workflows. This system replaces traditional paper logbooks with a searchable, auditable, and secure database, built for the specific needs of barangay staff and administrators.This project is built using Next.js, TypeScript, and Tailwind CSS.🔑 Key Features (by Role)This system is built around three distinct roles, each with a specific set of permissions.🔐 Admin Role (System Management)The Admin manages the system and its users, not the day-to-day cases.User Management: Create, edit, and deactivate accounts for Staff members.Role Assignment: Assign roles and permissions (e.g., promote a user to Staff).Password Resets: Securely reset passwords for Staff accounts.System Settings: Configure barangay information (name, address, logo) that appears on reports.Database Management: UI for backing up and restoring the system database (designed for SQL).Audit Log (Planned): A future module to view a complete log of all actions taken by all users for full accountability.🧑‍💼 Staff Role (Day-to-Day Operations)The main user of the system (e.g., Barangay Secretary, Desk Officer) who handles all incident reports.Dashboard: A "Home" screen with at-a-glance statistics (Total Cases, Pending, Resolved) and quick-access buttons.Blotter Management:Create New Blotter: A comprehensive form to file new incident reports, capturing complainant, respondent, and narrative details.Manage Blotters: A searchable, filterable master list of all cases. Filter by Case ID, Name, Status, or Date.Update Case Status: Change a case's status from Pending $\rightarrow$ Scheduled $\rightarrow$ Resolved / Dismissed.Resident Management:Residents Directory: A complete list of all registered barangay residents.Resident Profile: A detailed view of each resident, including their personal information and a complete Case History (all blotters they have been involved in).Document Generation (Planned): Automatically generate and print official documents like Summons, Certificates to File Action, and statistical reports.👩‍💻 Citizen / Resident Role (No Login)Residents do not have accounts. The system provides information and secure, one-time-use tools.Informational Landing Page: The login page also serves as a public guide explaining the 4-step physical process for filing a complaint.Secure Evidence Upload (Planned): A future feature allowing Staff to generate a unique link for a resident to upload evidence (photos, videos) for a specific case without needing an account.🎨 Screenshots (Placeholder)Add screenshots of your application here to showcase the UI.DashboardManage Blotter(Add Dashboard.png)(Add Manage-Blotter.png)New Blotter FormResident Profile(Add New-Blotter.png)(Add Resident-Profile.png)User Management (Admin)Settings(Add User-Management.png)(Add Settings.png)💻 Technology StackFramework: Next.js (v14+) (using App Router)Language: TypeScriptStyling: Tailwind CSSIcons: Lucide ReactBackend: (Not included) This frontend is designed to connect to any API, with a strong recommendation for a LAMP/XAMPP (PHP/MySQL) stack, given the backup/restore features.🚀 Getting StartedFollow these instructions to get a copy of the project up and running on your local machine for development.PrerequisitesNode.js (v18.x or later)npm or yarnA backend API server (e.g., XAMPP/LAMP with a PHP API) running locally. This project is frontend only and requires a backend to be functional.InstallationClone the repository:git clone [https://github.com/your-username/barangay-blotter-system.git](https://github.com/your-username/barangay-blotter-system.git)
cd barangay-blotter-system
Install dependencies:npm install
# or
yarn install
Set up Environment Variables:Create a file named .env.local in the root of the project and add the necessary environment variables. This file is ignored by Git.# .env.local

# URL for your local backend API (e.g., your XAMPP/PHP project)
NEXT_PUBLIC_API_URL="http://localhost:8080/api"

# A secret for NextAuth.js (even if not fully implemented, Next.js likes it)
NEXTAUTH_SECRET="REPLACE_WITH_A_SECURE_RANDOM_STRING"
Run the development server:npm run dev
# or
yarn dev
Open http://localhost:3000 with your browser to see the result.📁 Project Structure.
├── app/
│   ├── (public)/                 # Landing/Login page (app/page.tsx)
│   ├── dashboard/                # Main application (protected route)
│   │   ├── layout.tsx            # The Sidebar/Navbar layout
│   │   ├── page.tsx              # Dashboard home
│   │   ├── admin/
│   │   │   └── users/            # User Management
│   │   ├── blotter/
│   │   │   ├── page.tsx          # Manage Blotter list
│   │   │   └── new/              # New Blotter form
│   │   ├── residents/
│   │   │   ├── page.tsx          # Residents list
│   │   │   └── [id]/             # Resident Profile page
│   │   └── settings/             # Settings page
│   └── globals.css               # Global styles (Tailwind)
├── components/                   # (Optional: for shared components)
├── public/                       # Static assets (images, logos)
├── .env.local                    # (See Installation)
├── next.config.mjs               # Next.js configuration
├── package.json
└── README.md                     # This file
🗺️ Future RoadmapThis project is a strong foundation. The following features are planned for future versions:[ ] Full Backend Integration: Connect all forms and tables to a live PHP/MySQL database.[ ] Authentication: Implement a secure login/logout flow for Admin and Staff roles.[ ] Audit Log Module: Build the UI and backend for tracking all user actions.[ ] Secure Evidence Upload: Create the "Magic Link" generation system for residents.[Automated Document Printing:[ ] Generate printable Summons for scheduled hearings.[ ] Generate printable Certificates to File Action (CFA).[ ] Generate statistical reports (e.g., monthly incident summaries).⚖️ LicenseThis project is licensed under the MIT License - see the LICENSE file for details.