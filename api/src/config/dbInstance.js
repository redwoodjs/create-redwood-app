// This sets up an instance of PrismaClient to be used in your services. See
// https://github.com/prisma/prisma2/blob/master/docs/prisma-client-js/api.md#constructor
// for constructor options.

import { PrismaClient } from '@prisma/client'

export const db = new PrismaClient()
