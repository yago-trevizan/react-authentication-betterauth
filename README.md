[1]: https://www.better-auth.com/
[2]: https://github.com/
[3]: https://discord.com/

## How was it made?

This is a [Next.js](https://nextjs.org) project created with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Why was it made?

The objective of this repository is to train the use of [Better Auth][1] package.

The social providers chosen were [GitHub][2] and [Discord][3].

## Getting Started

### Install the dependencies

```bash
npm install
```

### Run the development server:

```bash
npm run dev
```

### See the result

Open [http://localhost:3000](http://localhost:3000) with your browser to interact with the system.

### How does it work?

The application consists of three pages: **SignIn**, **SignUp** and **Home**.

You can create an account typing name, email and password. Also, you can sign in with your credentials, [GitHub][2] or [Discord][3].

You must create a `.env` file on the root directory with the following variables:

- BETTER_AUTH_SECRET
- BETTER_AUTH_URL
- GITHUB_CLIENT_ID
- GITHUB_CLIENT_SECRET
- DISCORD_CLIENT_ID
- DISCORD_CLIENT_SECRET

_BETTER_AUTH_SECRET_ can be generated through the command:

```bash
openssl rand -base64 32
```

_BETTER_AUTH_URL_ is the Base URL of your app. Example:

```bash
http://localhost:3000
```

To get the remaining variables, access: [GitHub Developer Portal](https://github.com/settings/developers) and [Discord Developer Portal](https://discord.com/developers/applications).
