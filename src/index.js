import "@babel/polyfill";
import { GraphQLServer, PubSub } from "graphql-yoga";
import prisma from "./prisma";

import db from "./db";
import { resolvers, fragmentReplacements } from "./resolvers";

const pubsub = new PubSub();

const server = new GraphQLServer({
	typeDefs: "./src/schema.graphql",
	resolvers,
	context(request) {
		return {
			db,
			pubsub,
			prisma,
			request,
		};
	},
	fragmentReplacements,
});

const port = process.env.PORT || 4000;
server.start(
	{
		port,
	},
	() => {
		console.log("The server is up on PORT:", port);
	}
);
