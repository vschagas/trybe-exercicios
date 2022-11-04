import { Request, Response } from 'express';
import { Login } from '../interfaces';
import LoginService from '../services/LoginService';

export default class LoginController {
	constructor(private userService = new LoginService()) { }

	login = async (req: Request<{}, {}, Login>, res: Response) => {
		const { body } = req;
		const token = await this.userService.login(body);

		return res.status(200).json({ token })
	}
}