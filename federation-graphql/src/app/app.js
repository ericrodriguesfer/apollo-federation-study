import { ApolloServer } from "apollo-server";
import { ApolloGateway, IntrospectAndCompose } from "@apollo/gateway";

const supergraphSdl = new IntrospectAndCompose({
  subgraphs: [
    { name: "students", url: "http://localhost:3333/graphql" },
    { name: "schools", url: "http://localhost:4444/graphql" },
  ],
});

const gateway = new ApolloGateway({
  supergraphSdl,
  __exposeQueryPlanExperimental: false,
});

const app = new ApolloServer({
  gateway,
  engine: false,
  subscriptions: false,
});

export default app;
