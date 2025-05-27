# 🚀 NukeGuy's Handpicked Boilerplate

<p align="center">
  <img src="./public/preview.png" width="800" />
</p>


A modern, production-ready Next.js 15 boilerplate with Tailwind 40, Material, and supercool libraries for 2025 development. This boilerplate is designed to save you hours of setup time and provide a solid foundation for any project.

## ✨ Features

### 🎨 **UI & Styling**

- **Next.js 15** - Latest version with App Router
- **Material UI v6** - Complete component library with custom black/white theme
- **Tailwind CSS v4** - Utility-first CSS framework (configured to work with MUI)
- **Poppins Font** - Modern, clean typography
- **Dark/Light Mode** - Seamless theme switching with next-themes
- **Framer Motion** - Smooth animations and transitions

### 🗄️ **Database & Backend**

- **Supabase** - Complete backend-as-a-service with authentication
- **Prisma** - Type-safe database ORM with PostgreSQL
- **Pre-configured Models** - User, Post, and Settings models ready to use

### 🛠️ **Developer Experience**

- **TypeScript Ready** - Easy to convert to TypeScript
- **ESLint** - Code linting and formatting
- **React Hook Form** - Performant forms with easy validation
- **Zod** - Schema validation
- **Custom Hooks** - Useful hooks like useLocalStorage

### 🎯 **Additional Libraries**

- **Lucide React** - Beautiful, customizable icons
- **Material Icons** - Google's Material Design icons
- **Next Themes** - Perfect dark mode implementation

## 🚀 Quick Start

### 1. Clone the Repository

```bash
git clone https://github.com/nuk3guy/nukeguy-boilerplate.git
cd nukeguy-boilerplate
npm install
```

### 2. Environment Setup

Copy the `.env` file and update with your credentials:

```bash
cp nukeguy.env .env.local
```

Update the following variables in `.env.local`:

#### Database (Choose one)

```env
# For PostgreSQL (recommended for production)
DATABASE_URL="postgresql://username:password@localhost:5432/your_db_name?schema=public"

# For local development with SQLite
# DATABASE_URL="file:./dev.db"
```

#### Supabase

Get these from your [Supabase Dashboard](https://supabase.com/dashboard):

```env
NEXT_PUBLIC_SUPABASE_URL="https://your-project-id.supabase.co"
NEXT_PUBLIC_SUPABASE_ANON_KEY="your-anon-key-here"
SUPABASE_SERVICE_ROLE_KEY="your-service-role-key-here"
```

### 3. Database Setup

```bash
# Generate Prisma client
npx prisma generate

# Run database migrations (if using PostgreSQL)
npx prisma db push

# Or for development with SQLite
# npx prisma migrate dev --name init
```

### 4. Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see your application!

## 📁 Project Structure

```
nukeguy-boilerplate/
├── prisma/
│   └── schema.prisma          # Database schema
├── public/                    # Static assets
├── src/
│   ├── app/
│   │   ├── globals.css        # Global styles with Poppins font
│   │   ├── layout.js          # Root layout with theme provider
│   │   └── page.js            # Landing page
│   ├── components/
│   │   ├── ThemeProvider.js   # Theme context provider
│   │   └── ThemeToggle.js     # Dark/light mode toggle
│   ├── hooks/
│   │   └── useLocalStorage.js # Local storage hook
│   └── lib/
│       ├── prisma.js          # Prisma client configuration
│       ├── supabase.js        # Supabase client configuration
│       └── theme.js           # Material UI theme configuration
├── .env                       # Environment variables template
├── tailwind.config.js         # Tailwind configuration
└── package.json
```

## 🎨 Theme Customization

The boilerplate uses a custom black and white theme:

- **Light Mode**: White background with black components
- **Dark Mode**: Black background with white components
- **Font**: Poppins (300-900 weights)

### Customizing Colors

Edit `src/lib/theme.js` to modify the color scheme:

```javascript
// Light theme
primary: {
  main: '#000000',  // Change primary color
  // ...
}

// Dark theme
primary: {
  main: '#ffffff',  // Change primary color
  // ...
}
```

## 🗄️ Database Models

### Pre-configured Models

#### User Model

```prisma
model User {
  id        String   @id @default(cuid())
  email     String   @unique
  name      String?
  avatar    String?
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
  posts     Post[]
}
```

#### Post Model

```prisma
model Post {
  id        String   @id @default(cuid())
  title     String
  content   String?
  published Boolean  @default(false)
  authorId  String
  author    User     @relation(fields: [authorId], references: [id])
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}
```

## 🔧 Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npx prisma studio    # Open Prisma Studio (database GUI)
npx prisma generate  # Generate Prisma client
npx prisma db push   # Push schema changes to database
```

## 📦 Key Dependencies

| Package         | Version | Purpose           |
| --------------- | ------- | ----------------- |
| Next.js         | ^15.0.0 | React framework   |
| React           | ^18.0.0 | UI library        |
| Material UI     | ^6.0.0  | Component library |
| Tailwind CSS    | ^4.0.0  | Utility CSS       |
| Supabase        | Latest  | Backend service   |
| Prisma          | Latest  | Database ORM      |
| Framer Motion   | Latest  | Animations        |
| React Hook Form | Latest  | Form handling     |
| Zod             | Latest  | Schema validation |
| Next Themes     | Latest  | Theme switching   |

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Add your environment variables in Vercel dashboard
4. Deploy!

### Other Platforms

This boilerplate works with any platform that supports Next.js:

- Netlify
- Railway
- Heroku
- AWS Amplify

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License.

## 🙏 Acknowledgments

- Built with love for the developer community
- Inspired by modern web development best practices
- Special thanks to all the amazing open-source projects used

---

**Happy coding! 🎉**

_If this boilerplate saved you time, consider giving it a ⭐ on GitHub!_
