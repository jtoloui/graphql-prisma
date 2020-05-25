import { extractFragmentReplacements } from "prisma-binding";

import { Query, Mutation, Post, User, Comment, Subscription } from "./";

const resolvers = {
	Query,
	Mutation,
	Subscription,
	Post,
	User,
	Comment,
};

const fragmentReplacements = extractFragmentReplacements(resolvers);

export { resolvers as default, fragmentReplacements };
