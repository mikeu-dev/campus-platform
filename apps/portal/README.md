# Portal

This is the main Frontend application for the Campus Platform, built with **SvelteKit 5** and **Tailwind CSS 4**.

## Structure

The application is structured into four main functional territories:

1.  **Guest Territory** (`src/routes/(guest)`):
    *   **Landing Page**: Professional university profile.
    *   **Auth**: Login pages for different user roles.

2.  **LMS Territory** (`src/routes/lms`):
    *   Learning Management System features (Classes, Assignments, Chat).

3.  **SIAKAD Territory** (`src/routes/siakad`):
    *   Academic Information System (Enrollment, Grades, Schedule).

4.  **Panel Territory** (`src/routes/panel`):
    *   Administrative dashboard and User Management.

## Development

### Prerequisites
Ensure you have installed dependencies from the root monorepo:
```bash
npm install
```

And built the shared packages:
```bash
npm run build -w @campus-platform/shared-types
```

### Running Locally
To start the Portal dev server:
```bash
npm run dev -w portal
```

## Shared Types
This app uses `@campus-platform/shared-types` for type safety between frontend and backend.
If you update types in `packages/shared-types`, remember to rebuild them before the changes are reflected here.
