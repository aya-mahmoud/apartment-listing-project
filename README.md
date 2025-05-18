# 🏢 Apartment Listing App

This is a fullstack apartment listing application built using:

- **Frontend**: [Next.js 15](https://nextjs.org/) (React 19, Tailwind CSS 4)
- **Backend**: [NestJS 11](https://nestjs.com/) with [Sequelize](https://sequelize.org/) & PostgreSQL
- **Containerization**: Docker + Docker Compose

```
## 🗂️ Monorepo Project Structure
.
├── apartment-backend # NestJS backend (API, Sequelize, PostgreSQL)
└── apartment-listing # Next.js frontend (React, Tailwind CSS) 
```
---

## 🚀 Getting Started

### ✅ Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) >= 18
- [PostgreSQL](https://www.postgresql.org/) >= 13 (local or via Docker)
- [Docker](https://www.docker.com/) & [Docker Compose](https://docs.docker.com/compose/)
- npm or yarn

### 🧪 Local Development Setup (Non-Docker)

#### 🖥️ Backend (`apartment-backend`)

```
cd apartment-backend

# 1. Create .env file
cp .env.example .env  # or create manually with DB credentials

# 2. Install dependencies
npm install

# 3. Run database migrations
npm run db:migrate:up

# 4. Start development server
npm run start:dev
```


#### Frontend (`apartment-listing`)
```
cd apartment-listing

# 1. Install dependencies
npm install

# 2. Start development server
npm run dev
```

### 🐳 Dockerized Setup (Recommended)

Run the entire application stack (frontend, backend, and database) using Docker.

#### 📦 Build & Start Services
```
docker-compose up --build
```
This command will:

.Build both frontend and backend images

.Set up a PostgreSQL container

.Run Sequelize migrations and seeders automatically

.Start all services concurrently

#### 🔁 Rebuild After Code or Config Changes
If you make changes to source files or environment variables:
```
docker-compose down -v   # Stops and removes containers, volumes
docker-compose up --build
```
