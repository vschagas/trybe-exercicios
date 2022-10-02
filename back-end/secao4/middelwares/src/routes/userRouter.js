const { Router } = require('express');

const userRouter = Router();

const olaMiddleware = (req, res, next) => {
	console.log('OLA MUNDO');
	next();
}

userRouter.get('/users', olaMiddleware, (req, res) => {
	return res.status(200).json([{ name: 'turma21', grade: 100 }])
});

module.exports = userRouter;