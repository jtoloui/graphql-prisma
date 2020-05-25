import { Prisma } from "prisma-binding";

import { fragmentReplacements } from "./resolvers";

const prisma = new Prisma({
	typeDefs: "src/generated/prisma.graphql",
	endpoint: process.env.PRISMA_ENDPOINT,
	secret: "thisismysecret",
	fragmentReplacements,
});

export { prisma as default };
// const createPostForUser = async (authorId, data) => {
// 	const userExist = await prisma.exists.User({
// 		id: authorId,
// 	});
// 	if (!userExist) {
// 		throw new Error("User not found!");
// 	}
// 	const post = await prisma.mutation.createPost(
// 		{
// 			data: {
// 				...data,
// 				author: {
// 					connect: {
// 						id: authorId,
// 					},
// 				},
// 			},
// 		},
// 		"{ author { id name email posts { id title published}} }"
// 	);
// 	return post.author;
// };

// // createPostForUser("ckal1d4kr009i0876f59tgbi4", {
// // 	title: "tesst",
// // 	body: "gfds",
// // 	published: true,
// // })
// // 	.then((data) => console.log(JSON.stringify(data, undefined, 2)))
// // 	.catch((err) => console.log(err));

// const updatePostForUser = async (postId, data) => {
// 	const postExists = await prisma.exists.Post({
// 		id: postId,
// 	});

// 	if (!postExists) {
// 		throw new Error("Post not found");
// 	}

// 	const post = await prisma.mutation.updatePost(
// 		{
// 			where: {
// 				id: postId,
// 			},
// 			data: {
// 				...data,
// 			},
// 		},
// 		"{ author { id  name email posts { id title published } } }"
// 	);
// 	return post.author;
// };

// // updatePostForUser("ckalafbhj00tk08768mw4iiy2", {
// // 	published: true,
// // })
// // 	.then((user) => console.log(JSON.stringify(user, undefined, 2)))
// // 	.catch((err) => console.log(err));
