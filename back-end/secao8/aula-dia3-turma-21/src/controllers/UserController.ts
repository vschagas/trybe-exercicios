import { Request, Response } from 'express';
import UserService from '../services/UserService';

export default class UserController {
	constructor(private userService = new UserService()) { }

	public getAll = async (_req: Request, res: Response) => {
		const users = await this.userService.getAll();
		res.status(200).json(users);
	};

}