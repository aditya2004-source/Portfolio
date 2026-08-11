---
title: StockHawks
tagline: An AI copilot that lets field teams query operational data in plain language, built on the Sarathi field-ops platform
status: featured
order: 3

problem: >
  Field managers using the Sarathi field-tracking platform had to navigate multiple modules
  and filters to answer simple operational questions, such as which customers hadn't been
  visited recently.
objective: >
  Prototype a read-only AI assistant that lets a field user or manager ask a question in
  plain language — including mixed Hindi/English — and instantly get the right, filtered
  answer back, without touching the production system.
requirements:
  - Natural-language querying over Customers, Visits, Attendance, Travel Expenses, and Reports data
  - Support for mixed Hindi/English (Hinglish) queries
  - Strictly read-only, advisory-only responses — no ability to edit, delete, or approve anything
  - A safe, non-production demo environment with fictional seed data
  - A free/offline demo mode that doesn't require API credit
solution: >
  A Node/Express backend on PostgreSQL, with the Anthropic Claude API translating
  natural-language questions into safe, filtered answers over a fictional dataset modeled
  closely on Sarathi's real modules, and a React frontend with a floating AI Copilot chat
  widget available on every screen.
features:
  - Plain-language query interface, in English and Hinglish
  - Read-only, advisory-only AI layer over Customers, Visits, Attendance, Travel Expenses, and Reports data
  - Five fully functional modules, each with real working filters ("the manual way")
  - A built-in "Manual Way vs. AI Way" comparison, and a "Manager vs. Field User" response comparison
  - Floating AI Copilot widget, auto-closes after inactivity
  - A free, offline mock AI mode alongside the live Claude-powered mode, for demoing without API cost
tech:
  - Node.js
  - Express
  - PostgreSQL
  - Anthropic Claude API
  - React
  - Vite
architecture: >
  An Express API on PostgreSQL exposes Sarathi's core modules (Customers, Visits, Attendance,
  Travel Expenses, Reports) as a fictional demo dataset regenerated with ~6 months of data.
  Incoming natural-language questions go to the Claude API, scoped to read-only, advisory
  responses; a keyword-based mock mode stands in when no API key is configured. The React/Vite
  frontend renders both the standard module screens and the AI Copilot chat panel.
results: >
  A working internal demo showing what an AI layer over Sarathi's real feature set would feel
  like for a field user, including a direct side-by-side comparison of the manual workflow
  versus the AI-assisted one. This is an internal, non-production demo with fictional data,
  not the shipped Sarathi product.
contribution: >
  Built the demo end-to-end: the Express/PostgreSQL backend, the Claude-based
  natural-language query layer (with an offline mock fallback), the five module screens, and
  the React AI Copilot widget — a prototype for a product idea informed by day-to-day
  Business Analyst work on Sarathi.

screenshots:
  - src: /images/projects/stockhawks/dashboard.jpg
    caption: Main dashboard — attendance, visits, and expenses at a glance
  - src: /images/projects/stockhawks/module-customers.jpg
    caption: Customers module with real, working filters
  - src: /images/projects/stockhawks/ai-copilot.jpg
    caption: Floating AI Copilot answering a plain-language query
  - src: /images/projects/stockhawks/manual-vs-ai.jpg
    caption: Built-in "Manual Way vs. AI Way" comparison

github: https://github.com/aditya2004-source/stockhawks
---
