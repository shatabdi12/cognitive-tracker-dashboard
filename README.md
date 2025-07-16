# 🧠 Cognitive Tracker Dashboard
A sleek, responsive dashboard to track cognitive test scores, built with:

React + Vite

TailwindCSS

Apollo Client & GraphQL

Node.js + Express + Apollo Server

MongoDB + Mongoose

Zustand (for theme management)

## 🚀 Features
📊 Visualize scores with Line and Radar Charts

📝 Add and delete test scores (stored in MongoDB)

📅 Test History list

🌙 Light/Dark theme toggle (managed with Zustand)

🧠 Responsive UI with TailwindCSS

⚡ Real-time updates via Apollo Cache

## 📁 Project Structure
```bash
Copy
Edit
.
├── backend
│   ├── models/              # Mongoose schemas
│   ├── resolvers/           # GraphQL resolvers
│   ├── schemas/             # GraphQL typeDefs
│   ├── src/index.js         # Express + Apollo Server entry
│   └── .env                 # MongoDB connection string
├── frontend
│   ├── components/          # ThemeToggle, Dashboard, Tests, etc.
│   ├── apolloClient.js      # Apollo Client setup
│   ├── store/themeStore.js  # Zustand for theme
│   └── main.jsx             # React + ApolloProvider entry
```

## 🧑‍💻 Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/yourusername/cognitive-dashboard.git
cd cognitive-dashboard
```

### 2. Set up the backend
```bash
cd backend
npm install
```

Create a .env file inside /backend with:
```bash
MONGO_URI=your_mongodb_connection_string
```

Start the backend:
```bash
npm run dev
```

### 3. Set up the frontend
```bash
cd frontend
npm install
npm run dev
```

## ⚙️ API Overview
Query: scores
```bash
query {
  scores {
    id
    score
    date
  }
}
```

Mutation: addScore
```bash
mutation {
  addScore(score: 85, date: "2025-07-15") {
    id
    score
    date
  }
}
```

Mutation: deleteScore
```bash
mutation {
  deleteScore(id: "1") {
    id
  }
}
```

## 🌗 Theme Toggle with Zustand
Zustand is used to persist and manage light/dark mode across components.
```bash
import { useThemeStore } from '../store/themeStore';
const { theme, toggleTheme } = useThemeStore();
```
Try it out in the UI — theme updates instantly.

## 📌 Tech Stack
Frontend: React, TailwindCSS, Apollo Client, Zustand

Backend: Node.js, Express, Apollo Server, Mongoose

Database: MongoDB Atlas (or local)

Charts: Recharts

## ✅ To-Do
Authentication (JWT)

Role-based views (Admin/Patient)

Analytics insights page

Better score validation

## 📄 License
MIT — feel free to use and modify **in your own projects**.