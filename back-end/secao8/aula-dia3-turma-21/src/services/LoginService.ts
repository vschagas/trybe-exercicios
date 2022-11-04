import jwt from "jsonwebtoken";
import { Login, User } from "../interfaces";
import connection from "../models/connection";
import UserModel from "../models/UserModel";

const SECRET = process.env.TOKEN || 'asijoaisjiosa';

export default class LoginService {
	model: UserModel;

	constructor() {
		this.model = new UserModel(connection);
	}

	async login(loginBody: Login) {
		const userExists: User = await this.model.getByEmailAndPassword(loginBody.email, loginBody.password);

		if (!userExists) throw new Error('User not exists');

		return this.generateToken(userExists);
	}

	generateToken(user: User) {
		type Payload = {
			id: number,
			email: string,
		}

		const payload: Payload = { id: user.id, email: user.email };

		return jwt.sign(payload, SECRET);
	}
}