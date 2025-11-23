# Mood – AI-Powered Mood Tracking App

## Overview

Full-stack mood tracking application built with Next.js, where users write daily journal entries and the app uses AI (LangChain + Gemini) to analyze the text, detect emotions, generate summaries, and generate mood scores. Built as part of a Front-End Masters course, this project helped me develop a stronger understanding of documentation, full-stack architecture, and AI workflows. The app reads what you write, identifies your emotional state, assigns a weighted mood score, and visualizes how your entire week felt through a clear mood chart.

Mood is a full-stack application that allows users to track their emotions through daily journal entries.  
It enhances self-awareness by analyzing text, summarizing content, and producing numeric mood scores that are visualized over the week.

---

## Screenshots

### Home Page

<p align="center">
  <img src="/img/homePage.png" alt="Home Page" width="600"/>
</p>

### AI Analysis – Scenario 1

<p align="center">
  <img src="/img/situation 1.png" alt="AI Analysis Scenario 1" width="600"/>
</p>

### AI Analysis – Scenario 2

<p align="center">
  <img src="/img/situation 2.png" alt="AI Analysis Scenario 2" width="600"/>
</p>

---

## Features

- **Journal CRUD**: Create, read, update, and delete journal entries using Next.js API Routes and Prisma ORM.
- **AI Mood Analysis**: Uses LangChain + Gemini to read entries, detect emotional tone, generate summaries, and calculate mood scores.
- **Weekly Mood Chart**: Visualizes emotional trends over the week with Recharts.
- **Authentication**: Secure authentication via Clerk ensures each user only accesses their own data.
- **Database Hosting**: Production database hosted on Neon (serverless PostgreSQL) with seamless Prisma integration.

---

## Tech Stack

**Frontend:** Next.js, React, TailwindCSS, Recharts  
**Backend:** Next.js App Router, Prisma ORM, Neon PostgreSQL  
**AI:** LangChain, Gemini Model  
**Auth:** Clerk

---

## How It Works

1. User writes a journal entry
2. Text is processed using LangChain → Gemini
3. AI returns:
   - Mood label
   - Summary
   - Mood score
4. Prisma stores data in Neon
5. Weekly mood analytics visualized with Recharts

---

## Tools Explanation

- **Prisma ORM**: Simplifies working with PostgreSQL using TypeScript instead of raw SQL.
- **LangChain**: Toolkit for building AI workflows and text analysis pipelines.
- **Clerk**: Authentication provider handling sign-in, sessions, and user identity.
- **Neon**: Serverless, scalable PostgreSQL platform for production.

---

## Certificate

<p align="center">
  <img src="/img/certifcate.png" alt="Certificate" width="600"/>
</p>
