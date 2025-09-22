# MyShop — Online Store

This repository contains the MyShop web application — an online store project currently in active development. The codebase uses Laravel on the backend, Inertia.js + Vue 3 on the frontend, Tailwind CSS for styles, and standard tooling (Composer, npm).

Status
------
This project is just getting started and is actively being developed. 

Planned features
----------------
- Product catalogue: products, categories, images, descriptions, prices.
- Search and filtering: full-text search, category filters, price ranges.
- Pricing and stock management.
- Cart and checkout flow (orders, shipping, payment integration).
- Vendor and client workflows:
  - Vendors can register/manage a store and add/update products.
  - Clients can browse, add to cart, and purchase.
- User dashboard: account area with order history, profile settings, and vendor dashboard for product management.
- Admin dashboard: manage users, orders, products, and site settings.
- Internationalization (i18n) — multi-language support.
- Tests and CI: unit and feature tests, automated pipelines.

Current tech stack
------------------
- PHP (Laravel)
- Inertia.js + Vue 3
- Tailwind CSS
- Composer + npm

Quick start (local)
-------------------
1. Copy environment and install dependencies

```bash
cp .env.example .env
composer install
npm install
```

2. Generate application key and run migrations

```bash
php artisan key:generate
php artisan migrate
```

3. Build assets and run dev server

```bash
npm run dev
php artisan serve
```
