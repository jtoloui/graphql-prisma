const users = [
	{
		id: "123",
		name: "Jamie",
		email: "jamie@example.com",
		age: 23,
	},
	{
		id: "124",
		name: "Steve",
		email: "Steve@example.com",
	},
	{
		id: "125",
		name: "Allen",
		email: "allen@example.com",
		age: 43,
	},
	{
		id: "126",
		name: "Mary",
		email: "mary@example.com",
		age: 24,
	},
];

const posts = [
	{
		id: "ABC1234",
		title: "Post 1",
		body: "Testing",
		published: true,
		author: "123",
	},
	{
		id: "ABC1235",
		title: "Post 2",
		body: "my post",
		published: true,
		author: "123",
	},
	{
		id: "ABC1236",
		title: "Post 3",
		body: "post",
		published: true,
		author: "124",
	},
	{
		id: "ABC1237",
		title: "Post 4",
		body: "hello",
		published: false,
		author: "126",
	},
];

const comments = [
	{
		id: "456",
		text: "Hello this is the first comment",
		author: "123",
		post: "ABC1234",
	},
	{
		id: "457",
		text: "great article",
		author: "125",
		post: "ABC1235",
	},
	{
		id: "458",
		text: "first comment",
		author: "124",
		post: "ABC1234",
	},
	{
		id: "459",
		text: "Nooooo",
		author: "125",
		post: "ABC1237",
	},
];

const db = {
	users,
	posts,
	comments,
};

export { db as default };
