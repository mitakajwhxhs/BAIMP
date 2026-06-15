# БАИМП - React + Vite сайт

Модерна версия на сайта на Българската асоциация по интермодална психотерапия с React, Vite, Tailwind CSS, React Router, Framer Motion, Lucide React и Supabase-ready архитектура.

## Стартиране

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Supabase

1. Създайте проект в Supabase.
2. Изпълнете SQL файла: `supabase/schema.sql`.
3. Добавете администратор в таблицата `admins`, като `id` трябва да е `auth.users.id`.
4. Попълнете `.env` по модела на `.env.example`.

При липсващи Supabase env променливи приложението работи в локален demo режим с `localStorage`, за да може админ панелът и формите да се тестват веднага.

## Структура

```txt
src/
  admin/
  components/
  data/
  hooks/
  lib/
  pages/
  styles/
supabase/
  schema.sql
```

Реалните портрети и изображенията за сайта са записани локално в `public/images`, а hero изображението е генерирано и записано в `src/assets/baimp-hero.png`.
