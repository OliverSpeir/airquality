# PurpleAir Sensor Dashboard

This is a full stack web app that displays live data and logs it in a database.

## Built with NextJS, React Server Components, Prisma and Supabase

Uses RSC for Datafetching, Prisma as an ORM to interface with the PostgreSQL DB provided by Supabase. Supabase provides connection pooling via PgBouncer, which is important when using Serverless functions.

## Styled with DaisyUI and TailwindCSS

I used DaisyUI for most of the styling and I am a big fan of the library.

## Learning experience

I made this project to learn more about these technologies. I had a lot of fun doing it.

## Resources

- [React Server Components Explained](https://nextjs.org/docs/getting-started/react-essentials#server-components)
- [Prisma with Vercel](https://www.prisma.io/docs/guides/deployment/deployment-guides/deploying-to-vercel)
- [Supabase with Prisma](https://supabase.com/docs/guides/integrations/prisma)
- [DaisyUI](https://daisyui.com)
- [PgBouncer](http://www.pgbouncer.org/)