const errorMiddleware = (err, req, res, next) => {
	console.log('aaaaaaaa');
	const { statusCode, message } = err;
	return res.status(statusCode || 500).json({ message });
};

module.exports = errorMiddleware;