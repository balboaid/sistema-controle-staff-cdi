# Staff Management System

A web-based Staff Management System developed to centralize employee registration, operational management, partner information, event records, and administrative data through an integrated dashboard.

## Overview

The application provides a structured environment for managing staff information and operational activities, featuring secure authentication, organized registration workflows, and a modular interface.

## Features

- **Dashboard:** Centralized interface for accessing system modules.
- **Staff Registration:** Comprehensive employee registration with personal, professional, contact, and banking information.
- **Operational Management:** Organized access to staff-related operational records.
- **Partner Management:** Partner information organization and management.
- **Event Management:** Event records and administrative organization.
- **Data Cross-Referencing:** Dedicated module for accessing and correlating operational information.
- **User Profiles:** Individual user profile management.
- **Authentication:** Credential-based authentication and protected application routes.
- **Form Validation:** Structured input validation and error handling.
- **Responsive Interface:** Modular user interface designed with reusable components.

## Technology Stack

| Technology | Purpose |
|---|---|
| Next.js | Application framework |
| React.js | User interface |
| TypeScript | Static typing |
| Tailwind CSS | Styling and responsive layouts |
| NextAuth.js | Authentication and session management |
| React Hook Form | Form state management |
| Zod | Schema validation |
| @hookform/resolvers | Form validation integration |
| Node.js | JavaScript runtime |
| bcrypt | Password hashing library |

## Architecture

The application follows a modular architecture, separating pages, reusable UI components, authentication logic, form validation, and data models.

Main project structure:

```text
├── app/
│   ├── login/
│   ├── operacional/
│   ├── parceiros/
│   ├── eventos/
│   ├── cruzamentos/
│   ├── perfil/
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── Sidebar.tsx
│   ├── AppShell.tsx
│   └── Navbar.tsx
├── pages/
│   └── api/
│       └── auth/
│           └── [...nextauth].ts
├── models/
├── hooks/
├── styles/
└── package.json
```

## Installation

Clone the repository:

```bash
git clone YOUR_REPOSITORY_URL
```

Navigate to the project directory:

```bash
cd YOUR_PROJECT_DIRECTORY
```

Install dependencies:

```bash
npm install
```

Configure the required environment variables in `.env.local`.

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deployment

The application supports deployment through Vercel, with environment variables configured in the deployment environment.

## Development

Built with a focus on modularity, maintainability, type safety, structured data management, and reusable frontend components.




This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
