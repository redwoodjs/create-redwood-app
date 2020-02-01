# Redwood

## Getting Started

### Setup

We use Yarn as our package manager. To get the dependencies installed, just do
this in the root directory:

```terminal
yarn install
```

### Fire it up

```terminal
yarn redwood dev
```

Run `yarn redwood tools open` to open your browser on `http://localhost:8910`.

Browse to `http://localhost:8910` to see the web app. Lambda functions run on
`localhost:8911` but are proxied to `localhost:8910/api/functions/*`.

## Development

### Database

We're using Prisma's [Photon ORM](https://github.com/prisma/prisma2/blob/master/docs/photon/api.md) and [Lift Migration Engine](https://github.com/prisma/prisma2/blob/master/docs/data-modeling.md).

Prisma2 is [not ready for production](https://isprisma2ready.com) at the moment.

To create a development database:

```terminal
yarn redwood db up
```

Will read the schema definition in `api/prisma/schema.prisma` and generate a
sqlite database in `api/prisma/dev.db`

If you've made changes to the schema run `yarn redwood db up` to generate a migration, and
`yarn redwood db save` to apply the migration/ generate a new ORM client.
