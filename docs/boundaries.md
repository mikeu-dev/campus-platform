# Domain Boundaries & Route Structure

This document defines the separation of concerns within the application, specifically reflected in the **Route Structure** of the Portal.

## Route Territories

We moved away from a monolithic `/dashboard` to distinct functional territories to improve maintainability and user context switching.

### 1. Guest Territory (`src/routes/(guest)`)
**Target Audience**: Public, Prospective Students.
*   **Landing Page**: Professional company profile.
*   **Auth**: Login pages separated by context (Admin, SIAKAD, LMS) to direct users to the right dashboard immediately.

### 2. LMS Territory (`src/routes/lms`)
**Target Audience**: Students, Lecturers.
**Focus**: Teaching & Learning Activities.
*   `/lms/classes`: My Active Classes.
*   `/lms/classes/[id]`: Class Detail (Materials, Assignments, Discussions).
*   `/lms/chat`: Direct Messaging.

### 3. SIAKAD Territory (`src/routes/siakad`)
**Target Audience**: Students, Academic Staff.
**Focus**: Academic Administration.
*   `/siakad/enrollment`: IRS / KRS (Course Selection).
*   `/siakad/grades`: KHS / Transcripts.
*   `/siakad/calendar`: Academic Calendar.
*   `/siakad/teaching`: Lecturer Teaching Schedule.

### 4. Panel Territory (`src/routes/panel`)
**Target Audience**: Admin, Staff, General Student Dashboard.
**Focus**: Management & Overview.
*   `/panel`: Main Dashboard Overview.
*   `/panel/users`: User Management (CRUD).
*   `/panel/courses`: Master Course Data.
*   `/panel/classes`: Master Class Scheduling.
