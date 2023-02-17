import { ApolloServer } from "apollo-server-express";
import { buildSubgraphSchema } from "@apollo/federation";
import express from "express";

import "../database/index.js";
import schema from "../graphql/schema.js";
import globalResolver from "../resolvers/globalResolver.js";

const server = new ApolloServer({
  schema: buildSubgraphSchema([
    {
      typeDefs: schema,
      resolvers: globalResolver,
    },
  ]),
});

await server.start();

const app = express();

server.applyMiddleware({ app });

export default app;
