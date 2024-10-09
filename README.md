This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, add the following environment variables in an `.env` file in the root folder:
```./.env
NEXT_PUBLIC_PROJECT_KEY={OpenReplay Project Key}
NEXT_PUBLIC_INGEST_POINT={OpenReplay Ingest Point URL}

```
Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

## Testing OpenReplay
The website displays an iframe linked [https://github.com/nmcolome/open-replay-iframe](here). To make sure it loads correctly, run both the iframe and this website using ngrok.
Once you have the urls, replace the iframa url in the line 9 of the file `src/app/page.tsx`:
```
...
    <iframe
      title="test"
      src={REPLACE NGROK URL HERE}
      width="800"
      height="800"
      data-domain="ngrok-free.app">
    </iframe>
```

The app will run on [http://localhost:3001](http://localhost:3001). If you want to change this, modify line 6 in the `package.json` file.


This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.
