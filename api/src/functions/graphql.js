import { graphQLServerlessFunction } from "@hammerframework/hammer-api";

import { db } from "../lib";

const server = graphQLServerlessFunction({});
export const handler = server.createHandler();
