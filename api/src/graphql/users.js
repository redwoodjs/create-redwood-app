import {
  objectType,
  queryField,
  mutationField,
  stringArg,
  booleanArg
} from "nexus";

export const User = objectType({
  name: "User",
  definition(t) {
    t.int("id");
    t.boolean("isAdmin");
    t.string("email");
  }
});

export const users = queryField("users1", {
  type: "User",
  nullable: true,
  resolve(_root, _args, _context) {
    return null;
  }
});

export const usersCreate = mutationField("usersCreate", {
  type: "User",
  args: {
    email: stringArg({ required: true }),
    isAdmin: booleanArg({ default: false })
  },
  resolve(_root, { email, isAdmin }, _context) {
    return null;
  }
});
