# 🚀 HireSpark AI — Your AI-Powered Career Coach 🔥

HireSpark AI is your all-in-one AI career assistant that helps job seekers and students unlock their full potential with the power of intelligent guidance.

With features like personalized career roadmaps, real-time Q&A with an AI career coach, resume analysis, and automatic cover letter generation — HireSpark AI brings your career journey to life.

---

## ✨ Features

### 🎯 AI-Powered Career Roadmaps

Receive personalized, step-by-step roadmaps tailored to your goals — whether it's becoming a software developer, data scientist, or product designer.

### 💬 Chat with AI Career Coach

Engage in dynamic conversations with our AI chatbot to get guidance on:

- Career paths
- Interview preparation
- Skills to focus on

### 📝 Resume Analyzer

Upload your resume and get AI-powered insights on:

- Strengths
- Areas for improvement

### 📨 Cover Letter Generator

Generate customized, job-ready cover letters that align with your resume and job description.

---

## 🛠 Tech Stack

| Technology      | Description                                           |
| --------------- | ----------------------------------------------------- |
| ⚡ Next.js      | Full-stack React framework                            |
| ⚛️ React        | UI development and component architecture             |
| 🔐 Clerk        | Authentication & user management,Subscription Feature |
| 🌐 Neon         | Cloud-native PostgreSQL DB                            |
| 🌀 Inngest      | Background jobs & serverless workflows                |
| 🎨 Tailwind CSS | Responsive, utility-first styling                     |

---

## 🚀 Getting Started

Follow these steps to run the project locally on your machine:

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/Rashmi-K-V/HireSparkAI.git
cd HireSparkAI
```

2️⃣ Install Dependencies

Make sure you have **Node.js** (v18 or later) installed, then run:

```bash
npm install
```

3️⃣ Configure Environment Variables

Create a .env.local file using the example file provided:

```bash
cp .env.example .env.local
```

Then open .env.local and fill in the required environment variables:

```bash
CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key
DATABASE_URL=your_neon_database_url
INNGEST_API_KEY=your_inngest_api_key
GEMINI_API_KEY=your_google_gemini_api_key
```

4️⃣ Run the Development Server

Start the app locally by running:

```bash
npm run dev
```

Now open your browser and go to:

```bash
http://localhost:3000
```
