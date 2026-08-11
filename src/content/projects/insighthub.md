---
title: InsightHub
tagline: AI business intelligence platform that turns raw spreadsheets into clean data, KPIs, and plain-English answers
status: featured
order: 1

problem: >
  Business teams accumulate messy spreadsheets and data files with no easy way to turn them
  into clean, structured insight without pulling in a data analyst.
objective: >
  Let a non-technical business user upload a file and get automatic data cleaning, an
  auto-generated KPI dashboard, and the ability to ask questions about their data in plain
  English.
requirements:
  - Upload a spreadsheet or document (Excel, CSV, PDF, Word, JSON) and have it auto-cleaned
  - Auto-generate a KPI dashboard with charts, no manual configuration
  - Let the user ask questions about their data in natural language and get an answer back
  - Support a free/local mode with no API key, and a real LLM-backed mode
  - Secure, authenticated multi-user access
solution: >
  A FastAPI backend paired with a React/Vite frontend. Uploaded files run through a
  pandas-based cleaning pipeline, then get profiled into heuristic KPIs and charts by
  default. When an OpenAI-compatible API key is configured, a multi-agent analytics engine
  — including a dedicated schema and relationship agent — takes over for richer, LLM-driven
  analysis and conversational Q&A over the data.
features:
  - Multi-format upload (Excel, CSV, PDF, Word, JSON)
  - Automatic data-cleaning pipeline (header detection, type inference, deduplication)
  - Auto-generated KPI dashboards with charts
  - Conversational "ask your data" analytics powered by an LLM function-calling engine
  - Swappable AI engine — a zero-cost rule-based mode by default, or a real OpenAI/Groq-backed mode
  - JWT authentication with rotating refresh tokens
  - Cross-file schema and relationship detection
tech:
  - FastAPI
  - PostgreSQL
  - SQLAlchemy
  - Pandas
  - PyArrow
  - React
  - TypeScript
  - Vite
  - Tailwind CSS
  - TanStack Query
  - Recharts
  - OpenAI API
architecture: >
  The React/Vite frontend talks to a FastAPI backend over a REST API. Uploaded files are
  parsed with pandas, stored as Parquet, and profiled into KPIs; PostgreSQL holds structured
  metadata via SQLAlchemy migrations. The AI layer is pluggable — a deterministic mock engine
  by default, or an OpenAI-compatible LLM engine (including Groq) for real analysis.
results: >
  A working local prototype backed by 123 passing automated tests, validated end-to-end with
  a real LLM provider during development — including two genuine data-cleaning bugs found and
  fixed through live testing. Not yet deployed to production.
contribution: >
  Designed and built the full stack solo: the FastAPI backend, the data-cleaning and
  KPI-generation pipeline, the multi-agent schema/relationship analysis layer, and the React
  frontend.

screenshots:
  - src: /images/projects/insighthub/login.png
    caption: Login and sign-up
  - src: /images/projects/insighthub/upload.png
    caption: Data Analysis Workspace — file uploaded and ready for analysis
  - src: /images/projects/insighthub/dashboard.png
    caption: Auto-generated dashboard with a computed KPI chart
  - src: /images/projects/insighthub/qa.png
    caption: Ask AI — conversational Q&A over the uploaded data

github: https://github.com/aditya2004-source/insighthub
---
