const express = require('express');
const { getBlogPostFile, insertBlogPostFile, changeBlogPostFile } = require('../utils/readAndWriteFiles');
const fieldValidation = require('../middlewares/fieldValidation');
const valuesValidation = require('../middlewares/valuesValidation');

const routerBlogPosts = express.Router();

routerBlogPosts.get('/blog-posts',
	(req, res, next) => { console.log('1'); next() },
	(req, res, next) => { console.log('2'); next() },
	(req, res, next) => { console.log('3'); next() },
	(req, res, next) => { console.log('4'); return res.status(500).send('ERRO INTERNO') },
	(req, res, next) => { console.log('5'); next() },
	(req, res, next) => { console.log('6'); next() },
	(req, res, next) => { console.log('7'); next() },
	(req, res, next) => { console.log('8'); next() },
	(req, res, next) => { console.log('9'); next() },

	async (req, res) => {
		const posts = await getBlogPostFile();
		console.log(posts);
		return res.status(200).json(posts);
	});

routerBlogPosts.post('/blog-posts', fieldValidation, valuesValidation, async (req, res) => {
	// request -> "title", "description",	"author"
	// title > 5, description > 20, author > 2
	// response -> 201 - Created -> json -> "title", "description",	"author"

	const blogPost = req.body;

	const inserted = await insertBlogPostFile(blogPost);
	console.log('inserted', inserted);

	return res.status(201).json(blogPost);
});

routerBlogPosts.put('/blog-posts/:id', fieldValidation, valuesValidation, async (req, res) => {
	let blogPost = req.body;

	const { id } = req.params;
	blogPost = {
		...blogPost,
		updatedAt: new Date(),
	};

	const changedPost = await changeBlogPostFile(blogPost, id);
	return res.status(200).json(changedPost);
});

module.exports = routerBlogPosts;