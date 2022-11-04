import { Router } from 'express';
import LoginController from './controllers/LoginController';
import UserController from './controllers/UserController';

const routers = Router();
const userController = new UserController();
const loginController = new LoginController();

routers.get('/health', (req, res) => {
	res.status(200).send('Up and running')
});

routers.get('/users', userController.getAll);
routers.post('/login', loginController.login);

export default routers;