const valuesValidation = (req, res, next) => {
	const blogPost = req.body;
	const isValid = Object.values(blogPost).every((value) => value.length >= 5);

	if (!isValid) {
		return res.status(422).json({ message: 'Invalid attributes' });
	}

	next();
}

module.exports = valuesValidation;