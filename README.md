# VideoCall.io

<div align="center">

A modern, secure, and feature-rich video conferencing application built with Next.js 15. VideoCall.io allows users to seamlessly create, join, and schedule video meetings with real-time audio and video capabilities.

[![Next.js](https://img.shields.io/badge/Next.js-15-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-38B2AC?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](https://opensource.org/licenses/MIT)

[Live Demo](https://video-call-io.vercel.app/) 

</div>

---

## 📋 Table of Contents

- [Overview](#-overview)
- [Tech Stack](#-tech-stack)
- [Key Features](#-key-features)
- [Getting Started](#-getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Environment Variables](#environment-variables)
  - [Run Locally](#run-locally)
- [Project Structure](#-project-structure)
- [Usage](#-usage)
- [Contributing](#-contributing)
- [License](#-license)
- [Acknowledgments](#-acknowledgments)
- [Contact](#-contact)

---

## 🌟 Overview

VideoCall.io is a comprehensive video conferencing solution that brings people together through secure, high-quality video calls. Whether you're hosting a quick team sync, scheduling a client meeting, or running a large webinar, VideoCall.io provides all the tools you need for seamless communication.

---

## 🚀 Tech Stack

- **Framework:** [Next.js 15](https://nextjs.org/) with App Router
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Authentication:** [Clerk](https://clerk.com/)
- **Video & Audio SDK:** [Stream Video React SDK](https://getstream.io/video/docs/react/)
- **UI Components:** [Shadcn/ui](https://ui.shadcn.com/) (Radix UI primitives)
- **Icons:** [Lucide React](https://lucide.dev/)

---

## ✨ Key Features

- 🔐 **Authentication & Authorization**: Secure sign-in and sign-up using Clerk (supports Google, GitHub, and Email)
- ⚡ **Instant Meetings**: Create a meeting and start a video call instantly with one click
- 📅 **Schedule Meetings**: Plan meetings for the future with intuitive date and time selection
- 🔗 **Join via Link**: Seamlessly join meetings using a shared invitation link or meeting ID
- 🏠 **Personal Meeting Room**: A dedicated permanent meeting link for each user
- 📹 **Meeting Recordings**: Record meetings and access them later (powered by Stream)
- 🎛️ **Meeting Controls**: Full control over audio/video, screen sharing, and participant management
- 📱 **Responsive Design**: Fully optimized for desktop, tablet, and mobile devices
- 👥 **Participant Management**: View, manage, and control participant permissions
- 🔊 **Real-time Audio & Video**: High-quality, low-latency communication
- 🖥️ **Screen Sharing**: Share your screen with all participants
- 💬 **In-meeting Chat**: (Optional feature if implemented)

---

## 🛠️ Getting Started

Follow these steps to set up the project locally on your machine.

### Prerequisites

Make sure you have the following installed on your system:

- [Node.js](https://nodejs.org/) (v18 or higher)
- npm, yarn, pnpm, or bun package manager
- [Git](https://git-scm.com/)

### Installation

#### 1. Clone the Repository

```bash
git clone https://github.com/aniketghosh2003/VideoCall.io.git
cd VideoCall.io/videocall_io
```

#### 2. Install Dependencies

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

### Environment Variables

#### 3. Configure Environment Variables

Create a `.env.local` file in the root directory (`videocall_io/`) and add the following environment variables:

```env
# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key

# Clerk URLs
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up

# Stream Video SDK
NEXT_PUBLIC_STREAM_API_KEY=your_stream_api_key
STREAM_SECRET_KEY=your_stream_secret_key

# App Base URL
NEXT_PUBLIC_BASE_URL=http://localhost:3000
```

**Where to get your credentials:**

- **Clerk**: Sign up at [clerk.com](https://clerk.com/) and create a new application to get your keys
- **Stream**: Sign up at [getstream.io](https://getstream.io/) and create a new video app to get your API keys

### Run Locally

#### 4. Start the Development Server

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application running.

#### 5. Build for Production

```bash
npm run build
npm start
```

---

## 📂 Project Structure

```
videocall_io/
├── app/
│   ├── (auth)/              # Authentication routes
│   │   ├── sign-in/         # Sign-in page
│   │   └── sign-up/         # Sign-up page
│   ├── (root)/              # Main application routes
│   │   ├── (home)/          # Dashboard pages
│   │   │   ├── page.tsx     # Home/Dashboard
│   │   │   ├── upcoming/    # Upcoming meetings
│   │   │   ├── previous/    # Previous meetings
│   │   │   ├── recordings/  # Meeting recordings
│   │   │   └── personal-room/ # Personal meeting room
│   │   └── meeting/[id]/    # Individual meeting room
│   ├── layout.tsx           # Root layout with providers
│   └── globals.css          # Global styles
├── components/              # Reusable UI components
│   ├── ui/                  # Shadcn UI primitives
│   ├── MeetingModal.tsx     # Modal for creating/joining meetings
│   ├── MeetingRoom.tsx      # Video call interface
│   ├── MeetingCard.tsx      # Meeting list card component
│   ├── Navbar.tsx           # Navigation bar
│   ├── Sidebar.tsx          # Sidebar navigation
│   └── ...                  # Other components
├── constants/               # Static data and configuration
│   └── index.ts             # Nav links, avatars, etc.
├── hooks/                   # Custom React hooks
│   ├── useGetCalls.ts       # Hook to fetch user's calls
│   └── useGetCallById.ts    # Hook to fetch specific call
├── actions/                 # Server actions
│   └── stream.actions.ts    # Stream token generation
├── providers/               # Context providers
│   └── StreamClientProvider.tsx # Stream Video provider
├── lib/                     # Utility functions
│   └── utils.ts             # Helper functions
├── public/                  # Static assets
│   ├── icons/               # Icon files
│   └── images/              # Image files
├── .env.local               # Environment variables (not in repo)
├── next.config.js           # Next.js configuration
├── tailwind.config.ts       # Tailwind CSS configuration
├── tsconfig.json            # TypeScript configuration
└── package.json             # Project dependencies
```

---

## 💡 Usage

### Creating an Instant Meeting

1. Sign in to your account
2. Click on "New Meeting" from the dashboard
3. Choose "Start an Instant Meeting"
4. Share the meeting link with participants

### Scheduling a Meeting

1. Navigate to "Schedule Meeting" from the home page
2. Set the meeting date, time, and description
3. Copy the meeting link and share it with invitees
4. The meeting will appear in your "Upcoming" tab

### Joining a Meeting

1. Click on a meeting link or enter a meeting ID
2. Allow camera and microphone permissions
3. Click "Join Meeting" to enter the call

### Personal Meeting Room

- Each user has a unique, permanent meeting room
- Access it anytime from the "Personal Room" page
- Share your personal room link for recurring meetings

---

## 🤝 Contributing

Contributions are welcome and greatly appreciated! Here's how you can contribute:

1. **Fork the Repository**
   ```bash
   git clone https://github.com/your-username/VideoCall.io.git
   ```

2. **Create a Feature Branch**
   ```bash
   git checkout -b feature/AmazingFeature
   ```

3. **Commit Your Changes**
   ```bash
   git commit -m 'Add some AmazingFeature'
   ```

4. **Push to the Branch**
   ```bash
   git push origin feature/AmazingFeature
   ```

5. **Open a Pull Request**

Please make sure to update tests as appropriate and follow the existing code style.

---

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

Special thanks to the following:

- **[JavaScript Mastery](https://www.youtube.com/@javascriptmastery)** - Huge thanks to the JavaScript Mastery YouTube channel for the inspiration and guidance for this project. Their comprehensive tutorials on modern web development were instrumental in bringing VideoCall.io to life. Check out their amazing content for more projects like this!

- **[Clerk](https://clerk.com/)** - For providing seamless authentication
- **[Stream](https://getstream.io/)** - For the powerful video SDK
- **[Vercel](https://vercel.com/)** - For Next.js and hosting solutions
- **[Shadcn](https://ui.shadcn.com/)** - For beautiful UI components

---

## 📧 Contact

**Aniket Ghosh**

- GitHub: [@aniketghosh2003](https://github.com/aniketghosh2003)
- LinkedIn: [@aniket-ghosh2003](https://www.linkedin.com/in/aniket-ghosh2003/)
- Email: ghoshaniket00000@gmail.com

**Project Link:** [https://github.com/aniketghosh2003/VideoCall.io](https://github.com/aniketghosh2003/VideoCall.io)

---

<div align="center">

### ⭐ Don't forget to star this repo if you found it helpful!

Made with ❤️ by [Aniket Ghosh](https://github.com/aniketghosh2003)

</div>
