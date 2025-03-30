# MoneyWhisper: Simple Expense Tracking

A minimal expense tracking app designed for simplicity and efficiency. Simply enter expense details like "curd for 15 rupees" and the app automatically categorizes and records it.

## Getting Started

1. Clone the repository
2. Install dependencies: `npm install`
3. Create a `.env` file based on `.env.example`
4. Run the development server: `npm run dev`

## Database Setup

### Initial Setup

1. Create a PostgreSQL database (locally or using services like Neon or Supabase)
2. Set the `DATABASE_URL` in your `.env` file

### Seeding the Database

To add the default expense categories:

```bash
# Option 1: Run with TypeScript directly (development)
npm run seed:dev

# Option 2: Build and run seed script (production)
npm run seed
```

The seed process will:
- Check if categories already exist
- Skip seeding if categories are found
- Insert all default categories with proper icons and keywords

## Usage

1. Enter an expense in the format: "Item for Amount rupees" (e.g., "Coffee for 50 rupees")
2. The app will automatically categorize your expense based on keywords
3. View your recent expenses in the app

## Features

- Automatic expense categorization using keywords
- Simple, minimal UI focused on ease of use
- Support for expense location tracking

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [``](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
