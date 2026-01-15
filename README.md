Frontend Assignment – Multi-Tenant Sales Dashboard

Objective
This project is a frontend-only implementation of a multi-tenant sales dashboard.
The focus is on application structure, modularity, tenant handling, role-based access,
and frontend optimization awareness.

Tech Stack
- React (Vite)
- JavaScript
- Context API for state management
- Mock data (no backend)

Scope
The application simulates a SaaS platform used by multiple organizations (tenants).
Each tenant has users with specific roles. All data and permissions are handled
on the frontend using mocked authentication.

Tenancy and Authentication
- Tenants: Organization A, Organization B
- Roles: Admin, Agent
- A user belongs to one tenant at a time
- Switching tenants dynamically updates visible data
- Authentication is mocked using React Context

Core Functional Modules

Leads Module
- Displays leads with name, phone number, and status
- Data is tenant-specific
- Admin users can access edit functionality (UI-level)
- Agent users have view-only access

Call Logs Module
- Displays call logs with lead name, date/time, duration, and outcome
- Data is tenant-specific
- Empty states are handled gracefully

Role-Based Access Control
- Admin:
  - Full access within the tenant
  - Can edit lead status
- Agent:
  - View-only access
  - No editing permissions

Application Structure
The codebase follows a modular and scalable structure:
- Context, Provider, and custom hooks are separated
- Functional modules (Leads, Call Logs) are reusable across tenants
- Clear separation of concerns improves maintainability

Frontend Optimization (Awareness)
- Context API is used to avoid prop drilling
- Modular components reduce unnecessary re-renders
- Code splitting and lazy loading can be implemented using React.lazy()
- State is scoped efficiently for better performance

UI
- Functional and clean user interface
- Clear indication of selected tenant and role
- Centered, professional dashboard-style layout
- Loading and empty states are handled appropriately

Conclusion
This project demonstrates core frontend fundamentals including multi-tenancy handling,
role-based access control, clean architecture, and optimization awareness,
without relying on a backend.
