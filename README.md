# TrophyBoard

A gamified student management platform.

Drawing inspiration from a decade of experience of teaching saxophone to grade school students through a private lessons center, I am hoping to solve several recurring problems:

- **Scheduling** - provide a single source of truth for schedules that is accessible to staff, students, and parents. Flexible enough to allow teachers to make changes as needed; rigid enough to prevent double-bookings.
- **Attendance and Billing** - eliminate redundancy in reporting attendance, crediting students for teacher absences, etc.
- **Communication** - one safe medium of communication between teachers and students, fully transparent to parents and admins.
- **Student Motivation** - dangle a carrot to students in the form of XP gains, customizable achievements, or Fortnite-style quests.

This is intended to be a better and more fully-featured remake of a similar project that I wrote around 2022 called 'LessonLog' using Symfony/PHP.

## Architectural Notes

This repository provides the backend API for a future Next.js web frontend and mobile application. The current stack includes **Express**, **PostgreSQL**, and **Prisma**.

The architecture follows a **modular monolith approach**. Each module is designed to be **self-contained**, **independently testable**, and optionally **pluggable** into the core system. Modules define their own models, services, controllers, and routes, and communicate via a **centralized event bus**, emitting and handling events according to their own responsibilities.

This modular structure enables greater configurability on a per-tenant basis. For example, a tenant might enable scheduling, billing, neither, or both. These modules are designed to operate independently but can interoperate when enabled together, allowing, for instance, scheduling events to trigger billing actions, and vice versa.

## Development

```bash

# setup containers
docker compose up --build -d

# for dependency management, run npm commands in context of container
docker compose exec api bash

# npm i
# npm run dev   # and so on
```
