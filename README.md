# Perks App

This is a referral program application built using Next.js. I've used Next Auth for user authentication and connected a database (MongoDB) to store the referral data. This application encourages user referrals and tracks conversions in the form of credits.

## How it works

- Each new user gets their unique referral code after they sign up to this application.
- The unique code can be shared with other people using "Share with SMS" button on the "Dashboard" page.
- Once other people start signing up to this application using the shared "referral code" the referrer gets 100 credits.
- At the moment there is no limit to the number of referrals that can sign up using a given referral code.

## Getting Started

### Database

1. This project utilises a free instance of MongoDB. Please sign up at <https://www.mongodb.com> and copy the connection string.
2. Update the MONGODB_URI .env file with the connection string of your database. Make sure the URL contains the name of your database at the end of the string or manually add the database name at the end of the connection string.
3. Run the following command in the project's root directory to setup the necessary schema.

bash ``````

npx prisma db push

``````

Once the database is setup, you can now run the project locally by following the steps below.

### Setup the project locally

1. Clone the project using git clone git@github.com:realkewal/perks-app.git
2. Run npm install to install all the dependencies
3. Make sure to update the necessary environment variables in the .env file.
4. Run "npm run dev" in the root directory to start the development server.
5. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Design

This application uses Tailwind CSS for styling React components and all pages.

## Security

- The application uses primarily "session" provided by "next-auth".
- Middleware protects any sensitve pages e.g. /dashboard from being visble without logging in.
- The /api routes have been secured using "getServerSession" provided by "next-auth" and returns a "401 Unauthorized" error to prevent unauthorized access. 
- The user session is based on a JWT token.
- Password has been hashed using "bcryptjs".

## Decisions and tradeoffs

1. For the simplicity of the project I have not placed any limitations to the number of signups.
2. There's no limitation on the "credits" that can be earned.
3. Some components can be better encapsulated and extracted itno it's own reusable components.
4. Simple email and password authentication is used. Other providers such as google, facebook, etc. could have been added if this was a bigger project.
5. Tests do not provide maximum coverage at this stage.

## Testing

- This application uses "Playwright" for e2e tests.
- Unit tests are not implemented at this stage.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
