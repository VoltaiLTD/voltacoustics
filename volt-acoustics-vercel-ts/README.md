# Volt Designs & Acoustics (Vercel + Next.js 14 + TypeScript)

## Run locally
```bash
npm install
npm run dev
# open http://localhost:3000
```

## Deploy to Vercel
- Push this folder to GitHub (ensure `package.json` is at repo root)
- Import project in Vercel → auto-detect Next.js
- Build command: `npm run build`
- Environment Variables:
  - `NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY=pk_test_or_live_here`
  - `PAYSTACK_SECRET_KEY=sk_test_or_live_here`
  - `SUPABASE_URL=https://YOUR-PROJECT.supabase.co`
  - `SUPABASE_SERVICE_ROLE=YOUR_SERVICE_ROLE_KEY`
  - *(optional)* `NODE_VERSION=18.18.0`

## Paystack Webhook (Vercel)
- Webhook URL (in Paystack Dashboard):
```
https://<your-vercel-site>.vercel.app/api/paystack-webhook
```
- GET returns `{ ok: true }` for quick checks
- POST validates signature, verifies transaction, and can insert into Supabase

## TypeScript
- `tsconfig.json` included
- Dev deps: `typescript`, `@types/react`, `@types/node`
- `next-env.d.ts` included

Generated 2025-09-18T13:35:10.758950Z
