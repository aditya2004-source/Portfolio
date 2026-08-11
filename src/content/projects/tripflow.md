---
title: TripFlow
tagline: An AI-first travel planning app that turns a one-line trip description into a full itinerary and budget
status: featured
order: 2

problem: >
  Planning a trip usually means juggling long multi-step forms and manually researching
  destinations, itineraries, and budgets across a handful of different tools.
objective: >
  Let a user describe a trip in a single sentence and have the AI generate a destination (if
  unspecified), dates, and a budget, then produce a full day-by-day itinerary automatically —
  and support what happens after planning: expenses, collaborators, documents, and memories.
requirements:
  - One-turn AI trip creation from a natural-language prompt
  - Day-by-day itinerary generation with a live visual summary
  - Category-based budget breakdown and expense tracking
  - Multi-user trip collaboration with owner/editor/viewer roles
  - A persistent AI travel assistant for follow-up questions during planning
  - Document and memory attachments per trip
  - A dashboard with a map view of trip destinations
solution: >
  A single Next.js 15 (App Router) application backed by Prisma and PostgreSQL, with NextAuth
  for authentication and Google Gemini driving a function-calling AI loop that generates the
  itinerary and budget in one pass, plus a persistent chat assistant for follow-up questions.
features:
  - AI trip creation with a live visual itinerary and budget summary card
  - Persistent AI travel assistant with streamed, tool-calling responses
  - Day-by-day itinerary planner
  - Budget and expense tracking by category
  - Trip collaborators with owner / editor / viewer permissions
  - Document and memory attachments per trip
  - Dashboard with a map of trip destinations
  - Light/dark theme and one-click demo login
tech:
  - Next.js 15
  - React 19
  - TypeScript
  - Tailwind CSS
  - Prisma
  - PostgreSQL
  - NextAuth
  - Google Gemini API
  - MapLibre GL
  - Recharts
  - Radix UI
architecture: >
  A single Next.js App Router application: server actions handle data mutations, a
  Prisma-backed PostgreSQL schema (21 models spanning trips, itineraries, chat, budgets,
  documents, and collaborators) stores everything, and a Gemini-powered tool-calling loop
  generates itineraries and answers assistant questions.
results: >
  A feature-complete build spanning trip creation, itinerary planning, budgeting,
  collaboration, and a document/memory system, with 8 Prisma migrations tracking the
  evolving data model. Not yet deployed to production.
contribution: >
  Designed the product concept and data model, and built the full application solo — the
  itinerary and budget AI-generation flow, the trip collaboration and permissions system, and
  the dashboard.

screenshots:
  - src: /images/projects/tripflow/landing.jpg
    caption: Landing page — describe your trip in plain language and TripFlow plans it
  - src: /images/projects/tripflow/dashboard.jpg
    caption: Trip dashboard with a live destinations map
  - src: /images/projects/tripflow/itinerary.jpg
    caption: AI-generated day-by-day itinerary planner
  - src: /images/projects/tripflow/budget.jpg
    caption: AI-estimated category budget breakdown
  - src: /images/projects/tripflow/ai-assistant.jpg
    caption: Conversational AI assistant creating a trip, with a live budget summary

github: https://github.com/aditya2004-source/tripflow
---
