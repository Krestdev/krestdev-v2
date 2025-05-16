# 🌐 KrestDev Website

This is the official website for **KrestDev**, a digital agency specializing in custom web and mobile solutions. Built with [Next.js](https://nextjs.org), this project showcases our services, past work, and provides a direct contact point for clients across the globe.

---

## 🚀 Tech Stack

- **Next.js 14** – Framework for building modern web apps
- **TypeScript** – Type-safe development
- **Tailwind CSS** – Utility-first styling
- **shadcn/ui** – Accessible and customizable UI components
- **next-intl** – Internationalization and localization

---

## 🧑‍💻 Getting Started

To run the project locally:

```bash
npm install
touch .env # Make sure to initialize NEXT_PUBLIC_EMAIL & NEXT_PUBLIC_PASSWORD for the contact API
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```
Once the dev server is running, open [http://localhost:3000](http://localhost:3000) to view the site.

You can start editing the page by modifying
```bash
cd app/page.tsx
```

## 🌍 Internationalization

This project uses **next-intl** for managing multiple languages. You’ll find translation files inside the `/messages` directory.

## Learn More

Here are some resources to help you get familiar with the tech stack:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Tailwind CSS Docs](https://tailwindcss.com/docs/styling-with-utility-classes) – Get up to speed with utility-first CSS.
- [Shadcn/ui Docs](https://ui.shadcn.com/docs) – Explore ready-made UI components.
- [Next-intl Docs](https://next-intl.dev/docs/getting-started/app-router/without-i18n-routing) - Manage multilingual support effectively.

## Working on this project

Before contributing:
1. Create your own branch from *main*:
```bash
git checkout -b your-feature-name
```
2. Make your changes and commit regularly.
3. Open a pull request to merge your branch into *main*.
[!WARNING] **Do not push directly to main** – all contributions must go through pull requests.

Have a great time building with us! 💻🚀
