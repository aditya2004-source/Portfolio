---
title: LeadForge
tagline: A multi-tenant AI lead-discovery platform — give it a product, it finds candidate customers for you
status: featured
order: 4

problem: >
  Sales and growth teams need a steady pipeline of qualified leads, but manually researching
  who might actually want to buy a given product is slow and inconsistent.
objective: >
  Given just a product name and website, automatically understand what it does, then search
  the public web for real candidate companies that could be customers, and return
  structured, sourced lead data for a human to review — no automated outreach.
requirements:
  - Understand a business from its own website (Business Intelligence agent)
  - Understand a specific product from its name and URL (Product Intelligence agent)
  - Search the public web for candidate customer companies (Lead Discovery agent)
  - Multi-tenant SaaS with organizations, auth, and per-org data isolation
  - Stay usable without a paid AI or search API
solution: >
  A TypeScript monorepo (Next.js, Prisma on PostgreSQL with pgvector) orchestrating a
  pipeline of AI agents over Inngest for durable background workflows. A self-hosted, free
  SearXNG instance powers web search so lead discovery doesn't depend on a paid search API,
  and AI calls run through a provider-abstraction layer supporting Claude + Voyage or a
  free-tier Gemini fallback.
features:
  - Org onboarding with an AI-generated, editable business profile
  - Product intake with an AI-generated, editable product profile
  - Automated web search for candidate customer companies, deduplicated
  - Durable background workflows via Inngest that survive retries and restarts
  - Row-level-security-enforced multi-tenancy in Postgres
  - Swappable AI provider — Claude/Voyage, or a free Gemini fallback to keep it usable without a paid key
  - Backend agents for deeper lead research and AI qualification scoring exist, not yet wired into the UI
tech:
  - Next.js
  - TypeScript
  - PostgreSQL
  - Prisma
  - pgvector
  - Auth.js
  - Inngest
  - Claude API
  - Voyage AI
  - Gemini API
  - SearXNG
architecture: >
  A pnpm/Turborepo monorepo: apps/web (Next.js UI, API routes, Inngest functions) calls into
  workspace packages — packages/agents (the AI agent implementations), packages/ai-core (the
  Claude/Voyage/Gemini provider abstraction), packages/database (Prisma schema with
  row-level security), packages/orchestrator (Inngest workflow wiring), and packages/auth
  (Auth.js/RBAC). SearXNG runs self-hosted in Docker for free, keyless web search.
results: >
  A working local build with real, functioning agents for business understanding, product
  understanding, and lead discovery, running on multi-tenant infrastructure with row-level
  security. Not yet deployed to production, and the lead-research and qualification-scoring
  agents exist in code but aren't yet exposed in the UI.
contribution: >
  Designed the multi-tenant data model and agent pipeline, and built the monorepo end-to-end
  solo — the Next.js app, the Prisma schema with row-level security, the Inngest-based
  background workflows, and the agent implementations, including a dual AI-provider
  abstraction to keep the project usable without a paid API key.

screenshots:
  - src: /images/projects/leadforge/landing.jpg
    caption: Landing page
  - src: /images/projects/leadforge/business-profile.jpg
    caption: AI-generated business profile from the Business Intelligence agent
  - src: /images/projects/leadforge/product-profile.jpg
    caption: AI-generated product profile from the Product Intelligence agent

github: https://github.com/aditya2004-source/leadforge
---
