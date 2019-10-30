import {
  objectType,
  queryField,
  mutationField,
  stringArg,
  booleanArg,
} from 'nexus'

export const User = objectType({
  name: 'User',
  definition(t) {
    t.int('id')
    t.boolean('isAdmin')
    t.string('email')
  },
})

export const users = queryField('users', {
  type: User,
  list: true,
  resolve(_root, _args, { photon }) {
    return photon.users.findMany()
  },
})

export const createUser = mutationField('createUser', {
  type: User,
  args: {
    email: stringArg({ required: true }),
    isAdmin: booleanArg({ default: false }),
  },
  resolve(_root, { email, isAdmin }, { photon }) {
    return photon.users.create({ data: { email, isAdmin } })
  },
})
