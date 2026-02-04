# System Architecture

## Overview
The Campus Platform uses a **Microservices-based** architecture with a unified **Frontend Monolith** (Portal) for the user interface.

## Components

### 1. Frontend Portal (`apps/portal`)
A **SvelteKit** application that serves as the single pane of glass for all user interactions. It is divided into distinct route groups:
*   **Public/Guest**: Landing page, Authentication.
*   **LMS Territory**: Dedicated area for learning activities.
*   **SIAKAD Territory**: Dedicated area for academic administration.
*   **Panel Territory**: Administrative control panel.

### 2. Shared Library (`packages/shared-types`)
Errors in communication between Client and Server are minimized by sharing TypeScript types.
*   **Source**: `packages/shared-types/src/index.ts`
*   **Usage**: Imported by `portal` and services to ensure `ApiResponse`, `User`, and `Course` data structures match exactly.

### 3. Backend Services
*   **Identity Service**: JWT Authentication, Role-based Access Control (RBAC).
*   **Academic Service**: Course management, Enrollment logic, Grading.
*   **Learning Service**: Class streams, Assignments, Real-time chat.

## Data Flow
1.  User interacts with **Portal**.
2.  **Portal** Server Load functions (`+page.server.ts`) make HTTP requests to Backend Services.
3.  Backend services process requests and return JSON.
4.  **Portal** receives typed JSON (validated via `shared-types`) and renders HTML.
