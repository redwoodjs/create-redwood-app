# Redwood
>👉 **"This is not the Repo you are looking for"** _...most likely_. If your goal is to start building an app using RedwoodJS, you'll want to read through the [Tutorial](https://github.com/redwoodjs/tutorial) and get started from the command line using  
>`yarn create redwood-app <directory-name>`.

>**This repo is a template used by the RedwoodJS app bootstap package 'Create Redwood App'**, which you can find here [`redwood/packages/create-redwood-app/`](https://github.com/redwoodjs/redwood/tree/master/packages/create-redwood-app). If you're looking to do things like contribute to RedwoodJS development or reference Redwood's full-stack building blocks, then you're in the right place!🌲🎉 

## Getting Started

### Setup

We use Yarn as our package manager. To get the dependencies installed, just do this in the root directory:

```terminal
yarn install
```

### Fire it up

```terminal
yarn redwood dev
```

Your browser should open automatically to `http://localhost:8910` to see the web app. Lambda functions run on `http://localhost:8911` and are also proxied to `http://localhost:8910/api/functions/*`.

## Development

### Database

We're using [Prisma2](https://github.com/prisma/prisma2), a modern DB toolkit to query, migrate and model your database.

Prisma2 is [not ready for production](https://isprisma2ready.com) at the moment.

To create a development database:

```terminal
yarn redwood db up
```

This will read the schema definition in `api/prisma/schema.prisma` and generate a sqlite database in `api/prisma/dev.db`

If you've made changes to the schema run `yarn redwood db save` to generate a migration, and `yarn redwood db up` to apply the migration/ generate a new ORM client.
