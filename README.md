# 🎓 CRUD Relation File with Prisma - Fullstack

> A modern full-stack application for managing Teachers and Students with powerful relational data handling using Prisma, Next.js, and TypeScript.

[![Next.js](https://img.shields.io/badge/Next.js-16.1.0-black?style=flat-square&logo=next.js)](https://nextjs.org)
[![Prisma](https://img.shields.io/badge/Prisma-7.2.0-2D3748?style=flat-square&logo=prisma)](https://prisma.io)
[![TypeScript](https://img.shields.io/badge/TypeScript-Latest-3178C6?style=flat-square&logo=typescript)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.1.18-06B6D4?style=flat-square&logo=tailwindcss)](https://tailwindcss.com)

---

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Run database migrations
npm run migrate

# Start development server
npm run dev

# Open in browser
# http://localhost:3000
```

---

## 📊 Project Structure

```
📦 crud-relation-file-with-prisma-fullstack
│
├── 📁 src/                          # 🎨 Application Source Code
│   │
│   ├── 📁 app/                      # 🔀 Next.js App Router
│   │   ├── 📄 layout.tsx            # Root layout wrapper
│   │   ├── 📄 page.tsx              # Home page
│   │   ├── 📄 globals.css           # Global styles
│   │   │
│   │   ├── 📁 student/              # 👨‍🎓 Student Pages
│   │   │   └── 📁 create/           # Create student form
│   │   │       └── 📄 page.tsx
│   │   │
│   │   └── 📁 teacher/              # 👨‍🏫 Teacher Pages
│   │       └── 📁 create/           # Create teacher form
│   │           └── 📄 page.tsx
│   │
│   ├── 📁 components/               # 🧩 React Components
│   │   ├── 📄 AddStudentForm.tsx     # Student form component
│   │   ├── 📄 AddTeacherForm.tsx     # Teacher form component
│   │   ├── 📄 StudentCard.tsx        # Student display card
│   │   ├── 📄 ThemeToggleButton.tsx  # Dark/Light mode toggle
│   │   │
│   │   ├── 📁 Header/               # Header Section
│   │   │   └── 📄 Header.tsx
│   │   │
│   │   ├── 📁 Providers/            # Context Providers
│   │   │   ├── 📄 ThemeProvider.tsx  # Theme context setup
│   │   │   └── 📄 ToastProvider.tsx  # Toast notifications
│   │   │
│   │   └── 📁 shadcnui/             # 🎭 UI Components Library
│   │       ├── 📄 badge.tsx
│   │       ├── 📄 button.tsx
│   │       ├── 📄 card.tsx
│   │       ├── 📄 field.tsx
│   │       ├── 📄 input.tsx
│   │       ├── 📄 label.tsx
│   │       ├── 📄 select.tsx
│   │       └── 📄 separator.tsx
│   │
│   ├── 📁 lib/                      # 🔧 Utility Library
│   │   ├── 📄 db.ts                 # Database configuration
│   │   ├── 📄 formType.ts           # TypeScript form types
│   │   ├── 📄 zodSchema.ts          # Zod validation schemas
│   │   ├── 📄 utils.ts              # Utility functions
│   │   │
│   │   └── 📁 env/                  # 🔐 Environment Variables
│   │       ├── 📄 clientEnv.ts      # Client-side env validation
│   │       └── 📄 serverEnv.ts      # Server-side env validation
│   │
│   ├── 📁 server/                   # 🖥️ Server Actions
│   │   ├── 📄 createStudent.ts      # Create student mutation
│   │   └── 📄 createTeacher.ts      # Create teacher mutation
│   │
│   └── 📁 hooks/                    # 🎣 Custom React Hooks
│       └── 📄 fakerGenerator.ts     # Fake data generation
│
├── 📁 prisma/                       # 💾 Database & ORM
│   ├── 📄 schema.prisma             # Database schema definition
│   │
│   ├── 📁 migrations/               # 🔄 Database Migrations
│   │   ├── 📄 migration_lock.toml
│   │   └── 📁 20251207080357/
│   │       └── 📄 migration.sql
│   │
│   └── 📄 dev.db                    # SQLite development database
│
├── 📁 generated/                    # ⚙️ Generated Code
│   └── 📁 prisma/                   # Generated Prisma Client
│       ├── 📄 browser.ts
│       ├── 📄 client.ts
│       ├── 📄 commonInputTypes.ts
│       ├── 📄 enums.ts
│       ├── 📄 models.ts
│       ├── 📄 models/
│       │   ├── 📄 StudentTable.ts
│       │   └── 📄 TeacherTable.ts
│       └── 📁 internal/
│           ├── 📄 class.ts
│           ├── 📄 prismaNamespace.ts
│           └── 📄 prismaNamespaceBrowser.ts
│
├── 📁 public/                       # 📸 Static Assets
│   └── [image files, icons, etc.]
│
├── 📄 package.json                  # 📦 Dependencies & Scripts
├── 📄 tsconfig.json                 # ⚙️ TypeScript Configuration
├── 📄 next.config.ts                # ⚙️ Next.js Configuration
├── 📄 tailwind.config.js            # 🎨 Tailwind CSS Config
├── 📄 eslint.config.mjs             # 🔍 ESLint Configuration
├── 📄 postcss.config.mjs            # 🎨 PostCSS Configuration
├── 📄 components.json               # 🎭 Component Library Config
├── 📄 .env.example                  # 📋 Environment Example
├── 📄 README.md                     # 📖 Documentation (This file)
└── 📄 LICENSE                       # ⚖️ Project License
```

---

## 🏗️ Database Schema

```
┌─────────────────────────────────────────────────────────────┐
│                      TeacherTable                           │
├─────────────────────────────────────────────────────────────┤
│ 🔑 tId (UUID, Primary Key)                                  │
│ 📝 tFullName (String)                                       │
│ 📚 tSubject (String)                                        │
│ 🔗 tStudents → StudentTable[] (One-to-Many)                │
└─────────────────────────────────────────────────────────────┘
                          │
                    (One-to-Many)
                          │
                          ▼
┌─────────────────────────────────────────────────────────────┐
│                     StudentTable                            │
├─────────────────────────────────────────────────────────────┤
│ 🔑 sId (UUID, Primary Key)                                  │
│ 📝 sFullName (String)                                       │
│ 📧 sEmail (String, Unique)                                  │
│ ⚥ sGender (String)                                          │
│ 📞 sPhoneNumber (String, Unique)                            │
│ 🔗 teacherTable → TeacherTable (Foreign Key)               │
│ 🔗 teacherTableTId (String, References TeacherTable.tId)   │
└─────────────────────────────────────────────────────────────┘
```

---

## 📋 Key Features

✨ **Modern Stack**

- ⚡ Next.js 16 with App Router
- 🎯 TypeScript for type safety
- 🎨 Tailwind CSS for styling
- 📦 Prisma ORM for database management

🔐 **Database & Validation**

- 💾 SQLite with Prisma migrations
- ✅ Zod schema validation
- 🛡️ Type-safe form handling
- 🔄 Automatic cascading deletes/updates

🎨 **UI & UX**

- 🌓 Dark/Light theme support
- 🎭 shadcn/ui component library
- 🔔 Toast notifications
- 📱 Responsive design

🔧 **Developer Tools**

- 🔍 ESLint configuration
- 💅 Prettier code formatting
- 🧪 Faker for test data generation
- 📊 Prisma Studio for DB exploration

---

## 📦 Available Scripts

```bash
# Development
npm run dev          # 🚀 Start dev server (http://localhost:3000)

# Building
npm run build        # 🔨 Generate Prisma client & build project
npm run start        # ▶️ Start production server

# Database
npm run migrate      # 🔄 Run migrations & generate Prisma client
npm run studio      # 📊 Open Prisma Studio

# Code Quality
npm run lint        # 🔍 Run ESLint
npm run prod        # 📦 Full production build (lint + prisma + build + start)
```

---

## 🎛️ Technology Stack

| Category          | Technology           | Version |
| ----------------- | -------------------- | ------- |
| **Framework**     | Next.js              | 16.1.0  |
| **Language**      | TypeScript           | Latest  |
| **ORM**           | Prisma               | 7.2.0   |
| **Database**      | SQLite               | -       |
| **UI Framework**  | React                | 19.2.3  |
| **Styling**       | Tailwind CSS         | 4.1.18  |
| **UI Components** | shadcn/ui + Radix UI | -       |
| **Forms**         | React Hook Form      | 7.69.0  |
| **Validation**    | Zod                  | 4.2.1   |
| **Notifications** | React Toastify       | 11.0.5  |
| **Themes**        | next-themes          | 0.4.6   |
| **Icons**         | Lucide React         | 0.562.0 |
| **Testing**       | Faker.js             | 10.1.0  |
| **Code Quality**  | ESLint + Prettier    | Latest  |

---

## 🔐 Environment Variables

Copy `.env.example` to `.env` and configure:

```env
# Database
DATABASE_URL="file:./dev.db"

# Client Variables
NEXT_PUBLIC_API_URL="http://localhost:3000"

# Other configurations
```

---

## 🚀 Getting Started (Detailed)

### 1️⃣ **Clone & Install**

```bash
git clone <repository-url>
cd crud-relation-file-with-prisma-fullstack
npm install
```

### 2️⃣ **Setup Database**

```bash
npm run migrate
```

### 3️⃣ **Start Development**

```bash
npm run dev
```

### 4️⃣ **Explore Database**

```bash
npm run studio
```

### 5️⃣ **Build for Production**

```bash
npm run build
npm run start
```

---

## 📝 Features & Usage

### 👨‍🏫 Teacher Management

- ✏️ Create new teachers with name and subject
- 📚 Assign multiple students to a teacher
- 🗑️ Delete teachers (cascades to students)

### 👨‍🎓 Student Management

- ✏️ Create new students with full details
- 📧 Unique email validation
- 📞 Unique phone number validation
- 🔗 Link students to teachers
- 🗑️ Delete students independently

### 🎨 UI/UX Features

- 🌓 Toggle between dark and light modes
- 📱 Fully responsive design
- 🔔 Toast notifications for user feedback
- 🎯 Intuitive form layouts

---

## 🔧 Development Workflow

### Adding a New Feature

1. Update `prisma/schema.prisma` if needed
2. Run `npm run migrate` to sync database
3. Create components in `src/components/`
4. Add server actions in `src/server/`
5. Create routes in `src/app/`
6. Add validation schemas in `src/lib/zodSchema.ts`

### Database Changes

1. Modify `prisma/schema.prisma`
2. Run `npm run migrate`
3. A new migration will be generated automatically

---

## 🤝 Contributing

Contributions are welcome! Please:

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

---

## 📄 License

This project is licensed under the terms specified in the [LICENSE](LICENSE) file.

---

## 💡 Tips for Developers

- 🔍 Use `npm run studio` to visually manage your database
- 📊 Check `src/lib/env/` for environment variable validation
- 🎭 UI components are in `src/components/shadcnui/`
- 🔐 Server actions are isolated in `src/server/`
- 📝 Zod schemas for validation are in `src/lib/zodSchema.ts`
- 🧪 Use Faker.js from `src/hooks/fakerGenerator.ts` for test data

---

## 🐛 Troubleshooting

**Database migrations fail?**

```bash
npm run migrate -- --reset
```

**Prisma client not updated?**

```bash
npm run migrate
```

**Port 3000 already in use?**

```bash
npm run dev -- -p 3001
```

---

<div align="center">

### ⭐ If you find this project helpful, please give it a star! ⭐

**Happy Coding! 🚀✨**

</div>
