# 🏛️ Barangay Blotter & Case Management System

![Project Banner](https://via.placeholder.com/1200x400?text=Barangay+Blotter+System)

> A modern, secure, and digital solution for managing barangay incident reports, resident profiles, and dispute resolutions.

![Next.js](https://img.shields.io/badge/Next.js-14-black) ![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue) ![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-3.0-38bdf8) ![Status](https://img.shields.io/badge/Status-In%20Development-yellow)

## 📖 Overview

The **Barangay Blotter System** is a web application designed to digitize the manual process of recording and managing incidents (blotters) within a barangay. It replaces physical logbooks with a secure database, allowing authorized staff to track case statuses, manage hearing schedules, and generate official reports efficiently.

Unlike traditional systems, this app features a **Secure Evidence Portal**, allowing citizens to upload digital evidence (photos/videos) via a secure link without needing to create an account.

## ✨ Key Features

### 👮 For Admin & Staff
* **Dashboard Analytics:** Real-time view of total cases, pending disputes, and resolution rates.
* **Digital Blotter Entry:** Comprehensive intake form for Complainant, Respondent, and Incident details.
* **Case Management:** Track status lifecycle (`Pending` → `Scheduled` → `Resolved` / `Dismissed`).
* **Resident Directory:** Detailed profiles linking residents to their case history and Purok location.
* **Document Generation:** (Planned) Auto-generate Summons and Certificates to File Action.
* **Role-Based Access:** Strict separation between System Admins and Desk Officers.

### 🏙️ For Citizens (No Login Required)
* **Public Information Portal:** Guides on how to file complaints and the specialized justice process.
* **Secure Evidence Upload:** A specialized portal accessed via a "Magic Link" sent by staff, allowing residents to upload evidence directly to their case file securely.

## 🛠️ Tech Stack

* **Framework:** [Next.js 14](https://nextjs.org/) (App Router)
* **Language:** [TypeScript](https://www.typescriptlang.org/)
* **Styling:** [Tailwind CSS](https://tailwindcss.com/)
* **Icons:** [Lucide React](https://lucide.dev/)
* **State Management:** React Hooks (`useState`, `useEffect`)
* **Backend:** *[Insert your backend here, e.g., Supabase / MySQL via XAMPP]*

## 📸 Screenshots

| **Login Portal** | **Dashboard Overview** |
|:---:|:---:|
| ![Login Page](./public/screenshots/login.png) | ![Dashboard](./public/screenshots/dashboard.png) |

| **Manage Blotter** | **New Case Entry** |
|:---:|:---:|
| ![Manage Blotter](./public/screenshots/manage-blotter.png) | ![New Blotter](./public/screenshots/new-blotter.png) |

*(Note: Replace these image paths with your actual screenshots)*

## 🚀 Getting Started

Follow these steps to run the project locally.

### Prerequisites
* Node.js (v18 or higher)
* npm or yarn
* Git

### Installation

1.  **Clone the repository**
    ```bash
    git clone [https://github.com/yourusername/barangay-blotter-system.git](https://github.com/yourusername/barangay-blotter-system.git)
    cd barangay-blotter-system
    ```

2.  **Install dependencies**
    ```bash
    npm install
    # or
    yarn install
    ```

3.  **Set up Environment Variables**
    Create a `.env.local` file in the root directory (refer to `.env.example` if available).

4.  **Run the development server**
    ```bash
    npm run dev
    ```

5.  Open [http://localhost:3000](http://localhost:3000) with your browser.

## 📂 Project Structure

```bash
├── app/
│   ├── dashboard/          # Protected Admin/Staff Routes
│   │   ├── admin/          # User Management
│   │   ├── blotter/        # Case Management (List & Create)
│   │   ├── residents/      # Resident Directory & Profiles
│   │   └── settings/       # System Configuration
│   ├── page.tsx            # Landing Page & Login Portal
│   └── layout.tsx          # Root Layout
├── components/             # Reusable UI Components
│   └── AdminSidebar.tsx    # Main Navigation
├── public/                 # Static Assets & Screenshots
└── README.md               # Documentation
