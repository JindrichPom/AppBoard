# AppBoard

A proof-of-concept family dashboard secured with Sign in with Apple, ready to deploy to Vercel
(or a similar serverless host). The app gates access to a set of launch links and can geofence
traffic to Switzerland at the edge.

## Features

- **Next.js App Router** with TypeScript and Tailwind CSS.
- **NextAuth** pre-configured for Sign in with Apple (bring your own credentials).
- **Allow list** of Apple IDs for family-only access.
- **Optional Switzerland-only geo restriction** using edge middleware.
- **Launch cards** for Home Assistant kiosk, iCloud Calendar, Microsoft 365 Calendar, and a
  placeholder internal wiki.

## Getting Started

1. Install dependencies:

   ```bash
   npm install
   ```

2. Create an `.env.local` file with the required secrets:

   ```bash
   NEXTAUTH_URL=http://localhost:3000
   NEXTAUTH_SECRET=generate-a-long-random-string

   APPLE_CLIENT_ID=com.example.appboard
   APPLE_CLIENT_SECRET=base64-or-jwt-secret-from-apple

   # Comma separated list of Apple IDs that should be able to sign in
   ALLOWED_APPLE_IDS=parent@example.com,partner@example.com

   # Optional geo restriction (defaults shown below)
   RESTRICT_TO_COUNTRY=true
   ALLOWED_COUNTRY_CODE=CH
   ```

   Follow the [NextAuth Apple provider docs](https://next-auth.js.org/providers/apple) to
   generate `APPLE_CLIENT_SECRET` and register the redirect URLs with Apple.

3. Run the development server:

   ```bash
   npm run dev
   ```

4. Deploy to Vercel (or Netlify) and copy these environment variables into the hosting
   dashboard. When deploying on Vercel the middleware reads `request.geo.country` / the
   `x-vercel-ip-country` header to enforce the Switzerland-only rule.

## Geofencing Notes

- During local development you probably want the app accessible everywhere. Set
  `RESTRICT_TO_COUNTRY=false` in `.env.local`.
- In production, combine this middleware with a Cloudflare or Vercel IP allowlist for extra
  defense in depth.

## Updating Tabs

`app/page.tsx` contains the `destinations` array. Modify or extend that list to add new
services, or replace the placeholder wiki route with a static page or CMS integration.

## Roadmap Ideas

- Integrate a flat-file CMS (e.g., Decap) for non-technical updates.
- Sync calendar previews via ICS feeds.
- Add a VPN check to auto-enable Switzerland geofence bypass for family devices.
