# Campus Platform Monorepo

Welcome to the **Campus Platform**, a comprehensive academic management system powered by modern web technologies.

## Project Architecture

This project is a **Monorepo** managed by NPM Workspaces, consisting of a main web portal and several backend microservices.

### Apps (`/apps`)
1.  **Portal (`/apps/portal`)**
    *   **Tech**: SvelteKit 5, Tailwind CSS 4, Typescript.
    *   **Role**: The main frontend entry point for all users (Guests, Students, Lecturers, Admins).
    *   **Features**:
        *   **LMS** (`/lms`): Learning Management System (Classes, Chat).
        *   **SIAKAD** (`/siakad`): Academic Information System (Enrollment, Grades, Teaching).
        *   **Panel** (`/panel`): Admin Dashboard & User Management.
        *   **Landing Page** (`/`): Professional university company profile.

2.  **Services** (Backend)
    *   `academic-service`: Handles academic logic (classes, enrollments, attendance).
    *   `identity-service`: Handles authentication & user management.
    *   `learning-service`: Handles LMS logic (modules, quizzes, assignments).
    *   `admission-service`: Handles PMB/student admission registration.
    *   `public-service`: Handles public-facing data (landing page content).

### Packages (`/packages`)
*   **Shared Types (`@campus-platform/shared-types`)**:
    *   Contains TypeScript interfaces/types shared between Frontend and Backend to ensure type safety across the stack.

---

## Getting Started

### Prerequisites
*   **Node.js**: Minimum `v20.19.0` (Recommended `v22.x` LTS). Prisma and AWS SDK require specific Node engine compatibility.
*   NPM 10+
*   Docker (for infra)

### Installation

1.  **Install Dependencies**
    ```bash
    npm install
    ```
    This will install dependencies for all apps and packages in the workspace.

2.  **Build Packages**
    Before running the apps, you must build the shared packages:
    ```bash
    npm run build -w @campus-platform/shared-types
    ```

3.  **Run Development Server**
    You can run all services simultaneously or specific ones:
    ```bash
    # Run everything
    npm run dev

    # Run only Portal
    npm run dev -w portal
    ```

---

## Directory Structure

```graphql
campus-platform/
├── apps/
│   ├── portal/            # Main SvelteKit Frontend
│   ├── academic-service/  # Express Microservice
│   ├── identity-service/  # Express Microservice
│   ├── learning-service/  # Express Microservice
│   ├── admission-service/ # Express Microservice
│   └── public-service/    # Express Microservice
├── packages/
│   └── shared-types/    # Shared TypeScript Definitions
├── docs/                # Architecture & Boundaries documentation
├── infra/               # Docker Compose & Infra config
└── package.json         # Root workspace config
```
