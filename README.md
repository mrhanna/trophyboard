# TrophyBoard

A gamified student management platform.

Drawing inspiration from a decade of experience of teaching saxophone to grade school students through a private lessons center, I am hoping to solve several recurring problems:

- **Scheduling** - provide a single source of truth for schedules that is accessible to staff, students, and parents. Flexible enough to allow teachers to make changes as needed; rigid enough to prevent double-bookings.
- **Attendance and Billing** - eliminate redundancy in reporting attendance, crediting students for teacher absences, etc.
- **Communication** - one safe medium of communication between teachers and students, fully transparent to parents and admins.
- **Student Motivation** - dangle a carrot to students in the form of XP gains, customizable achievements, or Fortnite-style quests.

This is intended to be a better and more fully-featured remake of a similar project that I wrote around 2022 called 'LessonLog' using Symfony/PHP.

## Roadmap

## Development

```bash

# setup containers
docker compose up --build -d

# for dependency management, run npm commands in context of container
docker compose exec api bash

# npm i
# npm run dev   # and so on
```
