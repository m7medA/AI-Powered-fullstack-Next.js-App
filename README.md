<p align="center">
  <img src="/img/homePage.png" alt="Home Page" width="600"/>
</p>

<p align="center">
  <img src="/img/situation 1.png" alt="Scenario 1 - AI Analysis" width="600"/>
</p>

<p align="center">
  <img src="/img/situation 2.png" alt="Scenario 2 - AI Analysis" width="600"/>
</p>

# Mood – AI-Powered Mood Tracking App

Full-Stack Next.js Project  
_(Built as part of a Front-End Masters course)_

## 📌 Overview

**Mood** is a full-stack application built with **Next.js** as part of a Front-End Masters course.  
Users write a daily journal entry, and the app uses **AI** to analyze the text, detect the emotional tone, generate a short summary, and assign a numeric mood score.  
A weekly chart visualizes mood changes and helps users track how their week went.

This project added **huge value** to my learning journey.  
It pushed me to read documentation more effectively, understand tools deeply, and build a complete AI-powered full-stack experience.

---

## 🚀 Features

### ✍️ Journal CRUD

Implemented using **Next.js API Routes** + **Prisma ORM**  
Users can create, update, delete, and read their daily notes.

### 🤖 AI Mood Analysis

Powered by **LangChain** + **Gemini Model**:

- Reads and analyzes the journal entry
- Generates a summary
- Detects the mood/emotion
- Produces a numeric mood score
- Sends structured data back for storage

### 📊 Weekly Mood Chart

Visualizes mood changes over the week using **Recharts**.

### 🔐 Secure Authentication

Authentication is handled by **Clerk** as a secure third-party provider.  
I integrated Clerk with my database so that each user only sees **their own** notes.

### 🟦 Neon Database Hosting

The project uses **Neon** (serverless PostgreSQL) for production.  
Fast, scalable, and integrates perfectly with Prisma.

---

## 🧩 Tech Stack

### Frontend

- **Next.js**
- **React**
- **TailwindCSS**
- **Recharts**

### Backend

- **Next.js App Router**
- **Prisma ORM**
- **Neon PostgreSQL**

### AI

- **LangChain**
- **Gemini Model**

### Auth

- **Clerk**

---

## 🛠 Tool Explanations (Simple)

### **Prisma ORM**

A modern ORM that simplifies working with PostgreSQL.  
Instead of writing SQL manually, Prisma lets you interact with the database using clean and simple TypeScript functions.

### **LangChain**

A toolkit designed to work with Large Language Models (LLMs).  
It helps structure prompts and build AI workflows—perfect for generating summaries and detecting mood in user text.

### **Clerk**

A third-party authentication provider that handles sign-in, sessions, and security.  
I integrated Clerk with my database so all journal entries are linked to the correct user.

### **Neon**

A serverless, scalable PostgreSQL platform.  
Used for hosting the project's production database with smooth Prisma integration.

---

## 📊 How It Works

1. User writes a journal entry
2. App sends text → LangChain → Gemini Model
3. AI returns:
   - Mood label
   - Summary
   - Mood score
4. Prisma stores the data in the Neon database
5. Recharts visualizes weekly mood analytics

---

## 📷 Certificate

<p align="center">
  <img src="/img/certifcate.png" alt="Certificate" width="600"/>
</p>
