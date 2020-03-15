# Redwood
>👉 **"This is not the Repo you are looking for"** _...most likely_. If your goal is to start building an app using RedwoodJS, you'll want to read through the [Tutorial](https://github.com/redwoodjs/tutorial) and get started from the command line:
>$ `yarn create redwood-app <directory-name>`

>**This repo is a template used by the RedwoodJS app bootstrap package 'Create Redwood App'**, which is located at [`redwood/packages/create-redwood-app/`](https://github.com/redwoodjs/redwood/tree/master/packages/create-redwood-app). If you're looking to do things like contributing to RedwoodJS development or reference Redwood's full-stack building blocks, then you're in the right place!🌲🎉

## Releases
To ensure `yarn.lock` is in sync with latest @redwoodjs packages, follow these steps:
1. confirm your local branch is up to date with master, then run `git clean -fxd`
2. update root, web/, and api/ `package.json` to latest @redwoodjs package version
3. run `yarn`
4. Commit all changes including `yarn.lock`
5. Create new release

## Development: Getting Started
Before you begin, please read the RedwoodJS [Contributor Covenant Code of Conduct](https://github.com/redwoodjs/redwood/blob/master/CODE_OF_CONDUCT.md)

Most likely, you'll need to set up a development environment linked to packages from a local clone of [`redwoodjs/redwood/packages`](https://github.com/redwoodjs/redwood/tree/master/packages). This doc will help get you started:
[Contributing to RedwoodJS](https://github.com/redwoodjs/redwood/blob/master/CONTRIBUTING.md)


### Setup

We use Yarn as our package manager:

```terminal
yarn install
```

>RedwoodJS uses yarn workspaces to separately manage `web/` and `api/`. All commands are configured to run from the root directory unless otherwise indicated.

### Running the Local Server(s)
You can run both the API and Web servers with a single command:

```terminal
yarn redwood dev
```
>The web browser opens automatically when you run `rw dev`. To disable this, edit your settings in `redwood.toml`. Set `[browser] open = true` to `false`.


You can run the servers for each of the yarn workspaces independently:

```terminal
yarn rw dev api
yarn rw dev web
```

Web Server: `http://localhost:8910`
Lambda functions: `http://localhost:8911`
Lambda proxy: `http://localhost:8910/api/functions/*`.

## Database

RedwoodJS uses [Prisma2](https://github.com/prisma/prisma2), a modern DB toolkit to query, migrate and model your database.

Prisma2 is [not ready for production](https://isprisma2ready.com) at the moment.

To create a development database:

```terminal
yarn redwood db up
```

This will read the schema definition in `api/prisma/schema.prisma` and generate a sqlite database in `api/prisma/dev.db`

If you've made changes to the schema run `yarn redwood db save` to generate a migration, and `yarn redwood db up` to apply the migration/ generate a new ORM client.
