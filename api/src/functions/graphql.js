import { graphQLServerlessFunction } from '@hammerframework/hammer-api'
import { Photon } from '@generated/photon'

// Import new `schemaTypes`
import * as users from 'src/graphql/users'

const photon = new Photon()

const server = graphQLServerlessFunction({
  schemaTypes: [users],
  context: {
    photon,
  },
})

export const handler = server.createHandler()
