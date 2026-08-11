---
title: Sarathi Meeting Bot
tagline: A Chrome extension that turns a recorded Google Meet call into a Minutes of Meeting, a Requirement Gathering Sheet, and Action Points
status: featured
order: 5

problem: >
  Client requirement-gathering calls generate a lot of verbal detail that's easy to lose —
  someone has to manually write up minutes, map what was discussed back to the product, and
  track who owns what action.
objective: >
  Automatically turn a recorded Google Meet call into three ready-to-use documents — a MOM,
  a Requirement Gathering Sheet mapped to Sarathi's product areas, and Discussion/Action
  Points — without a separate "bot" joining the call.
requirements:
  - Record tab and mic audio from a Google Meet call the user is already in, via a Chrome extension, not a separate bot participant
  - Transcribe and diarize the recording locally, with no audio sent to a transcription API
  - Resolve real speaker names from the Meet UI instead of generic "Speaker 1/2" labels
  - Generate a MOM, a 4-column Requirement Gathering Sheet, and Discussion/Action Points, grounded only in what was actually said
  - Render the output as ready-to-share PDFs, auto-saved with no manual export step
solution: >
  A Manifest V3 Chrome extension captures tab and microphone audio via chrome.tabCapture and
  an offscreen document, and uploads it to a local FastAPI backend when the call ends. The
  backend transcribes with faster-whisper and diarizes with pyannote.audio, both running
  locally, aligns the result against a Meet UI-scraped speaking timeline, then uses a
  two-call extract-then-generate pattern against the Gemini API to produce the three
  documents, rendered to PDF via Playwright.
features:
  - Records the meeting the user is already in — no separate bot joins the call
  - Fully local transcription (faster-whisper) and diarization (pyannote.audio)
  - Real speaker names resolved from the Meet UI, not generic labels
  - Auto-generated MOM, Requirement Gathering Sheet, and Action Points, grounded in the transcript
  - PDF output auto-saved locally, no manual export step
  - A manual-upload fallback for processing an existing recording without the extension
tech:
  - Python
  - FastAPI
  - faster-whisper
  - pyannote.audio
  - Gemini API
  - Playwright
  - Chrome Extension (Manifest V3)
architecture: >
  A Manifest V3 Chrome extension (background service worker, offscreen document, content
  script) captures and uploads meeting audio to a local FastAPI backend. The backend runs a
  chunked, streaming pipeline: faster-whisper transcribes, pyannote.audio diarizes, segments
  are aligned and resolved to real speaker names, then a two-call Gemini prompt pattern
  extracts facts and generates the three documents, which Playwright renders to PDF.
results: >
  A working local tool backed by 85 passing automated tests, including a chunked-pipeline
  rewrite that measurably cut processing time (PDF rendering alone dropped from 8.2s to
  3.7s). It's a single-user personal tool, not a published or deployed product — the Chrome
  extension isn't on the Web Store, and it's built around one person's local setup.
contribution: >
  Designed and built the full pipeline solo — the Chrome extension's audio capture and
  speaker-timeline scraping, the FastAPI backend's chunked transcription/diarization
  pipeline, and the Gemini-based document generation and PDF rendering.

screenshots:
  - src: /images/projects/sarathi-meeting-bot/dashboard.png
    caption: Live run status showing a completed processing pipeline
  - src: /images/projects/sarathi-meeting-bot/upload-form.png
    caption: Manual upload form for processing a recording without the extension
  - src: /images/projects/sarathi-meeting-bot/generated-mom.png
    caption: A real AI-generated Minutes of Meeting document

github: https://github.com/aditya2004-source/sarathi-meeting-bot
---
