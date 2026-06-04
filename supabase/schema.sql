create extension if not exists pgcrypto;

create type public.booking_status as enum ('pending', 'approved', 'rejected');

create table if not exists public.admins (
  id uuid primary key references auth.users(id) on delete cascade,
  email text not null unique,
  full_name text,
  role text not null default 'admin' check (role in ('admin', 'editor')),
  created_at timestamptz not null default now()
);

create or replace function public.is_admin()
returns boolean
language sql
security definer
set search_path = public
as $$
  select exists (
    select 1
    from public.admins
    where admins.id = auth.uid()
  );
$$;

create table if not exists public.trainers (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  name text not null,
  title text,
  city text,
  image_url text,
  specialties text[] not null default '{}',
  badges text[] not null default '{}',
  short_bio text,
  bio text[] not null default '{}',
  education text[] not null default '{}',
  qualifications text[] not null default '{}',
  experience text[] not null default '{}',
  topics text[] not null default '{}',
  memberships text[] not null default '{}',
  contacts jsonb not null default '{}'::jsonb,
  sort_order integer not null default 100,
  is_featured boolean not null default false,
  is_published boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.courses (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  title text not null,
  eyebrow text,
  duration text,
  format text,
  certificate text,
  image_url text,
  summary text,
  description text[] not null default '{}',
  topics text[] not null default '{}',
  starts_at date,
  seats integer,
  price numeric(10, 2),
  sort_order integer not null default 100,
  is_featured boolean not null default false,
  is_published boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.news (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  title text not null,
  category text,
  date date,
  image_url text,
  summary text,
  content text[] not null default '{}',
  sort_order integer not null default 100,
  is_featured boolean not null default false,
  is_published boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.bookings (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  phone text not null,
  email text not null,
  trainer_id uuid references public.trainers(id) on delete set null,
  course_id uuid references public.courses(id) on delete set null,
  preferred_date date,
  message text,
  status public.booking_status not null default 'pending',
  source text not null default 'website',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.partners (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  type text,
  description text,
  website text,
  logo_url text,
  sort_order integer not null default 100,
  is_published boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.certificates (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  issuer text,
  valid_until text,
  image_url text,
  sort_order integer not null default 100,
  is_published boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.site_settings (
  key text primary key,
  value jsonb not null default '{}'::jsonb,
  is_public boolean not null default true,
  updated_at timestamptz not null default now()
);

create table if not exists public.testimonials (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  role text,
  quote text not null,
  sort_order integer not null default 100,
  is_published boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.contact_requests (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  phone text,
  message text not null,
  status public.booking_status not null default 'pending',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

alter table public.admins enable row level security;
alter table public.trainers enable row level security;
alter table public.courses enable row level security;
alter table public.news enable row level security;
alter table public.bookings enable row level security;
alter table public.partners enable row level security;
alter table public.certificates enable row level security;
alter table public.site_settings enable row level security;
alter table public.testimonials enable row level security;
alter table public.contact_requests enable row level security;

create policy "Admins can read admins" on public.admins
  for select using (public.is_admin() or id = auth.uid());

create policy "Public can read published trainers" on public.trainers
  for select using (is_published = true);
create policy "Admins can manage trainers" on public.trainers
  for all using (public.is_admin()) with check (public.is_admin());

create policy "Public can read published courses" on public.courses
  for select using (is_published = true);
create policy "Admins can manage courses" on public.courses
  for all using (public.is_admin()) with check (public.is_admin());

create policy "Public can read published news" on public.news
  for select using (is_published = true);
create policy "Admins can manage news" on public.news
  for all using (public.is_admin()) with check (public.is_admin());

create policy "Anyone can create bookings" on public.bookings
  for insert with check (true);
create policy "Admins can manage bookings" on public.bookings
  for all using (public.is_admin()) with check (public.is_admin());

create policy "Public can read published partners" on public.partners
  for select using (is_published = true);
create policy "Admins can manage partners" on public.partners
  for all using (public.is_admin()) with check (public.is_admin());

create policy "Public can read published certificates" on public.certificates
  for select using (is_published = true);
create policy "Admins can manage certificates" on public.certificates
  for all using (public.is_admin()) with check (public.is_admin());

create policy "Public can read public settings" on public.site_settings
  for select using (is_public = true);
create policy "Admins can manage settings" on public.site_settings
  for all using (public.is_admin()) with check (public.is_admin());

create policy "Public can read published testimonials" on public.testimonials
  for select using (is_published = true);
create policy "Admins can manage testimonials" on public.testimonials
  for all using (public.is_admin()) with check (public.is_admin());

create policy "Anyone can create contact requests" on public.contact_requests
  for insert with check (true);
create policy "Admins can manage contact requests" on public.contact_requests
  for all using (public.is_admin()) with check (public.is_admin());

insert into storage.buckets (id, name, public)
values
  ('trainer-photos', 'trainer-photos', true),
  ('course-assets', 'course-assets', true),
  ('news-assets', 'news-assets', true),
  ('certificates', 'certificates', true),
  ('site-assets', 'site-assets', true)
on conflict (id) do nothing;

create policy "Public can read BAIMP storage assets" on storage.objects
  for select using (bucket_id in ('trainer-photos', 'course-assets', 'news-assets', 'certificates', 'site-assets'));

create policy "Admins can upload BAIMP storage assets" on storage.objects
  for insert to authenticated
  with check (bucket_id in ('trainer-photos', 'course-assets', 'news-assets', 'certificates', 'site-assets') and public.is_admin());

create policy "Admins can update BAIMP storage assets" on storage.objects
  for update to authenticated
  using (bucket_id in ('trainer-photos', 'course-assets', 'news-assets', 'certificates', 'site-assets') and public.is_admin())
  with check (bucket_id in ('trainer-photos', 'course-assets', 'news-assets', 'certificates', 'site-assets') and public.is_admin());

create policy "Admins can delete BAIMP storage assets" on storage.objects
  for delete to authenticated
  using (bucket_id in ('trainer-photos', 'course-assets', 'news-assets', 'certificates', 'site-assets') and public.is_admin());
